import React from 'react';
import { LaboEvalResult, MathVisualKind } from '../data/labo/laboTypes';
import { MATH_TC_EXPERIENCE_META, MATH_TC_LABO_SPECS } from '../data/labo/mathTcLaboSpecs';
import { LaboDeckShell } from './LaboDeckShell';
import { SvgMathTspans } from './FormattedMathText';

export { MATH_TC_EXPERIENCE_META };

interface MathTcExperiencesProps {
  chapterId: string;
  experienceIndex: number;
}

const n = (v: number | string | undefined, fallback = 0): number =>
  typeof v === 'number' && Number.isFinite(v) ? v : fallback;

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const renderMathSvg = (kind: MathVisualKind, res: LaboEvalResult) => {
  const s = res.svg;

  switch (kind) {
    case 'euclid-clock': {
      const mod = clamp(n(s.n, 12), 3, 26);
      const k = ((n(s.k, 0) % mod) + mod) % mod;
      const dots = Array.from({ length: Math.min(mod, 18) }, (_, idx) => {
        const ang = -Math.PI / 2 + (idx / Math.min(mod, 18)) * 2 * Math.PI;
        return {
          idx,
          x: 160 + 62 * Math.cos(ang),
          y: 96 + 62 * Math.sin(ang),
        };
      });
      const selAng = -Math.PI / 2 + (k / mod) * 2 * Math.PI;
      const sx = 160 + 62 * Math.cos(selAng);
      const sy = 96 + 62 * Math.sin(selAng);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <circle cx="160" cy="96" r="62" fill="none" stroke="#334155" strokeWidth="2" />
          {dots.map((d) => (
            <circle key={d.idx} cx={d.x} cy={d.y} r="3.2" fill="#64748b" />
          ))}
          <line x1="160" y1="96" x2={sx} y2={sy} stroke="#fbbf24" strokeWidth="2.5" />
          <circle cx={sx} cy={sy} r="6.5" fill="#fbbf24" />
          <text x="160" y="100" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold">
            ℤ/{mod}ℤ
          </text>
          <text x="16" y="24" fill="#38bdf8" fontSize="10" fontWeight="bold">
            Classe modulo {mod} : r = {k}
          </text>
        </svg>
      );
    }

    case 'bezout-line': {
      const a = n(s.a, 17);
      const b = n(s.b, 11);
      const d = n(s.d, 1);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <rect x="24" y="34" width="272" height="122" rx="12" fill="#0f172a" stroke="#334155" />
          <text x="160" y="72" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">
            ({a})·({n(s.u, 1)}) + ({b})·({n(s.v, 0)})
          </text>
          <text x="160" y="105" textAnchor="middle" fill="#fbbf24" fontSize="16" fontWeight="bold">
            PGCD / Pivot = {d}
          </text>
          <text x="160" y="135" textAnchor="middle" fill="#34d399" fontSize="10">
            Réseau discret (x₀ + k·b/d ; y₀ - k·a/d)
          </text>
        </svg>
      );
    }

    case 'argand-plane': {
      const re = clamp(n(s.re, 2.5), -4.5, 4.5);
      const im = clamp(n(s.im, 2), -4.5, 4.5);
      const px = 160 + re * 26;
      const py = 96 - im * 18;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="30" y1="96" x2="290" y2="96" stroke="#475569" strokeWidth="1.5" />
          <line x1="160" y1="18" x2="160" y2="174" stroke="#475569" strokeWidth="1.5" />
          <circle cx="160" cy="96" r="28" fill="none" stroke="#334155" strokeDasharray="3 3" />
          <line x1="160" y1="96" x2={px} y2={py} stroke="#fbbf24" strokeWidth="2.6" />
          <line x1={px} y1={py} x2={px} y2="96" stroke="#64748b" strokeDasharray="3 3" />
          <circle cx={px} cy={py} r="5.5" fill="#38bdf8" />
          <text x={px + 7} y={py - 5} fill="#fbbf24" fontSize="10" fontWeight="bold">M(z)</text>
          <text x="268" y="90" fill="#94a3b8" fontSize="10">Re</text>
          <text x="166" y="26" fill="#94a3b8" fontSize="10">Im</text>
        </svg>
      );
    }

    case 'roots-polygon': {
      const count = clamp(Math.round(n(s.n, 5)), 2, 10);
      const off = (n(s.offsetDeg, 0) * Math.PI) / 180;
      const pts = Array.from({ length: count }, (_, k) => {
        const ang = off + (k * 2 * Math.PI) / count;
        return { x: 160 + 62 * Math.cos(ang), y: 96 - 62 * Math.sin(ang) };
      });
      const poly = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <circle cx="160" cy="96" r="62" fill="none" stroke="#334155" strokeDasharray="4 3" strokeWidth="1.8" />
          <polygon points={poly} fill="#fbbf24" fillOpacity="0.14" stroke="#fbbf24" strokeWidth="2.2" />
          {pts.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="4.5" fill="#38bdf8" />
          ))}
          <text x="16" y="24" fill="#fbbf24" fontSize="10" fontWeight="bold">
            Polygone des {count} racines
          </text>
        </svg>
      );
    }

    case 'barycenter-bar': {
      const exists = n(s.exists, 1) === 1;
      const ratio = clamp(n(s.ratio, 0.5), -0.35, 1.35);
      const gx = 80 + ratio * 160;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="25" y1="100" x2="295" y2="100" stroke="#475569" strokeWidth="2" />
          <circle cx="80" cy="100" r="6" fill="#38bdf8" />
          <circle cx="240" cy="100" r="6" fill="#34d399" />
          <text x="74" y="122" fill="#7dd3fc" fontSize="11" fontWeight="bold">A ({n(s.alpha, 1)})</text>
          <text x="230" y="122" fill="#6ee7b7" fontSize="11" fontWeight="bold">B ({n(s.beta, 1)})</text>
          {exists ? (
            <>
              <circle cx={gx} cy="100" r="7" fill="#fbbf24" />
              <text x={gx - 6} y="84" fill="#fbbf24" fontSize="11" fontWeight="bold">G</text>
            </>
          ) : (
            <text x="160" y="65" textAnchor="middle" fill="#fb7185" fontSize="11" fontWeight="bold">
              α + β = 0 : G n’existe pas !
            </text>
          )}
        </svg>
      );
    }

    case 'vector-area': {
      const uLen = clamp(n(s.u, 4) * 22, 30, 130);
      const vLen = clamp(n(s.v, 3) * 20, 28, 95);
      const rad = (clamp(n(s.deg, 60), 5, 175) * Math.PI) / 180;
      const vx = 70 + vLen * Math.cos(rad);
      const vy = 140 - vLen * Math.sin(rad);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <polygon points={`70,140 ${70 + uLen},140 ${vx + uLen},${vy} ${vx},${vy}`} fill="#38bdf8" fillOpacity="0.18" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="70" y1="140" x2={70 + uLen} y2="140" stroke="#34d399" strokeWidth="2.8" />
          <line x1="70" y1="140" x2={vx} y2={vy} stroke="#fbbf24" strokeWidth="2.8" />
          <text x={70 + uLen / 2} y="158" fill="#34d399" fontSize="10" fontWeight="bold"><SvgMathTspans text="u⃗" baseFontSize={10} /></text>
          <text x={vx - 14} y={vy - 6} fill="#fbbf24" fontSize="10" fontWeight="bold"><SvgMathTspans text="v⃗" baseFontSize={10} /></text>
          <text x="24" y="26" fill="#cbd5e1" fontSize="10" fontWeight="bold">
            <SvgMathTspans text={`Aire ‖u⃗ ∧ v⃗‖ = ${n(s.area, 0).toFixed(2)}`} baseFontSize={10} />
          </text>
        </svg>
      );
    }

    case 'limit-curve': {
      const pts: string[] = [];
      for (let i = 0; i <= 50; i++) {
        const u = i / 50;
        const x = 35 + u * 250;
        const y = s.mode === 'sinc'
          ? 100 - 50 * (u === 0 ? 1 : Math.sin(u * 8) / (u * 8))
          : s.mode === 'squeeze'
          ? 95 - 45 * Math.sin(u * 18) / (1 + u * 4)
          : 45 + 100 * Math.exp(-u * 3);
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="35" y1="150" x2="290" y2="150" stroke="#475569" strokeWidth="1.8" />
          <line x1="35" y1="22" x2="35" y2="150" stroke="#475569" strokeWidth="1.8" />
          <line x1="35" y1="45" x2="285" y2="45" stroke="#fbbf24" strokeDasharray="4 4" strokeWidth="1.5" />
          <polyline fill="none" stroke="#38bdf8" strokeWidth="2.8" points={pts.join(' ')} />
          <text x="200" y="38" fill="#fbbf24" fontSize="10" fontWeight="bold">Limite / Asymptote</text>
        </svg>
      );
    }

    case 'tangent-secant': {
      const slope = clamp(n(s.slope, 1.2), -4, 4);
      const pts: string[] = [];
      for (let i = 0; i <= 50; i++) {
        const t = -1.5 + (i / 50) * 3;
        const x = 160 + t * 70;
        const y = 135 - t * t * 38;
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="30" y1="145" x2="290" y2="145" stroke="#475569" strokeWidth="1.5" />
          <line x1="160" y1="20" x2="160" y2="165" stroke="#475569" strokeWidth="1.5" />
          <polyline fill="none" stroke="#38bdf8" strokeWidth="2.5" points={pts.join(' ')} />
          <line x1="75" y1={105 + slope * 18} x2="245" y2={105 - slope * 18} stroke="#fbbf24" strokeWidth="2.4" />
          <circle cx="160" cy="105" r="4.5" fill="#34d399" />
          <text x="24" y="24" fill="#fbbf24" fontSize="10" fontWeight="bold">Tangente & Nombre dérivé</text>
        </svg>
      );
    }

    case 'osc-ode': {
      const freq = clamp(n(s.freq, 2), 0.5, 5);
      const damp = clamp(n(s.damp, 0.2), -0.3, 2);
      const pts: string[] = [];
      for (let i = 0; i <= 70; i++) {
        const u = (i / 70) * 4;
        const x = 35 + (i / 70) * 255;
        const val = s.mode === 'exp1'
          ? 0.9 * Math.exp(-Math.max(0.1, damp) * u)
          : Math.exp(-Math.max(0, damp) * u * 0.45) * Math.cos(freq * u * 1.5);
        const y = 96 - clamp(val, -1, 1) * 56;
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="35" y1="96" x2="290" y2="96" stroke="#475569" strokeWidth="1.5" />
          <line x1="35" y1="24" x2="35" y2="166" stroke="#475569" strokeWidth="1.5" />
          <polyline fill="none" stroke="#a855f7" strokeWidth="2.6" points={pts.join(' ')} />
          <text x="44" y="26" fill="#d8b4fe" fontSize="10" fontWeight="bold">Solution équation différentielle</text>
        </svg>
      );
    }

    case 'cobweb-suite': {
      const a = clamp(n(s.slope, 0.6), -0.9, 0.95);
      const b = n(s.c, 0.8);
      const l = 2; // visual fixed point normalized
      const xMin = 35;
      const mapX = (v: number) => 45 + clamp(v, 0, 4.5) * 48;
      const mapY = (v: number) => 162 - clamp(v, 0, 4.5) * 30;
      const yFn = (v: number) => l + a * (v - l);
      const steps: string[] = [];
      let cur = clamp(n(s.u0, 0.5), 0.2, 4.2);
      steps.push(`${mapX(cur).toFixed(1)},${mapY(0).toFixed(1)}`);
      for (let i = 0; i < 4; i++) {
        const nxt = yFn(cur);
        steps.push(`${mapX(cur).toFixed(1)},${mapY(nxt).toFixed(1)}`);
        steps.push(`${mapX(nxt).toFixed(1)},${mapY(nxt).toFixed(1)}`);
        cur = nxt;
      }
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1={xMin} y1="162" x2="290" y2="162" stroke="#475569" strokeWidth="1.5" />
          <line x1="45" y1="20" x2="45" y2="162" stroke="#475569" strokeWidth="1.5" />
          <line x1={mapX(0)} y1={mapY(0)} x2={mapX(4.3)} y2={mapY(4.3)} stroke="#64748b" strokeDasharray="4 3" strokeWidth="1.5" />
          <line x1={mapX(0)} y1={mapY(yFn(0))} x2={mapX(4.3)} y2={mapY(yFn(4.3))} stroke="#38bdf8" strokeWidth="2.2" />
          <polyline fill="none" stroke="#fbbf24" strokeWidth="2" points={steps.join(' ')} />
          <text x="52" y="24" fill="#fbbf24" fontSize="10" fontWeight="bold">
            <SvgMathTspans text={`Escalier / Toile u_{n+1} = f(u_n) (b=${b.toFixed(1)})`} baseFontSize={10} />
          </text>
        </svg>
      );
    }

    case 'riemann-sum': {
      const count = clamp(Math.round(n(s.n, 6)), 2, 16);
      const w = 220 / count;
      const rects = Array.from({ length: count }, (_, k) => {
        const u = (k + 0.5) / count;
        const h = (0.15 + 0.85 * u * u) * 108;
        return { x: 45 + k * w, y: 155 - h, w: w - 1, h };
      });
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="45" y1="24" x2="45" y2="155" stroke="#475569" strokeWidth="1.8" />
          <line x1="45" y1="155" x2="285" y2="155" stroke="#475569" strokeWidth="1.8" />
          {rects.map((r, i) => (
            <rect key={i} x={r.x} y={r.y} width={Math.max(2, r.w)} height={r.h} fill="#38bdf8" fillOpacity="0.35" stroke="#38bdf8" strokeWidth="1" />
          ))}
          <path d="M 45 140 Q 165 125 265 44" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
          <text x="52" y="26" fill="#fbbf24" fontSize="10" fontWeight="bold">Somme de Riemann ({count} rect.)</text>
        </svg>
      );
    }

    case 'binomial-bars': {
      const count = clamp(Math.round(n(s.n, 10)), 2, 14);
      const p = clamp(n(s.p, 0.4), 0.05, 0.95);
      const comb = (nn: number, rr: number): number => {
        let c = 1;
        for (let i = 1; i <= rr; i++) c = (c * (nn - i + 1)) / i;
        return c;
      };
      const probs = Array.from({ length: count + 1 }, (_, k) => comb(count, k) * Math.pow(p, k) * Math.pow(1 - p, count - k));
      const maxP = Math.max(...probs, 0.05);
      const bw = 240 / (count + 1);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="35" y1="152" x2="290" y2="152" stroke="#475569" strokeWidth="2" />
          {probs.map((pr, k) => {
            const h = (pr / maxP) * 105;
            return (
              <rect key={k} x={40 + k * bw} y={152 - h} width={Math.max(4, bw - 3)} height={Math.max(2, h)} rx="2" fill={k === Math.round(count * p) ? '#fbbf24' : '#38bdf8'} />
            );
          })}
          <text x="40" y="26" fill="#fbbf24" fontSize="10" fontWeight="bold">Distribution discrète (n={count}, p={p.toFixed(2)})</text>
        </svg>
      );
    }

    case 'regression-line': {
      const a = clamp(n(s.a, 1), 0.2, 2.5);
      const noise = clamp(n(s.noise, 0.4), 0, 2);
      const pts = [1, 2, 3, 4, 5, 6].map((x, idx) => ({
        px: 45 + x * 36,
        py: clamp(148 - (x * a * 18 + (idx % 2 === 0 ? 1 : -1) * noise * 12), 28, 148),
      }));
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="35" y1="152" x2="290" y2="152" stroke="#475569" strokeWidth="1.8" />
          <line x1="35" y1="24" x2="35" y2="152" stroke="#475569" strokeWidth="1.8" />
          <line x1="55" y1="142" x2="275" y2={clamp(142 - a * 55, 28, 140)} stroke="#fbbf24" strokeWidth="2.5" />
          {pts.map((pt, i) => (
            <circle key={i} cx={pt.px} cy={pt.py} r="4" fill="#38bdf8" />
          ))}
          <text x="44" y="26" fill="#34d399" fontSize="10" fontWeight="bold">Ajustement affine (r = {n(s.r, 0.95).toFixed(2)})</text>
        </svg>
      );
    }

    case 'sphere-section': {
      const R = clamp(n(s.R, 5), 2, 8);
      const d = clamp(n(s.d, 3), 0, 8);
      const rPx = 58;
      const dPx = (d / R) * rPx;
      const secRx = d < R ? Math.sqrt(Math.max(0, rPx * rPx - dPx * dPx)) : 0;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <circle cx="160" cy="96" r={rPx} fill="#0284c7" fillOpacity="0.16" stroke="#38bdf8" strokeWidth="2.2" />
          <circle cx="160" cy="96" r="3" fill="#fbbf24" />
          <text x="148" y="92" fill="#fbbf24" fontSize="10" fontWeight="bold">Ω</text>
          {d <= R + 1.5 && (
            <ellipse cx="160" cy={clamp(96 - dPx, 24, 158)} rx={Math.max(6, secRx)} ry={Math.max(4, secRx * 0.3)} fill="#34d399" fillOpacity="0.25" stroke="#34d399" strokeWidth="2" />
          )}
          <text x="18" y="24" fill="#34d399" fontSize="10" fontWeight="bold">Sphère R={R.toFixed(1)} · d(Ω,P)={d.toFixed(1)}</text>
        </svg>
      );
    }

    case 'isometry-tri': {
      const k = clamp(n(s.k, 1.3), 0.4, 2.2);
      const ang = (n(s.angleDeg, 45) * Math.PI) / 180;
      const cx = 205;
      const cy = 96;
      const rot = (x: number, y: number): [number, number] => [
        cx + k * (x * Math.cos(ang) - y * Math.sin(ang)),
        cy + k * (x * Math.sin(ang) + y * Math.cos(ang)),
      ];
      const p1 = rot(0, -24);
      const p2 = rot(-20, 18);
      const p3 = rot(24, 18);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <polygon points="85,72 65,116 112,116" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
          <polygon points={`${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]}`} fill="#fbbf24" fillOpacity="0.25" stroke="#fbbf24" strokeWidth="2" />
          <text x="68" y="135" fill="#7dd3fc" fontSize="10" fontWeight="bold">Figure F</text>
          <text x="195" y="162" fill="#fcd34d" fontSize="10" fontWeight="bold">Image F’ (k={k.toFixed(2)})</text>
        </svg>
      );
    }

    case 'conic-curve':
    default: {
      const e = clamp(n(s.e, 0.6), 0.1, 2);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="30" y1="95" x2="290" y2="95" stroke="#475569" strokeWidth="1.5" />
          <line x1="160" y1="20" x2="160" y2="170" stroke="#475569" strokeWidth="1.5" />
          {e < 0.98 ? (
            <ellipse cx="160" cy="95" rx="85" ry={Math.max(20, 85 * Math.sqrt(1 - e * e))} fill="#38bdf8" fillOpacity="0.1" stroke="#38bdf8" strokeWidth="2.6" />
          ) : e <= 1.05 ? (
            <path d="M 240 32 Q 70 95 240 158" fill="none" stroke="#fbbf24" strokeWidth="2.8" />
          ) : (
            <>
              <path d="M 255 30 Q 175 95 255 160" fill="none" stroke="#fb7185" strokeWidth="2.6" />
              <path d="M 65 30 Q 145 95 65 160" fill="none" stroke="#fb7185" strokeWidth="2.6" />
              <line x1="65" y1="32" x2="255" y2="158" stroke="#64748b" strokeDasharray="4 4" />
              <line x1="65" y1="158" x2="255" y2="32" stroke="#64748b" strokeDasharray="4 4" />
            </>
          )}
          <circle cx={e < 1 ? 160 + 85 * e : 205} cy="95" r="4.5" fill="#fbbf24" />
          <text x="16" y="24" fill="#fbbf24" fontSize="10" fontWeight="bold">
            Conique e = {e.toFixed(2)} ({e < 0.98 ? 'Ellipse' : e <= 1.05 ? 'Parabole' : 'Hyperbole'})
          </text>
        </svg>
      );
    }
  }
};

export const MathTcExperiences: React.FC<MathTcExperiencesProps> = ({
  chapterId,
  experienceIndex,
}) => {
  const list = MATH_TC_LABO_SPECS[chapterId];
  if (!list || list.length === 0) return null;

  const spec = list[experienceIndex] ?? list[0];

  return (
    <LaboDeckShell
      specKey={spec.id}
      goal={spec.goal}
      formula={spec.formula}
      sliders={spec.sliders}
      presets={spec.presets}
      evaluate={spec.evaluate}
      renderSvg={(res) => renderMathSvg(spec.visualKind, res)}
      accentTheme="amber"
    />
  );
};
