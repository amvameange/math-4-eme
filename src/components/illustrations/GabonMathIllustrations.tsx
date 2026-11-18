import React from 'react';
import { ChapterIllustrationKey, GradeLevel, PhysicsIllustrationKey } from '../../types/math';
import { PhysicsChapterIllustration } from './GabonPhysicsIllustrations';
import { TerminaleCMathDrawing } from './TerminaleCMathDrawings';

/**
 * Illustrations pédagogiques vivantes, colorées et culturelles pour Terminale C Gabon
 * + routage automatique vers les illustrations de Physique-Chimie & Maths Terminale C
 */

const PHYSICS_KEYS: Set<string> = new Set<PhysicsIllustrationKey>([
  'circuit-simple',
  'circuits-serie-derivation',
  'intensite',
  'tension',
  'loi-ohm',
  'puissance-seeg',
  'propagation-lumiere',
  'ombres-eclipses',
  'reflexion-refraction',
  'lentilles',
  'dispersion-couleurs',
  'masse-volumique',
  'forces-dynamometre',
  'poids-masse',
  'pression-archimede',
  'air-gaz',
  'atomes-molecules',
  'combustions',
  'equations-bilan',
  'solutions-ph',
  'equilibre-deux-forces',
  'travail-puissance-meca',
  'energie-mecanique',
  'association-resistors',
  'transformateur-diode',
  'oeil-instruments',
  'metaux-oxydation',
  'ions-tests',
  'acides-bases-neutralisation',
  'hydrocarbures-alcools',
  'tc-cinematique-frenet',
  'tc-dynamique-lorentz',
  'tc-gravitation-kepler',
  'tc-oscillations-pendule',
  'tc-dipoles-rc-rl',
  'tc-resonance-rlc',
  'tc-ondes-diffraction',
  'tc-young-photoelectrique',
  'tc-noyau-radioactivite',
  'tc-fission-fusion',
  'tc-cinetique-chimique',
  'tc-acides-bases-titrage',
  'tc-alcools-carbonyles',
  'tc-esterification-saponification',
]);

// Mascotte : Koko le Matheux (Version Expert 4ème / 3ème BEPC avec compas & équerre)
export const MascotKoko: React.FC<{
  expression?: 'happy' | 'thinking' | 'victory';
  speech?: string;
  gradeLevel?: GradeLevel;
}> = ({ speech, gradeLevel = '4eme' }) => {
  return (
    <div className="flex items-start gap-3.5 p-4 rounded-3xl bg-gradient-to-r from-amber-500/15 via-emerald-500/10 to-sky-500/15 border border-amber-500/30 shadow-lg">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 p-1 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
        <svg viewBox="0 0 64 64" className="w-12 h-12 select-none">
          <circle cx="32" cy="35" r="21" fill="#f59e0b" />
          <circle cx="16" cy="19" r="7.5" fill="#d97706" />
          <circle cx="16" cy="19" r="3.8" fill="#fef3c7" />
          <circle cx="48" cy="19" r="7.5" fill="#d97706" />
          <circle cx="48" cy="19" r="3.8" fill="#fef3c7" />
          <ellipse cx="32" cy="41" rx="10" ry="6.5" fill="#fef3c7" />
          <polygon points="32,37 29,34 35,34" fill="#b45309" />
          <line x1="18" y1="41" x2="26" y2="40" stroke="#78350f" strokeWidth="1.5" />
          <line x1="18" y1="44" x2="26" y2="43" stroke="#78350f" strokeWidth="1.5" />
          <line x1="46" y1="41" x2="38" y2="40" stroke="#78350f" strokeWidth="1.5" />
          <line x1="46" y1="44" x2="38" y2="43" stroke="#78350f" strokeWidth="1.5" />
          <rect x="18" y="24" width="12" height="9" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <circle cx="24" cy="28.5" r="2.5" fill="#0f172a" />
          <rect x="34" y="24" width="12" height="9" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <circle cx="40" cy="28.5" r="2.5" fill="#0f172a" />
          <line x1="30" y1="28.5" x2="34" y2="28.5" stroke="#0f172a" strokeWidth="2" />
          <path d="M 28 43 Q 32 47 36 43" fill="none" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
          <polygon points="32,5 16,13 32,18 48,13" fill="#0284c7" />
          <polygon points="30,17 34,17 32,22" fill="#0284c7" />
          <path d="M 20 53 Q 32 58 44 53" stroke="#10b981" strokeWidth="3" fill="none" />
          <path d="M 22 55.5 Q 32 60 42 55.5" stroke="#facc15" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="flex-1 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-extrabold text-amber-400">
            Koko le Matheux ({gradeLevel === 'Terminale C' ? 'Terminale Série C · Bac' : gradeLevel === '3eme' ? 'Classe de 3ème BEPC' : 'Classe de 4ème'})
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-[11px] text-emerald-400 font-bold">
            Programme Officiel Gabon (BAC C) 🇬🇦
          </span>
        </div>
        <p className="text-slate-200 mt-1 leading-relaxed font-medium">
          {speech ||
            (gradeLevel === 'Terminale C'
              ? 'Mbolo futur bachelier Série C ! Observe toujours les schémas illustratifs (Frenet, Argand, TVI, IAF, Coniques) avant de lancer tes démonstrations et rédige chaque étape avec rigueur !'
              : gradeLevel === '3eme'
              ? 'Mbolo futur bachelier ! En 3ème BEPC, observe mes figures avant chaque théorème (Thalès, Trigo, Chasles, Sections k³) et pose toujours tes calculs en colonne !'
              : 'Mbolo champion ! En 4ème, chaque chapitre est séparé pour que tu maîtrises 100% du programme sans tout mélanger. Observe mes dessins pour tout retenir !')}
        </p>
      </div>
    </div>
  );
};

