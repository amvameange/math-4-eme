import React, { useState } from 'react';
import { StandingMathRenderer } from './StandingMathRenderer';

export interface ChapterExperienceInfo {
  titles: [string, string, string];
  shortTitles: [string, string, string];
}

export const PHYSICS_3EME_EXPERIENCE_META: Record<string, ChapterExperienceInfo> = {
  'phys3-actions-mecaniques': {
    titles: [
      'Exp. 1 : Vecteur Poids P = m × g & Échelle graphique',
      'Exp. 2 : Dynamomètre & Loi du ressort (F = k × Δl)',
      'Exp. 3 : Action de contact localisée vs répartie (Pression p = F/S)',
    ],
    shortTitles: ['Vecteur Poids', 'Dynamomètre', 'Pression F/S'],
  },
  'phys3-equilibre-solide': {
    titles: [
      'Exp. 1 : Équilibre d’un solide soumis à 2 forces colinéaires',
      'Exp. 2 : Poussée d’Archimède & Flottaison (Pa = ρ·V·g)',
      'Exp. 3 : Poids apparent P’ = P − Pa au dynamomètre',
    ],
    shortTitles: ['Équilibre 2 forces', 'Archimède', 'Poids apparent'],
  },
  'phys3-travail-puissance': {
    titles: [
      'Exp. 1 : Travail d’une force constante (W = F × d)',
      'Exp. 2 : Travail moteur vs résistant en montée/descente (W = ±m·g·h)',
      'Exp. 3 : Puissance d’une grue au Gabon (P = W/t = F·v)',
    ],
    shortTitles: ['Travail W = F×d', 'Moteur/Résistant', 'Puissance P=W/t'],
  },
  'phys3-energie-mecanique': {
    titles: [
      'Exp. 1 : Conservation Em = Ec + Ep en chute libre',
      'Exp. 2 : Énergie cinétique & Vitesse (Ec = ½·m·v²)',
      'Exp. 3 : Pendule oscillant (Échanges Ep ↔ Ec)',
    ],
    shortTitles: ['Chute Em=Ec+Ep', 'Cinétique v²', 'Pendule'],
  },
  'phys3-conducteurs-ohmiques': {
    titles: [
      'Exp. 1 : Caractéristique U(I) d’un résistor (U = R × I)',
      'Exp. 2 : Association Série vs Dérivation (Req)',
      'Exp. 3 : Pont diviseur de tension (Us = Ue × R₂/(R₁+R₂))',
    ],
    shortTitles: ['Courbe U(I)', 'Série / Dériv.', 'Pont diviseur'],
  },
  'phys3-energie-puissance-seeg': {
    titles: [
      'Exp. 1 : Effet Joule thermique (Pj = R × I²)',
      'Exp. 2 : Compteur SEEG & Facture en F CFA (E = P × t)',
      'Exp. 3 : Puissance nominale & Sécurité disjoncteur (P = U × I)',
    ],
    shortTitles: ['Effet Joule', 'Compteur SEEG', 'Disjoncteur'],
  },
  'phys3-transformateur-electronique': {
    titles: [
      'Exp. 1 : Transformateur abaisseur / élévateur (Us/Up = Ns/Np)',
      'Exp. 2 : Diode & Redressement simple alternance',
      'Exp. 3 : Transistor NPN en commutation (Ib pilote Ic)',
    ],
    shortTitles: ['Transformateur', 'Diode redressement', 'Transistor NPN'],
  },
  'phys3-lentilles-construction': {
    titles: [
      'Exp. 1 : Construction des 3 rayons particuliers (O, F, F’)',
      'Exp. 2 : Vergence C = 1/f et convergence des rayons',
      'Exp. 3 : Grandissement γ = A’B’/AB & Image réelle/virtuelle',
    ],
    shortTitles: ['3 Rayons', 'Vergence C=1/f', 'Grandissement γ'],
  },
  'phys3-oeil-instruments': {
    titles: [
      'Exp. 1 : Œil réduit — Myopie (−), Hypermétropie (+) & Correction',
      'Exp. 2 : Principe de la Loupe (OA < f, G = C/4)',
      'Exp. 3 : Comparaison Œil / Appareil Photo (Iris / Diaphragme)',
    ],
    shortTitles: ['Défauts de l’œil', 'Loupe G=C/4', 'Œil vs Photo'],
  },
  'phys3-metaux-oxydation': {
    titles: [
      'Exp. 1 : Corrosion du Fer (Fe₂O₃) vs Protection Alumine (Al₂O₃)',
      'Exp. 2 : Combustion vive des métaux dans O₂ (Fe₃O₄, CuO)',
      'Exp. 3 : Tri physique des métaux (Aimant, Densité, Conductivité)',
    ],
    shortTitles: ['Corrosion air', 'Combustion O₂', 'Tri métaux'],
  },
  'phys3-ions-tests': {
    titles: [
      'Exp. 1 : Formation des ions (Perte ou gain d’électrons)',
      'Exp. 2 : Tests caractéristiques NaOH & AgNO₃ (Précipités)',
      'Exp. 3 : Migration des ions colorés sous tension (Tube en U)',
    ],
    shortTitles: ['Formation ions', 'Précipités', 'Migration tube U'],
  },
  'phys3-acides-bases-ph': {
    titles: [
      'Exp. 1 : Échelle de pH & Équilibre des ions H⁺ / OH⁻',
      'Exp. 2 : Dilution d’un acide et d’une base vers pH = 7',
      'Exp. 3 : Dosage / Neutralisation Acide-Base (Ca·Va = Cb·Vb)',
    ],
    shortTitles: ['Échelle pH', 'Dilution', 'Dosage BBT'],
  },
  'phys3-hydrocarbures-alcools': {
    titles: [
      'Exp. 1 : Molécules d’Alcanes (CnH₂n+₂) vs Alcènes (CnH₂n)',
      'Exp. 2 : Bec Bunsen — Combustion complète vs incomplète (CO)',
      'Exp. 3 : Colonne de distillation pétrolière (SOGARA Port-Gentil)',
    ],
    shortTitles: ['Alcanes/Alcènes', 'Bec Bunsen', 'Raffinage SOGARA'],
  },
};

