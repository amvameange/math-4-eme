import React from 'react';
import { PhysicsIllustrationKey } from '../../types/math';
import { FormattedMathText, SvgMathTspans } from '../FormattedMathText';

const TC_PHYS_TITLES: Record<string, string> = {
  'tc-cinematique-frenet': '🚀 Cinématique du Point : Vecteurs Cartésiens & Repère de Frenet (u⃗_T, u⃗_N)',
  'tc-dynamique-lorentz': '🧲 Dynamique : Tir Balistique & Force de Lorentz F⃗ = q v⃗ ∧ B⃗',
  'tc-gravitation-kepler': '🛰️ Gravitation Universelle, Lois de Kepler & Satellite Géostationnaire',
  'tc-oscillations-pendule': '🌀 Oscillateur Harmonique : Équation Différentielle & Conservation E_m',
  'tc-dipoles-rc-rl': '🔋 Dipôles RC & RL : Régime Transitoire τ et Oscillateur LC (Thomson)',
  'tc-resonance-rlc': '〰️ Circuit RLC Série en Régime Sinusoïdal : Résonance & Fresnel',
  'tc-ondes-diffraction': '🌊 Ondes Mécaniques Progressives, Double Périodicité (λ, T) & Diffraction',
  'tc-young-photoelectrique': '🌈 Interférences d’Young (i = λD/a) & Effet Photoélectrique (hν = W₀ + E_c)',
  'tc-noyau-radioactivite': '☢️ Noyau Atomique, Lois de Soddy & Décroissance Radioactive N(t) = N₀e^(-λt)',
  'tc-fission-fusion': '☀️ Courbe d’Aston, Fission (Oklo Gabon) & Fusion Nucléaire (ΔE = |Δm|c²)',
  'tc-cinetique-chimique': '⏱️ Cinétique Chimique : Suivi Temporel, Vitesse Volumique & t₁/₂',
  'tc-acides-bases-titrage': '🧪 Acides & Bases, Couples pK_a, Solution Tampon & Titrage pH-métrique',
  'tc-alcools-carbonyles': '⚗️ Alcools (I, II, III), Oxydation Ménagée & Tests Aldéhyde / Cétone',
  'tc-esterification-saponification': '🧫 Estérification Limitée (67 %), Synthèse Totale (R-COCl) & Saponification',
};

