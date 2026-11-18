import { BepcArchivePaper, BepcCountryId, SubjectId } from '../../types/math';
import {
  ArchivePartSeed,
  BEPC_COUNTRY_CONTEXTS,
  buildArchivePapers,
  CountryContext,
} from '../bepc/bepcArchiveHelpers';
import { generatePhysicsTcExercise } from '../generators/physicsTcGenerators';
import { generateMathTcExercise } from '../generators/mathTcGenerators';
import { withSeed } from '../generators/types';
import { BAC_OFFICIAL_PHYSICS_PAPERS } from './bacOfficialArchivesPhysics';
import { BAC_OFFICIAL_MATHS_PAPERS } from './bacOfficialArchivesMaths';

const COUNTRIES: BepcCountryId[] = ['gabon', 'france', 'senegal', 'cameroun', 'benin', 'togo'];
const YEARS: number[] = Array.from({ length: 37 }, (_, i) => 1990 + i); // 1990 -> 2026

const PHYS_MODULES: {
  partLabel: string;
  points: number;
  chapters: string[];
  themes: string[];
}[] = [
  {
    partLabel: 'EXERCICE 1 · Chimie Générale & Organique',
    points: 4,
    chapters: [
      'physTc-cinetique-chimique',
      'physTc-acides-bases-ph',
      'physTc-alcools-carbonyles',
      'physTc-esterification-saponification',
    ],
    themes: ['Chimie', 'Cinétique / pH / Estérification'],
  },
  {
    partLabel: 'EXERCICE 2 · Électricité (RC, RL, LC & Résonance RLC)',
    points: 5,
    chapters: ['physTc-dipoles-rc-rl', 'physTc-oscillations-rlc'],
    themes: ['Électricité', 'Dipôles RC/RL & Résonance RLC'],
  },
  {
    partLabel: 'EXERCICE 3 · Mécanique-Optique : Ondes, Optique & Nucléaire',
    points: 4,
    chapters: [
      'physTc-ondes-mecaniques',
      'physTc-interferences-lumiere',
      'physTc-noyau-radioactivite',
      'physTc-reactions-nucleaires',
    ],
    themes: ['Mécanique-Optique', 'Ondes / Young / Nucléaire'],
  },
  {
    partLabel: 'PROBLÈME DE SYNTHÈSE · Mécanique, Gravitation & Oscillateurs',
    points: 7,
    chapters: [
      'physTc-cinematique',
      'physTc-dynamique',
      'physTc-gravitation',
      'physTc-oscillations-energie',
    ],
    themes: ['Mécanique', 'Frenet / Lorentz / Kepler / Oscillateurs'],
  },
];

const MATH_MODULES: {
  partLabel: string;
  points: number;
  chapters: string[];
  themes: string[];
}[] = [
  {
    partLabel: 'EXERCICE 1 · Activités Numériques : Arithmétique & Probabilités',
    points: 4,
    chapters: ['mathTc-arithmetique', 'mathTc-denombrement-probas', 'mathTc-lois-probas-stats'],
    themes: ['Activités Numériques', 'Arithmétique / Probabilités'],
  },
  {
    partLabel: 'EXERCICE 2 · Activités Géométriques : Nombres Complexes & Similitudes',
    points: 4,
    chapters: ['mathTc-complexes-algebre', 'mathTc-complexes-geometrie'],
    themes: ['Activités Géométriques', 'Complexes & Similitudes'],
  },
  {
    partLabel: 'EXERCICE 3 · Activités Géométriques : Espace 3D, Isométries & Coniques',
    points: 4,
    chapters: [
      'mathTc-barycentre-matrices',
      'mathTc-geometrie-espace',
      'mathTc-isometries-similitudes',
      'mathTc-coniques',
    ],
    themes: ['Activités Géométriques', 'Espace 3D / Isométries / Coniques'],
  },
  {
    partLabel: 'PROBLÈME D’ANALYSE · Fonctions, Équadiffs, Suites & Intégrales',
    points: 8,
    chapters: [
      'mathTc-limites-continuite',
      'mathTc-derivation-primitives',
      'mathTc-ln-exp-equadiff',
      'mathTc-suites-recurrence',
      'mathTc-calcul-integral',
    ],
    themes: ['Problème d’Analyse', 'Étude de fonction / Équadiff / Intégrale'],
  },
];

interface ChapterExamBlueprint {
  sectionHeader: string;
  givenData: (ctx: CountryContext, city: string, year: number) => string;
  introQuestions: string[];
  applicationLead: string;
  prepSteps: {
    title: string;
    ruleApplied: string;
    mathExpression: string;
    explanation: string;
    subResult?: string;
  }[];
}

