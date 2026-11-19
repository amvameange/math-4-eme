import React from 'react';
import { ChapterIllustrationKey } from '../../types/math';
import { FormattedMathText, SvgMathTspans } from '../FormattedMathText';

const TC_MATH_TITLES: Record<string, string> = {
  'tc-arithmetique': '🔢 Arithmétique ℤ : Horloge Modulaire, Euclide, Bézout & Gauss',
  'tc-complexes-algebre': '🧭 Plan d’Argand : Formes z = a+ib = re^(iθ) & Racines n-ièmes',
  'tc-complexes-geometrie': '📐 Géométrie Complexe : Angles (AB⃗, AC⃗) & Similitudes z’ = az + b',
  'tc-barycentre-vectoriel': '⚖️ Barycentre, Fonction de Leibniz & Produit Vectoriel u⃗ ∧ v⃗',
  'tc-limites-tvi': '📈 Limites, Théorème des Gendarmes, TVI & Bijection Réciproque f⁻¹',
  'tc-derivation-iaf': '✏️ Dérivation, Théorème de Rolle/TAF, IAF & Point d’Inflexion',
  'tc-ln-exp-equadiff': '🧬 Fonctions ln/exp, Croissances Comparées & Équadiffs (y’+ay=b, y’’+ω²y=0)',
  'tc-suites-adjacentes': '🪜 Suites Récurrentes u_{n+1} = f(u_n), Point Fixe & Suites Adjacentes',
  'tc-calcul-integral': '∫ Calcul Intégral, IPP (ALPES), Aires & Volumes de Révolution V = π∫f²',
  'tc-probas-conditionnelles': '🎲 Dénombrement (C_n^p, A_n^p), Arbre Pondéré & Formule de Bayes',
  'tc-binomiale-stats2': '📊 Loi Binomiale B(n, p) & Ajustement Affine des Moindres Carrés',
  'tc-espace-analytique': '🧊 Géométrie 3D : Plans, Droites, Distance d(Ω, P) & Section de Sphère',
  'tc-isometries-similitudes': '🔄 Isométries Planes : Double Réflexion s_Δ’ ◦ s_Δ & Similitudes',
  'tc-coniques': '🪐 Coniques : Parabole (e=1), Ellipse (e<1) & Hyperbole (e>1)',
};

