import React from 'react';
import { ArrowDown } from 'lucide-react';
import { FormattedMathText } from './FormattedMathText';

interface StandingMathRendererProps {
  expression: string;
  subResult?: string;
  className?: string;
  title?: string;
  showColumnOp?: boolean;
}

const UNIT_DENOM_REGEX = /^(s²?|h|min|mol|L|kg|g|m|cm|mm|m³|cm³|m²|cm²|rad|an|ans|j|kWh|V|A|W|N|J|K)$/i;
const PROSE_WORD_REGEX = /\b(en|de|du|des|la|le|les|un|une|et|ou|par|pour|avec|sur|dans|est|sont|donc|car|soit|si|qui|que|pas|plus|fois|divisé)\b/i;

/**
 * Helper to render vertical fractions (numérateur en haut, barre horizontale, dénominateur en bas)
 * when a string contains genuine numeric/algebraic fractions like "15 / 20" or "(a + b) / (c + d)",
 * while keeping physical units (m/s, mol/L, g/mol, km/h) and subscripted ratios (t_1/2) inline.
 */
const renderWithVerticalFractions = (text: string): React.ReactNode => {
  if (!text.includes('/') || text.includes('//') || text.includes('http')) {
    return <FormattedMathText text={text} />;
  }

  const hasFractionCandidate =
    /\d+\s*\/\s*\d+/.test(text) || /\([^()\n]+\)\s*\/\s*(?:\([^()\n]+\)|[0-9a-zA-Zα-ωΑ-Ω₀-₉π]+)/.test(text);
  if (!hasFractionCandidate) {
    return <FormattedMathText text={text} />;
  }

  try {
    const rx =
      /(\([^()\n]+\)|[0-9]+(?:[.,][0-9]+)?|[0-9a-zA-Zα-ωΑ-Ωπ]+(?:[\^_](?:\{[^}]+\}|\([^)]+\)|[A-Za-z0-9+-]+))?(?:\s*[×\*]\s*[0-9a-zA-Zα-ωΑ-Ωπ]+(?:[\^_](?:\{[^}]+\}|\([^)]+\)|[A-Za-z0-9+-]+))?)*)\s*\/\s*(\([^()\n]+\)|[0-9]+(?:[.,][0-9]+)?|[0-9a-zA-Zα-ωΑ-Ωπ]+(?:[\^_](?:\{[^}]+\}|\([^)]+\)|[A-Za-z0-9+-]+))?(?:\s*[×\*]\s*[0-9a-zA-Zα-ωΑ-Ωπ]+(?:[\^_](?:\{[^}]+\}|\([^)]+\)|[A-Za-z0-9+-]+))?)*)/g;

    const parts: React.ReactNode[] = [];
    let m: RegExpExecArray | null;
    let curr = 0;
    let matchedFraction = false;

    while ((m = rx.exec(text)) !== null) {
      const charBefore = m.index > 0 ? text[m.index - 1] : '';
      const rawNum = m[1].trim();
      const rawDen = m[2].trim();
      const num = rawNum.replace(/^\(|\)$/g, '').trim();
      const den = rawDen.replace(/^\(|\)$/g, '').trim();

      // Skip subscripted ratios (e.g. t_1/2), physical unit denominators (10 m/s, 2 g/mol), or prose words
      const isSubscripted = charBefore === '_' || charBefore === '{';
      const isUnitDenom = UNIT_DENOM_REGEX.test(den);
      const hasProse = PROSE_WORD_REGEX.test(num) || PROSE_WORD_REGEX.test(den);
      const isSimpleDateLike = /^\d{1,2}$/.test(num) && /^\d{4}$/.test(den) && Number(den) >= 1900;

      if (isSubscripted || isUnitDenom || hasProse || isSimpleDateLike || !num || !den) {
        continue;
      }

      matchedFraction = true;
      if (m.index > curr) {
        parts.push(<FormattedMathText key={`txt-${curr}`} text={text.substring(curr, m.index)} />);
      }
      parts.push(
        <span
          key={`frac-${m.index}`}
          className="inline-flex flex-col items-center justify-center align-middle mx-1 px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 shadow-xs"
        >
          <span className="text-[11px] sm:text-xs font-bold text-amber-300 border-b-2 border-amber-400/90 pb-0.5 px-1 text-center w-full">
            <FormattedMathText text={num} />
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-sky-300 pt-0.5 px-1 text-center w-full">
            <FormattedMathText text={den} />
          </span>
        </span>
      );
      curr = rx.lastIndex;
    }

    if (!matchedFraction) {
      return <FormattedMathText text={text} />;
    }

    if (curr < text.length) {
      parts.push(<FormattedMathText key="txt-end" text={text.substring(curr)} />);
    }
    return <span className="inline-flex items-center flex-wrap gap-1">{parts}</span>;
  } catch {
    return <FormattedMathText text={text} />;
  }
};

