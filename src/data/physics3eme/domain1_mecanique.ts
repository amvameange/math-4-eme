import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_3EME_MECANIQUE: Chapter[] = [
  {
    id: 'phys3-actions-mecaniques',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'mecanique',
    order: 1,
    title: 'Actions mécaniques, forces de contact / à distance & vecteurs',
    badge: 'Physique 3ème · Ch. 1',
    shortDesc: 'Effets dynamique et statique d’une force, actions de contact localisées/réparties, actions à distance et représentation vectorielle.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-teal-500 to-cyan-400',
    readingTimeMinutes: 12,
    visualizerType: 'mecanique',
    illustrationKey: 'forces-dynamometre',
    bossMeta: { name: 'MAÎTRE DES VECTEURS 3ÈME', emoji: '🏹', xp: 150 },
    kokoSpeech:
      'Mbolo candidat au BEPC ! Une action mécanique est modélisée par un vecteur force F⃗. Pour ne perdre aucun point au tracé, vérifie toujours les 4 caractéristiques : Point d’application, Direction, Sens et Valeur en Newton (N) avec l’échelle !',
    realWorldHook: {
      title: 'Le remorqueur du port d’Owendo tirant un porte-conteneurs',
      scenario:
        'Au port d’Owendo, un câble tendu tire un navire avec une force horizontale de 12 000 N vers le large, tandis que la Terre attire le navire vers le bas (action à distance) et que l’eau exerce une poussée répartie sur toute la coque.',
      question:
        'Comment classer ces actions mécaniques et tracer le vecteur force à l’échelle 1 cm ⟷ 4 000 N ?',
    },
    unitsTable: [
      { symbol: 'F⃗', quantity: 'Vecteur force (intensité F)', unit: 'Newton (N)', instrument: 'Dynamomètre' },
      { symbol: 'L', quantity: 'Longueur du vecteur sur le schéma', unit: 'cm (proportionnelle à F)', instrument: 'Règle graduée + Échelle' },
      { symbol: 'g', quantity: 'Intensité de la pesanteur au Gabon', unit: '≈ 9,8 N/kg (souvent 10 N/kg)', instrument: 'P = m × g' },
    ],
    experimentOrActivity: {
      title: 'Action magnétique à distance vs traction par fil',
      materials: ['1 aimant droit', '1 bille en acier', '1 dynamomètre 5 N', '1 fil'],
      observation:
        'Sans toucher la bille, l’aimant l’attire et dévie sa trajectoire (action à distance). Avec un fil tendu sur le dynamomètre, l’aiguille indique 2,5 N (action de contact localisée).',
      conclusion:
        'Une action mécanique peut modifier le mouvement ou déformer un corps. Elle s’exerce par contact (localisée ou répartie) ou à distance (gravitationnelle, magnétique, électrique).',
    },
    revisionChecklist: [
      'Je sais distinguer action de contact localisée (fil, clou), répartie (vent sur voile, eau sur coque) et à distance (poids, aimant).',
      'Je maîtrise la conversion d’échelle pour tracer un vecteur force F⃗ à la règle.',
      'Je distingue bien la masse m (en kg, balance) du poids P (en N, dynamomètre).',
    ],
    keyFormulas: [
      '4 caractéristiques de F⃗ : Point d’application · Direction (droite d’action) · Sens · Intensité F (N)',
      'Longueur du vecteur : L (cm) = F (N) ÷ Échelle (N/cm)',
      'Poids d’un corps : P = m × g (P en N, m en kg, g ≈ 9,8 ou 10 N/kg)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Actions Mécaniques & Forces',
      slogan: 'Contact vs Distance + 4 caractéristiques exactes du vecteur F⃗',
      summaryBulletPoints: [
        'Effet dynamique : mettre en mouvement, accélérer, ralentir ou dévier un objet.',
        'Effet statique : déformer un objet (ressort) ou le maintenir au repos.',
        'Action localisée = en un point ; Action répartie = sur une surface (vent, pression de l’eau).',
        'On note la force avec une flèche (F⃗) et son intensité sans flèche (F = 15 N).',
      ],
      verticalFormulas: [
        {
          name: 'Calcul de la longueur du vecteur (Échelle)',
          badge: '📏',
          steps: [
            'Données : F = 12 000 N | Échelle : 1 cm ⟷ 4 000 N',
            'L = F ÷ Échelle',
            'L = 12 000 ÷ 4 000',
            'L = 3 cm',
          ],
          resultHighlight: 'Flèche de 3 cm',
          explanation: 'On divise l’intensité de la force par la valeur représentée par 1 cm.',
          tip: 'Écris toujours la légende de l’échelle à côté de ton dessin au BEPC !',
        },
        {
          name: 'Intensité du poids P = m × g',
          badge: '🌍',
          steps: [
            'Données : m = 65 kg | g = 10 N/kg',
            'P = m × g',
            'P = 65 × 10',
            'P = 650 N',
          ],
          resultHighlight: 'P = 650 N',
          explanation: 'Le poids s’applique au centre de gravité G, direction verticale, sens vers le bas.',
        },
      ],
      kokoTip: 'Ne mets jamais la flèche sur l’unité : écris « F = 20 N » (et non F⃗ = 20 N) !',
      pitfallToAvoid: 'Confondre direction (ex: verticale) et sens (ex: vers le bas) !',
    },
    sections: [
      {
        title: '1. Classification des actions mécaniques et effets',
        explanation: [
          'Une action mécanique est exercée par un donneur (acteur) sur un receveur. Elle produit soit un effet dynamique (modification du mouvement), soit un effet statique (déformation ou maintien en équilibre).',
          'On distingue les actions de contact (localisées en un point comme la tension d’un fil, ou réparties sur une surface comme le vent sur une tôle) et les actions à distance (attraction terrestre, aimant, charges électriques).',
        ],
        rules: [
          {
            name: 'Les 4 caractéristiques d’une force',
            description: 'Toute force est représentée par un segment fléché précisant : le point d’application, la droite d’action (direction), le sens et la valeur (intensité en Newton).',
            example: 'F = 15 N ; Échelle 1 cm ⟷ 5 N | Longueur L = 15 ÷ 5 | L = 3 cm',
            tip: 'La longueur de la flèche est strictement proportionnelle à la valeur en Newton.',
          },
        ],
        commonMistakes: [
          'Oublier de convertir la masse en kilogrammes (kg) avant d’utiliser P = m × g.',
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys3-1-1',
        'phys3-actions-mecaniques',
        'Ex 1 : Action de contact répartie ou à distance',
        1,
        'À Port-Gentil, l’attraction gravitationnelle exercée par la Terre sur une mangue qui tombe de l’arbre est :',
        [
          'Une action à distance répartie dans tout le volume',
          'Une action de contact localisée',
          'Une action de contact répartie sur la peau',
          'Une action magnétique',
        ],
        'Une action à distance répartie dans tout le volume',
        'La Terre agit sur la mangue sans la toucher !',
        'Le poids (attraction terrestre) est une action à distance répartie sur toute la masse du corps.',
        [
          {
            title: 'Identifier le contact',
            explanation: 'La mangue n’est pas posée au sol, elle tombe dans l’air.',
            math: 'Pas de contact direct ➔ Action à distance (Poids)',
            subResult: 'Action à distance',
          },
        ],
        '🥭'
      ),
      mkNum(
        'phys3-1-2',
        'phys3-actions-mecaniques',
        'Ex 2 : Longueur du vecteur force avec échelle',
        2,
        'Un élève tire une caisse avec une force horizontale F = 45 N. On choisit l’échelle : 1 cm pour 15 N.\nQuelle longueur en cm doit avoir la flèche représentant F⃗ ?',
        '3',
        'Divise 45 N par 15 N/cm.',
        'La flèche doit mesurer 3 cm.',
        [
          {
            title: 'Appliquer la proportionnalité de l’échelle',
            explanation: '1 cm correspond à 15 N.',
            math: 'L = F ÷ Échelle | L = 45 ÷ 15 | L = 3 cm',
            subResult: '3 cm',
          },
        ],
        'cm',
        '📏'
      ),
    ],
  },

  {
    id: 'phys3-equilibre-solide',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'mecanique',
    order: 2,
    title: 'Équilibre d’un solide soumis à deux forces & Poussée d’Archimède',
    badge: 'Physique 3ème · Ch. 2',
    shortDesc: 'Conditions d’équilibre (F⃗₁ + F⃗₂ = 0⃗), flottabilité, poussée d’Archimède Pa = ρ_liquide × V_imm × g.',
    themeColor: '#0ea5e9',
    themeGradient: 'from-sky-500 via-cyan-500 to-emerald-400',
    readingTimeMinutes: 14,
    visualizerType: 'mecanique',
    illustrationKey: 'equilibre-deux-forces',
    bossMeta: { name: 'CAPITAINE DE L’OGOOUÉ', emoji: '⚖️', xp: 160 },
    kokoSpeech:
      'Pour qu’un solide léger soumis à deux forces reste immobile en équilibre, ces deux forces doivent avoir la MÊME droite d’action, des sens OPPOSÉS et la MÊME intensité : F₁ = F₂ !',
    realWorldHook: {
      title: 'La pirogue en équilibre immobile sur le fleuve Ogooué',
      scenario:
        'À Lambaréné, une pirogue chargée flotte immobile sur l’eau calme. Elle est soumise à deux forces : son poids P⃗ (vertical vers le bas) et la poussée d’Archimède P⃗ₐ (verticale vers le haut).',
      question:
        'Quelle relation lie les intensités P et Pₐ lorsque la pirogue est en équilibre à la surface ?',
    },
    unitsTable: [
      { symbol: 'P', quantity: 'Poids du solide (vers le bas)', unit: 'N', instrument: 'Dynamomètre dans l’air' },
      { symbol: 'P’', quantity: 'Poids apparent dans le liquide', unit: 'N', instrument: 'Dynamomètre immergé' },
      { symbol: 'Pa / F_A', quantity: 'Poussée d’Archimède', unit: 'N', instrument: 'Pa = P − P’ = ρ × V_imm × g' },
    ],
    experimentOrActivity: {
      title: 'Vérifier les conditions d’équilibre avec deux dynamomètres',
      materials: ['1 anneau en plastique très léger', '2 dynamomètres circulaires 5 N'],
      observation:
        'Lorsque l’anneau tiré des deux côtés est immobile, les deux fils sont alignés sur la même droite, tirent en sens opposés, et les deux dynamomètres affichent exactement la même valeur (ex : 3,2 N et 3,2 N).',
      conclusion:
        'Un solide soumis à deux forces est en équilibre si ces deux forces ont même droite d’action, même intensité et des sens opposés (F⃗₁ + F⃗₂ = 0⃗).',
    },
    revisionChecklist: [
      'Je sais citer les 3 conditions d’équilibre d’un solide soumis à 2 forces (même droite, sens opposés, même intensité).',
      'Je sais calculer la poussée d’Archimède par différence : Pa = P − P’.',
      'Je sais prédire si un corps coule (P > Pa_max), flotte entre deux eaux ou flotte en surface.',
    ],
    keyFormulas: [
      'Équilibre à 2 forces : F⃗₁ + F⃗₂ = 0⃗  ⟺  même droite d’action, sens contraires, F₁ = F₂',
      'Poussée d’Archimède (mesure) : Pa = P_air − P_liquide',
      'Théorème d’Archimède : Pa = Poids du liquide déplacé = ρ_liquide × V_immergé × g',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Équilibre & Archimède',
      slogan: 'Même droite · Sens opposés · Même valeur F₁ = F₂',
      summaryBulletPoints: [
        'Un objet suspendu à un fil est en équilibre sous son poids P⃗ et la tension T⃗ du fil : T = P.',
        'La poussée d’Archimède s’applique au centre de poussée, verticale, dirigée vers le HAUT.',
        'Plus le liquide est dense (eau salée de l’Atlantique > eau douce de l’Ogooué), plus la poussée d’Archimède est grande.',
      ],
      verticalFormulas: [
        {
          name: 'Poussée d’Archimède (Dynamomètre)',
          badge: '⚓',
          steps: [
            'Poids dans l’air : P = 8,5 N',
            'Poids dans l’eau : P’ = 5,5 N',
            'Pa = P − P’',
            'Pa = 8,5 − 5,5 = 3,0 N',
          ],
          resultHighlight: 'Pa = 3,0 N',
          explanation: 'La perte apparente de poids dans l’eau est exactement égale à la poussée d’Archimède.',
        },
        {
          name: 'Condition d’équilibre',
          badge: '⚖️',
          steps: [
            'Solide immobile soumis à P⃗ et R⃗ :',
            '1. Même droite d’action (verticale)',
            '2. Sens contraires (↓ et ↑)',
            '3. Même intensité : R = P',
          ],
          resultHighlight: 'P⃗ + R⃗ = 0⃗',
          explanation: 'Si une seule des 3 conditions manque, le solide bouge ou tourne.',
        },
      ],
      kokoTip: 'Un solide flotte en surface quand son poids P est inférieur à la poussée maximale (ou ρ_solide < ρ_liquide) !',
      pitfallToAvoid: 'Oublier la condition « même droite d’action » (deux forces parallèles décalées font tourner l’objet !).',
    },
    sections: [
      {
        title: '1. Équilibre d’un solide soumis à deux forces',
        explanation: [
          'Un solide léger (anneau, panneau) soumis uniquement à deux forces F⃗₁ et F⃗₂ est en équilibre si et seulement si ces deux forces ont : la même droite d’action, des sens opposés, et la même intensité (F₁ = F₂).',
        ],
        rules: [
          {
            name: 'Relation vectorielle d’équilibre',
            description: 'On résume les 3 conditions par l’égalité vectorielle F⃗₁ + F⃗₂ = 0⃗ (soit F⃗₁ = −F⃗₂).',
            example: 'Lampe de masse 0,4 kg suspendue au plafond (g = 10 N/kg) | P = 0,4 × 10 = 4 N | À l’équilibre, tension du câble T = P = 4 N',
          },
        ],
      },
      {
        title: '2. Poussée d’Archimède et flottabilité',
        explanation: [
          'Tout corps plongé dans un fluide (liquide ou gaz) subit de la part de ce fluide une force verticale dirigée de bas en haut appelée poussée d’Archimède (Pa).',
          'Son intensité est égale au poids du volume de fluide déplacé : Pa = ρ_fluide × V_imm × g.',
        ],
        rules: [
          {
            name: 'Flotter ou couler ?',
            description: 'Si le solide flotte en équilibre à la surface, son poids est exactement compensé par la poussée d’Archimède : Pa = P.',
            example: 'Bille d’acier : P_air = 6 N, P_eau = 5,2 N | Pa = P_air − P_eau | Pa = 6 − 5,2 = 0,8 N',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys3-2-1',
        'phys3-equilibre-solide',
        'Ex 1 : Équilibre d’une lampe suspendue',
        1,
        'Un lustre de masse m = 2,5 kg est suspendu immobile au plafond d’un salon à Libreville (g = 10 N/kg).\nQuelle est l’intensité de la tension T du fil qui le retient (en N) ?',
        '25',
        'À l’équilibre sous 2 forces, T = P = m × g.',
        'T = 25 N.',
        [
          {
            title: 'Calculer le poids P',
            explanation: 'P = m × g = 2,5 × 10 = 25 N.',
            math: 'P = 2,5 × 10 | P = 25 N',
          },
          {
            title: 'Appliquer la condition d’équilibre',
            explanation: 'Le lustre étant en équilibre sous deux forces (P⃗ et T⃗), elles ont la même intensité.',
            math: 'T = P | T = 25 N',
            subResult: '25 N',
          },
        ],
        'N',
        '💡'
      ),
      mkNum(
        'phys3-2-2',
        'phys3-equilibre-solide',
        'Ex 2 : Poussée d’Archimède mesurée',
        2,
        'Un caillou pèse P = 14 N dans l’air. Plongé entièrement dans l’eau, le dynamomètre indique P’ = 9,2 N.\nCalculer la poussée d’Archimède Pa exercée par l’eau (en N).',
        '4.8',
        'Utilise Pa = P − P’.',
        'Pa = 4,8 N.',
        [
          {
            title: 'Calculer Pa = P − P’',
            explanation: 'La poussée d’Archimède soulage le dynamomètre.',
            math: 'Pa = 14 − 9,2 | Pa = 4,8 N',
            subResult: '4,8 N',
          },
        ],
        'N',
        '⚓'
      ),
    ],
  },

  {
    id: 'phys3-travail-puissance',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'mecanique',
    order: 3,
    title: 'Travail et Puissance mécaniques (W = F × d ; P = W ÷ t)',
    badge: 'Physique 3ème · Ch. 3',
    shortDesc: 'Travail d’une force colinéaire au déplacement, travail du poids W = m·g·h, travail moteur/résistant/nul, puissance en Watt.',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-orange-500 to-red-400',
    readingTimeMinutes: 14,
    visualizerType: 'mecanique',
    illustrationKey: 'travail-puissance-meca',
    bossMeta: { name: 'GRUTIER D’OWENDO', emoji: '🏗️', xp: 160 },
    kokoSpeech:
      'En physique 3ème, si une force est PERPENDICULAIRE au déplacement (comme le poids d’un sac porté sur une route plate), son travail est NUL (W = 0 J) ! Et n’oublie jamais : distance en mètres (m) et temps en secondes (s) !',
    realWorldHook: {
      title: 'La grue du port d’Owendo soulevant une grume d’okoumé',
      scenario:
        'Une grue lève verticalement un tronc d’okoumé de masse 800 kg à une hauteur h = 15 m en 20 secondes (g = 10 N/kg).',
      question:
        'Quel travail mécanique W la grue fournit-elle et quelle est sa puissance mécanique P en Watts (et en kW) ?',
    },
    unitsTable: [
      { symbol: 'W', quantity: 'Travail mécanique d’une force', unit: 'Joule (J) · 1 kJ = 1 000 J', instrument: 'W = F × d' },
      { symbol: 'd ou h', quantity: 'Longueur du déplacement / hauteur', unit: 'mètre (m)', instrument: 'Décamètre' },
      { symbol: 'P', quantity: 'Puissance mécanique', unit: 'Watt (W) · 1 ch ≈ 736 W', instrument: 'P = W ÷ t = F × v' },
    ],
    experimentOrActivity: {
      title: 'Comparer deux montées d’escalier (Même travail, puissances différentes)',
      materials: ['1 chronomètre', '1 sac de 5 kg', 'Un escalier de hauteur 3 m'],
      observation:
        'Moussa monte le sac en 6 s (P = 150 J ÷ 6 s = 25 W). Fatou monte le même sac sur la même hauteur en 3 s (P = 150 J ÷ 3 s = 50 W).',
      conclusion:
        'Le travail fourni contre le poids (W = m·g·h) ne dépend que du poids et de la hauteur, mais la puissance est plus grande quand on va plus vite !',
    },
    revisionChecklist: [
      'Je convertis toujours la distance en mètres (m) et la durée en secondes (s).',
      'Je sais distinguer travail moteur (dans le sens du mouvement), résistant (opposé, ex : frottements) et nul (force ⊥ déplacement).',
      'Je sais utiliser P = W ÷ t et P = F × v.',
    ],
    keyFormulas: [
      'Travail d’une force constante colinéaire : W = F × d (en Joules J)',
      'Travail du poids lors d’un dénivelé h : W(P⃗) = m × g × h (moteur en descente, résistant en montée)',
      'Puissance mécanique : P = W ÷ t = F × v (P en W, W en J, t en s, v en m/s)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Travail & Puissance Mécaniques',
      slogan: 'W = F × d (J) · W_poids = m·g·h · P = W ÷ t (W)',
      summaryBulletPoints: [
        '1 Joule = travail d’une force de 1 N déplaçant son point d’application de 1 m dans sa direction.',
        'Si la force est perpendiculaire au trajet (ex : le poids sur sol horizontal), W = 0 J !',
        '1 cheval-vapeur (ch) ≈ 736 W ; 1 kW = 1 000 W.',
      ],
      verticalFormulas: [
        {
          name: 'Travail et Puissance d’une grue',
          badge: '🏗️',
          steps: [
            'Données : m = 800 kg ; h = 15 m ; t = 20 s ; g = 10 N/kg',
            '1) Poids P = 800 × 10 = 8 000 N',
            '2) Travail W = P × h = 8 000 × 15 = 120 000 J (120 kJ)',
            '3) Puissance P_meca = W ÷ t = 120 000 ÷ 20 = 6 000 W (6 kW)',
          ],
          resultHighlight: 'W = 120 kJ | P = 6 kW',
          explanation: 'La grue vainc le poids vertical sur 15 m, puis on divise par les 20 secondes.',
        },
      ],
      kokoTip: 'Attention à ne pas confondre la lettre P du POIDS (en N) et la lettre P de la PUISSANCE (en W) !',
      pitfallToAvoid: 'Laisser t en minutes dans P = W ÷ t ! Il faut obligatoirement t en SECONDES.',
    },
    sections: [
      {
        title: '1. Travail d’une force constante',
        explanation: [
          'Une force constante F⃗ dont le point d’application se déplace en ligne droite d’une longueur d dans la même direction effectue un travail W = F × d (en Joules, J).',
          'Le travail est moteur si la force favorise le mouvement, résistant si elle s’y oppose (freinage, montée), et nul si la force est perpendiculaire au déplacement.',
        ],
        rules: [
          {
            name: 'Travail du poids W = m × g × h',
            description: 'Le travail du poids entre deux altitudes différant de h ne dépend pas du chemin suivi (escalier ou pente douce), uniquement du dénivelé h !',
            example: 'm = 60 kg, g = 10 N/kg, montée h = 4 m | W = m × g × h = 60 × 10 × 4 | W = 2 400 J',
          },
        ],
      },
      {
        title: '2. Puissance mécanique P = W ÷ t',
        explanation: [
          'La puissance mécanique mesure la rapidité avec laquelle un travail est effectué : P = W ÷ t (en Watts, W).',
          'Comme W = F × d et v = d ÷ t, on montre aussi que P = F × v (avec v en m/s).',
        ],
        rules: [
          {
            name: 'Formule P = F × v',
            description: 'Utile pour les véhicules (Transgabonais, pirogue à moteur) avançant à vitesse constante v.',
            example: 'F = 500 N et v = 20 m/s | P = F × v = 500 × 20 | P = 10 000 W = 10 kW',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys3-3-1',
        'phys3-travail-puissance',
        'Ex 1 : Travail d’une force motrice',
        1,
        'Un tracteur tire une remorque de cacao sur une distance d = 80 m avec une force de traction horizontale F = 1 500 N.\nCalculer le travail W fourni par cette force (en kJ, 1 kJ = 1 000 J).',
        '120',
        'Calcule W = F × d en Joules puis divise par 1 000.',
        'W = 120 000 J = 120 kJ.',
        [
          {
            title: 'Calculer W en Joules',
            explanation: 'W = F × d = 1 500 × 80.',
            math: 'W = 1 500 × 80 | W = 120 000 J',
          },
          {
            title: 'Convertir en kilojoules',
            explanation: '120 000 ÷ 1 000 = 120 kJ.',
            math: 'W = 120 kJ',
            subResult: '120 kJ',
          },
        ],
        'kJ',
        '🚜'
      ),
      mkNum(
        'phys3-3-2',
        'phys3-travail-puissance',
        'Ex 2 : Puissance d’un moteur de monte-charge',
        2,
        'Un monte-charge fournit un travail W = 45 000 J pendant une durée t = 15 secondes.\nCalculer sa puissance mécanique P (en W).',
        '3000',
        'Utilise P = W ÷ t.',
        'P = 3 000 W.',
        [
          {
            title: 'Appliquer P = W ÷ t',
            explanation: 'W = 45 000 J et t = 15 s.',
            math: 'P = 45 000 ÷ 15 | P = 3 000 W',
            subResult: '3 000 W',
          },
        ],
        'W',
        '⚙️'
      ),
    ],
  },

  {
    id: 'phys3-energie-mecanique',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'mecanique',
    order: 4,
    title: 'Énergie cinétique, Énergie potentielle & Conservation (Ec + Ep = Em)',
    badge: 'Physique 3ème · Ch. 4',
    shortDesc: 'Formules Ec = ½mv², Ep = mgh, énergie mécanique Em = Ec + Ep et conversions énergétiques (barrage de Kinguélé / Poubara).',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-500 via-violet-500 to-purple-400',
    readingTimeMinutes: 15,
    visualizerType: 'mecanique',
    illustrationKey: 'energie-mecanique',
    bossMeta: { name: 'INGÉNIEUR DE POUBARA', emoji: '🌊', xp: 170 },
    kokoSpeech:
      'Au BEPC Gabon, le barrage hydroélectrique de Kinguélé ou de Poubara est un classique ! L’eau en hauteur possède de l’Énergie Potentielle (Ep = m·g·h). En chutant, Ep diminue et se transforme en Énergie Cinétique (Ec = ½·m·v²) !',
    realWorldHook: {
      title: 'La chute d’eau du barrage hydroélectrique de Poubara (Haut-Ogooué)',
      scenario:
        'Au barrage de Poubara près de Franceville, chaque mètre cube d’eau (m = 1 000 kg) retenu à 30 m de hauteur possède une réserve d’énergie potentielle qui entraîne les turbines en bas de la chute.',
      question:
        'Comment calculer l’énergie potentielle en haut, l’énergie cinétique due à la vitesse, et comment la vitesse double-t-elle l’énergie cinétique ?',
    },
    unitsTable: [
      { symbol: 'Ec', quantity: 'Énergie cinétique (liée à la vitesse)', unit: 'Joule (J)', instrument: 'Ec = ½ × m × v² (v en m/s)' },
      { symbol: 'Ep', quantity: 'Énergie potentielle de pesanteur', unit: 'Joule (J)', instrument: 'Ep = m × g × h (h en m)' },
      { symbol: 'Em', quantity: 'Énergie mécanique totale', unit: 'Joule (J)', instrument: 'Em = Ec + Ep' },
    ],
    experimentOrActivity: {
      title: 'Distance de freinage et vitesse au carré (Sécurité routière N1)',
      materials: ['1 bille d’acier', '1 rail incliné à 2 hauteurs différentes', '1 bloc léger en bois'],
      observation:
        'Quand la bille arrive 2 fois plus vite sur le bloc, elle pousse le bloc 4 fois plus loin (car 2² = 4) !',
      conclusion:
        'L’énergie cinétique est proportionnelle au CARRÉ de la vitesse : si v est multipliée par 2, Ec est multipliée par 4 !',
    },
    revisionChecklist: [
      'Je convertis toujours la vitesse de km/h en m/s en divisant par 3,6 avant de calculer Ec = ½mv².',
      'Je sais que sans frottements, Em = Ec + Ep reste constante durant une chute libre.',
      'Je connais la chaîne énergétique d’une centrale hydroélectrique (Potentielle ➔ Cinétique ➔ Électrique).',
    ],
    keyFormulas: [
      'Énergie cinétique : Ec = ½ × m × v² (m en kg, v en m/s, Ec en J)',
      'Conversion vitesse : v (m/s) = v (km/h) ÷ 3,6  |  Ex : 72 km/h = 20 m/s',
      'Énergie potentielle : Ep = m × g × h  |  Énergie mécanique : Em = Ec + Ep',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Énergie Mécanique',
      slogan: 'Ec = ½mv² · Ep = mgh · Em = Ec + Ep (constante sans frottements)',
      summaryBulletPoints: [
        'Sécurité routière : doubler sa vitesse (de 50 à 100 km/h) multiplie l’énergie cinétique par 4 !',
        'Lors d’une chute sans frottements : Ep baisse, Ec augmente de la même quantité, Em ne change pas.',
        'S’il y a des frottements, une partie de Em se transforme en chaleur (énergie thermique).',
      ],
      verticalFormulas: [
        {
          name: 'Calcul de Ec avec conversion km/h ➔ m/s',
          badge: '🚗',
          steps: [
            'Données : voiture m = 1 000 kg ; v = 72 km/h',
            '1) v = 72 ÷ 3,6 = 20 m/s',
            '2) Ec = 0,5 × 1 000 × 20²',
            '3) Ec = 500 × 400 = 200 000 J (200 kJ)',
          ],
          resultHighlight: 'Ec = 200 kJ',
          explanation: 'Toujours diviser les km/h par 3,6 et élever la vitesse au carré en premier.',
        },
      ],
      kokoTip: 'Mémorise ces conversions rapides pour le BEPC : 36 km/h = 10 m/s | 72 km/h = 20 m/s | 108 km/h = 30 m/s !',
      pitfallToAvoid: 'Oublier le carré sur la vitesse (v²) ou oublier de diviser par 2 dans Ec = ½mv² !',
    },
    sections: [
      {
        title: '1. Énergie cinétique (Ec) et Énergie potentielle (Ep)',
        explanation: [
          'Tout corps en mouvement possède une énergie cinétique Ec = ½ × m × v² due à sa vitesse (en m/s) et à sa masse (en kg).',
          'Tout corps situé à une altitude h au-dessus d’un niveau de référence possède une énergie potentielle de pesanteur Ep = m × g × h.',
        ],
        rules: [
          {
            name: 'Conservation de l’énergie mécanique',
            description: 'En l’absence de frottements, l’énergie mécanique Em = Ec + Ep se conserve au cours du mouvement.',
            example: 'En haut d’une chute : Ep = 300 000 J et Ec = 0 J | Em = 300 000 J | À mi-hauteur (Ep = 150 000 J) : Ec = 300 000 − 150 000 = 150 000 J',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys3-4-1',
        'phys3-energie-mecanique',
        'Ex 1 : Énergie potentielle au barrage de Kinguélé',
        1,
        'Une masse d’eau m = 500 kg se trouve au sommet d’une chute de hauteur h = 20 m (g = 10 N/kg).\nCalculer son énergie potentielle de pesanteur Ep en kilojoules (kJ).',
        '100',
        'Calcule Ep = m × g × h en Joules puis divise par 1 000.',
        'Ep = 100 000 J = 100 kJ.',
        [
          {
            title: 'Calculer Ep en Joules',
            explanation: 'Ep = 500 × 10 × 20.',
            math: 'Ep = 500 × 10 × 20 | Ep = 100 000 J',
          },
          {
            title: 'Convertir en kJ',
            explanation: '100 000 ÷ 1 000 = 100 kJ.',
            math: 'Ep = 100 kJ',
            subResult: '100 kJ',
          },
        ],
        'kJ',
        '🌊'
      ),
      mkNum(
        'phys3-4-2',
        'phys3-energie-mecanique',
        'Ex 2 : Énergie cinétique d’un taxi à Libreville',
        2,
        'Un taxi de masse m = 1 200 kg roule à v = 36 km/h sur le bord de mer.\nConvertir la vitesse en m/s puis calculer son énergie cinétique Ec en kJ.',
        '60',
        '36 km/h = 36 ÷ 3,6 = 10 m/s. Puis Ec = 0,5 × 1 200 × 10².',
        'Ec = 60 000 J = 60 kJ.',
        [
          {
            title: 'Convertir la vitesse en m/s',
            explanation: '36 ÷ 3,6 = 10 m/s.',
            math: 'v = 36 ÷ 3,6 | v = 10 m/s',
          },
          {
            title: 'Calculer Ec = ½mv²',
            explanation: 'Ec = 0,5 × 1 200 × 10² = 600 × 100 = 60 000 J = 60 kJ.',
            math: 'Ec = 0,5 × 1 200 × 100 | Ec = 60 000 J = 60 kJ',
            subResult: '60 kJ',
          },
        ],
        'kJ',
        '🚕'
      ),
    ],
  },
];
