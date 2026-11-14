import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_DOMAIN3_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHAPITRE 12 : MASSE, VOLUME ET MASSE VOLUMIQUE
  // ==========================================
  {
    id: 'phys-masse-volumique',
    subject: 'physique',
    domainId: 'mecanique',
    order: 12,
    title: 'Masse, volume et masse volumique (ρ = m ÷ V)',
    badge: 'Physique Ch. 12 · 4ème',
    shortDesc: 'Mesures à la balance et par déplacement d’eau (éprouvette), formule ρ = m ÷ V en g/cm³ ou kg/m³, et flottabilité (bois d’okoumé vs fer).',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-teal-500 to-sky-500',
    readingTimeMinutes: 14,
    visualizerType: 'mecanique',
    illustrationKey: 'masse-volumique',
    bossMeta: { name: 'GARDIEN DE L’OKOUMÉ', emoji: '🪵', xp: 180 },
    kokoSpeech:
      'Pourquoi une énorme grume d’okoumé flotte sur le fleuve Ogooué alors qu’une toute petite clé en fer coule au fond ? Ce n’est pas une question de poids total, mais de MASSE VOLUMIQUE ρ = m ÷ V comparée à celle de l’eau (1 g/cm³) !',
    realWorldHook: {
      title: 'Le flottage des billes d’okoumé sur l’Ogooué vers Port-Gentil',
      scenario:
        'Depuis Lambaréné jusqu’au port de Port-Gentil, d’immenses radeaux de billes de bois d’okoumé flottent sur l’eau du fleuve, alors qu’un petit écrou en acier tombé d’un remorqueur coule immédiatement.',
      question:
        'Comment calculer la masse volumique d’un matériau et prévoir à coup sûr s’il va flotter ou couler ?',
    },
    unitsTable: [
      { symbol: 'm', quantity: 'Masse du corps', unit: 'gramme (g) ou kilogramme (kg)', instrument: 'Balance' },
      { symbol: 'V', quantity: 'Volume', unit: 'cm³ (1 mL = 1 cm³) ou m³', instrument: 'Éprouvette graduée' },
      { symbol: 'ρ (rhô)', quantity: 'Masse volumique', unit: 'g/cm³ ou kg/m³ (1 g/cm³ = 1 000 kg/m³)', instrument: 'Calcul ρ = m ÷ V' },
    ],
    experimentOrActivity: {
      title: 'Mesurer le volume d’un caillou par déplacement d’eau',
      materials: ['1 éprouvette graduée de 100 mL', 'De l’eau', '1 caillou ou boulon', '1 balance électronique'],
      observation:
        'On verse V1 = 50 mL d’eau. On plonge doucement le boulon pesant m = 78 g : le niveau monte à V2 = 60 mL. Donc V = 60 − 50 = 10 mL = 10 cm³.',
      conclusion:
        'ρ = 78 ÷ 10 = 7,8 g/cm³. Le boulon est donc probablement en fer/acier, et comme 7,8 > 1, il coule dans l’eau !',
    },
    revisionChecklist: [
      'Je sais lire le bas du ménisque sur une éprouvette graduée et calculer V = V2 − V1.',
      'Je sais utiliser le triangle magique : ρ = m ÷ V, m = ρ × V, V = m ÷ ρ.',
      'Je connais la masse volumique de l’eau : ρ_eau = 1 g/cm³ = 1 kg/L = 1 000 kg/m³.',
    ],
    keyFormulas: [
      'Masse volumique : ρ = m ÷ V   (en g/cm³ si m en g et V en cm³)',
      'Retrouver la masse : m = ρ × V   |   Retrouver le volume : V = m ÷ ρ',
      'Eau pure : ρ_eau = 1 g/cm³ = 1 kg/L = 1 000 kg/m³',
      'Flottabilité : si ρ_objet < ρ_eau (1 g/cm³) ➔ il FLOTTE ; si ρ_objet > 1 g/cm³ ➔ il COULE',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Masse Volumique & Flottabilité',
      slogan: 'ρ = m ÷ V : identifier un métal pur et prédire la flottabilité !',
      summaryBulletPoints: [
        '1 mL = 1 cm³   |   1 L = 1 dm³ = 1 000 cm³   |   1 m³ = 1 000 L.',
        'Conversions utiles : 1 g/cm³ = 1 000 kg/m³.',
        'Valeurs repères : Okoumé ≈ 0,45 g/cm³ (flotte) ; Huile ≈ 0,9 g/cm³ (flotte) ; Eau = 1,0 g/cm³ ; Aluminium = 2,7 g/cm³ ; Fer = 7,8 g/cm³ ; Or = 19,3 g/cm³.',
        'La masse volumique est caractéristique d’un matériau : un petit morceau d’or et un gros lingot d’or ont exactement la même masse volumique (19,3 g/cm³).',
      ],
      verticalFormulas: [
        {
          name: 'Calculer la masse volumique ρ',
          badge: '🧪',
          steps: [
            'Données : m = 54 g ; V = 20 cm³',
            'Formule : ρ = m ÷ V',
            'ρ = 54 ÷ 20',
            'ρ = 2,7 g/cm³ (Aluminium !)',
          ],
          resultHighlight: 'ρ = 2,7 g/cm³',
          explanation: 'On divise la masse en grammes par le volume en cm³.',
        },
        {
          name: 'Calculer la masse m à partir de ρ et V',
          badge: '🪵',
          steps: [
            'Bille d’okoumé : ρ = 0,45 g/cm³ ; V = 2 000 cm³',
            'Formule : m = ρ × V',
            'm = 0,45 × 2 000 = 900 g = 0,9 kg',
          ],
          resultHighlight: 'm = 900 g',
          explanation: 'On multiplie la masse volumique par le volume.',
        },
      ],
      kokoTip: 'Pour comparer avec l’eau, retiens « 1 litre d’eau pèse 1 kg » donc 1 cm³ d’eau pèse 1 g (ρ_eau = 1 g/cm³) !',
      pitfallToAvoid: 'Diviser V par m au lieu de m par V ! Rappelle-toi l’unité « g/cm³ » : le gramme (m) est en HAUT et le cm³ (V) est en BAS !',
    },
    sections: [
      {
        title: '1. Mesurer la masse et le volume d’un solide ou d’un liquide',
        explanation: [
          'La masse m (quantité de matière) se mesure avec une balance (en kg ou g). Le volume V (place occupée dans l’espace) se mesure pour un liquide avec une éprouvette graduée (en mL = cm³).',
          'Pour un solide de forme quelconque (caillou, clé), on mesure son volume par déplacement d’eau : V_solide = V_final − V_initial.',
        ],
        rules: [
          {
            name: 'Lecture sur éprouvette graduée',
            description: 'Placer l’œil exactement à l’horizontale du bas du ménisque (la surface courbe de l’eau).',
            example: 'Eau seule : V1 = 40 mL | Eau + pierre : V2 = 65 mL | V_pierre = 65 - 40 = 25 cm³',
          },
        ],
      },
      {
        title: '2. Masse volumique ρ = m ÷ V et flottabilité',
        explanation: [
          'La masse volumique ρ d’une substance est le quotient de sa masse m par son volume V : ρ = m ÷ V.',
          'Dans l’eau (ρ_eau = 1 g/cm³), tout corps homogène plein dont la masse volumique est inférieure à 1 g/cm³ flotte (huile, bois d’okoumé, glace) ; sinon il coule.',
        ],
        rules: [
          {
            name: 'Identifier un métal inconnu',
            description: 'Chaque métal pur possède sa propre masse volumique constante.',
            example: 'Bracelet de m = 38,6 g et V = 2 cm³ | ρ = 38,6 ÷ 2 = 19,3 g/cm³ ➔ C’est de l’or pur !',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys-12-1',
        'phys-masse-volumique',
        'Ex 1 : Identifier un métal par sa masse volumique',
        1,
        'Un cylindre métallique a une masse m = 135 g et un volume V = 50 cm³. Calcule sa masse volumique ρ (en g/cm³).',
        '2.7',
        'Divise la masse par le volume : ρ = 135 ÷ 50.',
        'La masse volumique vaut ρ = 2,7 g/cm³ (c’est de l’aluminium !).',
        [
          {
            title: 'Appliquer ρ = m ÷ V',
            explanation: 'm = 135 g et V = 50 cm³.',
            math: 'ρ = 135 ÷ 50 | ρ = 2,7 g/cm³',
            rule: 'ρ = m ÷ V',
            subResult: '2,7 g/cm³',
          },
        ],
        'g/cm³',
        '🧪'
      ),
      mkNum(
        'phys-12-2',
        'phys-masse-volumique',
        'Ex 2 : Déplacement d’eau dans l’éprouvette',
        2,
        'Une éprouvette contient V1 = 60 mL d’eau. On y plonge une médaille en fer de masse m = 156 g ; le niveau monte à V2 = 80 mL. Calcule la masse volumique de cette médaille (en g/cm³).',
        '7.8',
        '1) Volume V = 80 − 60 = 20 mL = 20 cm³. 2) ρ = 156 ÷ 20.',
        'Le volume est 20 cm³ et ρ = 7,8 g/cm³.',
        [
          {
            title: 'Calculer le volume par différence',
            explanation: '1 mL = 1 cm³.',
            math: 'V = 80 - 60 = 20 mL = 20 cm³',
            subResult: '20 cm³',
          },
          {
            title: 'Calculer ρ = m ÷ V',
            explanation: '156 ÷ 20 = 7,8 g/cm³.',
            math: 'ρ = 156 ÷ 20 | ρ = 7,8 g/cm³',
            subResult: '7,8 g/cm³',
          },
        ],
        'g/cm³',
        '📏'
      ),
      mkNum(
        'phys-12-3',
        'phys-masse-volumique',
        'Ex 3 : Calculer la masse d’un bloc d’okoumé',
        2,
        'Un plateau de bois d’okoumé a une masse volumique ρ = 0,45 g/cm³ et un volume V = 4 000 cm³. Quelle est sa masse m en kilogrammes (kg) ?',
        '1.8',
        '1) m = 0,45 × 4 000 = 1 800 g. 2) Convertis en kg en divisant par 1 000.',
        'Le plateau a une masse de 1,8 kg.',
        [
          {
            title: 'Calculer m en grammes',
            explanation: 'm = ρ × V.',
            math: 'm = 0,45 × 4 000 | m = 1 800 g',
            subResult: '1 800 g',
          },
          {
            title: 'Convertir en kilogrammes',
            explanation: '1 800 ÷ 1 000 = 1,8 kg.',
            math: 'm = 1,8 kg',
            subResult: '1,8 kg',
          },
        ],
        'kg',
        '🪵'
      ),
      mkQcm(
        'phys-12-4',
        'phys-masse-volumique',
        'Ex 4 : Flotte ou coule dans l’eau ?',
        1,
        'On verse dans un même verre de l’eau (ρ = 1,0 g/cm³) et de l’huile de palme raffinée (ρ = 0,91 g/cm³). Que fait l’huile ?',
        [
          'Elle flotte au-dessus de l’eau',
          'Elle coule au fond du verre',
          'Elle disparaît par évaporation instantanée',
          'Elle reste uniquement au centre en boule',
        ],
        'Elle flotte au-dessus de l’eau',
        'Compare 0,91 et 1,0 : le liquide le moins dense remonte toujours à la surface !',
        'Comme ρ_huile (0,91) < ρ_eau (1,0), l’huile flotte au-dessus de l’eau.',
        [
          {
            title: 'Comparer les masses volumiques',
            explanation: '0,91 g/cm³ < 1,0 g/cm³.',
            math: 'ρ_huile < ρ_eau ➔ L’huile flotte sur l’eau',
            subResult: 'Elle flotte',
          },
        ],
        '💧'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 13 : ACTIONS MÉCANIQUES, FORCES & DYNAMOMÈTRE
  // ==========================================
  {
    id: 'phys-forces-dynamometre',
    subject: 'physique',
    domainId: 'mecanique',
    order: 13,
    title: 'Les actions mécaniques, modélisation par une force et dynamomètre',
    badge: 'Physique Ch. 13 · 4ème',
    shortDesc: 'Effets dynamique et statique, actions de contact vs à distance, 4 caractéristiques du vecteur force (F en Newton N) et mesure au dynamomètre.',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-500 via-sky-500 to-teal-400',
    readingTimeMinutes: 13,
    visualizerType: 'mecanique',
    illustrationKey: 'forces-dynamometre',
    bossMeta: { name: 'TITAN DU NEWTON', emoji: '🏹', xp: 160 },
    kokoSpeech:
      'Une force ne se voit pas, on voit ses EFFETS (bouger, déformer) ! On la dessine par une flèche (vecteur F) avec 4 caractéristiques précises, et on la mesure en Newtons (N) avec un DYNAMOMÈTRE !',
    realWorldHook: {
      title: 'Tirer une pirogue sur la berge ou attirer un clou avec un aimant',
      scenario:
        'Pour hisser une pirogue sur le sable, les pêcheurs tirent avec une corde. En revanche, un aimant attire un clou en fer à plusieurs centimètres sans même le toucher.',
      question:
        'Comment classer ces deux actions mécaniques et comment les représenter précisément sur un schéma de physique ?',
    },
    unitsTable: [
      { symbol: 'F', quantity: 'Intensité (valeur) d’une force', unit: 'Newton (N)', instrument: 'Dynamomètre' },
      { symbol: 'F⃗', quantity: 'Vecteur force (flèche)', unit: 'Point d’app., direction, sens, valeur', instrument: 'Échelle (ex: 1 cm ↔ 10 N)' },
      { symbol: 'Contact / Distance', quantity: 'Types d’actions', unit: 'Localisée, répartie, à distance', instrument: 'Bilan des forces' },
    ],
    experimentOrActivity: {
      title: 'Étalonner et lire un dynamomètre à ressort',
      materials: ['1 dynamomètre gradué de 0 à 10 N', '1 trousse d’écolier', '1 règle graduée'],
      observation:
        'Au repos à vide, l’aiguille indique 0 N. Lorsqu’on accroche la trousse, le ressort s’allonge et l’index se stabilise sur 4,5 N.',
      conclusion:
        'Le dynamomètre mesure la valeur d’une force en Newton (N) grâce à l’allongement proportionnel de son ressort.',
    },
    revisionChecklist: [
      'Je sais citer les 2 effets d’une force : effet dynamique (mettre en mouvement / modifier la trajectoire) et effet statique (déformer / maintenir au repos).',
      'Je connais les 4 caractéristiques d’une force : Point d’application, Direction (droite d’action), Sens, Intensité (en N).',
      'Je sais tracer une flèche à l’échelle donnée (ex : si 1 cm ↔ 20 N, une force de 60 N mesure 3 cm).',
    ],
    keyFormulas: [
      'Unité d’intensité d’une force : le Newton (symbole N) — appareil : Dynamomètre',
      'Les 4 caractéristiques d’une force F⃗ : 1) Point d’application, 2) Direction, 3) Sens, 4) Intensité (en N)',
      'Longueur de la flèche sur dessin = Valeur (en N) ÷ Échelle (en N/cm)',
      'Actions à distance : attraction gravitationnelle (poids), magnétique (aimant), électrique',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Actions Mécaniques & Forces',
      slogan: '4 caractéristiques + une flèche tracée à l’échelle en Newtons (N)',
      summaryBulletPoints: [
        'Action de contact localisée : en un point précis (corde qui tire, pied sur un ballon).',
        'Action de contact répartie : sur toute une surface (vent sur une voile, eau sur la coque).',
        'Action à distance : sans aucun contact (Terre qui attire une mangue, aimant sur du fer).',
        'Notation rigoureuse : F⃗ désigne le vecteur (la flèche), F (sans flèche) désigne sa valeur en Newtons.',
      ],
      verticalFormulas: [
        {
          name: 'Calculer la longueur de la flèche à l’échelle',
          badge: '📏',
          steps: [
            'Force F = 50 N ; Échelle : 1 cm ↔ 20 N',
            'Longueur = 50 ÷ 20',
            'Longueur = 2,5 cm',
          ],
          resultHighlight: 'Flèche de 2,5 cm',
          explanation: 'On divise l’intensité de la force par ce que représente 1 cm.',
        },
      ],
      kokoTip: 'Ne confonds jamais DIRECTION (la droite : verticale, horizontale, oblique) et SENS (le bout de la flèche : vers le bas, vers le haut, vers la droite) !',
      pitfallToAvoid: 'Écrire F⃗ = 40 N : faux ! C’est F = 40 N (sans flèche pour la valeur numérique).',
    },
    sections: [
      {
        title: '1. Actions mécaniques et effets d’une force',
        explanation: [
          'Une action mécanique s’exerce toujours d’un acteur (donneur) sur un receveur. Elle peut soit modifier le mouvement du receveur (effet dynamique : accélérer, freiner, dévier), soit le déformer ou le maintenir immobile (effet statique).',
          'On distingue les actions de contact (corde, raquette, vent) et les actions à distance (gravitation, aimant).',
        ],
        rules: [
          {
            name: 'Mesure au dynamomètre',
            description: 'L’intensité d’une force se mesure avec un dynamomètre et s’exprime en Newton (N).',
            example: '1 graduation = 0,5 N | Aiguille sur la 8ème graduation ➔ F = 8 × 0,5 = 4 N',
          },
        ],
      },
      {
        title: '2. Les 4 caractéristiques du vecteur force F⃗',
        explanation: [
          'Toute force est modélisée par un segment fléché F⃗ défini par : son point d’application (origine), sa direction (droite d’action), son sens (orientation de la flèche) et son intensité F en Newtons.',
        ],
        rules: [
          {
            name: 'Représentation graphique à l’échelle',
            description: 'Pour représenter F = 30 N avec l’échelle 1 cm ↔ 10 N, on trace une flèche de longueur 30 ÷ 10 = 3 cm.',
            example: 'F = 45 N ; Échelle 1 cm ↔ 15 N | Longueur = 45 ÷ 15 = 3 cm',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-13-1',
        'phys-forces-dynamometre',
        'Ex 1 : Unité et appareil de mesure d’une force',
        1,
        'Quelle est l’unité légale d’une force et quel appareil permet de la mesurer ?',
        [
          'Le Newton (N), mesuré avec un dynamomètre',
          'Le kilogramme (kg), mesuré avec une balance',
          'Le Volt (V), mesuré avec un voltmètre',
          'Le Pascal (Pa), mesuré avec un thermomètre',
        ],
        'Le Newton (N), mesuré avec un dynamomètre',
        'Le kilogramme mesure la masse, le Newton mesure la force !',
        'Une force s’exprime en Newtons (N) et se mesure avec un dynamomètre.',
        [
          {
            title: 'Associer grandeur, unité et appareil',
            explanation: 'Force ➔ Newton (N) ➔ Dynamomètre à ressort.',
            math: 'Grandeur : Force | Unité : Newton (N) | Appareil : Dynamomètre',
            subResult: 'Newton (N) · Dynamomètre',
          },
        ],
        '🏹'
      ),
      mkQcm(
        'phys-13-2',
        'phys-forces-dynamometre',
        'Ex 2 : Action à distance vs Action de contact',
        1,
        'Parmi les actions suivantes, laquelle est une action mécanique À DISTANCE ?',
        [
          'Un joueur frappe un ballon du pied',
          'Un aimant attire un clou en fer sans le toucher',
          'Le vent pousse la voile d’une pirogue',
          'Une corde tire un seau d’eau du puits',
        ],
        'Un aimant attire un clou en fer sans le toucher',
        'Le ballon, la voile et le seau subissent tous un contact direct.',
        'L’action magnétique d’un aimant (comme la gravitation) agit sans aucun contact matériel.',
        [
          {
            title: 'Vérifier la présence de contact',
            explanation: 'L’aimant attire le clou à travers l’air sans le toucher.',
            math: 'Pas de contact ➔ Action à distance (magnétique)',
            subResult: 'Aimant sur clou',
          },
        ],
        '🧲'
      ),
      mkNum(
        'phys-13-3',
        'phys-forces-dynamometre',
        'Ex 3 : Tracer un vecteur force à l’échelle',
        2,
        'Un pêcheur tire un filet avec une force horizontale d’intensité F = 120 N. L’échelle du schéma est « 1 cm représente 30 N ». Quelle longueur doit avoir la flèche sur le dessin (en cm) ?',
        '4',
        'Divise l’intensité par la valeur de 1 cm : 120 ÷ 30.',
        'La flèche doit mesurer 4 cm.',
        [
          {
            title: 'Calculer la longueur avec l’échelle',
            explanation: '30 N ➔ 1 cm donc 120 N ➔ 120 ÷ 30.',
            math: 'L = 120 ÷ 30 | L = 4 cm',
            subResult: '4 cm',
          },
        ],
        'cm',
        '📏'
      ),
      mkQcm(
        'phys-13-4',
        'phys-forces-dynamometre',
        'Ex 4 : Direction vs Sens d’une force',
        2,
        'Une mangue tombe verticalement du haut d’un arbre vers le sol. Quelle est la DIRECTION et quel est le SENS de la force exercée par la Terre ?',
        [
          'Direction : verticale ; Sens : vers le bas',
          'Direction : vers le bas ; Sens : verticale',
          'Direction : horizontale ; Sens : vers la gauche',
          'Direction : circulaire ; Sens : vers le haut',
        ],
        'Direction : verticale ; Sens : vers le bas',
        'La direction est la ligne (verticale / horizontale), le sens est la pointe de la flèche (vers le haut / vers le bas).',
        'La direction est la droite verticale et le sens est dirigé vers le bas (centre de la Terre).',
        [
          {
            title: 'Distinguer direction et sens',
            explanation: 'Verticale décrit la droite ; vers le bas décrit l’orientation.',
            math: 'Direction = Verticale | Sens = Vers le bas',
            subResult: 'Verticale, vers le bas',
          },
        ],
        '🥭'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 14 : POIDS ET MASSE D'UN CORPS (P = m × g)
  // ==========================================
  {
    id: 'phys-poids-masse',
    subject: 'physique',
    domainId: 'mecanique',
    order: 14,
    title: 'Distinction entre Poids et Masse (P = m × g)',
    badge: 'Physique Ch. 14 · 4ème',
    shortDesc: 'Masse invariable (kg, balance) vs Poids (N, dynamomètre), relation de proportionnalité P = m × g, valeur au Gabon (g ≈ 9,8 N/kg) vs sur la Lune.',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-rose-500 to-purple-500',
    readingTimeMinutes: 14,
    visualizerType: 'mecanique',
    illustrationKey: 'poids-masse',
    bossMeta: { name: 'GARDIEN DE LA GRAVITÉ', emoji: '🌍', xp: 190 },
    kokoSpeech:
      'En langage courant on dit « Je pèse 50 kg », mais en physique c’est FAUX ! Ta MASSE vaut 50 kg (mesurée à la balance, identique partout dans l’Univers), alors que ton POIDS au Gabon vaut P = 50 × 9,8 = 490 Newtons !',
    realWorldHook: {
      title: 'Sur la Lune, un élève gabonais bondit 6 fois plus haut !',
      scenario:
        'À Libreville (près de l’équateur, g = 9,8 N/kg), le sac d’école de Kévin a une masse de 5 kg. Si Kévin emmenait ce même sac sur la Lune (où g_Lune = 1,6 N/kg), il lui paraîtrait 6 fois plus léger à soulever !',
      question:
        'La masse du sac a-t-elle changé sur la Lune, ou est-ce seulement son poids qui a diminué ?',
    },
    unitsTable: [
      { symbol: 'm', quantity: 'Masse (quantité de matière)', unit: 'Kilogramme (kg) obligatoirement !', instrument: 'Balance (invariable)' },
      { symbol: 'P', quantity: 'Poids (attraction gravitationnelle)', unit: 'Newton (N)', instrument: 'Dynamomètre (varie selon le lieu)' },
      { symbol: 'g', quantity: 'Intensité de la pesanteur', unit: 'N/kg (Gabon ≈ 9,8 N/kg ; Lune ≈ 1,6 N/kg)', instrument: 'P = m × g' },
    ],
    experimentOrActivity: {
      title: 'Tracer le graphique P en fonction de m avec des masses marquées',
      materials: ['1 dynamomètre', 'Des masses marquées : 100 g (0,1 kg), 200 g (0,2 kg), 500 g (0,5 kg)'],
      observation:
        'Pour 0,1 kg on lit P = 0,98 N ; pour 0,2 kg on lit P = 1,96 N ; pour 0,5 kg on lit P = 4,9 N. Le rapport P ÷ m est toujours égal à 9,8 N/kg !',
      conclusion:
        'Le poids P est proportionnel à la masse m : P = m × g.',
    },
    revisionChecklist: [
      'Je sais remplir le tableau comparatif : Masse (kg, balance, invariable) vs Poids (N, dynamomètre, varie selon l’astre/altitude).',
      'Je convertis TOUJOURS la masse en KILOGRAMMES (g ÷ 1 000) avant d’appliquer P = m × g.',
      'Je connais les 4 caractéristiques du vecteur poids P⃗ (Point d’application = centre de gravité G, Direction = verticale, Sens = vers le bas, Valeur P = m × g).',
    ],
    keyFormulas: [
      'Relation Poids–Masse : P = m × g   (P en Newton N, m OBLIGATOIREMENT en kg, g en N/kg)',
      'Retrouver la masse : m = P ÷ g   |   Retrouver g : g = P ÷ m',
      'Au Gabon (équateur) : g ≈ 9,8 N/kg (parfois arrondi à 10 N/kg selon l’énoncé)',
      'La masse m est INVARIABLE ; le poids P dépend du lieu (Terre ≠ Lune ≠ Mars)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Poids & Masse (P = m × g)',
      slogan: 'Masse en kg à la balance (invariable) · Poids en N au dynamomètre (P = m × g)',
      summaryBulletPoints: [
        'Le poids P⃗ d’un objet est la force d’attraction exercée par la Terre (ou un autre astre) sur cet objet.',
        'Point d’application du poids : toujours le centre de gravité G de l’objet.',
        'Direction et sens du poids : toujours vertical, dirigé vers le bas (vers le centre de la Terre).',
        'Sur la Lune, g ≈ 1,6 N/kg (environ 6 fois plus faible que sur Terre) : ta masse reste identique, mais ton poids est divisé par 6 !',
      ],
      verticalFormulas: [
        {
          name: 'Calculer le poids d’un objet (en Newtons)',
          badge: '🌍',
          steps: [
            'Mangue de masse m = 400 g = 0,4 kg au Gabon (g = 9,8 N/kg)',
            'Formule : P = m × g',
            'P = 0,4 × 9,8',
            'P = 3,92 N',
          ],
          resultHighlight: 'P = 3,92 N',
          explanation: 'On convertit 400 g en 0,4 kg avant de multiplier par g.',
          tip: 'Si l’exercice donne g = 10 N/kg pour simplifier, utilise la valeur donnée par l’énoncé !',
        },
        {
          name: 'Retrouver la masse à partir du poids',
          badge: '🌙',
          steps: [
            'Astronaute sur la Lune : P = 128 N avec g_Lune = 1,6 N/kg',
            'Formule : m = P ÷ g',
            'm = 128 ÷ 1,6',
            'm = 80 kg (identique sur Terre !)',
          ],
          resultHighlight: 'm = 80 kg',
          explanation: 'En divisant le poids lunaire par g_Lune, on retrouve la masse invariable en kg.',
        },
      ],
      kokoTip: 'Pour ne jamais oublier les unités : P et m sont liés par g qui s’écrit « N/kg » — cela te dit tout : Newton ÷ kilogramme !',
      pitfallToAvoid: 'Laisser la masse en grammes dans P = m × g (ex : écrire P = 500 g × 9,8 = 4 900 N pour une mangue !). Non, 500 g = 0,5 kg ➔ P = 4,9 N !',
    },
    sections: [
      {
        title: '1. Ne plus confondre Poids et Masse',
        explanation: [
          'La masse m mesure la quantité de matière d’un objet : elle se mesure avec une balance, s’exprime en kilogramme (kg) et ne varie jamais où que l’on aille dans l’Univers.',
          'Le poids P est une force (l’attraction de la planète sur l’objet) : il se mesure avec un dynamomètre, s’exprime en newton (N) et varie selon la planète ou l’altitude.',
        ],
        rules: [
          {
            name: 'Caractéristiques du vecteur poids P⃗',
            description: 'Origine : centre de gravité G | Direction : verticale du lieu | Sens : vers le bas | Intensité : P = m × g.',
            example: 'Sac de 5 kg à Libreville (g = 9,8 N/kg) | P = 5 × 9,8 = 49 N (flèche verticale vers le bas depuis G)',
          },
        ],
      },
      {
        title: '2. La relation P = m × g sur Terre et sur d’autres astres',
        explanation: [
          'En un lieu donné, le poids est proportionnel à la masse : P = m × g, où g est l’intensité de la pesanteur (en N/kg).',
          'À la surface de la Terre au Gabon, g ≈ 9,8 N/kg ; sur la Lune, g ≈ 1,6 N/kg ; sur Mars, g ≈ 3,7 N/kg.',
        ],
        rules: [
          {
            name: 'Conversions obligatoires en kg',
            description: '1 kg = 1 000 g donc g ÷ 1 000 = kg.',
            example: 'm = 250 g = 0,25 kg ; g = 10 N/kg | P = 0,25 × 10 = 2,5 N',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys-14-1',
        'phys-poids-masse',
        'Ex 1 : Poids d’un sac de riz au Gabon',
        1,
        'Un sac de riz a une masse m = 25 kg. À Libreville, l’intensité de la pesanteur vaut g = 9,8 N/kg. Calcule le poids P de ce sac (en N).',
        '245',
        'Applique P = m × g = 25 × 9,8.',
        'Le poids du sac de riz est P = 245 N.',
        [
          {
            title: 'Appliquer P = m × g',
            explanation: 'm est déjà en kg.',
            math: 'P = 25 × 9,8 | P = 245 N',
            rule: 'P = m × g',
            subResult: '245 N',
          },
        ],
        'N',
        '🌍'
      ),
      mkNum(
        'phys-14-2',
        'phys-poids-masse',
        'Ex 2 : Piège de la masse en grammes',
        2,
        'Un téléphone portable a une masse m = 200 g. En prenant g = 9,8 N/kg, calcule son poids P en Newtons (N).',
        '1.96',
        'Convertis d’abord 200 g en kg : 200 ÷ 1 000 = 0,2 kg, puis calcule 0,2 × 9,8 !',
        'Le poids du téléphone est P = 1,96 N.',
        [
          {
            title: 'Convertir m en kilogrammes',
            explanation: '200 g = 0,2 kg.',
            math: 'm = 200 ÷ 1 000 = 0,2 kg',
            subResult: '0,2 kg',
          },
          {
            title: 'Calculer P = m × g',
            explanation: '0,2 × 9,8 = 1,96 N.',
            math: 'P = 0,2 × 9,8 | P = 1,96 N',
            subResult: '1,96 N',
          },
        ],
        'N',
        '📱'
      ),
      mkNum(
        'phys-14-3',
        'phys-poids-masse',
        'Ex 3 : Retrouver la masse d’un rover sur Mars',
        3,
        'Sur la planète Mars (g_Mars = 3,7 N/kg), un robot d’exploration a un poids P = 740 N. Quelle est sa masse m (en kg) ?',
        '200',
        'Utilise m = P ÷ g = 740 ÷ 3,7.',
        'La masse du robot est m = 200 kg (elle est la même sur Terre et sur Mars !).',
        [
          {
            title: 'Isoler m = P ÷ g',
            explanation: '740 ÷ 3,7 = 200 kg.',
            math: 'm = 740 ÷ 3,7 | m = 200 kg',
            rule: 'm = P ÷ g',
            subResult: '200 kg',
          },
        ],
        'kg',
        '🚀'
      ),
      mkQcm(
        'phys-14-4',
        'phys-poids-masse',
        'Ex 4 : Voyager de Libreville vers la Lune',
        2,
        'Un astronaute gabonais de masse 70 kg voyage de la Terre (g = 9,8 N/kg) jusqu’à la Lune (g = 1,6 N/kg). Qu’est-ce qui change pour lui sur la Lune ?',
        [
          'Sa masse reste 70 kg, mais son poids diminue (112 N au lieu de 686 N)',
          'Son poids reste identique, mais sa masse devient 11,4 kg',
          'Sa masse et son poids deviennent nuls',
          'Sa masse augmente jusqu’à 420 kg',
        ],
        'Sa masse reste 70 kg, mais son poids diminue (112 N au lieu de 686 N)',
        'La masse dépend de la quantité de matière dans le corps : elle ne change jamais. Seul le poids dépend de la planète !',
        'La masse est invariable (70 kg), alors que le poids passe à 70 × 1,6 = 112 N.',
        [
          {
            title: 'Comparer m et P',
            explanation: 'm = 70 kg partout ; P_Lune = 70 × 1,6 = 112 N.',
            math: 'm = 70 kg (invariable) | P_Terre = 686 N ➔ P_Lune = 112 N',
            subResult: 'm invariable, P diminue',
          },
        ],
        '🌙'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 15 : ÉQUILIBRE, PRESSION & POUSSÉE D'ARCHIMÈDE
  // ==========================================
  {
    id: 'phys-pression-archimede',
    subject: 'physique',
    domainId: 'mecanique',
    order: 15,
    title: 'Équilibre d’un solide, Pression (p = F ÷ S) et Poussée d’Archimède',
    badge: 'Physique Ch. 15 · 4ème',
    shortDesc: 'Conditions d’équilibre sous 2 forces, poussée d’Archimède sur l’Ogooué, force pressante et pression p = F ÷ S en Pascal (Pa).',
    themeColor: '#0284c7',
    themeGradient: 'from-sky-500 via-blue-500 to-emerald-500',
    readingTimeMinutes: 14,
    visualizerType: 'mecanique',
    illustrationKey: 'pression-archimede',
    bossMeta: { name: 'CAPITAINE ARCHIMÈDE', emoji: '🛶', xp: 190 },
    kokoSpeech:
      'Quand une pirogue reste immobile sur l’eau de l’Ogooué, deux forces exactement opposées s’équilibrent : son Poids (vers le bas) et la Poussée d’Archimède (vers le haut) ! Et en pression p = F ÷ S, plus la surface S est petite, plus ça enfonce !',
    realWorldHook: {
      title: 'Pourquoi une aiguille perce le cuir alors que la paume ne le perce pas ?',
      scenario:
        'Si tu appuies avec une force de 20 N avec ton pouce sur une planche de bois, rien ne s’enfonce. Si tu appuies avec la même force de 20 N sur la pointe minuscule d’une punaise, elle pénètre immédiatement dans le bois !',
      question:
        'Quelle grandeur physique combine la force pressante F et la surface S d’appui ?',
    },
    unitsTable: [
      { symbol: 'p', quantity: 'Pression', unit: 'Pascal (Pa) ; 1 bar = 100 000 Pa', instrument: 'Baromètre / Manomètre' },
      { symbol: 'S', quantity: 'Surface d’appui', unit: 'mètre carré (m²)', instrument: '1 m² = 10 000 cm²' },
      { symbol: 'F_A', quantity: 'Poussée d’Archimède', unit: 'Newton (N), dirigée vers le haut', instrument: 'Équilibre P = F_A' },
    ],
    experimentOrActivity: {
      title: 'Mesurer la poussée d’Archimède avec un dynamomètre et un bêcher',
      materials: ['1 dynamomètre', '1 masse métallique', '1 bêcher rempli d’eau'],
      observation:
        'Dans l’air, le dynamomètre indique P = 5,0 N. Quand on immerge totalement la masse dans l’eau, le dynamomètre n’indique plus que P_apparent = 3,5 N.',
      conclusion:
        'L’eau exerce vers le haut une force (poussée d’Archimède) égale à F_A = 5,0 − 3,5 = 1,5 N.',
    },
    revisionChecklist: [
      'Je sais citer la condition d’équilibre d’un solide soumis à 2 forces : même droite d’action, sens opposés, même intensité (F1 = F2).',
      'Je sais calculer la poussée d’Archimède : F_A = P_air − P_immergé (ou F_A = Poids du liquide déplacé).',
      'Je sais appliquer p = F ÷ S avec F en Newtons et S en m² pour obtenir des Pascals (Pa).',
    ],
    keyFormulas: [
      'Équilibre sous 2 forces : F1⃗ + F2⃗ = 0⃗  (même droite, sens opposés, F1 = F2)',
      'Poussée d’Archimède : F_A = P_dans_l_air − P_apparent_dans_le_liquide',
      'Pression : p = F ÷ S   (p en Pascal Pa, F en Newton N, S en m²)',
      'Force pressante : F = p × S   |   1 bar = 10⁵ Pa = 100 000 Pa',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Équilibre, Pression & Archimède',
      slogan: '2 forces égales et opposées = Équilibre · p = F ÷ S en Pascals (Pa)',
      summaryBulletPoints: [
        'Un solide soumis à deux forces est en équilibre si ces forces ont la même droite d’action, des sens contraires et la même valeur.',
        'Tout corps plongé dans un fluide (eau, air) subit de la part du fluide une poussée verticale dirigée de bas en haut égale au poids du volume de fluide déplacé.',
        'Un objet flottant est en équilibre : la poussée d’Archimède F_A est exactement égale à son poids P.',
        'Plus la surface S de contact est petite pour une même force F, plus la pression p est grande (lame de couteau affûtée, clou pointu).',
      ],
      verticalFormulas: [
        {
          name: 'Calculer une pression en Pascals (p = F ÷ S)',
          badge: '📐',
          steps: [
            'Caisse de poids F = 600 N posée sur S = 0,5 m²',
            'Formule : p = F ÷ S',
            'p = 600 ÷ 0,5',
            'p = 1 200 Pa',
          ],
          resultHighlight: 'p = 1 200 Pa',
          explanation: 'On divise la force en Newtons par la surface en mètres carrés.',
        },
        {
          name: 'Calculer la poussée d’Archimède',
          badge: '🛶',
          steps: [
            'Poids dans l’air : P = 8,2 N',
            'Indication plongée dans l’eau : P_app = 5,7 N',
            'F_A = P − P_app = 8,2 − 5,7 = 2,5 N',
          ],
          resultHighlight: 'F_A = 2,5 N',
          explanation: 'La perte apparente de poids correspond exactement à la poussée vers le haut exercée par l’eau.',
        },
      ],
      kokoTip: 'Pourquoi un gros navire en acier flotte à Owendo ? Parce que sa coque creuse pleine d’air déplace un ÉNORME volume d’eau, rendant la poussée d’Archimède égale au poids du navire !',
      pitfallToAvoid: 'Oublier que 1 m² = 10 000 cm² (et NON 100 cm² !) lors des conversions de surfaces.',
    },
    sections: [
      {
        title: '1. Équilibre d’un solide et poussée d’Archimède',
        explanation: [
          'Un solide soumis à deux forces est en équilibre lorsqu’il reste immobile (ou en mouvement rectiligne uniforme) : les deux forces ont la même droite d’action, des sens opposés et la même intensité.',
          'Dans l’eau, la poussée d’Archimède F_A compense le poids P pour les corps qui flottent (pirogue sur l’Ogooué) et réduit le poids apparent des corps immergés.',
        ],
        rules: [
          {
            name: 'Condition de flottaison d’une pirogue',
            description: 'À l’équilibre en surface : F_A = P (dirigée verticalement vers le haut).',
            example: 'Pirogue chargée de masse totale 300 kg (g = 10 N/kg) | P = 300 × 10 = 3 000 N | F_A = 3 000 N vers le haut',
          },
        ],
      },
      {
        title: '2. Force pressante et Pression (p = F ÷ S)',
        explanation: [
          'Lorsqu’une force F appuie perpendiculairement sur une surface d’aire S, la pression p mesure l’intensité de cette force par unité de surface : p = F ÷ S.',
          'L’unité officielle de pression est le Pascal (Pa = N/m²). On utilise aussi le bar (1 bar = 100 000 Pa) pour gonfler les pneus de voiture.',
        ],
        rules: [
          {
            name: 'Pourquoi élargir les pneus sur le sable ?',
            description: 'Augmenter la surface S diminue la pression p au sol et évite de s’enliser sur la plage de Pointe-Denis !',
            example: 'F = 1 000 N sur S = 0,2 m² ➔ p = 5 000 Pa | Sur S = 0,5 m² ➔ p = 2 000 Pa (2,5 fois moins de pression !)',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys-15-1',
        'phys-pression-archimede',
        'Ex 1 : Pression d’un bloc sur le sol',
        1,
        'Une caisse exerce une force pressante verticale F = 900 N sur une surface au sol S = 0,3 m². Calcule la pression p exercée (en Pa).',
        '3000',
        'Applique p = F ÷ S = 900 ÷ 0,3.',
        'La pression exercée est p = 3 000 Pa.',
        [
          {
            title: 'Appliquer p = F ÷ S',
            explanation: 'F est en N et S est déjà en m².',
            math: 'p = 900 ÷ 0,3 | p = 3 000 Pa',
            rule: 'p = F ÷ S',
            subResult: '3 000 Pa',
          },
        ],
        'Pa',
        '📦'
      ),
      mkNum(
        'phys-15-2',
        'phys-pression-archimede',
        'Ex 2 : Poussée d’Archimède au dynamomètre',
        2,
        'Un bloc de pierre pèse P = 14 N dans l’air. Lorsqu’on le plonge totalement dans l’eau, le dynamomètre n’indique plus que 9,2 N. Quelle est la valeur de la poussée d’Archimède F_A (en N) ?',
        '4.8',
        'Calcule la différence : F_A = 14 − 9,2.',
        'La poussée d’Archimède vaut F_A = 4,8 N.',
        [
          {
            title: 'Soustraire le poids apparent du poids réel',
            explanation: 'La différence correspond à la force exercée par l’eau vers le haut.',
            math: 'F_A = 14 - 9,2 | F_A = 4,8 N',
            rule: 'F_A = P_air − P_apparent',
            subResult: '4,8 N',
          },
        ],
        'N',
        '🛶'
      ),
      mkNum(
        'phys-15-3',
        'phys-pression-archimede',
        'Ex 3 : Équilibre d’un lustre suspendu',
        2,
        'Un ventilateur de plafond de masse m = 4 kg est immobile, suspendu à sa tige (g = 9,8 N/kg). Quelle est l’intensité de la force de traction exercée par la tige vers le haut (en N) ?',
        '39.2',
        'À l’équilibre sous 2 forces, Traction = Poids = m × g = 4 × 9,8.',
        'La tige exerce une force de 39,2 N vers le haut.',
        [
          {
            title: 'Calculer le poids du ventilateur',
            explanation: 'P = m × g = 4 × 9,8 = 39,2 N.',
            math: 'P = 4 × 9,8 = 39,2 N',
            subResult: '39,2 N',
          },
          {
            title: 'Appliquer la condition d’équilibre',
            explanation: 'Le ventilateur est immobile sous 2 forces opposées, donc T = P.',
            math: 'T = P = 39,2 N',
            subResult: '39,2 N',
          },
        ],
        'N',
        '⚖️'
      ),
      mkNum(
        'phys-15-4',
        'phys-pression-archimede',
        'Ex 4 : Force pressante d’un pneu',
        3,
        'L’air comprimé dans un pneu exerce une pression p = 200 000 Pa (2 bars) sur une paroi intérieure de surface S = 0,02 m². Calcule la force pressante F (en N).',
        '4000',
        'Utilise F = p × S = 200 000 × 0,02.',
        'La force pressante vaut F = 4 000 N.',
        [
          {
            title: 'Utiliser F = p × S',
            explanation: '200 000 × 0,02 = 4 000 N.',
            math: 'F = 200 000 × 0,02 | F = 4 000 N',
            rule: 'F = p × S',
            subResult: '4 000 N',
          },
        ],
        'N',
        '🛞'
      ),
    ],
  },
];
