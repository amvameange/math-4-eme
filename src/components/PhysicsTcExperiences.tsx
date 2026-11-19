import React from 'react';
import { ChapterExpMeta, LaboEvalResult, PhysicsVisualKind } from '../data/labo/laboTypes';
import { PHYSICS_TC_EXPERIENCE_META, PHYSICS_TC_LABO_SPECS } from '../data/labo/physicsTcLaboSpecs';
import { LaboDeckShell } from './LaboDeckShell';
import { SvgMathTspans } from './FormattedMathText';

export { PHYSICS_TC_EXPERIENCE_META };
export type { ChapterExpMeta };

interface PhysicsTcExperiencesProps {
  chapterId: string;
  experienceIndex: number;
}

const n = (v: number | string | undefined, fallback = 0): number =>
  typeof v === 'number' && Number.isFinite(v) ? v : fallback;

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const renderPhysicsSvg = (kind: PhysicsVisualKind, res: LaboEvalResult) => {
  const s = res.svg;

  switch (kind) {
    case 'frenet': {
      const aT = clamp(n(s.aT, 3) * 8, 0, 72);
      const aN = clamp(n(s.aN, 4) * 8, 8, 72);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <defs>
            <marker id="arrSky" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8" />
            </marker>
            <marker id="arrRose" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#fb7185" />
            </marker>
            <marker id="arrAmb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24" />
            </marker>
          </defs>
          <path d="M 40 165 Q 150 25 280 95" fill="none" stroke="#334155" strokeWidth="3" strokeDasharray="5 4" />
          <circle cx="155" cy="82" r="5" fill="#f8fafc" />
          <text x="142" y="72" fill="#e2e8f0" fontSize="11" fontWeight="bold">M</text>
          {/* uT tangent */}
          <line x1="155" y1="82" x2={155 + Math.max(24, aT)} y2={82 - Math.max(8, aT * 0.3)} stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrSky)" />
          <text x={158 + Math.max(24, aT)} y={80 - Math.max(8, aT * 0.3)} fill="#38bdf8" fontSize="10" fontWeight="bold"><SvgMathTspans text="a_T" baseFontSize={10} /></text>
          {/* uN normal */}
          <line x1="155" y1="82" x2={155 - aN * 0.25} y2={82 + aN} stroke="#fb7185" strokeWidth="2.5" markerEnd="url(#arrRose)" />
          <text x={135 - aN * 0.25} y={92 + aN} fill="#fb7185" fontSize="10" fontWeight="bold"><SvgMathTspans text="a_N = v²/R" baseFontSize={10} /></text>
          {/* total a */}
          <line x1="155" y1="82" x2={155 + aT - aN * 0.25} y2={82 - aT * 0.3 + aN} stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4 2" markerEnd="url(#arrAmb)" />
          <text x="16" y="22" fill="#94a3b8" fontSize="10"><SvgMathTspans text="Base de Frenet (u⃗_T, u⃗_N)" baseFontSize={10} /></text>
        </svg>
      );
    }

    case 'braking': {
      const ratio = clamp(n(s.ratio, 0.4), 0.08, 1);
      const xStop = 40 + ratio * 235;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="20" y1="135" x2="300" y2="135" stroke="#475569" strokeWidth="3" />
          <rect x="28" y="113" width="32" height="20" rx="4" fill="#38bdf8" />
          <line x1="44" y1="95" x2={xStop} y2="95" stroke="#fb7185" strokeWidth="2.5" strokeDasharray="4 3" />
          <rect x={xStop - 14} y="113" width="28" height="20" rx="4" fill="#fb7185" opacity="0.85" />
          <text x={(44 + xStop) / 2 - 22} y="88" fill="#fbbf24" fontSize="11" fontWeight="bold">
            d = {n(s.d, 30).toFixed(1)} m
          </text>
          <text x="24" y="34" fill="#94a3b8" fontSize="10">Freinage MRUV : v² - v₀² = 2aΔx</text>
          <text x={xStop - 14} y="155" fill="#cbd5e1" fontSize="10">Arrêt (v=0)</text>
        </svg>
      );
    }

    case 'trajectory': {
      const px = clamp(n(s.px, 0.5), 0.05, 0.98);
      const py = clamp(n(s.py, 0.7), 0.05, 1);
      const dotX = 35 + px * 240;
      const dotY = 155 - py * 105;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="35" y1="155" x2="295" y2="155" stroke="#475569" strokeWidth="2" />
          <line x1="35" y1="20" x2="35" y2="155" stroke="#475569" strokeWidth="2" />
          <path d="M 35 155 Q 155 15 275 155" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx={dotX} cy={dotY} r="5.5" fill="#fbbf24" />
          <line x1={dotX} y1={dotY} x2={dotX} y2="155" stroke="#64748b" strokeDasharray="3 3" />
          <text x="275" y="170" fill="#94a3b8" fontSize="10">x</text>
          <text x="22" y="26" fill="#94a3b8" fontSize="10">y</text>
          <text x="120" y="24" fill="#34d399" fontSize="10" fontWeight="bold">Parabole balistique</text>
        </svg>
      );
    }

    case 'mru-mruv': {
      const a = n(s.curveSlope, 2);
      const midY = a > 0 ? 115 : a < 0 ? 55 : 95;
      const endY = a > 0 ? 35 : a < 0 ? 130 : 40;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="35" y1="155" x2="295" y2="155" stroke="#475569" strokeWidth="2" />
          <line x1="35" y1="20" x2="35" y2="155" stroke="#475569" strokeWidth="2" />
          <path d={`M 35 150 Q 155 ${midY} 275 ${endY}`} fill="none" stroke="#34d399" strokeWidth="2.8" />
          <text x="260" y="170" fill="#94a3b8" fontSize="10">t (s)</text>
          <text x="18" y="28" fill="#94a3b8" fontSize="10">x(t)</text>
          <text x="90" y="28" fill="#fbbf24" fontSize="10" fontWeight="bold">
            {a > 0 ? 'Courbe concave vers le haut (a > 0)' : a < 0 ? 'Décélération (a < 0)' : 'Droite MRU (a = 0)'}
          </text>
        </svg>
      );
    }

    case 'vel-area': {
      const v0 = clamp(n(s.v0, 4), 0, 20);
      const vf = clamp(n(s.vf, 14), 2, 30);
      const y0 = 155 - v0 * 4;
      const yf = 155 - vf * 3.5;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <polygon points={`40,155 40,${y0} 260,${yf} 260,155`} fill="#38bdf8" fillOpacity="0.22" stroke="#38bdf8" strokeWidth="2" />
          <line x1="40" y1="20" x2="40" y2="155" stroke="#64748b" strokeWidth="2" />
          <line x1="40" y1="155" x2="290" y2="155" stroke="#64748b" strokeWidth="2" />
          <text x="110" y="125" fill="#fbbf24" fontSize="11" fontWeight="bold">Aire = Δx = ∫v(t)dt</text>
          <text x="18" y="28" fill="#94a3b8" fontSize="10">v(t)</text>
          <text x="270" y="170" fill="#94a3b8" fontSize="10">t</text>
        </svg>
      );
    }

    case 'freefall': {
      const H = clamp(n(s.H, 45), 5, 120);
      const marks = [0.1, 0.25, 0.5, 0.85, 1];
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="90" y1="22" x2="90" y2="165" stroke="#475569" strokeWidth="2" strokeDasharray="4 3" />
          <line x1="40" y1="165" x2="280" y2="165" stroke="#64748b" strokeWidth="2" />
          {marks.map((m, idx) => (
            <circle key={idx} cx="90" cy={26 + m * 130} r={4 + idx * 0.5} fill="#fbbf24" opacity={0.45 + idx * 0.13} />
          ))}
          <text x="130" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold">Chute libre z(t) = ½ g t²</text>
          <text x="130" y="78" fill="#e2e8f0" fontSize="10">H = {H} m · g = {n(s.g, 9.8).toFixed(2)} m/s²</text>
          <text x="130" y="100" fill="#34d399" fontSize="10">Écarts croissants à Δt constant</text>
        </svg>
      );
    }

    case 'circular': {
      const R = 28 + clamp(n(s.rNorm, 0.6), 0.15, 1) * 40;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <circle cx="150" cy="95" r={R} fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 3" />
          <circle cx="150" cy="95" r="3" fill="#94a3b8" />
          <line x1="150" y1="95" x2={150 + R} y2="95" stroke="#475569" strokeWidth="1.5" />
          <circle cx={150 + R} cy="95" r="6" fill="#fbbf24" />
          <line x1={150 + R} y1="95" x2={150 + R} y2="48" stroke="#34d399" strokeWidth="2.5" />
          <line x1={150 + R} y1="95" x2={150 + R * 0.45} y2="95" stroke="#fb7185" strokeWidth="2.5" />
          <text x={156 + R} y="54" fill="#34d399" fontSize="10" fontWeight="bold"><SvgMathTspans text="v⃗ = Rω" baseFontSize={10} /></text>
          <text x={150 + R * 0.25} y="112" fill="#fb7185" fontSize="10" fontWeight="bold"><SvgMathTspans text="F⃗_c" baseFontSize={10} /></text>
        </svg>
      );
    }

    case 'incline': {
      const alpha = clamp(n(s.alpha, 30), 10, 60);
      const rad = (alpha * Math.PI) / 180;
      const topY = 155 - Math.tan(rad) * 190;
      const clampedTopY = clamp(topY, 22, 130);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <polygon points={`45,155 255,155 45,${clampedTopY}`} fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <rect x="128" y={(155 + clampedTopY) / 2 - 18} width="26" height="18" rx="3" fill="#38bdf8" transform={`rotate(${alpha}, 141, ${(155 + clampedTopY) / 2 - 9})`} />
          <line x1="141" y1={(155 + clampedTopY) / 2} x2="141" y2={(155 + clampedTopY) / 2 + 40} stroke="#fb7185" strokeWidth="2.5" />
          <text x="147" y={(155 + clampedTopY) / 2 + 38} fill="#fb7185" fontSize="10" fontWeight="bold"><SvgMathTspans text="P⃗ = mg" baseFontSize={10} /></text>
          <text x="200" y="148" fill="#fbbf24" fontSize="10" fontWeight="bold">α = {alpha}°</text>
        </svg>
      );
    }

    case 'lorentz': {
      const rPx = 22 + clamp(n(s.rNorm, 0.55), 0.15, 1) * 52;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <rect x="110" y="20" width="185" height="150" rx="10" fill="#0f172a" stroke="#334155" strokeDasharray="4 3" />
          {[140, 195, 250].map((x) =>
            [48, 95, 142].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#38bdf8" opacity="0.45" />
            ))
          )}
          <line x1="30" y1="125" x2="110" y2="125" stroke="#34d399" strokeWidth="2.5" />
          <path d={`M 110 125 A ${rPx} ${rPx} 0 0 0 ${110 + rPx} ${125 - rPx}`} fill="none" stroke="#fbbf24" strokeWidth="2.8" />
          <text x="34" y="114" fill="#34d399" fontSize="10" fontWeight="bold"><SvgMathTspans text="v⃗₀" baseFontSize={10} /></text>
          <text x="205" y="38" fill="#38bdf8" fontSize="10" fontWeight="bold"><SvgMathTspans text="B⃗ ⊙" baseFontSize={10} /></text>
          <text x="145" y="160" fill="#fbbf24" fontSize="10">R = mv / (|q|B)</text>
        </svg>
      );
    }

    case 'orbit': {
      const rOrb = 42 + clamp(n(s.hNorm, 0.4), 0.05, 1) * 42;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <circle cx="160" cy="95" r={rOrb} fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 3" />
          <circle cx="160" cy="95" r="24" fill="#0284c7" stroke="#7dd3fc" strokeWidth="1.5" />
          <text x="147" y="99" fill="#f8fafc" fontSize="9" fontWeight="bold">Terre</text>
          <circle cx={160 + rOrb} cy="95" r="5" fill="#fbbf24" />
          <line x1={160 + rOrb} y1="95" x2={160 + rOrb} y2="52" stroke="#34d399" strokeWidth="2" />
          <text x={165 + rOrb} y="56" fill="#34d399" fontSize="10" fontWeight="bold"><SvgMathTspans text="v⃗" baseFontSize={10} /></text>
          <text x="16" y="24" fill="#94a3b8" fontSize="10">Orbite circulaire : v = √(GM / r)</text>
        </svg>
      );
    }

    case 'pendulum-wave': {
      const ampPx = clamp(n(s.amp, 5) * 4.5, 12, 48);
      const cycles = clamp(n(s.freq ?? s.omega, 2), 1, 5);
      const pts: string[] = [];
      for (let i = 0; i <= 80; i++) {
        const x = 30 + (i / 80) * 260;
        const y = 95 - ampPx * Math.sin((i / 80) * cycles * 2 * Math.PI);
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="30" y1="95" x2="295" y2="95" stroke="#475569" strokeWidth="1.5" />
          <line x1="30" y1="25" x2="30" y2="165" stroke="#475569" strokeWidth="1.5" />
          <polyline fill="none" stroke="#38bdf8" strokeWidth="2.5" points={pts.join(' ')} />
          <text x="36" y="24" fill="#fbbf24" fontSize="10" fontWeight="bold">Sinusoïde T₀ = 2π / ω₀</text>
        </svg>
      );
    }

    case 'energy-bars': {
      const b1 = clamp(n(s.bar1, 60), 0, 100);
      const b2 = clamp(n(s.bar2, 40), 0, 100);
      const l1 = String(s.label1 ?? 'Grandeur 1');
      const l2 = String(s.label2 ?? 'Grandeur 2');
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="35" y1="150" x2="285" y2="150" stroke="#475569" strokeWidth="2" />
          <rect x="70" y={150 - b1 * 1.1} width="65" height={Math.max(4, b1 * 1.1)} rx="6" fill="#38bdf8" />
          <rect x="185" y={150 - b2 * 1.1} width="65" height={Math.max(4, b2 * 1.1)} rx="6" fill="#fbbf24" />
          <text x="102" y="168" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontWeight="bold">{l1}</text>
          <text x="217" y="168" textAnchor="middle" fill="#fcd34d" fontSize="10" fontWeight="bold">{l2}</text>
          <text x="102" y={142 - b1 * 1.1} textAnchor="middle" fill="#f8fafc" fontSize="10">{b1.toFixed(0)}%</text>
          <text x="217" y={142 - b2 * 1.1} textAnchor="middle" fill="#f8fafc" fontSize="10">{b2.toFixed(0)}%</text>
        </svg>
      );
    }

    case 'rc-curve': {
      const isDischarge = s.mode === 'discharge' || n(s.inverted, 0) === 1;
      const pts: string[] = [];
      for (let i = 0; i <= 50; i++) {
        const u = (i / 50) * 5;
        const yVal = isDischarge ? Math.exp(-u) : 1 - Math.exp(-u);
        const x = 40 + (i / 50) * 240;
        const y = 150 - yVal * 110;
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      const tauX = 40 + (1 / 5) * 240;
      const tauY = isDischarge ? 150 - 0.368 * 110 : 150 - 0.632 * 110;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="40" y1="25" x2="40" y2="150" stroke="#475569" strokeWidth="2" />
          <line x1="40" y1="150" x2="290" y2="150" stroke="#475569" strokeWidth="2" />
          <line x1="40" y1="40" x2="280" y2="40" stroke="#334155" strokeDasharray="4 4" />
          <polyline fill="none" stroke="#38bdf8" strokeWidth="2.8" points={pts.join(' ')} />
          <line x1="40" y1={isDischarge ? 40 : 150} x2={tauX} y2={isDischarge ? 150 : 40} stroke="#fbbf24" strokeDasharray="3 3" strokeWidth="1.5" />
          <circle cx={tauX} cy={tauY} r="4.5" fill="#fbbf24" />
          <text x={tauX + 6} y={tauY + 4} fill="#fbbf24" fontSize="10" fontWeight="bold">
            t = τ ({isDischarge ? '37%' : '63%'})
          </text>
          <text x="245" y="168" fill="#94a3b8" fontSize="10">5τ</text>
        </svg>
      );
    }

    case 'rlc-fresnel': {
      const uR = clamp(n(s.uR, 8), 2, 30);
      const uL = clamp(n(s.uL, 14), 0, 35);
      const uC = clamp(n(s.uC, 8), 0, 35);
      const scale = 90 / Math.max(uR, Math.abs(uL - uC), 10);
      const dx = uR * scale;
      const dy = clamp((uL - uC) * scale, -65, 65);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="45" y1="110" x2={45 + dx} y2="110" stroke="#34d399" strokeWidth="2.8" />
          <line x1={45 + dx} y1="110" x2={45 + dx} y2={110 - dy} stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="45" y1="110" x2={45 + dx} y2={110 - dy} stroke="#fbbf24" strokeWidth="2.8" strokeDasharray="4 2" />
          <text x={45 + dx / 2 - 10} y="126" fill="#34d399" fontSize="10" fontWeight="bold"><SvgMathTspans text="U_R" baseFontSize={10} /></text>
          <text x={52 + dx} y={110 - dy / 2} fill="#38bdf8" fontSize="10" fontWeight="bold"><SvgMathTspans text="U_L - U_C" baseFontSize={10} /></text>
          <text x="20" y="26" fill="#fbbf24" fontSize="10" fontWeight="bold">Fresnel : φ = {n(s.phi, 0).toFixed(1)}°</text>
        </svg>
      );
    }

    case 'resonance-bell': {
      const ratio = clamp(n(s.ratio, 0.8), 0.1, 1);
      const Q = clamp(n(s.Q, 4), 0.5, 12);
      const pts: string[] = [];
      for (let i = 0; i <= 60; i++) {
        const u = 0.2 + (i / 60) * 1.6;
        const yNorm = 1 / Math.hypot(1 - u * u, u / Q);
        const x = 35 + (i / 60) * 250;
        const y = 152 - clamp(yNorm / Math.max(1, Q), 0, 1) * 112;
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="35" y1="152" x2="290" y2="152" stroke="#475569" strokeWidth="2" />
          <line x1="160" y1="30" x2="160" y2="152" stroke="#334155" strokeDasharray="4 4" />
          <polyline fill="none" stroke="#38bdf8" strokeWidth="2.8" points={pts.join(' ')} />
          <line x1="85" y1="73" x2="235" y2="73" stroke="#34d399" strokeDasharray="3 3" />
          <circle cx="160" cy={152 - ratio * 112} r="5" fill="#fbbf24" />
          <text x="168" y="34" fill="#fbbf24" fontSize="10" fontWeight="bold"><SvgMathTspans text="Résonance f₀ (I₀/√2 ⇒ Δf)" baseFontSize={10} /></text>
        </svg>
      );
    }

    case 'wave-train': {
      const lamPx = clamp(n(s.lambda, 70), 30, 140);
      const phi = n(s.phaseDiff, 0);
      const p1: string[] = [];
      const p2: string[] = [];
      for (let i = 0; i <= 80; i++) {
        const x = 25 + (i / 80) * 270;
        const y1 = 95 - 32 * Math.sin(((x - 25) / lamPx) * 2 * Math.PI);
        const y2 = 95 - 32 * Math.sin(((x - 25) / lamPx) * 2 * Math.PI - phi);
        p1.push(`${x.toFixed(1)},${y1.toFixed(1)}`);
        p2.push(`${x.toFixed(1)},${y2.toFixed(1)}`);
      }
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="25" y1="95" x2="295" y2="95" stroke="#475569" strokeWidth="1.5" />
          <polyline fill="none" stroke="#38bdf8" strokeWidth="2.5" points={p1.join(' ')} />
          {Math.abs(phi) > 0.05 && (
            <polyline fill="none" stroke="#fb7185" strokeWidth="2" strokeDasharray="4 3" points={p2.join(' ')} />
          )}
          <text x="28" y="26" fill="#fbbf24" fontSize="10" fontWeight="bold">Onde progressive / déphasage Δφ</text>
        </svg>
      );
    }

    case 'young-fringes': {
      const stepPx = clamp(n(s.interfrange, 16), 8, 44);
      const lam = n(s.lamNm, 590);
      const color = lam < 470 ? '#818cf8' : lam < 550 ? '#34d399' : lam < 600 ? '#fbbf24' : '#fb7185';
      const bars: number[] = [];
      for (let x = 160; x <= 290; x += stepPx) {
        bars.push(x);
        if (x !== 160) bars.push(320 - x);
      }
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <rect x="20" y="35" width="280" height="115" rx="8" fill="#020617" stroke="#334155" />
          {bars.map((bx, i) => (
            <rect key={i} x={bx - 3} y="42" width="6" height="101" rx="2" fill={color} opacity="0.88" />
          ))}
          <text x="160" y="172" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">
            Écran d’interférences (frange centrale x = 0)
          </text>
        </svg>
      );
    }

    case 'photoelectric': {
      const emitted = n(s.Ec, 0) > 0;
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <rect x="45" y="45" width="22" height="100" rx="4" fill="#64748b" />
          <rect x="255" y="45" width="18" height="100" rx="4" fill="#475569" />
          <line x1="115" y1="28" x2="68" y2="85" stroke="#a855f7" strokeWidth="2.8" />
          <text x="118" y="34" fill="#c084fc" fontSize="10" fontWeight="bold">Photon hν</text>
          {emitted ? (
            <>
              <line x1="72" y1="95" x2="245" y2="95" stroke="#34d399" strokeWidth="2.5" strokeDasharray="5 3" />
              <circle cx="170" cy="95" r="5" fill="#34d399" />
              <text x="115" y="82" fill="#34d399" fontSize="10" fontWeight="bold"><SvgMathTspans text="e⁻ éjecté (E_c > 0)" baseFontSize={10} /></text>
            </>
          ) : (
            <text x="105" y="102" fill="#fb7185" fontSize="11" fontWeight="bold">Bloqué : hν &lt; W₀ (λ &gt; λ₀)</text>
          )}
        </svg>
      );
    }

    case 'decay-curve': {
      const pts: string[] = [];
      for (let i = 0; i <= 50; i++) {
        const halfLives = (i / 50) * 5;
        const yNorm = Math.pow(0.5, halfLives);
        const x = 40 + (i / 50) * 240;
        const y = 152 - yNorm * 115;
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      const curRatio = clamp(n(s.ratio, 0.5), 0.02, 1);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="40" y1="28" x2="40" y2="152" stroke="#475569" strokeWidth="2" />
          <line x1="40" y1="152" x2="290" y2="152" stroke="#475569" strokeWidth="2" />
          <polyline fill="none" stroke="#fbbf24" strokeWidth="2.8" points={pts.join(' ')} />
          <line x1="40" y1={152 - curRatio * 115} x2="280" y2={152 - curRatio * 115} stroke="#38bdf8" strokeDasharray="3 3" />
          <text x="85" y="28" fill="#fbbf24" fontSize="10" fontWeight="bold"><SvgMathTspans text="N(t) = N₀ e^(-λt) — Paliers de t₁/₂" baseFontSize={10} /></text>
        </svg>
      );
    }

    case 'kinetics-curve': {
      const ratio = clamp(n(s.ratio, 0.5), 0.05, 1);
      const pts: string[] = [];
      for (let i = 0; i <= 50; i++) {
        const u = (i / 50) * 4;
        const yNorm = 1 - Math.exp(-u);
        const x = 40 + (i / 50) * 240;
        const y = 152 - yNorm * 112;
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="40" y1="28" x2="40" y2="152" stroke="#475569" strokeWidth="2" />
          <line x1="40" y1="152" x2="290" y2="152" stroke="#475569" strokeWidth="2" />
          <line x1="40" y1="40" x2="280" y2="40" stroke="#334155" strokeDasharray="4 4" />
          <polyline fill="none" stroke="#34d399" strokeWidth="2.8" points={pts.join(' ')} />
          <circle cx={40 + ratio * 210} cy={152 - ratio * 112} r="4.5" fill="#fbbf24" />
          <text x="52" y="26" fill="#34d399" fontSize="10" fontWeight="bold">Avancement x(t) & tangente v(t)</text>
        </svg>
      );
    }

    case 'ph-titration': {
      const ratio = clamp(n(s.ratio, 0.5), 0.02, 0.98);
      const rev = n(s.reverse, 0) === 1;
      const pts: string[] = [];
      for (let i = 0; i <= 60; i++) {
        const u = i / 60;
        const sig = 1 / (1 + Math.exp(-(u - 0.5) * 16));
        const yNorm = rev ? 1 - sig : sig;
        const x = 40 + u * 240;
        const y = 152 - (0.1 + yNorm * 0.8) * 120;
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      const pH = clamp(n(s.pH, 7), 0, 14);
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="40" y1="24" x2="40" y2="152" stroke="#475569" strokeWidth="2" />
          <line x1="40" y1="152" x2="290" y2="152" stroke="#475569" strokeWidth="2" />
          <polyline fill="none" stroke="#38bdf8" strokeWidth="2.8" points={pts.join(' ')} />
          <circle cx={40 + ratio * 240} cy={152 - (pH / 14) * 120} r="5" fill="#fbbf24" />
          <text x="52" y="24" fill="#fbbf24" fontSize="10" fontWeight="bold">Courbe pH(V) — Saut à l’équivalence</text>
        </svg>
      );
    }

    case 'aston-bars':
    case 'organic-bars':
    default: {
      const b1 = clamp(n(s.bar1, 65), 4, 100);
      const b2 = clamp(n(s.bar2, 45), 4, 100);
      const l1 = String(s.label1 ?? 'Série 1');
      const l2 = String(s.label2 ?? 'Série 2');
      return (
        <svg viewBox="0 0 320 190" className="w-full h-auto">
          <line x1="35" y1="150" x2="285" y2="150" stroke="#475569" strokeWidth="2" />
          <rect x="65" y={150 - b1 * 1.1} width="70" height={Math.max(5, b1 * 1.1)} rx="6" fill="#34d399" />
          <rect x="185" y={150 - b2 * 1.1} width="70" height={Math.max(5, b2 * 1.1)} rx="6" fill="#a855f7" />
          <text x="100" y="168" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontWeight="bold">{l1}</text>
          <text x="220" y="168" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontWeight="bold">{l2}</text>
        </svg>
      );
    }
  }
};

export const PhysicsTcExperiences: React.FC<PhysicsTcExperiencesProps> = ({
  chapterId,
  experienceIndex,
}) => {
  const list = PHYSICS_TC_LABO_SPECS[chapterId];
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
      renderSvg={(res) => renderPhysicsSvg(spec.visualKind, res)}
      accentTheme="sky"
    />
  );
};
