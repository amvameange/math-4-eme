import React, { useEffect, useState } from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';
import { LaboEvalResult, LaboPresetSpec, LaboSliderSpec } from '../data/labo/laboTypes';
import { FormattedMathText } from './FormattedMathText';

interface LaboDeckShellProps {
  specKey: string;
  goal: string;
  formula: string;
  sliders: LaboSliderSpec[];
  presets?: LaboPresetSpec[];
  evaluate: (values: number[]) => LaboEvalResult;
  renderSvg: (evalResult: LaboEvalResult, values: number[]) => React.ReactNode;
  accentTheme?: 'sky' | 'amber';
}

const METRIC_STYLES: Record<string, string> = {
  sky: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
  amber: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
  emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
  rose: 'bg-rose-500/10 border-rose-500/30 text-rose-300',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
};

export const LaboDeckShell: React.FC<LaboDeckShellProps> = ({
  specKey,
  goal,
  formula,
  sliders,
  presets,
  evaluate,
  renderSvg,
  accentTheme = 'sky',
}) => {
  const [values, setValues] = useState<number[]>(() => sliders.map((s) => s.defaultValue));

  useEffect(() => {
    setValues(sliders.map((s) => s.defaultValue));
  }, [specKey, sliders]);

  const safeValues = sliders.map((s, idx) =>
    typeof values[idx] === 'number' && !Number.isNaN(values[idx]) ? values[idx] : s.defaultValue
  );
  const res = evaluate(safeValues);

  const formatNum = (n: number, step: number) => {
    const decimals = step < 0.01 ? 3 : step < 0.1 ? 2 : step < 1 ? 1 : 0;
    return Number(n.toFixed(decimals)).toString().replace('.', ',');
  };

  return (
    <div className="space-y-3.5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-xs text-slate-300 leading-relaxed flex-1 min-w-[220px]">
          <FormattedMathText text={goal} />
        </p>
        <div className="flex flex-wrap items-center gap-1.5">
          {presets?.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setValues([...p.values])}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] font-bold text-amber-300 transition cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span><FormattedMathText text={p.label} /></span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => setValues(sliders.map((s) => s.defaultValue))}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-bold text-slate-300 transition cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1"
            title="Réinitialiser les curseurs"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Réinitialiser</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        <div className="lg:col-span-6 rounded-2xl bg-slate-950 border border-slate-800 p-2.5 flex items-center justify-center">
          <div className="w-full max-w-[380px]">{renderSvg(res, safeValues)}</div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3 space-y-2.5">
            {sliders.map((s, idx) => (
              <div key={s.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200"><FormattedMathText text={s.label} /></span>
                  <span
                    className={`font-black tabular-nums ${
                      accentTheme === 'sky' ? 'text-sky-300' : 'text-amber-300'
                    }`}
                  >
                    {formatNum(safeValues[idx], s.step)}
                    {s.unit ? ` ${s.unit}` : ''}
                  </span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={safeValues[idx]}
                  onChange={(e) => {
                    const next = [...safeValues];
                    next[idx] = Number(e.target.value);
                    setValues(next);
                  }}
                  aria-label={s.label}
                  className={`w-full cursor-pointer ${
                    accentTheme === 'sky' ? 'accent-sky-400' : 'accent-amber-400'
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-slate-900 border border-slate-800 px-3 py-2">
            <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Mesure en direct
            </div>
            <div className="text-xs sm:text-sm font-black text-white tabular-nums mt-0.5">
              <FormattedMathText text={res.headline} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {res.metrics.map((m) => (
              <div
                key={m.label}
                className={`rounded-xl border px-2.5 py-2 ${
                  METRIC_STYLES[m.accent || 'sky']
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wide opacity-80 truncate">
                  <FormattedMathText text={m.label} />
                </div>
                <div className="text-xs font-black tabular-nums mt-0.5 break-words">
                  <FormattedMathText text={m.value} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <div className="rounded-xl bg-slate-900/90 border border-slate-800 px-3 py-2 text-xs">
          <span className="text-[10px] font-black uppercase tracking-wider text-sky-300 block">
            Formule & Loi
          </span>
          <span className="font-mono text-slate-200"><FormattedMathText text={formula} /></span>
        </div>
        <div className="rounded-xl bg-emerald-950/30 border border-emerald-500/25 px-3 py-2 text-xs">
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 block">
            À retenir (BAC C)
          </span>
          <span className="text-slate-200"><FormattedMathText text={res.conclusion} /></span>
        </div>
      </div>
    </div>
  );
};