// 1. Relatifs & Puissances
export const Gabon4eRelatifsPuissancesIllustration: React.FC = () => (
  <div className="rounded-3xl bg-slate-900 border-2 border-indigo-500/40 p-4 sm:p-5 shadow-xl space-y-4">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-indigo-300">
      <span>⚡ Le Radar des Signes & La Fusée des Puissances (aⁿ)</span>
      <span className="text-[11px] text-amber-300 font-bold">Programme 4ème Gabon</span>
    </div>
    <div className="grid md:grid-cols-2 gap-4 items-center">
      <div className="bg-slate-950/90 rounded-2xl border border-slate-800 p-3 flex flex-col items-center">
        <svg viewBox="0 0 320 185" className="w-full max-w-xs h-auto select-none">
          <text x="160" y="20" textAnchor="middle" className="text-[11px] font-black fill-amber-300">RÈGLE DES SIGNES (× et ÷)</text>
          <rect x="20" y="34" width="280" height="30" rx="8" fill="#064e3b" fillOpacity="0.45" stroke="#10b981" strokeWidth="1.5" />
          <circle cx="52" cy="49" r="10" fill="#10b981" /><text x="52" y="53" textAnchor="middle" className="text-xs font-black fill-slate-950">+</text>
          <text x="85" y="53" textAnchor="middle" className="text-xs font-black fill-white">×</text>
          <circle cx="118" cy="49" r="10" fill="#10b981" /><text x="118" y="53" textAnchor="middle" className="text-xs font-black fill-slate-950">+</text>
          <text x="150" y="53" textAnchor="middle" className="text-xs font-black fill-amber-300">=</text>
          <circle cx="182" cy="49" r="10" fill="#10b981" /><text x="182" y="53" textAnchor="middle" className="text-xs font-black fill-slate-950">+</text>
          <text x="245" y="53" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Même signe ➔ +</text>

          <rect x="20" y="72" width="280" height="30" rx="8" fill="#064e3b" fillOpacity="0.45" stroke="#10b981" strokeWidth="1.5" />
          <circle cx="52" cy="87" r="10" fill="#f43f5e" /><text x="52" y="91" textAnchor="middle" className="text-xs font-black fill-white">-</text>
          <text x="85" y="91" textAnchor="middle" className="text-xs font-black fill-white">×</text>
          <circle cx="118" cy="87" r="10" fill="#f43f5e" /><text x="118" y="91" textAnchor="middle" className="text-xs font-black fill-white">-</text>
          <text x="150" y="91" textAnchor="middle" className="text-xs font-black fill-amber-300">=</text>
          <circle cx="182" cy="87" r="10" fill="#10b981" /><text x="182" y="91" textAnchor="middle" className="text-xs font-black fill-slate-950">+</text>
          <text x="245" y="91" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">2 moins ➔ + !</text>

          <rect x="20" y="110" width="280" height="30" rx="8" fill="#881337" fillOpacity="0.35" stroke="#f43f5e" strokeWidth="1.5" />
          <circle cx="52" cy="125" r="10" fill="#10b981" /><text x="52" y="129" textAnchor="middle" className="text-xs font-black fill-slate-950">+</text>
          <text x="85" y="129" textAnchor="middle" className="text-xs font-black fill-white">×</text>
          <circle cx="118" cy="125" r="10" fill="#f43f5e" /><text x="118" y="129" textAnchor="middle" className="text-xs font-black fill-white">-</text>
          <text x="150" y="129" textAnchor="middle" className="text-xs font-black fill-amber-300">=</text>
          <circle cx="182" cy="125" r="10" fill="#f43f5e" /><text x="182" y="129" textAnchor="middle" className="text-xs font-black fill-white">-</text>
          <text x="245" y="129" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">Opposés ➔ -</text>

          <text x="160" y="166" textAnchor="middle" className="text-[10px] font-bold fill-slate-300">
            Astuce : Nombre PAIR de (−) ➔ (+) | Nombre IMPAIR de (−) ➔ (−)
          </text>
        </svg>
      </div>
      <div className="bg-slate-950/90 rounded-2xl border border-slate-800 p-3 flex flex-col items-center">
        <svg viewBox="0 0 320 185" className="w-full max-w-xs h-auto select-none">
          <text x="160" y="20" textAnchor="middle" className="text-[11px] font-black fill-sky-300">TOUR DES PUISSANCES DE 10</text>
          <rect x="20" y="126" width="60" height="34" rx="6" fill="#334155" stroke="#64748b" />
          <text x="50" y="142" textAnchor="middle" className="text-[11px] font-black fill-white">10⁰ = 1</text>
          <text x="50" y="155" textAnchor="middle" className="text-[8px] fill-slate-300">0 zéro</text>
          <rect x="86" y="102" width="66" height="58" rx="6" fill="#0369a1" fillOpacity="0.45" stroke="#38bdf8" />
          <text x="119" y="124" textAnchor="middle" className="text-[11px] font-black fill-white">10² = 100</text>
          <text x="119" y="142" textAnchor="middle" className="text-[8px] fill-sky-200">2 zéros</text>
          <rect x="158" y="70" width="70" height="90" rx="6" fill="#4f46e5" fillOpacity="0.45" stroke="#818cf8" />
          <text x="193" y="96" textAnchor="middle" className="text-[11px] font-black fill-white">10³ = 1 000</text>
          <text x="193" y="114" textAnchor="middle" className="text-[8px] fill-indigo-200">Billet mille F</text>
          <rect x="234" y="34" width="72" height="126" rx="6" fill="#059669" fillOpacity="0.45" stroke="#34d399" />
          <text x="270" y="64" textAnchor="middle" className="text-[11px] font-black fill-white">10⁶ = 1 M</text>
          <text x="270" y="82" textAnchor="middle" className="text-[8px] fill-emerald-200">1 000 000</text>
          <text x="270" y="96" textAnchor="middle" className="text-[8px] fill-amber-300">Libreville</text>
          <text x="160" y="176" textAnchor="middle" className="text-[9px] font-bold fill-amber-300">
            10ⁿ × 10ᵐ = 10ⁿ⁺ᵐ   |   Exemple : 10² × 10³ = 10⁵
          </text>
        </svg>
      </div>
    </div>
  </div>
);

// 2. Fractions
export const Gabon4eFractionsIllustration: React.FC = () => (
  <div className="rounded-3xl bg-slate-900 border-2 border-cyan-500/40 p-4 sm:p-5 shadow-xl space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-cyan-300">
      <span>🍕 Fractions : Addition (Même Base) vs Division (Inverser la 2ème !)</span>
      <span className="text-[11px] text-amber-300 font-bold">Chapitre dédié Fractions</span>
    </div>
    <div className="flex justify-center">
      <svg viewBox="0 0 420 175" className="w-full max-w-lg h-auto select-none">
        <rect x="15" y="15" width="180" height="145" rx="14" fill="#082f49" fillOpacity="0.6" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="105" y="38" textAnchor="middle" className="text-[11px] font-black fill-sky-300">+ et − : MÊME DÉNOMINATEUR</text>
        <circle cx="65" cy="92" r="28" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <path d="M 65 92 L 65 64 A 28 28 0 0 1 93 92 Z" fill="#38bdf8" />
        <text x="65" y="138" textAnchor="middle" className="text-[10px] font-bold fill-white">1/4 + 2/4 = 3/4</text>
        <circle cx="145" cy="92" r="28" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
        <path d="M 145 92 L 145 64 A 28 28 0 1 1 117 92 Z" fill="#10b981" />
        <text x="145" y="138" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">3 parts sur 4</text>

        <rect x="215" y="15" width="190" height="145" rx="14" fill="#422006" fillOpacity="0.45" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="310" y="38" textAnchor="middle" className="text-[11px] font-black fill-amber-300">÷ : MULTIPLIER PAR L’INVERSE</text>
        <text x="310" y="72" textAnchor="middle" className="text-sm font-black fill-white font-mono">(3/4) ÷ (5/2)</text>
        <text x="310" y="96" textAnchor="middle" className="text-xs font-black fill-amber-300">⇩ On retourne 5/2 en 2/5</text>
        <text x="310" y="122" textAnchor="middle" className="text-sm font-black fill-emerald-300 font-mono">= (3/4) × (2/5)</text>
        <text x="310" y="144" textAnchor="middle" className="text-xs font-black fill-white font-mono">= 6/20 = 3/10</text>
      </svg>
    </div>
  </div>
);