export const TerminaleCMathDrawing: React.FC<{ illustrationKey: ChapterIllustrationKey }> = ({
  illustrationKey,
}) => {
  const title = TC_MATH_TITLES[illustrationKey] || '📐 Schéma Illustratif Mathématiques Terminale C';

  return (
    <div className="rounded-3xl bg-slate-900 border-2 border-indigo-500/40 p-4 sm:p-5 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-indigo-300">
        <span><FormattedMathText text={title} /></span>
        <span className="text-[11px] text-amber-300 font-bold">Programme Terminale C · Gabon</span>
      </div>

      <div className="flex justify-center bg-slate-950/90 rounded-2xl border border-slate-800 p-3">
        <svg viewBox="0 0 480 205" className="w-full max-w-2xl h-auto select-none">
          {/* 1. ARITHMÉTIQUE */}
          {illustrationKey === 'tc-arithmetique' && (
            <>
              <circle cx="115" cy="102" r="64" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="115" y="106" textAnchor="middle" className="text-xs font-black fill-amber-300">ℤ / 7ℤ</text>
              {[0, 1, 2, 3, 4, 5, 6].map((k) => {
                const ang = (-Math.PI / 2) + (k * 2 * Math.PI) / 7;
                const x = 115 + 50 * Math.cos(ang);
                const y = 102 + 50 * Math.sin(ang);
                return (
                  <g key={k}>
                    <circle cx={x} cy={y} r="10" fill={k === 1 ? '#10b981' : '#0f172a'} stroke="#38bdf8" strokeWidth="1.5" />
                    <text x={x} y={y + 4} textAnchor="middle" className="text-[10px] font-black fill-white">{k}</text>
                  </g>
                );
              })}
              <rect x="215" y="24" width="248" height="156" rx="14" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="339" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">BÉZOUT · GAUSS · FERMAT</text>
              <text x="339" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="a ∧ b = 1 ⇔ ∃(u,v) : au + bv = 1" baseFontSize={10} /></text>
              <text x="339" y="102" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="Gauss : a | bc et a ∧ b = 1 ⇒ a | c" baseFontSize={10} /></text>
              <text x="339" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="Fermat : p premier, p∤a ⇒ a^(p-1)≡1 [p]" baseFontSize={10} /></text>
              <text x="339" y="156" textAnchor="middle" className="text-[9px] font-bold fill-rose-300">PGCD(a,b) × PPCM(a,b) = |ab|</text>
            </>
          )}

          {/* 2. COMPLEXES ALGÈBRE */}
          {illustrationKey === 'tc-complexes-algebre' && (
            <>
              <line x1="35" y1="104" x2="215" y2="104" stroke="#64748b" strokeWidth="1.5" />
              <line x1="125" y1="22" x2="125" y2="184" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="125" cy="104" r="60" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 3" />
              {/* Triangle racines cubiques 1, j, j^2 */}
              <polygon points="185,104 95,52 95,156" fill="#6366f1" fillOpacity="0.2" stroke="#a855f7" strokeWidth="2" />
              <circle cx="185" cy="104" r="4" fill="#10b981" /><text x="194" y="108" className="text-[10px] font-black fill-emerald-300">1</text>
              <circle cx="95" cy="52" r="4" fill="#fbbf24" /><text x="88" y="44" className="text-[10px] font-black fill-amber-300">j</text>
              <circle cx="95" cy="156" r="4" fill="#38bdf8" /><text x="82" y="168" className="text-[10px] font-black fill-sky-300">j²</text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#8b55f6" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">MOIVRE &amp; EULER</text>
              <text x="353" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="z = r(cosθ + i sinθ) = r e^(iθ)" baseFontSize={10} /></text>
              <text x="353" y="102" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="(e^(iθ))ⁿ = e^(inθ)" baseFontSize={10} /></text>
              <text x="353" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="cosθ = (e^(iθ)+e^(-iθ))/2" baseFontSize={10} /></text>
              <text x="353" y="154" textAnchor="middle" className="text-[10px] font-mono fill-rose-300">1 + j + j² = 0  (j³ = 1)</text>
            </>
          )}

          {/* 3. COMPLEXES GÉOMÉTRIE */}
          {illustrationKey === 'tc-complexes-geometrie' && (
            <>
              <circle cx="122" cy="104" r="58" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" />
              <circle cx="64" cy="104" r="4.5" fill="#fbbf24" /><text x="52" y="108" className="text-[10px] font-black fill-amber-300">A</text>
              <circle cx="180" cy="104" r="4.5" fill="#fbbf24" /><text x="188" y="108" className="text-[10px] font-black fill-amber-300">B</text>
              <circle cx="135" cy="48" r="4.5" fill="#10b981" /><text x="142" y="44" className="text-[10px] font-black fill-emerald-300">M(z)</text>
              <line x1="64" y1="104" x2="180" y2="104" stroke="#64748b" strokeWidth="1.5" />
              <line x1="64" y1="104" x2="135" y2="48" stroke="#10b981" strokeWidth="2.5" />
              <line x1="180" y1="104" x2="135" y2="48" stroke="#10b981" strokeWidth="2.5" />
              <text x="122" y="180" textAnchor="middle" className="text-[9px] font-bold fill-sky-300"><SvgMathTspans text="(z-z_A)/(z-z_B) ∈ iℝ → Cercle [AB]" baseFontSize={9} /></text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">ANGLES &amp; SIMILITUDES</text>
              <text x="353" y="76" textAnchor="middle" className="text-[9px] font-mono fill-white"><SvgMathTspans text="(AB⃗,AC⃗) = arg((z_C-z_A)/(z_B-z_A))" baseFontSize={9} /></text>
              <text x="353" y="104" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">Similitude : z’ = a z + b</text>
              <text x="353" y="130" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">k = |a|, θ = arg(a)</text>
              <text x="353" y="156" textAnchor="middle" className="text-[10px] font-mono fill-rose-300">Centre ω = b / (1 - a)</text>
            </>
          )}

          {/* 4. BARYCENTRE & PRODUIT VECTORIEL */}
          {illustrationKey === 'tc-barycentre-vectoriel' && (
            <>
              {/* Trièdre u, v, u^v */}
              <circle cx="115" cy="130" r="3" fill="#fff" />
              <line x1="115" y1="130" x2="205" y2="145" stroke="#10b981" strokeWidth="3" />
              <text x="210" y="148" className="text-[10px] font-black fill-emerald-300"><SvgMathTspans text="u⃗" baseFontSize={10} /></text>
              <line x1="115" y1="130" x2="55" y2="160" stroke="#38bdf8" strokeWidth="3" />
              <text x="42" y="164" className="text-[10px] font-black fill-sky-300"><SvgMathTspans text="v⃗" baseFontSize={10} /></text>
              <line x1="115" y1="130" x2="115" y2="40" stroke="#f43f5e" strokeWidth="3" />
              <polygon points="115,34 110,44 120,44" fill="#f43f5e" />
              <text x="125" y="46" className="text-[10px] font-black fill-rose-400"><SvgMathTspans text="w⃗ = u⃗ ∧ v⃗" baseFontSize={10} /></text>
              <polygon points="115,130 205,145 145,175 55,160" fill="#10b981" fillOpacity="0.15" stroke="#334155" strokeWidth="1" />

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">BARYCENTRE &amp; LEIBNIZ</text>
              <text x="353" y="76" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="Σ α_i MA_i⃗ = (Σ α_i) MG⃗" baseFontSize={10} /></text>
              <text x="353" y="102" textAnchor="middle" className="text-[9px] font-mono fill-emerald-300"><SvgMathTspans text="Σ α_i MA_i² = (Σ α_i)MG² + f(G)" baseFontSize={9} /></text>
              <text x="353" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="Aire(ABC) = ½ ‖AB⃗ ∧ AC⃗‖" baseFontSize={10} /></text>
              <text x="353" y="156" textAnchor="middle" className="text-[10px] font-mono fill-rose-300"><SvgMathTspans text="V = (1/6) |(AB⃗∧AC⃗)·AD⃗|" baseFontSize={10} /></text>
            </>
          )}

          {/* 5. LIMITES, TVI & BIJECTION */}
          {illustrationKey === 'tc-limites-tvi' && (
            <>
              <line x1="35" y1="164" x2="225" y2="164" stroke="#64748b" strokeWidth="1.5" />
              <line x1="48" y1="24" x2="48" y2="178" stroke="#64748b" strokeWidth="1.5" />
              <line x1="48" y1="164" x2="205" y2="28" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="208" y="34" className="text-[9px] fill-slate-400">y = x</text>
              <path d="M 55 152 Q 115 135 190 42" fill="none" stroke="#10b981" strokeWidth="3" />
              <path d="M 60 155 Q 145 105 170 28" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="188" y="65" className="text-[10px] font-black fill-emerald-300"><SvgMathTspans text="C_f" baseFontSize={10} /></text>
              <text x="148" y="38" className="text-[10px] font-black fill-sky-300"><SvgMathTspans text="C_f⁻¹" baseFontSize={10} /></text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">TVI &amp; BRANCHES INFINIES</text>
              <text x="353" y="76" textAnchor="middle" className="text-[9px] font-bold fill-white">Continue + Strict. Monotone → ∃! α</text>
              <text x="353" y="102" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="(f⁻¹)’(y₀) = 1 / f’(f⁻¹(y₀))" baseFontSize={10} /></text>
              <text x="353" y="128" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">Asymptote y = ax+b : lim[f-(ax+b)]=0</text>
              <text x="353" y="156" textAnchor="middle" className="text-[9px] font-mono fill-rose-300"><SvgMathTspans text="sin(x)/x → 1  ;  (1-cos x)/x² → ½" baseFontSize={9} /></text>
            </>
          )}

          {/* 6. DÉRIVATION & IAF */}
          {illustrationKey === 'tc-derivation-iaf' && (
            <>
              <line x1="35" y1="164" x2="225" y2="164" stroke="#64748b" strokeWidth="1.5" />
              <line x1="45" y1="24" x2="45" y2="178" stroke="#64748b" strokeWidth="1.5" />
              <path d="M 55 145 Q 130 35 205 68" fill="none" stroke="#14b981" strokeWidth="3" />
              {/* Corde AB */}
              <line x1="65" y1="132" x2="195" y2="63" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="65" cy="132" r="4" fill="#fbbf24" /><text x="60" y="148" className="text-[9px] font-bold fill-amber-300">A</text>
              <circle cx="195" cy="63" r="4" fill="#fbbf24" /><text x="198" y="56" className="text-[9px] font-bold fill-amber-300">B</text>
              {/* Tangente parallèle en c */}
              <line x1="78" y1="98" x2="168" y2="50" stroke="#f43f5e" strokeWidth="2.5" />
              <circle cx="123" cy="74" r="4" fill="#f43f5e" /><text x="122" y="64" className="text-[9px] font-black fill-rose-300">c (f’(c))</text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#14b981" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">IAF, INFLEXION &amp; PRIMITIVES</text>
              <text x="353" y="76" textAnchor="middle" className="text-[9px] font-mono fill-white"><SvgMathTspans text="|f’| ≤ M ⇒ |f(b)-f(a)| ≤ M|b-a|" baseFontSize={9} /></text>
              <text x="353" y="102" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">Inflexion : f’’ s’annule &amp; change signe</text>
              <text x="353" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="∫ u’ uⁿ = u^(n+1)/(n+1) + C" baseFontSize={10} /></text>
              <text x="353" y="156" textAnchor="middle" className="text-[10px] font-mono fill-rose-300">∫ u’ / √u = 2√u + C</text>
            </>
          )}

          {/* 7. LN, EXP & ÉQUADIFFS */}
          {illustrationKey === 'tc-ln-exp-equadiff' && (
            <>
              <line x1="35" y1="125" x2="225" y2="125" stroke="#64748b" strokeWidth="1.5" />
              <line x1="88" y1="22" x2="88" y2="180" stroke="#64748b" strokeWidth="1.5" />
              <line x1="40" y1="173" x2="195" y2="22" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 4" />
              <path d="M 42 120 Q 88 112 128 32" fill="none" stroke="#38bdf8" strokeWidth="3" />
              <path d="M 94 176 Q 102 125 202 82" fill="none" stroke="#10b981" strokeWidth="3" />
              <text x="134" y="40" className="text-[10px] font-black fill-sky-300"><SvgMathTspans text="y = e^x" baseFontSize={10} /></text>
              <text x="188" y="76" className="text-[10px] font-black fill-emerald-300">y = ln x</text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">CROISSANCES &amp; ÉQUADIFFS</text>
              <text x="353" y="74" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="e^x / xⁿ → +∞  ;  (ln x)/xⁿ → 0" baseFontSize={10} /></text>
              <text x="353" y="100" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="y’ + ay = b → Ce^(-ax) + b/a" baseFontSize={10} /></text>
              <text x="353" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="y’’ + ω²y = 0 → A cos ωx + B sin ωx" baseFontSize={10} /></text>
              <text x="353" y="156" textAnchor="middle" className="text-[9px] font-mono fill-rose-300">∫ u’/u = ln|u| + C</text>
            </>
          )}

          {/* 8. SUITES & SUITES ADJACENTES */}
          {illustrationKey === 'tc-suites-adjacentes' && (
            <>
              <line x1="30" y1="158" x2="225" y2="158" stroke="#64748b" strokeWidth="1.5" />
              <line x1="40" y1="24" x2="40" y2="175" stroke="#64748b" strokeWidth="1.5" />
              <line x1="40" y1="158" x2="195" y2="28" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 45 110 Q 115 48 205 38" fill="none" stroke="#10b981" strokeWidth="3" />
              {/* Escalier */}
              <polyline points="55,158 55,95 104,95 104,64 140,64 140,51" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <text x="165" y="42" className="text-[10px] font-black fill-rose-400">Point fixe l = f(l)</text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">CONVERGENCE DES SUITES</text>
              <text x="353" y="76" textAnchor="middle" className="text-[9px] font-bold fill-white">Croissante majorée → converge vers l</text>
              <text x="353" y="102" textAnchor="middle" className="text-[9px] font-mono fill-emerald-300"><SvgMathTspans text="Adjacentes : u_n ↗, v_n ↘, v_n-u_n→0" baseFontSize={9} /></text>
              <text x="353" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="|u_n - l| ≤ kⁿ|u₀ - l| (0<k<1)" baseFontSize={10} /></text>
              <text x="353" y="156" textAnchor="middle" className="text-[9px] font-bold fill-rose-300"><SvgMathTspans text="u_{n+1}=f(u_n) → f continue ⇒ f(l)=l" baseFontSize={9} /></text>
            </>
          )}

          {/* 9. CALCUL INTÉGRAL */}
          {illustrationKey === 'tc-calcul-integral' && (
            <>
              <line x1="30" y1="158" x2="225" y2="158" stroke="#64748b" strokeWidth="1.5" />
              <line x1="40" y1="24" x2="40" y2="175" stroke="#64748b" strokeWidth="1.5" />
              <path d="M 65 158 L 65 110 Q 125 40 190 78 L 190 158 Z" fill="#f97316" fillOpacity="0.28" />
              <path d="M 45 128 Q 125 32 210 92" fill="none" stroke="#fbbf24" strokeWidth="3" />
              <text x="65" y="172" textAnchor="middle" className="text-[10px] font-bold fill-white">a</text>
              <text x="190" y="172" textAnchor="middle" className="text-[10px] font-bold fill-white">b</text>
              <text x="128" y="122" textAnchor="middle" className="text-[11px] font-black fill-amber-200"><SvgMathTspans text="∫_a^b f(x)dx" baseFontSize={11} /></text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#f97316" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">IPP, AIRES &amp; VOLUMES</text>
              <text x="353" y="76" textAnchor="middle" className="text-[9px] font-mono fill-white"><SvgMathTspans text="IPP : ∫ u’v = [uv]_a^b - ∫ uv’" baseFontSize={9} /></text>
              <text x="353" y="102" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="Aire = ∫ |f - g| dx × (‖i⃗‖·‖j⃗‖)" baseFontSize={10} /></text>
              <text x="353" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="Volume / (Ox) : V = π ∫_a^b f²(x)dx" baseFontSize={10} /></text>
              <text x="353" y="156" textAnchor="middle" className="text-[9px] font-mono fill-rose-300">Valeur moy : μ = 1/(b-a) ∫ f</text>
            </>
          )}

          {/* 10. PROBABILITÉS CONDITIONNELLES */}
          {illustrationKey === 'tc-probas-conditionnelles' && (
            <>
              {/* Arbre pondéré */}
              <circle cx="40" cy="104" r="4" fill="#fff" />
              <line x1="40" y1="104" x2="112" y2="62" stroke="#10b981" strokeWidth="2.5" />
              <line x1="40" y1="104" x2="112" y2="146" stroke="#f43f5e" strokeWidth="2.5" />
              <text x="116" y="66" className="text-[11px] font-black fill-emerald-300">B</text>
              <text x="116" y="150" className="text-[11px] font-black fill-rose-300">B̄</text>
              <line x1="128" y1="62" x2="195" y2="42" stroke="#38bdf8" strokeWidth="2" />
              <line x1="128" y1="62" x2="195" y2="82" stroke="#64748b" strokeWidth="1.5" />
              <text x="200" y="45" className="text-[10px] font-bold fill-sky-300"><SvgMathTspans text="A (P_B(A))" baseFontSize={10} /></text>
              <text x="200" y="85" className="text-[10px] fill-slate-400">Ā</text>
              <line x1="128" y1="146" x2="195" y2="126" stroke="#38bdf8" strokeWidth="2" />
              <line x1="128" y1="146" x2="195" y2="166" stroke="#64748b" strokeWidth="1.5" />
              <text x="200" y="129" className="text-[10px] font-bold fill-sky-300"><SvgMathTspans text="A (P_{B̄}(A))" baseFontSize={10} /></text>
              <text x="200" y="169" className="text-[10px] fill-slate-400">Ā</text>

              <rect x="262" y="24" width="204" height="156" rx="14" fill="#0f172a" stroke="#ec4899" strokeWidth="1.5" />
              <text x="364" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">COMBINATOIRE &amp; BAYES</text>
              <text x="364" y="76" textAnchor="middle" className="text-[9px] font-mono fill-white"><SvgMathTspans text="Simultané : C_n^p = n!/[p!(n-p)!]" baseFontSize={9} /></text>
              <text x="364" y="102" textAnchor="middle" className="text-[9px] font-mono fill-emerald-300"><SvgMathTspans text="P(A) = P(B)P_B(A) + P(B̄)P_{B̄}(A)" baseFontSize={9} /></text>
              <text x="364" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="P_A(B) = P(A∩B) / P(A)" baseFontSize={10} /></text>
              <text x="364" y="156" textAnchor="middle" className="text-[9px] font-bold fill-rose-300">Indépendance : P(A∩B) = P(A)·P(B)</text>
            </>
          )}

          {/* 11. BINOMIALE & STATS 2D */}
          {illustrationKey === 'tc-binomiale-stats2' && (
            <>
              <line x1="30" y1="158" x2="225" y2="158" stroke="#64748b" strokeWidth="1.5" />
              <line x1="40" y1="24" x2="40" y2="175" stroke="#64748b" strokeWidth="1.5" />
              {/* Nuage de points + droite régression */}
              <line x1="48" y1="145" x2="215" y2="42" stroke="#f43f5e" strokeWidth="2.5" />
              {[
                [60, 134], [80, 128], [105, 102], [130, 94], [158, 72], [185, 62], [202, 48],
              ].map(([cx, cy], idx) => (
                <circle key={idx} cx={cx} cy={cy} r="4" fill="#38bdf8" />
              ))}
              <circle cx="131" cy="91" r="6" fill="#fbbf24" />
              <text x="142" y="106" className="text-[10px] font-black fill-amber-300">G(x̄ ; ȳ)</text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">BINOMIALE &amp; RÉGRESSION</text>
              <text x="353" y="76" textAnchor="middle" className="text-[9px] font-mono fill-white"><SvgMathTspans text="P(X=k) = C_n^k p^k (1-p)^(n-k)" baseFontSize={9} /></text>
              <text x="353" y="102" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">E(X) = np ; V(X) = np(1-p)</text>
              <text x="353" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">y = ax + b : a = Cov(X,Y) / V(X)</text>
              <text x="353" y="156" textAnchor="middle" className="text-[9px] font-mono fill-rose-300"><SvgMathTspans text="r = Cov(X,Y) / (σ_X σ_Y)" baseFontSize={9} /></text>
            </>
          )}

          {/* 12. ESPACE ANALYTIQUE 3D */}
          {illustrationKey === 'tc-espace-analytique' && (
            <>
              <circle cx="122" cy="102" r="58" fill="#0284c7" fillOpacity="0.14" stroke="#38bdf8" strokeWidth="2.5" />
              <polygon points="35,130 210,130 185,160 15,160" fill="#10b981" fillOpacity="0.18" stroke="#34d399" strokeWidth="1.5" />
              <ellipse cx="122" cy="138" rx="44" ry="11" fill="#fbbf24" fillOpacity="0.25" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="122" cy="102" r="3.5" fill="#fff" /><text x="132" y="100" className="text-[10px] font-black fill-white">Ω</text>
              <circle cx="122" cy="138" r="3" fill="#fbbf24" /><text x="132" y="142" className="text-[9px] font-bold fill-amber-300">H</text>
              <line x1="122" y1="102" x2="122" y2="138" stroke="#f43f5e" strokeWidth="2" />
              <line x1="122" y1="102" x2="166" y2="138" stroke="#38bdf8" strokeWidth="2" />
              <text x="114" y="122" textAnchor="end" className="text-[9px] font-bold fill-rose-300">d</text>
              <text x="150" y="116" className="text-[9px] font-bold fill-sky-300">R</text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">PLANS, DROITES &amp; SPHÈRES</text>
              <text x="353" y="76" textAnchor="middle" className="text-[9px] font-mono fill-white"><SvgMathTspans text="Plan P : ax + by + cz + d = 0 (n⃗)" baseFontSize={9} /></text>
              <text x="353" y="102" textAnchor="middle" className="text-[9px] font-mono fill-emerald-300"><SvgMathTspans text="d(Ω,P) = |ax₀+by₀+cz₀+d|/‖n⃗‖" baseFontSize={9} /></text>
              <text x="353" y="128" textAnchor="middle" className="text-[10px] font-mono fill-sky-300"><SvgMathTspans text="Section (d<R) : r = √(R² - d²)" baseFontSize={10} /></text>
              <text x="353" y="156" textAnchor="middle" className="text-[9px] font-mono fill-rose-300"><SvgMathTspans text="Sphère diam.[AB] : MA⃗·MB⃗ = 0" baseFontSize={9} /></text>
            </>
          )}

          {/* 13. ISOMÉTRIES & SIMILITUDES */}
          {illustrationKey === 'tc-isometries-similitudes' && (
            <>
              <line x1="65" y1="168" x2="165" y2="38" stroke="#38bdf8" strokeWidth="2" />
              <line x1="50" y1="138" x2="215" y2="75" stroke="#10b981" strokeWidth="2" />
              <circle cx="96" cy="122" r="4.5" fill="#fbbf24" />
              <text x="96" y="138" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Ω (centre)</text>
              <text x="172" y="45" className="text-[10px] font-bold fill-sky-300">Δ</text>
              <text x="208" y="68" className="text-[10px] font-bold fill-emerald-300">Δ’</text>
              <path d="M 122 112 A 30 30 0 0 0 112 96" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
              <text x="132" y="102" className="text-[10px] font-black fill-rose-300">α → 2α</text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">ISOMÉTRIES DU PLAN</text>
              <text x="353" y="76" textAnchor="middle" className="text-[9px] font-mono fill-white"><SvgMathTspans text="s_Δ’ ◦ s_Δ (Δ ∩ Δ’ = Ω) = r(Ω ; 2α)" baseFontSize={9} /></text>
              <text x="353" y="102" textAnchor="middle" className="text-[9px] font-mono fill-emerald-300"><SvgMathTspans text="s_Δ’ ◦ s_Δ (Δ // Δ’) = t_{2 HH’⃗}" baseFontSize={9} /></text>
              <text x="353" y="128" textAnchor="middle" className="text-[9px] font-bold fill-sky-300"><SvgMathTspans text="Symétrie glissée : 0 point fixe, f²=t_{2u⃗}" baseFontSize={9} /></text>
              <text x="353" y="156" textAnchor="middle" className="text-[9px] font-bold fill-rose-300">Similitude (k) : Aires × k²</text>
            </>
          )}

          {/* 14. CONIQUES */}
          {illustrationKey === 'tc-coniques' && (
            <>
              <ellipse cx="122" cy="102" rx="82" ry="48" fill="#f43f5e" fillOpacity="0.14" stroke="#f43f5e" strokeWidth="2.5" />
              <line x1="25" y1="102" x2="220" y2="102" stroke="#64748b" strokeWidth="1" />
              <line x1="122" y1="35" x2="122" y2="170" stroke="#64748b" strokeWidth="1" />
              <circle cx="56" cy="102" r="4" fill="#fbbf24" /><text x="56" y="118" textAnchor="middle" className="text-[9px] font-black fill-amber-300">F’(-c)</text>
              <circle cx="188" cy="102" r="4" fill="#fbbf24" /><text x="188" y="118" textAnchor="middle" className="text-[9px] font-black fill-amber-300">F(+c)</text>
              <circle cx="155" cy="60" r="4" fill="#10b981" />
              <line x1="56" y1="102" x2="155" y2="60" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="188" y1="102" x2="155" y2="60" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="122" y="182" textAnchor="middle" className="text-[9px] font-bold fill-emerald-300">MF + MF’ = 2a (Ellipse)</text>

              <rect x="242" y="24" width="222" height="156" rx="14" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
              <text x="353" y="48" textAnchor="middle" className="text-[11px] font-black fill-amber-300">LES 3 CONIQUES (e = c/a)</text>
              <text x="353" y="76" textAnchor="middle" className="text-[9px] font-mono fill-sky-300">Parabole (e=1) : y² = 2px, F(p/2, 0)</text>
              <text x="353" y="102" textAnchor="middle" className="text-[9px] font-mono fill-emerald-300">Ellipse (e&lt;1) : x²/a²+y²/b²=1, c²=a²-b²</text>
              <text x="353" y="128" textAnchor="middle" className="text-[9px] font-mono fill-rose-300">Hyperbole (e&gt;1) : x²/a²-y²/b²=1, c²=a²+b²</text>
              <text x="353" y="156" textAnchor="middle" className="text-[9px] font-bold fill-amber-200">Asymptotes Hyp. : y = ±(b/a) x</text>
            </>
          )}
        </svg>
      </div>
    </div>
  );
};
