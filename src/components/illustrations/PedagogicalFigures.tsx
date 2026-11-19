import React from 'react';
import { Chapter, ChapterIllustrationKey, PhysicsIllustrationKey, SubjectId } from '../../types/math';
import { TerminaleCPhysicsDrawing } from './TerminaleCPhysicsDrawings';
import { TerminaleCMathDrawing } from './TerminaleCMathDrawings';
import { FormattedMathText, SvgMathTspans } from '../FormattedMathText';

interface DemonstrationMethodFigureProps {
  chapterId?: string;
  illustrationKey?: ChapterIllustrationKey;
  subject?: SubjectId;
  compact?: boolean;
  contextHint?: string;
}

type FigureTopic =
  | 'pythagore'
  | 'thales'
  | 'milieux'
  | 'trigo'
  | 'cercle'
  | 'equations'
  | 'inequations'
  | 'calcul-litteral'
  | 'identites'
  | 'fractions'
  | 'relatifs'
  | 'puissances'
  | 'racine'
  | 'premiers'
  | 'proportionnalite'
  | 'vitesse'
  | 'stats'
  | 'probas'
  | 'fonctions'
  | 'translations'
  | 'symetries'
  | 'homothetie'
  | 'rotation'
  | 'droites'
  | 'volumes'
  | 'reperage'
  | 'circuit-simple'
  | 'circuits-serie-derivation'
  | 'intensite'
  | 'tension'
  | 'loi-ohm'
  | 'puissance-seeg'
  | 'propagation-lumiere'
  | 'ombres-eclipses'
  | 'reflexion-refraction'
  | 'lentilles'
  | 'dispersion-couleurs'
  | 'masse-volumique'
  | 'forces-dynamometre'
  | 'poids-masse'
  | 'pression-archimede'
  | 'air-gaz'
  | 'atomes-molecules'
  | 'combustions'
  | 'equations-bilan'
  | 'solutions-ph'
  | 'equilibre-deux-forces'
  | 'travail-puissance-meca'
  | 'energie-mecanique'
  | 'association-resistors'
  | 'transformateur-diode'
  | 'oeil-instruments'
  | 'metaux-oxydation'
  | 'ions-tests'
  | 'acides-bases-neutralisation'
  | 'hydrocarbures-alcools'
  | 'systemes-equations'
  | 'vecteurs-chasles'
  | 'angles-polygones'
  | 'sections-solides';

function resolveFigureTopic(
  chapterId?: string,
  illustrationKey?: ChapterIllustrationKey,
  subject?: SubjectId
): FigureTopic {
  const key = `${chapterId || ''} ${illustrationKey || ''}`.toLowerCase();

  // Physics 3ème spécifiques (prioritaires avant les correspondances génériques 4ème)
  if (key.includes('equilibre-deux-forces') || key.includes('equilibre-solide')) return 'equilibre-deux-forces';
  if (key.includes('travail-puissance')) return 'travail-puissance-meca';
  if (key.includes('energie-mecanique')) return 'energie-mecanique';
  if (key.includes('association-resistors') || key.includes('conducteurs-ohmiques')) return 'association-resistors';
  if (key.includes('transformateur') || key.includes('diode')) return 'transformateur-diode';
  if (key.includes('oeil-instruments')) return 'oeil-instruments';
  if (key.includes('metaux-oxydation')) return 'metaux-oxydation';
  if (key.includes('ions-tests')) return 'ions-tests';
  if (key.includes('acides-bases')) return 'acides-bases-neutralisation';
  if (key.includes('hydrocarbures')) return 'hydrocarbures-alcools';

  // Maths 3ème spécifiques
  if (key.includes('systemes-equations')) return 'systemes-equations';
  if (key.includes('vecteurs-chasles') || key.includes('vecteurs-translations')) return 'vecteurs-chasles';
  if (key.includes('angles-polygones')) return 'angles-polygones';
  if (key.includes('sections-solides') || key.includes('sections-agrandissement')) return 'sections-solides';

  // Physics 4ème
  if (key.includes('circuit-simple')) return 'circuit-simple';
  if (key.includes('serie-derivation')) return 'circuits-serie-derivation';
  if (key.includes('intensite')) return 'intensite';
  if (key.includes('tension')) return 'tension';
  if (key.includes('loi-ohm') || key.includes('ohm')) return 'loi-ohm';
  if (key.includes('puissance-seeg') || key.includes('seeg')) return 'puissance-seeg';
  if (key.includes('propagation')) return 'propagation-lumiere';
  if (key.includes('ombres') || key.includes('eclipse')) return 'ombres-eclipses';
  if (key.includes('reflexion') || key.includes('refraction')) return 'reflexion-refraction';
  if (key.includes('lentille')) return 'lentilles';
  if (key.includes('dispersion') || key.includes('couleur')) return 'dispersion-couleurs';
  if (key.includes('masse-volumique')) return 'masse-volumique';
  if (key.includes('forces') || key.includes('dynamometre')) return 'forces-dynamometre';
  if (key.includes('poids-masse')) return 'poids-masse';
  if (key.includes('pression') || key.includes('archimede')) return 'pression-archimede';
  if (key.includes('air-gaz')) return 'air-gaz';
  if (key.includes('atomes') || key.includes('molecule')) return 'atomes-molecules';
  if (key.includes('combustion')) return 'combustions';
  if (key.includes('equations-bilan')) return 'equations-bilan';
  if (key.includes('solutions-ph')) return 'solutions-ph';

  // Maths 4ème
  if (key.includes('pythagore')) return 'pythagore';
  if (key.includes('thales')) return 'thales';
  if (key.includes('milieux') || key.includes('agrandissement')) return 'milieux';
  if (key.includes('trigo')) return 'trigo';
  if (key.includes('cercle')) return 'cercle';
  if (key.includes('inequation')) return 'inequations';
  if (key.includes('equation')) return 'equations';
  if (key.includes('identite') || key.includes('factorisation')) return 'identites';
  if (key.includes('calcul-litteral')) return 'calcul-litteral';
  if (key.includes('fraction')) return 'fractions';
  if (key.includes('relatif')) return 'relatifs';
  if (key.includes('puissance')) return 'puissances';
  if (key.includes('racine')) return 'racine';
  if (key.includes('premier')) return 'premiers';
  if (key.includes('proportionnalite')) return 'proportionnalite';
  if (key.includes('vitesse')) return 'vitesse';
  if (key.includes('statistique') || key.includes('quartile')) return 'stats';
  if (key.includes('probabilite')) return 'probas';
  if (key.includes('fonction')) return 'fonctions';
  if (key.includes('translation')) return 'translations';
  if (key.includes('symetrie')) return 'symetries';
  if (key.includes('homothetie')) return 'homothetie';
  if (key.includes('rotation')) return 'rotation';
  if (key.includes('droites-remarquables')) return 'droites';
  if (key.includes('espace-volumes') || key.includes('volume') || key.includes('pyramide') || key.includes('cone')) return 'volumes';
  if (key.includes('reperage')) return 'reperage';

  return subject === 'physique' ? 'loi-ohm' : 'pythagore';
}