const CHAPTER_BLUEPRINTS: Record<string, ChapterExamBlueprint> = {
  // ======================= PHYSIQUE-CHIMIE TERMINALE C =======================
  'physTc-cinetique-chimique': {
    sectionHeader: 'Cinétique chimique et suivi temporel d’une transformation lente',
    givenData: (_ctx, city, year) =>
      `Laboratoire de chimie de ${city} (session ${year}) · On étudie une transformation lente et totale en solution aqueuse à température constante T = 25 °C.`,
    introQuestions: [
      '1) [1,25 pt] Rappeler la définition de la vitesse volumique de formation v(t) d’un produit et celle du temps de demi-réaction t₁/₂.',
      '2) [1,25 pt] Citer deux facteurs cinétiques permettant d’accélérer cette réaction sans modifier l’état final du système.',
    ],
    applicationLead: '3) [1,5 pt · Calcul de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Vitesse volumique & temps de demi-réaction',
        ruleApplied: 'Définition différentielle de cinétique',
        mathExpression: 'v(t) = (1/V) · (dx/dt)  et  x(t₁/₂) = x_max / 2',
        explanation:
          'La vitesse volumique vaut la dérivée temporelle de l’avancement divisée par le volume total V ; t₁/₂ est la durée au bout de laquelle x atteint la moitié de son avancement final.',
      },
      {
        title: 'Question 2 — Facteurs cinétiques',
        ruleApplied: 'Catalyse et activation thermique',
        mathExpression: '↑ Température  ou  ↑ Concentration initiale des réactifs / Catalyseur',
        explanation:
          'Une élévation de température ou l’ajout d’un catalyseur adapté augmente la fréquence des chocs efficaces sans déplacer x_max.',
      },
    ],
  },
  'physTc-acides-bases-ph': {
    sectionHeader: 'Équilibres acido-basiques, pH et dosage pH-métrique',
    givenData: (_ctx, city) =>
      `Contrôle qualité en solution aqueuse à ${city} (25 °C, produit ionique de l’eau Ke = 1,0×10⁻¹⁴, soit pKe = 14,0).`,
    introQuestions: [
      '1) [1,25 pt] Écrire l’équation de la réaction acido-basique étudiée et exprimer la constante d’acidité Ka du couple en fonction du pH.',
      '2) [1,25 pt] Rappeler la relation d’Henderson-Hasselbalch puis indiquer l’espèce prédominante si pH < pKa.',
    ],
    applicationLead: '3) [1,5 pt · Calcul de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Constante d’acidité Ka',
        ruleApplied: 'Loi d’action de masse (25 °C)',
        mathExpression: 'AH + H₂O ⇌ A⁻ + H₃O⁺   |   Ka = [A⁻][H₃O⁺] / [AH]',
        explanation:
          'En prenant le logarithme décimal négatif, on relie directement pH, pKa et le rapport des concentrations.',
      },
      {
        title: 'Question 2 — Diagramme de prédominance',
        ruleApplied: 'Relation pH = pKa + log([A⁻]/[AH])',
        mathExpression: 'Si pH < pKa ⟹ [AH] > [A⁻] (forme acide prédominante)',
        explanation:
          'À la demi-équivalence d’un dosage d’acide faible par base forte, [AH] = [A⁻] donc pH = pKa.',
      },
    ],
  },
  'physTc-alcools-carbonyles': {
    sectionHeader: 'Chimie organique : alcools, oxydation ménagée et composés carbonylés',
    givenData: (_ctx, city) =>
      `Synthèse organique réalisée au lycée scientifique de ${city} · Données : M(C) = 12 g/mol, M(H) = 1 g/mol, M(O) = 16 g/mol.`,
    introQuestions: [
      '1) [1,25 pt] Donner la formule générale d’un monoalcool saturé et distinguer les trois classes d’alcools (primaire, secondaire, tertiaire).',
      '2) [1,25 pt] Indiquer les produits obtenus par oxydation ménagée d’un alcool primaire (en défaut puis en excès d’oxydant) ainsi que le test caractéristique à la DNPH.',
    ],
    applicationLead: '3) [1,5 pt · Calcul de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Classes d’alcools',
        ruleApplied: 'Substitution sur le carbone fonctionnel',
        mathExpression: 'Formule brute : CₙH₂ₙ₊₂O  (M = 14n + 18 g/mol)',
        explanation:
          'Un alcool est primaire, secondaire ou tertiaire selon que le carbone porteur du groupe -OH est lié à 1, 2 ou 3 atomes de carbone.',
      },
      {
        title: 'Question 2 — Oxydation ménagée & Tests',
        ruleApplied: 'Tests DNPH et liqueur de Fehling',
        mathExpression: 'Alcool I → Aldéhyde (DNPH + / Fehling +) → Acide carboxylique',
        explanation:
          'La DNPH donne un précipité jaune-orangé avec tout composé carbonylé (aldéhyde ou cétone) ; la liqueur de Fehling distingue l’aldéhyde (précipité rouge brique).',
      },
    ],
  },
  'physTc-esterification-saponification': {
    sectionHeader: 'Estérification directe, hydrolyse et saponification d’un ester',
    givenData: (_ctx, city) =>
      `Unité de chimie fine à ${city} · On réalise la synthèse puis l’hydrolyse basique (saponification) d’un ester R-COO-R’.`,
    introQuestions: [
      '1) [1,25 pt] Écrire l’équation-bilan générale de l’estérification directe et citer ses trois caractères fondamentaux.',
      '2) [1,25 pt] Comparer cette réaction à la saponification (réaction avec HO⁻ à chaud) en termes de rapidité et de réversibilité.',
    ],
    applicationLead: '3) [1,5 pt · Calcul de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Caractères de l’estérification',
        ruleApplied: 'Équilibre chimique organique',
        mathExpression: 'R-COOH + R’-OH ⇌ R-COOR’ + H₂O (lente, limitée, athermique)',
        explanation:
          'Pour un mélange équimolaire d’acide et d’alcool primaire, la limite d’estérification vaut environ 67 %.',
      },
      {
        title: 'Question 2 — Saponification',
        ruleApplied: 'Hydrolyse basique irréversible',
        mathExpression: 'R-COOR’ + HO⁻ → R-COO⁻ + R’-OH (rapide, totale)',
        explanation:
          'La saponification est une réaction totale et rapide permettant notamment la fabrication industrielle des savons.',
      },
    ],
  },
  'physTc-dipoles-rc-rl': {
    sectionHeader: 'Réponse des dipôles (R,C) et (R,L) à un échelon de tension',
    givenData: (ctx, city) =>
      `Banc d’électronique alimenté sur le réseau ${ctx.utility} à ${city} · On étudie le régime transitoire d’un dipôle soumis à un échelon de tension E.`,
    introQuestions: [
      '1) [1,5 pt] Établir l’équation différentielle vérifiée par u_C(t) (charge d’un condensateur) ou i(t) (établissement du courant dans une bobine).',
      '2) [1,5 pt] En déduire l’expression littérale de la constante de temps τ et vérifier son homogénéité par analyse dimensionnelle.',
    ],
    applicationLead: '3) [2 pts · Application numérique de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Équation différentielle du 1er ordre',
        ruleApplied: 'Loi des mailles + relations u_R = Ri, i = C·du_C/dt ou u_L = L·di/dt',
        mathExpression: 'τ·(du_C/dt) + u_C = E   ou   τ·(di/dt) + i = E/R_tot',
        explanation:
          'La solution générale s’écrit sous forme exponentielle décroissante vers le régime permanent asymptotique.',
      },
      {
        title: 'Question 2 — Constante de temps & Homogénéité',
        ruleApplied: 'Analyse dimensionnelle SI',
        mathExpression: '[RC] = (U/I)·(I·T/U) = T [s]   |   [L/R] = (U·T/I)/(U/I) = T [s]',
        explanation:
          'À t = τ, la grandeur atteint 63 % de sa variation totale ; le régime permanent est atteint à ~99 % pour t = 5τ.',
      },
    ],
  },
  'physTc-oscillations-rlc': {
    sectionHeader: 'Oscillations libres LC et résonance d’intensité en RLC série forcé',
    givenData: (ctx, city) =>
      `Circuit oscillant testé au laboratoire d’électrotechnique (${ctx.utility}, ${city}) alimenté en régime sinusoïdal de pulsation ω = 2πN.`,
    introQuestions: [
      '1) [1,5 pt] Écrire l’expression de l’impédance Z d’un circuit RLC série ainsi que la condition de résonance d’intensité (fréquence N₀, déphasage φ).',
      '2) [1,5 pt] Définir le facteur de qualité Q, la bande passante ΔN et expliquer le phénomène de surtension aux bornes du condensateur.',
    ],
    applicationLead: '3) [2 pts · Application numérique de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Impédance & Résonance',
        ruleApplied: 'Construction de Fresnel en régime sinusoïdal forcé',
        mathExpression: 'Z = √(R² + (Lω - 1/(Cω))²)  |  À la résonance : Lω₀ = 1/(Cω₀) ⟹ Z_min = R',
        explanation:
          'À la résonance d’intensité, le courant est en phase avec la tension excitatrice (φ = 0, cos φ = 1) et I_eff est maximal.',
      },
      {
        title: 'Question 2 — Facteur de qualité & Surtension',
        ruleApplied: 'Sélectivité du résonateur',
        mathExpression: 'Q = (Lω₀)/R = N₀/ΔN  ⟹  U_C0 = Q · U_gén',
        explanation:
          'Si Q > 1, la tension aux bornes du condensateur ou de la bobine peut dépasser la tension d’alimentation (risque de claquage).',
      },
    ],
  },
  'physTc-ondes-mecaniques': {
    sectionHeader: 'Propagation des ondes mécaniques progressives périodiques',
    givenData: (_ctx, city) =>
      `Cuve à ondes / corde vibrante étudiée au laboratoire de physique de ${city}.`,
    introQuestions: [
      '1) [1,25 pt] Définir la double périodicité (temporelle T et spatiale λ) d’une onde progressive sinusoïdale et relier λ, v et T.',
      '2) [1,25 pt] Énoncer la condition d’état vibratoire en phase et en opposition de phase entre deux points M₁ et M₂ distants de d.',
    ],
    applicationLead: '3) [1,5 pt · Calcul de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Double périodicité',
        ruleApplied: 'Relation fondamentale de propagation',
        mathExpression: 'λ = v · T = v / N   et   y_M(t) = y_S(t - d/v)',
        explanation:
          'La longueur d’onde λ est la distance parcourue par l’onde pendant une période T ; le point M reproduit le mouvement de la source avec le retard τ = d/v.',
      },
      {
        title: 'Question 2 — Comparaison de phase',
        ruleApplied: 'Interférence spatiale de phase',
        mathExpression: 'En phase : d = kλ (k ∈ ℕ)  |  Opposition de phase : d = (k + ½)λ',
        explanation:
          'Le déphasage vaut Δφ = 2π d / λ.',
      },
    ],
  },
  'physTc-interferences-lumiere': {
    sectionHeader: 'Interférences lumineuses (fentes d’Young) et effet photoélectrique',
    givenData: (_ctx, city) =>
      `Banc d’optique physique de ${city} · Constante de Planck h = 6,626×10⁻³⁴ J·s ; célérité c = 3,00×10⁸ m/s ; charge élémentaire e = 1,60×10⁻¹⁹ C.`,
    introQuestions: [
      '1) [1,25 pt] Dans l’expérience des fentes d’Young (écart a, distance écran D), exprimer la différence de marche δ = a·x / D et la position des franges brillantes.',
      '2) [1,25 pt] Énoncer la condition d’extraction d’un électron par effet photoélectrique et écrire le bilan énergétique d’Einstein.',
    ],
    applicationLead: '3) [1,5 pt · Calcul de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Interfrange d’Young',
        ruleApplied: 'Superposition cohérente de deux ondes',
        mathExpression: 'δ = kλ (brillante) ⟹ i = λ D / a',
        explanation:
          'L’interfrange i est la distance séparant deux franges brillantes consécutives (indépendant de l’ordre k).',
      },
      {
        title: 'Question 2 — Bilan d’Einstein',
        ruleApplied: 'Quantification du photon E = hν',
        mathExpression: 'E_photon = hν = W₀ + Ec_max   (condition : ν ≥ ν₀ ou λ ≤ λ₀)',
        explanation:
          'Si l’énergie du photon dépasse le travail d’extraction W₀ = hν₀, l’excédent est cédé sous forme d’énergie cinétique maximale Ec_max = e U₀.',
      },
    ],
  },
  'physTc-noyau-radioactivite': {
    sectionHeader: 'Noyau atomique, défaut de masse et loi de décroissance radioactive',
    givenData: (_ctx, city) =>
      `Unité de médecine nucléaire / géochronologie de ${city} · 1 u = 931,5 MeV/c² ; N_A = 6,02×10²³ mol⁻¹.`,
    introQuestions: [
      '1) [1,25 pt] Définir le défaut de masse Δm d’un noyau (Z, A) et écrire l’expression de son énergie de liaison par nucléon E_l / A.',
      '2) [1,25 pt] Établir la relation liant la constante radioactive λ et la période (demi-vie) T₁/₂ à partir de la loi N(t) = N₀ e^(-λt).',
    ],
    applicationLead: '3) [1,5 pt · Calcul de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Cohésion du noyau',
        ruleApplied: 'Équivalence masse-énergie ΔE = Δm·c²',
        mathExpression: 'Δm = Z·m_p + (A - Z)·m_n - m_noyau  |  E_l = Δm·c²',
        explanation:
          'Plus l’énergie de liaison par nucléon E_l / A est grande, plus le noyau est stable (maximum autour du fer ⁵⁶Fe).',
      },
      {
        title: 'Question 2 — Demi-vie radioactive',
        ruleApplied: 'Définition N(T₁/₂) = N₀ / 2',
        mathExpression: 'e^(-λ T₁/₂) = ½  ⟹  λ · T₁/₂ = ln 2',
        explanation:
          'L’activité A(t) = λ N(t) suit exactement la même loi exponentielle décroissante.',
      },
    ],
  },
  'physTc-reactions-nucleaires': {
    sectionHeader: 'Réactions nucléaires provoquées : fission, fusion et bilan d’énergie',
    givenData: (_ctx, city) =>
      `Étude énergétique nucléaire réalisée à l’institut de ${city} · Lois de conservation de Soddy et bilan relativiste.`,
    introQuestions: [
      '1) [1,25 pt] Énoncer les deux lois de conservation utilisées pour équilibrer une équation de réaction nucléaire (fission ou fusion).',
      '2) [1,25 pt] Exprimer l’énergie libérée |ΔE| à partir des masses des réactifs et des produits, ou à partir des énergies de liaison.',
    ],
    applicationLead: '3) [1,5 pt · Calcul de contrôle]',
    prepSteps: [
      {
        title: 'Question 1 — Lois de Soddy',
        ruleApplied: 'Conservation du nombre de nucléons et de la charge',
        mathExpression: '∑ A_réactifs = ∑ A_produits   et   ∑ Z_réactifs = ∑ Z_produits',
        explanation:
          'Ces deux invariants permettent d’identifier immédiatement toute particule émise (neutron, électron, positon, hélium).',
      },
      {
        title: 'Question 2 — Bilan énergétique nucléaire',
        ruleApplied: 'ΔE = (∑ m_produits - ∑ m_réactifs)·c²',
        mathExpression: 'E_libérée = (∑ m_init - ∑ m_fin)·c² = ∑ E_l(produits) - ∑ E_l(réactifs)',
        explanation:
          'Une réaction exoénergétique s’accompagne toujours d’une perte de masse globale transformée en énergie cinétique et rayonnement γ.',
      },
    ],
  },
  'physTc-cinematique': {
    sectionHeader: 'Cinématique du point : repères cartésien et de Frenet',
    givenData: (ctx, city, year) =>
      `Problème — Partie A · Étude d’un mobile évoluant sur un axe / circuit expérimental à ${city} (${ctx.short}, session ${year}).`,
    introQuestions: [
      '1) [2 pts] Définir les vecteurs vitesse v⃗ et accélération a⃗ dans le repère de Frenet (u⃗_T, u⃗_N) et préciser la direction de chaque composante.',
      '2) [2 pts] Dans le cas d’un mouvement rectiligne uniformément varié (MRUV), rappeler les équations horaires x(t), v(t) et la relation indépendante du temps.',
    ],
    applicationLead: '3) [3 pts · Partie B — Application numérique de synthèse]',
    prepSteps: [
      {
        title: 'Question 1 — Repère de Frenet',
        ruleApplied: 'Base locale liée à la trajectoire',
        mathExpression: 'a⃗ = a_T u⃗_T + a_N u⃗_N   avec   a_T = dv/dt   et   a_N = v² / R',
        explanation:
          'a_T mesure la variation de la norme de la vitesse ; a_N (centripète) mesure le changement de direction de v⃗.',
      },
      {
        title: 'Question 2 — Lois horaires du MRUV',
        ruleApplied: 'Intégration d’une accélération constante a',
        mathExpression: 'v(t) = at + v₀  |  x(t) = ½at² + v₀t + x₀  |  v² - v₀² = 2a(x - x₀)',
        explanation:
          'La relation sans le temps s’obtient en éliminant t entre les deux premières équations horaires.',
      },
    ],
  },
  'physTc-dynamique': {
    sectionHeader: 'Dynamique du solide : théorème du centre d’inertie, projectiles et force de Lorentz',
    givenData: (_ctx, city, year) =>
      `Problème — Partie A · Étude mécanique / électromagnétique menée au centre d’essais de ${city} (session ${year}), g = 10 m/s².`,
    introQuestions: [
      '1) [2 pts] Énoncer le théorème du centre d’inertie (2ème loi de Newton) dans un référentiel galiléen et dresser le bilan des forces extérieures.',
      '2) [2 pts] Établir les équations différentielles du mouvement projetées sur les axes du repère choisi (ou le rayon de courbure R = mv/(|q|B) en champ magnétique uniforme).',
    ],
    applicationLead: '3) [3 pts · Partie B — Résolution quantitative finale]',
    prepSteps: [
      {
        title: 'Question 1 — Théorème du centre d’inertie',
        ruleApplied: '∑ F⃗_ext = m a⃗_G',
        mathExpression: 'Bilan : Poids P⃗ = m g⃗, Réaction R⃗ (ou Force de Lorentz F⃗ = q v⃗ ∧ B⃗)',
        explanation:
          'Le référentiel terrestre est supposé galiléen sur la durée brève de l’expérience.',
      },
      {
        title: 'Question 2 — Projections & Trajectoire',
        ruleApplied: 'Intégration des composantes de a⃗',
        mathExpression: 'Projectile : trajectoire parabolique y(x)  |  Lorentz : mouvement circulaire uniforme',
        explanation:
          'En champ magnétique B⃗ orthogonal à v⃗₀, le travail de F⃗ est nul donc ||v⃗|| reste constante.',
      },
    ],
  },
  'physTc-gravitation': {
    sectionHeader: 'Champ de gravitation universelle, satellites et 3ème loi de Kepler',
    givenData: (_ctx, city, year) =>
      `Problème — Partie A · Observation orbitale suivie depuis la station de ${city} (session ${year}) · Constante G = 6,67×10⁻¹¹ SI.`,
    introQuestions: [
      '1) [2 pts] Montrer qu’un satellite en orbite circulaire de rayon r autour d’un astre de masse M possède un mouvement uniforme et exprimer sa vitesse v(r).',
      '2) [2 pts] En déduire la 3ème loi de Kepler reliant la période de révolution T et le rayon orbital r.',
    ],
    applicationLead: '3) [3 pts · Partie B — Détermination numérique orbitale]',
    prepSteps: [
      {
        title: 'Question 1 — Vitesse orbitale circulaire',
        ruleApplied: 'Projection dans Frenet de F⃗_G = m a⃗',
        mathExpression: 'G M m / r² = m v² / r  ⟹  v = √(G M / r)',
        explanation:
          'La force gravitationnelle est purement normale : a_T = 0, donc la vitesse garde une valeur constante sur l’orbite circulaire.',
      },
      {
        title: 'Question 2 — Troisième loi de Kepler',
        ruleApplied: 'T = 2π r / v',
        mathExpression: 'T² / r³ = 4π² / (G M) = constante',
        explanation:
          'Le rapport T²/r³ ne dépend que de la masse M de l’astre attracteur, pas de la masse m du satellite.',
      },
    ],
  },
  'physTc-oscillations-energie': {
    sectionHeader: 'Oscillateurs mécaniques harmoniques (pendule élastique / pesant) et conservation énergétique',
    givenData: (_ctx, city, year) =>
      `Problème — Partie A · Étude d’un système oscillant non amorti réalisée à ${city} (session ${year}).`,
    introQuestions: [
      '1) [2 pts] Établir l’équation différentielle du mouvement à l’aide de la 2ème loi de Newton (ou par dérivation de l’énergie mécanique constante).',
      '2) [2 pts] Donner l’expression de la pulsation propre ω₀, de la période propre T₀ et montrer que l’énergie mécanique totale E_m se conserve.',
    ],
    applicationLead: '3) [3 pts · Partie B — Calcul d’oscillation finale]',
    prepSteps: [
      {
        title: 'Question 1 — Équation différentielle harmonique',
        ruleApplied: 'Système conservatif (frottements négligés)',
        mathExpression: 'ẍ + ω₀² x = 0   avec   ω₀² = k / m  (ou g / ℓ pour un pendule simple)',
        explanation:
          'La solution est sinusoïdale : x(t) = X_m cos(ω₀ t + φ).',
      },
      {
        title: 'Question 2 — Période propre & Énergie mécanique',
        ruleApplied: 'T₀ = 2π / ω₀ et E_m = Ec + Ep',
        mathExpression: 'E_m = ½ m v² + ½ k x² = ½ k X_m² = ½ m v_max²',
        explanation:
          'L’énergie oscille sans perte entre forme cinétique (maximale à x = 0) et forme potentielle (maximale aux élongations extrêmes ±X_m).',
      },
    ],
  },

  // ======================= MATHÉMATIQUES TERMINALE C =======================
  'mathTc-arithmetique': {
    sectionHeader: 'Activités Numériques — Divisibilité dans ℤ, congruences, Bézout et Gauss',
    givenData: (_ctx, city, year) =>
      `Sujet d’arithmétique (centre de ${city}, session ${year}) · On travaille dans l’anneau ℤ des entiers relatifs.`,
    introQuestions: [
      '1) [1,25 pt] Énoncer le théorème de Bézout et le lemme de Gauss pour deux entiers a et b.',
      '2) [1,25 pt] Rappeler la méthode générale de résolution d’une équation diophantienne ax + by = c à partir d’une solution particulière.',
    ],
    applicationLead: '3) [1,5 pt · Résolution numérique demandée]',
    prepSteps: [
      {
        title: 'Question 1 — Théorèmes de Bézout et Gauss',
        ruleApplied: 'Structure arithmétique de ℤ',
        mathExpression: 'PGCD(a,b)=1 ⟺ ∃(u,v)∈ℤ², au+bv=1  |  a|bc et PGCD(a,b)=1 ⟹ a|c',
        explanation:
          'Ces deux théorèmes constituent le socle de toute résolution diophantienne et d’inversion modulaire.',
      },
      {
        title: 'Question 2 — Équation ax + by = c',
        ruleApplied: 'Condition c divisible par PGCD(a, b)',
        mathExpression: 'a(x - x₀) = -b(y - y₀) ⟹ x = x₀ + k·b’ ,  y = y₀ - k·a’ (k ∈ ℤ)',
        explanation:
          'Après simplification par d = PGCD(a, b), on applique le théorème de Gauss.',
      },
    ],
  },
  'mathTc-denombrement-probas': {
    sectionHeader: 'Activités Numériques — Dénombrement et probabilités conditionnelles',
    givenData: (_ctx, city, year) =>
      `Étude probabiliste contextualisée (académie de ${city}, session ${year}) sur une expérience aléatoire finie en situation d’équiprobabilité.`,
    introQuestions: [
      '1) [1,25 pt] Distinguer le choix successif avec ordre (arrangement / p-liste) d’un choix simultané sans ordre (combinaison C_n^p).',
      '2) [1,25 pt] Écrire la formule des probabilités composées et la formule des probabilités totales pour une partition {A, Ā}.',
    ],
    applicationLead: '3) [1,5 pt · Calcul de probabilité demandé]',
    prepSteps: [
      {
        title: 'Question 1 — Outils de dénombrement',
        ruleApplied: 'Tirages successifs vs simultanés',
        mathExpression: 'A_n^p = n! / (n - p)!   |   C_n^p = n! / (p! (n - p)!)',
        explanation:
          'On utilise C_n^p lorsque les objets sont tirés simultanément ou sans ordre, et A_n^p pour un tirage ordonné sans remise.',
      },
      {
        title: 'Question 2 — Conditionnement & Probabilités totales',
        ruleApplied: 'Arbre pondéré',
        mathExpression: 'P(A ∩ B) = P(A)·P_A(B)   et   P(B) = P(A∩B) + P(Ā∩B)',
        explanation:
          'La formule de Bayes permet ensuite d’inverser le conditionnement : P_B(A) = P(A∩B)/P(B).',
      },
    ],
  },
  'mathTc-lois-probas-stats': {
    sectionHeader: 'Activités Numériques — Variables aléatoires, loi binomiale B(n, p) et statistiques doubles',
    givenData: (_ctx, city, year) =>
      `Étude statistique et probabiliste (${city}, session ${year}) portant sur la répétition d’épreuves de Bernoulli indépendantes.`,
    introQuestions: [
      '1) [1,25 pt] Rappeler les conditions d’application d’une loi binomiale X ~ B(n, p) ainsi que l’expression de P(X = k).',
      '2) [1,25 pt] Donner les formules de l’espérance E(X) et de la variance V(X) (et, en statistique double, la droite de régression passant par le point moyen G).',
    ],
    applicationLead: '3) [1,5 pt · Calcul numérique demandé]',
    prepSteps: [
      {
        title: 'Question 1 — Loi binomiale B(n, p)',
        ruleApplied: 'Schéma de Bernoulli à n répétitions indépendantes',
        mathExpression: 'P(X = k) = C_n^k · p^k · (1 - p)^(n - k)   pour k ∈ {0, ..., n}',
        explanation:
          'Chaque épreuve n’a que deux issues (succès de probabilité p, échec 1 - p).',
      },
      {
        title: 'Question 2 — Paramètres de position & dispersion',
        ruleApplied: 'Moments d’une loi binomiale',
        mathExpression: 'E(X) = n·p   |   V(X) = n·p·(1 - p)   |   σ(X) = √V(X)',
        explanation:
          'En statistique à deux variables, la droite de régression de y en x passe toujours par G(x̄, ȳ) avec a = Cov(X,Y)/V(X).',
      },
    ],
  },
  'mathTc-complexes-algebre': {
    sectionHeader: 'Activités Géométriques — Nombres complexes : écriture algébrique, module et exponentielle',
    givenData: (_ctx, city, year) =>
      `Le plan complexe est muni d’un repère orthonormé direct (O ; u⃗, v⃗) (${city}, session ${year}).`,
    introQuestions: [
      '1) [1,25 pt] Rappeler le passage entre forme algébrique z = a + ib et forme exponentielle z = r e^(iθ).',
      '2) [1,25 pt] Énoncer la formule de Moivre (cos θ + i sin θ)^n et les formules d’Euler pour linéariser cosⁿ θ ou sinⁿ θ.',
    ],
    applicationLead: '3) [1,5 pt · Calcul complexe demandé]',
    prepSteps: [
      {
        title: 'Question 1 — Module et argument',
        ruleApplied: 'Forme trigonométrique et exponentielle',
        mathExpression: 'r = |z| = √(a² + b²)  ,  cos θ = a/r , sin θ = b/r  ⟹  z = r e^(iθ)',
        explanation:
          'Le conjugué z̄ = a - ib vérifie z · z̄ = |z|² et arg(z̄) ≡ -arg(z) [2π].',
      },
      {
        title: 'Question 2 — Formules de Moivre & Euler',
        ruleApplied: 'Linéarisation et puissances',
        mathExpression: 'cos θ = (e^(iθ) + e^(-iθ))/2   |   sin θ = (e^(iθ) - e^(-iθ))/(2i)',
        explanation:
          'La formule de Moivre ramène le calcul de z^n à une élévation de module et une multiplication d’argument.',
      },
    ],
  },
  'mathTc-complexes-geometrie': {
    sectionHeader: 'Activités Géométriques — Nombres complexes, lieux de points et similitudes planes directes',
    givenData: (_ctx, city, year) =>
      `Dans le plan complexe orienté (O ; u⃗, v⃗) (${city}, session ${year}), on associe à chaque point M son affixe z ∈ ℂ.`,
    introQuestions: [
      '1) [1,25 pt] Interpréter géométriquement le module et un argument du quotient (z_C - z_A) / (z_B - z_A).',
      '2) [1,25 pt] Caractériser une similitude directe s : z’ = a z + b (avec a ∈ ℂ*, a ≠ 1) par son centre Ω, son rapport k et son angle θ.',
    ],
    applicationLead: '3) [1,5 pt · Détermination géométrique demandée]',
    prepSteps: [
      {
        title: 'Question 1 — Interprétation métrique & angulaire',
        ruleApplied: 'Affixe d’un vecteur AB⃗ : z_B - z_A',
        mathExpression: '|(z_C-z_A)/(z_B-z_A)| = AC/AB   |   arg((z_C-z_A)/(z_B-z_A)) ≡ (AB⃗, AC⃗) [2π]',
        explanation:
          'Si le quotient vaut ±i, le triangle ABC est rectangle isocèle en A ; s’il vaut e^(±iπ/3), il est équilatéral.',
      },
      {
        title: 'Question 2 — Éléments d’une similitude directe',
        ruleApplied: 'Point invariant z_Ω = b / (1 - a)',
        mathExpression: 'k = |a|   |   θ ≡ arg(a) [2π]   |   z_Ω = b / (1 - a)',
        explanation:
          'Lorsque |a| = 1 et a ≠ 1, s est une rotation pure d’angle arg(a).',
      },
    ],
  },
  'mathTc-barycentre-matrices': {
    sectionHeader: 'Activités Géométriques & Algèbre Linéaire — Barycentres, lignes de niveau et calcul matriciel',
    givenData: (_ctx, city, year) =>
      `Problème géométrique et matriciel (${city}, session ${year}) sur un système de points pondérés {(A, α), (B, β), (C, γ)}.`,
    introQuestions: [
      '1) [1,25 pt] Donner la condition d’existence du barycentre G d’un système de points pondérés et l’expression de réduction de ∑ α_i MA⃗_i.',
      '2) [1,25 pt] Identifier la nature géométrique des lignes de niveau MA² + MB² = k et ||α MA⃗ + β MB⃗|| = r.',
    ],
    applicationLead: '3) [1,5 pt · Calcul vectoriel / matriciel demandé]',
    prepSteps: [
      {
        title: 'Question 1 — Réduction de sommes vectorielles',
        ruleApplied: 'Relation de Chasles au barycentre G',
        mathExpression: 'Si s = ∑ α_i ≠ 0 :  ∑ α_i MA⃗_i = s · MG⃗',
        explanation:
          'Si la somme des coefficients est nulle, la somme vectorielle est un vecteur constant indépendant de M.',
      },
      {
        title: 'Question 2 — Lignes de niveau & Matrices',
        ruleApplied: 'Théorème de la médiane / Inversibilité det(A) ≠ 0',
        mathExpression: 'MA² + MB² = 2 MI² + ½ AB²   |   det(A) ≠ 0 ⟹ A⁻¹ = (1/det A)·com(A)ᵀ',
        explanation:
          'Le théorème de la médiane ramène MA² + MB² = k à un cercle de centre I = mil(AB).',
      },
    ],
  },
  'mathTc-geometrie-espace': {
    sectionHeader: 'Activités Géométriques — Géométrie analytique dans l’espace (produits scalaire & vectoriel)',
    givenData: (_ctx, city, year) =>
      `L’espace est rapporté à un repère orthonormé direct (O ; i⃗, j⃗, k⃗) (${city}, session ${year}).`,
    introQuestions: [
      '1) [1,25 pt] Rappeler la formule de la distance d’un point A(x_A, y_A, z_A) à un plan P d’équation ax + by + cz + d = 0.',
      '2) [1,25 pt] Exprimer l’aire d’un triangle ABC et le volume d’un tétraèdre ABCD à l’aide du produit vectoriel u⃗ ∧ v⃗ et du produit mixte.',
    ],
    applicationLead: '3) [1,5 pt · Calcul spatial demandé]',
    prepSteps: [
      {
        title: 'Question 1 — Vecteur normal et distance point-plan',
        ruleApplied: 'Orthogonalité dans ℝ³',
        mathExpression: 'n⃗(a,b,c) ⊥ P   |   d(A, P) = |ax_A + by_A + cz_A + d| / √(a² + b² + c²)',
        explanation:
          'Si n⃗·u⃗ = 0 et A ∉ P, la droite de vecteur directeur u⃗ est strictement parallèle au plan P.',
      },
      {
        title: 'Question 2 — Aires et volumes par produit vectoriel',
        ruleApplied: 'Norme de AB⃗ ∧ AC⃗',
        mathExpression: 'Aire(ABC) = ½ ||AB⃗ ∧ AC⃗||   |   Vol(ABCD) = (1/6) |(AB⃗ ∧ AC⃗) · AD⃗|',
        explanation:
          'Le produit vectoriel fournit immédiatement un vecteur normal au plan (ABC).',
      },
    ],
  },
  'mathTc-isometries-similitudes': {
    sectionHeader: 'Activités Géométriques — Isométries du plan, déplacements, antidéplacements et similitudes',
    givenData: (_ctx, city, year) =>
      `Étude des transformations affines du plan euclidien orienté (${city}, session ${year}).`,
    introQuestions: [
      '1) [1,25 pt] Rappeler la classification des isométries du plan selon le nombre de points invariants et l’orientation (déplacement vs antidéplacement).',
      '2) [1,25 pt] Préciser la nature de la composée de deux réflexions d’axes D₁ et D₂ selon que D₁ ∥ D₂ ou D₁ ∩ D₂ = {O}.',
    ],
    applicationLead: '3) [1,5 pt · Détermination caractéristique demandée]',
    prepSteps: [
      {
        title: 'Question 1 — Déplacements et antidéplacements',
        ruleApplied: 'Conservation des distances et des angles orientés (ou opposés)',
        mathExpression: 'Déplacements : id, translations, rotations  |  Antidéplacements : réflexions, symétries glissées',
        explanation:
          'Toute similitude de rapport k se décompose en la composée commutative d’une homothétie de rapport k et d’une isométrie.',
      },
      {
        title: 'Question 2 — Composée de deux réflexions',
        ruleApplied: 'Décomposition canonique des déplacements',
        mathExpression: 'D₁ ∥ D₂ ⟹ Translation de vecteur 2 u⃗  |  D₁ ∩ D₂ = {O} ⟹ Rotation(O, 2θ)',
        explanation:
          'L’angle de la rotation vaut le double de l’angle orienté entre les droites D₁ et D₂.',
      },
    ],
  },
  'mathTc-coniques': {
    sectionHeader: 'Activités Géométriques — Coniques (parabole, ellipse, hyperbole) : foyer, directrice et excentricité',
    givenData: (_ctx, city, year) =>
      `Étude d’une courbe du second degré dans le repère orthonormé (O ; i⃗, j⃗) (${city}, session ${year}).`,
    introQuestions: [
      '1) [1,25 pt] Donner la définition monofocale d’une conique de foyer F, de directrice D et d’excentricité e > 0, puis classer selon e.',
      '2) [1,25 pt] Pour une ellipse centrée en O : x²/a² + y²/b² = 1 (a > b), exprimer la demi-distance focale c, l’excentricité e et les foyers F, F’.',
    ],
    applicationLead: '3) [1,5 pt · Calcul caractéristique de la conique]',
    prepSteps: [
      {
        title: 'Question 1 — Définition foyer-directrice',
        ruleApplied: 'MF = e · d(M, D)',
        mathExpression: 'e < 1 : Ellipse  |  e = 1 : Parabole  |  e > 1 : Hyperbole',
        explanation:
          'L’excentricité e mesure l’aplatissement ou l’ouverture de la conique.',
      },
      {
        title: 'Question 2 — Équation réduite',
        ruleApplied: 'Relations c² = a² - b² (ellipse) et c² = a² + b² (hyperbole)',
        mathExpression: 'Ellipse : e = c/a < 1   |   Parabole : y² = 2px  ou  x² = 2py',
        explanation:
          'Les foyers d’une ellipse sont situés sur le grand axe à distance c du centre.',
      },
    ],
  },
  'mathTc-limites-continuite': {
    sectionHeader: 'Problème d’Analyse (Partie A) — Limites, asymptotes et théorème des valeurs intermédiaires',
    givenData: (_ctx, city, year) =>
      `Problème d’analyse réel (${city}, session ${year}) · Étude locale et asymptotique d’une fonction numérique f sur son domaine D_f.`,
    introQuestions: [
      '1) [2 pts] Rappeler les quatre formes indéterminées usuelles ainsi que le théorème des gendarmes et les croissances comparées (ln x / x^n et e^x / x^n).',
      '2) [2 pts] Énoncer le théorème des valeurs intermédiaires (corollaire de bijection strictement monotone) garantissant l’existence et l’unicité d’une solution α.',
    ],
    applicationLead: '3) [4 pts · Partie B — Calcul de limite / valeur critique demandé]',
    prepSteps: [
      {
        title: 'Question 1 — Levée d’indétermination & Asymptotes',
        ruleApplied: 'Croissances comparées et factorisation du terme dominant',
        mathExpression: 'lim_(+∞) (e^x / x^n) = +∞   |   lim_(+∞) (ln x / x^n) = 0',
        explanation:
          'Si lim_(±∞) [f(x) - (ax + b)] = 0, la droite y = ax + b est asymptote oblique à C_f.',
      },
      {
        title: 'Question 2 — Théorème de la bijection',
        ruleApplied: 'Continuité + stricte monotonie',
        mathExpression: 'f continue et strictement monotone sur [a, b] avec f(a)·f(b) < 0 ⟹ ∃! α ∈ ]a, b[, f(α) = 0',
        explanation:
          'L’encadrement de α se précise ensuite par balayage ou dichotomie.',
      },
    ],
  },
  'mathTc-derivation-primitives': {
    sectionHeader: 'Problème d’Analyse — Dérivation, convexité, inégalité des accroissements finis et primitives',
    givenData: (_ctx, city, year) =>
      `Problème d’analyse (${city}, session ${year}) · Étude différentielle d’une fonction dérivable et recherche de primitives.`,
    introQuestions: [
      '1) [2 pts] Énoncer l’inégalité des accroissements finis (IAF) pour une fonction dérivable telle que m ≤ f’(x) ≤ M sur [a, b].',
      '2) [2 pts] Donner le lien entre le signe de la dérivée seconde f’’(x), la convexité de C_f et l’existence d’un point d’inflexion.',
    ],
    applicationLead: '3) [4 pts · Partie B — Calcul de dérivée / extremum / primitive]',
    prepSteps: [
      {
        title: 'Question 1 — Inégalité des accroissements finis',
        ruleApplied: 'Majoration des accroissements |f(b) - f(a)|',
        mathExpression: '|f’(x)| ≤ M sur I ⟹ ∀(x, y) ∈ I², |f(x) - f(y)| ≤ M |x - y|',
        explanation:
          'L’IAF permet notamment de montrer qu’une suite définie par u_{n+1} = f(u_n) est convergente.',
      },
      {
        title: 'Question 2 — Convexité & Primitives',
        ruleApplied: 'f’’ ≥ 0 ⟹ convexe ; Point d’inflexion où f’’ s’annule en changeant de signe',
        mathExpression: '(u^n)’ = n u’ u^(n-1)  ⟹  ∫ u’ u^n = u^(n+1)/(n+1)',
        explanation:
          'La recherche d’une primitive passe par la reconnaissance d’une forme u’/u, u’e^u ou u’u^n.',
      },
    ],
  },
  'mathTc-ln-exp-equadiff': {
    sectionHeader: 'Problème d’Analyse — Fonctions ln et exp et équations différentielles linéaires',
    givenData: (_ctx, city, year) =>
      `Grand problème d’analyse BAC Série C (${city}, session ${year}) mêlant exponentielle/logarithme et équation différentielle.`,
    introQuestions: [
      '1) [2 pts] Résoudre sur ℝ l’équation différentielle homogène y’ + a y = 0 (et préciser la méthode de la solution particulière constante pour y’ + ay = b).',
      '2) [2 pts] Rappeler les limites remarquables de ln x et e^x en 0 et +∞ ainsi que la dérivée de ln|u(x)| et e^(u(x)).',
    ],
    applicationLead: '3) [4 pts · Partie B — Résolution avec condition initiale / calcul final]',
    prepSteps: [
      {
        title: 'Question 1 — Équations différentielles du 1er et 2nd ordre',
        ruleApplied: 'Linéarité des solutions',
        mathExpression: 'y’ + ay = b ⟹ y(x) = C e^(-ax) + b/a   (C ∈ ℝ fixé par y(x₀) = y₀)',
        explanation:
          'Pour le second ordre y’’ + ω² y = 0, les solutions sont y(x) = A cos(ωx) + B sin(ωx).',
      },
      {
        title: 'Question 2 — Propriétés analytiques de ln et exp',
        ruleApplied: 'Fonctions réciproques l’une de l’autre',
        mathExpression: '(ln u)’ = u’/u   |   (e^u)’ = u’ e^u   |   lim_(x→0+) x ln x = 0',
        explanation:
          'On vérifie systématiquement la positivité de l’argument sous le logarithme sur le domaine étudié.',
      },
    ],
  },
  'mathTc-suites-recurrence': {
    sectionHeader: 'Problème d’Analyse — Suites numériques, récurrence, suites adjacentes et convergence',
    givenData: (_ctx, city, year) =>
      `Problème sur les suites (${city}, session ${year}) · On étudie une suite récurrente (u_n) et une suite auxiliaire associée (v_n).`,
    introQuestions: [
      '1) [2 pts] Rappeler les trois étapes rigoureuses d’un raisonnement par récurrence et le théorème de convergence monotone.',
      '2) [2 pts] Donner la définition de deux suites adjacentes (u_n) et (v_n) et la conséquence sur leurs limites.',
    ],
    applicationLead: '3) [4 pts · Partie B — Calcul explicite / limite finale]',
    prepSteps: [
      {
        title: 'Question 1 — Récurrence & Monotonie',
        ruleApplied: 'Initialisation, Hérédité, Conclusion',
        mathExpression: 'Croissante et majorée (ou décroissante et minorée) ⟹ Convergente vers ℓ ∈ ℝ',
        explanation:
          'Si f est continue en ℓ et u_{n+1} = f(u_n), alors la limite ℓ vérifie l’équation de point fixe f(ℓ) = ℓ.',
      },
      {
        title: 'Question 2 — Suites adjacentes & Suite auxiliaire',
        ruleApplied: 'u_n croissante, v_n décroissante, lim(v_n - u_n) = 0',
        mathExpression: 'Deux suites adjacentes convergent vers la même limite ℓ et ∀n, u_n ≤ ℓ ≤ v_n',
        explanation:
          'Pour une suite arithmético-géométrique, la suite auxiliaire v_n = u_n - α est géométrique.',
      },
    ],
  },
  'mathTc-calcul-integral': {
    sectionHeader: 'Problème d’Analyse — Calcul intégral, intégration par parties et calcul d’aires planes',
    givenData: (_ctx, city, year) =>
      `Problème de synthèse d’analyse intégrale (${city}, session ${year}) dans un repère orthogonal d’unité graphique précisée.`,
    introQuestions: [
      '1) [2 pts] Énoncer la formule d’intégration par parties (IPP) sur [a, b] pour deux fonctions u, v de classe C¹.',
      '2) [2 pts] Exprimer l’aire A du domaine délimité par C_f, l’axe des abscisses et les droites x = a, x = b (a < b) lorsque f garde un signe constant.',
    ],
    applicationLead: '3) [4 pts · Partie B — Évaluation exacte de l’intégrale]',
    prepSteps: [
      {
        title: 'Question 1 — Intégration par parties (IPP)',
        ruleApplied: 'Intégration de (uv)’ = u’v + uv’',
        mathExpression: '∫_a^b u(t) v’(t) dt = [u(t) v(t)]_a^b - ∫_a^b u’(t) v(t) dt',
        explanation:
          'On choisit u de façon à simplifier u’ (souvent un polynôme ou ln x) et v’ facile à primitiver (e^x, cos x, x^n).',
      },
      {
        title: 'Question 2 — Relation entre intégrale et aire',
        ruleApplied: 'Positivité et linéarité de l’intégrale',
        mathExpression: 'A = (∫_a^b |f(x)| dx) × (unité d’aire)   |   μ = 1/(b - a) ∫_a^b f(x) dx',
        explanation:
          'La valeur moyenne μ vérifie m ≤ μ ≤ M lorsque m ≤ f ≤ M sur [a, b].',
      },
    ],
  },
};

