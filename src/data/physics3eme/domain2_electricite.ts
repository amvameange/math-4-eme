import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_3EME_ELECTRICITE: Chapter[] = [
  {
    id: 'phys3-conducteurs-ohmiques',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'electricite',
    order: 5,
    title: 'Conducteurs ohmiques : Associations Série, Dérivation & Pont Diviseur',
    badge: 'Physique 3ème · Ch. 5',
    shortDesc: 'Résistance équivalente en série (Req = R₁ + R₂), en dérivation (1/Req = 1/R₁ + 1/R₂), code des couleurs et pont diviseur de tension.',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-yellow-500 to-orange-400',
    readingTimeMinutes: 15,
    visualizerType: 'ohm-seeg',
    illustrationKey: 'association-resistors',
    bossMeta: { name: 'EXPERT DES RÉSISTORS', emoji: '🎛️', xp: 170 },
    kokoSpeech:
      'En 3ème BEPC, on assemble plusieurs résistors ! En SÉRIE, les résistances s’additionnent (Req = R₁ + R₂). En DÉRIVATION, la résistance équivalente est TOUJOURS plus petite que la plus petite des deux : Req = (R₁ × R₂) ÷ (R₁ + R₂) !',
    realWorldHook: {
      title: 'Adapter la tension d’un capteur solaire à Franceville',
      scenario:
        'Un technicien doit obtenir exactement 4 V à partir d’une batterie de 12 V pour alimenter un module électronique. Il assemble deux résistors R₁ et R₂ en série formant un pont diviseur de tension.',
      question:
        'Comment calculer la résistance équivalente d’une association et la tension aux bornes de R₂ ?',
    },
    unitsTable: [
      { symbol: 'Req (série)', quantity: 'Résistance équivalente en série', unit: 'Ohm (Ω)', instrument: 'Req = R₁ + R₂' },
      { symbol: 'Req (dériv.)', quantity: 'Résistance équivalente en dérivation', unit: 'Ohm (Ω)', instrument: 'Req = (R₁ × R₂) ÷ (R₁ + R₂)' },
      { symbol: 'U₂ (diviseur)', quantity: 'Tension de sortie pont diviseur', unit: 'Volt (V)', instrument: 'U₂ = U_G × R₂ ÷ (R₁ + R₂)' },
    ],
    experimentOrActivity: {
      title: 'Mesure à l’ohmmètre de deux résistors en série puis en parallèle',
      materials: ['1 multimètre en position Ohmmètre (Ω)', '1 résistor R₁ = 60 Ω', '1 résistor R₂ = 30 Ω'],
      observation:
        'En série, l’ohmmètre affiche 90 Ω (60 + 30). En dérivation, il affiche 20 Ω (plus petit que 30 Ω !).',
      conclusion:
        'L’association en série augmente la résistance totale ; l’association en dérivation diminue la résistance totale.',
    },
    revisionChecklist: [
      'Je maîtrise Req = R₁ + R₂ en série.',
      'Je maîtrise Req = (R₁ × R₂) ÷ (R₁ + R₂) pour deux résistors en dérivation.',
      'Je sais appliquer la formule du pont diviseur de tension : U₂ = U_G × R₂ ÷ (R₁ + R₂).',
    ],
    keyFormulas: [
      'En SÉRIE : Req = R₁ + R₂ (Req > R₁ et Req > R₂)',
      'En DÉRIVATION (2 résistors) : 1/Req = 1/R₁ + 1/R₂  ⟺  Req = (R₁ × R₂) ÷ (R₁ + R₂)',
      'Pont diviseur de tension : U₂ = U_G × R₂ ÷ (R₁ + R₂)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Associations de Résistors',
      slogan: 'Série ➔ Somme (R₁+R₂) · Dérivation ➔ Produit sur Somme',
      summaryBulletPoints: [
        'Pour deux résistors identiques R en dérivation : Req = R ÷ 2.',
        'Dans un pont diviseur, plus R₂ est grand devant R₁, plus la tension U₂ est grande.',
        'L’ohmmètre se branche toujours HORS CIRCUIT (générateur débranché).',
      ],
      verticalFormulas: [
        {
          name: 'Résistance équivalente en DÉRIVATION',
          badge: '🔀',
          steps: [
            'Données : R₁ = 60 Ω ; R₂ = 30 Ω en dérivation',
            'Req = (R₁ × R₂) ÷ (R₁ + R₂)',
            'Req = (60 × 30) ÷ (60 + 30)',
            'Req = 1 800 ÷ 90 = 20 Ω',
          ],
          resultHighlight: 'Req = 20 Ω',
          explanation: 'Vérification rapide : 20 Ω est bien inférieur à 30 Ω (la plus petite).',
        },
      ],
      kokoTip: 'Astuce BEPC : si deux résistances égales de 100 Ω sont en parallèle, la résistance équivalente vaut tout simplement 100 ÷ 2 = 50 Ω !',
      pitfallToAvoid: 'Écrire Req = 1/R₁ + 1/R₂ sans retourner la fraction à la fin !',
    },
    sections: [
      {
        title: '1. Associations en série et en dérivation',
        explanation: [
          'En série, deux conducteurs ohmiques R₁ et R₂ équivalent à un seul résistor de résistance Req = R₁ + R₂.',
          'En dérivation (parallèle), la résistance équivalente vérifie 1/Req = 1/R₁ + 1/R₂, d’où Req = (R₁ × R₂) ÷ (R₁ + R₂).',
        ],
        rules: [
          {
            name: 'Pont diviseur de tension',
            description: 'Avec R₁ et R₂ en série sous U_G, l’intensité est I = U_G ÷ (R₁ + R₂), donc U₂ = R₂ × I = U_G × R₂ ÷ (R₁ + R₂).',
            example: 'U_G = 12 V, R₁ = 20 Ω, R₂ = 10 Ω | U₂ = 12 × 10 ÷ (20 + 10) | U₂ = 120 ÷ 30 = 4 V',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys3-5-1',
        'phys3-conducteurs-ohmiques',
        'Ex 1 : Association en série',
        1,
        'On branche en série deux résistors R₁ = 47 Ω et R₂ = 33 Ω.\nCalculer la résistance équivalente Req (en Ω).',
        '80',
        'En série, on additionne : Req = R₁ + R₂.',
        'Req = 47 + 33 = 80 Ω.',
        [
          {
            title: 'Additionner les résistances en série',
            explanation: 'Req = R₁ + R₂.',
            math: 'Req = 47 + 33 | Req = 80 Ω',
            subResult: '80 Ω',
          },
        ],
        'Ω',
        '🔌'
      ),
      mkNum(
        'phys3-5-2',
        'phys3-conducteurs-ohmiques',
        'Ex 2 : Association en dérivation',
        2,
        'On branche en dérivation deux résistors R₁ = 60 Ω et R₂ = 20 Ω.\nCalculer la résistance équivalente Req (en Ω).',
        '15',
        'Utilise Req = (R₁ × R₂) ÷ (R₁ + R₂).',
        'Req = 1 200 ÷ 80 = 15 Ω.',
        [
          {
            title: 'Appliquer la formule Produit ÷ Somme',
            explanation: 'Req = (60 × 20) ÷ (60 + 20).',
            math: 'Req = 1 200 ÷ 80 | Req = 15 Ω',
            subResult: '15 Ω',
          },
        ],
        'Ω',
        '🔀'
      ),
    ],
  },

  {
    id: 'phys3-energie-puissance-seeg',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'electricite',
    order: 6,
    title: 'Puissance, Effet Joule (E = R·I²·t) & Facture SEEG (BEPC)',
    badge: 'Physique 3ème · Ch. 6',
    shortDesc: 'P = U·I, loi de Joule (P = R·I², E = R·I²·t), bilan énergétique et lecture avancée du compteur SEEG en F CFA.',
    themeColor: '#ef4444',
    themeGradient: 'from-rose-500 via-amber-500 to-yellow-400',
    readingTimeMinutes: 15,
    visualizerType: 'ohm-seeg',
    illustrationKey: 'puissance-seeg',
    bossMeta: { name: 'AUDITEUR SEEG BEPC', emoji: '⚡', xp: 170 },
    kokoSpeech:
      'Au BEPC Gabon, la facture SEEG et la Loi de Joule tombent presque chaque année ! Retiens les deux formes pour un appareil purement chauffant (fer à repasser, résistance) : P = U × I ET P = R × I² !',
    realWorldHook: {
      title: 'Optimiser la facture SEEG et le disjoncteur d’une maison à Libreville',
      scenario:
        'Un ménage à Akanda possède un disjoncteur réglé sur I_max = 15 A sous U = 220 V (soit P_max = 3 300 W). On y branche simultanément un climatiseur (1 800 W), un fer à repasser (1 200 W) et un téléviseur (150 W).',
      question:
        'Le disjoncteur saute-t-il ? Et combien coûte l’utilisation de ces appareils sur 30 jours en F CFA ?',
    },
    unitsTable: [
      { symbol: 'P', quantity: 'Puissance électrique', unit: 'Watt (W) · kW', instrument: 'P = U × I = R × I² = U² ÷ R' },
      { symbol: 'E', quantity: 'Énergie électrique / calorifique', unit: 'Joule (J) ou kWh', instrument: '1 kWh = 3 600 000 J (3,6 MJ)' },
      { symbol: 'Coût', quantity: 'Montant facture SEEG', unit: 'F CFA', instrument: 'E (kWh) × Prix du kWh' },
    ],
    experimentOrActivity: {
      title: 'Échauffement d’un fil résistant plongé dans un calorimètre',
      materials: ['1 résistor R = 10 Ω', '1 générateur 12 V', '1 thermomètre', '1 bécher d’eau (200 mL)'],
      observation:
        'Lorsqu’on double l’intensité I (de 0,5 A à 1 A), l’élévation de température ΔT est 4 fois plus importante dans le même temps !',
      conclusion:
        'L’énergie thermique libérée par effet Joule est proportionnelle au carré de l’intensité : E = R × I² × t.',
    },
    revisionChecklist: [
      'Je sais calculer P = R × I² pour un résistor ou appareil chauffant.',
      'Je sais convertir entre Joules et kWh : 1 kWh = 3 600 000 J.',
      'Je sais vérifier si P_totale ≤ P_max du disjoncteur SEEG (P_max = U × I_max).',
    ],
    keyFormulas: [
      'Puissance électrique : P = U × I  |  Pour un résistor (Effet Joule) : P = R × I² = U² ÷ R',
      'Énergie électrique : E = P × t (en Joules si W et s ; en kWh si kW et h)',
      'Conversion BEPC : 1 kWh = 1 000 W × 3 600 s = 3 600 000 J = 3,6 × 10⁶ J',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Effet Joule & Facture SEEG',
      slogan: 'P = U×I = R×I² · 1 kWh = 3,6×10⁶ J · Coût = E(kWh) × Tarif',
      summaryBulletPoints: [
        'Effet Joule utile : fer à repasser, chauffe-eau, fusible (qui fond en cas de surintensité).',
        'Effet Joule nuisible : échauffement des câbles électriques, perte d’énergie.',
        'En dérivation, les puissances de tous les appareils allumés S’ADDITIONNENT : P_tot = P₁ + P₂ + …',
      ],
      verticalFormulas: [
        {
          name: 'Énergie par Effet Joule (en Joules)',
          badge: '🔥',
          steps: [
            'Données : R = 50 Ω ; I = 2 A ; t = 5 min = 300 s',
            'E = R × I² × t',
            'E = 50 × 2² × 300 = 50 × 4 × 300',
            'E = 60 000 J = 60 kJ',
          ],
          resultHighlight: 'E = 60 kJ',
          explanation: 'Convertir t en secondes pour obtenir directement des Joules.',
        },
      ],
      kokoTip: 'Sur une facture SEEG, relève Ancien Index et Nouvel Index : Consommation = Nouvel − Ancien (en kWh), puis multiplie par le tarif et ajoute la redevance/TVA si demandée !',
      pitfallToAvoid: 'Oublier d’élever I au carré dans P = R × I² !',
    },
    sections: [
      {
        title: '1. Loi de Joule et conversions d’énergie',
        explanation: [
          'L’effet Joule est le dégagement de chaleur produit par le passage du courant électrique dans un conducteur ohmique. Pour un résistor de résistance R, U = R × I donc P = U × I = R × I².',
          'L’énergie thermique dissipée pendant la durée t vaut E = R × I² × t.',
        ],
        rules: [
          {
            name: 'Passage Joules ↔ kWh',
            description: '1 Wh = 3 600 J et 1 kWh = 3 600 000 J.',
            example: 'P = 2 000 W = 2 kW pendant t = 3 h | E = 2 × 3 = 6 kWh | En Joules : 6 × 3 600 000 = 21 600 000 J',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys3-6-1',
        'phys3-energie-puissance-seeg',
        'Ex 1 : Puissance dissipée par effet Joule',
        1,
        'Un thermoplongeur de résistance R = 40 Ω est parcouru par un courant d’intensité I = 3 A.\nCalculer sa puissance calorifique P (en W).',
        '360',
        'Applique P = R × I² = 40 × 3².',
        'P = 40 × 9 = 360 W.',
        [
          {
            title: 'Appliquer la loi de Joule P = R × I²',
            explanation: '3² = 9, puis 40 × 9 = 360 W.',
            math: 'P = 40 × 3² | P = 40 × 9 = 360 W',
            subResult: '360 W',
          },
        ],
        'W',
        '🔥'
      ),
      mkNum(
        'phys3-6-2',
        'phys3-energie-puissance-seeg',
        'Ex 2 : Relevé compteur SEEG et facture',
        2,
        'Le compteur SEEG d’une boutique à Lambaréné indiquait 4 250 kWh le 1er du mois et 4 430 kWh à la fin du mois.\nAu tarif de 115 F CFA le kWh, quel est le coût de l’énergie consommée (en F CFA) ?',
        '20700',
        '1) Calcule E = 4 430 − 4 250 = 180 kWh. 2) Multiplie par 115 F CFA.',
        'Montant = 180 × 115 = 20 700 F CFA.',
        [
          {
            title: 'Calculer la consommation E',
            explanation: 'E = Nouvel index − Ancien index.',
            math: 'E = 4 430 − 4 250 | E = 180 kWh',
          },
          {
            title: 'Calculer le coût en F CFA',
            explanation: '180 × 115 = 20 700 F CFA.',
            math: 'Coût = 180 × 115 | Coût = 20 700 F CFA',
            subResult: '20 700 F CFA',
          },
        ],
        'F CFA',
        '🏠'
      ),
    ],
  },

  {
    id: 'phys3-transformateur-electronique',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'electricite',
    order: 7,
    title: 'Transformateur, Redressement & Transistor (Électronique 3ème)',
    badge: 'Physique 3ème · Ch. 7',
    shortDesc: 'Rapport de transformation (Us/Up = Ns/Np), redressement mono/double alternance, condensateur de lissage et transistor (commutateur).',
    themeColor: '#0284c7',
    themeGradient: 'from-sky-500 via-blue-600 to-indigo-500',
    readingTimeMinutes: 14,
    visualizerType: 'electricite',
    illustrationKey: 'transformateur-diode',
    bossMeta: { name: 'TECHNICIEN ÉLECTRONIQUE', emoji: '📟', xp: 170 },
    kokoSpeech:
      'Pour charger ton téléphone depuis une prise SEEG 220 V alternatif, l’adaptateur fait 3 étapes : 1) Un TRANSFORMATEUR abaisse 220 V en ~6 V, 2) Des DIODES redressent le courant alternatif en un seul sens, 3) Un CONDENSATEUR lisse la tension en continu !',
    realWorldHook: {
      title: 'Comment fonctionne le chargeur de téléphone branché sur le secteur 220 V ?',
      scenario:
        'La prise SEEG délivre une tension alternative sinusoïdale de 220 V (50 Hz), alors que la batterie d’un smartphone exige une tension continue de 5 V.',
      question:
        'Quel rôle jouent respectivement le transformateur, le pont de diodes, le condensateur et le transistor ?',
    },
    unitsTable: [
      { symbol: 'k = Us / Up', quantity: 'Rapport de transformation', unit: 'Sans unité', instrument: 'k = Ns / Np (spires)' },
      { symbol: 'f = 1 / T', quantity: 'Fréquence du secteur SEEG', unit: 'Hertz (Hz) · T en s', instrument: 'Oscilloscope (50 Hz)' },
      { symbol: 'I_C = β × I_B', quantity: 'Gain en courant du transistor', unit: 'Sans unité', instrument: 'Transistor NPN (B, C, E)' },
    ],
    experimentOrActivity: {
      title: 'Observer le redressement d’une tension alternative',
      materials: ['1 générateur BF 12 V ~', '1 pont de 4 diodes (Graetz)', '1 condensateur 470 µF', '1 oscilloscope / multimètre'],
      observation:
        'Avant le pont : tension alternative (+ et −). Après le pont : alternances toutes positives. Avec le condensateur en parallèle : tension presque plate (continue).',
      conclusion:
        'Le transformateur adapte la valeur efficace ; le pont de diodes redresse ; le condensateur lisse la tension.',
    },
    revisionChecklist: [
      'Je distingue transformateur abaisseur (Ns < Np ➔ Us < Up) et élévateur (Ns > Np ➔ Us > Up).',
      'Je connais les 3 bornes d’un transistor NPN : Base (B), Collecteur (C), Émetteur (E).',
      'Je sais calculer Us à partir de Up, Np et Ns : Us = Up × (Ns ÷ Np).',
    ],
    keyFormulas: [
      'Transformateur idéal : Us ÷ Up = Ns ÷ Np  (abaisseur si Ns < Np ; élévateur si Ns > Np)',
      'Fréquence : f = 1 ÷ T (Gabon SEEG : f = 50 Hz, donc période T = 0,02 s = 20 ms)',
      'Transistor NPN (en régime linéaire) : I_E = I_B + I_C et I_C = β × I_B',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Transformateur & Électronique',
      slogan: 'Us/Up = Ns/Np · Pont de diodes = Redresseur · Condensateur = Lissage',
      summaryBulletPoints: [
        'Un transformateur ne fonctionne JAMAIS en courant continu (pile), uniquement en courant alternatif !',
        'Une diode seule réalise un redressement mono-alternance ; un pont de 4 diodes réalise un redressement double-alternance.',
        'Le transistor peut fonctionner en interrupteur commandé (bloqué si U_BE < 0,6 V ; saturé au-delà).',
      ],
      verticalFormulas: [
        {
          name: 'Tension secondaire d’un transformateur',
          badge: '🔌',
          steps: [
            'Données : Up = 220 V ; Np = 1 100 spires ; Ns = 60 spires',
            'Us = Up × (Ns ÷ Np)',
            'Us = 220 × (60 ÷ 1 100)',
            'Us = 13 200 ÷ 1 100 = 12 V',
          ],
          resultHighlight: 'Us = 12 V (abaisseur)',
          explanation: 'Comme Ns < Np, le transformateur abaisse la tension de 220 V à 12 V.',
        },
      ],
      kokoTip: 'Moyen mnémotechnique pour le transformateur : « Secondaire sur Primaire » des deux côtés : Us/Up = Ns/Np !',
      pitfallToAvoid: 'Croire qu’un transformateur fonctionne avec une pile plate de 4,5 V (courant continu = aucune variation de flux = Us = 0 V) !',
    },
    sections: [
      {
        title: '1. Le transformateur et la chaîne d’alimentation',
        explanation: [
          'Un transformateur est constitué de deux bobines de fil de cuivre enroulées autour d’un noyau de fer feuilleté : le primaire (Np spires) et le secondaire (Ns spires).',
          'En courant alternatif sinusoïdal, le rapport des tensions efficaces vaut Us ÷ Up = Ns ÷ Np.',
        ],
        rules: [
          {
            name: 'Rôle du transistor NPN',
            description: 'Un faible courant de commande entrant par la Base (I_B) permet de piloter un courant beaucoup plus fort entre le Collecteur et l’Émetteur (I_C = β × I_B) : détecteur de lumière (LDR) ou d’humidité.',
            example: 'I_B = 2 mA et gain β = 100 | I_C = β × I_B = 100 × 2 mA | I_C = 200 mA = 0,2 A',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys3-7-1',
        'phys3-transformateur-electronique',
        'Ex 1 : Calculer la tension au secondaire',
        1,
        'Un transformateur comporte Np = 2 000 spires au primaire alimenté sous Up = 220 V, et Ns = 100 spires au secondaire.\nCalculer la tension secondaire Us (en V).',
        '11',
        'Applique Us = Up × (Ns ÷ Np).',
        'Us = 220 × (100 ÷ 2 000) = 11 V.',
        [
          {
            title: 'Calculer le rapport Ns ÷ Np',
            explanation: '100 ÷ 2 000 = 0,05.',
            math: 'k = Ns ÷ Np = 100 ÷ 2 000 | k = 0,05',
          },
          {
            title: 'Multiplier par Up',
            explanation: 'Us = 220 × 0,05 = 11 V.',
            math: 'Us = 220 × 0,05 | Us = 11 V',
            subResult: '11 V',
          },
        ],
        'V',
        '📟'
      ),
      mkQcm(
        'phys3-7-2',
        'phys3-transformateur-electronique',
        'Ex 2 : Rôle des composants d’un chargeur',
        2,
        'Dans un adaptateur secteur 220 V AC ➔ 5 V DC, quel composant réalise le redressement double alternance ?',
        [
          'Le pont de 4 diodes (pont de Graetz)',
          'Le condensateur seul',
          'Le noyau de fer du transformateur',
          'La résistance de protection',
        ],
        'Le pont de 4 diodes (pont de Graetz)',
        'Le transformateur abaisse, le pont de diodes redresse, le condensateur lisse.',
        'Le pont de 4 diodes redresse les deux alternances du courant alternatif.',
        [
          {
            title: 'Identifier chaque étage de l’alimentation',
            explanation: 'Transformation (abaisser) ➔ Redressement (pont de diodes) ➔ Filtrage/Lissage (condensateur).',
            math: 'Redressement = Pont de 4 diodes',
            subResult: 'Pont de diodes',
          },
        ],
        '🔌'
      ),
    ],
  },
];