function getTopicCaption(topic: FigureTopic): string {
  const captions: Record<FigureTopic, string> = {
    pythagore: 'Schéma de démonstration : Triangle rectangle en A → BC² = AB² + AC²',
    thales: 'Schéma de démonstration : (MN) // (BC) → AM/AB = AN/AC = MN/BC',
    milieux: 'Schéma de démonstration : I, J milieux → (IJ) // (BC) et IJ = BC ÷ 2',
    trigo: 'Schéma SOH-CAH-TOA : Repérer Hypoténuse, Adjacent et Opposé à l’angle',
    cercle: 'Schéma de démonstration : Angle au centre AÔB = 2 × Angle inscrit AM̂B',
    equations: 'Principe de la balance : Transposer (+b devient −b) et diviser des 2 côtés',
    inequations: 'Règle d’or : Diviser par un nombre NÉGATIF inverse le sens de l’inégalité !',
    'calcul-litteral': 'Preuve géométrique par les aires : k(a + b) = k×a + k×b',
    identites: 'Preuve géométrique : (a + b)² = carré a² + deux rectangles ab + carré b²',
    fractions: 'Méthode : Addition = même dénominateur ; Division = multiplier par l’inverse',
    relatifs: 'Droite graduée & Règle des signes : (−) × (−) = (+) ; (+) × (−) = (−)',
    puissances: 'Règle des exposants : 10ⁿ × 10ᵐ = 10ⁿ⁺ᵐ | 10ⁿ / 10ᵐ = 10ⁿ⁻ᵐ',
    racine: 'Carré d’aire A → Côté = √A | Décomposition : √(a×b) = √a × √b',
    premiers: 'Échelle de décomposition en facteurs premiers → PGCD & simplification',
    proportionnalite: 'Tableau de proportionnalité : Coefficient k et Produit en croix a×d = b×c',
    vitesse: 'Triangle magique des vitesses : d = v × t | v = d ÷ t | t = d ÷ v',
    stats: 'Distribution ordonnée : [Min — Q1 (25%) — Médiane (50%) — Q3 (75%) — Max]',
    probas: 'Loi d’équiprobabilité : P(A) = Cas favorables ÷ Cas possibles (0 ≤ P ≤ 1)',
    fonctions: 'Lecture graphique : Antécédent x (horizontal) ↔ Image f(x) = ax + b (vertical)',
    translations: 'Vecteur de translation : même direction, même sens, même longueur',
    symetries: 'Symétrie axiale (médiatrice) vs Symétrie centrale (milieu & demi-tour 180°)',
    homothetie: 'Faisceau d’homothétie de centre O : OA’ = |k| × OA (retournement si k < 0)',
    rotation: 'Rotation de centre O et d’angle α : OM = OM’ sur le même cercle de centre O',
    droites: 'Les 4 droites remarquables : Médiatrice, Bissectrice, Médiane, Hauteur',
    volumes: 'Solides pointus (Pyramide & Cône) : V = (Aire Base × hauteur h) ÷ 3',
    reperage: 'Repère orthonormé : Milieu I = moyennes ; Distance AB via Pythagore (Δx ; Δy)',
    'circuit-simple': 'Schéma normalisé : Boucle fermée et courant conventionnel de (+) vers (−)',
    'circuits-serie-derivation': 'Série (1 boucle : tout s’éteint) vs Dérivation (2 boucles indépendantes)',
    intensite: 'Loi des nœuds : Somme des courants entrants = Somme des courants sortants',
    tension: 'Série : U_G = U₁ + U₂ | Dérivation : U_G = U₁ = U₂ (Voltmètre en dérivation)',
    'loi-ohm': 'Triangle magique d’Ohm (U = R × I) & Droite caractéristique passant par (0 ; 0)',
    'puissance-seeg': 'Chaîne SEEG : P = U × I → E = P × t (kWh) → Montant = E × Tarif (F CFA)',
    'propagation-lumiere': 'Propagation rectiligne : Alignement source-trous-œil et v = d ÷ t',
    'ombres-eclipses': 'Zone d’ombre propre, cône d’ombre et ombre portée sur l’écran',
    'reflexion-refraction': 'Normale N ⊥ surface : Réflexion (i = r) et Réfraction (changement de milieu)',
    lentilles: 'Lentille convergente : Rayons parallèles convergent au foyer image F’ (C = 1/f’)',
    'dispersion-couleurs': 'Prisme dispersant la lumière blanche + Synthèse additive RVB',
    'masse-volumique': 'Triangle ρ = m ÷ V & Mesure de volume par déplacement d’eau (V₂ − V₁)',
    'forces-dynamometre': 'Vecteur Force : 4 caractéristiques (Point d’application, Direction, Sens, Norme N)',
    'poids-masse': 'Balance (Masse m invariante en kg) vs Dynamomètre (Poids P = m × g vertical ↓)',
    'pression-archimede': 'Pression p = F ÷ S (en Pa) et Poussée d’Archimède F_A = P − P’ (vers le haut ↑)',
    'air-gaz': 'Composition de l’air (78% N₂, 21% O₂, 1% autres) & Compressibilité des gaz',
    'atomes-molecules': 'Code couleur officiel des atomes (C noir, H blanc, O rouge, N bleu) & liaisons',
    combustions: 'Triangle du feu & Comparaison flamme bleue (complète) vs jaune (incomplète)',
    'equations-bilan': 'Balance de Lavoisier : Conservation du nombre d’atomes et de la masse totale',
    'solutions-ph': 'Dissolution Cm = m ÷ V, Dilution (Cm’ < Cm) & Échelle pH (0 — 7 — 14)',
    'equilibre-deux-forces': 'Équilibre à 2 forces (P⃗ + Pa⃗ = 0⃗) · Même droite, sens opposés, P = Pa',
    'travail-puissance-meca': 'Travail W = F × d (J) · Poids W = m·g·h · Puissance P = W ÷ t = F × v',
    'energie-mecanique': 'Conservation Em = Ec (½mv²) + Ep (mgh) = constante sans frottements',
    'association-resistors': 'Série Req = R₁+R₂ · Dérivation Req = (R₁·R₂)/(R₁+R₂) · Pont diviseur',
    'transformateur-diode': 'Transformateur AC Us/Up = Ns/Np · Diode passante A→K · Transistor Ic = β·Ib',
    'oeil-instruments': 'Œil réduit, correction myopie (−) / hypermétropie (+) & Loupe G = C ÷ 4',
    'metaux-oxydation': 'Rouille 4Fe+3O₂→2Fe₂O₃ · Aluminothermie Fe₂O₃+2Al→2Fe+Al₂O₃',
    'ions-tests': 'Précipités : Cu²⁺ Bleu, Fe²⁺ Vert, Fe³⁺ Rouille (NaOH) ; Cl⁻ Blanc (Ag⁺)',
    'acides-bases-neutralisation': 'Équivalence Ca·Va = Cb·Vb · Neutralisation H⁺ + OH⁻ → H₂O · Dilution → 7',
    'hydrocarbures-alcools': 'Alcanes CₙH₂ₙ₊₂ · Combustion C₃H₈ + 5O₂ → 3CO₂ + 4H₂O · Danger CO',
    'systemes-equations': 'Intersection de 2 droites : Méthodes Substitution & Combinaison linéaire',
    'vecteurs-chasles': 'Relation de Chasles : AB⃗ + BC⃗ = AC⃗ · Parallélogramme AB⃗ = DC⃗',
    'angles-polygones': 'Quadrilatère inscrit : Â + Ĉ = 180° · Polygone régulier : α = 360° ÷ n',
    'sections-solides': 'Réduction/Agrandissement : Longueurs × k, Aires × k², Volumes × k³ (Tronc = V − V’)',
  };
  return captions[topic];
}

