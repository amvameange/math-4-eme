import { BepcArchivePaper } from '../../types/math';
import { buildArchivePapers } from './bepcArchiveHelpers';

export const BEPC_ARCHIVES_PHYSICS_1990_2008: BepcArchivePaper[] = buildArchivePapers(
  'physique',
  [
    {
      year: 1990,
      countryId: 'gabon',
      themeSummary: 'Chimie des métaux · Loi d’Ohm · Poids et équilibre',
      parts: [
        {
          chapterId: 'phys3-metaux-oxydation',
          partLabel: 'Exercice 1',
          title: 'Action du dioxygène sur le magnésium',
          points: 6,
          difficulty: 2,
          prompt:
            'Lors d’une expérience à Libreville, on brûle m = 4,8 g de ruban de magnésium (Mg) dans du dioxygène pur (M(Mg) = 24 g/mol ; M(O) = 16 g/mol) :\n2 Mg + O₂ ➔ 2 MgO.\nCalcule la masse de magnésie MgO (M = 40 g/mol) formée en grammes.',
          hint: 'n(Mg) = 4,8 ÷ 24 = 0,2 mol ➔ n(MgO) = 0,2 mol ➔ m(MgO) = 0,2 × 40.',
          correctAnswer: '8',
          unit: 'g',
          explanationFinal: 'n(Mg) = 0,2 mol donne n(MgO) = 0,2 mol, soit m = 0,2 × 40 = 8 g.',
          steps: [
            { title: '1) Quantité de magnésium', mathExpression: 'n(Mg) = 4,8 ÷ 24 = 0,2 mol', explanation: 'M(Mg) = 24 g/mol.' },
            { title: '2) Masse de MgO obtenue', mathExpression: 'n(MgO) = 0,2 mol\nm(MgO) = 0,2 × (24 + 16) = 0,2 × 40 = 8 g', explanation: 'Conservation stœchiométrique 2 : 2.', subResult: '8 g' },
          ],
        },
        {
          chapterId: 'phys3-conducteurs-ohmiques',
          partLabel: 'Exercice 2',
          title: 'Conducteur ohmique en série',
          points: 6,
          difficulty: 2,
          prompt:
            'Un générateur de tension U = 9 V alimente en série une résistance R₁ = 15 Ω et une résistance R₂ = 30 Ω.\nCalcule l’intensité I du courant dans le circuit en Ampères.',
          hint: 'R_éq = 15 + 30 = 45 Ω ; I = U ÷ R_éq = 9 ÷ 45.',
          correctAnswer: '0.2',
          unit: 'A',
          explanationFinal: 'R_éq = 45 Ω donc I = 9 ÷ 45 = 0,2 A.',
          steps: [
            { title: '1) Résistance équivalente', mathExpression: 'R_éq = 15 + 30 = 45 Ω', explanation: 'Montage en série.' },
            { title: '2) Loi d’Ohm globale', mathExpression: 'I = U ÷ R_éq = 9 ÷ 45 = 0,2 A', explanation: 'Intensité unique dans la boucle.', subResult: '0,2 A' },
          ],
        },
        {
          chapterId: 'phys3-actions-mecaniques',
          partLabel: 'Problème',
          title: 'Grue du port d’Owendo : Poids & Travail',
          points: 8,
          difficulty: 3,
          prompt:
            'Une grue soulève une caisse de masse m = 450 kg d’une hauteur h = 6 m en t = 15 s (g = 10 N/kg).\n1) Calcule le poids P de la caisse.\n2) Calcule le travail W du poids.\n3) Calcule la puissance P_m de levage en Watts.',
          hint: 'P = 4 500 N ; W = 4 500 × 6 = 27 000 J ; P_m = 27 000 ÷ 15.',
          correctAnswer: '1800',
          unit: 'W',
          explanationFinal: 'W = 27 000 J et P_m = 27 000 ÷ 15 = 1 800 W.',
          steps: [
            { title: '1) Poids et travail', mathExpression: 'P = 450 × 10 = 4 500 N\nW = 4 500 × 6 = 27 000 J', explanation: 'Montée verticale.' },
            { title: '2) Puissance mécanique', mathExpression: 'P_m = 27 000 ÷ 15 = 1 800 W', explanation: 'Puissance moyenne développée.', subResult: '1 800 W' },
          ],
        },
      ],
    },
    {
      year: 1991,
      countryId: 'france',
      themeSummary: 'Tests des ions · Lentilles convergentes · Énergie électrique',
      parts: [
        {
          chapterId: 'phys3-ions-tests',
          partLabel: 'Exercice 1',
          title: 'Identification d’ions en solution aqueuse',
          points: 6,
          difficulty: 1,
          questionType: 'qcm',
          options: [
            'Fe²⁺ et Cl⁻ (Chlorure de fer II)',
            'Fe³⁺ et Cl⁻ (Chlorure de fer III)',
            'Cu²⁺ et SO₄²⁻ (Sulfate de cuivre)',
            'Zn²⁺ et Cl⁻ (Chlorure de zinc)',
          ],
          prompt:
            'Une solution vert pâle donne un précipité VERT avec la soude et un précipité BLANC noircissant à la lumière avec le nitrate d’argent.\nQuels ions contient-elle ?',
          hint: 'Précipité vert = Fe²⁺ ; précipité blanc AgCl = Cl⁻.',
          correctAnswer: 'Fe²⁺ et Cl⁻ (Chlorure de fer II)',
          explanationFinal: 'Les tests caractérisent l’ion fer II (Fe²⁺) et l’ion chlorure (Cl⁻).',
          steps: [
            { title: 'Analyse des deux tests', mathExpression: 'Soude ➔ Précipité vert = Fe²⁺\nAgNO₃ ➔ Précipité blanc = Cl⁻', explanation: 'Formule FeCl₂.' },
          ],
        },
        {
          chapterId: 'phys3-lentilles-construction',
          partLabel: 'Exercice 2',
          title: 'Vergence et distance focale d’une loupe',
          points: 6,
          difficulty: 2,
          prompt:
            'Un horloger utilise une loupe de distance focale f = 5 cm (= 0,05 m).\nCalcule sa vergence C en dioptries (δ).',
          hint: 'C = 1 ÷ f(m) = 1 ÷ 0,05.',
          correctAnswer: '20',
          unit: 'δ',
          explanationFinal: 'C = 1 ÷ 0,05 = +20 δ.',
          steps: [
            { title: 'Conversion en mètres et calcul', mathExpression: 'f = 5 cm = 0,05 m\nC = 1 ÷ 0,05 = +20 δ', explanation: 'Lentille très convergente.', subResult: '20 δ' },
          ],
        },
        {
          chapterId: 'phys3-energie-puissance-seeg',
          partLabel: 'Problème',
          title: 'Radiateur électrique et effet Joule',
          points: 8,
          difficulty: 3,
          prompt:
            'Un radiateur de résistance R = 48,4 Ω fonctionne sous U = 220 V.\n1) Calcule l’intensité I (en A) traversant le radiateur.\n2) Calcule sa puissance P = U × I en Watts.',
          hint: 'P = U² ÷ R = 220² ÷ 48,4 = 48 400 ÷ 48,4.',
          correctAnswer: '1000',
          unit: 'W',
          explanationFinal: 'I = 220 ÷ 48,4 ≈ 4,55 A et P = 220² ÷ 48,4 = 1 000 W (1 kW).',
          steps: [
            { title: 'Expression directe P = U² ÷ R', mathExpression: 'P = U × (U ÷ R) = 220² ÷ 48,4\n= 48 400 ÷ 48,4 = 1 000 W', explanation: 'Calcul exact sans erreur d’arrondi.', subResult: '1 000 W' },
          ],
        },
      ],
    },
    {
      year: 1992,
      countryId: 'senegal',
      themeSummary: 'Combustion des hydrocarbures · Équilibre à 2 forces · Loi d’Ohm',
      parts: [
        {
          chapterId: 'phys3-hydrocarbures-alcools',
          partLabel: 'Exercice 1',
          title: 'Combustion complète du propane',
          points: 6,
          difficulty: 2,
          prompt:
            'La combustion complète du propane C₃H₈ s’écrit :\nC₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O.\nOn brûle 0,5 mol de propane (V_m = 24 L/mol). Calcule le volume de dioxyde de carbone CO₂ rejeté en Litres.',
          hint: 'n(CO₂) = 3 × 0,5 = 1,5 mol ➔ V = 1,5 × 24.',
          correctAnswer: '36',
          unit: 'L',
          explanationFinal: 'n(CO₂) = 1,5 mol donc V(CO₂) = 1,5 × 24 = 36 L.',
          steps: [
            { title: 'Bilan molaire et volume', mathExpression: 'n(CO₂) = 3 × 0,5 = 1,5 mol\nV = 1,5 × 24 = 36 L', explanation: 'Proportionnalité directe.', subResult: '36 L' },
          ],
        },
        {
          chapterId: 'phys3-equilibre-solide',
          partLabel: 'Exercice 2',
          title: 'Solide suspendu à un dynamomètre',
          points: 6,
          difficulty: 1,
          prompt:
            'Un bloc de masse m = 2,5 kg est suspendu en équilibre à un dynamomètre à Dakar (g = 9,8 N/kg).\nQuelle force T (en N) indique le dynamomètre ?',
          hint: 'À l’équilibre à 2 forces : T = P = m × g = 2,5 × 9,8.',
          correctAnswer: '24.5',
          unit: 'N',
          explanationFinal: 'T = P = 2,5 × 9,8 = 24,5 N.',
          steps: [
            { title: 'Condition d’équilibre à 2 forces', mathExpression: 'T = P = 2,5 × 9,8 = 24,5 N', explanation: 'Même droite, sens opposés, même intensité.', subResult: '24,5 N' },
          ],
        },
        {
          chapterId: 'phys3-conducteurs-ohmiques',
          partLabel: 'Problème',
          title: 'Association en dérivation de deux résistors',
          points: 8,
          difficulty: 3,
          prompt:
            'Deux résistances R₁ = 10 Ω et R₂ = 15 Ω sont montées en dérivation sous U = 12 V.\nCalcule l’intensité totale I = I₁ + I₂ débitée par le générateur en Ampères.',
          hint: 'I₁ = 12÷10 = 1,2 A ; I₂ = 12÷15 = 0,8 A. Somme = 1,2 + 0,8.',
          correctAnswer: '2',
          unit: 'A',
          explanationFinal: 'I₁ = 1,2 A et I₂ = 0,8 A ➔ I = 2 A.',
          steps: [
            { title: '1) Courants dérivés', mathExpression: 'I₁ = 12 ÷ 10 = 1,2 A\nI₂ = 12 ÷ 15 = 0,8 A', explanation: 'Tension commune 12 V.' },
            { title: '2) Loi des nœuds', mathExpression: 'I = 1,2 + 0,8 = 2 A', explanation: 'R_éq vaut 6 Ω.', subResult: '2 A' },
          ],
        },
      ],
    },
    {
      year: 1993,
      countryId: 'cameroun',
      themeSummary: 'Solutions acides/basiques · Énergie cinétique · Transformateur',
      parts: [
        {
          chapterId: 'phys3-acides-bases-ph',
          partLabel: 'Exercice 1',
          title: 'Dilution et variation du pH',
          points: 6,
          difficulty: 1,
          questionType: 'qcm',
          options: [
            'Le pH augmente et tend vers 7',
            'Le pH diminue vers 0',
            'Le pH devient basique (> 7)',
            'Le pH reste rigoureusement constant',
          ],
          prompt:
            'On verse 10 mL d’une solution acide de pH = 2,5 dans 990 mL d’eau distillée.\nComment évolue le pH ?',
          hint: 'Diluer un acide diminue son acidité : le pH monte en se rapprochant de 7.',
          correctAnswer: 'Le pH augmente et tend vers 7',
          explanationFinal: 'Toute dilution rapproche le pH de la neutralité (7) sans jamais la dépasser.',
          steps: [
            { title: 'Règle de dilution', mathExpression: 'pH initial = 2,5 < 7 ➔ augmente vers 7 (≈ 4,5)', explanation: 'Concentration en H⁺ divisée par 100.' },
          ],
        },
        {
          chapterId: 'phys3-energie-mecanique',
          partLabel: 'Exercice 2',
          title: 'Chute d’une pierre depuis un pont',
          points: 6,
          difficulty: 2,
          prompt:
            'Une pierre de masse m = 4 kg tombe sans vitesse initiale d’un pont de hauteur h = 5 m (g = 10 N/kg).\nCalcule son énergie cinétique Ec en arrivant au niveau de l’eau (en Joules).',
          hint: 'Conservation : Ec_bas = Ep_haut = m × g × h.',
          correctAnswer: '200',
          unit: 'J',
          explanationFinal: 'Ec = 4 × 10 × 5 = 200 J.',
          steps: [
            { title: 'Conservation de l’énergie mécanique', mathExpression: 'Ec = Ep = 4 × 10 × 5 = 200 J', explanation: 'Toute l’énergie potentielle devient cinétique.', subResult: '200 J' },
          ],
        },
        {
          chapterId: 'phys3-transformateur-electronique',
          partLabel: 'Problème',
          title: 'Adaptateur de poste radio à Yaoundé',
          points: 8,
          difficulty: 3,
          prompt:
            'Un transformateur branché sur 220 V comporte N₁ = 1 100 spires au primaire et N₂ = 45 spires au secondaire.\nCalcule la tension secondaire U₂ en Volts.',
          hint: 'U₂ = U₁ × (N₂ ÷ N₁) = 220 × (45 ÷ 1 100).',
          correctAnswer: '9',
          unit: 'V',
          explanationFinal: 'U₂ = 220 × 45 ÷ 1 100 = 0,2 × 45 = 9 V.',
          steps: [
            { title: 'Rapport de transformation', mathExpression: 'U₂ / U₁ = N₂ / N₁\nU₂ = 220 × (45 ÷ 1 100) = 9 V', explanation: 'Transformateur abaisseur.', subResult: '9 V' },
          ],
        },
      ],
    },
    {
      year: 1994,
      countryId: 'benin',
      themeSummary: 'Oxydation du fer · Travail résistant · Optique œil',
      parts: [
        {
          chapterId: 'phys3-metaux-oxydation',
          partLabel: 'Exercice 1',
          title: 'Réduction de l’oxyde ferrique',
          points: 6,
          difficulty: 2,
          prompt:
            'Dans un haut fourneau, l’oxyde Fe₂O₃ (M = 160 g/mol) est réduit en fer (M(Fe) = 56 g/mol) selon :\nFe₂O₃ + 3 CO ➔ 2 Fe + 3 CO₂.\nQuelle masse de fer obtient-on à partir de 320 g d’oxyde Fe₂O₃ ?',
          hint: 'n(Fe₂O₃) = 320 ÷ 160 = 2 mol ➔ n(Fe) = 2 × 2 = 4 mol ➔ m = 4 × 56.',
          correctAnswer: '224',
          unit: 'g',
          explanationFinal: '2 moles de Fe₂O₃ donnent 4 moles de Fe, soit 4 × 56 = 224 g de fer.',
          steps: [
            { title: 'Bilan de masse', mathExpression: 'n(Fe₂O₃) = 320 ÷ 160 = 2 mol\nn(Fe) = 4 mol\nm(Fe) = 4 × 56 = 224 g', explanation: '160 g de Fe₂O₃ donne 112 g de fer.', subResult: '224 g' },
          ],
        },
        {
          chapterId: 'phys3-oeil-instruments',
          partLabel: 'Exercice 2',
          title: 'Verre correcteur d’un œil hypermétrope',
          points: 6,
          difficulty: 2,
          prompt:
            'Un patient hypermétrope porte des lunettes convergentes de vergence C = +2,5 δ.\nCalcule la distance focale f de ses verres en cm.',
          hint: 'f = 1 ÷ 2,5 = 0,40 m = 40 cm.',
          correctAnswer: '40',
          unit: 'cm',
          explanationFinal: 'f = 0,40 m = 40 cm.',
          steps: [
            { title: 'Calcul de f', mathExpression: 'f = 1 ÷ 2,5 = 0,40 m = 40 cm', explanation: 'Lentille convergente.', subResult: '40 cm' },
          ],
        },
        {
          chapterId: 'phys3-travail-puissance',
          partLabel: 'Problème',
          title: 'Pompe hydraulique villageoise',
          points: 8,
          difficulty: 3,
          prompt:
            'Une pompe remonte 300 L d’eau (m = 300 kg) d’un puits profond de h = 15 m en t = 50 s (g = 10 N/kg).\nCalcule la puissance mécanique utile développée en Watts.',
          hint: 'W = 300 × 10 × 15 = 45 000 J. P = 45 000 ÷ 50.',
          correctAnswer: '900',
          unit: 'W',
          explanationFinal: 'W = 45 000 J et P = 45 000 ÷ 50 = 900 W.',
          steps: [
            { title: '1) Travail utile', mathExpression: 'W = m × g × h = 300 × 10 × 15 = 45 000 J', explanation: '1 L d’eau = 1 kg.' },
            { title: '2) Puissance', mathExpression: 'P = 45 000 ÷ 50 = 900 W', explanation: 'Puissance mécanique.', subResult: '900 W' },
          ],
        },
      ],
    },
    {
      year: 1995,
      countryId: 'togo',
      themeSummary: 'Facture énergie · Acide sur aluminium · Équilibre de levier',
      parts: [
        {
          chapterId: 'phys3-acides-bases-ph',
          partLabel: 'Exercice 1',
          title: 'Dosage soude / acide chlorhydrique',
          points: 6,
          difficulty: 2,
          prompt:
            'On neutralise 25 mL d’acide chlorhydrique par 20 mL de soude de concentration C_b = 0,05 mol/L.\nCalcule la concentration C_a de l’acide en mol/L.',
          hint: 'C_a × 25 = 0,05 × 20 = 1 ➔ C_a = 1 ÷ 25.',
          correctAnswer: '0.04',
          unit: 'mol/L',
          explanationFinal: 'C_a = 1 ÷ 25 = 0,04 mol/L.',
          steps: [
            { title: 'Relation d’équivalence', mathExpression: 'C_a = (0,05 × 20) ÷ 25 = 1 ÷ 25 = 0,04 mol/L', explanation: 'Neutralisation exacte.', subResult: '0,04 mol/L' },
          ],
        },
        {
          chapterId: 'phys3-equilibre-solide',
          partLabel: 'Exercice 2',
          title: 'Moment d’une force et balance romaine',
          points: 6,
          difficulty: 2,
          prompt:
            'Une barre horizontale articulée en O porte une masse A (poids P_A = 60 N) à la distance d_A = 0,4 m à gauche.\nÀ quelle distance d_B (en m) à droite faut-il suspendre un contrepoids de 30 N pour obtenir l’équilibre ?',
          hint: 'P_A × d_A = P_B × d_B ➔ 60 × 0,4 = 30 × d_B.',
          correctAnswer: '0.8',
          unit: 'm',
          explanationFinal: '24 = 30 × d_B ➔ d_B = 24 ÷ 30 = 0,8 m.',
          steps: [
            { title: 'Théorème des moments', mathExpression: '60 × 0,4 = 30 × d_B\nd_B = 24 ÷ 30 = 0,8 m', explanation: 'Force divisée par 2 ⇒ bras de levier doublé.', subResult: '0,8 m' },
          ],
        },
        {
          chapterId: 'phys3-energie-puissance-seeg',
          partLabel: 'Problème',
          title: 'Consommation électrique d’un fer à repasser',
          points: 8,
          difficulty: 3,
          prompt:
            'Un fer à repasser de puissance P = 1 200 W (= 1,2 kW) fonctionne pendant 2 h 30 min (= 2,5 h).\nCalcule l’énergie électrique consommée en kWh.',
          hint: 'E = 1,2 × 2,5.',
          correctAnswer: '3',
          unit: 'kWh',
          explanationFinal: 'E = 1,2 kW × 2,5 h = 3 kWh.',
          steps: [
            { title: 'Calcul en kWh', mathExpression: 't = 2 h 30 min = 2,5 h\nE = 1,2 × 2,5 = 3 kWh', explanation: 'Équivalent à 10 800 000 J.', subResult: '3 kWh' },
          ],
        },
      ],
    },
    {
      year: 1996,
      countryId: 'gabon',
      themeSummary: 'SEEG Libreville · Alcanes · Poussée d’Archimède',
      parts: [
        {
          chapterId: 'phys3-hydrocarbures-alcools',
          partLabel: 'Exercice 1',
          title: 'Formule brute d’un alcane',
          points: 6,
          difficulty: 1,
          prompt:
            'Un alcane gazeux (formule C_n H_{2n+2}) possède n = 4 atomes de carbone. Quelle est sa masse molaire moléculaire M en g/mol ? (M(C)=12 ; M(H)=1).',
          hint: 'Butane C₄H₁₀ : M = 4×12 + 10×1.',
          correctAnswer: '58',
          unit: 'g/mol',
          explanationFinal: 'C₄H₁₀ : M = 48 + 10 = 58 g/mol.',
          steps: [
            { title: 'Masse molaire de C₄H₁₀', mathExpression: 'M = 4×12 + (2×4 + 2)×1 = 48 + 10 = 58 g/mol', explanation: 'Butane domestique.', subResult: '58 g/mol' },
          ],
        },
        {
          chapterId: 'phys3-actions-mecaniques',
          partLabel: 'Exercice 2',
          title: 'Poussée d’Archimède sur une bille immergée',
          points: 6,
          difficulty: 2,
          prompt:
            'On immerge complètement un solide de volume V = 0,002 m³ (2 L) dans l’eau (ρ = 1 000 kg/m³, g = 10 N/kg).\nCalcule l’intensité de la poussée d’Archimède F_A en Newtons.',
          hint: 'F_A = ρ × V × g = 1 000 × 0,002 × 10.',
          correctAnswer: '20',
          unit: 'N',
          explanationFinal: 'F_A = 1 000 × 0,002 × 10 = 20 N.',
          steps: [
            { title: 'Formule d’Archimède', mathExpression: 'F_A = 1 000 × 0,002 × 10 = 20 N', explanation: 'Égale au poids de 2 L d’eau.', subResult: '20 N' },
          ],
        },
        {
          chapterId: 'phys3-energie-puissance-seeg',
          partLabel: 'Problème',
          title: 'Installation électrique domestique au Gabon',
          points: 8,
          difficulty: 3,
          prompt:
            'Sur un compteur SEEG de tension 220 V et disjoncteur I_max = 15 A, on branche un chauffe-eau de 2 200 W et un four de 1 100 W.\nCalcule la puissance maximale admissible P_max = U × I_max en Watts.',
          hint: 'P_max = 220 × 15.',
          correctAnswer: '3300',
          unit: 'W',
          explanationFinal: 'P_max = 220 × 15 = 3 300 W (2 200 + 1 100 = 3 300 W : limite atteinte !).',
          steps: [
            { title: 'Calcul de P_max', mathExpression: 'P_max = 220 × 15 = 3 300 W', explanation: 'Au-delà de 3 300 W, le disjoncteur coupe.', subResult: '3 300 W' },
          ],
        },
      ],
    },
    {
      year: 1997,
      countryId: 'france',
      themeSummary: 'Oscilloscope · Énergie cinétique et sécurité routière · Ion Cu²⁺',
      parts: [
        {
          chapterId: 'phys3-ions-tests',
          partLabel: 'Exercice 1',
          title: 'Électrolyse / déplacement du cuivre par le fer',
          points: 6,
          difficulty: 2,
          prompt:
            'On plonge de la paille de fer (M(Fe)=56 g/mol) dans du sulfate de cuivre : Fe + Cu²⁺ ➔ Fe²⁺ + Cu (M(Cu)=64 g/mol).\nQuelle masse de cuivre rouge (en g) se dépose si 5,6 g de fer réagissent ?',
          hint: 'n(Fe) = 5,6 ÷ 56 = 0,1 mol ➔ n(Cu) = 0,1 mol ➔ m = 0,1 × 64.',
          correctAnswer: '6.4',
          unit: 'g',
          explanationFinal: '0,1 mol de fer dépose 0,1 mol de cuivre = 6,4 g.',
          steps: [
            { title: 'Bilan molaire', mathExpression: 'n(Fe) = 5,6 ÷ 56 = 0,1 mol\nm(Cu) = 0,1 × 64 = 6,4 g', explanation: 'Réaction d’oxydoréduction classique.', subResult: '6,4 g' },
          ],
        },
        {
          chapterId: 'phys3-energie-mecanique',
          partLabel: 'Exercice 2',
          title: 'Distance d’arrêt et vitesse doublée',
          points: 6,
          difficulty: 2,
          prompt:
            'Une voiture de 1 200 kg roule à v = 10 m/s (36 km/h). Son énergie cinétique vaut Ec₁ = 60 000 J.\nSi elle roule 2 fois plus vite (v = 20 m/s), par combien son énergie cinétique est-elle multipliée ?',
          hint: 'Ec est proportionnelle à v² : 2² = 4.',
          correctAnswer: '4',
          explanationFinal: 'Doubler la vitesse multiplie l’énergie cinétique (et la distance de freinage) par 2² = 4.',
          steps: [
            { title: 'Proportionnalité en v²', mathExpression: 'Ec₂ = ½ m (2v)² = 4 × (½ m v²) = 4 Ec₁', explanation: 'Facteur 4 = danger majeur sur route.', subResult: '4' },
          ],
        },
        {
          chapterId: 'phys3-transformateur-electronique',
          partLabel: 'Problème',
          title: 'Tension alternative sinusoïdale du secteur',
          points: 8,
          difficulty: 3,
          prompt:
            'Une tension sinusoïdale a une tension maximale U_max = 311 V (secteur EDF). Sachant que U_max = U_eff × √2 (avec √2 ≈ 1,414),\ncalcule la tension efficace U_eff arrondie à l’entier en Volts.',
          hint: '311 ÷ 1,414 = 220 V.',
          correctAnswer: '220',
          unit: 'V',
          explanationFinal: 'U_eff = 311 ÷ 1,414 ≈ 220 V.',
          steps: [
            { title: 'Relation crête / efficace', mathExpression: 'U_eff = U_max ÷ √2 = 311 ÷ 1,414 ≈ 220 V', explanation: 'Valeur mesurée au voltmètre en mode AC.', subResult: '220 V' },
          ],
        },
      ],
    },
    {
      year: 1998,
      countryId: 'senegal',
      themeSummary: 'Alcool éthanol · Lentille convergente · Pont diviseur',
      parts: [
        {
          chapterId: 'phys3-hydrocarbures-alcools',
          partLabel: 'Exercice 1',
          title: 'Oxydation de l’éthanol',
          points: 6,
          difficulty: 2,
          prompt:
            'L’éthanol a pour formule C₂H₆O. Calcule sa masse molaire moléculaire M en g/mol (C=12 ; H=1 ; O=16).',
          hint: '2×12 + 6×1 + 16.',
          correctAnswer: '46',
          unit: 'g/mol',
          explanationFinal: 'M(C₂H₆O) = 24 + 6 + 16 = 46 g/mol.',
          steps: [
            { title: 'Somme atomique', mathExpression: 'M = 2×12 + 6×1 + 16 = 46 g/mol', explanation: 'Alcool éthylique.', subResult: '46 g/mol' },
          ],
        },
        {
          chapterId: 'phys3-lentilles-construction',
          partLabel: 'Exercice 2',
          title: 'Grandissement d’un projecteur',
          points: 6,
          difficulty: 2,
          prompt:
            'Une diapositive de hauteur AB = 2 cm est placée à 12 cm devant une lentille convergente. L’image nette sur l’écran se forme à OA’ = 180 cm.\nCalcule la hauteur A’B’ de l’image projetée en cm.',
          hint: 'A’B’ / AB = OA’ / OA = 180 ÷ 12 = 15. Puis 15 × 2.',
          correctAnswer: '30',
          unit: 'cm',
          explanationFinal: 'Le grandissement est 180 ÷ 12 = 15, donc A’B’ = 15 × 2 = 30 cm.',
          steps: [
            { title: 'Relation de grandissement', mathExpression: '|γ| = 180 ÷ 12 = 15\nA’B’ = 15 × 2 = 30 cm', explanation: 'Image renversée 15 fois plus grande.', subResult: '30 cm' },
          ],
        },
        {
          chapterId: 'phys3-conducteurs-ohmiques',
          partLabel: 'Problème',
          title: 'Diviseur de tension sur batterie 12 V',
          points: 8,
          difficulty: 3,
          prompt:
            'Un pont diviseur est formé de R₁ = 30 Ω et R₂ = 10 Ω en série aux bornes d’une batterie de U = 12 V.\nCalcule la tension de sortie U₂ aux bornes de R₂ en Volts.',
          hint: 'I = 12 ÷ 40 = 0,3 A. U₂ = R₂ × I = 10 × 0,3.',
          correctAnswer: '3',
          unit: 'V',
          explanationFinal: 'U₂ = 12 × (10 ÷ 40) = 3 V.',
          steps: [
            { title: 'Formule du pont diviseur', mathExpression: 'R_tot = 30 + 10 = 40 Ω\nU₂ = U × (R₂ ÷ R_tot) = 12 × (10 ÷ 40) = 3 V', explanation: 'Division par 4 de la tension.', subResult: '3 V' },
          ],
        },
      ],
    },
    {
      year: 1999,
      countryId: 'cameroun',
      themeSummary: 'Masse molaire gaz · Travail d’une force motrice · Puissance mécanique',
      parts: [
        {
          chapterId: 'phys3-metaux-oxydation',
          partLabel: 'Exercice 1',
          title: 'Dihydrogène par action de HCl sur le fer',
          points: 6,
          difficulty: 2,
          prompt:
            'Fe + 2 H⁺ ➔ Fe²⁺ + H₂. On fait réagir 11,2 g de fer (M(Fe) = 56 g/mol).\nQuel volume de gaz H₂ (en L, avec V_m = 24 L/mol) se dégage ?',
          hint: 'n(Fe) = 11,2 ÷ 56 = 0,2 mol ➔ V(H₂) = 0,2 × 24.',
          correctAnswer: '4.8',
          unit: 'L',
          explanationFinal: '0,2 mol de fer donne 0,2 mol de H₂, soit 0,2 × 24 = 4,8 L.',
          steps: [
            { title: 'Calcul stœchiométrique', mathExpression: 'n = 11,2 ÷ 56 = 0,2 mol\nV = 0,2 × 24 = 4,8 L', explanation: 'Test à la flamme (détonation).', subResult: '4,8 L' },
          ],
        },
        {
          chapterId: 'phys3-travail-puissance',
          partLabel: 'Exercice 2',
          title: 'Traction d’un wagon sur rails horizontaux',
          points: 6,
          difficulty: 2,
          prompt:
            'Une locomotive exerce une force horizontale constante F = 8 000 N sur un trajet rectiligne d = 500 m.\nCalcule le travail W en kJ (kilojoules).',
          hint: 'W = 8 000 × 500 = 4 000 000 J = 4 000 kJ.',
          correctAnswer: '4000',
          unit: 'kJ',
          explanationFinal: 'W = 4 000 000 J = 4 000 kJ.',
          steps: [
            { title: 'Travail et conversion en kJ', mathExpression: 'W = 8 000 × 500 = 4 000 000 J = 4 000 kJ', explanation: '1 kJ = 1 000 J.', subResult: '4 000 kJ' },
          ],
        },
        {
          chapterId: 'phys3-energie-puissance-seeg',
          partLabel: 'Problème',
          title: 'Rendement d’un chauffe-eau électrique',
          points: 8,
          difficulty: 4,
          prompt:
            'Un thermoplongeur électrique de puissance P = 1 000 W chauffe de l’eau pendant 3 minutes (180 s).\nL’eau absorbe réellement Q = 144 000 J.\nCalcule le rendement η (en %) de ce chauffage.',
          hint: 'E_elec = 1 000 × 180 = 180 000 J. η = (144 000 ÷ 180 000) × 100.',
          correctAnswer: '80',
          unit: '%',
          explanationFinal: 'E_elec = 180 000 J et Q = 144 000 J, soit η = 80 %.',
          steps: [
            { title: '1) Énergie électrique fournie', mathExpression: 'E_elec = 1 000 × 180 = 180 000 J', explanation: '3 min = 180 s.' },
            { title: '2) Rendement', mathExpression: 'η = (144 000 ÷ 180 000) × 100 = 80 %', explanation: '20 % de pertes thermiques.', subResult: '80 %' },
          ],
        },
      ],
    },
    {
      year: 2000,
      countryId: 'gabon',
      themeSummary: 'BEPC An 2000 Gabon : Poids · Résistance équivalente · Combustion',
      parts: [
        {
          chapterId: 'phys3-hydrocarbures-alcools',
          partLabel: 'Exercice 1',
          title: 'Combustion du méthane (Gaz naturel de Port-Gentil)',
          points: 6,
          difficulty: 2,
          prompt:
            'CH₄ + 2 O₂ ➔ CO₂ + 2 H₂O.\nPour brûler complètement 12 L de méthane CH₄, quel volume minimal de dioxygène O₂ (en Litres) faut-il ?',
          hint: '1 volume de CH₄ nécessite 2 volumes de O₂ : 2 × 12.',
          correctAnswer: '24',
          unit: 'L',
          explanationFinal: 'D’après les coefficients (1 : 2), il faut 2 × 12 = 24 L de dioxygène.',
          steps: [
            { title: 'Rapport des volumes gazeux', mathExpression: 'V(O₂) = 2 × V(CH₄) = 2 × 12 = 24 L', explanation: 'À même T et P, le rapport des volumes égale le rapport molaire.', subResult: '24 L' },
          ],
        },
        {
          chapterId: 'phys3-conducteurs-ohmiques',
          partLabel: 'Exercice 2',
          title: 'Association mixte de résistors',
          points: 6,
          difficulty: 3,
          prompt:
            'Deux résistors identiques de 20 Ω sont branchés en dérivation, puis l’ensemble est placé en série avec un résistor de 15 Ω.\nCalcule la résistance équivalente totale R_tot en Ohms.',
          hint: 'Dérivation de 20 Ω et 20 Ω = 10 Ω. Puis série avec 15 Ω : 10 + 15.',
          correctAnswer: '25',
          unit: 'Ω',
          explanationFinal: 'R_parallèle = 20 ÷ 2 = 10 Ω, puis R_tot = 10 + 15 = 25 Ω.',
          steps: [
            { title: '1) Groupe en dérivation', mathExpression: 'R_// = (20 × 20) ÷ (20 + 20) = 10 Ω', explanation: 'Deux résistances égales en parallèle divisent R par 2.' },
            { title: '2) Ajout en série', mathExpression: 'R_tot = 10 + 15 = 25 Ω', explanation: 'Résistance totale.', subResult: '25 Ω' },
          ],
        },
        {
          chapterId: 'phys3-energie-mecanique',
          partLabel: 'Problème',
          title: 'Train du Transgabonais : Énergie cinétique',
          points: 8,
          difficulty: 3,
          prompt:
            'Une locomotive du Transgabonais de masse m = 80 tonnes (80 000 kg) roule à v = 54 km/h (= 15 m/s).\nCalcule son énergie cinétique Ec en mégajoules (MJ, 1 MJ = 1 000 000 J).',
          hint: 'Ec = 0,5 × 80 000 × 15² = 40 000 × 225 = 9 000 000 J.',
          correctAnswer: '9',
          unit: 'MJ',
          explanationFinal: 'Ec = 9 000 000 J = 9 MJ.',
          steps: [
            { title: 'Calcul en Joules puis MJ', mathExpression: 'v = 54 ÷ 3,6 = 15 m/s\nEc = 0,5 × 80 000 × 225 = 9 000 000 J = 9 MJ', explanation: 'Énergie cinétique considérable.', subResult: '9 MJ' },
          ],
        },
      ],
    },
    {
      year: 2001,
      countryId: 'benin',
      themeSummary: 'Acides/Bases · Lentille divergente · Puissance électrique',
      parts: [
        {
          chapterId: 'phys3-acides-bases-ph',
          partLabel: 'Exercice 1',
          title: 'Échelle des pH',
          points: 6,
          difficulty: 1,
          questionType: 'qcm',
          options: [
            'Le jus de citron (pH = 2,3) est plus acide que le lait (pH = 6,5)',
            'La soude (pH = 12) est neutre',
            'L’eau pure (pH = 7) est très basique',
            'Plus le pH est grand, plus la solution est acide',
          ],
          prompt: 'Parmi ces affirmations sur le pH des solutions aqueuses à 25 °C, laquelle est exacte ?',
          hint: 'Plus le pH est petit (< 7), plus le milieu est acide.',
          correctAnswer: 'Le jus de citron (pH = 2,3) est plus acide que le lait (pH = 6,5)',
          explanationFinal: 'Un pH de 2,3 indique une acidité beaucoup plus forte qu’un pH de 6,5.',
          steps: [
            { title: 'Lecture de l’échelle de pH', mathExpression: '0 ← Acide (2,3 < 6,5) ← Neutre (7) → Basique → 14', explanation: 'Échelle officielle.' },
          ],
        },
        {
          chapterId: 'phys3-oeil-instruments',
          partLabel: 'Exercice 2',
          title: 'Association de deux lentilles accolées',
          points: 6,
          difficulty: 3,
          prompt:
            'On accole une lentille convergente de vergence C₁ = +8 δ et une lentille divergente de vergence C₂ = −3 δ.\nQuelle est la vergence équivalente C (en δ) du système ?',
          hint: 'Théorème des vergences : C = C₁ + C₂ = +8 + (−3).',
          correctAnswer: '5',
          unit: 'δ',
          explanationFinal: 'C = +8 − 3 = +5 δ (système globalement convergent de focale 20 cm).',
          steps: [
            { title: 'Somme algébrique des vergences', mathExpression: 'C = C₁ + C₂ = 8 − 3 = +5 δ', explanation: 'Propriété des lentilles minces accolées.', subResult: '+5 δ' },
          ],
        },
        {
          chapterId: 'phys3-energie-puissance-seeg',
          partLabel: 'Problème',
          title: 'Chute de tension dans un câble d’alimentation',
          points: 8,
          difficulty: 3,
          prompt:
            'Un câble en cuivre de résistance r = 0,5 Ω transporte un courant I = 10 A vers un atelier.\nCalcule la puissance perdue par effet Joule P_J = r × I² dans le câble en Watts.',
          hint: 'P_J = 0,5 × 10² = 0,5 × 100.',
          correctAnswer: '50',
          unit: 'W',
          explanationFinal: 'P_J = 0,5 × 100 = 50 W dissipés en chaleur dans le câble.',
          steps: [
            { title: 'Loi de Joule', mathExpression: 'P_J = r × I² = 0,5 × 10² = 50 W', explanation: 'Raison pour laquelle on transporte en haute tension (I faible).', subResult: '50 W' },
          ],
        },
      ],
    },
    {
      year: 2002,
      countryId: 'togo',
      themeSummary: 'Oxydes métalliques · Poids sur la Lune · Loi d’Ohm',
      parts: [
        {
          chapterId: 'phys3-metaux-oxydation',
          partLabel: 'Exercice 1',
          title: 'Combustion du cuivre dans le dioxygène',
          points: 6,
          difficulty: 2,
          prompt:
            '2 Cu + O₂ ➔ 2 CuO. On chauffe m = 12,8 g de cuivre (M(Cu) = 64 g/mol).\nCalcule la quantité de matière n(O₂) consommée en moles.',
          hint: 'n(Cu) = 12,8 ÷ 64 = 0,2 mol. Or 2 mol Cu consomment 1 mol O₂ ➔ n(O₂) = 0,2 ÷ 2.',
          correctAnswer: '0.1',
          unit: 'mol',
          explanationFinal: 'n(Cu) = 0,2 mol ➔ n(O₂) = 0,1 mol.',
          steps: [
            { title: '1) Moles de cuivre', mathExpression: 'n(Cu) = 12,8 ÷ 64 = 0,2 mol', explanation: 'Division exacte.' },
            { title: '2) Moles de O₂', mathExpression: 'n(O₂) = 0,2 ÷ 2 = 0,1 mol', explanation: 'Rapport 2 : 1.', subResult: '0,1 mol' },
          ],
        },
        {
          chapterId: 'phys3-actions-mecaniques',
          partLabel: 'Exercice 2',
          title: 'Masse et poids d’un astronaute sur la Lune',
          points: 6,
          difficulty: 1,
          prompt:
            'Un équipement de masse m = 90 kg a un poids P_Terre = 900 N sur Terre (g_T = 10 N/kg).\nSur la Lune, g_L = 1,6 N/kg. Calcule son poids lunaire P_Lune en Newtons.',
          hint: 'La masse reste 90 kg partout : P_Lune = 90 × 1,6.',
          correctAnswer: '144',
          unit: 'N',
          explanationFinal: 'P_Lune = 90 × 1,6 = 144 N (6 fois moindre que sur Terre).',
          steps: [
            { title: 'Invariance de la masse', mathExpression: 'm = 90 kg constante\nP_Lune = 90 × 1,6 = 144 N', explanation: 'Seule l’intensité de pesanteur g change.', subResult: '144 N' },
          ],
        },
        {
          chapterId: 'phys3-conducteurs-ohmiques',
          partLabel: 'Problème',
          title: 'Caractéristique U = f(I) d’un dipôle',
          points: 8,
          difficulty: 3,
          prompt:
            'Les mesures sur un conducteur ohmique donnent : pour I = 0,2 A, U = 9 V ; pour I = 0,5 A, U = 22,5 V.\nCalcule la résistance R de ce conducteur, puis déduis la tension U pour I = 0,8 A en Volts.',
          hint: 'R = 9 ÷ 0,2 = 45 Ω. Pour I = 0,8 A : U = 45 × 0,8.',
          correctAnswer: '36',
          unit: 'V',
          explanationFinal: 'R = 45 Ω et pour I = 0,8 A, U = 45 × 0,8 = 36 V.',
          steps: [
            { title: '1) Résistance R', mathExpression: 'R = 9 ÷ 0,2 = 45 Ω (= 22,5 ÷ 0,5)', explanation: 'Coefficient de proportionnalité.' },
            { title: '2) Tension pour 0,8 A', mathExpression: 'U = 45 × 0,8 = 36 V', explanation: 'Loi d’Ohm U = R × I.', subResult: '36 V' },
          ],
        },
      ],
    },
    {
      year: 2003,
      countryId: 'france',
      themeSummary: 'Sécurité électrique · Puissance mécanique · Test chlorure',
      parts: [
        {
          chapterId: 'phys3-ions-tests',
          partLabel: 'Exercice 1',
          title: 'Atome et ion ferrique Fe³⁺',
          points: 6,
          difficulty: 2,
          prompt:
            'L’atome de fer (Z = 26) possède 26 électrons. L’ion Fe³⁺ provient d’un atome de fer ayant perdu 3 électrons.\nCombien d’électrons possède l’ion Fe³⁺ ?',
          hint: '26 − 3.',
          correctAnswer: '23',
          unit: 'électrons',
          explanationFinal: 'Fe³⁺ a 26 protons et 26 − 3 = 23 électrons (excès +3e).',
          steps: [
            { title: 'Bilan des charges', mathExpression: 'Z = 26 protons\nÉlectrons = 26 − 3 = 23', explanation: 'Un cation perd des électrons.', subResult: '23' },
          ],
        },
        {
          chapterId: 'phys3-travail-puissance',
          partLabel: 'Exercice 2',
          title: 'Cycliste en montée',
          points: 6,
          difficulty: 2,
          prompt:
            'Un cycliste (ensemble masse m = 75 kg) gravit un col de dénivelé h = 120 m en 5 minutes (300 s), avec g = 10 N/kg.\nCalcule sa puissance utile minimale contre la pesanteur en Watts.',
          hint: 'W = 75 × 10 × 120 = 90 000 J. P = 90 000 ÷ 300.',
          correctAnswer: '300',
          unit: 'W',
          explanationFinal: 'W = 90 000 J et P = 90 000 ÷ 300 = 300 W.',
          steps: [
            { title: 'Travail et puissance', mathExpression: 'W = 75 × 10 × 120 = 90 000 J\nP = 90 000 ÷ 300 = 300 W', explanation: '5 min = 300 s.', subResult: '300 W' },
          ],
        },
        {
          chapterId: 'phys3-energie-puissance-seeg',
          partLabel: 'Problème',
          title: 'Calibrage d’un fusible sur multiprise',
          points: 8,
          difficulty: 3,
          prompt:
            'Sur une multiprise 230 V protégée par un fusible de 10 A, on branche un aspirateur de 1 610 W et un téléviseur de 230 W.\nCalcule l’intensité totale I (en A) demandée sur la prise.',
          hint: 'P_tot = 1 610 + 230 = 1 840 W. I = 1 840 ÷ 230.',
          correctAnswer: '8',
          unit: 'A',
          explanationFinal: 'I = 1 840 ÷ 230 = 8 A (< 10 A, donc le fusible tient).',
          steps: [
            { title: '1) Puissance totale', mathExpression: 'P_tot = 1 610 + 230 = 1 840 W', explanation: 'Somme en dérivation.' },
            { title: '2) Courant total', mathExpression: 'I = 1 840 ÷ 230 = 8 A', explanation: '8 A < 10 A : fonctionnement sûr.', subResult: '8 A' },
          ],
        },
      ],
    },
    {
      year: 2004,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon : Hydrocarbures · Optique & Œil · Facture SEEG',
      parts: [
        {
          chapterId: 'phys3-hydrocarbures-alcools',
          partLabel: 'Exercice 1',
          title: 'Équilibrage combustion de l’éthane C₂H₆',
          points: 6,
          difficulty: 2,
          prompt:
            'Soit l’équation : 2 C₂H₆ + a O₂ ➔ 4 CO₂ + 6 H₂O.\nTrouve la valeur entière du coefficient stœchiométrique a devant O₂.',
          hint: 'O à droite = 4×2 + 6×1 = 8 + 6 = 14 atomes d’oxygène ➔ a = 14 ÷ 2.',
          correctAnswer: '7',
          explanationFinal: '14 atomes O à droite donnent 7 O₂ à gauche (a = 7).',
          steps: [
            { title: 'Conservation des atomes O', mathExpression: 'Produits : 4×2 + 6×1 = 14 O\n2a = 14 ⇒ a = 7', explanation: 'Équation : 2 C₂H₆ + 7 O₂ ➔ 4 CO₂ + 6 H₂O.', subResult: 'a = 7' },
          ],
        },
        {
          chapterId: 'phys3-lentilles-construction',
          partLabel: 'Exercice 2',
          title: 'Construction de l’image d’un objet à l’infini',
          points: 6,
          difficulty: 1,
          prompt:
            'Avec une lentille convergente de vergence C = +4 δ, on forme l’image nette du Soleil sur une feuille de papier.\nÀ quelle distance d (en cm) du centre optique faut-il placer la feuille ?',
          hint: 'Un objet très éloigné forme son image dans le plan focal : d = f = 1 ÷ C.',
          correctAnswer: '25',
          unit: 'cm',
          explanationFinal: 'f = 1 ÷ 4 = 0,25 m = 25 cm.',
          steps: [
            { title: 'Propriété du foyer image F’', mathExpression: 'd = f = 1 ÷ 4 = 0,25 m = 25 cm', explanation: 'Méthode de focométrie directe.', subResult: '25 cm' },
          ],
        },
        {
          chapterId: 'phys3-energie-puissance-seeg',
          partLabel: 'Problème',
          title: 'Relevé d’index SEEG & montant en F CFA',
          points: 8,
          difficulty: 3,
          prompt:
            'Le compteur SEEG d’un foyer gabonais affichait 4 120 kWh le 1er mars et affiche 4 370 kWh le 1er avril.\nLe tarif est 95 F CFA/kWh plus une prime fixe de 2 250 F CFA.\nCalcule le montant total de la facture en F CFA.',
          hint: 'Conso = 4 370 − 4 120 = 250 kWh. Total = 250 × 95 + 2 250.',
          correctAnswer: '26000',
          unit: 'F CFA',
          explanationFinal: '250 kWh × 95 = 23 750 F + 2 250 F = 26 000 F CFA.',
          steps: [
            { title: '1) Consommation du mois', mathExpression: 'E = 4 370 − 4 120 = 250 kWh', explanation: 'Différence d’index.' },
            { title: '2) Facture totale', mathExpression: '250 × 95 + 2 250 = 23 750 + 2 250 = 26 000 F CFA', explanation: 'Calcul conforme au barème.', subResult: '26 000 F CFA' },
          ],
        },
      ],
    },
    {
      year: 2005,
      countryId: 'senegal',
      themeSummary: 'Acide sur zinc · Chute libre · Circuit dérivation',
      parts: [
        {
          chapterId: 'phys3-metaux-oxydation',
          partLabel: 'Exercice 1',
          title: 'Attaque du zinc par HCl',
          points: 6,
          difficulty: 2,
          prompt:
            'Zn + 2 HCl ➔ ZnCl₂ + H₂.\nSi 0,25 mol de zinc disparaissent totalement, combien de moles d’acide HCl ont été consommées ?',
          hint: '1 mol Zn réagit avec 2 mol HCl ➔ 2 × 0,25.',
          correctAnswer: '0.5',
          unit: 'mol',
          explanationFinal: 'n(HCl) = 2 × 0,25 = 0,5 mol.',
          steps: [
            { title: 'Proportion stœchiométrique', mathExpression: 'n(HCl) = 2 × n(Zn) = 2 × 0,25 = 0,5 mol', explanation: 'Coefficient 2 devant HCl.', subResult: '0,5 mol' },
          ],
        },
        {
          chapterId: 'phys3-energie-mecanique',
          partLabel: 'Exercice 2',
          title: 'Énergie potentielle d’un barrage',
          points: 6,
          difficulty: 2,
          prompt:
            'Une retenue d’eau lâche 500 kg d’eau d’une hauteur de 40 m (g = 10 N/kg).\nCalcule l’énergie potentielle libérée en kJ.',
          hint: 'Ep = 500 × 10 × 40 = 200 000 J = 200 kJ.',
          correctAnswer: '200',
          unit: 'kJ',
          explanationFinal: 'Ep = 200 000 J = 200 kJ.',
          steps: [
            { title: 'Calcul en kJ', mathExpression: 'Ep = 500 × 10 × 40 = 200 000 J = 200 kJ', explanation: '1 kJ = 1 000 J.', subResult: '200 kJ' },
          ],
        },
        {
          chapterId: 'phys3-conducteurs-ohmiques',
          partLabel: 'Problème',
          title: 'Résistance équivalente de 3 résistors en dérivation',
          points: 8,
          difficulty: 4,
          prompt:
            'On branche en dérivation trois résistors identiques de R₀ = 60 Ω chacun sous U = 12 V.\nCalcule l’intensité principale I (en A) fournie par la pile.',
          hint: 'R_éq = 60 ÷ 3 = 20 Ω. Puis I = 12 ÷ 20.',
          correctAnswer: '0.6',
          unit: 'A',
          explanationFinal: 'Chaque branche reçoit 12 ÷ 60 = 0,2 A, soit 3 × 0,2 = 0,6 A au total.',
          steps: [
            { title: 'Résistance équivalente et intensité', mathExpression: 'R_éq = 60 ÷ 3 = 20 Ω\nI = 12 ÷ 20 = 0,6 A', explanation: 'Ou I = 3 × (12 ÷ 60) = 0,6 A.', subResult: '0,6 A' },
          ],
        },
      ],
    },
    {
      year: 2006,
      countryId: 'cameroun',
      themeSummary: 'Transformateur · Tests d’ions · Équilibre treuil',
      parts: [
        {
          chapterId: 'phys3-ions-tests',
          partLabel: 'Exercice 1',
          title: 'Détection des ions sulfate SO₄²⁻',
          points: 6,
          difficulty: 1,
          questionType: 'qcm',
          options: [
            'Chlorure de baryum (BaCl₂) → précipité blanc insoluble dans l’acide',
            'Nitrate d’argent (AgNO₃) → précipité jaune',
            'Soude (NaOH) → précipité rouille',
            'Eau de chaux → trouble blanc',
          ],
          prompt: 'Quel réactif permet d’identifier les ions sulfate SO₄²⁻ dans une eau minérale ?',
          hint: 'Les ions Ba²⁺ précipitent avec SO₄²⁻ en BaSO₄ blanc.',
          correctAnswer: 'Chlorure de baryum (BaCl₂) → précipité blanc insoluble dans l’acide',
          explanationFinal: 'Le chlorure de baryum forme un précipité blanc de sulfate de baryum BaSO₄.',
          steps: [
            { title: 'Équation de précipitation', mathExpression: 'Ba²⁺ + SO₄²⁻ ➔ BaSO₄ (blanc)', explanation: 'Test caractéristique officiel.' },
          ],
        },
        {
          chapterId: 'phys3-actions-mecaniques',
          partLabel: 'Exercice 2',
          title: 'Poulie simple & treuil',
          points: 6,
          difficulty: 2,
          prompt:
            'Un treuil de rayon tambour r = 10 cm et de manivelle R = 50 cm permet de hisser un seau d’eau de poids P = 200 N.\nCalcule l’effort minimal F (en N) à exercer sur la manivelle (F × R = P × r).',
          hint: 'F = P × (r ÷ R) = 200 × (10 ÷ 50).',
          correctAnswer: '40',
          unit: 'N',
          explanationFinal: 'F = 200 ÷ 5 = 40 N.',
          steps: [
            { title: 'Équilibre des moments sur le treuil', mathExpression: 'F × 50 = 200 × 10\nF = 2 000 ÷ 50 = 40 N', explanation: 'Gain mécanique de facteur 5.', subResult: '40 N' },
          ],
        },
        {
          chapterId: 'phys3-transformateur-electronique',
          partLabel: 'Problème',
          title: 'Transport haute tension avec transformateur élévateur',
          points: 8,
          difficulty: 3,
          prompt:
            'Une centrale produit sous U₁ = 5 000 V. Un transformateur élévateur (N₁ = 200 spires, N₂ = 4 000 spires) élève la tension pour la ligne haute tension.\nCalcule la tension de transport U₂ en kV.',
          hint: 'Rapport = 4 000 ÷ 200 = 20. U₂ = 5 000 × 20 = 100 000 V = 100 kV.',
          correctAnswer: '100',
          unit: 'kV',
          explanationFinal: 'k = 20 donc U₂ = 20 × 5 kV = 100 kV.',
          steps: [
            { title: 'Calcul du rapport et de U₂', mathExpression: 'k = 4 000 ÷ 200 = 20\nU₂ = 5 kV × 20 = 100 kV', explanation: 'Réduit les pertes par effet Joule sur les longues lignes.', subResult: '100 kV' },
          ],
        },
      ],
    },
    {
      year: 2007,
      countryId: 'benin',
      themeSummary: 'Combustion butane · Énergie mécanique · Diode et redressement',
      parts: [
        {
          chapterId: 'phys3-hydrocarbures-alcools',
          partLabel: 'Exercice 1',
          title: 'Volume d’air nécessaire à la combustion',
          points: 6,
          difficulty: 2,
          prompt:
            'Pour brûler 2 L de méthane, il faut 4 L de dioxygène pur. Sachant que l’air contient 20 % (1/5) de dioxygène,\nquel volume d’air (en L) est nécessaire ?',
          hint: 'V(air) = 5 × V(O₂) = 5 × 4.',
          correctAnswer: '20',
          unit: 'L',
          explanationFinal: '4 L de O₂ correspondent à 5 × 4 = 20 L d’air.',
          steps: [
            { title: 'Passage O₂ ➔ Air (×5)', mathExpression: 'V(air) = 4 ÷ 0,20 = 20 L', explanation: '20 % de O₂ dans l’air.', subResult: '20 L' },
          ],
        },
        {
          chapterId: 'phys3-transformateur-electronique',
          partLabel: 'Exercice 2',
          title: 'Rôle de la diode électroluminescente (DEL)',
          points: 6,
          difficulty: 1,
          questionType: 'qcm',
          options: [
            'Elle ne laisse passer le courant que dans un seul sens (sens passant)',
            'Elle augmente la tension du secteur',
            'Elle mesure la résistance du circuit',
            'Elle transforme le courant continu en alternatif',
          ],
          prompt: 'Quelle est la propriété principale d’une diode dans un circuit électronique ?',
          hint: 'Anode (+) vers Cathode (−) : composant unidirectionnel.',
          correctAnswer: 'Elle ne laisse passer le courant que dans un seul sens (sens passant)',
          explanationFinal: 'La diode permet le redressement du courant alternatif en bloquant une alternance sur deux.',
          steps: [
            { title: 'Fonctionnement unidirectionnel', mathExpression: 'Sens A → K : passante\nSens K → A : bloquée', explanation: 'Indispensable dans les chargeurs.' },
          ],
        },
        {
          chapterId: 'phys3-energie-mecanique',
          partLabel: 'Problème',
          title: 'Vitesse atteinte au bas d’un toboggan',
          points: 8,
          difficulty: 4,
          prompt:
            'Un enfant de masse m = 30 kg descend un toboggan sans frottements d’une hauteur h = 3,2 m (g = 10 N/kg).\nEn utilisant ½ m v² = m g h (donc v² = 2 g h), calcule sa vitesse v en bas en m/s.',
          hint: 'v² = 2 × 10 × 3,2 = 64 ➔ v = √64.',
          correctAnswer: '8',
          unit: 'm/s',
          explanationFinal: 'v² = 64 donc v = 8 m/s (indépendant de la masse !).',
          steps: [
            { title: 'Conservation de Em', mathExpression: '½ m v² = m g h\nv² = 2 g h = 2 × 10 × 3,2 = 64\nv = √64 = 8 m/s', explanation: 'La masse m se simplifie.', subResult: '8 m/s' },
          ],
        },
      ],
    },
    {
      year: 2008,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 2008 : Fer + O₂ · Optique lentille · Électricité',
      parts: [
        {
          chapterId: 'phys3-metaux-oxydation',
          partLabel: 'Exercice 1',
          title: 'Formation de rouille et protection',
          points: 6,
          difficulty: 2,
          prompt:
            'On brûle 16,8 g de fer (M(Fe) = 56 g/mol) dans du dioxygène : 3 Fe + 2 O₂ ➔ Fe₃O₄.\nQuelle quantité de matière n(Fe₃O₄) (en mol) obtient-on ?',
          hint: 'n(Fe) = 16,8 ÷ 56 = 0,3 mol. Puis n(Fe₃O₄) = 0,3 ÷ 3.',
          correctAnswer: '0.1',
          unit: 'mol',
          explanationFinal: 'n(Fe) = 0,3 mol et 3 mol Fe donnent 1 mol Fe₃O₄, soit 0,1 mol.',
          steps: [
            { title: 'Calcul stœchiométrique', mathExpression: 'n(Fe) = 16,8 ÷ 56 = 0,3 mol\nn(Fe₃O₄) = 0,3 ÷ 3 = 0,1 mol', explanation: 'Oxyde magnétique de fer.', subResult: '0,1 mol' },
          ],
        },
        {
          chapterId: 'phys3-lentilles-construction',
          partLabel: 'Exercice 2',
          title: 'Position de l’objet pour une image de même taille',
          points: 6,
          difficulty: 2,
          prompt:
            'Avec une lentille convergente de distance focale f = 15 cm, à quelle distance d = 2f (en cm) devant la lentille faut-il placer l’objet pour obtenir une image réelle de même taille que l’objet ?',
          hint: 'd = 2 × f = 2 × 15.',
          correctAnswer: '30',
          unit: 'cm',
          explanationFinal: 'À 2f = 30 cm, l’image se forme à 2f = 30 cm derrière la lentille avec la même taille (γ = −1).',
          steps: [
            { title: 'Configuration symétrique 2f', mathExpression: 'OA = −2f = −30 cm ⇒ OA’ = +2f = +30 cm', explanation: 'Grandissement égal à −1.', subResult: '30 cm' },
          ],
        },
        {
          chapterId: 'phys3-energie-puissance-seeg',
          partLabel: 'Problème',
          title: 'Facture mensuelle d’un atelier de couture à Franceville',
          points: 8,
          difficulty: 3,
          prompt:
            'Un atelier utilise 2 machines à coudre de 250 W chacune et 5 néons de 40 W chacun, pendant 6 heures par jour sur 25 jours.\nCalcule l’énergie totale consommée en kWh.',
          hint: 'P_tot = 2×250 + 5×40 = 500 + 200 = 700 W = 0,7 kW. Durée = 6 × 25 = 150 h. E = 0,7 × 150.',
          correctAnswer: '105',
          unit: 'kWh',
          explanationFinal: 'P = 0,7 kW pendant 150 h ➔ E = 0,7 × 150 = 105 kWh.',
          steps: [
            { title: '1) Puissance totale en kW', mathExpression: 'P = 500 + 200 = 700 W = 0,7 kW', explanation: 'Conversion W en kW.' },
            { title: '2) Énergie totale', mathExpression: 't = 6 × 25 = 150 h\nE = 0,7 × 150 = 105 kWh', explanation: 'Relevé mensuel.', subResult: '105 kWh' },
          ],
        },
      ],
    },
  ]
);