export const TerminaleCPhysicsDrawing: React.FC<{ illustrationKey: PhysicsIllustrationKey }> = ({
  illustrationKey,
}) => {
  const title = TC_PHYS_TITLES[illustrationKey] || '🔬 Schéma Illustratif Physique-Chimie Terminale C';

  return (
    <div className="rounded-3xl bg-slate-900 border-2 border-sky-500/35 p-4 sm:p-5 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-sky-300">
        <span><FormattedMathText text={title} /></span>
        <span className="text-[11px] text-amber-300 font-bold">Programme Terminale C · Gabon</span>
      </div>

      <div className="flex justify-center bg-slate-950/90 rounded-2xl border border-slate-800 p-3">
        <svg viewBox="0 0 480 205" className="w-full max-w-2xl h-auto select-none">
          {/* 1. CINÉMATIQUE FRENET */}
          {illustrationKey === 'tc-cinematique-frenet' && (
            <>
              <path d="M 45 160 Q 155 25 275 130" fill="none" stroke="#38bdf8" strokeWidth="3" />
              <circle cx="158" cy="146" r="56" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="158" cy="146" r="3" fill="#94a3b8" />
              <text x="158" y="160" textAnchor="middle" className="text-[9px] fill-slate-400">Centre C (rayon R)</text>
              <circle cx="158" cy="90" r="5" fill="#fbbf24" />
              <text x="150" y="80" className="text-[10px] font-black fill-amber-300">M(t)</text>
              {/* u_T tangent */}
              <line x1="158" y1="90" x2="235" y2="90" stroke="#10b981" strokeWidth="3" />
              <polygon points="241,90 231,85 231,95" fill="#10b981" />
              <text x="242" y="84" className="text-[10px] font-black fill-emerald-300"><SvgMathTspans text="v⃗, u⃗_T (a_T = dv/dt)" baseFontSize={10} /></text>
              {/* u_N normal */}
              <line x1="158" y1="90" x2="158" y2="138" stroke="#f43f5e" strokeWidth="3" />
              <polygon points="158,144 153,134 163,134" fill="#f43f5e" />
              <text x="108" y="122" className="text-[10px] font-black fill-rose-400"><SvgMathTspans text="a_N = v²/R" baseFontSize={10} /></text>
              {/* a total */}
              <line x1="158" y1="90" x2="208" y2="132" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="3 2" />
              <text x="212" y="138" className="text-[10px] font-bold fill-purple-300"><SvgMathTspans text="a⃗" baseFontSize={10} /></text>

              <rect x="295" y="22" width="170" height="160" rx="12" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="380" y="45" textAnchor="middle" className="text-[11px] font-black fill-amber-300">FRENET &amp; MRUV</text>
              <text x="380" y="70" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="a⃗ = (dv/dt)u⃗_T + (v²/R)u⃗_N" baseFontSize={10} /></text>
              <text x="380" y="96" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="a = √(a_T² + a_N²)" baseFontSize={10} /></text>
              <text x="380" y="124" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="v² - v₀² = 2a(x - x₀)" baseFontSize={10} /></text>
              <text x="380" y="152" textAnchor="middle" className="text-[9px] font-bold fill-slate-300"><SvgMathTspans text="MCU : a_T=0 mais a_N = Rω² ≠ 0" baseFontSize={9} /></text>
            </>
          )}

          {/* 2. DYNAMIQUE & LORENTZ */}
          {illustrationKey === 'tc-dynamique-lorentz' && (
            <>
              {/* Zone champ B */}
              <rect x="28" y="24" width="225" height="156" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="140" y="42" textAnchor="middle" className="text-[10px] font-black fill-sky-300"><SvgMathTspans text="Champ magnétique B⃗ ⊙ (sortant)" baseFontSize={10} /></text>
              {[58, 95, 132, 169].map((x) =>
                [65, 105, 145].map((y) => (
                  <g key={`${x}-${y}`}>
                    <circle cx={x} cy={y} r="6" fill="none" stroke="#334155" strokeWidth="1" />
                    <circle cx={x} cy={y} r="1.8" fill="#38bdf8" />
                  </g>
                ))
              )}
              <path d="M 45 145 A 68 68 0 0 1 178 100" fill="none" stroke="#facc15" strokeWidth="3" />
              <circle cx="105" cy="94" r="4.5" fill="#fbbf24" />
              <line x1="105" y1="94" x2="148" y2="78" stroke="#10b981" strokeWidth="2.5" />
              <text x="150" y="74" className="text-[10px] font-black fill-emerald-300"><SvgMathTspans text="v⃗" baseFontSize={10} /></text>
              <line x1="105" y1="94" x2="122" y2="132" stroke="#f43f5e" strokeWidth="2.5" />
              <text x="125" y="142" className="text-[10px] font-black fill-rose-400"><SvgMathTspans text="F⃗ = qv⃗∧B⃗" baseFontSize={10} /></text>

              <rect x="268" y="24" width="194" height="156" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="365" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">LOIS DE NEWTON &amp; WIEN</text>
              <text x="365" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="Σ F⃗ = m a⃗" baseFontSize={10} /></text>
              <text x="365" y="102" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">R = m v / (|q| B)</text>
              <text x="365" y="128" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">Tir : D = v₀² sin(2α) / g</text>
              <text x="365" y="156" textAnchor="middle" className="text-[9px] font-bold fill-rose-300">Filtre de vitesse : v = E / B</text>
            </>
          )}

          {/* 3. GRAVITATION & KEPLER */}
          {illustrationKey === 'tc-gravitation-kepler' && (
            <>
              <ellipse cx="148" cy="104" rx="112" ry="62" fill="#0284c7" fillOpacity="0.08" stroke="#38bdf8" strokeWidth="2.2" />
              <circle cx="98" cy="104" r="18" fill="#f59e0b" />
              <text x="98" y="108" textAnchor="middle" className="text-[9px] font-black fill-slate-950">Terre/Soleil</text>
              <circle cx="235" cy="64" r="6" fill="#34d399" />
              <line x1="235" y1="64" x2="178" y2="82" stroke="#f43f5e" strokeWidth="2.5" />
              <polygon points="172,84 182,77 184,86" fill="#f43f5e" />
              <text x="195" y="65" className="text-[10px] font-black fill-rose-400"><SvgMathTspans text="F⃗_G = -GMm/r² u⃗" baseFontSize={10} /></text>
              <line x1="98" y1="104" x2="260" y2="104" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
              <text x="190" y="118" className="text-[9px] fill-slate-300">Demi-grand axe a</text>

              <rect x="275" y="24" width="188" height="156" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="369" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">SATELLITES &amp; KEPLER</text>
              <text x="369" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white">v = √(GM / r)</text>
              <text x="369" y="102" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">T² / a³ = 4π² / (G M)</text>
              <text x="369" y="128" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="g(h) = g₀ (R_T/(R_T+h))²" baseFontSize={10} /></text>
              <text x="369" y="156" textAnchor="middle" className="text-[9px] font-bold fill-amber-200">Géostationnaire : T ≈ 23h56</text>
            </>
          )}

          {/* 4. OSCILLATIONS & PENDULE */}
          {illustrationKey === 'tc-oscillations-pendule' && (
            <>
              <rect x="22" y="48" width="12" height="90" fill="#475569" />
              <polyline points="34,92 52,78 68,106 84,78 100,106 116,78 132,92" fill="none" stroke="#94a3b8" strokeWidth="3" />
              <rect x="132" y="68" width="46" height="46" rx="8" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2.5" />
              <text x="155" y="95" textAnchor="middle" className="text-xs font-black fill-white">m</text>
              <line x1="20" y1="120" x2="235" y2="120" stroke="#64748b" strokeWidth="2" />
              <text x="155" y="142" textAnchor="middle" className="text-[10px] font-bold fill-amber-300"><SvgMathTspans text="x(t) = X_m cos(ω₀t + φ)" baseFontSize={10} /></text>
              <text x="130" y="165" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">T₀ = 2π √(m/k)</text>

              <rect x="255" y="24" width="206" height="156" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="358" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300"><SvgMathTspans text="BILAN ÉNERGÉTIQUE E_m" baseFontSize={11} /></text>
              <path d="M 278 142 Q 358 62 438 142" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="278" y1="102" x2="438" y2="102" stroke="#facc15" strokeWidth="2" strokeDasharray="4 3" />
              <text x="358" y="94" textAnchor="middle" className="text-[9px] font-bold fill-amber-300"><SvgMathTspans text="E_m = ½ k X_m² = ½ m v_max²" baseFontSize={9} /></text>
              <text x="358" y="164" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">x’’ + (k/m) x = 0</text>
            </>
          )}

          {/* 5. DIPÔLES RC / RL / LC */}
          {illustrationKey === 'tc-dipoles-rc-rl' && (
            <>
              <line x1="36" y1="158" x2="245" y2="158" stroke="#64748b" strokeWidth="2" />
              <line x1="36" y1="30" x2="36" y2="158" stroke="#64748b" strokeWidth="2" />
              <path d="M 36 158 Q 62 54 235 46" fill="none" stroke="#10b981" strokeWidth="3" />
              <line x1="36" y1="44" x2="235" y2="44" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="28" y="48" textAnchor="end" className="text-[10px] font-bold fill-amber-300">E</text>
              <line x1="36" y1="158" x2="96" y2="44" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="96" y1="44" x2="96" y2="158" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
              <text x="96" y="174" textAnchor="middle" className="text-[10px] font-black fill-rose-400">τ = R·C</text>
              <text x="165" y="174" textAnchor="middle" className="text-[9px] fill-slate-400">5τ (99%)</text>
              <text x="155" y="84" className="text-[10px] font-bold fill-emerald-300">0,63 E à t = τ</text>

              <rect x="262" y="24" width="202" height="156" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="363" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">RC, RL &amp; THOMSON LC</text>
              <text x="363" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="RC : τ = R·C  |  E_C = ½CU²" baseFontSize={10} /></text>
              <text x="363" y="104" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="RL : τ = L/R_t | E_L = ½LI²" baseFontSize={10} /></text>
              <text x="363" y="132" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">LC : T₀ = 2π √(L C)</text>
              <text x="363" y="158" textAnchor="middle" className="text-[9px] font-bold fill-rose-300"><SvgMathTspans text="u_C + RC du_C/dt = E" baseFontSize={9} /></text>
            </>
          )}

          {/* 6. RÉSONANCE RLC */}
          {illustrationKey === 'tc-resonance-rlc' && (
            <>
              {/* Triangle de Fresnel */}
              <line x1="48" y1="148" x2="188" y2="148" stroke="#10b981" strokeWidth="3" />
              <text x="118" y="164" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">R·I (sur l’axe I)</text>
              <line x1="188" y1="148" x2="188" y2="48" stroke="#38bdf8" strokeWidth="3" />
              <text x="200" y="98" className="text-[9px] font-bold fill-sky-300">(Lω - 1/Cω)I</text>
              <line x1="48" y1="148" x2="188" y2="48" stroke="#fbbf24" strokeWidth="3" />
              <text x="102" y="86" className="text-[11px] font-black fill-amber-300">U = Z·I</text>
              <text x="86" y="138" className="text-[10px] font-bold fill-rose-300">φ</text>

              <rect x="268" y="24" width="194" height="156" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="365" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">RÉSONANCE RLC SÉRIE</text>
              <text x="365" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white">Z = √[R² + (Lω - 1/Cω)²]</text>
              <text x="365" y="102" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="Résonance : LCω₀² = 1 → Z=R" baseFontSize={10} /></text>
              <text x="365" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="Q = f₀/Δf = Lω₀/R = U_C/U" baseFontSize={10} /></text>
              <text x="365" y="156" textAnchor="middle" className="text-[10px] font-mono fill-rose-300">P = U · I · cos φ</text>
            </>
          )}

          {/* 7. ONDES & DIFFRACTION */}
          {illustrationKey === 'tc-ondes-diffraction' && (
            <>
              <path d="M 30 92 Q 55 32 80 92 T 130 92 T 180 92 T 230 92" fill="none" stroke="#38bdf8" strokeWidth="3" />
              <line x1="55" y1="40" x2="155" y2="40" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="55" cy="62" r="3" fill="#fbbf24" />
              <circle cx="155" cy="62" r="3" fill="#fbbf24" />
              <text x="105" y="32" textAnchor="middle" className="text-[11px] font-black fill-amber-300">λ = v · T = v / N</text>
              <text x="130" y="155" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">d₂ - d₁ = kλ (en phase) | (k+½)λ (opp.)</text>

              <rect x="262" y="24" width="202" height="156" rx="14" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="363" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">DIFFRACTION LASER</text>
              <text x="363" y="80" textAnchor="middle" className="text-[11px] font-mono fill-white">θ = λ / a (rad)</text>
              <text x="363" y="108" textAnchor="middle" className="text-[11px] font-mono fill-sky-300">Largeur L = 2 λ D / a</text>
              <text x="363" y="140" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Corde tendue : v = √(T / μ)</text>
            </>
          )}

          {/* 8. YOUNG & PHOTOÉLECTRIQUE */}
          {illustrationKey === 'tc-young-photoelectrique' && (
            <>
              <line x1="72" y1="30" x2="72" y2="85" stroke="#94a3b8" strokeWidth="4" />
              <line x1="72" y1="95" x2="72" y2="115" stroke="#94a3b8" strokeWidth="4" />
              <line x1="72" y1="125" x2="72" y2="175" stroke="#94a3b8" strokeWidth="4" />
              <text x="58" y="92" textAnchor="end" className="text-[9px] fill-sky-300">F₁</text>
              <text x="58" y="122" textAnchor="end" className="text-[9px] fill-sky-300">F₂</text>
              <line x1="72" y1="90" x2="215" y2="75" stroke="#10b981" strokeWidth="2" />
              <line x1="72" y1="120" x2="215" y2="75" stroke="#f43f5e" strokeWidth="2" />
              <line x1="215" y1="28" x2="215" y2="175" stroke="#fbbf24" strokeWidth="3" />
              <text x="225" y="80" className="text-[10px] font-black fill-amber-300">i = λD/a</text>
              <text x="145" y="168" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">δ = ax/D = kλ (brillante)</text>

              <rect x="275" y="24" width="188" height="156" rx="14" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
              <text x="369" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">EFFET PHOTOÉLECTRIQUE</text>
              <text x="369" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="E_photon = hν = hc/λ" baseFontSize={10} /></text>
              <text x="369" y="102" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="hν = W₀ + E_{c,max}" baseFontSize={10} /></text>
              <text x="369" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="E_{c,max} = e · U₀" baseFontSize={10} /></text>
              <text x="369" y="156" textAnchor="middle" className="text-[9px] font-bold fill-rose-300">Seuil : λ ≤ λ₀ = hc/W₀</text>
            </>
          )}

          {/* 9. NOYAU & RADIOACTIVITÉ */}
          {illustrationKey === 'tc-noyau-radioactivite' && (
            <>
              <line x1="36" y1="158" x2="245" y2="158" stroke="#64748b" strokeWidth="2" />
              <line x1="36" y1="28" x2="36" y2="158" stroke="#64748b" strokeWidth="2" />
              <path d="M 36 38 Q 75 135 235 154" fill="none" stroke="#f43f5e" strokeWidth="3" />
              <circle cx="36" cy="38" r="4" fill="#fbbf24" />
              <circle cx="78" cy="98" r="4" fill="#10b981" />
              <circle cx="120" cy="128" r="4" fill="#38bdf8" />
              <text x="26" y="42" textAnchor="end" className="text-[9px] font-bold fill-amber-300">N₀</text>
              <text x="26" y="102" textAnchor="end" className="text-[9px] font-bold fill-emerald-300">N₀/2</text>
              <text x="78" y="174" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">t₁/₂</text>
              <text x="120" y="174" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">2t₁/₂</text>

              <rect x="262" y="24" width="202" height="156" rx="14" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
              <text x="363" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">LOIS DE RADIOACTIVITÉ</text>
              <text x="363" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="N(t) = N₀ e^(-λt) ; A = λN" baseFontSize={10} /></text>
              <text x="363" y="102" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">t₁/₂ = ln(2) / λ</text>
              <text x="363" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">Soddy : Σ A et Σ Z conservés</text>
              <text x="363" y="156" textAnchor="middle" className="text-[9px] font-bold fill-rose-300"><SvgMathTspans text="E_l = Δm·c² (1u = 931,5 MeV)" baseFontSize={9} /></text>
            </>
          )}

          {/* 10. FISSION & FUSION (ASTON) */}
          {illustrationKey === 'tc-fission-fusion' && (
            <>
              <line x1="36" y1="158" x2="245" y2="158" stroke="#64748b" strokeWidth="2" />
              <line x1="36" y1="28" x2="36" y2="158" stroke="#64748b" strokeWidth="2" />
              <path d="M 44 50 Q 75 148 110 144 T 235 122" fill="none" stroke="#fbbf24" strokeWidth="3" />
              <circle cx="102" cy="144" r="5" fill="#10b981" />
              <text x="102" y="128" textAnchor="middle" className="text-[9px] font-black fill-emerald-300">Max stabilité (⁵⁶Fe)</text>
              <text x="58" y="44" className="text-[9px] font-bold fill-sky-300">Fusion →</text>
              <text x="195" y="108" className="text-[9px] font-bold fill-rose-300">← Fission (²³⁵U)</text>

              <rect x="262" y="24" width="202" height="156" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="363" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">FISSION (OKLO) &amp; FUSION</text>
              <text x="363" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="ΔE = [Σm_init - Σm_fin] c²" baseFontSize={10} /></text>
              <text x="363" y="104" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="Fusion : ²H + ³H → ⁴He + n" baseFontSize={10} /></text>
              <text x="363" y="132" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="Fission : ²³⁵U + n → Sr+Xe+kn" baseFontSize={10} /></text>
              <text x="363" y="158" textAnchor="middle" className="text-[9px] font-bold fill-amber-200"><SvgMathTspans text="E_lib = Σ E_l(prod) - Σ E_l(réact)" baseFontSize={9} /></text>
            </>
          )}

          {/* 11. CINÉTIQUE CHIMIQUE */}
          {illustrationKey === 'tc-cinetique-chimique' && (
            <>
              <line x1="36" y1="158" x2="245" y2="158" stroke="#64748b" strokeWidth="2" />
              <line x1="36" y1="28" x2="36" y2="158" stroke="#64748b" strokeWidth="2" />
              <path d="M 36 158 Q 68 48 235 44" fill="none" stroke="#a855f7" strokeWidth="3" />
              <line x1="36" y1="44" x2="235" y2="44" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="28" y="48" textAnchor="end" className="text-[9px] font-bold fill-amber-300"><SvgMathTspans text="x_f" baseFontSize={9} /></text>
              <line x1="36" y1="101" x2="88" y2="101" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="88" y1="101" x2="88" y2="158" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="28" y="104" textAnchor="end" className="text-[9px] font-bold fill-emerald-300"><SvgMathTspans text="x_f/2" baseFontSize={9} /></text>
              <text x="88" y="174" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">t₁/₂</text>
              <line x1="36" y1="158" x2="90" y2="54" stroke="#38bdf8" strokeWidth="2" />
              <text x="108" y="68" className="text-[9px] font-bold fill-sky-300">Pente = dx/dt</text>

              <rect x="262" y="24" width="202" height="156" rx="14" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="363" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">CINÉTIQUE CHIMIQUE</text>
              <text x="363" y="78" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="v(t) = (1 / V_sol) · dx/dt" baseFontSize={10} /></text>
              <text x="363" y="106" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="x(t₁/₂) = x_f / 2" baseFontSize={10} /></text>
              <text x="363" y="134" textAnchor="middle" className="text-[9px] font-bold fill-sky-300">Accélérateurs : T ↑, [Réactifs] ↑</text>
              <text x="363" y="156" textAnchor="middle" className="text-[9px] font-bold fill-rose-300"><SvgMathTspans text="& Catalyseur (sans changer x_f)" baseFontSize={9} /></text>
            </>
          )}

          {/* 12. ACIDES-BASES & TITRAGE pH */}
          {illustrationKey === 'tc-acides-bases-titrage' && (
            <>
              <line x1="36" y1="162" x2="245" y2="162" stroke="#64748b" strokeWidth="2" />
              <line x1="36" y1="28" x2="36" y2="162" stroke="#64748b" strokeWidth="2" />
              {/* Courbe sigmoïde de titrage acide faible par base forte */}
              <path d="M 38 140 Q 95 128 135 120 Q 150 112 152 80 Q 154 46 175 42 L 235 40" fill="none" stroke="#10b981" strokeWidth="3" />
              <circle cx="95" cy="126" r="4" fill="#fbbf24" />
              <text x="95" y="114" textAnchor="middle" className="text-[9px] font-bold fill-amber-300"><SvgMathTspans text="Demi-éq: pH=pK_a" baseFontSize={9} /></text>
              <circle cx="152" cy="80" r="4.5" fill="#f43f5e" />
              <text x="188" y="84" className="text-[10px] font-black fill-rose-400"><SvgMathTspans text="E(V_{bE}; pH_E)" baseFontSize={10} /></text>

              <rect x="262" y="24" width="202" height="156" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="363" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300"><SvgMathTspans text="pH, pK_a & TITRAGE" baseFontSize={11} /></text>
              <text x="363" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="pH = pK_a + log([A⁻]/[HA])" baseFontSize={10} /></text>
              <text x="363" y="102" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="Équivalence : C_a V_a = C_b V_{bE}" baseFontSize={10} /></text>
              <text x="363" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">Acide fort : pH = -log C</text>
              <text x="363" y="156" textAnchor="middle" className="text-[9px] font-bold fill-purple-300"><SvgMathTspans text="Tampon : [HA] ≈ [A⁻] → pH ≈ pK_a" baseFontSize={9} /></text>
            </>
          )}

          {/* 13. ALCOOLS & COMPOSÉS CARBONYLÉS */}
          {illustrationKey === 'tc-alcools-carbonyles' && (
            <>
              <rect x="22" y="28" width="222" height="150" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="133" y="50" textAnchor="middle" className="text-[11px] font-black fill-sky-300">OXYDATION MÉNAGÉE</text>
              <text x="133" y="78" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="I : R-CH₂OH → Aldéhyde → Acide" baseFontSize={10} /></text>
              <text x="133" y="106" textAnchor="middle" className="text-[10px] font-mono fill-amber-300">II : R-CHOH-R’ → Cétone (R-CO-R’)</text>
              <text x="133" y="134" textAnchor="middle" className="text-[10px] font-mono fill-rose-400">III : Pas d’oxydation ménagée !</text>
              <text x="133" y="160" textAnchor="middle" className="text-[9px] font-bold fill-slate-300">Sans rupture de la chaîne carbonée</text>

              <rect x="258" y="28" width="204" height="150" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="360" y="50" textAnchor="middle" className="text-[11px] font-black fill-amber-300">TESTS CARACTÉRISTIQUES</text>
              <text x="360" y="80" textAnchor="middle" className="text-[10px] font-bold fill-amber-200">2,4-DNPH : Précipité jaune</text>
              <text x="360" y="96" textAnchor="middle" className="text-[9px] fill-slate-300">(Aldéhyde OU Cétone)</text>
              <text x="360" y="124" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">Fehling / Tollens / Schiff :</text>
              <text x="360" y="142" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Uniquement ALDÉHYDE (-CHO) !</text>
            </>
          )}

          {/* 14. ESTÉRIFICATION & SAPONIFICATION */}
          {illustrationKey === 'tc-esterification-saponification' && (
            <>
              <rect x="22" y="28" width="222" height="150" rx="14" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="133" y="50" textAnchor="middle" className="text-[11px] font-black fill-purple-300">ESTÉRIFICATION &amp; CONTRÔLE</text>
              <text x="133" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white">R-COOH + R’-OH ⇌ Ester + H₂O</text>
              <text x="133" y="102" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">Lente · Limitée (67% I) · Athermique</text>
              <text x="133" y="128" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Totale avec Chlorure R-COCl</text>
              <text x="133" y="156" textAnchor="middle" className="text-[9px] fill-sky-300">H₂SO₄ + ΔT accélèrent sans changer K</text>

              <rect x="258" y="28" width="204" height="150" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="360" y="50" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">SAPONIFICATION (SAVON)</text>
              <text x="360" y="80" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="Ester + HO⁻ → R-COO⁻ + R’-OH" baseFontSize={10} /></text>
              <text x="360" y="108" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">Réaction LENTE mais TOTALE !</text>
              <text x="360" y="136" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Relargage : NaCl saturé précipite</text>
              <text x="360" y="154" textAnchor="middle" className="text-[9px] fill-slate-300">le savon (carboxylate de sodium)</text>
            </>
          )}
        </svg>
      </div>
    </div>
  );
};