const TopicSvgBody: React.FC<{ topic: FigureTopic; contextHint?: string }> = ({
  topic,
  contextHint = '',
}) => {
  const hint = contextHint.toLowerCase();

  switch (topic) {
    case 'pythagore': {
      const isReciprocal = hint.includes('réciproque') || hint.includes('rectangle ?');
      return (
        <svg viewBox="0 0 380 140" className="w-full h-auto max-h-40">
          {/* Square on AB */}
          <rect x="35" y="45" width="44" height="44" fill="#f59e0b" fillOpacity="0.22" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="57" y="71" textAnchor="middle" className="text-[10px] font-black fill-amber-300">AB²</text>
          {/* Triangle */}
          <polygon points="79,45 79,89 155,89" fill="#0284c7" fillOpacity="0.28" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="79" y="79" width="10" height="10" fill="none" stroke="#fbbf24" strokeWidth="2" />
          {/* Square on AC */}
          <rect x="79" y="89" width="76" height="40" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="117" y="113" textAnchor="middle" className="text-[10px] font-black fill-sky-300">AC²</text>
          {/* Labels */}
          <text x="75" y="39" textAnchor="end" className="text-[11px] font-black fill-white">B</text>
          <text x="74" y="100" textAnchor="end" className="text-[11px] font-black fill-amber-300">A (90°)</text>
          <text x="163" y="93" className="text-[11px] font-black fill-white">C</text>
          <text x="128" y="61" className="text-[11px] font-black fill-emerald-300">BC (Hyp.)</text>
          {/* Proof Box */}
          <rect x="200" y="16" width="168" height="108" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <text x="284" y="36" textAnchor="middle" className="text-[10px] font-black fill-amber-300">
            {isReciprocal ? 'TEST RÉCIPROQUE' : 'THÉORÈME EN COLONNE'}
          </text>
          <text x="284" y="57" textAnchor="middle" className="text-[10px] font-mono font-bold fill-white">
            BC² = AB² + AC²
          </text>
          <text x="284" y="77" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">
            {isReciprocal ? 'Si BC² = AB²+AC² → Rect.' : 'Côté = √(Hyp² − Autre²)'}
          </text>
          <text x="284" y="98" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">
            {isReciprocal ? 'Si BC² ≠ → Pas rect.' : 'Puis BC = √Somme'}
          </text>
        </svg>
      );
    }

    case 'thales':
      return (
        <svg viewBox="0 0 380 140" className="w-full h-auto max-h-40">
          <polygon points="95,18 35,122 155,122" fill="#0284c7" fillOpacity="0.18" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="65" y1="70" x2="125" y2="70" stroke="#fbbf24" strokeWidth="3" />
          <text x="95" y="13" textAnchor="middle" className="text-[11px] font-black fill-white">A</text>
          <text x="56" y="72" textAnchor="end" className="text-[11px] font-black fill-amber-300">M</text>
          <text x="133" y="72" className="text-[11px] font-black fill-amber-300">N</text>
          <text x="27" y="128" textAnchor="end" className="text-[11px] font-black fill-sky-300">B</text>
          <text x="163" y="128" className="text-[11px] font-black fill-sky-300">C</text>
          <text x="95" y="63" textAnchor="middle" className="text-[9px] font-black fill-emerald-300">(MN) // (BC)</text>
          <rect x="195" y="18" width="174" height="104" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="282" y="40" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">ÉGALITÉ DES 3 RAPPORTS</text>
          <text x="282" y="66" textAnchor="middle" className="text-xs font-mono font-black fill-white">AM / AB = AN / AC = MN / BC</text>
          <text x="282" y="92" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">Petit côté en haut · Grand en bas</text>
          <text x="282" y="110" textAnchor="middle" className="text-[10px] font-bold fill-slate-300">Puis Produit en Croix !</text>
        </svg>
      );

    case 'milieux':
      return (
        <svg viewBox="0 0 380 135" className="w-full h-auto max-h-36">
          <polygon points="95,18 35,118 155,118" fill="#10b981" fillOpacity="0.15" stroke="#34d399" strokeWidth="2.5" />
          <line x1="65" y1="68" x2="125" y2="68" stroke="#fbbf24" strokeWidth="3" />
          <circle cx="65" cy="68" r="4" fill="#fbbf24" />
          <circle cx="125" cy="68" r="4" fill="#fbbf24" />
          <text x="55" y="70" textAnchor="end" className="text-[11px] font-black fill-amber-300">I</text>
          <text x="134" y="70" className="text-[11px] font-black fill-amber-300">J</text>
          <text x="95" y="61" textAnchor="middle" className="text-[10px] font-black fill-amber-200">IJ = BC ÷ 2</text>
          <text x="95" y="132" textAnchor="middle" className="text-[10px] font-black fill-sky-300">Base BC</text>
          <rect x="195" y="18" width="174" height="100" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="282" y="42" textAnchor="middle" className="text-[10px] font-black fill-amber-300">DROITE DES MILIEUX</text>
          <text x="282" y="66" textAnchor="middle" className="text-[10px] font-bold fill-white">1) (IJ) // (BC)</text>
          <text x="282" y="86" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">2) IJ = BC ÷ 2 (la moitié)</text>
          <text x="282" y="106" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Échelle k : Aires × k² | Vol × k³</text>
        </svg>
      );

    case 'trigo':
      return (
        <svg viewBox="0 0 380 135" className="w-full h-auto max-h-36">
          <polygon points="45,25 45,110 175,110" fill="#0284c7" fillOpacity="0.22" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="45" y="98" width="12" height="12" fill="none" stroke="#fbbf24" strokeWidth="2" />
          <path d="M 145 110 A 30 30 0 0 1 151 94" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
          <text x="135" y="103" textAnchor="end" className="text-[10px] font-black fill-rose-300">α</text>
          <text x="38" y="70" textAnchor="end" className="text-[10px] font-black fill-emerald-300">Opposé</text>
          <text x="110" y="126" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Adjacent</text>
          <text x="124" y="60" className="text-[10px] font-black fill-sky-300">Hypoténuse</text>
          <rect x="195" y="18" width="174" height="100" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="282" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">MÉMO SOH · CAH · TOA</text>
          <text x="282" y="60" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-300">sin α = Opp ÷ Hyp</text>
          <text x="282" y="80" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-300">cos α = Adj ÷ Hyp</text>
          <text x="282" y="100" textAnchor="middle" className="text-[10px] font-mono font-bold fill-rose-300">tan α = Opp ÷ Adj</text>
        </svg>
      );

    case 'cercle':
      return (
        <svg viewBox="0 0 380 135" className="w-full h-auto max-h-36">
          <circle cx="95" cy="68" r="48" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx="95" cy="68" r="3.5" fill="#fbbf24" />
          <polygon points="58,97 95,68 132,97" fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="2" />
          <polygon points="58,97 95,20 132,97" fill="none" stroke="#34d399" strokeWidth="2" />
          <text x="95" y="14" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">M (α)</text>
          <text x="95" y="84" textAnchor="middle" className="text-[10px] font-black fill-amber-300">O (2α)</text>
          <text x="50" y="105" textAnchor="end" className="text-[10px] font-black fill-white">A</text>
          <text x="140" y="105" className="text-[10px] font-black fill-white">B</text>
          <rect x="180" y="18" width="188" height="100" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="274" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">3 PROPRIÉTÉS DU CERCLE</text>
          <text x="274" y="62" textAnchor="middle" className="text-[10px] font-bold fill-white">• Angle centre AÔB = 2 × AM̂B</text>
          <text x="274" y="82" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">• Triangle inscrit / diamètre = 90°</text>
          <text x="274" y="102" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">• Tangente en T ⊥ Rayon [OT]</text>
        </svg>
      );

    case 'equations':
      return (
        <svg viewBox="0 0 380 125" className="w-full h-auto max-h-32">
          <polygon points="85,108 115,108 100,72" fill="#64748b" />
          <line x1="35" y1="68" x2="165" y2="68" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
          <rect x="35" y="40" width="52" height="24" rx="6" fill="#0284c7" stroke="#38bdf8" />
          <text x="61" y="56" textAnchor="middle" className="text-[10px] font-black fill-white">ax + b</text>
          <rect x="115" y="40" width="50" height="24" rx="6" fill="#059669" stroke="#34d399" />
          <text x="140" y="56" textAnchor="middle" className="text-[10px] font-black fill-white">c</text>
          <rect x="190" y="16" width="178" height="94" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="279" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">RÉSOLUTION EN COLONNE</text>
          <text x="279" y="58" textAnchor="middle" className="text-[10px] font-mono fill-white">1) Passer +b → −b à droite</text>
          <text x="279" y="76" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">2) Isoler x : diviser par a</text>
          <text x="279" y="96" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">3) Vérifier dans l’énoncé !</text>
        </svg>
      );

    case 'inequations':
      return (
        <svg viewBox="0 0 380 125" className="w-full h-auto max-h-32">
          <line x1="25" y1="55" x2="180" y2="55" stroke="#64748b" strokeWidth="2.5" />
          <line x1="100" y1="55" x2="178" y2="55" stroke="#10b981" strokeWidth="5" />
          <circle cx="100" cy="55" r="5" fill="#fbbf24" />
          <text x="100" y="75" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Borne x₀</text>
          <text x="140" y="42" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">Solutions [x₀ ; +∞[</text>
          <rect x="195" y="16" width="174" height="94" rx="10" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="282" y="38" textAnchor="middle" className="text-[10px] font-black fill-rose-300">PIÈGE DU SIGNE NÉGATIF</text>
          <text x="282" y="60" textAnchor="middle" className="text-[10px] font-mono font-bold fill-white">−2x ≤ 8  (÷ −2 &lt; 0)</text>
          <text x="282" y="80" textAnchor="middle" className="text-[11px] font-mono font-black fill-amber-300">→ x ≥ −4 (SENS INVERSÉ !)</text>
          <text x="282" y="99" textAnchor="middle" className="text-[9px] font-bold fill-slate-300">Hachurer la partie gardée sur la droite</text>
        </svg>
      );

    case 'calcul-litteral':
    case 'identites':
      return (
        <svg viewBox="0 0 380 130" className="w-full h-auto max-h-36">
          <rect x="30" y="20" width="58" height="45" fill="#4f46e5" fillOpacity="0.45" stroke="#818cf8" strokeWidth="2" />
          <text x="59" y="47" textAnchor="middle" className="text-xs font-black fill-white">a²</text>
          <rect x="88" y="20" width="42" height="45" fill="#0284c7" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="2" />
          <text x="109" y="47" textAnchor="middle" className="text-[11px] font-black fill-sky-200">+ab</text>
          <rect x="30" y="65" width="58" height="36" fill="#059669" fillOpacity="0.45" stroke="#34d399" strokeWidth="2" />
          <text x="59" y="87" textAnchor="middle" className="text-[11px] font-black fill-emerald-200">+ab</text>
          <rect x="88" y="65" width="42" height="36" fill="#d97706" fillOpacity="0.45" stroke="#fbbf24" strokeWidth="2" />
          <text x="109" y="87" textAnchor="middle" className="text-[11px] font-black fill-amber-200">+b²</text>
          <rect x="155" y="18" width="214" height="94" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="262" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">
            {topic === 'identites' ? '3 IDENTITÉS REMARQUABLES' : 'DOUBLE DISTRIBUTIVITÉ'}
          </text>
          <text x="262" y="58" textAnchor="middle" className="text-[10px] font-mono fill-white">(a + b)² = a² + 2ab + b²</text>
          <text x="262" y="77" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">(a − b)² = a² − 2ab + b²</text>
          <text x="262" y="96" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">a² − b² = (a − b)(a + b)</text>
        </svg>
      );

    case 'fractions':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="20" y="20" width="160" height="82" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="100" y="42" textAnchor="middle" className="text-[10px] font-black fill-amber-300">DIVISER = MULTIPLIER L’INVERSE</text>
          <text x="100" y="66" textAnchor="middle" className="text-xs font-mono font-black fill-white">a/b ÷ c/d = a/b × d/c</text>
          <text x="100" y="88" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Puis simplifier par PGCD</text>
          <rect x="195" y="20" width="172" height="82" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="281" y="42" textAnchor="middle" className="text-[10px] font-black fill-sky-300">ADDITION & PRIORITÉ</text>
          <text x="281" y="66" textAnchor="middle" className="text-xs font-mono font-bold fill-white">a/c + b/c = (a + b)/c</text>
          <text x="281" y="88" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">Multiplication × avant + et − !</text>
        </svg>
      );

    case 'relatifs':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="20" y1="36" x2="360" y2="36" stroke="#64748b" strokeWidth="2.5" />
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((n) => {
            const x = 190 + n * 34;
            return (
              <g key={n}>
                <line x1={x} y1="30" x2={x} y2="42" stroke={n === 0 ? '#fbbf24' : '#94a3b8'} strokeWidth="2" />
                <text x={x} y="56" textAnchor="middle" className="text-[9px] font-mono font-bold fill-slate-300">{n}</text>
              </g>
            );
          })}
          <rect x="20" y="68" width="165" height="40" rx="8" fill="#064e3b" fillOpacity="0.5" stroke="#10b981" />
          <text x="102" y="85" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">MÊME SIGNE → (+)</text>
          <text x="102" y="100" textAnchor="middle" className="text-[10px] font-mono fill-white">(+)×(+)=(+) | (−)×(−)=(+)</text>
          <rect x="195" y="68" width="165" height="40" rx="8" fill="#7f1d1d" fillOpacity="0.45" stroke="#f43f5e" />
          <text x="277" y="85" textAnchor="middle" className="text-[10px] font-black fill-rose-300">SIGNES CONTRAIRES → (−)</text>
          <text x="277" y="100" textAnchor="middle" className="text-[10px] font-mono fill-white">(+)×(−)=(−) | (−)×(+)=(−)</text>
        </svg>
      );

    case 'puissances':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="20" y="18" width="165" height="84" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="102" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">RÈGLES DES EXPOSANTS</text>
          <text x="102" y="58" textAnchor="middle" className="text-[10px] font-mono fill-white">10ⁿ × 10ᵐ = 10ⁿ⁺ᵐ</text>
          <text x="102" y="75" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">10ⁿ ÷ 10ᵐ = 10ⁿ⁻ᵐ</text>
          <text x="102" y="92" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">(10ⁿ)ᵐ = 10ⁿˣᵐ</text>
          <rect x="198" y="18" width="166" height="84" rx="10" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
          <text x="281" y="38" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">ÉCRITURE SCIENTIFIQUE</text>
          <text x="281" y="64" textAnchor="middle" className="text-sm font-mono font-black fill-white">a × 10ⁿ</text>
          <text x="281" y="88" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">Avec toujours 1 ≤ a &lt; 10 !</text>
        </svg>
      );

    case 'racine':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="35" y="22" width="76" height="76" fill="#7c3aed" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="2.5" />
          <text x="73" y="62" textAnchor="middle" className="text-xs font-black fill-white">A = c²</text>
          <text x="73" y="112" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Côté c = √A</text>
          <rect x="150" y="18" width="215" height="86" rx="10" fill="#0f172a" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="257" y="40" textAnchor="middle" className="text-[10px] font-black fill-purple-300">SIMPLIFIER UNE RACINE</text>
          <text x="257" y="62" textAnchor="middle" className="text-[11px] font-mono font-bold fill-white">√(a × b) = √a × √b</text>
          <text x="257" y="84" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">Ex: √75 = √(25×3) = 5√3</text>
        </svg>
      );

    case 'premiers':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="85" y1="20" x2="85" y2="105" stroke="#fbbf24" strokeWidth="2.5" />
          <text x="72" y="34" textAnchor="end" className="text-xs font-mono font-black fill-white">60</text>
          <text x="98" y="34" className="text-xs font-mono font-black fill-emerald-300">2</text>
          <text x="72" y="54" textAnchor="end" className="text-xs font-mono font-bold fill-slate-300">30</text>
          <text x="98" y="54" className="text-xs font-mono font-black fill-emerald-300">2</text>
          <text x="72" y="74" textAnchor="end" className="text-xs font-mono font-bold fill-slate-300">15</text>
          <text x="98" y="74" className="text-xs font-mono font-black fill-emerald-300">3</text>
          <text x="72" y="94" textAnchor="end" className="text-xs font-mono font-bold fill-slate-300">5</text>
          <text x="98" y="94" className="text-xs font-mono font-black fill-emerald-300">5</text>
          <rect x="160" y="18" width="208" height="86" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="264" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">FACTEURS PREMIERS &amp; PGCD</text>
          <text x="264" y="62" textAnchor="middle" className="text-xs font-mono font-black fill-white">60 = 2² × 3 × 5</text>
          <text x="264" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Diviser num. et dén. par le PGCD</text>
        </svg>
      );

    case 'proportionnalite':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="25" y="22" width="145" height="72" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="25" y1="58" x2="170" y2="58" stroke="#334155" strokeWidth="1.5" />
          <line x1="97" y1="22" x2="97" y2="94" stroke="#334155" strokeWidth="1.5" />
          <text x="61" y="44" textAnchor="middle" className="text-xs font-mono font-bold fill-white">a</text>
          <text x="133" y="44" textAnchor="middle" className="text-xs font-mono font-bold fill-sky-300">b</text>
          <text x="61" y="80" textAnchor="middle" className="text-xs font-mono font-bold fill-sky-300">c</text>
          <text x="133" y="80" textAnchor="middle" className="text-xs font-mono font-black fill-amber-300">x</text>
          <line x1="69" y1="48" x2="125" y2="73" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="125" y1="48" x2="69" y2="73" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 2" />
          <rect x="190" y="18" width="178" height="84" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="279" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">PRODUIT EN CROIX & %</text>
          <text x="279" y="62" textAnchor="middle" className="text-xs font-mono font-bold fill-white">x = (b × c) ÷ a</text>
          <text x="279" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Remise p% → Multiplier par (1 − p/100)</text>
        </svg>
      );

    case 'vitesse':
      return (
        <svg viewBox="0 0 380 125" className="w-full h-auto max-h-32">
          <polygon points="95,18 35,108 155,108" fill="#0f172a" stroke="#fbbf24" strokeWidth="2.5" />
          <line x1="65" y1="63" x2="125" y2="63" stroke="#fbbf24" strokeWidth="2" />
          <line x1="95" y1="63" x2="95" y2="108" stroke="#fbbf24" strokeWidth="2" />
          <text x="95" y="52" textAnchor="middle" className="text-sm font-black fill-amber-300">d</text>
          <text x="72" y="93" textAnchor="middle" className="text-sm font-black fill-sky-300">v</text>
          <text x="118" y="93" textAnchor="middle" className="text-sm font-black fill-emerald-300">t</text>
          <rect x="180" y="18" width="188" height="90" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="274" y="40" textAnchor="middle" className="text-[10px] font-black fill-sky-300">LES 3 FORMULES DE VITESSE</text>
          <text x="274" y="60" textAnchor="middle" className="text-[11px] font-mono fill-white">v = d ÷ t  |  d = v × t  |  t = d ÷ v</text>
          <text x="274" y="82" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">Conversion : h min → décimal (min÷60)</text>
          <text x="274" y="98" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">1 m/s = 3,6 km/h</text>
        </svg>
      );

    case 'stats':
      return (
        <svg viewBox="0 0 380 125" className="w-full h-auto max-h-32">
          <line x1="25" y1="65" x2="355" y2="65" stroke="#64748b" strokeWidth="2" />
          <line x1="45" y1="55" x2="45" y2="75" stroke="#94a3b8" strokeWidth="2" />
          <line x1="45" y1="65" x2="105" y2="65" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="105" y="42" width="160" height="46" rx="4" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="185" y1="42" x2="185" y2="88" stroke="#fbbf24" strokeWidth="3.5" />
          <line x1="265" y1="65" x2="335" y2="65" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="335" y1="55" x2="335" y2="75" stroke="#94a3b8" strokeWidth="2" />
          <text x="45" y="98" textAnchor="middle" className="text-[10px] font-bold fill-slate-300">Min</text>
          <text x="105" y="34" textAnchor="middle" className="text-[10px] font-black fill-sky-300">Q1 (25%)</text>
          <text x="185" y="34" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Médiane (50%)</text>
          <text x="265" y="34" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">Q3 (75%)</text>
          <text x="335" y="98" textAnchor="middle" className="text-[10px] font-bold fill-slate-300">Max</text>
          <text x="190" y="113" textAnchor="middle" className="text-[10px] font-bold fill-white">Toujours ORDONNER la série du plus petit au plus grand !</text>
        </svg>
      );

    case 'probas':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="35" y1="45" x2="185" y2="45" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
          <line x1="35" y1="45" x2="130" y2="45" stroke="#10b981" strokeWidth="8" strokeLinecap="round" />
          <circle cx="130" cy="45" r="6" fill="#fbbf24" />
          <text x="35" y="30" className="text-[10px] font-black fill-rose-300">0 (Impossible)</text>
          <text x="185" y="30" textAnchor="end" className="text-[10px] font-black fill-emerald-300">1 (Certain)</text>
          <rect x="200" y="18" width="168" height="84" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="284" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">LOI D’ÉQUIPROBABILITÉ</text>
          <text x="284" y="62" textAnchor="middle" className="text-[10px] font-mono font-bold fill-white">P(A) = Cas fav. ÷ Cas totaux</text>
          <text x="284" y="84" textAnchor="middle" className="text-[10px] font-mono font-bold fill-sky-300">Contraire : P(Ā) = 1 − P(A)</text>
        </svg>
      );

    case 'fonctions':
      return (
        <svg viewBox="0 0 380 125" className="w-full h-auto max-h-32">
          <line x1="35" y1="100" x2="170" y2="100" stroke="#64748b" strokeWidth="2" />
          <line x1="55" y1="112" x2="55" y2="18" stroke="#64748b" strokeWidth="2" />
          <line x1="42" y1="95" x2="155" y2="22" stroke="#38bdf8" strokeWidth="3" />
          <circle cx="122" cy="43" r="4.5" fill="#fbbf24" />
          <line x1="122" y1="100" x2="122" y2="43" stroke="#10b981" strokeDasharray="3 2" strokeWidth="1.5" />
          <line x1="55" y1="43" x2="122" y2="43" stroke="#f43f5e" strokeDasharray="3 2" strokeWidth="1.5" />
          <text x="122" y="114" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">x</text>
          <text x="48" y="47" textAnchor="end" className="text-[10px] font-black fill-rose-300">f(x)</text>
          <rect x="190" y="18" width="178" height="88" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="279" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">FONCTION AFFINE</text>
          <text x="279" y="62" textAnchor="middle" className="text-xs font-mono font-black fill-white">f(x) = a·x + b</text>
          <text x="279" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">a = pente | b = ordonnée origine</text>
        </svg>
      );

    case 'translations':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <polygon points="35,88 78,88 52,44" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
          <polygon points="125,68 168,68 142,24" fill="#10b981" fillOpacity="0.4" stroke="#34d399" strokeWidth="2" />
          <line x1="52" y1="44" x2="142" y2="24" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4 2" />
          <polygon points="142,24 132,22 135,30" fill="#fbbf24" />
          <rect x="195" y="18" width="174" height="84" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="282" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">GLISSEMENT PARALLÈLE</text>
          <text x="282" y="62" textAnchor="middle" className="text-[10px] font-bold fill-white">Vecteur AA’ = BB’ (parallélogramme)</text>
          <text x="282" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Conserve longueurs, angles & aires</text>
        </svg>
      );

    case 'symetries':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="95" y1="16" x2="95" y2="104" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="55" cy="60" r="5" fill="#38bdf8" />
          <circle cx="135" cy="60" r="5" fill="#10b981" />
          <line x1="55" y1="60" x2="135" y2="60" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="95" y="52" width="8" height="8" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="46" y="64" textAnchor="end" className="text-[10px] font-black fill-sky-300">M</text>
          <text x="144" y="64" className="text-[10px] font-black fill-emerald-300">M’</text>
          <rect x="180" y="18" width="188" height="84" rx="10" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="274" y="40" textAnchor="middle" className="text-[10px] font-black fill-rose-300">AXIALE vs CENTRALE</text>
          <text x="274" y="62" textAnchor="middle" className="text-[10px] font-bold fill-white">Axiale (d) : (d) médiatrice de [MM’]</text>
          <text x="274" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Centrale O : O milieu de [MM’] (180°)</text>
        </svg>
      );

    case 'homothetie':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <circle cx="28" cy="62" r="4.5" fill="#fbbf24" />
          <text x="22" y="55" className="text-[10px] font-black fill-amber-300">O</text>
          <line x1="28" y1="62" x2="165" y2="25" stroke="#475569" strokeDasharray="3 2" />
          <line x1="28" y1="62" x2="165" y2="100" stroke="#475569" strokeDasharray="3 2" />
          <polygon points="82,47 82,77 105,62" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
          <polygon points="145,30 145,95 182,62" fill="#10b981" fillOpacity="0.25" stroke="#34d399" strokeWidth="2" />
          <rect x="198" y="18" width="170" height="84" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="283" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">ZOOM DE RAPPORT k</text>
          <text x="283" y="62" textAnchor="middle" className="text-[10px] font-mono font-bold fill-white">OA’ = |k| × OA</text>
          <text x="283" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Long. ×|k| · Aires × k² · Retourné si k&lt;0</text>
        </svg>
      );

    case 'rotation':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <circle cx="95" cy="65" r="40" fill="none" stroke="#334155" strokeDasharray="3 3" />
          <circle cx="95" cy="65" r="4" fill="#fbbf24" />
          <line x1="95" y1="65" x2="135" y2="65" stroke="#38bdf8" strokeWidth="2" />
          <line x1="95" y1="65" x2="115" y2="30" stroke="#34d399" strokeWidth="2.5" />
          <circle cx="135" cy="65" r="4.5" fill="#38bdf8" />
          <circle cx="115" cy="30" r="4.5" fill="#34d399" />
          <text x="86" y="76" className="text-[10px] font-black fill-amber-300">O</text>
          <text x="142" y="68" className="text-[10px] font-black fill-sky-300">M</text>
          <text x="122" y="27" className="text-[10px] font-black fill-emerald-300">M’</text>
          <rect x="180" y="18" width="188" height="84" rx="10" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
          <text x="274" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">ROTATION (O ; α ; SENS)</text>
          <text x="274" y="62" textAnchor="middle" className="text-[10px] font-bold fill-white">OM = OM’ et angle MÔM’ = α</text>
          <text x="274" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">180° = Symétrie centrale de centre O</text>
        </svg>
      );

    case 'droites':
      return (
        <svg viewBox="0 0 380 125" className="w-full h-auto max-h-32">
          <polygon points="95,18 35,105 155,105" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
          <line x1="95" y1="18" x2="95" y2="105" stroke="#fbbf24" strokeWidth="2.5" />
          <circle cx="95" cy="76" r="4.5" fill="#f43f5e" />
          <text x="103" y="80" className="text-[10px] font-black fill-rose-300">G</text>
          <rect x="180" y="16" width="188" height="94" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="274" y="34" textAnchor="middle" className="text-[10px] font-black fill-amber-300">4 DROITES & POINTS DE CONCOURS</text>
          <text x="192" y="52" className="text-[9.5px] font-bold fill-sky-300">• Médiatrices → Cercle Circonscrit</text>
          <text x="192" y="69" className="text-[9.5px] font-bold fill-emerald-300">• Bissectrices → Cercle Inscrit</text>
          <text x="192" y="86" className="text-[9.5px] font-bold fill-amber-300">• Médianes → Centre Gravité G (2/3)</text>
          <text x="192" y="103" className="text-[9.5px] font-bold fill-rose-300">• Hauteurs → Orthocentre H</text>
        </svg>
      );

    case 'volumes':
      return (
        <svg viewBox="0 0 380 125" className="w-full h-auto max-h-32">
          <polygon points="85,18 42,95 128,95" fill="#a855f7" fillOpacity="0.25" stroke="#c084fc" strokeWidth="2" />
          <ellipse cx="85" cy="95" rx="43" ry="12" fill="none" stroke="#c084fc" strokeWidth="2" />
          <line x1="85" y1="18" x2="85" y2="95" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 3" />
          <text x="92" y="64" className="text-[10px] font-black fill-amber-300">h</text>
          <text x="85" y="118" textAnchor="middle" className="text-[10px] font-black fill-purple-300">Base B</text>
          <rect x="165" y="18" width="202" height="88" rx="10" fill="#0f172a" stroke="#c084fc" strokeWidth="1.5" />
          <text x="266" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">PYRAMIDE & CÔNE (÷ 3 !)</text>
          <text x="266" y="62" textAnchor="middle" className="text-xs font-mono font-black fill-white">V = (B × h) ÷ 3</text>
          <text x="266" y="84" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">Cône : V = (π × r² × h) ÷ 3</text>
        </svg>
      );

    case 'reperage':
      return (
        <svg viewBox="0 0 380 125" className="w-full h-auto max-h-32">
          <line x1="25" y1="98" x2="165" y2="98" stroke="#64748b" strokeWidth="2" />
          <line x1="45" y1="112" x2="45" y2="18" stroke="#64748b" strokeWidth="2" />
          <line x1="65" y1="82" x2="145" y2="30" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="65" y1="82" x2="145" y2="82" stroke="#475569" strokeDasharray="3 2" />
          <line x1="145" y1="82" x2="145" y2="30" stroke="#475569" strokeDasharray="3 2" />
          <circle cx="65" cy="82" r="4" fill="#fbbf24" />
          <circle cx="105" cy="56" r="4" fill="#10b981" />
          <circle cx="145" cy="30" r="4" fill="#38bdf8" />
          <text x="56" y="82" textAnchor="end" className="text-[10px] font-black fill-amber-300">A</text>
          <text x="100" y="50" textAnchor="end" className="text-[10px] font-black fill-emerald-300">I</text>
          <text x="152" y="30" className="text-[10px] font-black fill-sky-300">B</text>
          <rect x="180" y="18" width="188" height="88" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="274" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">MILIEU & DISTANCE</text>
          <text x="274" y="62" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300">I = ((xA+xB)/2 ; (yA+yB)/2)</text>
          <text x="274" y="84" textAnchor="middle" className="text-[10px] font-mono fill-white">AB = √[(xB−xA)² + (yB−yA)²]</text>
        </svg>
      );

    // ==================== PHYSICS ====================
    case 'circuit-simple':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="35" y="22" width="145" height="76" rx="6" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
          <line x1="25" y1="54" x2="45" y2="54" stroke="#f43f5e" strokeWidth="3" />
          <line x1="29" y1="64" x2="41" y2="64" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="180" cy="60" r="14" fill="#facc15" fillOpacity="0.3" stroke="#facc15" strokeWidth="2" />
          <text x="180" y="64" textAnchor="middle" className="text-[10px] font-black fill-white">L</text>
          <polygon points="105,22 95,17 95,27" fill="#f43f5e" />
          <text x="108" y="16" textAnchor="middle" className="text-[9px] font-black fill-rose-300">Courant I (+ → −)</text>
          <rect x="208" y="18" width="160" height="84" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="288" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">CONDITIONS DU CIRCUIT</text>
          <text x="288" y="62" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">1) Générateur présent</text>
          <text x="288" y="82" textAnchor="middle" className="text-[10px] font-bold fill-white">2) Boucle FERMÉE + Conducteurs</text>
        </svg>
      );

    case 'circuits-serie-derivation':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="20" y="20" width="150" height="80" rx="6" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <line x1="95" y1="20" x2="95" y2="100" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="95" cy="60" r="11" fill="#facc15" fillOpacity="0.4" stroke="#facc15" />
          <circle cx="170" cy="60" r="11" fill="#facc15" fillOpacity="0.4" stroke="#facc15" />
          <text x="95" y="64" textAnchor="middle" className="text-[9px] font-black fill-white">L₁</text>
          <text x="170" y="64" textAnchor="middle" className="text-[9px] font-black fill-white">L₂</text>
          <rect x="195" y="18" width="174" height="84" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="282" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">SÉRIE vs DÉRIVATION</text>
          <text x="282" y="62" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">Série (1 boucle) : Si L₁ grille, L₂ s’éteint</text>
          <text x="282" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Dériv. (2 boucles) : L₂ reste allumée !</text>
        </svg>
      );

    case 'intensite':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="25" y1="60" x2="100" y2="60" stroke="#fbbf24" strokeWidth="4" />
          <circle cx="100" cy="60" r="6" fill="#f59e0b" />
          <line x1="100" y1="60" x2="175" y2="30" stroke="#34d399" strokeWidth="3" />
          <line x1="100" y1="60" x2="175" y2="90" stroke="#38bdf8" strokeWidth="3" />
          <text x="58" y="48" textAnchor="middle" className="text-xs font-black fill-amber-300">I</text>
          <text x="155" y="25" className="text-xs font-black fill-emerald-300">I₁</text>
          <text x="155" y="102" className="text-xs font-black fill-sky-300">I₂</text>
          <rect x="195" y="18" width="174" height="84" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="282" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">LOI DES NŒUDS (A)</text>
          <text x="282" y="62" textAnchor="middle" className="text-xs font-mono font-black fill-white">I = I₁ + I₂</text>
          <text x="282" y="84" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Série : I₁ = I₂ | Ampèremètre en série</text>
        </svg>
      );

    case 'tension':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="25" y="34" width="145" height="62" rx="6" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <rect x="65" y="24" width="42" height="20" rx="4" fill="#0284c7" stroke="#38bdf8" />
          <text x="86" y="38" textAnchor="middle" className="text-[10px] font-black fill-white">R</text>
          <path d="M 55 34 L 55 12 L 117 12 L 117 34" fill="none" stroke="#10b981" strokeWidth="2" />
          <circle cx="86" cy="12" r="9" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
          <text x="86" y="15" textAnchor="middle" className="text-[9px] font-black fill-emerald-300">V</text>
          <rect x="190" y="18" width="178" height="84" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="279" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">LOI DES TENSIONS (Volt)</text>
          <text x="279" y="62" textAnchor="middle" className="text-[10px] font-mono fill-white"><SvgMathTspans text="Série : U_G = U₁ + U₂" baseFontSize={10} /></text>
          <text x="279" y="84" textAnchor="middle" className="text-[10px] font-mono fill-emerald-300"><SvgMathTspans text="Dériv. : U_G = U₁ = U₂" baseFontSize={10} /></text>
        </svg>
      );

    case 'loi-ohm':
      return (
        <svg viewBox="0 0 380 125" className="w-full h-auto max-h-32">
          <polygon points="90,18 32,106 148,106" fill="#0f172a" stroke="#fbbf24" strokeWidth="2.5" />
          <line x1="61" y1="62" x2="119" y2="62" stroke="#fbbf24" strokeWidth="2" />
          <line x1="90" y1="62" x2="90" y2="106" stroke="#fbbf24" strokeWidth="2" />
          <text x="90" y="52" textAnchor="middle" className="text-sm font-black fill-amber-300">U</text>
          <text x="68" y="92" textAnchor="middle" className="text-sm font-black fill-sky-300">R</text>
          <text x="112" y="92" textAnchor="middle" className="text-sm font-black fill-emerald-300">I</text>
          <rect x="175" y="18" width="192" height="88" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="271" y="40" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">LOI D’OHM (I EN AMPÈRES !)</text>
          <text x="271" y="62" textAnchor="middle" className="text-[11px] font-mono font-bold fill-white">U = R×I  |  R = U÷I  |  I = U÷R</text>
          <text x="271" y="84" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">Si I en mA → diviser par 1 000 !</text>
        </svg>
      );

    case 'puissance-seeg':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="20" y="18" width="160" height="84" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="100" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">PUISSANCE (Watt)</text>
          <text x="100" y="64" textAnchor="middle" className="text-sm font-mono font-black fill-white">P = U × I</text>
          <text x="100" y="86" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">1 kW = 1 000 W</text>
          <rect x="195" y="18" width="172" height="84" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="281" y="40" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">ÉNERGIE & FACTURE SEEG</text>
          <text x="281" y="64" textAnchor="middle" className="text-xs font-mono font-black fill-white">E(kWh) = P(kW) × t(h)</text>
          <text x="281" y="86" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">Prix = E × Tarif (F CFA)</text>
        </svg>
      );

    case 'propagation-lumiere':
      return (
        <svg viewBox="0 0 380 115" className="w-full h-auto max-h-28">
          <circle cx="32" cy="58" r="12" fill="#facc15" />
          <rect x="85" y="20" width="6" height="30" fill="#64748b" />
          <rect x="85" y="66" width="6" height="30" fill="#64748b" />
          <rect x="145" y="20" width="6" height="30" fill="#64748b" />
          <rect x="145" y="66" width="6" height="30" fill="#64748b" />
          <line x1="44" y1="58" x2="180" y2="58" stroke="#fde047" strokeWidth="3" />
          <rect x="195" y="18" width="174" height="80" rx="10" fill="#0f172a" stroke="#fde047" strokeWidth="1.5" />
          <text x="282" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">PROPAGATION RECTILIGNE</text>
          <text x="282" y="62" textAnchor="middle" className="text-xs font-mono font-black fill-white">c = 300 000 km/s</text>
          <text x="282" y="82" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">d = c × t  (1 a.l. ≈ 9,46×10¹² km)</text>
        </svg>
      );

    case 'ombres-eclipses':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <circle cx="32" cy="60" r="14" fill="#facc15" />
          <polygon points="32,46 175,25 175,95 32,74" fill="#1e293b" fillOpacity="0.55" />
          <circle cx="105" cy="60" r="16" fill="#0284c7" />
          <rect x="192" y="18" width="176" height="84" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="280" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">ALIGNEMENT DES ASTRES</text>
          <text x="280" y="62" textAnchor="middle" className="text-[10px] font-bold fill-white">S — L — T → Éclipse de Soleil</text>
          <text x="280" y="82" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">S — T — L → Éclipse de Lune</text>
        </svg>
      );

    case 'reflexion-refraction':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="25" y1="78" x2="175" y2="78" stroke="#94a3b8" strokeWidth="3" />
          <line x1="100" y1="16" x2="100" y2="108" stroke="#64748b" strokeDasharray="3 3" />
          <line x1="48" y1="26" x2="100" y2="78" stroke="#facc15" strokeWidth="2.5" />
          <line x1="100" y1="78" x2="152" y2="26" stroke="#34d399" strokeWidth="2.5" />
          <line x1="100" y1="78" x2="128" y2="112" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
          <text x="86" y="46" className="text-[10px] font-black fill-amber-300">i</text>
          <text x="112" y="46" className="text-[10px] font-black fill-emerald-300">r</text>
          <rect x="190" y="18" width="178" height="84" rx="10" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
          <text x="279" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">LOIS DE SNELL-DESCARTES</text>
          <text x="279" y="62" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Réflexion (Miroir) : i = r</text>
          <text x="279" y="82" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Réfraction Air→Eau : se rapproche N</text>
        </svg>
      );

    case 'lentilles':
      return (
        <svg viewBox="0 0 380 115" className="w-full h-auto max-h-28">
          <line x1="20" y1="58" x2="185" y2="58" stroke="#475569" strokeDasharray="3 3" />
          <line x1="95" y1="18" x2="95" y2="98" stroke="#38bdf8" strokeWidth="3.5" />
          <line x1="25" y1="34" x2="95" y2="34" stroke="#facc15" strokeWidth="2" />
          <line x1="95" y1="34" x2="160" y2="58" stroke="#34d399" strokeWidth="2" />
          <circle cx="160" cy="58" r="4" fill="#f43f5e" />
          <text x="160" y="48" textAnchor="middle" className="text-[10px] font-black fill-rose-300">F’</text>
          <rect x="195" y="16" width="174" height="84" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="282" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">VERGENCE EN DIOPTRIES (δ)</text>
          <text x="282" y="60" textAnchor="middle" className="text-xs font-mono font-black fill-white">C = 1 ÷ f’  (f’ en m !)</text>
          <text x="282" y="82" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Bords minces = Convergente (+)</text>
        </svg>
      );

    case 'dispersion-couleurs':
      return (
        <svg viewBox="0 0 380 115" className="w-full h-auto max-h-28">
          <polygon points="85,22 45,92 125,92" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
          <line x1="20" y1="62" x2="65" y2="56" stroke="#ffffff" strokeWidth="3.5" />
          <line x1="106" y1="56" x2="165" y2="42" stroke="#ef4444" strokeWidth="2.5" />
          <line x1="106" y1="58" x2="165" y2="58" stroke="#22c55e" strokeWidth="2.5" />
          <line x1="106" y1="60" x2="165" y2="74" stroke="#8b5cf6" strokeWidth="2.5" />
          <rect x="182" y="16" width="186" height="84" rx="10" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
          <text x="275" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">SYNTHÈSE ADDITIVE RVB</text>
          <text x="275" y="60" textAnchor="middle" className="text-[10px] font-bold fill-white">R+V = Jaune | R+B = Magenta</text>
          <text x="275" y="80" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">V+B = Cyan | R+V+B = BLANC</text>
        </svg>
      );

    case 'masse-volumique':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <polygon points="90,18 32,102 148,102" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="61" y1="60" x2="119" y2="60" stroke="#38bdf8" strokeWidth="2" />
          <line x1="90" y1="60" x2="90" y2="102" stroke="#38bdf8" strokeWidth="2" />
          <text x="90" y="50" textAnchor="middle" className="text-sm font-black fill-amber-300">m</text>
          <text x="68" y="90" textAnchor="middle" className="text-sm font-black fill-sky-300">ρ</text>
          <text x="112" y="90" textAnchor="middle" className="text-sm font-black fill-emerald-300">V</text>
          <rect x="175" y="18" width="192" height="84" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="271" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">FLOTTER OU COULER (EAU = 1 g/cm³)</text>
          <text x="271" y="62" textAnchor="middle" className="text-[11px] font-mono font-bold fill-white">ρ = m ÷ V  |  m = ρ × V</text>
          <text x="271" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Si ρ &lt; 1 g/cm³ → FLOTTE (Okoumé !)</text>
        </svg>
      );

    case 'forces-dynamometre':
      return (
        <svg viewBox="0 0 380 110" className="w-full h-auto max-h-28">
          <circle cx="38" cy="55" r="7" fill="#fbbf24" />
          <line x1="45" y1="55" x2="155" y2="55" stroke="#10b981" strokeWidth="4" />
          <polygon points="165,55 152,48 152,62" fill="#10b981" />
          <text x="102" y="40" textAnchor="middle" className="text-xs font-black fill-emerald-300">Vecteur Force F</text>
          <rect x="185" y="15" width="182" height="80" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="276" y="36" textAnchor="middle" className="text-[10px] font-black fill-amber-300">4 CARACTÉRISTIQUES</text>
          <text x="276" y="56" textAnchor="middle" className="text-[10px] font-bold fill-white">Point · Direction · Sens · Valeur (N)</text>
          <text x="276" y="76" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Longueur flèche = F ÷ Échelle</text>
        </svg>
      );

    case 'poids-masse':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="52" y="25" width="46" height="32" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <text x="75" y="45" textAnchor="middle" className="text-xs font-black fill-white">m (kg)</text>
          <circle cx="75" cy="41" r="3" fill="#fbbf24" />
          <line x1="75" y1="57" x2="75" y2="96" stroke="#f43f5e" strokeWidth="3.5" />
          <polygon points="75,105 69,94 81,94" fill="#f43f5e" />
          <text x="90" y="88" className="text-xs font-black fill-rose-300">P ↓</text>
          <rect x="155" y="18" width="212" height="84" rx="10" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="261" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">POIDS (N) ≠ MASSE (kg)</text>
          <text x="261" y="62" textAnchor="middle" className="text-xs font-mono font-black fill-white">P = m × g  (g = 9,8 N/kg)</text>
          <text x="261" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">m invariant · P vertical vers le bas</text>
        </svg>
      );

    case 'pression-archimede':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="35" y="48" width="110" height="52" rx="6" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" />
          <rect x="70" y="54" width="40" height="24" rx="4" fill="#f59e0b" stroke="#fde68a" />
          <line x1="90" y1="54" x2="90" y2="26" stroke="#10b981" strokeWidth="3" />
          <polygon points="90,20 85,29 95,29" fill="#10b981" />
          <line x1="90" y1="78" x2="90" y2="104" stroke="#f43f5e" strokeWidth="3" />
          <text x="100" y="34" className="text-[10px] font-black fill-emerald-300"><SvgMathTspans text="F_A ↑" baseFontSize={10} /></text>
          <text x="100" y="96" className="text-[10px] font-black fill-rose-300">P ↓</text>
          <rect x="165" y="18" width="202" height="84" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="266" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">PRESSION &amp; ARCHIMÈDE</text>
          <text x="266" y="62" textAnchor="middle" className="text-[11px] font-mono font-bold fill-white"><SvgMathTspans text="p = F ÷ S (Pa)  |  F_A = P − P’" baseFontSize={11} /></text>
          <text x="266" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300"><SvgMathTspans text="F_A = ρ_liquide × V_imm × g" baseFontSize={10} /></text>
        </svg>
      );

    case 'air-gaz':
      return (
        <svg viewBox="0 0 380 110" className="w-full h-auto max-h-28">
          <rect x="20" y="32" width="110" height="36" rx="6" fill="#0284c7" stroke="#38bdf8" />
          <text x="75" y="54" textAnchor="middle" className="text-[10px] font-black fill-white">78% N₂</text>
          <rect x="132" y="32" width="44" height="36" rx="6" fill="#059669" stroke="#34d399" />
          <text x="154" y="54" textAnchor="middle" className="text-[10px] font-black fill-white">21%</text>
          <rect x="192" y="16" width="176" height="78" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="280" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">PROPRIÉTÉS DE L’AIR</text>
          <text x="280" y="58" textAnchor="middle" className="text-[10px] font-bold fill-white">V(O₂) = V(air) ÷ 5  (≈ 21%)</text>
          <text x="280" y="78" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">1 L d’air ≈ 1,3 g · Compressible</text>
        </svg>
      );

    case 'atomes-molecules':
      return (
        <svg viewBox="0 0 380 115" className="w-full h-auto max-h-28">
          <circle cx="52" cy="54" r="12" fill="#ef4444" />
          <circle cx="36" cy="66" r="7" fill="#f8fafc" />
          <circle cx="68" cy="66" r="7" fill="#f8fafc" />
          <text x="52" y="92" textAnchor="middle" className="text-[10px] font-black fill-white">H₂O</text>
          <circle cx="130" cy="54" r="11" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="110" cy="54" r="9" fill="#ef4444" />
          <circle cx="150" cy="54" r="9" fill="#ef4444" />
          <text x="130" y="92" textAnchor="middle" className="text-[10px] font-black fill-amber-300">CO₂</text>
          <rect x="180" y="16" width="188" height="84" rx="10" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
          <text x="274" y="38" textAnchor="middle" className="text-[10px] font-black fill-purple-300">INDICE vs COEFFICIENT</text>
          <text x="274" y="60" textAnchor="middle" className="text-[10px] font-bold fill-white">3 CO₂ = 3×1 C et 3×2 = 6 atomes O</text>
          <text x="274" y="80" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">C noir · H blanc · O rouge · N bleu</text>
        </svg>
      );

    case 'combustions':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <polygon points="88,22 36,102 140,102" fill="#f59e0b" fillOpacity="0.18" stroke="#fbbf24" strokeWidth="2.5" />
          <text x="88" y="76" textAnchor="middle" className="text-[10px] font-black fill-amber-300">TRIANGLE</text>
          <text x="88" y="90" textAnchor="middle" className="text-[10px] font-black fill-amber-300">DU FEU</text>
          <rect x="160" y="18" width="208" height="84" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="264" y="38" textAnchor="middle" className="text-[10px] font-black fill-sky-300">BLEUE (Complète) vs JAUNE (Incomplète)</text>
          <text x="264" y="60" textAnchor="middle" className="text-[10px] font-bold fill-white">Complète (+O₂) → CO₂ + H₂O</text>
          <text x="264" y="82" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">Incomplète (−O₂) → Suie C + CO (mortel)</text>
        </svg>
      );

    case 'equations-bilan':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="20" y="18" width="340" height="84" rx="12" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="190" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">LOI DE LAVOISIER : RIEN NE SE PERD, RIEN NE SE CRÉE</text>
          <text x="190" y="64" textAnchor="middle" className="text-xs font-mono font-black fill-white">CH₄ + 2 O₂   →   CO₂ + 2 H₂O</text>
          <text x="190" y="86" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Même nombre d’atomes et même masse des 2 côtés !</text>
        </svg>
      );

    case 'solutions-ph':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <defs>
            <linearGradient id="pedagogPhGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <rect x="25" y="22" width="330" height="18" rx="6" fill="url(#pedagogPhGrad)" />
          <text x="28" y="54" className="text-[10px] font-black fill-rose-300">0 Acide (&lt;7)</text>
          <text x="190" y="54" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">7 Neutre</text>
          <text x="352" y="54" textAnchor="end" className="text-[10px] font-black fill-indigo-300">14 Basique (&gt;7)</text>
          <rect x="25" y="66" width="330" height="38" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="190" y="89" textAnchor="middle" className="text-[11px] font-mono font-bold fill-white"><SvgMathTspans text="Cm = m_soluté ÷ V_solution (g/L) · Diluer rapproche de 7" baseFontSize={11} /></text>
        </svg>
      );

    case 'equilibre-deux-forces':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="30" y="42" width="110" height="62" rx="6" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" />
          <rect x="65" y="48" width="40" height="30" rx="4" fill="#fbbf24" fillOpacity="0.8" />
          <line x1="85" y1="63" x2="85" y2="18" stroke="#10b981" strokeWidth="3" />
          <line x1="85" y1="63" x2="85" y2="105" stroke="#f43f5e" strokeWidth="3" />
          <text x="95" y="26" className="text-[10px] font-black fill-emerald-300">Pa ↑</text>
          <text x="95" y="102" className="text-[10px] font-black fill-rose-300">P ↓</text>
          <rect x="165" y="16" width="195" height="88" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="262" y="40" textAnchor="middle" className="text-[10px] font-black fill-amber-300">ÉQUILIBRE &amp; ARCHIMÈDE</text>
          <text x="262" y="62" textAnchor="middle" className="text-[10px] font-mono font-bold fill-white"><SvgMathTspans text="P⃗ + T⃗ = 0⃗  ⇔  P = T" baseFontSize={10} /></text>
          <text x="262" y="84" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-300">Pa = P − P’ = ρ·V·g</text>
        </svg>
      );

    case 'travail-puissance-meca':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="25" y1="88" x2="155" y2="88" stroke="#64748b" strokeWidth="2.5" />
          <rect x="35" y="54" width="38" height="32" rx="4" fill="#38bdf8" fillOpacity="0.35" stroke="#38bdf8" />
          <line x1="73" y1="70" x2="140" y2="70" stroke="#fbbf24" strokeWidth="3" />
          <polygon points="145,70 135,64 135,76" fill="#fbbf24" />
          <text x="108" y="62" textAnchor="middle" className="text-[10px] font-black fill-amber-300"><SvgMathTspans text="F⃗ sur d" baseFontSize={10} /></text>
          <rect x="168" y="16" width="194" height="88" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="265" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">TRAVAIL &amp; PUISSANCE</text>
          <text x="265" y="60" textAnchor="middle" className="text-[10px] font-mono font-bold fill-white"><SvgMathTspans text="W = F × d (J) | W_p = m·g·h" baseFontSize={10} /></text>
          <text x="265" y="84" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-300">P = W ÷ t = F × v (W)</text>
        </svg>
      );

    case 'energie-mecanique':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <path d="M 28 28 Q 75 96 150 94" fill="none" stroke="#38bdf8" strokeWidth="3" />
          <circle cx="38" cy="36" r="7" fill="#fbbf24" />
          <circle cx="136" cy="92" r="7" fill="#10b981" />
          <rect x="168" y="16" width="194" height="88" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="265" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">ÉNERGIE MÉCANIQUE</text>
          <text x="265" y="60" textAnchor="middle" className="text-[10px] font-mono font-bold fill-sky-300">Ec = ½·m·v² | Ep = m·g·h</text>
          <text x="265" y="84" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-300">Em = Ec + Ep = Cte (sans frott.)</text>
        </svg>
      );

    case 'association-resistors':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="22" y1="60" x2="155" y2="60" stroke="#94a3b8" strokeWidth="2" />
          <rect x="40" y="46" width="40" height="28" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <text x="60" y="64" textAnchor="middle" className="text-[10px] font-black fill-sky-300">R₁</text>
          <rect x="98" y="46" width="40" height="28" rx="4" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
          <text x="118" y="64" textAnchor="middle" className="text-[10px] font-black fill-amber-300">R₂</text>
          <rect x="168" y="16" width="194" height="88" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="265" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">ASSOCIATION DE RÉSISTORS</text>
          <text x="265" y="60" textAnchor="middle" className="text-[10px] font-mono font-bold fill-white">Série : Req = R₁ + R₂</text>
          <text x="265" y="84" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-300">Dériv. : Req = (R₁·R₂)/(R₁+R₂)</text>
        </svg>
      );

    case 'transformateur-diode':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="72" y="24" width="38" height="72" rx="4" fill="none" stroke="#94a3b8" strokeWidth="4" />
          <text x="44" y="64" textAnchor="middle" className="text-[11px] font-black fill-sky-300">Up</text>
          <text x="138" y="64" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">Us</text>
          <rect x="168" y="16" width="194" height="88" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="265" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">TRANSFO · DIODE · NPN</text>
          <text x="265" y="60" textAnchor="middle" className="text-[10px] font-mono font-bold fill-white">Us / Up = Ns / Np (AC)</text>
          <text x="265" y="84" textAnchor="middle" className="text-[10px] font-mono font-bold fill-purple-300">Diode A→K · Ic = β × Ib</text>
        </svg>
      );

    case 'oeil-instruments':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <circle cx="84" cy="60" r="42" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
          <ellipse cx="56" cy="60" rx="7" ry="20" fill="#38bdf8" fillOpacity="0.5" />
          <circle cx="126" cy="60" r="3.5" fill="#10b981" />
          <rect x="155" y="16" width="208" height="88" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="259" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">CORRECTION &amp; LOUPE</text>
          <text x="259" y="60" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Myopie (−) | Hypermétropie (+)</text>
          <text x="259" y="84" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-300">Loupe : G = C ÷ 4</text>
        </svg>
      );

    case 'metaux-oxydation':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="22" y="16" width="336" height="88" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="190" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">MÉTAUX (Fe, Cu, Al, Zn) &amp; OXYDATIONS</text>
          <text x="190" y="62" textAnchor="middle" className="text-[11px] font-mono font-bold fill-rose-300">Rouille : 4 Fe + 3 O₂ → 2 Fe₂O₃</text>
          <text x="190" y="86" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-300">Aluminothermie : Fe₂O₃ + 2 Al → 2 Fe + Al₂O₃</text>
        </svg>
      );

    case 'ions-tests':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="22" y="16" width="336" height="88" rx="10" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
          <text x="190" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">TESTS CARACTÉRISTIQUES DES IONS</text>
          <text x="190" y="62" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">NaOH : Cu²⁺ (Bleu) · Fe²⁺ (Vert) · Fe³⁺ (Rouille)</text>
          <text x="190" y="86" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">AgNO₃ : Cl⁻ → Précipité blanc noircissant</text>
        </svg>
      );

    case 'acides-bases-neutralisation':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="22" y="16" width="336" height="88" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="190" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">ACIDES (pH &lt; 7) · BASES (pH &gt; 7) · DOSAGE</text>
          <text x="190" y="62" textAnchor="middle" className="text-[11px] font-mono font-bold fill-white">H⁺ + OH⁻ → H₂O  |  Ca·Va = Cb·Vb</text>
          <text x="190" y="86" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Dilution rapproche toujours pH de 7 · Zn + 2H⁺ → Zn²⁺ + H₂↑</text>
        </svg>
      );

    case 'hydrocarbures-alcools':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <rect x="22" y="16" width="336" height="88" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="190" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">HYDROCARBURES (SOGARA) : ALCANES CₙH₂ₙ₊₂</text>
          <text x="190" y="62" textAnchor="middle" className="text-[11px] font-mono font-bold fill-sky-300">C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O (Flamme bleue)</text>
          <text x="190" y="86" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">Flamme jaune = Manque O₂ → Monoxyde CO (toxique)</text>
        </svg>
      );

    case 'systemes-equations':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="35" y1="95" x2="145" y2="25" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="35" y1="25" x2="145" y2="95" stroke="#10b981" strokeWidth="2.5" />
          <circle cx="90" cy="60" r="5" fill="#fbbf24" />
          <text x="90" y="110" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Intersection (x₀ ; y₀)</text>
          <rect x="165" y="16" width="196" height="88" rx="10" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
          <text x="263" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">SYSTÈME D’ÉQUATIONS</text>
          <text x="263" y="60" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">1) Isoler une inconnue (Substitution)</text>
          <text x="263" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">2) Ou multiplier et additionner (Combinaison)</text>
        </svg>
      );

    case 'vecteurs-chasles':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <line x1="30" y1="92" x2="90" y2="30" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="90" y1="30" x2="145" y2="92" stroke="#fbbf24" strokeWidth="2.5" />
          <line x1="30" y1="92" x2="145" y2="92" stroke="#10b981" strokeWidth="3" strokeDasharray="4 3" />
          <text x="50" y="54" className="text-[10px] font-black fill-sky-300"><SvgMathTspans text="AB⃗" baseFontSize={10} /></text>
          <text x="122" y="54" className="text-[10px] font-black fill-amber-300"><SvgMathTspans text="BC⃗" baseFontSize={10} /></text>
          <text x="88" y="108" textAnchor="middle" className="text-[10px] font-black fill-emerald-300"><SvgMathTspans text="AC⃗ = AB⃗ + BC⃗" baseFontSize={10} /></text>
          <rect x="168" y="16" width="194" height="88" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="265" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">CHASLES &amp; PARALLÉLOGRAMME</text>
          <text x="265" y="62" textAnchor="middle" className="text-[10px] font-mono font-bold fill-white"><SvgMathTspans text="AB⃗ + BC⃗ = AC⃗" baseFontSize={10} /></text>
          <text x="265" y="84" textAnchor="middle" className="text-[10px] font-bold fill-sky-300"><SvgMathTspans text="AB⃗ = DC⃗ ⇔ ABCD parallélogramme" baseFontSize={10} /></text>
        </svg>
      );

    case 'angles-polygones':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <circle cx="88" cy="60" r="42" fill="none" stroke="#38bdf8" strokeWidth="2" />
          <polygon points="88,18 124,39 124,81 88,102 52,81 52,39" fill="#a855f7" fillOpacity="0.25" stroke="#c084fc" strokeWidth="2" />
          <rect x="155" y="16" width="208" height="88" rx="10" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
          <text x="259" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">ANGLES &amp; POLYGONES RÉGULIERS</text>
          <text x="259" y="60" textAnchor="middle" className="text-[10px] font-bold fill-white">Quadrilatère inscrit : Â + Ĉ = 180°</text>
          <text x="259" y="84" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-300">Angle centre = 360° ÷ n</text>
        </svg>
      );

    case 'sections-solides':
      return (
        <svg viewBox="0 0 380 120" className="w-full h-auto max-h-32">
          <polygon points="86,18 42,102 130,102" fill="#0284c7" fillOpacity="0.22" stroke="#38bdf8" strokeWidth="2" />
          <ellipse cx="86" cy="60" rx="22" ry="5" fill="#fbbf24" fillOpacity="0.45" stroke="#fbbf24" strokeWidth="2" />
          <rect x="155" y="16" width="208" height="88" rx="10" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="259" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">SECTIONS &amp; TRONC (k, k², k³)</text>
          <text x="259" y="60" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Aire’ = k²·Aire | Volume’ = k³·Volume</text>
          <text x="259" y="84" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300"><SvgMathTspans text="V_tronc = V_grand − V_petit" baseFontSize={10} /></text>
        </svg>
      );
  }
};