// 3. Calcul Littéral & Identités Remarquables (deux dessins distincts)
export const Gabon4eCalculLitteralIllustration: React.FC<{ isIdentites?: boolean }> = ({ isIdentites }) => (
  <div className="rounded-3xl bg-slate-900 border-2 border-amber-500/40 p-4 sm:p-5 shadow-xl space-y-4">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-amber-300">
      <span>
        {isIdentites
          ? '📦 Les 3 Identités Remarquables : Carré (a + b)² & Différence a² − b²'
          : '🌱 Le Champ de Manioc de Koko : Aire (x + 3)(x + 2) = x² + 5x + 6'}
      </span>
      <span className="text-[11px] text-emerald-300 font-bold">
        {isIdentites ? 'Factorisation & Identités' : 'Distributivité'}
      </span>
    </div>
    <div className="flex justify-center">
      <svg viewBox="0 0 430 190" className="w-full max-w-lg h-auto select-none">
        {!isIdentites ? (
          <>
            <text x="215" y="18" textAnchor="middle" className="text-[11px] font-black fill-white">AIRE DU CHAMP = (x + 3) × (x + 2)</text>
            <text x="150" y="38" textAnchor="middle" className="text-xs font-black fill-amber-300">x</text>
            <text x="275" y="38" textAnchor="middle" className="text-xs font-black fill-sky-300">+ 3 m</text>
            <text x="68" y="85" textAnchor="middle" className="text-xs font-black fill-amber-300">x</text>
            <text x="62" y="142" textAnchor="middle" className="text-xs font-black fill-emerald-300">+ 2 m</text>
            <rect x="85" y="45" width="130" height="72" fill="#4f46e5" fillOpacity="0.45" stroke="#818cf8" strokeWidth="2" />
            <text x="150" y="78" textAnchor="middle" className="text-sm font-black fill-white">x × x</text>
            <text x="150" y="96" textAnchor="middle" className="text-xs font-black fill-amber-300">= x²</text>
            <rect x="215" y="45" width="120" height="72" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
            <text x="275" y="78" textAnchor="middle" className="text-sm font-black fill-white">3 × x</text>
            <text x="275" y="96" textAnchor="middle" className="text-xs font-black fill-sky-200">= + 3x</text>
            <rect x="85" y="117" width="130" height="48" fill="#059669" fillOpacity="0.4" stroke="#34d399" strokeWidth="2" />
            <text x="150" y="139" textAnchor="middle" className="text-sm font-black fill-white">2 × x</text>
            <text x="150" y="155" textAnchor="middle" className="text-xs font-black fill-emerald-200">= + 2x</text>
            <rect x="215" y="117" width="120" height="48" fill="#d97706" fillOpacity="0.45" stroke="#fbbf24" strokeWidth="2" />
            <text x="275" y="139" textAnchor="middle" className="text-sm font-black fill-white">2 × 3</text>
            <text x="275" y="155" textAnchor="middle" className="text-xs font-black fill-amber-200">= + 6</text>
            <text x="215" y="183" textAnchor="middle" className="text-[11px] font-black fill-emerald-300 font-mono">
              Total = x² + 3x + 2x + 6 = x² + 5x + 6
            </text>
          </>
        ) : (
          <>
            {/* Carré (a + b)² */}
            <rect x="35" y="34" width="88" height="88" fill="#4f46e5" fillOpacity="0.45" stroke="#818cf8" strokeWidth="2" />
            <text x="79" y="82" textAnchor="middle" className="text-sm font-black fill-white">a²</text>
            <rect x="123" y="34" width="44" height="88" fill="#0284c7" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="2" />
            <text x="145" y="82" textAnchor="middle" className="text-xs font-black fill-sky-200">ab</text>
            <rect x="35" y="122" width="88" height="44" fill="#0284c7" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="2" />
            <text x="79" y="148" textAnchor="middle" className="text-xs font-black fill-sky-200">ab</text>
            <rect x="123" y="122" width="44" height="44" fill="#d97706" fillOpacity="0.55" stroke="#fbbf24" strokeWidth="2" />
            <text x="145" y="148" textAnchor="middle" className="text-xs font-black fill-amber-200">b²</text>
            <text x="101" y="24" textAnchor="middle" className="text-xs font-black fill-amber-300">(a + b)² = a² + 2ab + b²</text>

            <rect x="200" y="28" width="215" height="142" rx="14" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="307" y="54" textAnchor="middle" className="text-[11px] font-black fill-amber-300">LES 3 IDENTITÉS CIAM</text>
            <text x="307" y="82" textAnchor="middle" className="text-xs font-black fill-white font-mono">(a + b)² = a² + 2ab + b²</text>
            <text x="307" y="108" textAnchor="middle" className="text-xs font-black fill-sky-300 font-mono">(a − b)² = a² − 2ab + b²</text>
            <text x="307" y="134" textAnchor="middle" className="text-xs font-black fill-emerald-300 font-mono">(a + b)(a − b) = a² − b²</text>
            <text x="307" y="156" textAnchor="middle" className="text-[9px] font-bold fill-rose-300">Ex : x² − 25 = (x + 5)(x − 5)</text>
          </>
        )}
      </svg>
    </div>
  </div>
);