function buildPartsForPaper(
  subject: SubjectId,
  year: number,
  countryId: BepcCountryId,
  countryIdx: number
): ArchivePartSeed[] {
  const modules = subject === 'physique' ? PHYS_MODULES : MATH_MODULES;
  const ctx = BEPC_COUNTRY_CONTEXTS[countryId];
  const city = ctx.cities[(year + countryIdx) % ctx.cities.length];

  return modules.map((mod, pIdx) => {
    const chId = mod.chapters[(year + countryIdx + pIdx) % mod.chapters.length];
    const diff = pIdx === 3 ? 4 : pIdx === 2 ? 3 : ((pIdx + 1) as 1 | 2 | 3 | 4);
    const seed = `bac-grid:${subject}:${year}:${countryId}:part${pIdx}`;

    const gen = withSeed(seed, () =>
      subject === 'physique'
        ? generatePhysicsTcExercise(chId, diff, year + countryIdx + pIdx)
        : generateMathTcExercise(chId, diff, year + countryIdx + pIdx)
    );

    const bp = CHAPTER_BLUEPRINTS[chId];
    const structuredPrompt = bp
      ? [
          `${bp.sectionHeader} (${mod.points} points)`,
          bp.givenData(ctx, city, year),
          '',
          ...bp.introQuestions,
          `${bp.applicationLead} ${gen.title} :`,
          gen.prompt,
        ].join('\n')
      : `${ctx.seriesName} — ${city} (${year})\n${gen.prompt}`;

    const fullSteps = bp
      ? [
          ...bp.prepSteps,
          ...gen.steps.map((s) => ({
            title: `Application finale — ${s.title}`,
            ruleApplied: s.ruleApplied,
            mathExpression: s.mathExpression,
            explanation: s.explanation,
            subResult: s.subResult,
          })),
        ]
      : gen.steps.map((s) => ({
          title: s.title,
          ruleApplied: s.ruleApplied,
          mathExpression: s.mathExpression,
          explanation: s.explanation,
          subResult: s.subResult,
        }));

    return {
      chapterId: chId,
      partLabel: mod.partLabel,
      title: gen.title,
      points: mod.points,
      difficulty: diff,
      prompt: structuredPrompt,
      hint: gen.hint,
      questionType: gen.questionType,
      options: gen.options,
      correctAnswer: gen.correctAnswer,
      unit: gen.unit,
      explanationFinal: gen.explanationFinal,
      themeTags: mod.themes,
      steps: fullSteps,
    };
  });
}