function resolveTcIllustrationKey(
  chapterId?: string,
  illustrationKey?: ChapterIllustrationKey
): ChapterIllustrationKey | null {
  if (illustrationKey && illustrationKey.startsWith('tc-')) return illustrationKey;
  if (!chapterId) return null;
  const map: Record<string, ChapterIllustrationKey> = {
    'physTc-cinematique': 'tc-cinematique-frenet',
    'physTc-dynamique': 'tc-dynamique-lorentz',
    'physTc-gravitation': 'tc-gravitation-kepler',
    'physTc-oscillations-energie': 'tc-oscillations-pendule',
    'physTc-dipoles-rc-rl': 'tc-dipoles-rc-rl',
    'physTc-oscillations-rlc': 'tc-resonance-rlc',
    'physTc-ondes-mecaniques': 'tc-ondes-diffraction',
    'physTc-interferences-lumiere': 'tc-young-photoelectrique',
    'physTc-noyau-radioactivite': 'tc-noyau-radioactivite',
    'physTc-reactions-nucleaires': 'tc-fission-fusion',
    'physTc-cinetique-chimique': 'tc-cinetique-chimique',
    'physTc-acides-bases-ph': 'tc-acides-bases-titrage',
    'physTc-alcools-carbonyles': 'tc-alcools-carbonyles',
    'physTc-esterification-saponification': 'tc-esterification-saponification',
    'mathTc-arithmetique': 'tc-arithmetique',
    'mathTc-complexes-algebre': 'tc-complexes-algebre',
    'mathTc-complexes-geometrie': 'tc-complexes-geometrie',
    'mathTc-barycentre-matrices': 'tc-barycentre-vectoriel',
    'mathTc-limites-continuite': 'tc-limites-tvi',
    'mathTc-derivation-primitives': 'tc-derivation-iaf',
    'mathTc-ln-exp-equadiff': 'tc-ln-exp-equadiff',
    'mathTc-suites-recurrence': 'tc-suites-adjacentes',
    'mathTc-calcul-integral': 'tc-calcul-integral',
    'mathTc-denombrement-probas': 'tc-probas-conditionnelles',
    'mathTc-lois-probas-stats': 'tc-binomiale-stats2',
    'mathTc-geometrie-espace': 'tc-espace-analytique',
    'mathTc-isometries-similitudes': 'tc-isometries-similitudes',
    'mathTc-coniques': 'tc-coniques',
  };
  return map[chapterId] || null;
}