// 4. Équations & Inéquations (avec vraie droite graduée pour les inéquations !)
export const Gabon4eEquationBalanceIllustration: React.FC<{ isIneq?: boolean }> = ({ isIneq }) => (
  <div className="rounded-3xl bg-slate-900 border-2 border-pink-500/40 p-4 sm:p-5 shadow-xl space-y-4">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-pink-300">
      <span>{isIneq ? '↕️ Inéquations : Sens Inversé par (−) & Droite Graduée' : '⚖️ La Balance Magique des Équations (ax + b = c)'}</span>
      <span className="text-[11px] text-amber-300 font-bold">Marché Mont-Bouët · F CFA</span>
    </div>
    <div className="flex justify-center">
      <svg viewBox="0 0 430 190" className="w-full max-w-lg h-auto select-none">
        {!isIneq ? (
          <>
            <polygon points="195,165 225,165 210,120" fill="#64748b" />
            <rect x="170" y="165" width="80" height="8" rx="4" fill="#94a3b8" />
            <line x1="75" y1="95" x2="345" y2="95" stroke="#facc15" strokeWidth="5" strokeLinecap="round" />
            <circle cx="210" cy="95" r="7" fill="#f59e0b" stroke="#0f172a" strokeWidth="2" />
            <line x1="85" y1="95" x2="60" y2="132" stroke="#94a3b8" strokeWidth="2" />
            <line x1="85" y1="95" x2="110" y2="132" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 45 132 L 125 132 Q 85 150 45 132 Z" fill="#38bdf8" />
            <rect x="52" y="108" width="22" height="22" rx="5" fill="#6366f1" stroke="#c7d2fe" strokeWidth="1.5" />
            <text x="63" y="123" textAnchor="middle" className="text-xs font-black fill-white">x</text>
            <rect x="78" y="108" width="22" height="22" rx="5" fill="#6366f1" stroke="#c7d2fe" strokeWidth="1.5" />
            <text x="89" y="123" textAnchor="middle" className="text-xs font-black fill-white">x</text>
            <rect x="103" y="114" width="28" height="16" rx="4" fill="#f59e0b" />
            <text x="117" y="125" textAnchor="middle" className="text-[8px] font-black fill-slate-950">500</text>
            <text x="85" y="72" textAnchor="middle" className="text-xs font-black fill-sky-300 font-mono">2x + 500 F</text>
            <text x="210" y="68" textAnchor="middle" className="text-xl font-black fill-emerald-400">=</text>
            <line x1="335" y1="95" x2="310" y2="132" stroke="#94a3b8" strokeWidth="2" />
            <line x1="335" y1="95" x2="360" y2="132" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 295 132 L 375 132 Q 335 150 295 132 Z" fill="#10b981" />
            <rect x="302" y="106" width="66" height="24" rx="5" fill="#059669" stroke="#6ee7b7" strokeWidth="1.5" />
            <text x="335" y="122" textAnchor="middle" className="text-[11px] font-black fill-white">2 500 F</text>
            <text x="335" y="72" textAnchor="middle" className="text-xs font-black fill-emerald-300 font-mono">2 500 F CFA</text>
            <text x="215" y="25" textAnchor="middle" className="text-[11px] font-black fill-white">
              Ce qu’on enlève à gauche, on l’enlève aussi à droite !
            </text>
            <text x="215" y="185" textAnchor="middle" className="text-[10px] font-bold fill-amber-300 font-mono">
              2x = 2 000 F ➔ x = 1 000 F CFA
            </text>
          </>
        ) : (
          <>
            <rect x="20" y="18" width="390" height="60" rx="12" fill="#881337" fillOpacity="0.3" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="215" y="42" textAnchor="middle" className="text-xs font-black fill-rose-300">
              PIÈGE N°1 : Multiplier ou Diviser par (−) INVERSE le signe !
            </text>
            <text x="215" y="64" textAnchor="middle" className="text-xs font-black fill-white font-mono">
              −2x ≤ 6   ➔   x ≥ 6 ÷ (−2)   ➔   x ≥ −3
            </text>

            {/* Droite graduée avec crochet et zone verte */}
            <text x="215" y="104" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">
              Représentation des solutions x ≥ −3 :
            </text>
            <line x1="40" y1="136" x2="395" y2="136" stroke="#64748b" strokeWidth="3" />
            <line x1="160" y1="136" x2="390" y2="136" stroke="#10b981" strokeWidth="7" strokeLinecap="round" />
            {/* Crochet inclusif [ tourné vers la zone solution (droite) */}
            <polyline points="170,120 160,120 160,152 170,152" fill="none" stroke="#fbbf24" strokeWidth="3.5" />
            <line x1="250" y1="128" x2="250" y2="144" stroke="#94a3b8" strokeWidth="2" />
            <text x="160" y="172" textAnchor="middle" className="text-xs font-black fill-amber-300">−3</text>
            <text x="250" y="172" textAnchor="middle" className="text-xs font-bold fill-slate-300">0</text>
            <text x="340" y="172" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Solutions [−3 ; +∞[</text>
          </>
        )}
      </svg>
    </div>
  </div>
);

// 5. Pythagore & Racine carrée (deux dessins dédiés)
export const Gabon4ePythagoreIllustration: React.FC<{ isRoot?: boolean }> = ({ isRoot }) => (
  <div className="rounded-3xl bg-slate-900 border-2 border-violet-500/40 p-4 sm:p-5 shadow-xl space-y-4">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-violet-300">
      <span>
        {isRoot
          ? '√ La Racine Carrée : Retrouver le Côté d’un Carré à partir de son Aire'
          : '📐 Pythagore : Les 3 Carrés du Charpentier'}
      </span>
      <span className="text-[11px] text-emerald-300 font-bold">
        {isRoot ? 'Carrés Parfaits 4ème' : 'Triangle Rectangle (90°)'}
      </span>
    </div>
    <div className="flex justify-center">
      <svg viewBox="0 0 420 205" className="w-full max-w-lg h-auto select-none">
        {!isRoot ? (
          <>
            <rect x="85" y="75" width="54" height="72" fill="#10b981" fillOpacity="0.28" stroke="#10b981" strokeWidth="2" />
            <text x="112" y="106" textAnchor="middle" className="text-xs font-black fill-emerald-300">AB²</text>
            <text x="112" y="122" textAnchor="middle" className="text-[10px] font-bold fill-white">3² = 9</text>
            <rect x="139" y="147" width="96" height="48" fill="#0284c7" fillOpacity="0.28" stroke="#38bdf8" strokeWidth="2" />
            <text x="187" y="168" textAnchor="middle" className="text-xs font-black fill-sky-300">AC²</text>
            <text x="187" y="183" textAnchor="middle" className="text-[10px] font-bold fill-white">4² = 16</text>
            <polygon points="139,75 139,147 235,147" fill="#f59e0b" fillOpacity="0.2" stroke="#facc15" strokeWidth="3" />
            <rect x="139" y="135" width="12" height="12" fill="none" stroke="#facc15" strokeWidth="2" />
            <text x="131" y="70" textAnchor="end" className="text-xs font-black fill-white">B</text>
            <text x="131" y="156" textAnchor="end" className="text-xs font-black fill-white">A (90°)</text>
            <text x="242" y="156" textAnchor="start" className="text-xs font-black fill-white">C</text>
            <rect x="265" y="45" width="135" height="90" rx="14" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="2" />
            <text x="332" y="70" textAnchor="middle" className="text-xs font-black fill-amber-300">BC² = AB² + AC²</text>
            <text x="332" y="90" textAnchor="middle" className="text-[11px] font-bold fill-white font-mono">BC² = 9 + 16 = 25</text>
            <text x="332" y="112" textAnchor="middle" className="text-xs font-black fill-emerald-300 font-mono">BC = √25 = 5 cm</text>
            <text x="210" y="25" textAnchor="middle" className="text-[11px] font-black fill-slate-200">
              Le carré de l’hypoténuse vaut la somme des deux petits carrés !
            </text>
          </>
        ) : (
          <>
            <rect x="35" y="42" width="110" height="110" rx="8" fill="#7c3aed" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="2.5" />
            <text x="90" y="96" textAnchor="middle" className="text-sm font-black fill-white">Aire = 49 cm²</text>
            <text x="90" y="114" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">7 × 7 = 49</text>
            <text x="90" y="172" textAnchor="middle" className="text-xs font-black fill-emerald-300">Côté c = √49 = 7 cm</text>
            <text x="22" y="98" textAnchor="end" className="text-xs font-black fill-emerald-300">7</text>

            <rect x="175" y="30" width="225" height="142" rx="14" fill="#0f172a" stroke="#a78bfa" strokeWidth="1.5" />
            <text x="287" y="54" textAnchor="middle" className="text-[11px] font-black fill-amber-300">CARRÉS PARFAITS À CONNAÎTRE</text>
            <text x="287" y="80" textAnchor="middle" className="text-xs font-bold fill-white font-mono">√9 = 3  |  √16 = 4  |  √25 = 5</text>
            <text x="287" y="104" textAnchor="middle" className="text-xs font-bold fill-sky-300 font-mono">√36 = 6  |  √49 = 7  |  √64 = 8</text>
            <text x="287" y="128" textAnchor="middle" className="text-xs font-bold fill-emerald-300 font-mono">√81 = 9  |  √100 = 10 | √144 = 12</text>
            <text x="287" y="156" textAnchor="middle" className="text-[9px] font-black fill-rose-300">Attention : √(9 + 16) = √25 = 5 ≠ 3 + 4 !</text>
          </>
        )}
      </svg>
    </div>
  </div>
);

// 6. Droite des Milieux & Thalès
export const Gabon4eThalesMilieuxIllustration: React.FC<{ isThales?: boolean }> = ({ isThales }) => (
  <div className="rounded-3xl bg-slate-900 border-2 border-cyan-500/40 p-4 sm:p-5 shadow-xl space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-cyan-300">
      <span>{isThales ? '🔺 Configuration de Thalès : Les 3 Rapports Proportionnels' : '🌉 Droite des Milieux & Agrandissement de Rapport k'}</span>
      <span className="text-[11px] text-amber-300 font-bold">Parallélisme & Proportions</span>
    </div>
    <div className="flex justify-center">
      <svg viewBox="0 0 420 180" className="w-full max-w-lg h-auto select-none">
        <polygon points="130,30 35,145 225,145" fill="#0891b2" fillOpacity="0.18" stroke="#22d3ee" strokeWidth="2.5" />
        <line x1="82" y1="88" x2="178" y2="88" stroke="#facc15" strokeWidth="3" />
        <circle cx="82" cy="88" r="4" fill="#facc15" />
        <circle cx="178" cy="88" r="4" fill="#facc15" />
        <text x="130" y="22" textAnchor="middle" className="text-xs font-black fill-white">A</text>
        <text x="26" y="150" textAnchor="end" className="text-xs font-black fill-white">B</text>
        <text x="234" y="150" textAnchor="start" className="text-xs font-black fill-white">C</text>
        <text x="72" y="88" textAnchor="end" className="text-xs font-black fill-amber-300">{isThales ? 'M' : 'I'}</text>
        <text x="188" y="88" textAnchor="start" className="text-xs font-black fill-amber-300">{isThales ? 'N' : 'J'}</text>

        <rect x="245" y="34" width="160" height="115" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="325" y="58" textAnchor="middle" className="text-[11px] font-black fill-amber-300">
          {isThales ? 'SI (MN) // (BC) :' : 'SI I, J MILIEUX :'}
        </text>
        <text x="325" y="82" textAnchor="middle" className="text-xs font-black fill-white font-mono">
          {isThales ? 'AM/AB = AN/AC' : '(IJ) // (BC)'}
        </text>
        <text x="325" y="104" textAnchor="middle" className="text-xs font-black fill-emerald-300 font-mono">
          {isThales ? '= MN/BC' : 'IJ = BC ÷ 2'}
        </text>
        <text x="325" y="130" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">
          {isThales ? 'Produit en croix !' : 'Aires × k² | Vol × k³'}
        </text>
      </svg>
    </div>
  </div>
);

// 7. Trigonométrie (SOH CAH TOA)
export const Gabon4eTrigoIllustration: React.FC = () => (
  <div className="rounded-3xl bg-slate-900 border-2 border-emerald-500/40 p-4 sm:p-5 shadow-xl space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-emerald-300">
      <span>🧭 Trigonométrie dans le Triangle Rectangle : SOH - CAH - TOA</span>
      <span className="text-[11px] text-amber-300 font-bold">Mode DEGRÉS (DEG)</span>
    </div>
    <div className="flex justify-center">
      <svg viewBox="0 0 420 180" className="w-full max-w-lg h-auto select-none">
        <polygon points="45,140 45,45 215,140" fill="#10b981" fillOpacity="0.18" stroke="#34d399" strokeWidth="2.5" />
        <rect x="45" y="128" width="12" height="12" fill="none" stroke="#34d399" strokeWidth="2" />
        <path d="M 180 140 A 35 35 0 0 1 184 123 L 215 140 Z" fill="#f59e0b" fillOpacity="0.7" />
        <text x="225" y="144" className="text-xs font-black fill-amber-300">Ĉ</text>
        <text x="36" y="45" textAnchor="end" className="text-xs font-black fill-white">B</text>
        <text x="36" y="145" textAnchor="end" className="text-xs font-black fill-white">A</text>
        <text x="128" y="156" textAnchor="middle" className="text-[10px] font-black fill-sky-300">ADJACENT (AC)</text>
        <text x="28" y="95" textAnchor="middle" transform="rotate(-90 28 95)" className="text-[10px] font-black fill-pink-300">OPPOSÉ (AB)</text>
        <text x="148" y="84" textAnchor="middle" className="text-[10px] font-black fill-amber-300">HYPOTÉNUSE (BC)</text>

        <rect x="245" y="28" width="160" height="126" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
        <text x="325" y="54" textAnchor="middle" className="text-xs font-black fill-pink-300">SOH : sin = Opp / Hyp</text>
        <text x="325" y="84" textAnchor="middle" className="text-xs font-black fill-sky-300">CAH : cos = Adj / Hyp</text>
        <text x="325" y="114" textAnchor="middle" className="text-xs font-black fill-emerald-300">TOA : tan = Opp / Adj</text>
        <text x="325" y="140" textAnchor="middle" className="text-[9px] font-bold fill-amber-300">0 ≤ cos, sin ≤ 1</text>
      </svg>
    </div>
  </div>
);

// 8. Volumes, Vitesses, Proportionnalité, Statistiques, Probabilités
export const Gabon4eStatsVitesseVolumesIllustration: React.FC<{ topic: 'volumes' | 'vitesse' | 'stats' | 'probas' | 'proportionnalite' }> = ({
  topic,
}) => (
  <div className="rounded-3xl bg-slate-900 border-2 border-emerald-500/40 p-4 sm:p-5 shadow-xl space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-emerald-300">
      <span>
        {topic === 'volumes' && '🔺 Pyramides, Cônes & Sections (V = Aire Base × h ÷ 3)'}
        {topic === 'vitesse' && '🚄 Triangle Magique du Transgabonais : d = v × t'}
        {topic === 'stats' && '📊 Statistiques : Moyenne, Médiane, Quartiles Q1 & Q3'}
        {topic === 'probas' && '🎲 Probabilités : 0 ≤ P(A) ≤ 1 et Événement Contraire'}
        {topic === 'proportionnalite' && '🛍️ Proportionnalité : Droite par (0;0) & Remises F CFA'}
      </span>
      <span className="text-[11px] text-amber-300 font-bold">Programme 4ème Gabon</span>
    </div>
    <div className="flex justify-center">
      <svg viewBox="0 0 420 170" className="w-full max-w-lg h-auto select-none">
        {topic === 'volumes' && (
          <>
            <polygon points="95,28 45,122 125,135" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2" />
            <polygon points="95,28 125,135 148,110" fill="#059669" fillOpacity="0.45" stroke="#34d399" strokeWidth="2" />
            <line x1="95" y1="28" x2="97" y2="122" stroke="#facc15" strokeWidth="2" strokeDasharray="3 3" />
            <text x="95" y="154" textAnchor="middle" className="text-xs font-black fill-white">Pyramide : B×h÷3</text>
            <ellipse cx="305" cy="122" rx="48" ry="14" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
            <line x1="305" y1="28" x2="257" y2="122" stroke="#38bdf8" strokeWidth="2" />
            <line x1="305" y1="28" x2="353" y2="122" stroke="#38bdf8" strokeWidth="2" />
            <line x1="305" y1="28" x2="305" y2="122" stroke="#facc15" strokeWidth="2" strokeDasharray="3 3" />
            <text x="305" y="154" textAnchor="middle" className="text-xs font-black fill-sky-300">Cône : π×r²×h÷3</text>
          </>
        )}
        {topic === 'vitesse' && (
          <>
            <polygon points="115,24 45,138 185,138" fill="#f59e0b" fillOpacity="0.15" stroke="#fbbf24" strokeWidth="2.5" />
            <line x1="80" y1="82" x2="150" y2="82" stroke="#fbbf24" strokeWidth="2" />
            <line x1="115" y1="82" x2="115" y2="138" stroke="#fbbf24" strokeWidth="2" />
            <text x="115" y="66" textAnchor="middle" className="text-lg font-black fill-white">d</text>
            <text x="90" y="122" textAnchor="middle" className="text-lg font-black fill-emerald-300">v</text>
            <text x="140" y="122" textAnchor="middle" className="text-lg font-black fill-sky-300">t</text>
            <rect x="215" y="34" width="185" height="102" rx="14" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
            <text x="307" y="62" textAnchor="middle" className="text-xs font-black fill-emerald-300 font-mono">v = d ÷ t  |  d = v × t</text>
            <text x="307" y="88" textAnchor="middle" className="text-xs font-black fill-amber-300 font-mono">30 min = 0,5 h</text>
            <text x="307" y="114" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">1 m/s × 3,6 = 3,6 km/h</text>
          </>
        )}
        {topic === 'stats' && (
          <>
            <line x1="40" y1="120" x2="380" y2="120" stroke="#475569" strokeWidth="2" />
            <line x1="70" y1="75" x2="130" y2="75" stroke="#94a3b8" strokeWidth="2.5" />
            <line x1="70" y1="62" x2="70" y2="88" stroke="#94a3b8" strokeWidth="3" />
            <rect x="130" y="45" width="150" height="60" rx="6" fill="#10b981" fillOpacity="0.25" stroke="#34d399" strokeWidth="2.5" />
            <line x1="200" y1="45" x2="200" y2="105" stroke="#fbbf24" strokeWidth="3.5" />
            <line x1="280" y1="75" x2="350" y2="75" stroke="#94a3b8" strokeWidth="2.5" />
            <line x1="350" y1="62" x2="350" y2="88" stroke="#94a3b8" strokeWidth="3" />
            <text x="70" y="142" textAnchor="middle" className="text-xs font-bold fill-slate-300">Min</text>
            <text x="130" y="142" textAnchor="middle" className="text-xs font-black fill-emerald-300">Q1 (25%)</text>
            <text x="200" y="142" textAnchor="middle" className="text-xs font-black fill-amber-300">Médiane</text>
            <text x="280" y="142" textAnchor="middle" className="text-xs font-black fill-emerald-300">Q3 (75%)</text>
            <text x="350" y="142" textAnchor="middle" className="text-xs font-bold fill-slate-300">Max</text>
          </>
        )}
        {topic === 'probas' && (
          <>
            <line x1="45" y1="85" x2="375" y2="85" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
            <circle cx="55" cy="85" r="10" fill="#f43f5e" />
            <text x="55" y="115" textAnchor="middle" className="text-xs font-black fill-rose-300">P = 0 (Impossible)</text>
            <circle cx="210" cy="85" r="10" fill="#fbbf24" />
            <text x="210" y="115" textAnchor="middle" className="text-xs font-black fill-amber-300">P = 0,5 (1 chance / 2)</text>
            <circle cx="365" cy="85" r="10" fill="#10b981" />
            <text x="365" y="115" textAnchor="middle" className="text-xs font-black fill-emerald-300">P = 1 (Certain)</text>
            <text x="210" y="45" textAnchor="middle" className="text-xs font-black fill-sky-300 font-mono">
              P(A) + P(non A) = 1   ➔   P(Ā) = 1 − P(A)
            </text>
          </>
        )}
        {topic === 'proportionnalite' && (
          <>
            <line x1="65" y1="135" x2="210" y2="135" stroke="#64748b" strokeWidth="2" />
            <line x1="65" y1="135" x2="65" y2="30" stroke="#64748b" strokeWidth="2" />
            <line x1="65" y1="135" x2="195" y2="40" stroke="#ec4899" strokeWidth="3.5" />
            <circle cx="65" cy="135" r="5" fill="#fbbf24" />
            <text x="54" y="148" textAnchor="end" className="text-xs font-black fill-amber-300">O(0;0)</text>
            <rect x="235" y="34" width="165" height="102" rx="14" fill="#0f172a" stroke="#ec4899" strokeWidth="1.5" />
            <text x="317" y="64" textAnchor="middle" className="text-xs font-black fill-pink-300">Produit en croix :</text>
            <text x="317" y="88" textAnchor="middle" className="text-xs font-black fill-white font-mono">a×d = b×c</text>
            <text x="317" y="116" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Droite passant par (0;0)</text>
          </>
        )}
      </svg>
    </div>
  </div>
);

// 9. Transformations (Translation, Symétrie, Homothétie, Rotation), Repérage, Cercle, Droites remarquables, Fonctions, Arithmétique
export const Gabon4eGeoFunctionsIllustration: React.FC<{
  topic:
    | 'translations'
    | 'symetries'
    | 'homothetie'
    | 'rotation'
    | 'reperage'
    | 'cercle'
    | 'droites'
    | 'fonctions'
    | 'arithmetique';
}> = ({ topic }) => (
  <div className="rounded-3xl bg-slate-900 border-2 border-sky-500/40 p-4 sm:p-5 shadow-xl space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-sky-300">
      <span>
        {topic === 'translations' && '➡️ Translation : Glissement sans tourner selon un Vecteur AB⃗'}
        {topic === 'symetries' && '🪞 Symétrie Axiale (Pliage) vs Symétrie Centrale (Demi-tour 180°)'}
        {topic === 'homothetie' && '📽️ Homothétie de Centre O et de Rapport k (Zoom × k)'}
        {topic === 'rotation' && '🎡 Rotation de Centre O, d’Angle α et de Sens (Horaire / Direct)'}
        {topic === 'reperage' && '📍 Repérage dans le Plan : Coordonnées, Milieu & Distance'}
        {topic === 'cercle' && '⭕ Cercle : Angle au Centre = 2 × Angle Inscrit & Tangente (90°)'}
        {topic === 'droites' && '⌖ Les 4 Droites Remarquables du Triangle'}
        {topic === 'fonctions' && '📈 Machine à Fonction : Courbe, Image f(x) et Antécédent x'}
        {topic === 'arithmetique' && '🔢 Nombres Premiers (2, 3, 5, 7, 11…) & Arbre de Facteurs'}
      </span>
      <span className="text-[11px] text-amber-300 font-bold">CIAM 4ème</span>
    </div>
    <div className="flex justify-center">
      <svg viewBox="0 0 430 175" className="w-full max-w-lg h-auto select-none">
        {topic === 'cercle' && (
          <>
            <circle cx="135" cy="88" r="62" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="135" cy="88" r="3.5" fill="#fbbf24" />
            <line x1="135" y1="88" x2="90" y2="132" stroke="#fbbf24" strokeWidth="2" />
            <line x1="135" y1="88" x2="180" y2="132" stroke="#fbbf24" strokeWidth="2" />
            <line x1="115" y1="29" x2="90" y2="132" stroke="#34d399" strokeWidth="2" />
            <line x1="115" y1="29" x2="180" y2="132" stroke="#34d399" strokeWidth="2" />
            <text x="135" y="78" textAnchor="middle" className="text-xs font-black fill-amber-300">O (2α)</text>
            <text x="115" y="21" textAnchor="middle" className="text-xs font-black fill-emerald-300">M (α)</text>
            <text x="80" y="146" textAnchor="end" className="text-xs font-black fill-white">A</text>
            <text x="190" y="146" textAnchor="start" className="text-xs font-black fill-white">B</text>
            <rect x="235" y="34" width="175" height="104" rx="14" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="322" y="64" textAnchor="middle" className="text-xs font-black fill-amber-300">AÔB = 2 × AMB</text>
            <text x="322" y="92" textAnchor="middle" className="text-xs font-black fill-emerald-300">Tangente ⊥ Rayon</text>
            <text x="322" y="118" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Demi-cercle ➔ 90°</text>
          </>
        )}

        {topic === 'reperage' && (
          <>
            <line x1="55" y1="135" x2="215" y2="135" stroke="#64748b" strokeWidth="2" />
            <line x1="85" y1="145" x2="85" y2="25" stroke="#64748b" strokeWidth="2" />
            <line x1="115" y1="110" x2="185" y2="45" stroke="#34d399" strokeWidth="2.5" />
            <circle cx="115" cy="110" r="4" fill="#38bdf8" />
            <circle cx="150" cy="77.5" r="4.5" fill="#fbbf24" />
            <circle cx="185" cy="45" r="4" fill="#38bdf8" />
            <text x="115" y="126" textAnchor="middle" className="text-[10px] font-black fill-sky-300">A(xₐ;yₐ)</text>
            <text x="150" y="68" textAnchor="end" className="text-[10px] font-black fill-amber-300">I</text>
            <text x="190" y="42" textAnchor="start" className="text-[10px] font-black fill-sky-300">B(xᵦ;yᵦ)</text>
            <rect x="235" y="34" width="180" height="104" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="325" y="62" textAnchor="middle" className="text-[11px] font-black fill-amber-300">Milieu I = Moyenne :</text>
            <text x="325" y="84" textAnchor="middle" className="text-xs font-black fill-white font-mono">((xₐ+xᵦ)/2 ; (yₐ+yᵦ)/2)</text>
            <text x="325" y="114" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">AB = √(Δx² + Δy²)</text>
          </>
        )}

        {topic === 'translations' && (
          <>
            <polygon points="45,120 95,55 125,120" fill="#38bdf8" fillOpacity="0.28" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="88" y="138" textAnchor="middle" className="text-[10px] font-black fill-sky-300">Figure F</text>
            {/* Vecteur de translation */}
            <line x1="95" y1="55" x2="225" y2="35" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4 3" />
            <polygon points="232,34 220,30 222,42" fill="#fbbf24" />
            <line x1="125" y1="120" x2="255" y2="100" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 3" />
            <polygon points="180,100 230,35 260,100" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2.5" />
            <text x="225" y="118" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">Image F’</text>
            <rect x="280" y="34" width="136" height="106" rx="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="348" y="60" textAnchor="middle" className="text-[10px] font-black fill-amber-300">PARALLÉLOGRAMME</text>
            <text x="348" y="84" textAnchor="middle" className="text-[10px] font-bold fill-white">Même sens</text>
            <text x="348" y="102" textAnchor="middle" className="text-[10px] font-bold fill-white">Même longueur</text>
            <text x="348" y="122" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Sans tourner !</text>
          </>
        )}

        {topic === 'symetries' && (
          <>
            {/* Axiale à gauche */}
            <line x1="108" y1="22" x2="108" y2="152" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="5 3" />
            <polygon points="44,124 88,52 94,124" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
            <polygon points="172,124 128,52 122,124" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2" />
            <text x="108" y="166" textAnchor="middle" className="text-[10px] font-black fill-rose-300">Axiale : Miroir (d)</text>

            {/* Centrale à droite */}
            <circle cx="318" cy="88" r="5" fill="#fbbf24" />
            <text x="318" y="76" textAnchor="middle" className="text-xs font-black fill-amber-300">O</text>
            <polygon points="242,120 278,56 292,102" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
            <polygon points="394,56 358,120 344,74" fill="#a855f7" fillOpacity="0.3" stroke="#c084fc" strokeWidth="2" />
            <line x1="278" y1="56" x2="358" y2="120" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="318" y="166" textAnchor="middle" className="text-[10px] font-black fill-purple-300">Centrale : Demi-tour 180° (O milieu)</text>
          </>
        )}

        {topic === 'homothetie' && (
          <>
            <circle cx="42" cy="140" r="5" fill="#fbbf24" />
            <text x="32" y="152" textAnchor="end" className="text-xs font-black fill-amber-300">O</text>
            <line x1="42" y1="140" x2="262" y2="30" stroke="#64748b" strokeDasharray="3 3" strokeWidth="1.5" />
            <line x1="42" y1="140" x2="262" y2="140" stroke="#64748b" strokeDasharray="3 3" strokeWidth="1.5" />
            <polygon points="105,140 140,91 140,140" fill="#38bdf8" fillOpacity="0.35" stroke="#38bdf8" strokeWidth="2" />
            <polygon points="175,140 245,42 245,140" fill="#a855f7" fillOpacity="0.25" stroke="#c084fc" strokeWidth="2.5" />
            <text x="126" y="158" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Initial</text>
            <text x="218" y="158" textAnchor="middle" className="text-[10px] font-bold fill-purple-300">Zoom × k</text>
            <rect x="275" y="34" width="140" height="106" rx="12" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
            <text x="345" y="60" textAnchor="middle" className="text-[10px] font-black fill-amber-300">RAPPORT k :</text>
            <text x="345" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">|k| &gt; 1 ➔ Agrandit</text>
            <text x="345" y="104" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">|k| &lt; 1 ➔ Réduit</text>
            <text x="345" y="126" textAnchor="middle" className="text-[10px] font-bold fill-amber-200">Aires × k² !</text>
          </>
        )}

        {topic === 'rotation' && (
          <>
            <circle cx="145" cy="118" r="5" fill="#fbbf24" />
            <text x="145" y="138" textAnchor="middle" className="text-xs font-black fill-amber-300">Centre O</text>
            <path d="M 65 92 A 84 84 0 0 1 200 50" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 3" />
            <polygon points="206,54 194,45 196,59" fill="#f43f5e" />
            <line x1="145" y1="118" x2="72" y2="80" stroke="#38bdf8" strokeWidth="2" />
            <line x1="145" y1="118" x2="195" y2="52" stroke="#10b981" strokeWidth="2" />
            <circle cx="72" cy="80" r="5" fill="#38bdf8" />
            <text x="62" y="76" textAnchor="end" className="text-xs font-black fill-sky-300">M</text>
            <circle cx="195" cy="52" r="5" fill="#10b981" />
            <text x="206" y="48" className="text-xs font-black fill-emerald-300">M’</text>
            <text x="142" y="84" textAnchor="middle" className="text-xs font-black fill-rose-300">α = 60°</text>
            <rect x="242" y="34" width="172" height="106" rx="12" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="328" y="60" textAnchor="middle" className="text-[10px] font-black fill-amber-300">3 INFOS OBLIGATOIRES</text>
            <text x="328" y="84" textAnchor="middle" className="text-[10px] font-bold fill-white">1. Centre O (OM = OM’)</text>
            <text x="328" y="104" textAnchor="middle" className="text-[10px] font-bold fill-white">2. Angle α (MÔM’)</text>
            <text x="328" y="124" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">3. Sens (Horaire / Anti)</text>
          </>
        )}

        {topic === 'droites' && (
          <>
            <polygon points="120,28 40,142 200,142" fill="#0284c7" fillOpacity="0.18" stroke="#38bdf8" strokeWidth="2.5" />
            {/* Médiane (vers milieu M de BC) */}
            <line x1="120" y1="28" x2="120" y2="142" stroke="#fbbf24" strokeWidth="2.5" />
            <circle cx="120" cy="104" r="5" fill="#f43f5e" />
            <text x="128" y="106" className="text-xs font-black fill-rose-300">G</text>
            {/* Hauteur perpendiculaire exemple */}
            <rect x="120" y="132" width="10" height="10" fill="none" stroke="#10b981" strokeWidth="1.5" />
            <rect x="225" y="24" width="192" height="128" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="321" y="48" textAnchor="middle" className="text-[10px] font-black fill-amber-300">LES 4 POINTS DE CONCOURS</text>
            <text x="238" y="72" className="text-[10px] font-bold fill-sky-300">• Médiatrices ➔ Cercle Circonscrit</text>
            <text x="238" y="92" className="text-[10px] font-bold fill-emerald-300">• Bissectrices ➔ Cercle Inscrit</text>
            <text x="238" y="112" className="text-[10px] font-bold fill-amber-300">• Médianes ➔ Gravité G (aux 2/3)</text>
            <text x="238" y="132" className="text-[10px] font-bold fill-rose-300">• Hauteurs ➔ Orthocentre H</text>
          </>
        )}

        {topic === 'fonctions' && (
          <>
            <line x1="45" y1="138" x2="210" y2="138" stroke="#64748b" strokeWidth="2" />
            <line x1="65" y1="148" x2="65" y2="24" stroke="#64748b" strokeWidth="2" />
            <path d="M 65 130 Q 125 110 195 34" fill="none" stroke="#38bdf8" strokeWidth="3.5" />
            <circle cx="145" cy="86" r="5" fill="#fbbf24" />
            <line x1="145" y1="138" x2="145" y2="86" stroke="#10b981" strokeDasharray="3 3" strokeWidth="2" />
            <line x1="65" y1="86" x2="145" y2="86" stroke="#f43f5e" strokeDasharray="3 3" strokeWidth="2" />
            <text x="145" y="154" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">x (Antécédent)</text>
            <text x="58" y="90" textAnchor="end" className="text-[10px] font-black fill-rose-300">f(x)</text>
            <rect x="230" y="30" width="185" height="114" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="322" y="56" textAnchor="middle" className="text-[10px] font-black fill-amber-300">MÉMO LECTURE GRAPHIQUE</text>
            <text x="322" y="82" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Antécédent x : axe HORIZONTAL</text>
            <text x="322" y="106" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">Image f(x) : axe VERTICAL</text>
            <text x="322" y="128" textAnchor="middle" className="text-[10px] font-mono fill-white">f(x) = 2x + 500</text>
          </>
        )}

        {topic === 'arithmetique' && (
          <>
            <circle cx="115" cy="40" r="18" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="115" y="45" textAnchor="middle" className="text-sm font-black fill-white">60</text>
            <line x1="103" y1="54" x2="72" y2="82" stroke="#94a3b8" strokeWidth="2" />
            <line x1="127" y1="54" x2="158" y2="82" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="68" cy="92" r="15" fill="#10b981" /><text x="68" y="97" textAnchor="middle" className="text-xs font-black fill-slate-950">2</text>
            <circle cx="162" cy="92" r="16" fill="#334155" stroke="#94a3b8" /><text x="162" y="97" textAnchor="middle" className="text-xs font-black fill-white">30</text>
            <line x1="150" y1="104" x2="122" y2="132" stroke="#94a3b8" strokeWidth="2" />
            <line x1="174" y1="104" x2="202" y2="132" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="118" cy="142" r="14" fill="#10b981" /><text x="118" y="147" textAnchor="middle" className="text-xs font-black fill-slate-950">2</text>
            <circle cx="206" cy="142" r="14" fill="#f59e0b" /><text x="206" y="147" textAnchor="middle" className="text-xs font-black fill-slate-950">3×5</text>

            <rect x="242" y="30" width="174" height="118" rx="12" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <text x="329" y="56" textAnchor="middle" className="text-[10px] font-black fill-amber-300">DÉCOMPOSITION & PGCD</text>
            <text x="329" y="82" textAnchor="middle" className="text-xs font-black fill-white font-mono">60 = 2² × 3 × 5</text>
            <text x="329" y="106" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Premiers : 2, 3, 5, 7, 11, 13...</text>
            <text x="329" y="128" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">1 n’est PAS premier !</text>
          </>
        )}
      </svg>
    </div>
  </div>
);

export const Gabon3eExtrasIllustration: React.FC<{
  topic: 'systemes-equations' | 'vecteurs-chasles' | 'angles-polygones' | 'sections-solides';
}> = ({ topic }) => (
  <div className="rounded-3xl bg-slate-900 border-2 border-indigo-500/40 p-4 sm:p-5 shadow-xl space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-indigo-300">
      <span>
        {topic === 'systemes-equations' && '🧩 Systèmes d’Équations à 2 Inconnues & Intersection de 2 Droites'}
        {topic === 'vecteurs-chasles' && '➡️ Vecteurs : Relation de Chasles (AB⃗ + BC⃗ = AC⃗) & Parallélogramme'}
        {topic === 'angles-polygones' && '⭕ Angles Inscrits, Quadrilatères Inscriptibles & Polygones Réguliers'}
        {topic === 'sections-solides' && '🔺 Sections Planes, Facteurs (k, k², k³) & Tronc de Cône/Pyramide'}
      </span>
      <span className="text-[11px] text-amber-300 font-bold">CIAM 3ème BEPC</span>
    </div>
    <div className="flex justify-center bg-slate-950/85 rounded-2xl border border-slate-800 p-3">
      <svg viewBox="0 0 430 175" className="w-full max-w-lg h-auto select-none">
        {topic === 'systemes-equations' && (
          <>
            <line x1="40" y1="145" x2="210" y2="145" stroke="#64748b" strokeWidth="2" />
            <line x1="65" y1="155" x2="65" y2="25" stroke="#64748b" strokeWidth="2" />
            <line x1="50" y1="130" x2="195" y2="40" stroke="#38bdf8" strokeWidth="3" />
            <line x1="55" y1="35" x2="195" y2="135" stroke="#10b981" strokeWidth="3" />
            <circle cx="128" cy="82" r="6" fill="#fbbf24" />
            <text x="140" y="78" className="text-xs font-black fill-amber-300">Solution (x₀ ; y₀)</text>
            <rect x="235" y="28" width="180" height="118" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="325" y="54" textAnchor="middle" className="text-[11px] font-black fill-amber-300">2 MÉTHODES BEPC</text>
            <text x="325" y="82" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">1. Substitution (isoler x ou y)</text>
            <text x="325" y="106" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">2. Combinaison (éliminer)</text>
            <text x="325" y="130" textAnchor="middle" className="text-[10px] font-bold fill-slate-300">Couple S = &#123;(x ; y)&#125;</text>
          </>
        )}

        {topic === 'vecteurs-chasles' && (
          <>
            <circle cx="55" cy="135" r="4" fill="#38bdf8" />
            <circle cx="145" cy="45" r="4" fill="#fbbf24" />
            <circle cx="215" cy="135" r="4" fill="#10b981" />
            <line x1="55" y1="135" x2="140" y2="50" stroke="#38bdf8" strokeWidth="3" />
            <polygon points="145,45 132,50 140,58" fill="#38bdf8" />
            <text x="86" y="80" className="text-xs font-black fill-sky-300">AB⃗</text>
            <line x1="145" y1="45" x2="210" y2="129" stroke="#fbbf24" strokeWidth="3" />
            <polygon points="215,135 212,121 203,128" fill="#fbbf24" />
            <text x="190" y="80" className="text-xs font-black fill-amber-300">BC⃗</text>
            <line x1="55" y1="135" x2="207" y2="135" stroke="#10b981" strokeWidth="3.5" strokeDasharray="5 3" />
            <polygon points="215,135 203,129 203,141" fill="#10b981" />
            <text x="135" y="156" textAnchor="middle" className="text-xs font-black fill-emerald-300">AC⃗ = AB⃗ + BC⃗</text>

            <rect x="240" y="28" width="175" height="118" rx="12" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <text x="327" y="54" textAnchor="middle" className="text-[11px] font-black fill-amber-300">LOIS VECTORIELLES</text>
            <text x="327" y="80" textAnchor="middle" className="text-xs font-mono font-bold fill-white">AB⃗ + BC⃗ = AC⃗</text>
            <text x="327" y="104" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">AB⃗ = DC⃗ ⇔ ABCD paral.</text>
            <text x="327" y="128" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">I milieu [AB] ⇔ IA⃗+IB⃗=0⃗</text>
          </>
        )}

        {topic === 'angles-polygones' && (
          <>
            <circle cx="115" cy="88" r="58" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
            <polygon points="115,30 165,60 165,116 115,146 65,116 65,60" fill="#a855f7" fillOpacity="0.25" stroke="#c084fc" strokeWidth="2.5" />
            <line x1="115" y1="88" x2="115" y2="30" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="115" y1="88" x2="165" y2="60" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="115" cy="88" r="4" fill="#fbbf24" />
            <text x="148" y="76" className="text-[10px] font-black fill-amber-300">60°</text>
            <text x="115" y="164" textAnchor="middle" className="text-[10px] font-black fill-purple-300">Hexagone régulier (n=6)</text>

            <rect x="215" y="28" width="200" height="118" rx="12" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
            <text x="315" y="54" textAnchor="middle" className="text-[11px] font-black fill-amber-300">ANGLES &amp; POLYGONES</text>
            <text x="315" y="80" textAnchor="middle" className="text-[10px] font-bold fill-white">Quadrilatère inscrit : Â + Ĉ = 180°</text>
            <text x="315" y="106" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-300">Angle centre = 360° ÷ n</text>
            <text x="315" y="130" textAnchor="middle" className="text-[10px] font-mono font-bold fill-sky-300">Angle intérieur = 180° − 360°/n</text>
          </>
        )}

        {topic === 'sections-solides' && (
          <>
            <polygon points="115,24 55,146 175,146" fill="#0284c7" fillOpacity="0.22" stroke="#38bdf8" strokeWidth="2.5" />
            <ellipse cx="115" cy="146" rx="60" ry="12" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
            <ellipse cx="115" cy="85" rx="30" ry="7" fill="#fbbf24" fillOpacity="0.35" stroke="#fbbf24" strokeWidth="2.5" />
            <text x="175" y="88" className="text-[10px] font-black fill-amber-300">Section r’=k·r</text>
            <text x="115" y="169" textAnchor="middle" className="text-[10px] font-black fill-sky-300">Tronc de cône = V − V’</text>

            <rect x="225" y="26" width="190" height="124" rx="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="320" y="52" textAnchor="middle" className="text-[11px] font-black fill-amber-300">LOI D’ÉCHELLE (k, k², k³)</text>
            <text x="320" y="78" textAnchor="middle" className="text-[10px] font-bold fill-white">Longueurs × k</text>
            <text x="320" y="100" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Aires (sections) × k²</text>
            <text x="320" y="122" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">Volumes × k³</text>
            <text x="320" y="142" textAnchor="middle" className="text-[9px] font-bold fill-rose-300">k = 1/2 ➔ Volume ÷ 8 !</text>
          </>
        )}
      </svg>
    </div>
  </div>
);

export const ChapterCourseIllustration: React.FC<{ illustrationKey?: ChapterIllustrationKey }> = ({
  illustrationKey,
}) => {
  if (illustrationKey && PHYSICS_KEYS.has(illustrationKey)) {
    return <PhysicsChapterIllustration illustrationKey={illustrationKey as PhysicsIllustrationKey} />;
  }
  if (illustrationKey && illustrationKey.startsWith('tc-')) {
    return <TerminaleCMathDrawing illustrationKey={illustrationKey} />;
  }

  switch (illustrationKey) {
    case 'relatifs':
    case 'puissances':
      return <Gabon4eRelatifsPuissancesIllustration />;
    case 'fractions':
      return <Gabon4eFractionsIllustration />;
    case 'calcul-litteral':
      return <Gabon4eCalculLitteralIllustration isIdentites={false} />;
    case 'identites-factorisation':
      return <Gabon4eCalculLitteralIllustration isIdentites={true} />;
    case 'equations':
      return <Gabon4eEquationBalanceIllustration isIneq={false} />;
    case 'inequations':
      return <Gabon4eEquationBalanceIllustration isIneq={true} />;
    case 'systemes-equations':
      return <Gabon3eExtrasIllustration topic="systemes-equations" />;
    case 'racine-carree':
      return <Gabon4ePythagoreIllustration isRoot={true} />;
    case 'pythagore':
      return <Gabon4ePythagoreIllustration isRoot={false} />;
    case 'milieux-agrandissement':
      return <Gabon4eThalesMilieuxIllustration isThales={false} />;
    case 'thales':
      return <Gabon4eThalesMilieuxIllustration isThales={true} />;
    case 'trigonometrie':
      return <Gabon4eTrigoIllustration />;
    case 'vecteurs-chasles':
      return <Gabon3eExtrasIllustration topic="vecteurs-chasles" />;
    case 'angles-polygones':
      return <Gabon3eExtrasIllustration topic="angles-polygones" />;
    case 'sections-solides':
      return <Gabon3eExtrasIllustration topic="sections-solides" />;
    case 'espace-volumes':
      return <Gabon4eStatsVitesseVolumesIllustration topic="volumes" />;
    case 'vitesse':
      return <Gabon4eStatsVitesseVolumesIllustration topic="vitesse" />;
    case 'statistiques':
    case 'quartiles':
      return <Gabon4eStatsVitesseVolumesIllustration topic="stats" />;
    case 'probabilites':
      return <Gabon4eStatsVitesseVolumesIllustration topic="probas" />;
    case 'proportionnalite':
      return <Gabon4eStatsVitesseVolumesIllustration topic="proportionnalite" />;
    case 'cercle':
      return <Gabon4eGeoFunctionsIllustration topic="cercle" />;
    case 'reperage-plan':
      return <Gabon4eGeoFunctionsIllustration topic="reperage" />;
    case 'translations':
      return <Gabon4eGeoFunctionsIllustration topic="translations" />;
    case 'symetries':
      return <Gabon4eGeoFunctionsIllustration topic="symetries" />;
    case 'homothetie':
      return <Gabon4eGeoFunctionsIllustration topic="homothetie" />;
    case 'rotation':
      return <Gabon4eGeoFunctionsIllustration topic="rotation" />;
    case 'droites-remarquables':
      return <Gabon4eGeoFunctionsIllustration topic="droites" />;
    case 'fonctions':
      return <Gabon4eGeoFunctionsIllustration topic="fonctions" />;
    case 'nombres-premiers':
      return <Gabon4eGeoFunctionsIllustration topic="arithmetique" />;
    default:
      return <Gabon4eRelatifsPuissancesIllustration />;
  }
};