/**
 * Extracts operands for a vertical column operation (opération posée debout)
 * ONLY when the arithmetic expression is purely numeric (never symbolic calculus/algebra).
 */
interface ColumnOp {
  num1: string;
  num2: string;
  operator: '+' | '-' | '×' | '*' | '÷';
  result?: string;
}

const extractColumnOp = (expr: string, sub?: string): ColumnOp | null => {
  const target = sub && sub.includes('=') ? sub : expr;

  // Skip symbolic, calculus, vector, chemical, or multi-line expressions
  if (
    /➔|→|⇌|\[|\]|\{|\}|∫|∑|∏|≡|∀|∃|∧|∨|∈|⃗|_|\^/.test(target) ||
    /\b(ln|exp|lim|sin|cos|tan|log|arg|Cov|PGCD|PPCM|dx|dt|du|rad)\b/i.test(target)
  ) {
    return null;
  }

  // Strip unit suffixes only when preceded by digit/space and at boundary
  const withoutUnits = target
    .replace(
      /(?<=[\d\s])(F CFA|kWh|Wh|cm³|cm²|m³|m²|g\/cm³|kg\/m³|N\/kg|km\/h|m\/s|g\/L|mol\/L|g\/mol|mA|kΩ|kV|hPa|Pa|cm|km|Ω|δ|°|[VAWNgLm])(?=\s|[\+\-=×\*÷]|$)/g,
      ''
    )
    .trim();

  // Strip optional leading LHS identifier like "A = " or "Total = "
  const rhsCandidate = withoutUnits.replace(/^[A-Za-zÀ-ÿ0-9'’\s]+\s*=\s*/, '').trim();
  const checkStr = rhsCandidate && /[\+\-×\*÷]/.test(rhsCandidate) ? rhsCandidate : withoutUnits;

  // Reject if any letters remain (algebraic variables or prose)
  if (/[A-Za-zÀ-ÿα-ωΑ-Ω]/.test(checkStr)) return null;

  const opMatch = checkStr.match(
    /^([\d\s,\.]+)\s*([\+\-×\*÷])\s*([\d\s,\.]+)(?:\s*=\s*([\d\s,\.\+\-]+))?$/
  );
  if (!opMatch) return null;

  const num1 = opMatch[1].trim();
  const operator = (opMatch[2] === '*' ? '×' : opMatch[2]) as '+' | '-' | '×' | '*' | '÷';
  const num2 = opMatch[3].trim();
  const result = opMatch[4]?.trim();

  if (!/\d/.test(num1) || !/\d/.test(num2)) return null;

  return { num1, num2, operator, result };
};

/**
 * Parses a chained equation into vertical lines (cascade debout)
 * e.g. "A = 1 400 + 1 800 = 3 200" ->
 * Line 1: "A = 1 400 + 1 800"
 * Line 2: "= 3 200"
 */
const parseVerticalLines = (expression: string): string[] => {
  if (!expression) return [];

  // Check if expression already has explicit newlines or pipes
  if (expression.includes('\n')) {
    return expression.split('\n').map((l) => l.trim()).filter(Boolean);
  }
  if (expression.includes('|')) {
    return expression.split('|').map((l) => l.trim()).filter(Boolean);
  }

  // If it's a chained equality: "Left = Mid = Right"
  if (expression.includes('=')) {
    const parts = expression.split('=').map((p) => p.trim()).filter(Boolean);

    if (parts.length > 2) {
      // E.g. ["A", "1 400 + 1 800", "3 200"] or ["Aire", "8 × 5", "40 cm²"]
      const varName = parts[0];
      const lines: string[] = [];

      // Line 1: Var = Part 1
      lines.push(`${varName} = ${parts[1]}`);

      // Subsequent lines
      for (let i = 2; i < parts.length; i++) {
        lines.push(`= ${parts[i]}`);
      }
      return lines;
    } else if (parts.length === 2) {
      // E.g. "A = 15 + 6" or "180 - 120 = 60"
      // If the right side has an operator or can be split
      return [expression];
    }
  }

  return [expression];
};

export const StandingMathRenderer: React.FC<StandingMathRendererProps> = ({
  expression,
  subResult,
  className = '',
  title,
  showColumnOp = true,
}) => {
  const lines = parseVerticalLines(expression);
  const columnOp = showColumnOp ? extractColumnOp(expression, subResult) : null;
  const isMultiLine = lines.length > 1;

  return (
    <div className={`space-y-3 rounded-2xl bg-slate-950/90 border-2 border-emerald-500/40 p-3 sm:p-4 shadow-xl ${className}`}>
      {/* Header bar indicating DEBOUT format */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] font-bold text-slate-400">
        <div className="flex items-center gap-1.5 text-amber-300">
          <span className="text-sm">📐</span>
          <span className="uppercase tracking-wider">
            {title ? <FormattedMathText text={title} /> : 'Présentation Debout (En Colonne CIAM Gabon)'}
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
          ✓ Non couché
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        {/* LEFT / MAIN COLUMN : Vertical Cascade (Debout, une étape par ligne avec flèches) */}
        <div className={`${columnOp ? 'md:col-span-8' : 'md:col-span-12'} flex flex-col justify-center rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 sm:p-4 shadow-inner`}>
          <div className="text-[10px] uppercase font-bold text-slate-400 mb-2 flex items-center gap-1">
            <ArrowDown className="w-3 h-3 text-amber-400" />
            <span>Rédaction en cascade (= bien alignés) :</span>
          </div>

          <div className="space-y-2 font-mono">
            {lines.map((line, idx) => {
              const isLast = idx === lines.length - 1 && isMultiLine;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2 text-xs sm:text-sm font-black transition-all ${
                    isLast
                      ? 'text-emerald-300 bg-emerald-950/70 p-2 rounded-xl border border-emerald-500/50 shadow-md'
                      : 'text-white pl-1'
                  }`}
                >
                  {idx > 0 ? (
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 shrink-0">
                      <ArrowDown className="w-3 h-3 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-5 shrink-0 flex items-center justify-center text-slate-500 font-sans text-[10px] font-bold">
                      1.
                    </div>
                  )}

                  <div className="flex-1 break-words">
                    {renderWithVerticalFractions(line)}
                  </div>

                  {isLast && (
                    <span className="text-[10px] uppercase tracking-wider font-sans font-bold bg-emerald-400 text-slate-950 px-2 py-0.5 rounded-md shrink-0 shadow-xs">
                      Résultat
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sub result callout if present */}
          {subResult && (
            <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
              <span className="text-slate-400 flex items-center gap-1">
                <span>⚡</span> Calcul intermédiaire :
              </span>
              <span className="font-mono font-bold text-amber-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                {renderWithVerticalFractions(subResult)}
              </span>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (IF APPLICABLE) : Opération Arithmétique Posée Debout (En Colonne d'écolier) */}
        {columnOp && (
          <div className="md:col-span-4 rounded-xl bg-slate-900 border-2 border-amber-500/30 p-3 flex flex-col justify-between shadow-inner">
            <div className="text-[10px] uppercase font-bold text-amber-300 border-b border-slate-800 pb-1 flex items-center justify-between">
              <span>Opération Posée Debout :</span>
              <span className="text-slate-400">Cahier Tle C</span>
            </div>

            {/* Notebook grid style box (Style cahier quadrillé Seyès) */}
            <div className="my-2 p-3 rounded-lg bg-amber-50/5 border border-amber-500/20 font-mono text-sm sm:text-base font-black flex flex-col items-end pr-6 pl-3 py-2 space-y-0.5 relative text-amber-200">
              {/* Top operand */}
              <div className="tracking-widest">
                {columnOp.num1}
              </div>

              {/* Bottom operand with operator on the left */}
              <div className="flex items-center justify-end w-full gap-2 tracking-widest border-b-2 border-amber-400/80 pb-1">
                <span className="text-amber-400 font-black text-base">{columnOp.operator}</span>
                <span>{columnOp.num2}</span>
              </div>

              {/* Calculated Result */}
              {columnOp.result && (
                <div className="pt-1 text-emerald-400 tracking-widest font-black text-base">
                  {columnOp.result}
                </div>
              )}
            </div>

            <div className="text-[9px] text-center text-slate-400 italic">
              « Pose toujours tes opérations debout en colonne sur ton brouillon ! »
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