function isTcPhysicsKey(key: ChapterIllustrationKey): boolean {
  return (
    key === 'tc-cinematique-frenet' ||
    key === 'tc-dynamique-lorentz' ||
    key === 'tc-gravitation-kepler' ||
    key === 'tc-oscillations-pendule' ||
    key === 'tc-dipoles-rc-rl' ||
    key === 'tc-resonance-rlc' ||
    key === 'tc-ondes-diffraction' ||
    key === 'tc-young-photoelectrique' ||
    key === 'tc-noyau-radioactivite' ||
    key === 'tc-fission-fusion' ||
    key === 'tc-cinetique-chimique' ||
    key === 'tc-acides-bases-titrage' ||
    key === 'tc-alcools-carbonyles' ||
    key === 'tc-esterification-saponification'
  );
}

export const DemonstrationMethodFigure: React.FC<DemonstrationMethodFigureProps> = ({
  chapterId,
  illustrationKey,
  subject,
  compact = false,
  contextHint,
}) => {
  const tcKey = resolveTcIllustrationKey(chapterId, illustrationKey);
  if (tcKey) {
    return isTcPhysicsKey(tcKey) ? (
      <TerminaleCPhysicsDrawing illustrationKey={tcKey as PhysicsIllustrationKey} />
    ) : (
      <TerminaleCMathDrawing illustrationKey={tcKey} />
    );
  }

  const topic = resolveFigureTopic(chapterId, illustrationKey, subject);
  const caption = getTopicCaption(topic);

  return (
    <div
      className={`rounded-2xl bg-slate-950 border border-slate-800 ${
        compact ? 'p-3 space-y-1.5' : 'p-4 space-y-2'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold">
        <span className="text-sky-300 uppercase tracking-wider">
          Figure explicative de la démonstration & des formules
        </span>
        <span className="text-slate-400 font-medium"><FormattedMathText text={caption} /></span>
      </div>
      <div className="flex justify-center">
        <TopicSvgBody topic={topic} contextHint={contextHint} />
      </div>
    </div>
  );
};

export const FormulaVisualSchema: React.FC<{
  chapter: Chapter;
  ruleName?: string;
}> = ({ chapter, ruleName }) => {
  const tcKey = resolveTcIllustrationKey(chapter.id, chapter.illustrationKey);
  if (tcKey) {
    return (
      <div className="space-y-1.5">
        <div className="text-[10px] font-extrabold text-amber-300 uppercase tracking-wider">
          Schéma explicatif du cours{ruleName ? <> · <FormattedMathText text={ruleName} /></> : ''}
        </div>
        {isTcPhysicsKey(tcKey) ? (
          <TerminaleCPhysicsDrawing illustrationKey={tcKey as PhysicsIllustrationKey} />
        ) : (
          <TerminaleCMathDrawing illustrationKey={tcKey} />
        )}
      </div>
    );
  }

  const topic = resolveFigureTopic(chapter.id, chapter.illustrationKey, chapter.subject);
  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-3 space-y-1.5">
      <div className="text-[10px] font-extrabold text-amber-300 uppercase tracking-wider">
        Figure associée{ruleName ? <> · <FormattedMathText text={ruleName} /></> : ''}
      </div>
      <TopicSvgBody topic={topic} contextHint={ruleName} />
    </div>
  );
};

export const ExerciseVisualFigure: React.FC<{
  chapterId?: string;
  illustrationKey?: ChapterIllustrationKey;
  subject?: SubjectId;
  prompt?: string;
  title?: string;
}> = ({ chapterId, illustrationKey, subject, prompt = '', title = '' }) => {
  const tcKey = resolveTcIllustrationKey(chapterId, illustrationKey);
  if (tcKey) {
    return (
      <div className="space-y-1.5">
        <div className="text-[11px] font-extrabold text-sky-300 uppercase tracking-wider">
          📐 Schéma &amp; Figure d’appui Terminale C
        </div>
        {isTcPhysicsKey(tcKey) ? (
          <TerminaleCPhysicsDrawing illustrationKey={tcKey as PhysicsIllustrationKey} />
        ) : (
          <TerminaleCMathDrawing illustrationKey={tcKey} />
        )}
      </div>
    );
  }

  const topic = resolveFigureTopic(chapterId, illustrationKey, subject);
  const caption = getTopicCaption(topic);

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-sky-500/25 p-3.5 space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
        <span className="font-extrabold text-sky-300 uppercase tracking-wider">
          📐 Schéma & Figure d’appui pour résoudre l’exercice
        </span>
        <span className="text-slate-400 font-medium"><FormattedMathText text={caption} /></span>
      </div>
      <TopicSvgBody topic={topic} contextHint={`${title} ${prompt}`} />
    </div>
  );
};