export const Physics3emeExperiences: React.FC<{
  chapterId: string;
  experienceIndex: 0 | 1 | 2;
}> = ({ chapterId, experienceIndex }) => {
  // Interactive state shared cleanly across experiences
  const [m1Mass, setM1Mass] = useState(8);
  const [m1Scale, setM1Scale] = useState(20);
  const [m1Planet, setM1Planet] = useState<'gabon' | 'lune'>('gabon');
  const [m1SpringK, setM1SpringK] = useState(50);
  const [m1Force, setM1Force] = useState(10);
  const [m1Area, setM1Area] = useState(4);

  const [m2Angle, setM2Angle] = useState(180);
  const [m2VolL, setM2VolL] = useState(4);
  const [m2Weight, setM2Weight] = useState(30);
  const [m2Liq, setM2Liq] = useState<'douce' | 'salee'>('douce');

  const [m3Force, setM3Force] = useState(400);
  const [m3Dist, setM3Dist] = useState(15);
  const [m3SlopeDir, setM3SlopeDir] = useState<'monte' | 'descend'>('monte');
  const [m3Height, setM3Height] = useState(6);
  const [m3TimeS, setM3TimeS] = useState(20);

  const [m4Mass, setM4Mass] = useState(4);
  const [m4H, setM4H] = useState(20);
  const [m4DropFrac, setM4DropFrac] = useState(50);
  const [m4Speed, setM4Speed] = useState(10);
  const [m4PendAngle, setM4PendAngle] = useState(35);

  const [m5R, setM5R] = useState(40);
  const [m5I, setM5I] = useState(0.3);
  const [m5R1, setM5R1] = useState(30);
  const [m5R2, setM5R2] = useState(60);
  const [m5Mode, setM5Mode] = useState<'serie' | 'derivation'>('derivation');
  const [m5Ue, setM5Ue] = useState(12);

  const [m6R, setM6R] = useState(20);
  const [m6I, setM6I] = useState(3);
  const [m6Watts, setM6Watts] = useState(1800);
  const [m6Hours, setM6Hours] = useState(4);
  const [m6CircuitI, setM6CircuitI] = useState(14);

  const [m7Np, setM7Np] = useState(2000);
  const [m7Ns, setM7Ns] = useState(200);
  const [m7DiodeDir, setM7DiodeDir] = useState<'direct' | 'inverse'>('direct');
  const [m7Ib, setM7Ib] = useState(2);

  const [m8F, setM8F] = useState(10);
  const [m8OA, setM8OA] = useState(25);
  const [m8AB, setM8AB] = useState(3);

  const [m9Eye, setM9Eye] = useState<'normal' | 'myope' | 'hypermetrope'>('myope');
  const [m9Corrected, setM9Corrected] = useState(true);
  const [m9Vergence, setM9Vergence] = useState(20);
  const [m9Aperture, setM9Aperture] = useState(50);

  const [m10Metal, setM10Metal] = useState<'fe' | 'al' | 'cu'>('fe');
  const [m10O2Pct, setM10O2Pct] = useState(80);
  const [m10Sample, setM10Sample] = useState<'fe' | 'al' | 'cu' | 'zn'>('fe');

  const [m11Atom, setM11Atom] = useState<'na' | 'cl' | 'fe' | 'cu'>('cu');
  const [m11Ion, setM11Ion] = useState<'cu2' | 'fe2' | 'fe3' | 'zn2' | 'cl'>('cu2');
  const [m11VoltageOn, setM11VoltageOn] = useState(true);

  const [m12Ph, setM12Ph] = useState(2);
  const [m12DilFactor, setM12DilFactor] = useState(10);
  const [m12DilType, setM12DilType] = useState<'acide' | 'base'>('acide');
  const [m12Ca, setM12Ca] = useState(0.2);
  const [m12Va, setM12Va] = useState(20);

  const [m13N, setM13N] = useState(4);
  const [m13Family, setM13Family] = useState<'alcane' | 'alcene'>('alcane');
  const [m13Virole, setM13Virole] = useState<'ouverte' | 'fermee'>('ouverte');
  const [m13Cut, setM13Cut] = useState<'gaz' | 'essence' | 'kerosene' | 'gasoil' | 'bitume'>('essence');

  // 1. ACTIONS MÉCANIQUES
  if (chapterId === 'phys3-actions-mecaniques') {
    if (experienceIndex === 0) {
      const g = m1Planet === 'gabon' ? 9.8 : 1.6;
      const p = Number((m1Mass * g).toFixed(1));
      const lenCm = Number((p / m1Scale).toFixed(1));
      return (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setM1Planet('gabon')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m1Planet === 'gabon' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Gabon (g = 9,8 N/kg)</button>
            <button type="button" onClick={() => setM1Planet('lune')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m1Planet === 'lune' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Lune (g = 1,6 N/kg)</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Masse m : {m1Mass} kg</label>
              <input type="range" min="2" max="20" value={m1Mass} onChange={(e) => setM1Mass(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Échelle : 1 cm ⟷ {m1Scale} N</label>
              <input type="range" min="10" max="50" step="10" value={m1Scale} onChange={(e) => setM1Scale(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 130" className="w-full max-w-md h-auto">
              <rect x="65" y="20" width="46" height="36" rx="6" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="88" cy="38" r="4" fill="#fbbf24" />
              <line x1="88" y1="38" x2="88" y2={Math.min(118, 42 + lenCm * 10)} stroke="#f43f5e" strokeWidth="3.5" />
              <polygon points={`88,${Math.min(125, 48 + lenCm * 10)} 82,${Math.min(115, 38 + lenCm * 10)} 94,${Math.min(115, 38 + lenCm * 10)}`} fill="#f43f5e" />
              <text x="104" y="88" className="text-xs font-black fill-rose-300">P = {p} N ({lenCm} cm)</text>
              <text x="235" y="50" textAnchor="middle" className="text-xs font-black fill-amber-300">Origine G · Verticale ↓</text>
              <text x="235" y="72" textAnchor="middle" className="text-[11px] font-mono fill-emerald-300">Longueur = {p} ÷ {m1Scale} = {lenCm} cm</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`P = m × g = ${m1Mass} × ${g} = ${p} N | Flèche = ${p} ÷ ${m1Scale} = ${lenCm} cm`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const dlCm = Number(((m1Force / m1SpringK) * 100).toFixed(1));
      const stretchPx = Math.min(60, dlCm * 2);
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Force appliquée F : {m1Force} N</label>
              <input type="range" min="2" max="20" step="2" value={m1Force} onChange={(e) => setM1Force(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Raideur ressort k : {m1SpringK} N/m</label>
              <input type="range" min="25" max="100" step="25" value={m1SpringK} onChange={(e) => setM1SpringK(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 125" className="w-full max-w-md h-auto">
              <line x1="60" y1="14" x2="140" y2="14" stroke="#94a3b8" strokeWidth="4" />
              <polyline
                points={`100,14 90,${22 + stretchPx * 0.2} 110,${28 + stretchPx * 0.4} 90,${34 + stretchPx * 0.6} 110,${40 + stretchPx * 0.8} 100,${46 + stretchPx}`}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />
              <rect x="82" y={46 + stretchPx} width="36" height="22" rx="4" fill="#fbbf24" />
              <text x="100" y={61 + stretchPx} textAnchor="middle" className="text-[10px] font-black fill-slate-950">{m1Force} N</text>
              <text x="235" y="45" textAnchor="middle" className="text-xs font-black fill-sky-300">Allongement Δl = {dlCm} cm</text>
              <text x="235" y="68" textAnchor="middle" className="text-[11px] font-mono fill-emerald-300">F = k × Δl = {m1Force} N</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Δl = F ÷ k = ${m1Force} ÷ ${m1SpringK} = ${(dlCm / 100).toFixed(3)} m = ${dlCm} cm`} showColumnOp={false} />
        </div>
      );
    }
    const pBar = Number(((m1Mass * 10) / m1Area).toFixed(1));
    const sink = Math.min(28, Math.round(pBar / 2));
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-amber-300 block mb-1">Force pressante F = {m1Mass * 10} N</label>
            <input type="range" min="2" max="20" value={m1Mass} onChange={(e) => setM1Mass(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Surface d’appui S : {m1Area} cm²</label>
            <input type="range" min="1" max="10" value={m1Area} onChange={(e) => setM1Area(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 120" className="w-full max-w-md h-auto">
            <rect x="30" y="75" width="160" height="32" rx="4" fill="#d97706" fillOpacity="0.35" stroke="#f59e0b" strokeWidth="1.5" />
            <rect x={110 - m1Area * 4} y={50 + sink - 25} width={m1Area * 8} height="35" rx="3" fill="#38bdf8" stroke="#bae6fd" strokeWidth="2" />
            <text x="260" y="50" textAnchor="middle" className="text-xs font-black fill-emerald-300">Pression p = {pBar} N/cm²</text>
            <text x="260" y="72" textAnchor="middle" className="text-[10px] fill-slate-300">Plus S est petite, plus ça s’enfonce !</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`p = F ÷ S = ${m1Mass * 10} N ÷ ${m1Area} cm² = ${pBar} N/cm² (${(pBar * 10000).toLocaleString('fr-FR')} Pa)`} showColumnOp={false} />
      </div>
    );
  }

  // 2. ÉQUILIBRE D'UN SOLIDE & ARCHIMÈDE
  if (chapterId === 'phys3-equilibre-solide') {
    if (experienceIndex === 0) {
      const balanced = m2Angle === 180;
      const rad = ((m2Angle - 180) * Math.PI) / 180;
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">Angle entre F₁ et F₂ : {m2Angle}° (Équilibre exact à 180°)</label>
            <input type="range" min="120" max="240" step="10" value={m2Angle} onChange={(e) => setM2Angle(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 120" className="w-full max-w-md h-auto">
              <circle cx="130" cy="60" r="18" fill={balanced ? '#10b981' : '#f43f5e'} fillOpacity="0.3" stroke={balanced ? '#10b981' : '#f43f5e'} strokeWidth="2.5" />
              <line x1="112" y1="60" x2="45" y2="60" stroke="#fbbf24" strokeWidth="3" />
              <polygon points="38,60 48,55 48,65" fill="#fbbf24" />
              <line x1="148" y1="60" x2={148 + Math.cos(rad) * 65} y2={60 + Math.sin(rad) * 65} stroke="#38bdf8" strokeWidth="3" />
              <text x="65" y="48" className="text-[11px] font-black fill-amber-300">F₁</text>
              <text x="200" y="48" className="text-[11px] font-black fill-sky-300">F₂</text>
              <text x="255" y="72" textAnchor="middle" className={`text-xs font-black ${balanced ? 'fill-emerald-300' : 'fill-rose-300'}`}>
                {balanced ? 'ÉQUILIBRE (F₁ + F₂ = 0)' : 'DÉSÉQUILIBRE !'}
              </text>
            </svg>
          </div>
          <StandingMathRenderer
            expression={balanced ? 'Même droite d’action, sens opposés (180°), F₁ = F₂ ➔ ÉQUILIBRE !' : `Angle = ${m2Angle}° ≠ 180° : les droites d’action diffèrent ➔ Mouvement !`}
            showColumnOp={false}
          />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const rho = m2Liq === 'douce' ? 1 : 1.2;
      const paMax = Number((rho * m2VolL * 10).toFixed(1));
      const floats = paMax >= m2Weight;
      return (
        <div className="space-y-3">
          <div className="flex gap-2">
            <button type="button" onClick={() => setM2Liq('douce')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m2Liq === 'douce' ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Eau douce (ρ = 1 kg/L)</button>
            <button type="button" onClick={() => setM2Liq('salee')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m2Liq === 'salee' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Eau salée (ρ = 1,2 kg/L)</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Volume V : {m2VolL} L (Pa_max = {paMax} N)</label>
              <input type="range" min="1" max="8" value={m2VolL} onChange={(e) => setM2VolL(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-rose-300 block mb-1">Poids du solide P : {m2Weight} N</label>
              <input type="range" min="10" max="80" step="5" value={m2Weight} onChange={(e) => setM2Weight(Number(e.target.value))} className="w-full accent-rose-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 120" className="w-full max-w-md h-auto">
              <rect x="30" y="34" width="130" height="76" rx="8" fill="#0284c7" fillOpacity="0.22" stroke="#38bdf8" strokeWidth="2" />
              <rect x="75" y={floats ? 24 : 74} width="40" height="30" rx="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
              <text x="245" y="52" textAnchor="middle" className={`text-xs font-black ${floats ? 'fill-emerald-300' : 'fill-rose-300'}`}>
                {floats ? 'FLOTTE (Pa_max ≥ P)' : 'COULE (P > Pa_max)'}
              </text>
              <text x="245" y="74" textAnchor="middle" className="text-[11px] font-mono fill-white">Pa_max = {paMax} N vs P = {m2Weight} N</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Pa_max = ρ × V × g = ${rho} × ${m2VolL} × 10 = ${paMax} N | Verdict : ${floats ? 'FLOTTE (Pa = P)' : 'COULE'}`} showColumnOp={false} />
        </div>
      );
    }
    const pa = m2VolL * 10;
    const pApp = Math.max(0, m2Weight - pa);
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-rose-300 block mb-1">Poids réel dans l’air P : {m2Weight} N</label>
            <input type="range" min="20" max="80" step="5" value={m2Weight} onChange={(e) => setM2Weight(Number(e.target.value))} className="w-full accent-rose-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Volume immergé V : {m2VolL} L (Pa = {pa} N)</label>
            <input type="range" min="1" max="7" value={m2VolL} onChange={(e) => setM2VolL(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 120" className="w-full max-w-md h-auto">
            <rect x="40" y="18" width="44" height="30" rx="6" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
            <text x="62" y="37" textAnchor="middle" className="text-[10px] font-black fill-amber-300">{m2Weight} N</text>
            <rect x="48" y="65" width="28" height="28" rx="4" fill="#94a3b8" />
            <text x="62" y="108" textAnchor="middle" className="text-[10px] fill-slate-400">Air : P = {m2Weight} N</text>

            <rect x="190" y="18" width="54" height="30" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
            <text x="217" y="37" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">{pApp} N</text>
            <rect x="180" y="55" width="74" height="50" rx="6" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
            <rect x="203" y="68" width="28" height="26" rx="4" fill="#94a3b8" />
            <text x="217" y="116" textAnchor="middle" className="text-[10px] fill-sky-300">Eau : P’ = {pApp} N</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`Pa = P − P’ = ${m2Weight} − ${pApp} = ${m2Weight - pApp} N | Poids apparent P’ = ${pApp} N`} showColumnOp={false} />
      </div>
    );
  }

  // 3. TRAVAIL & PUISSANCE
  if (chapterId === 'phys3-travail-puissance') {
    if (experienceIndex === 0) {
      const w = m3Force * m3Dist;
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Force motrice F : {m3Force} N</label>
              <input type="range" min="100" max="1000" step="50" value={m3Force} onChange={(e) => setM3Force(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Déplacement d : {m3Dist} m</label>
              <input type="range" min="5" max="40" step="5" value={m3Dist} onChange={(e) => setM3Dist(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
              <line x1="25" y1="78" x2="315" y2="78" stroke="#64748b" strokeWidth="2.5" />
              <rect x="40" y="42" width="44" height="34" rx="4" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
              <line x1="84" y1="59" x2="170" y2="59" stroke="#fbbf24" strokeWidth="3.5" />
              <polygon points="178,59 166,53 166,65" fill="#fbbf24" />
              <text x="130" y="48" textAnchor="middle" className="text-xs font-black fill-amber-300">F = {m3Force} N</text>
              <text x="175" y="96" textAnchor="middle" className="text-[11px] fill-sky-300">Distance d = {m3Dist} m</text>
              <text x="260" y="55" textAnchor="middle" className="text-xs font-black fill-emerald-300">W = {w} J</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`W = F × d = ${m3Force} × ${m3Dist} = ${w.toLocaleString('fr-FR')} J`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const wp = (m3SlopeDir === 'descend' ? 1 : -1) * m1Mass * 10 * m3Height;
      return (
        <div className="space-y-3">
          <div className="flex gap-2">
            <button type="button" onClick={() => setM3SlopeDir('monte')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m3SlopeDir === 'monte' ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}>Montée (Travail RÉSISTANT)</button>
            <button type="button" onClick={() => setM3SlopeDir('descend')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m3SlopeDir === 'descend' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Descente (Travail MOTEUR)</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Masse m : {m1Mass} kg (P = {m1Mass * 10} N)</label>
              <input type="range" min="2" max="20" value={m1Mass} onChange={(e) => setM1Mass(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Dénivelé h : {m3Height} m</label>
              <input type="range" min="2" max="20" step="2" value={m3Height} onChange={(e) => setM3Height(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 115" className="w-full max-w-md h-auto">
              <polygon points="40,95 240,95 240,30" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <circle cx={m3SlopeDir === 'monte' ? 140 : 170} cy={m3SlopeDir === 'monte' ? 60 : 50} r="10" fill="#fbbf24" />
              <line x1="255" y1="30" x2="255" y2="95" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
              <text x="275" y="65" className="text-[11px] font-black fill-emerald-300">h={m3Height}m</text>
              <text x="140" y="25" textAnchor="middle" className={`text-xs font-black ${wp >= 0 ? 'fill-emerald-300' : 'fill-rose-300'}`}>
                W(P) = {wp >= 0 ? `+${wp}` : wp} J ({wp >= 0 ? 'MOTEUR' : 'RÉSISTANT'})
              </text>
            </svg>
          </div>
          <StandingMathRenderer expression={`W(P) = ${m3SlopeDir === 'descend' ? '+' : '−'} m·g·h = ${wp >= 0 ? `+${wp}` : wp} J`} showColumnOp={false} />
        </div>
      );
    }
    const w = m3Force * m3Dist;
    const p = Number((w / m3TimeS).toFixed(1));
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-amber-300 block mb-1">Poids levé F : {m3Force} N</label>
            <input type="range" min="200" max="1000" step="100" value={m3Force} onChange={(e) => setM3Force(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Hauteur h : {m3Dist} m</label>
            <input type="range" min="5" max="30" step="5" value={m3Dist} onChange={(e) => setM3Dist(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-emerald-300 block mb-1">Durée t : {m3TimeS} s</label>
            <input type="range" min="5" max="60" step="5" value={m3TimeS} onChange={(e) => setM3TimeS(Number(e.target.value))} className="w-full accent-emerald-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 115" className="w-full max-w-md h-auto">
            <line x1="65" y1="20" x2="210" y2="20" stroke="#fbbf24" strokeWidth="4" />
            <line x1="90" y1="20" x2="90" y2="105" stroke="#94a3b8" strokeWidth="4" />
            <line x1="175" y1="20" x2="175" y2="62" stroke="#38bdf8" strokeWidth="2.5" />
            <rect x="157" y="62" width="36" height="28" rx="4" fill="#38bdf8" fillOpacity="0.35" stroke="#38bdf8" strokeWidth="2" />
            <text x="175" y="80" textAnchor="middle" className="text-[10px] font-black fill-white">{m3Force}N</text>
            <text x="265" y="52" textAnchor="middle" className="text-xs font-black fill-emerald-300">P = {p} W</text>
            <text x="265" y="72" textAnchor="middle" className="text-[11px] font-mono fill-amber-300">W = {w} J en {m3TimeS} s</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`W = ${m3Force} × ${m3Dist} = ${w} J | P = ${w} ÷ ${m3TimeS} = ${p} W`} showColumnOp={false} />
      </div>
    );
  }

  // 4. ÉNERGIE MÉCANIQUE
  if (chapterId === 'phys3-energie-mecanique') {
    if (experienceIndex === 0) {
      const em = m4Mass * 10 * m4H;
      const fracDown = m4DropFrac / 100;
      const ec = Math.round(em * fracDown);
      const ep = em - ec;
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Masse m : {m4Mass} kg</label>
              <input type="range" min="2" max="15" value={m4Mass} onChange={(e) => setM4Mass(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Hauteur max : {m4H} m</label>
              <input type="range" min="10" max="60" step="5" value={m4H} onChange={(e) => setM4H(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-emerald-300 block mb-1">Chute parcourue : {m4DropFrac}%</label>
              <input type="range" min="0" max="100" step="10" value={m4DropFrac} onChange={(e) => setM4DropFrac(Number(e.target.value))} className="w-full accent-emerald-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 120" className="w-full max-w-md h-auto">
              <circle cx="70" cy={22 + fracDown * 74} r="10" fill="#fbbf24" />
              <line x1="40" y1="104" x2="120" y2="104" stroke="#64748b" strokeWidth="3" />
              {/* Stacked bars */}
              <rect x="160" y="25" width="38" height={Math.max(4, Math.round(75 * (ep / em)))} fill="#38bdf8" rx="3" />
              <rect x="215" y="25" width="38" height={Math.max(4, Math.round(75 * (ec / em)))} fill="#10b981" rx="3" />
              <rect x="270" y="25" width="38" height="75" fill="#a855f7" rx="3" />
              <text x="179" y="114" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Ep={ep}J</text>
              <text x="234" y="114" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Ec={ec}J</text>
              <text x="289" y="114" textAnchor="middle" className="text-[10px] font-bold fill-purple-300">Em={em}J</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Em = Ep + Ec = ${ep} + ${ec} = ${em} J (Conservée !)`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const ec = Math.round(0.5 * m4Mass * m4Speed * m4Speed);
      const ec2 = ec * 4;
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Masse m : {m4Mass} kg</label>
              <input type="range" min="2" max="20" value={m4Mass} onChange={(e) => setM4Mass(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-emerald-300 block mb-1">Vitesse v : {m4Speed} m/s</label>
              <input type="range" min="2" max="20" step="2" value={m4Speed} onChange={(e) => setM4Speed(Number(e.target.value))} className="w-full accent-emerald-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
              <rect x="30" y="34" width={Math.min(180, Math.max(20, m4Speed * 7))} height="18" rx="4" fill="#38bdf8" />
              <text x="30" y="25" className="text-[10px] font-bold fill-sky-300">À v = {m4Speed} m/s ➔ Ec = {ec} J</text>
              <rect x="30" y="74" width={Math.min(280, Math.max(40, m4Speed * 14))} height="18" rx="4" fill="#f43f5e" />
              <text x="30" y="67" className="text-[10px] font-bold fill-rose-300">À 2v = {m4Speed * 2} m/s ➔ Ec × 4 = {ec2} J !</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Ec = ½ × ${m4Mass} × ${m4Speed}² = ${ec} J | Si vitesse × 2 ➔ Ec × 4 = ${ec2} J`} showColumnOp={false} />
        </div>
      );
    }
    const rad = (m4PendAngle * Math.PI) / 180;
    const bx = 170 + Math.sin(rad) * 75;
    const by = 15 + Math.cos(rad) * 75;
    const epRatio = Math.round(((1 - Math.cos(rad)) / (1 - Math.cos((60 * Math.PI) / 180))) * 100);
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-amber-300 block mb-1">Écart du pendule θ : {m4PendAngle}° (0° = passage bas vitesse max)</label>
          <input type="range" min="-60" max="60" step="10" value={m4PendAngle} onChange={(e) => setM4PendAngle(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 115" className="w-full max-w-md h-auto">
            <line x1="120" y1="15" x2="220" y2="15" stroke="#94a3b8" strokeWidth="3" />
            <line x1="170" y1="15" x2={bx} y2={by} stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx={bx} cy={by} r="10" fill="#fbbf24" />
            <text x="170" y="108" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">
              {m4PendAngle === 0 ? 'Vitesse MAX · Ec = 100% · Ep = 0' : `Ep ≈ ${epRatio}% · Ec ≈ ${100 - epRatio}%`}
            </text>
          </svg>
        </div>
        <StandingMathRenderer expression={m4PendAngle === 0 ? 'Passage vertical (0°) : Ep = 0, Ec MAXIMALE !' : `À θ = ${m4PendAngle}° : Em = Ep + Ec constante !`} showColumnOp={false} />
      </div>
    );
  }

  // 5. CONDUCTEURS OHMIQUES
  if (chapterId === 'phys3-conducteurs-ohmiques') {
    if (experienceIndex === 0) {
      const u = Number((m5R * m5I).toFixed(1));
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Résistance R : {m5R} Ω</label>
              <input type="range" min="10" max="100" step="10" value={m5R} onChange={(e) => setM5R(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Intensité I : {m5I.toFixed(1)} A</label>
              <input type="range" min="0.1" max="1.0" step="0.1" value={m5I} onChange={(e) => setM5I(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 120" className="w-full max-w-md h-auto">
              <line x1="40" y1="95" x2="200" y2="95" stroke="#64748b" strokeWidth="2" />
              <line x1="40" y1="20" x2="40" y2="95" stroke="#64748b" strokeWidth="2" />
              <line x1="40" y1="95" x2="180" y2={Math.max(20, 95 - m5R * 0.7)} stroke="#fbbf24" strokeWidth="2.5" />
              <circle cx={40 + m5I * 140} cy={Math.max(20, 95 - (m5I * m5R * 0.7))} r="5" fill="#10b981" />
              <text x="260" y="55" textAnchor="middle" className="text-xs font-black fill-emerald-300">U = {u} V</text>
              <text x="260" y="75" textAnchor="middle" className="text-[10px] fill-slate-300">Droite passant par (0 ; 0)</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`U = R × I = ${m5R} × ${m5I.toFixed(1)} = ${u} V`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const req = m5Mode === 'serie' ? m5R1 + m5R2 : Number(((m5R1 * m5R2) / (m5R1 + m5R2)).toFixed(2));
      return (
        <div className="space-y-3">
          <div className="flex gap-2">
            <button type="button" onClick={() => setM5Mode('serie')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m5Mode === 'serie' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>En Série</button>
            <button type="button" onClick={() => setM5Mode('derivation')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m5Mode === 'derivation' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>En Dérivation</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">R₁ : {m5R1} Ω</label>
              <input type="range" min="10" max="120" step="10" value={m5R1} onChange={(e) => setM5R1(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">R₂ : {m5R2} Ω</label>
              <input type="range" min="10" max="120" step="10" value={m5R2} onChange={(e) => setM5R2(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 100" className="w-full max-w-md h-auto">
              {m5Mode === 'serie' ? (
                <>
                  <line x1="25" y1="50" x2="295" y2="50" stroke="#94a3b8" strokeWidth="2.5" />
                  <rect x="65" y="34" width="60" height="32" rx="4" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
                  <text x="95" y="54" textAnchor="middle" className="text-xs font-black fill-amber-300">{m5R1} Ω</text>
                  <rect x="195" y="34" width="60" height="32" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                  <text x="225" y="54" textAnchor="middle" className="text-xs font-black fill-sky-300">{m5R2} Ω</text>
                </>
              ) : (
                <>
                  <line x1="35" y1="50" x2="85" y2="50" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="235" y1="50" x2="285" y2="50" stroke="#94a3b8" strokeWidth="2.5" />
                  <rect x="85" y="22" width="150" height="56" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <rect x="130" y="10" width="60" height="24" rx="4" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
                  <text x="160" y="26" textAnchor="middle" className="text-[11px] font-black fill-amber-300">{m5R1} Ω</text>
                  <rect x="130" y="66" width="60" height="24" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                  <text x="160" y="82" textAnchor="middle" className="text-[11px] font-black fill-sky-300">{m5R2} Ω</text>
                </>
              )}
            </svg>
          </div>
          <StandingMathRenderer
            expression={m5Mode === 'serie' ? `Req = ${m5R1} + ${m5R2} = ${req} Ω` : `Req = (${m5R1} × ${m5R2}) ÷ (${m5R1} + ${m5R2}) = ${req} Ω`}
            showColumnOp={false}
          />
        </div>
      );
    }
    const us = Number(((m5Ue * m5R2) / (m5R1 + m5R2)).toFixed(2));
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-emerald-300 block mb-1">Tension Ue : {m5Ue} V</label>
            <input type="range" min="6" max="24" step="3" value={m5Ue} onChange={(e) => setM5Ue(Number(e.target.value))} className="w-full accent-emerald-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-amber-300 block mb-1">R₁ : {m5R1} Ω</label>
            <input type="range" min="10" max="100" step="10" value={m5R1} onChange={(e) => setM5R1(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">R₂ (sortie) : {m5R2} Ω</label>
            <input type="range" min="10" max="100" step="10" value={m5R2} onChange={(e) => setM5R2(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
            <line x1="60" y1="20" x2="60" y2="95" stroke="#94a3b8" strokeWidth="2.5" />
            <rect x="42" y="25" width="36" height="22" rx="4" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
            <text x="60" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">R₁</text>
            <rect x="42" y="60" width="36" height="22" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <text x="60" y="75" textAnchor="middle" className="text-[10px] font-black fill-sky-300">R₂</text>
            <line x1="78" y1="53" x2="185" y2="53" stroke="#10b981" strokeWidth="2" />
            <line x1="78" y1="90" x2="185" y2="90" stroke="#10b981" strokeWidth="2" />
            <circle cx="200" cy="71" r="18" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
            <text x="200" y="75" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">{us}V</text>
            <text x="275" y="74" textAnchor="middle" className="text-xs font-black fill-white">Us = {us} V</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`Us = Ue × R₂ ÷ (R₁ + R₂) = ${m5Ue} × ${m5R2} ÷ ${m5R1 + m5R2} = ${us} V`} showColumnOp={false} />
      </div>
    );
  }

  // 6. ÉNERGIE & PUISSANCE SEEG
  if (chapterId === 'phys3-energie-puissance-seeg') {
    if (experienceIndex === 0) {
      const pJ = m6R * m6I * m6I;
      const heatGlow = Math.min(1, pJ / 1500);
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Résistance R : {m6R} Ω</label>
              <input type="range" min="10" max="100" step="10" value={m6R} onChange={(e) => setM6R(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-rose-300 block mb-1">Intensité I : {m6I} A</label>
              <input type="range" min="1" max="8" value={m6I} onChange={(e) => setM6I(Number(e.target.value))} className="w-full accent-rose-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
              <rect x="60" y="25" width="90" height="65" rx="8" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
              <polyline points="80,55 92,40 104,70 116,40 128,70 135,55" fill="none" stroke={`rgba(244,63,94,${0.35 + heatGlow * 0.65})`} strokeWidth="4" />
              <text x="245" y="52" textAnchor="middle" className="text-xs font-black fill-rose-300">Pj = {pJ} W</text>
              <text x="245" y="74" textAnchor="middle" className="text-[11px] font-mono fill-amber-300">P ∝ I² (Chaleur rapide)</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`P(Joule) = R × I² = ${m6R} × ${m6I}² = ${pJ} W`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const kwh = Number(((m6Watts / 1000) * m6Hours).toFixed(2));
      const cout = Math.round(kwh * 110);
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Puissance appareil : {m6Watts} W</label>
              <input type="range" min="200" max="3000" step="200" value={m6Watts} onChange={(e) => setM6Watts(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-emerald-300 block mb-1">Durée d’usage : {m6Hours} h</label>
              <input type="range" min="1" max="12" value={m6Hours} onChange={(e) => setM6Hours(Number(e.target.value))} className="w-full accent-emerald-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
              <rect x="45" y="18" width="125" height="74" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="2.5" />
              <rect x="65" y="30" width="85" height="22" rx="4" fill="#020617" stroke="#334155" />
              <text x="107" y="45" textAnchor="middle" className="text-xs font-mono font-black fill-emerald-300">{kwh} kWh</text>
              <text x="107" y="75" textAnchor="middle" className="text-[10px] font-bold fill-slate-400">COMPTEUR SEEG</text>
              <text x="255" y="50" textAnchor="middle" className="text-xs font-black fill-amber-300">{cout.toLocaleString('fr-FR')} F CFA</text>
              <text x="255" y="70" textAnchor="middle" className="text-[10px] fill-slate-300">Tarif 110 F / kWh</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`E = ${(m6Watts / 1000).toFixed(2)} kW × ${m6Hours} h = ${kwh} kWh | Coût SEEG = ${cout} F CFA`} showColumnOp={false} />
        </div>
      );
    }
    const maxA = 16;
    const tripped = m6CircuitI > maxA;
    const pTot = m6CircuitI * 220;
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-amber-300 block mb-1">Courant total demandé : {m6CircuitI} A (Fusible 16 A · P = {pTot} W)</label>
          <input type="range" min="4" max="24" step="2" value={m6CircuitI} onChange={(e) => setM6CircuitI(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
            <rect x="60" y="25" width="75" height="55" rx="8" fill={tripped ? '#7f1d1d' : '#064e3b'} stroke={tripped ? '#f43f5e' : '#10b981'} strokeWidth="2.5" />
            <text x="97" y="56" textAnchor="middle" className="text-xs font-black fill-white">{tripped ? 'DISJONCTE !' : 'ACTIF 220V'}</text>
            <text x="240" y="48" textAnchor="middle" className={`text-xs font-black ${tripped ? 'fill-rose-300' : 'fill-emerald-300'}`}>
              I = {m6CircuitI} A {tripped ? '> 16 A' : '≤ 16 A'}
            </text>
            <text x="240" y="68" textAnchor="middle" className="text-[11px] font-mono fill-amber-300">P = 220 × {m6CircuitI} = {pTot} W</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`P_max(16 A) = 220 × 16 = 3 520 W | Actuel : ${pTot} W (${tripped ? 'DÉPASSEMENT ➔ COUPURE' : 'OK'})`} showColumnOp={false} />
      </div>
    );
  }

  // 7. TRANSFORMATEUR & ÉLECTRONIQUE
  if (chapterId === 'phys3-transformateur-electronique') {
    if (experienceIndex === 0) {
      const us = Number(((220 * m7Ns) / m7Np).toFixed(1));
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Spires primaire Np : {m7Np}</label>
              <input type="range" min="500" max="4000" step="500" value={m7Np} onChange={(e) => setM7Np(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-emerald-300 block mb-1">Spires secondaire Ns : {m7Ns}</label>
              <input type="range" min="100" max="1000" step="100" value={m7Ns} onChange={(e) => setM7Ns(Number(e.target.value))} className="w-full accent-emerald-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
              <rect x="115" y="20" width="90" height="70" rx="6" fill="none" stroke="#94a3b8" strokeWidth="8" />
              <line x1="95" y1="30" x2="125" y2="30" stroke="#38bdf8" strokeWidth="3" />
              <line x1="95" y1="55" x2="125" y2="55" stroke="#38bdf8" strokeWidth="3" />
              <line x1="95" y1="80" x2="125" y2="80" stroke="#38bdf8" strokeWidth="3" />
              <line x1="195" y1="40" x2="225" y2="40" stroke="#10b981" strokeWidth="3" />
              <line x1="195" y1="70" x2="225" y2="70" stroke="#10b981" strokeWidth="3" />
              <text x="52" y="58" textAnchor="middle" className="text-[11px] font-black fill-sky-300">220 V</text>
              <text x="278" y="58" textAnchor="middle" className="text-xs font-black fill-emerald-300">Us = {us} V</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Us = Up × (Ns ÷ Np) = 220 × (${m7Ns} ÷ ${m7Np}) = ${us} V`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const direct = m7DiodeDir === 'direct';
      return (
        <div className="space-y-3">
          <div className="flex gap-2">
            <button type="button" onClick={() => setM7DiodeDir('direct')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${direct ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Sens direct (A ➔ K)</button>
            <button type="button" onClick={() => setM7DiodeDir('inverse')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${!direct ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}>Sens inverse (K ➔ A)</button>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
              <line x1="35" y1="52" x2="120" y2="52" stroke="#94a3b8" strokeWidth="2.5" />
              {direct ? (
                <>
                  <polygon points="120,34 160,52 120,70" fill="#10b981" />
                  <line x1="160" y1="34" x2="160" y2="70" stroke="#fff" strokeWidth="3" />
                </>
              ) : (
                <>
                  <line x1="120" y1="34" x2="120" y2="70" stroke="#fff" strokeWidth="3" />
                  <polygon points="160,34 120,52 160,70" fill="#f43f5e" />
                </>
              )}
              <line x1="160" y1="52" x2="245" y2="52" stroke="#94a3b8" strokeWidth="2.5" />
              <circle cx="275" cy="52" r="16" fill={direct ? '#fbbf24' : '#0f172a'} stroke="#fbbf24" strokeWidth="2.5" />
              <text x="275" y="88" textAnchor="middle" className={`text-[10px] font-black ${direct ? 'fill-emerald-300' : 'fill-rose-300'}`}>
                {direct ? 'DEL ALLUMÉE' : 'DEL ÉTEINTE'}
              </text>
            </svg>
          </div>
          <StandingMathRenderer expression={direct ? 'Diode PASSANTE (Anode + vers Cathode −) : le courant circule !' : 'Diode BLOQUÉE (sens inverse) : I = 0 A !'} showColumnOp={false} />
        </div>
      );
    }
    const ic = m7Ib * 100;
    const on = m7Ib > 0;
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-amber-300 block mb-1">Courant de base Ib : {m7Ib} mA (Gain β = 100 ➔ Ic = {ic} mA)</label>
          <input type="range" min="0" max="5" step="1" value={m7Ib} onChange={(e) => setM7Ib(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
            <circle cx="150" cy="52" r="24" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <line x1="70" y1="52" x2="140" y2="52" stroke="#fbbf24" strokeWidth="2.5" />
            <line x1="140" y1="36" x2="140" y2="68" stroke="#fff" strokeWidth="3" />
            <line x1="140" y1="45" x2="185" y2="20" stroke={on ? '#10b981' : '#475569'} strokeWidth="2.5" />
            <line x1="140" y1="60" x2="185" y2="85" stroke={on ? '#10b981' : '#475569'} strokeWidth="2.5" />
            <text x="55" y="45" className="text-[10px] font-black fill-amber-300">B (Ib={m7Ib}mA)</text>
            <text x="260" y="55" textAnchor="middle" className={`text-xs font-black ${on ? 'fill-emerald-300' : 'fill-rose-300'}`}>
              {on ? `PASSANT · Ic = ${ic} mA` : 'BLOQUÉ (Ib = 0)'}
            </text>
          </svg>
        </div>
        <StandingMathRenderer expression={`Transistor NPN : Ic = β × Ib = 100 × ${m7Ib} mA = ${ic} mA (${on ? 'Lampe allumée' : 'Coupé'})`} showColumnOp={false} />
      </div>
    );
  }

  // 8. LENTILLES & CONSTRUCTION
  if (chapterId === 'phys3-lentilles-construction') {
    if (experienceIndex === 0) {
      const oaPrime = m8OA > m8F ? Number(((m8OA * m8F) / (m8OA - m8F)).toFixed(1)) : null;
      const objX = Math.max(30, 170 - m8OA * 2.4);
      const imgX = oaPrime ? Math.min(315, 170 + oaPrime * 2.4) : 250;
      const imgH = oaPrime ? Math.min(48, 28 * (oaPrime / m8OA)) : 40;
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Focale f : {m8F} cm</label>
              <input type="range" min="8" max="20" step="2" value={m8F} onChange={(e) => setM8F(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Objet OA : {m8OA} cm</label>
              <input type="range" min="14" max="48" step="2" value={m8OA} onChange={(e) => setM8OA(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 120" className="w-full max-w-md h-auto">
              <line x1="15" y1="60" x2="325" y2="60" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="170" y1="10" x2="170" y2="110" stroke="#38bdf8" strokeWidth="3.5" />
              <line x1={objX} y1="60" x2={objX} y2="32" stroke="#fbbf24" strokeWidth="3" />
              <circle cx={170 + m8F * 2.4} cy="60" r="3" fill="#f43f5e" />
              <text x={170 + m8F * 2.4} y="73" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">F’</text>
              {oaPrime && (
                <>
                  <line x1={objX} y1="32" x2="170" y2="32" stroke="#f59e0b" strokeWidth="1.5" />
                  <line x1="170" y1="32" x2={imgX} y2={60 + imgH} stroke="#f59e0b" strokeWidth="1.5" />
                  <line x1={objX} y1="32" x2={imgX} y2={60 + imgH} stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1={imgX} y1="60" x2={imgX} y2={60 + imgH} stroke="#10b981" strokeWidth="3" />
                </>
              )}
            </svg>
          </div>
          <StandingMathRenderer expression={oaPrime ? `Rayon // axe ➔ F’ | Rayon par O ➔ non dévié | Image à OA’ = ${oaPrime} cm` : `OA ≤ f : faisceau divergent ➔ image virtuelle`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const c = Number((100 / m8F).toFixed(1));
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">Distance focale f : {m8F} cm ({(m8F / 100).toFixed(2)} m) ➔ Vergence C = {c} δ</label>
            <input type="range" min="5" max="25" step="5" value={m8F} onChange={(e) => setM8F(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
              <line x1="20" y1="55" x2="320" y2="55" stroke="#475569" strokeWidth="1.5" />
              <line x1="130" y1="15" x2="130" y2="95" stroke="#38bdf8" strokeWidth="4" />
              <line x1="30" y1="30" x2="130" y2="30" stroke="#fbbf24" strokeWidth="2" />
              <line x1="30" y1="80" x2="130" y2="80" stroke="#fbbf24" strokeWidth="2" />
              <line x1="130" y1="30" x2={130 + m8F * 5} y2="55" stroke="#fbbf24" strokeWidth="2" />
              <line x1="130" y1="80" x2={130 + m8F * 5} y2="55" stroke="#fbbf24" strokeWidth="2" />
              <circle cx={130 + m8F * 5} cy="55" r="4" fill="#f43f5e" />
              <text x={130 + m8F * 5} y="73" textAnchor="middle" className="text-[11px] font-black fill-rose-300">F’ ({m8F} cm)</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`C = 1 ÷ f(m) = 1 ÷ ${(m8F / 100).toFixed(2)} = ${c} δ (dioptries)`} showColumnOp={false} />
        </div>
      );
    }
    const oaPrime = m8OA > m8F ? Number(((m8OA * m8F) / (m8OA - m8F)).toFixed(1)) : null;
    const gamma = oaPrime ? Number((oaPrime / m8OA).toFixed(2)) : null;
    const aPrimeBPrime = gamma ? Number((m8AB * gamma).toFixed(2)) : null;
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-amber-300 block mb-1">Taille objet AB : {m8AB} cm</label>
            <input type="range" min="1" max="6" value={m8AB} onChange={(e) => setM8AB(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Distance objet OA : {m8OA} cm (f = {m8F} cm)</label>
            <input type="range" min="6" max="45" step="3" value={m8OA} onChange={(e) => setM8OA(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 100" className="w-full max-w-md h-auto">
            <rect x="45" y={80 - m8AB * 8} width="26" height={m8AB * 8} fill="#fbbf24" rx="3" />
            <text x="58" y="94" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">AB={m8AB}cm</text>
            <text x="150" y="54" textAnchor="middle" className="text-xs font-black fill-sky-300">➔ γ = {gamma || 'Loupe'} ➔</text>
            {aPrimeBPrime ? (
              <>
                <rect x="235" y={80 - Math.min(70, aPrimeBPrime * 8)} width="26" height={Math.min(70, aPrimeBPrime * 8)} fill="#10b981" rx="3" />
                <text x="248" y="94" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">A’B’={aPrimeBPrime}cm</text>
              </>
            ) : (
              <text x="255" y="54" textAnchor="middle" className="text-xs font-black fill-purple-300">Image virtuelle agrandie</text>
            )}
          </svg>
        </div>
        <StandingMathRenderer expression={gamma ? `γ = OA’ ÷ OA = ${gamma} | Taille A’B’ = ${m8AB} × ${gamma} = ${aPrimeBPrime} cm` : `Mode Loupe : OA ≤ f`} showColumnOp={false} />
      </div>
    );
  }

  // 9. ŒIL & INSTRUMENTS
  if (chapterId === 'phys3-oeil-instruments') {
    if (experienceIndex === 0) {
      const focusX = m9Eye === 'normal' || m9Corrected ? 190 : m9Eye === 'myope' ? 160 : 225;
      return (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {(['normal', 'myope', 'hypermetrope'] as const).map((t) => (
              <button key={t} type="button" onClick={() => setM9Eye(t)} className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize cursor-pointer ${m9Eye === t ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                Œil {t}
              </button>
            ))}
            {m9Eye !== 'normal' && (
              <button type="button" onClick={() => setM9Corrected(!m9Corrected)} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m9Corrected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                Lunettes : {m9Corrected ? 'OUI' : 'NON'}
              </button>
            )}
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
              <ellipse cx="150" cy="55" rx="46" ry="38" fill="#0f172a" stroke="#94a3b8" strokeWidth="2.5" />
              <line x1="108" y1="30" x2="108" y2="80" stroke="#38bdf8" strokeWidth="3.5" />
              <line x1="40" y1="38" x2="108" y2="38" stroke="#fbbf24" strokeWidth="2" />
              <line x1="40" y1="72" x2="108" y2="72" stroke="#fbbf24" strokeWidth="2" />
              <line x1="108" y1="38" x2={focusX} y2="55" stroke="#fbbf24" strokeWidth="2" />
              <line x1="108" y1="72" x2={focusX} y2="55" stroke="#fbbf24" strokeWidth="2" />
              <circle cx={focusX} cy="55" r="4" fill={focusX === 190 ? '#10b981' : '#f43f5e'} />
              <text x="265" y="58" textAnchor="middle" className="text-xs font-black fill-emerald-300">
                {focusX === 190 ? 'NET SUR RÉTINE' : m9Eye === 'myope' ? 'AVANT RÉTINE' : 'DERRIÈRE RÉTINE'}
              </text>
            </svg>
          </div>
          <StandingMathRenderer
            expression={
              m9Eye === 'normal'
                ? 'Œil emmétrope : l’image se forme pile sur la rétine.'
                : m9Eye === 'myope'
                ? `Myopie (trop convergent) : correction par lentille DIVERGENTE (−)`
                : `Hypermétropie (pas assez convergent) : correction par lentille CONVERGENTE (+)`
            }
            showColumnOp={false}
          />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const g = Number((m9Vergence / 4).toFixed(1));
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">Vergence de la loupe C : {m9Vergence} δ ➔ Grossissement G = ×{g}</label>
            <input type="range" min="8" max="40" step="4" value={m9Vergence} onChange={(e) => setM9Vergence(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
              <text x="70" y="60" textAnchor="middle" className="text-sm font-black fill-amber-300">A</text>
              <circle cx="165" cy="52" r="32" fill="#38bdf8" fillOpacity="0.18" stroke="#38bdf8" strokeWidth="3" />
              <text x="165" y={52 + g * 2.5} textAnchor="middle" style={{ fontSize: `${12 + g * 2}px` }} className="font-black fill-emerald-300">A</text>
              <text x="270" y="55" textAnchor="middle" className="text-xs font-black fill-white">Grossissement ×{g}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`G = C ÷ 4 = ${m9Vergence} ÷ 4 = ×${g} (image virtuelle, droite, agrandie)`} showColumnOp={false} />
        </div>
      );
    }
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-sky-300 block mb-1">Ouverture Iris / Diaphragme : {m9Aperture}%</label>
          <input type="range" min="20" max="100" step="10" value={m9Aperture} onChange={(e) => setM9Aperture(Number(e.target.value))} className="w-full accent-sky-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
            <circle cx="110" cy="52" r="34" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="110" cy="52" r={m9Aperture * 0.22} fill="#fbbf24" fillOpacity="0.85" />
            <text x="235" y="42" textAnchor="middle" className="text-xs font-black fill-amber-300">Iris ⟷ Diaphragme</text>
            <text x="235" y="62" textAnchor="middle" className="text-xs font-black fill-sky-300">Cristallin ⟷ Objectif</text>
            <text x="235" y="82" textAnchor="middle" className="text-xs font-black fill-emerald-300">Rétine ⟷ Capteur</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`Ouverture ${m9Aperture}% : règle la quantité de lumière entrant dans l’œil / appareil.`} showColumnOp={false} />
      </div>
    );
  }

  // 10. MÉTAUX & OXYDATION
  if (chapterId === 'phys3-metaux-oxydation') {
    if (experienceIndex === 0) {
      return (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setM10Metal('fe')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m10Metal === 'fe' ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}>Fer (Fe)</button>
            <button type="button" onClick={() => setM10Metal('al')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m10Metal === 'al' ? 'bg-slate-300 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Aluminium (Al)</button>
            <button type="button" onClick={() => setM10Metal('cu')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m10Metal === 'cu' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Cuivre (Cu)</button>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
              <rect x="45" y="38" width="120" height="36" rx="4" fill={m10Metal === 'fe' ? '#64748b' : m10Metal === 'al' ? '#cbd5e1' : '#d97706'} />
              <rect x="45" y="28" width="120" height="10" rx="2" fill={m10Metal === 'fe' ? '#b91c1c' : m10Metal === 'al' ? '#f8fafc' : '#1e293b'} />
              <text x="250" y="48" textAnchor="middle" className="text-xs font-black fill-amber-300">
                {m10Metal === 'fe' ? 'Rouille poreuse Fe₂O₃' : m10Metal === 'al' ? 'Alumine étanche Al₂O₃' : 'Oxyde noir CuO'}
              </text>
              <text x="250" y="68" textAnchor="middle" className="text-[10px] fill-slate-300">
                {m10Metal === 'fe' ? 'Corrosion continue en profondeur' : 'Couche protectrice'}
              </text>
            </svg>
          </div>
          <StandingMathRenderer
            expression={
              m10Metal === 'fe'
                ? '4 Fe + 3 O₂ ➔ 2 Fe₂O₃ (rouille poreuse, il faut peindre/galvaniser le fer)'
                : m10Metal === 'al'
                ? '4 Al + 3 O₂ ➔ 2 Al₂O₃ (alumine étanche : protège les tôles !)'
                : '2 Cu + O₂ ➔ 2 CuO (noircissement à chaud)'
            }
            showColumnOp={false}
          />
        </div>
      );
    }
    if (experienceIndex === 1) {
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">Pureté en dioxygène O₂ : {m10O2Pct}%</label>
            <input type="range" min="20" max="100" step="20" value={m10O2Pct} onChange={(e) => setM10O2Pct(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
              <rect x="65" y="16" width="80" height="74" rx="8" fill="#0284c7" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="105" cy="54" r={8 + m10O2Pct * 0.16} fill="#fbbf24" fillOpacity="0.8" />
              <text x="245" y="50" textAnchor="middle" className="text-xs font-black fill-amber-300">3 Fe + 2 O₂ ➔ Fe₃O₄</text>
              <text x="245" y="70" textAnchor="middle" className="text-[10px] fill-emerald-300">Étincelles · Oxyde magnétique</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Combustion vive du fer dans O₂ (${m10O2Pct}%) : forme Fe₃O₄ (attiré par l’aimant).`} showColumnOp={false} />
        </div>
      );
    }
    const info =
      m10Sample === 'fe'
        ? { rho: '7,8 g/cm³', mag: 'OUI (Aimanté)', col: 'Gris' }
        : m10Sample === 'al'
        ? { rho: '2,7 g/cm³ (Léger !)', mag: 'NON', col: 'Gris clair' }
        : m10Sample === 'cu'
        ? { rho: '8,9 g/cm³', mag: 'NON', col: 'Rouge-orangé' }
        : { rho: '7,1 g/cm³', mag: 'NON', col: 'Gris bleuté' };
    return (
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {(['fe', 'al', 'cu', 'zn'] as const).map((k) => (
            <button key={k} type="button" onClick={() => setM10Sample(k)} className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase cursor-pointer ${m10Sample === k ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>{k}</button>
          ))}
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 95" className="w-full max-w-md h-auto">
            <rect x="55" y="28" width="75" height="36" rx="6" fill={m10Sample === 'cu' ? '#d97706' : '#94a3b8'} />
            <text x="235" y="40" textAnchor="middle" className="text-xs font-black fill-sky-300">Densité : {info.rho}</text>
            <text x="235" y="60" textAnchor="middle" className="text-xs font-black fill-amber-300">Aimant : {info.mag}</text>
            <text x="235" y="80" textAnchor="middle" className="text-[10px] fill-slate-300">Couleur : {info.col}</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`Métal ${m10Sample.toUpperCase()} : ρ = ${info.rho} | Aimanté : ${info.mag} | Conducteur électrique`} showColumnOp={false} />
      </div>
    );
  }

  // 11. IONS & TESTS
  if (chapterId === 'phys3-ions-tests') {
    if (experienceIndex === 0) {
      const desc =
        m11Atom === 'na'
          ? 'Na (11 e⁻) perd 1 e⁻ ➔ Ion sodium Na⁺ (Cation +)'
          : m11Atom === 'cl'
          ? 'Cl (17 e⁻) gagne 1 e⁻ ➔ Ion chlorure Cl⁻ (Anion −)'
          : m11Atom === 'fe'
          ? 'Fe perd 2 ou 3 e⁻ ➔ Fe²⁺ ou Fe³⁺'
          : 'Cu perd 2 e⁻ ➔ Ion cuivre II Cu²⁺ (bleu)';
      return (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {(['na', 'cl', 'fe', 'cu'] as const).map((k) => (
              <button key={k} type="button" onClick={() => setM11Atom(k)} className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase cursor-pointer ${m11Atom === k ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-300'}`}>{k}</button>
            ))}
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 95" className="w-full max-w-md h-auto">
              <circle cx="80" cy="48" r="24" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="80" cy="48" r="9" fill="#fbbf24" />
              <text x="150" y="52" className="text-sm font-black fill-emerald-300">➔</text>
              <circle cx="220" cy="48" r="24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="3 2" />
              <circle cx="220" cy="48" r="9" fill="#a855f7" />
              <text x="290" y="52" textAnchor="middle" className="text-xs font-black fill-white">{m11Atom === 'cl' ? 'Cl⁻' : m11Atom === 'na' ? 'Na⁺' : m11Atom === 'fe' ? 'Fe²⁺' : 'Cu²⁺'}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={desc} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const info =
        m11Ion === 'cu2'
          ? { color: '#38bdf8', res: 'Cu²⁺ + 2 OH⁻ ➔ Cu(OH)₂ ↓ (Précipité BLEU avec NaOH)' }
          : m11Ion === 'fe2'
          ? { color: '#22c55e', res: 'Fe²⁺ + 2 OH⁻ ➔ Fe(OH)₂ ↓ (Précipité VERT avec NaOH)' }
          : m11Ion === 'fe3'
          ? { color: '#ea580c', res: 'Fe³⁺ + 3 OH⁻ ➔ Fe(OH)₃ ↓ (Précipité ROUILLE avec NaOH)' }
          : m11Ion === 'zn2'
          ? { color: '#e2e8f0', res: 'Zn²⁺ + 2 OH⁻ ➔ Zn(OH)₂ ↓ (Précipité BLANC soluble dans un excès)' }
          : { color: '#f8fafc', res: 'Cl⁻ + Ag⁺ ➔ AgCl ↓ (Précipité BLANC qui noircit à la lumière)' };
      return (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {[
              { k: 'cu2', l: 'Cu²⁺' },
              { k: 'fe2', l: 'Fe²⁺' },
              { k: 'fe3', l: 'Fe³⁺' },
              { k: 'zn2', l: 'Zn²⁺' },
              { k: 'cl', l: 'Cl⁻' },
            ].map((b) => (
              <button key={b.k} type="button" onClick={() => setM11Ion(b.k as typeof m11Ion)} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m11Ion === b.k ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-300'}`}>{b.l}</button>
            ))}
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 280 95" className="w-64 h-auto">
              <rect x="120" y="10" width="40" height="75" rx="14" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
              <ellipse cx="140" cy="68" rx="14" ry="11" fill={info.color} />
            </svg>
          </div>
          <StandingMathRenderer expression={info.res} showColumnOp={false} />
        </div>
      );
    }
    return (
      <div className="space-y-3">
        <button type="button" onClick={() => setM11VoltageOn(!m11VoltageOn)} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m11VoltageOn ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
          Générateur : {m11VoltageOn ? 'ALLUMÉ (Migration)' : 'ÉTEINT'}
        </button>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
            <path d="M 85 20 L 85 75 Q 85 95 170 95 Q 255 95 255 75 L 255 20" fill="none" stroke="#94a3b8" strokeWidth="14" />
            <text x="85" y="14" textAnchor="middle" className="text-xs font-black fill-sky-300">Cathode (−)</text>
            <text x="255" y="14" textAnchor="middle" className="text-xs font-black fill-rose-300">Anode (+)</text>
            <circle cx={m11VoltageOn ? 115 : 170} cy="85" r="7" fill="#38bdf8" />
            <circle cx={m11VoltageOn ? 225 : 170} cy="85" r="7" fill="#a855f7" />
          </svg>
        </div>
        <StandingMathRenderer expression={m11VoltageOn ? 'Cations Cu²⁺ (+) migrent vers la cathode (−) | Anions MnO₄⁻ (−) vers l’anode (+)' : 'Hors tension : pas de migration orientée.'} showColumnOp={false} />
      </div>
    );
  }

  // 12. ACIDES / BASES & pH
  if (chapterId === 'phys3-acides-bases-ph') {
    if (experienceIndex === 0) {
      const col = m12Ph < 5 ? '#ef4444' : m12Ph < 7 ? '#f59e0b' : m12Ph === 7 ? '#10b981' : '#6366f1';
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">pH mesuré : {m12Ph}</label>
            <input type="range" min="1" max="14" value={m12Ph} onChange={(e) => setM12Ph(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 85" className="w-full max-w-md h-auto">
              <rect x="30" y="20" width="280" height="20" rx="6" fill={col} fillOpacity="0.4" stroke={col} strokeWidth="2" />
              <circle cx={30 + (m12Ph / 14) * 280} cy="30" r="8" fill="#fff" />
              <text x="170" y="65" textAnchor="middle" className="text-xs font-black fill-white">
                {m12Ph < 7 ? 'ACIDE (Majorité ions H⁺)' : m12Ph === 7 ? 'NEUTRE ([H⁺] = [OH⁻])' : 'BASIQUE (Majorité ions OH⁻)'}
              </text>
            </svg>
          </div>
          <StandingMathRenderer expression={`pH = ${m12Ph} ➔ Solution ${m12Ph < 7 ? 'ACIDE' : m12Ph === 7 ? 'NEUTRE' : 'BASIQUE'}`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const steps = m12DilFactor === 1 ? 0 : m12DilFactor === 10 ? 1 : 2;
      const newPh = m12DilType === 'acide' ? Math.min(7, 2 + steps) : Math.max(7, 12 - steps);
      return (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setM12DilType('acide')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m12DilType === 'acide' ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}>Diluer Acide (pH = 2)</button>
            <button type="button" onClick={() => setM12DilType('base')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m12DilType === 'base' ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-300'}`}>Diluer Base (pH = 12)</button>
            {([1, 10, 100] as const).map((f) => (
              <button key={f} type="button" onClick={() => setM12DilFactor(f)} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m12DilFactor === f ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>×{f}</button>
            ))}
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 90" className="w-full max-w-md h-auto">
              <line x1="30" y1="45" x2="310" y2="45" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" />
              <text x="170" y="37" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">pH = 7 (jamais dépassé !)</text>
              <circle cx={30 + (newPh / 14) * 280} cy="45" r="9" fill="#fbbf24" />
              <text x={30 + (newPh / 14) * 280} y="74" textAnchor="middle" className="text-xs font-black fill-amber-300">pH = {newPh}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Dilution par ${m12DilFactor} : le pH se rapproche de 7 sans jamais le franchir (pH = ${newPh}).`} showColumnOp={false} />
        </div>
      );
    }
    const vb = Number(((m12Ca * m12Va) / 0.1).toFixed(1));
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Ca acide : {m12Ca} mol/L</label>
            <input type="range" min="0.1" max="0.5" step="0.1" value={m12Ca} onChange={(e) => setM12Ca(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-emerald-300 block mb-1">Va acide : {m12Va} mL</label>
            <input type="range" min="10" max="40" step="5" value={m12Va} onChange={(e) => setM12Va(Number(e.target.value))} className="w-full accent-emerald-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 100" className="w-full max-w-md h-auto">
            <rect x="85" y="10" width="16" height="40" fill="#38bdf8" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <polygon points="75,60 111,60 123,90 63,90" fill="#10b981" fillOpacity="0.45" stroke="#10b981" strokeWidth="2" />
            <text x="230" y="48" textAnchor="middle" className="text-xs font-black fill-emerald-300">Équivalence : Vb = {vb} mL</text>
            <text x="230" y="68" textAnchor="middle" className="text-[10px] fill-amber-300">H⁺ + OH⁻ ➔ H₂O (BBT vert)</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`Ca·Va = Cb·Vb (Cb = 0,1 mol/L) ➔ Vb = (${m12Ca} × ${m12Va}) ÷ 0,1 = ${vb} mL`} showColumnOp={false} />
      </div>
    );
  }

  // 13. HYDROCARBURES & ALCOOLS (fallback)
  if (experienceIndex === 0) {
    const nomsAlc = ['Méthane', 'Éthane', 'Propane', 'Butane', 'Pentane', 'Hexane'];
    const hCount = m13Family === 'alcane' ? 2 * m13N + 2 : 2 * Math.max(2, m13N);
    const cCount = m13Family === 'alcane' ? m13N : Math.max(2, m13N);
    return (
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setM13Family('alcane')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m13Family === 'alcane' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Alcanes (CnH₂n+₂)</button>
          <button type="button" onClick={() => setM13Family('alcene')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m13Family === 'alcene' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Alcènes (CnH₂n)</button>
        </div>
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-amber-300 block mb-1">Carbones n = {cCount} ({m13Family === 'alcane' ? nomsAlc[cCount - 1] : `Alcène C${cCount}H${hCount}`})</label>
          <input type="range" min="1" max="6" value={m13N} onChange={(e) => setM13N(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 90" className="w-full max-w-md h-auto">
            {Array.from({ length: cCount }, (_, i) => (
              <g key={i}>
                {i > 0 && <line x1={55 + (i - 1) * 42} y1="45" x2={55 + i * 42} y2="45" stroke="#94a3b8" strokeWidth={i === 1 && m13Family === 'alcene' ? 6 : 3} />}
                <circle cx={55 + i * 42} cy="45" r="12" fill="#334155" stroke="#fbbf24" strokeWidth="2" />
                <text x={55 + i * 42} y="49" textAnchor="middle" className="text-[10px] font-black fill-white">C</text>
              </g>
            ))}
          </svg>
        </div>
        <StandingMathRenderer expression={`Formule brute : C${cCount === 1 ? '' : cCount}H${hCount} (${m13Family === 'alcane' ? 'liaisons simples' : 'une double liaison C=C'})`} showColumnOp={false} />
      </div>
    );
  }
  if (experienceIndex === 1) {
    const complete = m13Virole === 'ouverte';
    return (
      <div className="space-y-3">
        <div className="flex gap-2">
          <button type="button" onClick={() => setM13Virole('ouverte')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${complete ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Virole ouverte (Flamme bleue)</button>
          <button type="button" onClick={() => setM13Virole('fermee')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${!complete ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Virole fermée (Flamme jaune)</button>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
            <rect x="95" y="65" width="22" height="32" fill="#64748b" rx="3" />
            <path d="M 106 16 Q 124 45 106 65 Q 88 45 106 16" fill={complete ? '#38bdf8' : '#f59e0b'} />
            <text x="235" y="48" textAnchor="middle" className={`text-xs font-black ${complete ? 'fill-sky-300' : 'fill-amber-300'}`}>
              {complete ? 'COMPLÈTE (CO₂ + H₂O)' : 'INCOMPLÈTE (C + CO mortel)'}
            </text>
          </svg>
        </div>
        <StandingMathRenderer expression={complete ? 'Excès de O₂ : flamme bleue très chaude ➔ CO₂ + H₂O' : 'Manque de O₂ : dépôt de carbone noir C + monoxyde de carbone CO !'} showColumnOp={false} />
      </div>
    );
  }
  const cuts: Record<typeof m13Cut, { label: string; temp: string; use: string }> = {
    gaz: { label: 'Gaz (Butane / Propane)', temp: '< 40 °C', use: 'Cuisine & bouteilles' },
    essence: { label: 'Essence (C₅–C₁₀)', temp: '40 – 180 °C', use: 'Voitures Libreville' },
    kerosene: { label: 'Kérosène / Pétrole lampant', temp: '180 – 250 °C', use: 'Avions & lampes' },
    gasoil: { label: 'Gasoil / Diesel', temp: '250 – 350 °C', use: 'Camions & grumiers' },
    bitume: { label: 'Résidus / Bitume', temp: '> 350 °C', use: 'Routes du Gabon' },
  };
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {(['gaz', 'essence', 'kerosene', 'gasoil', 'bitume'] as const).map((k) => (
          <button key={k} type="button" onClick={() => setM13Cut(k)} className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize cursor-pointer ${m13Cut === k ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>{k}</button>
        ))}
      </div>
      <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
        <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
          <rect x="65" y="10" width="46" height="86" rx="8" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <text x="235" y="42" textAnchor="middle" className="text-xs font-black fill-amber-300">{cuts[m13Cut].label}</text>
          <text x="235" y="62" textAnchor="middle" className="text-[11px] font-mono fill-sky-300">Température : {cuts[m13Cut].temp}</text>
          <text x="235" y="80" textAnchor="middle" className="text-[10px] fill-emerald-300">Usage : {cuts[m13Cut].use}</text>
        </svg>
      </div>
      <StandingMathRenderer expression={`Raffinage SOGARA : ${cuts[m13Cut].label} recueilli à ${cuts[m13Cut].temp} ➔ ${cuts[m13Cut].use}`} showColumnOp={false} />
    </div>
  );
};
