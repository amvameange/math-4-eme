import React from 'react';

export interface MathSegment {
  type: 'text' | 'sub' | 'sup';
  value: string;
}

const URL_REGEX = /(https?:\/\/[^\s]+)/g;

const UNICODE_SUB_MAP: Record<string, string> = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
  '₊': '+',
  '₋': '-',
  '₌': '=',
  '₍': '(',
  '₎': ')',
  'ₐ': 'a',
  'ₑ': 'e',
  'ₕ': 'h',
  'ᵢ': 'i',
  'ⱼ': 'j',
  'ₖ': 'k',
  'ₗ': 'l',
  'ₘ': 'm',
  'ₙ': 'n',
  'ₒ': 'o',
  'ₚ': 'p',
  'ᵣ': 'r',
  'ₛ': 's',
  'ₜ': 't',
  'ᵤ': 'u',
  'ᵥ': 'v',
  'ₓ': 'x',
  'ᵦ': 'β',
  'ᵧ': 'γ',
};

const UNICODE_SUP_MAP: Record<string, string> = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  '⁺': '+',
  '⁻': '-',
  '⁼': '=',
  '⁽': '(',
  '⁾': ')',
  'ⁿ': 'n',
  'ⁱ': 'i',
  'ᵀ': 'T',
  'ᴬ': 'A',
  'ᴴ': 'H',
  'ᵖ': 'p',
};

const UNICODE_SUB_CHAR_CLASS = Object.keys(UNICODE_SUB_MAP).join('');
const UNICODE_SUP_CHAR_CLASS = Object.keys(UNICODE_SUP_MAP).join('');
const UNICODE_SCRIPT_SPLIT_RX = new RegExp(
  `([${UNICODE_SUB_CHAR_CLASS}]+(?:/[${UNICODE_SUB_CHAR_CLASS}]+)?|[${UNICODE_SUP_CHAR_CLASS}]+)`,
  'g'
);

/**
 * Normalizes rare arrows/bars/combining placements so Android WebView never falls back to tofu boxes.
 */
export function normalizeMathText(input: string): string {
  if (!input) return input;
  return input
    // Replace rare supplemental arrows / dingbats unsupported on stock Android fonts
    .replace(/\u2794/g, '→')
    .replace(/\u27F9/g, '⇒')
    .replace(/\u27FA/g, '⇔')
    .replace(/\u27F7/g, '↔')
    // Decompose precomposed barred/hatted math letters so they render identically to x̄ / M̂
    .replace(/ȳ/g, 'y\u0304')
    .replace(/ū/g, 'u\u0304')
    .replace(/ŷ/g, 'y\u0302')
    // Replace paired ASCII norm bars ||v⃗|| with single Unicode norm delimiter ‖v⃗‖
    .replace(/\|\|([^|\n]{1,36}?)\|\|/g, '‖$1‖')
    // Clean ASCII boxplot dashes if present
    .replace(/\|---/g, '—')
    .replace(/---\|/g, '—')
    // Hoist vector combining arrow before subscripts like MA_i⃗, GA_i⃗, U_C⃗, n₁⃗, F1⃗ (keep t_u⃗ intact)
    .replace(
      /(?<!t)(_[A-Za-z0-9]+|[₀-₉]+)\u20d7/g,
      '\u20d7$1'
    )
    .replace(/\b([FP])([12])\u20d7/g, '$1\u20d7_$2');
}

function convertUnicodeScripts(text: string): MathSegment[] {
  if (!text) return [];
  const out: MathSegment[] = [];
  let last = 0;
  UNICODE_SCRIPT_SPLIT_RX.lastIndex = 0;
  let m: RegExpExecArray | null;

  while ((m = UNICODE_SCRIPT_SPLIT_RX.exec(text)) !== null) {
    if (m.index > last) {
      out.push({ type: 'text', value: text.slice(last, m.index) });
    }
    const token = m[0];
    const firstChar = token[0];
    if (UNICODE_SUB_MAP[firstChar]) {
      const mapped = [...token].map((c) => UNICODE_SUB_MAP[c] || c).join('');
      out.push({ type: 'sub', value: mapped });
    } else {
      const mapped = [...token].map((c) => UNICODE_SUP_MAP[c] || c).join('');
      out.push({ type: 'sup', value: mapped });
    }
    last = UNICODE_SCRIPT_SPLIT_RX.lastIndex;
  }
  if (last < text.length) {
    out.push({ type: 'text', value: text.slice(last) });
  }
  return out;
}