function buildGridPapers(subject: SubjectId): BepcArchivePaper[] {
  const seeds = [];
  for (const year of YEARS) {
    for (let cIdx = 0; cIdx < COUNTRIES.length; cIdx++) {
      const countryId = COUNTRIES[cIdx];
      const ctx = BEPC_COUNTRY_CONTEXTS[countryId];
      const city = ctx.cities[(year + cIdx) % ctx.cities.length];
      seeds.push({
        year,
        countryId,
        duration: '4h00',
        isTrainingSubject: true,
        sourceNotice: `Sujet type BAC d’entraînement au format officiel (non copie officielle mot pour mot) · ${ctx.examOffice} — Centre d’examen de ${city} · Session ${year} (4 parties / 20 pts / 4h00).`,
        themeSummary:
          subject === 'physique'
            ? 'Chimie (4 pts), Électricité RC/RL/RLC (5 pts), Mécanique-Optique & Nucléaire (4 pts) & Problème de Mécanique (7 pts)'
            : 'Activités Numériques (4 pts), Complexes & Similitudes (4 pts), Géométrie 3D & Coniques (4 pts) & Problème d’Analyse (8 pts)',
        parts: buildPartsForPaper(subject, year, countryId, cIdx),
      });
    }
  }
  return buildArchivePapers(subject, seeds);
}

function mergeWithOfficialPapers(
  gridPapers: BepcArchivePaper[],
  officialPapers: BepcArchivePaper[]
): BepcArchivePaper[] {
  const officialBySlot = new Map<string, BepcArchivePaper>();
  for (const paper of officialPapers) {
    officialBySlot.set(`${paper.countryId}-${paper.year}`, paper);
  }
  return gridPapers.map(
    (gridPaper) => officialBySlot.get(`${gridPaper.countryId}-${gridPaper.year}`) || gridPaper
  );
}

export const BAC_FULL_GRID_PHYSICS_PAPERS: BepcArchivePaper[] = mergeWithOfficialPapers(
  buildGridPapers('physique'),
  BAC_OFFICIAL_PHYSICS_PAPERS
);
export const BAC_FULL_GRID_MATHS_PAPERS: BepcArchivePaper[] = mergeWithOfficialPapers(
  buildGridPapers('maths'),
  BAC_OFFICIAL_MATHS_PAPERS
);
