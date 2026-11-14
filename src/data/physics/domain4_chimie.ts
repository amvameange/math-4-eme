import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_DOMAIN4_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHAPITRE 16 : L'AIR, LES GAZ & LA PRESSION ATMOSPHÉRIQUE
  // ==========================================
  {
    id: 'phys-air-gaz',
    subject: 'physique',
    domainId: 'chimie',
    order: 16,
    title: 'L’air qui nous entoure, propriétés des gaz et pression atmosphérique',
    badge: 'Chimie Ch. 16 · 4ème',
    shortDesc: 'Composition de l’air (78% N₂, 21% O₂, 1% autres), masse de 1 L d’air (~1,3 g), compressibilité/expansibilité d’un gaz, pression atmosphérique.',
    themeColor: '#38bdf8',
    themeGradient: 'from-sky-500 via-cyan-400 to-emerald-400',
    readingTimeMinutes: 12,
    visualizerType: 'chimie-gaz',
    illustrationKey: 'air-gaz',
    bossMeta: { name: 'MAÎTRE DE L’ATMOSPHÈRE', emoji: '🌬️', xp: 150 },
    kokoSpeech:
      'L’air n’est PAS un corps pur : c’est un mélange homogène d’environ 4/5 de diazote (78%) et 1/5 de dioxygène (21%) ! Et contrairement aux liquides, un gaz est compressible et a une masse !',
    realWorldHook: {
      title: 'Gonfler un ballon de foot et ouvrir une bouteille d’eau en altitude',
      scenario:
        'Un ballon de foot bien gonflé est plus lourd sur une balance sensible qu’un ballon complètement dégonflé. Et si on bouche le bout d’une seringue pleine d’air, on arrive quand même à pousser le piston.',
      question:
        'De quels gaz est composé l’air que nous respirons au Gabon, et pourquoi l’air pèse-t-il et peut-il être comprimé ?',
    },
    unitsTable: [
      { symbol: 'N₂ / O₂', quantity: 'Composition volumique de l’air sec', unit: '78% Diazote + 21% Dioxygène + 1% autres', instrument: 'Modèle particulaire' },
      { symbol: '1 L d’air', quantity: 'Masse d’un litre d’air (conditions usuelles)', unit: '≈ 1,3 g (1,29 g/L à 0 °C)', instrument: 'Balance précise' },
      { symbol: 'P_atm', quantity: 'Pression atmosphérique normale', unit: '1 013 hPa (≈ 1 bar)', instrument: 'Baromètre' },
    ],
    experimentOrActivity: {
      title: 'Peser 1,5 L d’air expulsé d’un ballon de basket',
      materials: ['1 ballon bien gonflé', '1 balance électronique au 0,1 g', '1 bouteille de 1,5 L remplie d’eau retournée dans une cuve'],
      observation:
        'On pèse le ballon plein : 612,0 g. On laisse sortir exactement 1,5 L d’air dans la bouteille d’eau et on repèse : 610,1 g (perte de 1,9 g).',
      conclusion:
        '1,5 L d’air pèse environ 1,95 g, donc 1 L d’air a bien une masse d’environ 1,3 g (1,95 ÷ 1,5 = 1,3 g/L).',
    },
    revisionChecklist: [
      'Je connais la composition exacte de l’air : 78% diazote (N₂), 21% dioxygène (O₂), 1% autres gaz (argon, CO₂, vapeur d’eau).',
      'Je sais calculer les volumes de O₂ et N₂ dans une salle de classe (V_O2 ≈ 21% × V_air = V_air ÷ 5).',
      'Je sais expliquer les propriétés des gaz (compressibles, expansibles, sans forme propre) grâce aux molécules espacées.',
    ],
    keyFormulas: [
      'Composition de l’air : ~78% de diazote (N₂) + ~21% de dioxygène (O₂) + ~1% autres gaz',
      'Approximation pratique : 4/5 (80%) de diazote et 1/5 (20%) de dioxygène',
      'Masse d’1 litre d’air (à 20 °C, pression normale) : ≈ 1,2 à 1,3 g/L',
      'Pression atmosphérique au niveau de la mer (Libreville) : ≈ 1 013 hPa',
    ],
    memoSheet: {
      title: 'Fiche Mémo : L’Air, les Gaz & Pression Atmosphérique',
      slogan: '78% N₂ + 21% O₂ · Un gaz est compressible, expansible et possède une masse (~1,3 g/L)',
      summaryBulletPoints: [
        'Le dioxygène (O₂, 21%) est le seul gaz de l’air indispensable à la respiration et aux combustions.',
        'Le diazote (N₂, 78%) sert de « diluant » : sans lui, la moindre étincelle provoquerait des incendies géants !',
        'Compression : quand on pousse le piston d’une seringue bouchée, le volume diminue et la pression augmente (les molécules se rapprochent).',
        'Les liquides et les solides sont pratiquement INCOMPRESSIBLES, seuls les gaz sont compressibles.',
      ],
      verticalFormulas: [
        {
          name: 'Calculer le volume de dioxygène dans une pièce',
          badge: '🌬️',
          steps: [
            'Salle de classe de volume V_air = 150 m³',
            'Proportion O₂ = 21% (ou 0,21)',
            'V(O₂) = 150 × 0,21',
            'V(O₂) = 31,5 m³',
          ],
          resultHighlight: '31,5 m³ de O₂',
          explanation: 'On multiplie le volume total d’air par 21% (21/100).',
        },
        {
          name: 'Calculer la masse d’air dans une pièce',
          badge: '⚖️',
          steps: [
            'Volume d’air = 50 L ; masse volumique = 1,3 g/L',
            'm = 50 × 1,3',
            'm = 65 g',
          ],
          resultHighlight: 'm = 65 g',
          explanation: 'Chaque litre d’air pèse 1,3 g.',
        },
      ],
      kokoTip: 'Pour calculer de tête un volume de dioxygène : prends environ 1/5 (divise par 5) du volume d’air, et pour la valeur exacte multiplie par 0,21 !',
      pitfallToAvoid: 'Dire que l’air est composé majoritairement de dioxygène : FAUX ! L’air contient presque 4 fois plus de diazote (78%) que de dioxygène (21%).',
    },
    sections: [
      {
        title: '1. Composition de l’air et propriétés particulaires des gaz',
        explanation: [
          'L’air sec est un mélange homogène composé d’environ 78% de diazote (N₂), 21% de dioxygène (O₂) et 1% d’autres gaz (argon, dioxyde de carbone CO₂, etc.).',
          'À l’état gazeux, les molécules sont très éloignées les unes des autres et bougent vite dans toutes les directions : c’est pourquoi un gaz est compressible (on peut le tasser dans une bouteille de plongée ou un pneu) et expansible (il occupe tout le volume disponible).',
        ],
        rules: [
          {
            name: 'Modèle moléculaire de la compression',
            description: 'Lorsqu’on comprime de l’air dans une seringue fermée, le NOMBRE de molécules ne change pas (conservation de la masse), seul l’espace entre elles diminue.',
            example: 'Seringue bouchée poussée de 60 mL à 30 mL | Même masse d’air | Volume divisé par 2 ➔ Pression multipliée par 2 !',
          },
        ],
      },
      {
        title: '2. Masse de l’air et pression atmosphérique',
        explanation: [
          'L’air possède une masse : dans les conditions usuelles de laboratoire, 1 litre d’air pèse environ 1,3 g (et 1 m³ d’air pèse environ 1,3 kg !).',
          'La couche d’air qui entoure la Terre exerce une pression sur tous les objets : c’est la pression atmosphérique, mesurée au baromètre (≈ 1 013 hPa au bord de l’océan à Libreville).',
        ],
        rules: [
          {
            name: 'Variation avec l’altitude',
            description: 'Plus on monte en altitude (ex : monts de Cristal ou avion), moins il y a d’air au-dessus de nous, donc la pression atmosphérique diminue.',
            example: 'Niveau de la mer (Libreville) ≈ 1 013 hPa | En altitude ≈ 850 hPa',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-16-1',
        'phys-air-gaz',
        'Ex 1 : Le gaz majoritaire dans l’air',
        1,
        'Quel gaz représente environ 78% du volume de l’air que nous respirons ?',
        [
          'Le diazote (N₂)',
          'Le dioxygène (O₂)',
          'Le dioxyde de carbone (CO₂)',
          'La vapeur d’eau (H₂O)',
        ],
        'Le diazote (N₂)',
        '78% = diazote ; 21% = dioxygène.',
        'Le diazote représente 78% de l’air, contre 21% pour le dioxygène.',
        [
          {
            title: 'Lire les proportions de l’air',
            explanation: 'N₂ (78%) + O₂ (21%) + Autres (1%) = 100%.',
            math: 'Gaz majoritaire (78%) = Diazote (N₂)',
            subResult: 'Diazote (N₂)',
          },
        ],
        '🌬️'
      ),
      mkNum(
        'phys-16-2',
        'phys-air-gaz',
        'Ex 2 : Volume de dioxygène dans une chambre',
        2,
        'Une chambre climatisée à Libreville contient 40 m³ d’air. Quel est le volume de dioxygène (O₂) contenu dans cette pièce (en m³, avec 21%) ?',
        '8.4',
        'Calcule 21% de 40 m³ : 40 × 0,21.',
        'La chambre contient 8,4 m³ de dioxygène.',
        [
          {
            title: 'Calculer 21% du volume d’air',
            explanation: 'V(O₂) = 21% × 40 = 0,21 × 40.',
            math: 'V(O₂) = 40 × 0,21 | V(O₂) = 8,4 m³',
            subResult: '8,4 m³',
          },
        ],
        'm³',
        '🧮'
      ),
      mkNum(
        'phys-16-3',
        'phys-air-gaz',
        'Ex 3 : Masse d’air dans un récipient',
        2,
        'En prenant 1,3 g pour la masse d’1 litre d’air, quelle est la masse de 10 litres d’air enfermés dans un bidon (en grammes) ?',
        '13',
        'Multiplie 10 litres par 1,3 g/L.',
        'La masse de 10 litres d’air est de 13 g.',
        [
          {
            title: 'Multiplier le volume par 1,3 g/L',
            explanation: 'm = 10 × 1,3 = 13 g.',
            math: 'm = 10 × 1,3 | m = 13 g',
            subResult: '13 g',
          },
        ],
        'g',
        '⚖️'
      ),
      mkQcm(
        'phys-16-4',
        'phys-air-gaz',
        'Ex 4 : Molécules lors d’une compression',
        3,
        'On enferme de l’air dans une seringue bouchée et on pousse fortement le piston. Que font les molécules d’air à l’intérieur ?',
        [
          'Leur nombre reste identique, elles se rapprochent seulement les unes des autres',
          'Elles deviennent plus grosses',
          'La moitié des molécules disparaît',
          'Elles se transforment en eau liquide immédiatement',
        ],
        'Leur nombre reste identique, elles se rapprochent seulement les unes des autres',
        'La seringue étant bouchée, aucune molécule ne peut s’échapper !',
        'La quantité de matière (et la masse) se conserve : seul l’espace entre les molécules diminue.',
        [
          {
            title: 'Appliquer le modèle particulaire',
            explanation: 'Système fermé ➔ même nombre de molécules, volume réduit ➔ chocs plus fréquents (pression augmente).',
            math: 'Nombre de molécules constant | Distance entre molécules diminue',
            subResult: 'Même nombre, plus proches',
          },
        ],
        '💉'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 17 : ATOMES, MOLÉCULES & SYMBOLES CHIMIQUES
  // ==========================================
  {
    id: 'phys-atomes-molecules',
    subject: 'physique',
    domainId: 'chimie',
    order: 17,
    title: 'Atomes, molécules, formules chimiques et corps purs',
    badge: 'Chimie Ch. 17 · 4ème',
    shortDesc: 'Modèle atomique (C, H, O, N, Fe, Cu, Cl), construction des molécules (H₂O, O₂, CO₂, CH₄, N₂), décodage des formules, corps purs vs mélanges.',
    themeColor: '#8b5cf6',
    themeGradient: 'from-violet-500 via-indigo-500 to-sky-500',
    readingTimeMinutes: 13,
    visualizerType: 'chimie-gaz',
    illustrationKey: 'atomes-molecules',
    bossMeta: { name: 'ARCHITECTE DES ATOMES', emoji: '⚛️', xp: 170 },
    kokoSpeech:
      'Les atomes sont les briques de LEGO de tout l’Univers ! On les dessine avec des sphères de couleur : Carbone = Noir, Oxygène = Rouge, Hydrogène = Blanc, Azote = Bleu. Attention : dans CO₂, le petit 2 ne porte que sur l’oxygène O !',
    realWorldHook: {
      title: 'Lire les formules chimiques sur les étiquettes et bouteilles de gaz',
      scenario:
        'Sur une bouteille de gaz de cuisine au Gabon ou un extincteur d’école, on voit souvent écrits des codes comme CO₂, H₂O, O₂ ou C₄H₁₀.',
      question:
        'Comment décoder ces lettres et ces petits chiffres pour connaître exactement le nombre et la nature des atomes dans chaque molécule ?',
    },
    unitsTable: [
      { symbol: 'C / H / O / N', quantity: 'Atomes fondamentaux', unit: 'Carbone (Noir), Hydrogène (Blanc), Oxygène (Rouge), Azote (Bleu)', instrument: 'Modèle moléculaire' },
      { symbol: 'Fe / Cu / Cl', quantity: 'Autres symboles courants', unit: 'Fer, Cuivre, Chlore (2ème lettre en minuscule !)', instrument: 'Classification' },
      { symbol: 'H₂O / CO₂', quantity: 'Formules de molécules', unit: 'L’indice en bas à droite compte l’atome précédent', instrument: 'Décodage' },
    ],
    experimentOrActivity: {
      title: 'Construire des modèles moléculaires (boules colorées)',
      materials: ['Sphères noires (C), rouges (O), blanches (H), bleues (N)', 'Tiges de liaison'],
      observation:
        'Pour H₂O : 1 boule rouge reliée à 2 boules blanches. Pour CO₂ : 1 boule noire au milieu entre 2 boules rouges. Pour CH₄ (méthane) : 1 boule noire reliée à 4 boules blanches.',
      conclusion:
        'Une molécule est un assemblage précis d’atomes liés entre eux et représenté par une formule chimique unique.',
    },
    revisionChecklist: [
      'Je connais les symboles : C, H, O, N, Fe, Cu, Cl (1ère lettre MAJUSCULE, 2ème éventuelle en minuscule).',
      'Je sais lire une formule : dans CH₄, il y a 1 atome C et 4 atomes H ; dans 3 H₂O, il y a 3 molécules d’eau (soit 6 H et 3 O).',
      'Je sais distinguer corps pur simple (O₂, N₂, Fe) et corps pur composé (H₂O, CO₂, CH₄).',
    ],
    keyFormulas: [
      'Atome = brique élémentaire microscopique (~0,1 nanomètre) ; Molécule = assemblage d’atomes liés',
      'Eau : H₂O (2 H + 1 O)  |  Dioxygène : O₂ (2 O)  |  Diazote : N₂ (2 N)',
      'Dioxyde de carbone : CO₂ (1 C + 2 O)  |  Méthane : CH₄ (1 C + 4 H)  |  Butane : C₄H₁₀',
      'Ne pas confondre CO (monoxyde de carbone, gaz mortel) avec Co (atome de Cobalt) !',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Atomes & Molécules',
      slogan: 'Majuscule = nouvel atome · Indice en bas à droite = nombre de cet atome',
      summaryBulletPoints: [
        'Un corps pur ne contient qu’une seule sorte de molécules (ou d’atomes) ; un mélange en contient plusieurs différentes.',
        'Corps pur simple : formé d’un seul type d’atomes (ex : O₂, N₂, H₂, Fe).',
        'Corps pur composé : formé d’atomes différents liés (ex : H₂O, CO₂, CH₄).',
        'S’il n’y a pas d’indice après le symbole (comme le C dans CO₂), cela signifie qu’il y a 1 seul atome.',
      ],
      verticalFormulas: [
        {
          name: 'Décoder la molécule de Butane (C₄H₁₀)',
          badge: '🔥',
          steps: [
            'Formule : C₄H₁₀',
            '4 après C ➔ 4 atomes de Carbone',
            '10 après H ➔ 10 atomes d’Hydrogène',
            'Total = 4 + 10 = 14 atomes dans 1 molécule',
          ],
          resultHighlight: '4 C + 10 H = 14 atomes',
          explanation: 'Chaque chiffre en indice s’applique uniquement à la lettre placée juste devant lui.',
        },
        {
          name: 'Compter les atomes dans 2 CO₂',
          badge: '🔢',
          steps: [
            'Le grand 2 devant signifie 2 molécules de CO₂ :',
            '1 molécule CO₂ = 1 C + 2 O',
            '2 molécules CO₂ = 2 × (1 C + 2 O) = 2 C + 4 O',
          ],
          resultHighlight: '2 C et 4 O',
          explanation: 'Le coefficient devant la formule multiplie toute la molécule.',
        },
      ],
      kokoTip: 'Pour écrire le symbole d’un atome à 2 lettres (Fe, Cu, Cl, Al), la 1ère lettre est TOUJOURS majuscule et la 2ème TOUJOURS minuscule !',
      pitfallToAvoid: 'Écrire H2O ou CO2 avec un grand 2 en haut (exposant) ou confondre C (Carbone) et Ca (Calcium). En chimie, le nombre d’atomes s’écrit en INDICE (en bas à droite).',
    },
    sections: [
      {
        title: '1. Atomes, symboles et code couleur',
        explanation: [
          'Toute la matière de l’Univers est constituée de grains microscopiques appelés atomes. Chaque type d’atome possède un nom, un symbole chimique (1ère lettre majuscule, parfois suivie d’une minuscule) et une couleur conventionnelle en modélisation.',
          'Les 4 atomes les plus fréquents en 4ème sont : Hydrogène (H, blanc), Carbone (C, noir), Azote (N, bleu) et Oxygène (O, rouge).',
        ],
        rules: [
          {
            name: 'Symboles à connaître par cœur',
            description: 'H (Hydrogène), C (Carbone), N (Azote), O (Oxygène), Fe (Fer), Cu (Cuivre), Cl (Chlore).',
            example: 'Atome de Fer = Fe (et non F qui est le Fluor) | Atome d’Azote = N (du mot Nitrogène)',
          },
        ],
      },
      {
        title: '2. Molécules, formules chimiques et corps purs',
        explanation: [
          'Plusieurs atomes liés entre eux forment une molécule. La formule chimique indique la nature et le nombre exact de chaque atome dans la molécule.',
          'Un récipient rempli uniquement de molécules identiques (ex : uniquement H₂O) contient un corps pur ; s’il contient plusieurs molécules différentes (ex : N₂ + O₂ dans l’air), c’est un mélange.',
        ],
        rules: [
          {
            name: 'Lecture d’une formule avec coefficient',
            description: 'Un nombre placé DEVANT la formule multiplie toute la molécule.',
            example: '3 H₂O | = 3 molécules d’eau | Atomes H = 3 × 2 = 6 | Atomes O = 3 × 1 = 3',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-17-1',
        'phys-atomes-molecules',
        'Ex 1 : Symbole chimique de l’atome d’Azote',
        1,
        'Quel est le symbole chimique de l’atome d’Azote (qui forme le diazote N₂ de l’air) ?',
        [
          'N',
          'Az',
          'A',
          'Na',
        ],
        'N',
        'Azote vient du grec/latin Nitrogène (comme N₂ dans l’air) !',
        'Le symbole chimique de l’azote est N.',
        [
          {
            title: 'Retrouver le symbole de l’azote',
            explanation: 'N (Nitrogène) ; Na est le Sodium.',
            math: 'Atome d’Azote ➔ Symbole N | Molécule de diazote ➔ N₂',
            subResult: 'N',
          },
        ],
        '⚛️'
      ),
      mkNum(
        'phys-17-2',
        'phys-atomes-molecules',
        'Ex 2 : Compter les atomes dans le méthane (CH₄)',
        1,
        'Combien y a-t-il d’atomes au TOTAL dans une seule molécule de méthane de formule CH₄ ?',
        '5',
        'Compte 1 atome de carbone C + 4 atomes d’hydrogène H.',
        'Une molécule de CH₄ contient 1 + 4 = 5 atomes.',
        [
          {
            title: 'Additionner les indices',
            explanation: 'Pas d’indice après C signifie 1 ; indice 4 après H signifie 4.',
            math: '1 (C) + 4 (H) | = 5 atomes',
            subResult: '5 atomes',
          },
        ],
        'atomes',
        '🧪'
      ),
      mkNum(
        'phys-17-3',
        'phys-atomes-molecules',
        'Ex 3 : Compter dans 4 molécules d’eau (4 H₂O)',
        2,
        'Combien d’atomes d’hydrogène (H) y a-t-il au total dans « 4 H₂O » ?',
        '8',
        'Chaque molécule H₂O contient 2 atomes H, et il y a 4 molécules : 4 × 2.',
        'Il y a 8 atomes d’hydrogène dans 4 H₂O.',
        [
          {
            title: 'Multiplier le coefficient par l’indice de H',
            explanation: '4 molécules × 2 atomes H par molécule.',
            math: '4 × 2 = 8 atomes d’hydrogène',
            subResult: '8',
          },
        ],
        'atomes',
        '💧'
      ),
      mkQcm(
        'phys-17-4',
        'phys-atomes-molecules',
        'Ex 4 : Corps pur simple vs composé vs mélange',
        3,
        'Parmi les propositions suivantes, laquelle désigne un CORPS PUR COMPOSÉ ?',
        [
          'Le dioxyde de carbone (CO₂ uniquement)',
          'Le dioxygène pur (O₂ uniquement)',
          'L’air (mélange de N₂ et O₂)',
          'Le fer pur (Fe uniquement)',
        ],
        'Le dioxyde de carbone (CO₂ uniquement)',
        'Un corps pur composé a une seule sorte de molécules, mais fabriquées avec des atomes DIFFÉRENTS (ici C et O).',
        'CO₂ seul est un corps pur (1 seule molécule) et composé (atomes C et O différents).',
        [
          {
            title: 'Classer chaque exemple',
            explanation: 'Air = mélange ; O₂ et Fe = corps purs simples ; CO₂ = corps pur composé.',
            math: 'CO₂ (1 sorte de molécule avec C et O) ➔ Corps pur composé',
            subResult: 'CO₂',
          },
        ],
        '🔬'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 18 : LES COMBUSTIONS & TRIANGLE DU FEU
  // ==========================================
  {
    id: 'phys-combustions',
    subject: 'physique',
    domainId: 'chimie',
    order: 18,
    title: 'Les combustions (Carbone, Butane, Fer) et le triangle du feu',
    badge: 'Chimie Ch. 18 · 4ème',
    shortDesc: 'Combustible + comburant (O₂) + énergie d’activation, test de reconnaissance du CO₂ à l’eau de chaux, combustion complète vs incomplète (danger CO).',
    themeColor: '#ef4444',
    themeGradient: 'from-red-500 via-orange-500 to-amber-400',
    readingTimeMinutes: 14,
    visualizerType: 'chimie-gaz',
    illustrationKey: 'combustions',
    bossMeta: { name: 'MAÎTRE DE LA FLAMME', emoji: '🔥', xp: 180 },
    kokoSpeech:
      'Pour qu’un feu brûle, il faut les 3 côtés du TRIANGLE DU FEU : un combustible (bois, butane, charbon), un comburant (le dioxygène O₂ de l’air) et une source de chaleur ! Et sur la gazinière : flamme BLEUE = sûre ; flamme JAUNE = danger de monoxyde de carbone CO !',
    realWorldHook: {
      title: 'La gazinière de cuisine à Libreville : flamme bleue vs flamme jaune',
      scenario:
        'Quand la gazinière au butane (bouteille bleue ou rouge) est bien réglée et la cuisine bien aérée, la flamme est bleue et les marmites restent propres. Si les trous d’arrivée d’air sont bouchés, la flamme devient jaune, fumeuse et noircit les casseroles.',
      question:
        'Pourquoi le manque de dioxygène transforme-t-il une combustion propre en combustion incomplète très dangereuse ?',
    },
    unitsTable: [
      { symbol: 'Combustible', quantity: 'Matière qui brûle', unit: 'Carbone (C), Butane (C₄H₁₀), Bois', instrument: 'Réactif 1' },
      { symbol: 'Comburant', quantity: 'Gaz qui entretient la combustion', unit: 'Dioxygène (O₂)', instrument: 'Réactif 2' },
      { symbol: 'Eau de chaux', quantity: 'Test du dioxyde de carbone (CO₂)', unit: 'Se trouble (devient blanche)', instrument: 'Tube à essai' },
    ],
    experimentOrActivity: {
      title: 'Combustion du carbone (charbon de bois) dans le dioxygène pur',
      materials: ['1 flacon rempli de dioxygène O₂', '1 morceau de charbon incandescent', 'De l’eau de chaux limpide'],
      observation:
        'Dans le dioxygène pur, le morceau de charbon incandescent brûle vivement avec des étincelles, puis s’arrête. On verse ensuite de l’eau de chaux qui devient aussitôt blanche (trouble).',
      conclusion:
        'La combustion du carbone dans le dioxygène est une transformation chimique qui consomme C et O₂ et produit du dioxyde de carbone CO₂.',
    },
    revisionChecklist: [
      'Je connais les 3 éléments du triangle du feu (combustible, comburant O₂, chaleur/étincelle).',
      'Je sais identifier les réactifs et les produits d’une combustion (test eau de chaux ➔ CO₂ ; sulfate de cuivre anhydre devient bleu ➔ H₂O).',
      'Je sais expliquer les dangers d’une combustion incomplète (carbone noir + monoxyde de carbone CO gaz incolore, inodore et mortel).',
    ],
    keyFormulas: [
      'Combustion du carbone : Carbone (C) + Dioxygène (O₂) ➔ Dioxyde de carbone (CO₂)',
      'Combustion complète du butane : Butane + Dioxygène (assez) ➔ Dioxyde de carbone + Eau (flamme BLEUE)',
      'Combustion incomplète (manque de O₂) : produit du Carbone (suie noire) et du Monoxyde de carbone CO (mortel !)',
      'Tests : Eau de chaux se trouble ➔ CO₂  |  Sulfate de cuivre anhydre blanc bleuit ➔ Eau (H₂O)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Combustions & Sécurité Domestique',
      slogan: 'Flamme bleue + air = CO₂ + H₂O · Flamme jaune sans air = CO mortel !',
      summaryBulletPoints: [
        'Pour éteindre un feu, il suffit de supprimer UN seul des 3 éléments du triangle du feu (ex : étouffer avec du sable ou une couverture pour couper l’arrivée de O₂).',
        'Lors d’une transformation chimique, les corps qui disparaissent sont les RÉACTIFS ; ceux qui apparaissent sont les PRODUITS.',
        'La combustion du fer dans O₂ produit des étincelles brillantes et forme de l’oxyde magnétique de fer (Fe₃O₄), sans dégagement de gaz.',
        'Ne jamais utiliser un brasero à charbon ou un groupe électrogène dans une pièce fermée sans aération (risque d’asphyxie au monoxyde de carbone CO !).',
      ],
      verticalFormulas: [
        {
          name: 'Bilan de la combustion du carbone',
          badge: '🔥',
          steps: [
            'Réactifs : Carbone + Dioxygène',
            'Transformation chimique (flèche ➔) :',
            'Carbone + Dioxygène ➔ Dioxyde de carbone',
            'C + O₂ ➔ CO₂',
          ],
          resultHighlight: 'CO₂ (trouble l’eau de chaux)',
          explanation: 'Le charbon et le dioxygène disparaissent pour former du dioxyde de carbone.',
        },
        {
          name: 'Test de reconnaissance des produits',
          badge: '🧪',
          steps: [
            'Eau de chaux limpide devient trouble ➔ Présence de CO₂',
            'Sulfate de cuivre anhydre blanc devient bleu ➔ Présence d’eau (H₂O)',
          ],
          resultHighlight: 'CO₂ et H₂O identifiés',
          explanation: 'Ce sont les deux tests officiels à retenir absolument pour les contrôles.',
        },
      ],
      kokoTip: 'Pour retenir « Combustible » vs « Comburant » : le combustIBLE est ce qui brûle (charbon, bois, essence) ; le comburANT est l’agent qui fait brûler (le dioxygène O₂) !',
      pitfallToAvoid: 'Confondre CO₂ (dioxyde de carbone, non toxique à faible dose, trouble l’eau de chaux) avec CO (monoxyde de carbone, gaz invisible très toxique issu d’une combustion incomplète).',
    },
    sections: [
      {
        title: '1. Le triangle du feu et la combustion du carbone',
        explanation: [
          'Une combustion est une transformation chimique qui dégage de la chaleur et souvent de la lumière. Elle nécessite trois conditions simultanées : un combustible, un comburant (en général le dioxygène O₂ de l’air) et une énergie d’activation (flamme, étincelle).',
          'Lorsque le carbone brûle dans le dioxygène, les deux réactifs disparaissent et il se forme un nouveau corps pur : le dioxyde de carbone (CO₂), mis en évidence par l’eau de chaux qui se trouble.',
        ],
        rules: [
          {
            name: 'Pourquoi la combustion s’arrête dans un bocal fermé ?',
            description: 'La combustion s’arrête dès que l’un des deux réactifs (souvent le dioxygène O₂ enfermé dans le bocal) est totalement consommé.',
            example: 'Bougie sous un verre ➔ O₂ consommé en quelques secondes ➔ La flamme s’éteint !',
          },
        ],
      },
      {
        title: '2. Combustion du butane : complète vs incomplète',
        explanation: [
          'Si le dioxygène est abondant, la combustion du butane (gaz de cuisine) est complète : la flamme est bleue, très chaude, et ne forme que du dioxyde de carbone (CO₂) et de la vapeur d’eau (H₂O).',
          'Si l’arrivée d’air (O₂) est insuffisante, la combustion est incomplète : la flamme devient jaune, dépose du carbone noir (suie) sur la marmite et dégage du monoxyde de carbone (CO), gaz mortel.',
        ],
        rules: [
          {
            name: 'Geste de sécurité à la maison',
            description: 'En cas de flamme jaune sur un réchaud, ouvrir les fenêtres et faire nettoyer/régler l’arrivée d’air du brûleur.',
            example: 'Flamme bleue = Combustion complète | Flamme jaune + fumée noire = Combustion incomplète (Danger CO !)',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-18-1',
        'phys-combustions',
        'Ex 1 : Le test à l’eau de chaux',
        1,
        'Quel gaz trouble l’eau de chaux limpide en lui donnant un aspect blanc laiteux ?',
        [
          'Le dioxyde de carbone (CO₂)',
          'Le diazote (N₂)',
          'Le dioxygène (O₂)',
          'La vapeur d’eau (H₂O)',
        ],
        'Le dioxyde de carbone (CO₂)',
        'C’est le test caractéristique produit lors de la combustion du charbon ou du butane !',
        'Le dioxyde de carbone (CO₂) réagit avec l’eau de chaux en formant un précipité blanc.',
        [
          {
            title: 'Identifier le test de reconnaissance',
            explanation: 'Eau de chaux trouble = test positif au dioxyde de carbone.',
            math: 'Eau de chaux limpide + CO₂ ➔ Eau de chaux trouble',
            subResult: 'CO₂',
          },
        ],
        '🧪'
      ),
      mkQcm(
        'phys-18-2',
        'phys-combustions',
        'Ex 2 : Danger de la flamme jaune',
        2,
        'Un réchaud à gaz dans une cuisine peu ventilée produit une flamme jaune qui noircit les marmites. Quel gaz très toxique risque alors de se former ?',
        [
          'Le monoxyde de carbone (CO)',
          'Le diazote (N₂)',
          'Le dioxygène pur (O₂)',
          'L’hélium (He)',
        ],
        'Le monoxyde de carbone (CO)',
        'Manque de dioxygène ➔ combustion incomplète ➔ formation de carbone noir et d’un gaz mortel inodore !',
        'La combustion incomplète libère du monoxyde de carbone (CO), un gaz incolore et inodore extrêmement dangereux.',
        [
          {
            title: 'Analyser la combustion incomplète',
            explanation: 'Flamme jaune et suie noire signalent un manque de O₂.',
            math: 'Manque de O₂ ➔ Combustion incomplète ➔ Carbone (suie) + Monoxyde de carbone (CO)',
            subResult: 'Monoxyde de carbone (CO)',
          },
        ],
        '⚠️'
      ),
      mkQcm(
        'phys-18-3',
        'phys-combustions',
        'Ex 3 : Éteindre un début d’incendie (Triangle du feu)',
        2,
        'Lorsqu’on jette du sable sur un petit feu de bois pour l’éteindre, quel élément du triangle du feu supprime-t-on principalement ?',
        [
          'Le comburant (le dioxygène de l’air)',
          'Le bois (combustible)',
          'Le dioxyde de carbone',
          'Le métal de la casserole',
        ],
        'Le comburant (le dioxygène de l’air)',
        'Le sable isole les braises de l’air qui les entoure.',
        'En recouvrant le feu de sable, on empêche le dioxygène (comburant) d’atteindre le combustible.',
        [
          {
            title: 'Appliquer le triangle du feu',
            explanation: 'Combustible + Comburant (O₂) + Chaleur. Couper l’air supprime le comburant.',
            math: 'Sable sur feu ➔ Bloque l’arrivée de O₂ ➔ Feu étouffé',
            subResult: 'Comburant (O₂)',
          },
        ],
        '🔥'
      ),
      mkQcm(
        'phys-18-4',
        'phys-combustions',
        'Ex 4 : Test de présence d’eau (H₂O)',
        2,
        'Quelle poudre blanche devient BLEUE lorsqu’on la met au contact de l’eau formée lors d’une combustion ?',
        [
          'Le sulfate de cuivre anhydre',
          'L’eau de chaux',
          'Le charbon de bois',
          'Le sel de cuisine',
        ],
        'Le sulfate de cuivre anhydre',
        '« Anhydre » signifie sans eau : dès qu’il touche une goutte d’eau, il bleuit !',
        'Le sulfate de cuivre anhydre (blanc) devient bleu en présence d’eau.',
        [
          {
            title: 'Reconnaître le test de l’eau',
            explanation: 'Eau de chaux ➔ CO₂ ; Sulfate de cuivre anhydre ➔ H₂O.',
            math: 'Sulfate de cuivre anhydre (blanc) + H₂O ➔ Bleu',
            subResult: 'Sulfate de cuivre anhydre',
          },
        ],
        '💧'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 19 : ÉQUATIONS-BILAN & CONSERVATION DE LA MASSE
  // ==========================================
  {
    id: 'phys-equations-bilan',
    subject: 'physique',
    domainId: 'chimie',
    order: 19,
    title: 'Équations-bilan de réactions chimiques et conservation de la masse (Lavoisier)',
    badge: 'Chimie Ch. 19 · 4ème',
    shortDesc: 'Réactifs ➔ Produits, conservation des atomes (ajustement/équilibrage d’équations simples), et loi de conservation de la masse totale.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-teal-400 to-sky-500',
    readingTimeMinutes: 15,
    visualizerType: 'chimie-gaz',
    illustrationKey: 'equations-bilan',
    bossMeta: { name: 'MAÎTRE LAVOISIER', emoji: '⚖️', xp: 200 },
    kokoSpeech:
      '« Rien ne se perd, rien ne se crée, tout se transforme ! » Lors d’une réaction chimique, aucun atome ne disparaît : on retrouve EXACTEMENT le même nombre d’atomes de chaque sorte à gauche et à droite de la flèche !',
    realWorldHook: {
      title: 'Pourquoi la masse totale ne change pas dans un bocal fermé ?',
      scenario:
        'Dans un bocal en verre hermétiquement fermé posé sur une balance à 350,0 g, on fait brûler un ruban de magnésium ou du carbone grâce à une loupe. Une fois refroidi, la balance affiche toujours exactement 350,0 g.',
      question:
        'Comment expliquer que la masse totale reste rigoureusement constante même si des corps nouveaux ont remplacé les anciens ?',
    },
    unitsTable: [
      { symbol: '➔', quantity: 'Sens de la transformation chimique', unit: 'Réactifs (gauche) ➔ Produits (droite)', instrument: 'Équation-bilan' },
      { symbol: 'Coef.', quantity: 'Nombre stœchiométrique', unit: 'Placé DEVANT la formule (jamais en indice !)', instrument: 'Équilibrage' },
      { symbol: 'm_tot', quantity: 'Loi de Lavoisier', unit: 'm(réactifs consommés) = m(produits formés)', instrument: 'Balance' },
    ],
    experimentOrActivity: {
      title: 'Vérifier la conservation de la masse (vinaigre + craie en bouteille fermée)',
      materials: ['1 bouteille en plastique avec bouchon', 'Vinaigre', 'Un morceau de craie', '1 balance au 0,1 g'],
      observation:
        'Bouteille fermée avant réaction : 185,4 g. On lâche la craie dans le vinaigre : un gaz se forme et gonfle la bouteille, mais la balance indique toujours 185,4 g ! (Si on ouvre le bouchon, le gaz s’échappe et la masse baisse).',
      conclusion:
        'La masse totale se conserve toujours lors d’une transformation chimique tant que rien ne s’échappe (système fermé).',
    },
    revisionChecklist: [
      'Je sais compter chaque type d’atome du côté Réactifs et du côté Produits.',
      'Pour équilibrer, je ne modifie JAMAIS les petits chiffres (indices) des formules ; je place uniquement des coefficients DEVANT les formules.',
      'Je sais appliquer m(réactifs) = m(produits) pour trouver une masse manquante.',
    ],
    keyFormulas: [
      'Loi de conservation des atomes : même nombre d’atomes C, H, O, Fe... avant et après la flèche',
      'Loi de Lavoisier (masse) : masse totale des réactifs consommés = masse totale des produits formés',
      'Combustion du méthane : CH₄ + 2 O₂ ➔ CO₂ + 2 H₂O',
      'Combustion du dihydrogène : 2 H₂ + O₂ ➔ 2 H₂O  |  Combustion du fer : 3 Fe + 2 O₂ ➔ Fe₃O₄',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Équations-Bilan & Conservation',
      slogan: 'Mêmes atomes à gauche et à droite · Même masse totale avant et après !',
      summaryBulletPoints: [
        'Étape 1 : Écrire les formules justes des réactifs (à gauche) et des produits (à droite).',
        'Étape 2 : Compter chaque atome (ex : C puis H puis O).',
        'Étape 3 : Ajouter des coefficients DEVANT les formules jusqu’à avoir égalité parfaite de chaque côté.',
        'Interdit : changer H₂O en H₂O₂ pour équilibrer ! Cela changerait la molécule d’eau en eau oxygénée !',
      ],
      verticalFormulas: [
        {
          name: 'Équilibrer la combustion du méthane (CH₄)',
          badge: '⚖️',
          steps: [
            'Départ : CH₄ + O₂ ➔ CO₂ + H₂O',
            'Carbone C : 1 à gauche, 1 à droite (OK)',
            'Hydrogène H : 4 à gauche ➔ mettre 2 devant H₂O',
            'Oxygène O : 2 + 2 = 4 à droite ➔ mettre 2 devant O₂',
            'Équation équilibrée : CH₄ + 2 O₂ ➔ CO₂ + 2 H₂O',
          ],
          resultHighlight: 'CH₄ + 2 O₂ ➔ CO₂ + 2 H₂O',
          explanation: 'À gauche comme à droite : 1 C, 4 H et 4 O.',
          tip: 'Équilibre toujours l’oxygène O₂ en DERNIER car il est tout seul !',
        },
        {
          name: 'Conservation de la masse (Lavoisier)',
          badge: '🧪',
          steps: [
            '12 g de Carbone + 32 g de Dioxygène ➔ ? g de CO₂',
            'm(CO₂) = 12 + 32',
            'm(CO₂) = 44 g',
          ],
          resultHighlight: '44 g de CO₂',
          explanation: 'La masse du produit formé est la somme des masses des réactifs consommés.',
        },
      ],
      kokoTip: 'Équilibre toujours C puis H, et garde O₂ pour la fin : c’est la méthode la plus rapide et sans erreur !',
      pitfallToAvoid: 'Modifier les indices dans les formules (par exemple écrire CO₃ au lieu de CO₂) : INTERDIT ! On ne touche qu’aux grands coefficients devant les molécules.',
    },
    sections: [
      {
        title: '1. Conservation des atomes et équilibrage d’une équation-bilan',
        explanation: [
          'Au cours d’une réaction chimique, les molécules des réactifs se cassent et leurs atomes se réarrangent pour former les molécules des produits.',
          'Aucun atome n’apparaît ni ne disparaît : une équation-bilan est équilibrée lorsqu’on retrouve exactement le même nombre d’atomes de chaque espèce dans les réactifs et dans les produits.',
        ],
        rules: [
          {
            name: 'Méthode d’ajustement pas à pas',
            description: 'Placer des coefficients entiers devant les formules (et ne jamais modifier les indices).',
            example: '2 H₂ + O₂ ➔ 2 H₂O | À gauche : 4 H et 2 O | À droite : 4 H et 2 O ➔ Équilibrée !',
          },
        ],
      },
      {
        title: '2. Loi de conservation de la masse (Antoine Lavoisier)',
        explanation: [
          'Puisque tous les atomes se conservent et que chaque atome garde sa propre masse, la masse totale des réactifs qui disparaissent est toujours égale à la masse totale des produits qui se forment.',
        ],
        rules: [
          {
            name: 'Bilan de masse',
            description: 'm(Réactif 1) + m(Réactif 2) = m(Produit 1) + m(Produit 2).',
            example: '16 g de méthane + 64 g de O₂ forment 44 g de CO₂ et ? g d’eau | m(eau) = (16 + 64) - 44 = 80 - 44 = 36 g',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-19-1',
        'phys-equations-bilan',
        'Ex 1 : Équilibrer la formation de l’eau',
        1,
        'Quelle est l’équation-bilan correctement équilibrée de la combustion du dihydrogène H₂ dans le dioxygène O₂ ?',
        [
          '2 H₂ + O₂ ➔ 2 H₂O',
          'H₂ + O₂ ➔ H₂O',
          'H₂ + O₂ ➔ H₂O₂',
          '2 H₂ + 2 O₂ ➔ 2 H₂O',
        ],
        '2 H₂ + O₂ ➔ 2 H₂O',
        'Compte les atomes : à gauche 2×2 = 4 H et 2 O ; à droite 2×2 = 4 H et 2×1 = 2 O !',
        '2 H₂ + O₂ ➔ 2 H₂O possède 4 atomes H et 2 atomes O de chaque côté.',
        [
          {
            title: 'Compter les atomes de chaque côté',
            explanation: '2 molécules H₂ apportent 4 H ; 1 molécule O₂ apporte 2 O.',
            math: 'Gauche : 4 H, 2 O | Droite (2 H₂O) : 4 H, 2 O',
            subResult: '2 H₂ + O₂ ➔ 2 H₂O',
          },
        ],
        '⚖️'
      ),
      mkNum(
        'phys-19-2',
        'phys-equations-bilan',
        'Ex 2 : Coefficient devant O₂ dans C₃H₈ + ? O₂ ➔ 3 CO₂ + 4 H₂O',
        3,
        'Pour équilibrer la combustion du propane : C₃H₈ + (? ) O₂ ➔ 3 CO₂ + 4 H₂O, quel coefficient entier doit-on placer devant O₂ ?',
        '5',
        'Compte le nombre total d’atomes O à droite : (3 × 2) dans CO₂ + (4 × 1) dans H₂O = 6 + 4 = 10 atomes O. Combien faut-il de molécules O₂ ?',
        'Il y a 10 atomes O à droite, donc il faut 5 molécules de O₂ (5 × 2 = 10).',
        [
          {
            title: 'Compter les atomes O dans les produits',
            explanation: '3 CO₂ donnent 6 O ; 4 H₂O donnent 4 O.',
            math: 'Total O à droite = (3 × 2) + (4 × 1) = 6 + 4 = 10 atomes O',
            subResult: '10 atomes O',
          },
          {
            title: 'Diviser par 2 pour trouver le nombre de O₂',
            explanation: 'Chaque O₂ contient 2 atomes O.',
            math: '10 ÷ 2 = 5 ➔ 5 O₂',
            subResult: '5',
          },
        ],
        '',
        '🔥'
      ),
      mkNum(
        'phys-19-3',
        'phys-equations-bilan',
        'Ex 3 : Loi de Lavoisier (masse de CO₂ formée)',
        2,
        'On fait brûler complètement 6 g de carbone dans 16 g de dioxygène pur. Quelle masse de dioxyde de carbone (CO₂) obtient-on (en g) ?',
        '22',
        'D’après Lavoisier, la masse se conserve : m(CO₂) = 6 + 16.',
        'On obtient 22 g de dioxyde de carbone.',
        [
          {
            title: 'Appliquer la loi de conservation de la masse',
            explanation: 'Masse des produits = Somme des masses des réactifs consommés.',
            math: 'm(CO₂) = 6 + 16 | m(CO₂) = 22 g',
            rule: 'Loi de Lavoisier',
            subResult: '22 g',
          },
        ],
        'g',
        '⚖️'
      ),
      mkNum(
        'phys-19-4',
        'phys-equations-bilan',
        'Ex 4 : Masse d’eau formée lors de la combustion du méthane',
        3,
        'Lors d’une expérience, 16 g de méthane réagissent exactement avec 64 g de dioxygène pour former 44 g de dioxyde de carbone et de l’eau. Quelle masse d’eau est formée (en g) ?',
        '36',
        'Masse totale réactifs = 16 + 64 = 80 g. Donc 44 + m(eau) = 80.',
        'Il se forme 36 g d’eau.',
        [
          {
            title: 'Calculer la masse totale des réactifs',
            explanation: '16 + 64 = 80 g.',
            math: 'm_tot = 16 + 64 = 80 g',
            subResult: '80 g',
          },
          {
            title: 'Soustraire la masse de CO₂',
            explanation: 'm(eau) = 80 − 44 = 36 g.',
            math: 'm(eau) = 80 - 44 | m(eau) = 36 g',
            subResult: '36 g',
          },
        ],
        'g',
        '💧'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 20 : MÉLANGES, SOLUTIONS AQUEUSES, CONCENTRATION & pH
  // ==========================================
  {
    id: 'phys-solutions-ph',
    subject: 'physique',
    domainId: 'chimie',
    order: 20,
    title: 'Mélanges, solutions aqueuses, concentration massique et test du pH',
    badge: 'Chimie Ch. 20 · 4ème',
    shortDesc: 'Corps purs vs mélanges (filtration, décantation, distillation), soluté et solvant, concentration Cm = m ÷ V (g/L), et échelle de pH (acide, neutre, basique).',
    themeColor: '#a855f7',
    themeGradient: 'from-purple-500 via-pink-500 to-emerald-400',
    readingTimeMinutes: 14,
    visualizerType: 'solutions-ph',
    illustrationKey: 'solutions-ph',
    bossMeta: { name: 'ALCHIMISTE DU pH', emoji: '🧬', xp: 200 },
    kokoSpeech:
      'Quand tu dissous du sucre dans l’eau : l’eau est le SOLVANT, le sucre est le SOLUTÉ, et la masse totale reste égale à m(eau) + m(sucre) ! Et pour le pH : 0 à 6,9 = ACIDE (citron), 7 = NEUTRE (eau pure), 7,1 à 14 = BASIQUE (savon, javel) !',
    realWorldHook: {
      title: 'Purifier l’eau boueuse et tester l’acidité du jus de citron',
      scenario:
        'Après une pluie, l’eau d’un marigot est trouble (mélange hétérogène). On la laisse reposer puis on la filtre. Par ailleurs, en cuisine, une goutte de jus de citron sur du papier pH le colore en rouge vif, alors que l’eau savonneuse le colore en bleu foncé.',
      question:
        'Comment séparer les constituants d’un mélange, calculer la concentration en sucre d’un bissap (Cm = m ÷ V) et mesurer l’acidité avec le pH ?',
    },
    unitsTable: [
      { symbol: 'Cm', quantity: 'Concentration massique', unit: 'g/L (grammes par litre)', instrument: 'Cm = m_soluté ÷ V_solution' },
      { symbol: 'pH', quantity: 'Potentiel Hydrogène (acidité)', unit: 'Sans unité, de 0 à 14', instrument: 'Papier pH ou pH-mètre' },
      { symbol: 'pH = 7', quantity: 'Solution neutre', unit: 'Acide (< 7) · Neutre (= 7) · Basique (> 7)', instrument: 'Échelle colorée 0–14' },
    ],
    experimentOrActivity: {
      title: 'Mesurer le pH de 4 liquides du quotidien au papier pH',
      materials: ['Bandes de papier pH avec nuancier', 'Jus de citron', 'Eau pure', 'Eau savonneuse', 'Eau de javel diluée'],
      observation:
        'Jus de citron : rouge/orange (pH ≈ 2,5) ; Eau pure : vert (pH = 7) ; Eau savonneuse : bleu-vert (pH ≈ 9,5) ; Javel : bleu foncé/violet (pH ≈ 12).',
      conclusion:
        'Le pH classe toutes les solutions aqueuses : < 7 acide, = 7 neutre, > 7 basique.',
    },
    revisionChecklist: [
      'Je sais distinguer mélange homogène (eau salée) et mélange hétérogène (eau + sable, eau + huile), et choisir la bonne technique de séparation.',
      'Je sais calculer la concentration massique Cm = m ÷ V (avec m en g et V en L).',
      'Je sais que diluer une solution acide fait AUGMENTER son pH en se rapprochant de 7 (sans jamais dépasser 7 !).',
    ],
    keyFormulas: [
      'Conservation de la masse à la dissolution : m_solution = m_solvant + m_soluté',
      'Concentration massique : Cm = m_soluté ÷ V_solution   (m en g, V en Litres L, Cm en g/L)',
      'Masse de soluté : m = Cm × V   |   Volume : V = m ÷ Cm',
      'Échelle de pH (0 à 14) : pH < 7 (Acide)  |  pH = 7 (Neutre)  |  pH > 7 (Basique)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Mélanges, Concentration & pH',
      slogan: 'Cm = m ÷ V en g/L · pH < 7 Acide · pH = 7 Neutre · pH > 7 Basique',
      summaryBulletPoints: [
        'Décantation : laisser reposer pour que les particules lourdes tombent au fond (ou ampoule à décanter pour eau + huile).',
        'Filtration : retenir les particules solides en suspension grâce au papier filtre ➔ on recueille un filtrat limpide.',
        'Distillation (vaporisation + condensation) : récupérer l’eau pure d’une eau salée.',
        'Sécurité : les acides forts (pH ≈ 0–1) et bases fortes (soude, javel, pH ≈ 13–14) sont corrosifs : porter gants et lunettes, et toujours verser l’acide dans l’eau (jamais l’eau dans l’acide concentré) !',
      ],
      verticalFormulas: [
        {
          name: 'Calculer une concentration massique Cm',
          badge: '🥤',
          steps: [
            'On dissout m = 30 g de sucre dans V = 500 mL = 0,5 L de jus',
            'Formule : Cm = m ÷ V',
            'Cm = 30 ÷ 0,5',
            'Cm = 60 g/L',
          ],
          resultHighlight: 'Cm = 60 g/L',
          explanation: 'On convertit 500 mL en 0,5 L avant de diviser 30 g par 0,5 L.',
          tip: 'Pense toujours à convertir les mL en Litres (mL ÷ 1 000 = L) !',
        },
        {
          name: 'Retrouver la masse de sel dissoute',
          badge: '🧂',
          steps: [
            'Eau de mer à Port-Gentil : Cm = 35 g/L ; V = 2 L',
            'm = Cm × V = 35 × 2 = 70 g',
          ],
          resultHighlight: 'm = 70 g de sel',
          explanation: 'Chaque litre contient 35 g de sel, donc 2 litres contiennent 70 g.',
        },
      ],
      kokoTip: 'Si tu ajoutes de l’eau pure (pH 7) dans du jus de citron très acide (pH 2), tu le DILUES : il devient moins acide, donc son pH remonte vers 4 ou 5, mais il ne dépassera JAMAIS 7 !',
      pitfallToAvoid: 'Oublier de convertir les mL en L dans Cm = m ÷ V, ou croire que plus le pH est grand, plus la solution est acide (c’est l’inverse : pH 1 est très acide, pH 13 est très basique !).',
    },
    sections: [
      {
        title: '1. Mélanges, séparations et dissolution',
        explanation: [
          'Dans un mélange hétérogène, on distingue au moins deux constituants à l’œil nu (eau + sable, eau + huile). Dans un mélange homogène (solution aqueuse d’eau + sel), on ne distingue qu’une seule phase.',
          'Lors d’une dissolution, le solide (soluté) se disperse dans le liquide (solvant) jusqu’à la limite de saturation. La masse totale est la somme des masses.',
        ],
        rules: [
          {
            name: 'Concentration massique Cm = m ÷ V',
            description: 'La concentration massique indique la masse de soluté dissoute dans 1 litre de solution.',
            example: '15 g de sel dans 250 mL (= 0,25 L) | Cm = 15 ÷ 0,25 = 60 g/L',
          },
        ],
      },
      {
        title: '2. Solutions acides, neutres et basiques (Échelle de pH)',
        explanation: [
          'Le pH est un nombre compris entre 0 et 14 qui mesure l’acidité ou la basicité d’une solution aqueuse. On le mesure avec du papier pH ou un pH-mètre.',
          'pH < 7 : solution acide (vinaigre, jus d’ananas, acide chlorhydrique) | pH = 7 : solution neutre (eau pure) | pH > 7 : solution basique (savon, bicarbonate, eau de javel, soude).',
        ],
        rules: [
          {
            name: 'Effet de la dilution sur le pH',
            description: 'Diluer une solution rapproche toujours son pH de 7 (le pH d’une solution acide augmente vers 7 ; le pH d’une solution basique diminue vers 7).',
            example: 'Citron pH = 2,5 + beaucoup d’eau ➔ pH monte à 4,0 (toujours < 7 !)',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys-20-1',
        'phys-solutions-ph',
        'Ex 1 : Calculer la concentration massique Cm',
        1,
        'On dissout m = 45 g de sucre dans de l’eau pour obtenir V = 1,5 L de jus de gingembre. Calcule la concentration massique Cm en sucre (en g/L).',
        '30',
        'Applique Cm = m ÷ V = 45 ÷ 1,5.',
        'La concentration massique vaut Cm = 30 g/L.',
        [
          {
            title: 'Appliquer Cm = m ÷ V',
            explanation: 'm = 45 g et V = 1,5 L.',
            math: 'Cm = 45 ÷ 1,5 | Cm = 30 g/L',
            rule: 'Cm = m ÷ V',
            subResult: '30 g/L',
          },
        ],
        'g/L',
        '🥤'
      ),
      mkNum(
        'phys-20-2',
        'phys-solutions-ph',
        'Ex 2 : Concentration avec conversion mL → L',
        2,
        'Un élève dissout 12 g de sel dans de l’eau pour préparer un volume V = 200 mL de solution. Quelle est la concentration massique Cm (en g/L) ?',
        '60',
        'Convertis d’abord 200 mL = 0,2 L, puis calcule 12 ÷ 0,2.',
        'La concentration vaut Cm = 60 g/L.',
        [
          {
            title: 'Convertir le volume en litres',
            explanation: '200 mL = 200 ÷ 1 000 = 0,2 L.',
            math: 'V = 0,2 L',
            subResult: '0,2 L',
          },
          {
            title: 'Calculer Cm = m ÷ V',
            explanation: '12 ÷ 0,2 = 60 g/L.',
            math: 'Cm = 12 ÷ 0,2 | Cm = 60 g/L',
            subResult: '60 g/L',
          },
        ],
        'g/L',
        '🧂'
      ),
      mkQcm(
        'phys-20-3',
        'phys-solutions-ph',
        'Ex 3 : Classer selon l’échelle de pH',
        1,
        'On mesure le pH de quatre liquides : A (pH = 2,5), B (pH = 7,0), C (pH = 8,5), D (pH = 12,0). Laquelle est la solution la PLUS basique ?',
        [
          'La solution D (pH = 12,0)',
          'La solution A (pH = 2,5)',
          'La solution B (pH = 7,0)',
          'La solution C (pH = 8,5)',
        ],
        'La solution D (pH = 12,0)',
        'Plus le pH est proche de 14, plus la solution est basique ; plus il est proche de 0, plus elle est acide.',
        'La solution D (pH = 12,0) est la plus éloignée au-dessus de 7, c’est donc la plus basique.',
        [
          {
            title: 'Comparer les valeurs à 7',
            explanation: 'pH = 2,5 (acide) < 7 (neutre) < 8,5 (faiblement basique) < 12,0 (fortement basique).',
            math: 'pH = 12,0 (le plus proche de 14) ➔ La plus basique',
            subResult: 'D (pH = 12,0)',
          },
        ],
        '🧬'
      ),
      mkQcm(
        'phys-20-4',
        'phys-solutions-ph',
        'Ex 4 : Effet de la dilution sur le pH d’un jus acide',
        3,
        'On ajoute beaucoup d’eau pure (pH = 7) dans un verre de jus de citron (pH = 2,3). Comment évolue le pH du mélange ?',
        [
          'Il augmente et se rapproche de 7 sans jamais dépasser 7',
          'Il diminue vers 0',
          'Il monte jusqu’à pH = 11',
          'Il reste exactement bloqué à 2,3',
        ],
        'Il augmente et se rapproche de 7 sans jamais dépasser 7',
        'Diluer rend la solution moins acide : le pH monte donc de 2,3 vers 7.',
        'En diluant une solution acide avec de l’eau, le pH augmente en tendant vers 7 sans jamais devenir basique.',
        [
          {
            title: 'Appliquer la règle de dilution',
            explanation: 'Dilution = rapprochement vers la neutralité (pH 7).',
            math: 'pH initial = 2,3 ➔ Dilution ➔ pH augmente vers 7 (reste < 7)',
            subResult: 'Augmente vers 7',
          },
        ],
        '🍋'
      ),
    ],
  },
];