/**
 * Tokenizes mathematical & chemical strings containing:
 * - braced subscripts/superscripts: u_{n+1}, E_{c,max}, e^{iθ}, 10^{-3}
 * - parenthesized superscripts/subscripts: e^(iθ), (1-p)^(n-k), u_(n+1)
 * - compact subscripts/superscripts: u_n, U_G, x_0, C_n^p, t_1/2, x^2, 10^-3, e^x
 * - Unicode subscripts/superscripts: ₀-₉, ⁰-⁹, ⁺, ⁻, ₙ, ₓ, ᵧ, etc.
 */
export function parseMathSegments(input: string): MathSegment[] {
  if (!input) return [];
  const normalized = normalizeMathText(input);

  const rawSegments: MathSegment[] = [];
  if (!normalized.includes('_') && !normalized.includes('^')) {
    rawSegments.push({ type: 'text', value: normalized });
  } else {
    const urlParts = normalized.split(URL_REGEX);

    for (const chunk of urlParts) {
      if (!chunk) continue;
      if (/^https?:\/\//.test(chunk)) {
        rawSegments.push({ type: 'text', value: chunk });
        continue;
      }

      let i = 0;
      let textBuffer = '';

      const flushText = () => {
        if (textBuffer) {
          rawSegments.push({ type: 'text', value: textBuffer });
          textBuffer = '';
        }
      };

      while (i < chunk.length) {
        const ch = chunk[i];
        const prev = i > 0 ? chunk[i - 1] : '';
        const hasAttachedBase =
          i > 0 &&
          !/\s/.test(prev) &&
          prev !== '(' &&
          prev !== '[' &&
          prev !== '{' &&
          prev !== '=' &&
          prev !== ',' &&
          prev !== ';';

        if ((ch === '_' || ch === '^') && hasAttachedBase) {
          const segType: 'sub' | 'sup' = ch === '_' ? 'sub' : 'sup';
          const rest = chunk.slice(i + 1);

          // 1. Braced form: _{...} or ^{...}
          if (rest.startsWith('{')) {
            let depth = 0;
            let endIdx = -1;
            for (let j = 0; j < rest.length; j++) {
              if (rest[j] === '{') depth++;
              else if (rest[j] === '}') {
                depth--;
                if (depth === 0) {
                  endIdx = j;
                  break;
                }
              }
            }
            if (endIdx > 1) {
              const inner = rest.slice(1, endIdx);
              flushText();
              rawSegments.push({ type: segType, value: inner });
              i += 1 + endIdx + 1;
              continue;
            }
          }

          // 2. Parenthesized form: ^(iθ), ^(-λt), _(n+1)
          if (rest.startsWith('(')) {
            let depth = 0;
            let endIdx = -1;
            for (let j = 0; j < rest.length; j++) {
              if (rest[j] === '(') depth++;
              else if (rest[j] === ')') {
                depth--;
                if (depth === 0) {
                  endIdx = j;
                  break;
                }
              }
            }
            if (endIdx > 1 && endIdx <= 24) {
              const inner = rest.slice(1, endIdx);
              flushText();
              rawSegments.push({ type: segType, value: inner });
              i += 1 + endIdx + 1;
              continue;
            }
          }

          // 3. Compact unbraced form
          if (segType === 'sup') {
            const supMatch = rest.match(
              /^([+-]?\d+(?:\/\d+)?|[+-]?[nkpijxytθλαβγ’'\*](?:[+-]1)?|[A-Za-z0-9α-ωθπ’'\*]{1,3})(?=[^A-Za-z0-9_\^]|$)/
            );
            if (supMatch && supMatch[1]) {
              flushText();
              rawSegments.push({ type: 'sup', value: supMatch[1] });
              i += 1 + supMatch[1].length;
              continue;
            }
          } else {
            const subMatch = rest.match(
              /^(\d+\/\d+|[A-Za-zÀ-ÿ0-9α-ωΑ-Ω₀-₉’'\u0300-\u036f\u20d7]{1,10}(?:[+-]1)?)(?=[^A-Za-zÀ-ÿ0-9_]|$)/
            );
            if (subMatch && subMatch[1]) {
              flushText();
              rawSegments.push({ type: 'sub', value: subMatch[1] });
              i += 1 + subMatch[1].length;
              continue;
            }
          }
        }

        textBuffer += ch;
        i++;
      }

      flushText();
    }
  }

  // Expand any Unicode subscripts/superscripts inside plain text segments
  const expanded: MathSegment[] = [];
  for (const seg of rawSegments) {
    if (seg.type !== 'text') {
      expanded.push(seg);
      continue;
    }
    const parts = convertUnicodeScripts(seg.value);
    for (const p of parts) {
      expanded.push(p);
    }
  }
  return expanded;
}

const MathVec: React.FC<{ target: string }> = ({ target }) => (
  <span className="math-vec">
    <svg
      className="math-vec-arrow"
      viewBox="0 0 24 7"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        x1="1"
        y1="3.6"
        x2="20.5"
        y2="3.6"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <polyline
        points="16.8,1.1 22,3.6 16.8,6.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span>{target}</span>
  </span>
);

const MathHat: React.FC<{ target: string }> = ({ target }) => (
  <span className="math-hat">
    <svg className="math-hat-mark" viewBox="0 0 14 6" aria-hidden="true">
      <polyline
        points="1.5,5 7,1.2 12.5,5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span>{target}</span>
  </span>
);

const MathDot: React.FC<{ target: string; double?: boolean }> = ({ target, double = false }) => (
  <span className="math-dot-wrap">
    <svg
      className="math-dot-marks"
      viewBox={double ? '0 0 14 5' : '0 0 8 5'}
      style={{ width: double ? '0.68em' : '0.38em' }}
      aria-hidden="true"
    >
      {double ? (
        <>
          <circle cx="4" cy="2.5" r="1.5" fill="currentColor" />
          <circle cx="10" cy="2.5" r="1.5" fill="currentColor" />
        </>
      ) : (
        <circle cx="4" cy="2.5" r="1.5" fill="currentColor" />
      )}
    </svg>
    <span>{target}</span>
  </span>
);

/**
 * Extracts exact vector target before U+20D7:
 * - Two-point / multi-uppercase vectors like OM, AB, A’B’, HH’, ΩM’, Pa (even inside dOM⃗ or 2MA⃗)
 * - Single-letter vectors like v, a, i, j, k, u, n, F, E, B, 0 (even inside dv⃗, qE⃗, ΣF⃗)
 */
function extractVectorTarget(buffer: string): { prefix: string; target: string } | null {
  if (!buffer) return null;
  // 1. Multi-uppercase two-point vectors (e.g. OM, AB, A’B’, HH’, ΩM’, MF’, Pa)
  const twoUpper = buffer.match(/(Pa|[A-ZΩ][’']?[A-ZΩ][’']?)$/);
  if (twoUpper && twoUpper[1]) {
    const target = twoUpper[1];
    return { prefix: buffer.slice(0, buffer.length - target.length), target };
  }
  // 2. Single letter/digit with optional prime (e.g. i, j, k, v, a, u’, 0, ω)
  const single = buffer.match(/([A-Za-z0ω][’']*)$/);
  if (single && single[1]) {
    const target = single[1];
    return { prefix: buffer.slice(0, buffer.length - target.length), target };
  }
  return null;
}

const DECORATION_RX = /([\u20d7\u0304\u0302\u0307\u0308ⒶⓋ])/g;

function renderDecoratedInlineText(text: string): React.ReactNode {
  if (!text) return null;
  if (!DECORATION_RX.test(text)) {
    return text;
  }
  DECORATION_RX.lastIndex = 0;

  const nodes: React.ReactNode[] = [];
  let buffer = '';
  let keyIdx = 0;

  const flushBuffer = () => {
    if (buffer) {
      nodes.push(<React.Fragment key={`t-${keyIdx++}`}>{buffer}</React.Fragment>);
      buffer = '';
    }
  };

  const chars = Array.from(text);
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch === '\u20d7') {
      const split = extractVectorTarget(buffer);
      if (split) {
        buffer = split.prefix;
        flushBuffer();
        nodes.push(<MathVec key={`vec-${keyIdx++}`} target={split.target} />);
      }
      continue;
    }
    if (ch === '\u0304') {
      // Bar over preceding character (or parenthesized group like (A∩B)̄)
      const parenMatch = buffer.match(/(\([^()]+\))$/);
      if (parenMatch && parenMatch[1]) {
        const target = parenMatch[1];
        buffer = buffer.slice(0, buffer.length - target.length);
        flushBuffer();
        nodes.push(
          <span key={`bar-${keyIdx++}`} className="math-bar">
            {target}
          </span>
        );
      } else if (buffer.length > 0) {
        const target = buffer.slice(-1);
        buffer = buffer.slice(0, -1);
        flushBuffer();
        nodes.push(
          <span key={`bar-${keyIdx++}`} className="math-bar">
            {target}
          </span>
        );
      }
      continue;
    }
    if (ch === '\u0302') {
      if (buffer.length > 0) {
        const target = buffer.slice(-1);
        buffer = buffer.slice(0, -1);
        flushBuffer();
        nodes.push(<MathHat key={`hat-${keyIdx++}`} target={target} />);
      }
      continue;
    }
    if (ch === '\u0307' || ch === '\u0308') {
      if (buffer.length > 0) {
        const target = buffer.slice(-1);
        buffer = buffer.slice(0, -1);
        flushBuffer();
        nodes.push(<MathDot key={`dot-${keyIdx++}`} target={target} double={ch === '\u0308'} />);
      }
      continue;
    }
    if (ch === 'Ⓐ' || ch === 'Ⓥ') {
      flushBuffer();
      nodes.push(
        <span key={`badge-${keyIdx++}`} className="math-circle-badge">
          {ch === 'Ⓐ' ? 'A' : 'V'}
        </span>
      );
      continue;
    }
    buffer += ch;
  }

  flushBuffer();
  return <>{nodes}</>;
}

interface FormattedMathTextProps {
  text: string;
  className?: string;
}

export const FormattedMathText: React.FC<FormattedMathTextProps> = ({ text, className }) => {
  if (!text) return null;

  const segments = parseMathSegments(text);
  const content = segments.map((seg, idx) => {
    if (seg.type === 'sub') {
      return (
        <sub key={idx} className="font-semibold">
          {seg.value.includes('_') || seg.value.includes('^') ? (
            <FormattedMathText text={seg.value} />
          ) : (
            renderDecoratedInlineText(seg.value)
          )}
        </sub>
      );
    }
    if (seg.type === 'sup') {
      return (
        <sup key={idx} className="font-semibold">
          {seg.value.includes('_') || seg.value.includes('^') ? (
            <FormattedMathText text={seg.value} />
          ) : (
            renderDecoratedInlineText(seg.value)
          )}
        </sup>
      );
    }
    return <React.Fragment key={idx}>{renderDecoratedInlineText(seg.value)}</React.Fragment>;
  });

  return className ? <span className={className}>{content}</span> : <>{content}</>;
};

interface SvgMathTspansProps {
  text: string;
  baseFontSize?: number;
}

/**
 * Renders formatted math subscripts/superscripts inside SVG <text> elements
 * using explicit relative <tspan dy={...}> baseline shifts for 100% WebView compatibility.
 */
const NEEDS_SANS_MATH_FONT_RX = /[\u20d7\u0300-\u036f\u2016\u2190-\u21ff\u2200-\u22ff\u2100-\u214f]/;

export const SvgMathTspans: React.FC<SvgMathTspansProps> = ({ text, baseFontSize = 11 }) => {
  if (!text) return null;

  const segments = parseMathSegments(text);
  let currentOffset = 0;
  const supOffset = -Math.round(baseFontSize * 0.34 * 10) / 10;
  const subOffset = Math.round(baseFontSize * 0.22 * 10) / 10;

  return (
    <>
      {segments.map((seg, idx) => {
        const targetOffset =
          seg.type === 'sup' ? supOffset : seg.type === 'sub' ? subOffset : 0;
        const dy = Math.round((targetOffset - currentOffset) * 10) / 10;
        currentOffset = targetOffset;
        const useSansMath = NEEDS_SANS_MATH_FONT_RX.test(seg.value);
        const fontStyle = useSansMath ? { fontFamily: "'AppMathSans', var(--font-sans)" } : undefined;

        if (seg.type === 'text') {
          return (
            <tspan key={idx} dy={dy !== 0 ? dy : undefined} style={fontStyle}>
              {seg.value}
            </tspan>
          );
        }

        return (
          <tspan
            key={idx}
            dy={dy !== 0 ? dy : undefined}
            fontSize="72%"
            fontWeight="700"
            style={fontStyle}
          >
            {seg.value}
          </tspan>
        );
      })}
    </>
  );
};
