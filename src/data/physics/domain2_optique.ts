import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_DOMAIN2_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHAPITRE 7 : SOURCES & PROPAGATION RECTILIGNE DE LA LUMIÈRE
  // ==========================================
  {
    id: 'phys-propagation-lumiere',
    subject: 'physique',
    domainId: 'optique',
    order: 7,
    title: 'Sources de lumière et propagation rectiligne',
    badge: 'Physique Ch. 7 · 4ème',
    shortDesc: 'Sources primaires vs objets diffusants, conditions de visibilité, propagation en ligne droite, vitesse c = 300 000 km/s et année-lumière.',
    themeColor: '#eab308',
    themeGradient: 'from-amber-400 via-yellow-500 to-orange-400',
    readingTimeMinutes: 12,
    visualizerType: 'optique',
    illustrationKey: 'propagation-lumiere',
    bossMeta: { name: 'GARDIEN DU RAYON', emoji: '🔦', xp: 150 },
    kokoSpeech:
      'Pour voir un objet, ce n’est pas ton œil qui envoie un rayon : c’est la lumière qui part de l’objet et ENTRE dans ton œil en ligne droite ! Et la Lune n’est pas une source primaire : elle diffuse la lumière du Soleil !',
    realWorldHook: {
      title: 'Pourquoi voit-on la Lune briller la nuit au-dessus de l’Estuaire ?',
      scenario:
        'La nuit, la Lune éclaire la plage de Pointe-Denis, alors que c’est un astre froid constitué de roches comme la Terre. Pourtant, pendant une éclipse totale, elle s’assombrit presque complètement.',
      question:
        'La Lune fabrique-t-elle sa propre lumière comme le Soleil, ou se comporte-t-elle comme un grand écran qui renvoie la lumière ?',
    },
    unitsTable: [
      { symbol: 'c', quantity: 'Célérité (vitesse) de la lumière', unit: '300 000 km/s (ou 3 × 10⁸ m/s)', instrument: 'Dans le vide et l’air' },
      { symbol: 'a.l.', quantity: 'Année-lumière (distance !)', unit: 'Distance parcourue en 1 an (~9,46 × 10¹² km)', instrument: 'Astronomie' },
      { symbol: 'd = c × t', quantity: 'Distance lumière–temps', unit: 'km ou m', instrument: 'Propagation rectiligne' },
    ],
    experimentOrActivity: {
      title: 'Expérience des 3 cartons alignés (propagation rectiligne)',
      materials: ['1 lampe torche', '3 cartons percés d’un petit trou en leur centre', '1 fil tendu ou baguette'],
      observation:
        'On ne voit la flamme ou la lampe à travers les trois trous que lorsque les trois trous sont parfaitement alignés sur une même droite.',
      conclusion:
        'Dans un milieu transparent et homogène (comme l’air ou le vide), la lumière se propage toujours en ligne droite.',
    },
    revisionChecklist: [
      'Je sais distinguer une source primaire (Soleil, flamme, ampoule allumée) d’un objet diffusant (Lune, cahier, table).',
      'Je sais tracer un rayon lumineux avec une flèche partant de l’objet VERS l’œil.',
      'Je sais calculer la distance Terre–Soleil ou Terre–Lune avec d = c × t.',
    ],
    keyFormulas: [
      'Propagation rectiligne : dans un milieu homogène et transparent, la lumière va en ligne droite',
      'Vitesse de la lumière : c = 300 000 km/s = 300 000 000 m/s',
      'Temps Soleil ➔ Terre (d = 150 000 000 km) : t = 500 s = 8 min 20 s',
      'L’année-lumière (a.l.) est une unité de DISTANCE, pas de temps !',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Propagation Rectiligne de la Lumière',
      slogan: 'De l’objet vers l’œil, en ligne droite à 300 000 km/s !',
      summaryBulletPoints: [
        'Source primaire : fabrique sa propre lumière (Soleil, étoile, flamme, ver luisant, écran allumé).',
        'Objet diffusant (source secondaire) : renvoie une partie de la lumière qu’il reçoit (Lune, planète, mur blanc).',
        'Un milieu transparent laisse passer la lumière et permet de voir nettement à travers (air, verre clair, eau pure).',
        'Un milieu translucide laisse passer la lumière mais brouille l’image (papier calque, verre dépoli). Un milieu opaque la bloque (bois, mur).',
      ],
      verticalFormulas: [
        {
          name: 'Calculer une distance astronomique (d = c × t)',
          badge: '🚀',
          steps: [
            'Temps aller Terre ➔ Lune : t = 1,28 s',
            'Vitesse lumière : c = 300 000 km/s',
            'd = 300 000 × 1,28',
            'd = 384 000 km',
          ],
          resultHighlight: 'd = 384 000 km',
          explanation: 'On multiplie la vitesse de la lumière par la durée du trajet en secondes.',
          tip: 'Si on te donne la durée d’un ALLER-RETOUR laser, n’oublie pas de diviser la durée par 2 avant de calculer la distance !',
        },
      ],
      kokoTip: 'Pour savoir dans quel sens mettre la flèche d’un rayon : demande-toi « Qui éclaire ? » et « Qui reçoit ? ». La flèche entre toujours dans l’œil !',
      pitfallToAvoid: 'Dire que l’année-lumière est une durée : NON, 1 année-lumière est une DISTANCE immense (~9 460 milliards de km).',
    },
    sections: [
      {
        title: '1. Sources primaires, objets diffusants et vision',
        explanation: [
          'Une source primaire produit la lumière qu’elle émet (Soleil, lampe allumée, feu). Un objet diffusant (comme la Lune, Mars, ou ton cahier) ne brille que lorsqu’il est éclairé et renvoie cette lumière dans toutes les directions.',
          'Condition pour voir un objet : il faut que l’objet soit éclairé (ou soit une source primaire) ET que la lumière qu’il envoie arrive jusqu’à notre œil sans obstacle.',
        ],
        rules: [
          {
            name: 'Sens du rayon lumineux',
            description: 'On modélise le trajet de la lumière par une droite tracée à la règle munie d’une flèche orientée de la source vers le récepteur (ou l’œil).',
            example: 'Soleil ➔ (rayon) ➔ Lune ➔ (rayon diffusé) ➔ Œil de l’observateur',
          },
        ],
      },
      {
        title: '2. Vitesse de la lumière et année-lumière',
        explanation: [
          'Dans le vide et dans l’air, la lumière se déplace à une vitesse vertigineuse : c ≈ 300 000 km/s (soit 3 × 10⁸ m/s).',
          'Comme les distances entre les étoiles sont énormes, on utilise l’année-lumière (a.l.) : c’est la distance parcourue par la lumière en une année.',
        ],
        rules: [
          {
            name: 'Relation d = c × t',
            description: 'La distance parcourue en km est le produit de c = 300 000 km/s par la durée t en secondes.',
            example: 't = 500 s (Soleil ➔ Terre) | d = 300 000 × 500 | d = 150 000 000 km',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-7-1',
        'phys-propagation-lumiere',
        'Ex 1 : Source primaire vs Objet diffusant',
        1,
        'Parmi les astres suivants visibles dans le ciel gabonais, lequel est une source PRIMAIRE de lumière ?',
        [
          'La Lune',
          'La planète Vénus (Étoile du berger)',
          'Le Soleil',
          'La Terre vue de l’espace',
        ],
        'Le Soleil',
        'Les étoiles fabriquent leur propre lumière ; les planètes et la Lune ne font que réfléchir la lumière du Soleil.',
        'Le Soleil est une étoile qui produit sa propre lumière : c’est une source primaire.',
        [
          {
            title: 'Distinguer étoile et planète/satellite',
            explanation: 'Lune, Vénus et Terre sont des objets diffusants qui renvoient la lumière solaire.',
            math: 'Étoile (Soleil) = Source primaire | Planètes & Lune = Objets diffusants',
            subResult: 'Le Soleil',
          },
        ],
        '☀️'
      ),
      mkQcm(
        'phys-7-2',
        'phys-propagation-lumiere',
        'Ex 2 : Sens des rayons pour voir un arbre',
        1,
        'Pour qu’un élève voie un manguier éclairé par le Soleil, quel est le trajet correct de la lumière ?',
        [
          'Œil ➔ Manguier ➔ Soleil',
          'Soleil ➔ Manguier ➔ Œil',
          'Soleil ➔ Œil ➔ Manguier',
          'Manguier ➔ Soleil ➔ Œil',
        ],
        'Soleil ➔ Manguier ➔ Œil',
        'La lumière part toujours de la source, frappe l’objet, puis entre dans l’œil.',
        'Le Soleil éclaire le manguier, qui diffuse ensuite la lumière vers l’œil.',
        [
          {
            title: 'Orienter la chaîne lumineuse',
            explanation: 'L’œil est un récepteur final de lumière, jamais un émetteur.',
            math: 'Source (Soleil) ➔ Objet (Manguier) ➔ Récepteur (Œil)',
            subResult: 'Soleil ➔ Manguier ➔ Œil',
          },
        ],
        '👁️'
      ),
      mkNum(
        'phys-7-3',
        'phys-propagation-lumiere',
        'Ex 3 : Temps de trajet Soleil → Terre',
        2,
        'La distance Terre–Soleil est d = 150 000 000 km et la vitesse de la lumière vaut c = 300 000 km/s. Combien de secondes met la lumière du Soleil pour nous parvenir ?',
        '500',
        'Applique t = d ÷ c = 150 000 000 ÷ 300 000 (simplifie d’abord 5 zéros !).',
        'La lumière met t = 500 secondes (soit 8 min 20 s).',
        [
          {
            title: 'Utiliser t = d ÷ c',
            explanation: 'On simplifie les 5 zéros de 300 000 : 1 500 ÷ 3 = 500.',
            math: 't = 150 000 000 ÷ 300 000 | t = 1 500 ÷ 3 | t = 500 s',
            rule: 't = d ÷ c',
            subResult: '500 s',
          },
        ],
        's',
        '⏱️'
      ),
      mkNum(
        'phys-7-4',
        'phys-propagation-lumiere',
        'Ex 4 : Mesure Terre–Lune par tir laser (Aller-Retour)',
        3,
        'Un tir laser part de la Terre, se réfléchit sur un miroir posé sur la Lune et revient sur Terre en t_AR = 2,56 s au total. À quelle distance se trouve la Lune (en km) ? (c = 300 000 km/s)',
        '384000',
        'Attention ! 2,56 s est la durée de l’ALLER-RETOUR. Prends d’abord la moitié : t = 1,28 s, puis d = 300 000 × 1,28.',
        'La Lune se trouve à 384 000 km de la Terre.',
        [
          {
            title: 'Calculer la durée d’un aller simple',
            explanation: '2,56 s correspond à 2 fois la distance Terre–Lune.',
            math: 't_aller = 2,56 ÷ 2 | t_aller = 1,28 s',
            subResult: '1,28 s',
          },
          {
            title: 'Calculer la distance d = c × t',
            explanation: '300 000 × 1,28 = 384 000 km.',
            math: 'd = 300 000 × 1,28 | d = 384 000 km',
            subResult: '384 000 km',
          },
        ],
        'km',
        '🌙'
      ),
      mkQcm(
        'phys-7-5',
        'phys-propagation-lumiere',
        'Ex 5 : Signification de l’année-lumière',
        2,
        'L’étoile Proxima du Centaure se trouve à 4,2 années-lumière de la Terre. Que mesure l’année-lumière ?',
        [
          'Une durée de 4,2 ans',
          'Une distance parcourue par la lumière en un an',
          'Une température stellaire',
          'La masse d’une étoile',
        ],
        'Une distance parcourue par la lumière en un an',
        'Malgré le mot « année », c’est une unité de LONGUEUR (distance) !',
        'L’année-lumière est la distance que parcourt la lumière dans le vide pendant une année.',
        [
          {
            title: 'Définir l’année-lumière',
            explanation: 'd = c × (1 an) ≈ 9 460 milliards de km.',
            math: '1 année-lumière = Distance parcourue en 1 an à 300 000 km/s',
            subResult: 'Unité de distance',
          },
        ],
        '✨'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 8 : OMBRES, PÉNOMBRE ET ÉCLIPSES
  // ==========================================
  {
    id: 'phys-ombres-eclipses',
    subject: 'physique',
    domainId: 'optique',
    order: 8,
    title: 'Ombres, pénombre et éclipses (Soleil & Lune)',
    badge: 'Physique Ch. 8 · 4ème',
    shortDesc: 'Ombre propre, ombre portée et cône d’ombre avec source ponctuelle vs source étendue (pénombre), éclipses de Soleil et de Lune.',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-600 via-violet-500 to-amber-500',
    readingTimeMinutes: 13,
    visualizerType: 'optique',
    illustrationKey: 'ombres-eclipses',
    bossMeta: { name: 'MAÎTRE DES ÉCLIPSES', emoji: '🌑', xp: 160 },
    kokoSpeech:
      'Quand la Lune passe entre le Soleil et la Terre, c’est une ÉCLIPSE DE SOLEIL ! Quand la Terre passe entre le Soleil et la Lune, c’est la Terre qui fait de l’ombre à la Lune : ÉCLIPSE DE LUNE !',
    realWorldHook: {
      title: 'L’éclipse annulaire observée au Gabon (Septembre 2016)',
      scenario:
        'Le 1er septembre 2016, des milliers d’élèves à Mouila, Tchibanga et Lambaréné ont chaussé des lunettes spéciales pour observer le Soleil devenir un anneau de feu en plein après-midi.',
      question:
        'Quel astre s’est exactement aligné entre la Terre et le Soleil pour projeter son ombre sur le Gabon ?',
    },
    unitsTable: [
      { symbol: 'Ombre propre', quantity: 'Zone non éclairée SUR l’objet', unit: 'Partie sombre de la sphère', instrument: 'Modèle boule' },
      { symbol: 'Ombre portée', quantity: 'Ombre projetée SUR l’écran', unit: 'Tache sombre nette ou floue', instrument: 'Écran / Sol' },
      { symbol: 'Cône d’ombre', quantity: 'Espace sans lumière derrière l’objet', unit: 'Zone 3D derrière l’obstacle', instrument: 'Rayons rasants' },
    ],
    experimentOrActivity: {
      title: 'Simuler les phases et éclipses avec une lampe et une balle de ping-pong',
      materials: ['1 lampe torche (Soleil)', '1 globe ou ballon (Terre)', '1 petite balle blanche (Lune)'],
      observation:
        'Quand la petite balle (Lune) est dans le cône d’ombre du ballon (Terre), elle disparaît : c’est l’éclipse de Lune. Quand la petite balle projette sa petite tache d’ombre sur le ballon, c’est l’éclipse de Soleil.',
      conclusion:
        'Les éclipses s’expliquent directement par la propagation rectiligne de la lumière lors d’un alignement Soleil–Terre–Lune.',
    },
    revisionChecklist: [
      'Je sais distinguer ombre propre, cône d’ombre et ombre portée.',
      'Je sais pourquoi une source étendue crée une zone de PÉNOMBRE autour de l’ombre portée.',
      'Je sais schématiser l’ordre des 3 astres pour une éclipse de Soleil (S – L – T) et de Lune (S – T – L).',
    ],
    keyFormulas: [
      'Source ponctuelle ➔ Ombre portée nette (sans pénombre)',
      'Source étendue ➔ Ombre portée (aucun rayon reçu) + Pénombre (reçoit une partie des rayons)',
      'Éclipse de Soleil : Soleil — Lune — Terre (Lune entre Soleil et Terre)',
      'Éclipse de Lune : Soleil — Terre — Lune (Lune entre dans le cône d’ombre de la Terre)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Ombres & Éclipses',
      slogan: 'Alignement rectiligne et rayons rasants pour tracer les zones d’ombre',
      summaryBulletPoints: [
        'Pour tracer la zone d’ombre derrière une balle, on trace les deux rayons rasants qui partent de la source et frôlent les bords de la balle.',
        'L’ombre propre est la face cachée de l’objet lui-même ; l’ombre portée est l’ombre dessinée sur le mur ou le sol.',
        'En plein midi, si le Soleil est très haut, ton ombre portée sur le sol est très courte ; le soir, elle s’allonge.',
        'Ne jamais observer une éclipse de Soleil à l’œil nu (danger irréversible pour la rétine) : utiliser des lunettes certifiées.',
      ],
      verticalFormulas: [
        {
          name: 'Comparer les deux types d’éclipses',
          badge: '🌑',
          steps: [
            'Éclipse de SOLEIL : Soleil ➔ Lune ➔ Terre (Pleine journée, Nouvelle Lune)',
            'Éclipse de LUNE : Soleil ➔ Terre ➔ Lune (La nuit, Pleine Lune)',
          ],
          resultHighlight: 'S-L-T vs S-T-L',
          explanation: 'L’astre qui est au milieu projette son cône d’ombre sur celui qui est derrière.',
        },
      ],
      kokoTip: 'Pour retenir l’ordre : c’est toujours l’astre du MILIEU qui cache le Soleil à celui qui est à droite ! Pour l’éclipse de Soleil, la Lune nous cache le Soleil ➔ S – L – T.',
      pitfallToAvoid: 'Confondre l’ombre propre (sur la balle) et le cône d’ombre (dans l’air derrière la balle).',
    },
    sections: [
      {
        title: '1. Source ponctuelle et source étendue (Ombre & Pénombre)',
        explanation: [
          'Une source ponctuelle (très petit trou lumineux) éclaire un objet opaque et forme trois zones nettes : l’ombre propre (sur l’objet), le cône d’ombre (dans l’espace derrière l’objet) et l’ombre portée (sur l’écran).',
          'Une source étendue (lampe large, Soleil) produit autour de l’ombre totale une zone intermédiaire partiellement éclairée appelée la pénombre.',
        ],
        rules: [
          {
            name: 'Principe du tracé géométrique',
            description: 'Les rayons rasants tangents aux bords de l’obstacle délimitent exactement la frontière entre lumière et ombre.',
            example: 'Plus l’objet opaque est proche de la source lumineuse, plus son ombre portée sur le mur est GRANDE.',
          },
        ],
      },
      {
        title: '2. Éclipse de Soleil et Éclipse de Lune',
        explanation: [
          'Une éclipse de Soleil se produit lorsque la Lune passe exactement entre le Soleil et la Terre. L’observateur situé dans l’ombre portée de la Lune voit le Soleil totalement masqué ; dans la pénombre, l’éclipse est partielle.',
          'Une éclipse de Lune se produit lors d’une Pleine Lune lorsque la Lune traverse le cône d’ombre de la Terre.',
        ],
        rules: [
          {
            name: 'Alignement des astres',
            description: 'Éclipse de Soleil = S – L – T ; Éclipse de Lune = S – T – L.',
            example: 'Observateur dans la pénombre de la Lune ➔ Il voit une partie du Soleil : éclipse partielle.',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-8-1',
        'phys-ombres-eclipses',
        'Ex 1 : Les 3 zones d’ombre',
        1,
        'Comment appelle-t-on la tache sombre projetée par un élève sur la cour de récréation au soleil ?',
        [
          'L’ombre propre',
          'L’ombre portée',
          'Le cône de lumière',
          'La source primaire',
        ],
        'L’ombre portée',
        'L’ombre « portée » est celle qui est projetée sur une surface (mur, sol, écran).',
        'La tache d’ombre projetée sur le sol est l’ombre portée de l’élève.',
        [
          {
            title: 'Distinguer ombre propre et ombre portée',
            explanation: 'Sur le corps de l’élève = ombre propre ; sur le sol = ombre portée.',
            math: 'Ombre projetée au sol = Ombre portée',
            subResult: 'Ombre portée',
          },
        ],
        '🌑'
      ),
      mkQcm(
        'phys-8-2',
        'phys-ombres-eclipses',
        'Ex 2 : Ordre des astres lors d’une éclipse de Soleil',
        1,
        'Quel est l’alignement exact des astres lors d’une éclipse de Soleil ?',
        [
          'Soleil — Terre — Lune',
          'Terre — Soleil — Lune',
          'Soleil — Lune — Terre',
          'Lune — Terre — Soleil en angle droit',
        ],
        'Soleil — Lune — Terre',
        'La Lune doit se placer entre nous (la Terre) et le Soleil pour le cacher !',
        'Lors d’une éclipse de Soleil, la Lune est entre le Soleil et la Terre (S – L – T).',
        [
          {
            title: 'Vérifier quel astre fait écran',
            explanation: 'La Lune masque les rayons du Soleil qui se dirigent vers la Terre.',
            math: 'Soleil ➔ Lune (écran) ➔ Terre',
            subResult: 'Soleil — Lune — Terre',
          },
        ],
        '☀️'
      ),
      mkQcm(
        'phys-8-3',
        'phys-ombres-eclipses',
        'Ex 3 : Taille de l’ombre portée',
        2,
        'On éclaire une balle avec une lampe torche immobile et on place un écran fixe derrière. Que fait l’ombre portée si on rapproche la balle de la lampe ?',
        [
          'L’ombre devient plus grande',
          'L’ombre devient plus petite',
          'L’ombre disparaît',
          'L’ombre garde la même taille',
        ],
        'L’ombre devient plus grande',
        'Fais le test avec ta main près d’une lampe : plus elle est proche de la lampe, plus l’ombre sur le mur est géante !',
        'En rapprochant l’obstacle de la source, les rayons rasants s’écartent davantage, donc l’ombre portée grandit.',
        [
          {
            title: 'Observer l’écartement des rayons rasants',
            explanation: 'L’angle du cône d’ombre augmente quand l’objet s’approche de la source.',
            math: 'Objet proche de la source ➔ Cône plus large ➔ Ombre plus grande',
            subResult: 'Plus grande',
          },
        ],
        '🔦'
      ),
      mkQcm(
        'phys-8-4',
        'phys-ombres-eclipses',
        'Ex 4 : Observation dans la pénombre',
        3,
        'Que voit un astronaute placé dans la zone de pénombre créée par une source lumineuse étendue ?',
        [
          'Il ne voit pas du tout la source',
          'Il voit une partie de la source lumineuse',
          'Il voit toute la source entière',
          'Il voit un arc-en-ciel',
        ],
        'Il voit une partie de la source lumineuse',
        'La pénombre reçoit les rayons d’une partie seulement de la source étendue.',
        'Dans la pénombre, l’obstacle ne cache qu’une portion de la source : on voit une partie de la source.',
        [
          {
            title: 'Définir la pénombre',
            explanation: 'Ombre = aucune partie de la source visible ; Pénombre = une fraction visible.',
            math: 'Pénombre ➔ Zone partiellement éclairée ➔ Source partiellement visible',
            subResult: 'Une partie de la source',
          },
        ],
        '🌓'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 9 : RÉFLEXION, MIROIRS PLANS & RÉFRACTION
  // ==========================================
  {
    id: 'phys-reflexion-refraction',
    subject: 'physique',
    domainId: 'optique',
    order: 9,
    title: 'Réflexion sur miroir plan et réfraction de la lumière',
    badge: 'Physique Ch. 9 · 4ème',
    shortDesc: 'Rayon incident et réfléchi, normale au miroir, loi de la réflexion (i = r), image symétrique dans un miroir, et déviation air/eau (réfraction).',
    themeColor: '#06b6d4',
    themeGradient: 'from-cyan-500 via-sky-500 to-indigo-500',
    readingTimeMinutes: 13,
    visualizerType: 'optique',
    illustrationKey: 'reflexion-refraction',
    bossMeta: { name: 'MAÎTRE DU MIROIR', emoji: '🪞', xp: 160 },
    kokoSpeech:
      'Sur un miroir, la droite perpendiculaire s’appelle la NORMALE. L’angle d’arrivée i et l’angle de rebond r sont TOUJOURS égaux (i = r) ! Et quand la lumière change de milieu (air ➔ eau), elle dévie : c’est la RÉFRACTION !',
    realWorldHook: {
      title: 'Le harpon du pêcheur sur le fleuve Ogooué et le bâton cassé',
      scenario:
        'Lorsqu’on plonge un bâton droit ou une rame dans l’eau claire de la rivière, le bâton paraît « cassé » à la surface de l’eau. De même, un poisson vu depuis la berge n’est pas exactement à l’endroit où il semble être.',
      question:
        'Pourquoi les rayons lumineux venant du bâton ou du poisson changent-ils de direction en sortant de l’eau vers l’air ?',
    },
    unitsTable: [
      { symbol: 'i / r', quantity: 'Angles d’incidence et de réflexion', unit: 'Degré (°), mesurés par rapport à la normale', instrument: 'Rapporteur' },
      { symbol: 'i = r', quantity: 'Loi de Descartes (Réflexion)', unit: 'Égalité des angles', instrument: 'Miroir plan' },
      { symbol: 'Réfraction', quantity: 'Changement de milieu (air ↔ eau)', unit: 'Déviation du rayon', instrument: 'Cuve / Verre d’eau' },
    ],
    experimentOrActivity: {
      title: 'Vérifier i = r avec un laser et un miroir plan',
      materials: ['1 miroir plan posé sur un rapporteur', '1 pointeur laser (ou fente lumineuse)'],
      observation:
        'Si le rayon arrive avec un angle d’incidence i = 35° par rapport à la perpendiculaire (normale), il repart exactement à r = 35° de l’autre côté de la normale.',
      conclusion:
        'Lors d’une réflexion sur un miroir plan, l’angle de réflexion est toujours égal à l’angle d’incidence : r = i.',
    },
    revisionChecklist: [
      'Je sais tracer la normale (perpendiculaire au miroir au point d’incidence I).',
      'Je mesure toujours les angles i et r entre le rayon et la NORMALE (jamais entre le rayon et le miroir !).',
      'Je sais placer l’image symétrique A’ d’un point A par rapport à un miroir plan.',
    ],
    keyFormulas: [
      'Loi de la réflexion : angle d’incidence i = angle de réflexion r',
      'Image d’un objet dans un miroir plan : symétrique de l’objet par rapport au plan du miroir',
      'Réfraction : déviation de la lumière quand elle traverse une surface séparant deux milieux transparents (air/eau, air/verre)',
      'Attention : si le rayon arrive perpendiculairement (i = 0°), il n’est pas dévié !',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Réflexion & Réfraction',
      slogan: 'Angles mesurés depuis la normale : i = r pour réfléchir, déviation air/eau pour réfracter',
      summaryBulletPoints: [
        'Réflexion = la lumière rebondit sur un miroir ou une surface lisse et reste dans le même milieu.',
        'Réfraction = la lumière traverse la frontière (dioptre) entre deux milieux différents et change de direction.',
        'Dans un miroir plan, l’image est virtuelle (derrière le miroir), de même taille et symétrique (à la même distance d derrière le miroir).',
        'Si un rayon fait 30° avec la surface du miroir, alors l’angle d’incidence vaut i = 90° − 30° = 60° !',
      ],
      verticalFormulas: [
        {
          name: 'Calculer l’angle de réflexion r',
          badge: '🪞',
          steps: [
            'Angle du rayon avec la surface du miroir = 25°',
            'i = 90° − 25° = 65° (angle avec la normale)',
            'D’après la loi de la réflexion : r = i',
            'r = 65°',
          ],
          resultHighlight: 'i = r = 65°',
          explanation: 'La normale est à 90° du miroir, donc il faut soustraire à 90° si l’énoncé donne l’angle avec le miroir.',
        },
      ],
      kokoTip: 'Lien direct avec les Maths 4ème : l’image dans un miroir plan est exactement la SYMÉTRIE AXIALE de l’objet par rapport au miroir !',
      pitfallToAvoid: 'Mesurer l’angle entre le rayon et le miroir au lieu de le mesurer entre le rayon et la NORMALE !',
    },
    sections: [
      {
        title: '1. Réflexion sur un miroir plan et image symétrique',
        explanation: [
          'Un miroir plan renvoie presque toute la lumière qu’il reçoit dans une direction privilégiée : c’est la réflexion spéculaire.',
          'Au point d’impact I (point d’incidence), on trace la droite perpendiculaire au miroir appelée la normale. L’angle d’incidence i (entre le rayon incident et la normale) est toujours égal à l’angle de réflexion r (entre la normale et le rayon réfléchi).',
        ],
        rules: [
          {
            name: 'Propriétés de l’image dans un miroir plan',
            description: 'Si tu es à 1,5 m devant un miroir, ton image semble être à 1,5 m derrière le miroir (soit à 3 m de toi !).',
            example: 'Distance Objet–Miroir = 2 m | Distance Image–Miroir = 2 m | Distance Objet–Image = 2 + 2 = 4 m',
          },
        ],
      },
      {
        title: '2. Le phénomène de réfraction (Air ↔ Eau / Verre)',
        explanation: [
          'Lorsque la lumière passe obliquement d’un milieu transparent à un autre (par exemple de l’air dans l’eau, ou de l’air dans du verre), sa vitesse change et le rayon lumineux change brusquement de direction : c’est la réfraction.',
          'C’est la réfraction qui donne l’illusion qu’une paille plongée dans un verre d’eau est brisée, ou que le fond d’une rivière est moins profond qu’en réalité.',
        ],
        rules: [
          {
            name: 'Cas particulier à 90°',
            description: 'Si le rayon arrive perpendiculairement à la surface de l’eau (i = 0°), il continue tout droit sans dévier.',
            example: 'Air ➔ Eau sous angle i = 40° ➔ Le rayon se rapproche de la normale dans l’eau (r < 40°).',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys-9-1',
        'phys-reflexion-refraction',
        'Ex 1 : Loi de la réflexion (angle direct)',
        1,
        'Un rayon lumineux frappe un miroir plan avec un angle d’incidence i = 42° par rapport à la normale. Quel est l’angle de réflexion r (en degrés) ?',
        '42',
        'D’après la loi de la réflexion, r = i !',
        'L’angle de réflexion vaut r = 42°.',
        [
          {
            title: 'Appliquer la loi r = i',
            explanation: 'L’angle incident et l’angle réfléchi (mesurés depuis la normale) sont égaux.',
            math: 'r = i | r = 42°',
            rule: 'Loi de la réflexion : r = i',
            subResult: '42°',
          },
        ],
        '°',
        '🪞'
      ),
      mkNum(
        'phys-9-2',
        'phys-reflexion-refraction',
        'Ex 2 : Piège de l’angle avec la surface du miroir',
        3,
        'Un rayon laser arrive en faisant un angle de 20° avec la surface du miroir plan. Calcule son angle de réflexion r par rapport à la normale (en degrés).',
        '70',
        'La normale est à 90° du miroir, donc i = 90° − 20° = 70°, et r = i.',
        'L’angle d’incidence et de réflexion valent 70°.',
        [
          {
            title: 'Trouver l’angle avec la normale',
            explanation: 'La normale est perpendiculaire (90°) au plan du miroir.',
            math: 'i = 90° - 20° | i = 70°',
            subResult: 'i = 70°',
          },
          {
            title: 'Déduire l’angle de réflexion',
            explanation: 'r = i = 70°.',
            math: 'r = i = 70°',
            subResult: '70°',
          },
        ],
        '°',
        '📐'
      ),
      mkNum(
        'phys-9-3',
        'phys-reflexion-refraction',
        'Ex 3 : Distance à son image dans un miroir',
        2,
        'Amina se tient debout à 1,8 m devant un grand miroir plan vertical. À quelle distance d’elle-même se trouve son image (en m) ?',
        '3.6',
        'Son image est symétrique : à 1,8 m derrière le miroir. Distance totale = 1,8 + 1,8 !',
        'Son image est à 3,6 m devant elle.',
        [
          {
            title: 'Utiliser la symétrie du miroir plan',
            explanation: 'Objet à 1,8 m devant ➔ Image à 1,8 m derrière.',
            math: 'D = 1,8 + 1,8 | D = 3,6 m',
            rule: 'Symétrie par rapport au plan du miroir',
            subResult: '3,6 m',
          },
        ],
        'm',
        '🪞'
      ),
      mkQcm(
        'phys-9-4',
        'phys-reflexion-refraction',
        'Ex 4 : Expliquer le bâton cassé dans l’eau',
        1,
        'Quel phénomène optique explique qu’un bâton plongé obliquement dans un seau d’eau semble brisé à la surface ?',
        [
          'La réfraction de la lumière entre l’eau et l’air',
          'La combustion du bois',
          'Une éclipse de Soleil',
          'La gravitation universelle',
        ],
        'La réfraction de la lumière entre l’eau et l’air',
        'La lumière dévie quand elle passe de l’eau à l’air.',
        'C’est la réfraction : les rayons lumineux issus de la partie immergée sont déviés en sortant de l’eau.',
        [
          {
            title: 'Identifier le changement de milieu',
            explanation: 'Eau ➔ Air est un passage entre deux milieux transparents différents.',
            math: 'Changement de milieu transparent ➔ Déviation = Réfraction',
            subResult: 'Réfraction',
          },
        ],
        '🌊'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 10 : LENTILLES MINCES, VERGENCE & L'ŒIL
  // ==========================================
  {
    id: 'phys-lentilles',
    subject: 'physique',
    domainId: 'optique',
    order: 10,
    title: 'Les lentilles minces, distance focale, vergence et l’œil',
    badge: 'Physique Ch. 10 · 4ème',
    shortDesc: 'Lentilles convergentes (bords minces) vs divergentes, foyer F’, distance focale f, vergence C = 1/f (δ), formation d’image et vision.',
    themeColor: '#3b82f6',
    themeGradient: 'from-blue-500 via-sky-500 to-emerald-400',
    readingTimeMinutes: 14,
    visualizerType: 'optique',
    illustrationKey: 'lentilles',
    bossMeta: { name: 'OPTICIEN DE L’ESTUAIRE', emoji: '🔍', xp: 180 },
    kokoSpeech:
      'La lentille CONVERGENTE (loupe) a les bords MINCES et concentre les rayons du Soleil au foyer F’ ! Attention à la formule de vergence C = 1 ÷ f : f doit toujours être converti en MÈTRES !',
    realWorldHook: {
      title: 'Allumer une brindille sèche avec une loupe et corriger la myopie',
      scenario:
        'En concentrant la lumière du soleil avec une loupe à exactement 20 cm d’une feuille sèche, un point minuscule devient brûlant. Par ailleurs, l’ordonnance des lunettes d’un élève indique « −2,5 δ ».',
      question:
        'Que signifie 20 cm pour cette loupe, et pourquoi des lunettes de myope portent-elles un signe négatif ?',
    },
    unitsTable: [
      { symbol: 'f', quantity: 'Distance focale (OF’)', unit: 'Mètre (m) dans les formules (ou cm)', instrument: 'Règle graduée' },
      { symbol: 'C', quantity: 'Vergence de la lentille', unit: 'Dioptrie (symbole δ)', instrument: 'C = 1 ÷ f' },
      { symbol: 'F / F’', quantity: 'Foyers objet et image', unit: 'Points symétriques sur l’axe optique', instrument: 'Banc optique' },
    ],
    experimentOrActivity: {
      title: 'Mesurer la distance focale d’une loupe',
      materials: ['1 lentille convergente (loupe)', '1 écran blanc (carton)', '1 règle graduée', 'Objet lointain (fenêtre ou arbre dehors)'],
      observation:
        'On déplace la lentille devant l’écran jusqu’à obtenir une image nette et renversée de l’arbre lointain. On mesure la distance entre la lentille et l’écran : 25 cm.',
      conclusion:
        'Cette distance vaut f = 25 cm = 0,25 m. La vergence de la lentille est donc C = 1 ÷ 0,25 = +4 δ.',
    },
    revisionChecklist: [
      'Je sais reconnaître une lentille convergente (bords minces, flèches vers l’extérieur) d’une divergente (bords épais).',
      'Je sais tracer les 2 rayons particuliers (par le centre optique O sans déviation ; parallèle à l’axe ➔ passe par F’).',
      'Je convertis toujours f en MÈTRES (cm ÷ 100) avant de calculer C = 1 ÷ f.',
    ],
    keyFormulas: [
      'Vergence : C = 1 ÷ f   (C en dioptries δ, f OBLIGATOIREMENT en mètres m)',
      'Distance focale : f = 1 ÷ C',
      'Lentille convergente : C > 0 (corrige l’hypermétropie) | Lentille divergente : C < 0 (corrige la myopie)',
      'Dans l’œil, le cristallin joue le rôle de lentille convergente et la rétine est l’écran',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Lentilles Minces & Vision',
      slogan: 'C = 1 ÷ f avec f en mètres ! Bords minces = Convergente',
      summaryBulletPoints: [
        'Lentille convergente : centre bombé, bords minces, rapproche les rayons vers l’axe optique.',
        'Lentille divergente : centre creux, bords épais, écarte les rayons.',
        'Tout rayon passant par le centre optique O n’est JAMAIS dévié.',
        'Œil myope : trop convergent (image avant la rétine, voit flou de loin) ➔ corrigé par lentille DIVERGENTE.',
        'Œil hypermétrope : pas assez convergent (image après la rétine) ➔ corrigé par lentille CONVERGENTE.',
      ],
      verticalFormulas: [
        {
          name: 'Calculer la vergence C (en dioptries δ)',
          badge: '🔍',
          steps: [
            'Distance focale f = 20 cm = 0,20 m',
            'Formule : C = 1 ÷ f',
            'C = 1 ÷ 0,20',
            'C = +5 δ',
          ],
          resultHighlight: 'C = +5 δ',
          explanation: 'On convertit 20 cm en 0,20 m avant de diviser 1 par f.',
          tip: 'Si f est donné en cm, tu peux retenir l’astuce : C = 100 ÷ f(en cm) ! Exemple : 100 ÷ 20 = 5 δ.',
        },
        {
          name: 'Retrouver f à partir de C',
          badge: '📏',
          steps: [
            'Vergence donnée : C = +4 δ',
            'f = 1 ÷ C = 1 ÷ 4 = 0,25 m',
            'En cm : f = 0,25 × 100 = 25 cm',
          ],
          resultHighlight: 'f = 25 cm',
          explanation: 'La distance focale est l’inverse de la vergence.',
        },
      ],
      kokoTip: 'Moyen mnémotechnique pour la myopie : « Myope = voit mal de loin = porte des verres qui écartent (Divergentes, signe −) » !',
      pitfallToAvoid: 'Calculer C = 1 ÷ 20 = 0,05 δ en oubliant de convertir 20 cm en 0,20 m !',
    },
    sections: [
      {
        title: '1. Lentilles convergentes, divergentes et foyer',
        explanation: [
          'Une lentille est un bloc de verre ou de plastique transparent dont au moins une face est courbe. On distingue les lentilles convergentes (bords minces, symbole ↕) et divergentes (bords épais).',
          'Un faisceau parallèle à l’axe optique qui traverse une lentille convergente converge en un point unique sur l’axe : le foyer image F’. La distance OF’ est la distance focale f.',
        ],
        rules: [
          {
            name: 'Vergence C = 1 / f',
            description: 'Plus la distance focale f est courte, plus la lentille dévie fortement les rayons et plus sa vergence C (en dioptries δ) est grande.',
            example: 'Lentille de f = 50 cm = 0,5 m | C = 1 ÷ 0,5 | C = +2 δ',
          },
        ],
      },
      {
        title: '2. L’œil et la correction des défauts visuels',
        explanation: [
          'L’œil fonctionne comme un appareil photographique : le cristallin est une lentille convergente souple qui forme une image réelle et renversée sur la rétine (l’écran du fond de l’œil).',
          'Si l’œil est myope, il converge trop : l’image d’un objet lointain se forme AVANT la rétine. On corrige ce défaut avec une lentille divergente (vergence négative).',
        ],
        rules: [
          {
            name: 'Tableau des corrections',
            description: 'Myopie (flou de loin) ➔ Lentille divergente (C < 0). Hypermétropie / Presbytie (flou de près) ➔ Lentille convergente (C > 0).',
            example: 'Ordonnance C = -2 δ ➔ Verre divergent pour corriger une myopie.',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-10-1',
        'phys-lentilles',
        'Ex 1 : Reconnaître une lentille convergente',
        1,
        'Comment reconnaît-on au toucher une lentille convergente ?',
        [
          'Ses bords sont plus minces que son centre',
          'Ses bords sont plus épais que son centre',
          'Elle est entièrement opaque',
          'Elle possède une face parfaitement plate comme un miroir',
        ],
        'Ses bords sont plus minces que son centre',
        'Une loupe est bombée au milieu et fine sur les bords.',
        'Une lentille convergente est toujours à bords minces (plus épaisse au centre).',
        [
          {
            title: 'Critère géométrique',
            explanation: 'Bords minces = convergente ; bords épais = divergente.',
            math: 'Centre épais + Bords minces ➔ Lentille convergente',
            subResult: 'Bords minces',
          },
        ],
        '🔍'
      ),
      mkNum(
        'phys-10-2',
        'phys-lentilles',
        'Ex 2 : Calculer la vergence C = 1 ÷ f',
        2,
        'Une lentille convergente a une distance focale f = 25 cm. Calcule sa vergence C en dioptries (δ).',
        '4',
        'Convertis f = 25 cm = 0,25 m, puis C = 1 ÷ 0,25.',
        'La vergence est C = +4 δ.',
        [
          {
            title: 'Convertir f en mètres',
            explanation: '25 cm = 25 ÷ 100 = 0,25 m.',
            math: 'f = 0,25 m',
            subResult: 'f = 0,25 m',
          },
          {
            title: 'Appliquer C = 1 ÷ f',
            explanation: '1 ÷ 0,25 = 4 δ.',
            math: 'C = 1 ÷ 0,25 | C = 4 δ',
            rule: 'C = 1 / f (avec f en m)',
            subResult: '4 δ',
          },
        ],
        'δ',
        '👓'
      ),
      mkNum(
        'phys-10-3',
        'phys-lentilles',
        'Ex 3 : Retrouver la distance focale f en cm',
        3,
        'Un opticien de Libreville prescrit une lentille convergente de vergence C = +5 δ. Quelle est sa distance focale f en centimètres (cm) ?',
        '20',
        'f = 1 ÷ C = 1 ÷ 5 = 0,2 m. Multiplie par 100 pour convertir en cm !',
        'La distance focale vaut f = 20 cm.',
        [
          {
            title: 'Calculer f en mètres',
            explanation: 'f = 1 ÷ 5 = 0,2 m.',
            math: 'f = 1 ÷ 5 = 0,2 m',
            subResult: '0,2 m',
          },
          {
            title: 'Convertir en centimètres',
            explanation: '0,2 × 100 = 20 cm.',
            math: 'f = 0,2 × 100 | f = 20 cm',
            subResult: '20 cm',
          },
        ],
        'cm',
        '📏'
      ),
      mkQcm(
        'phys-10-4',
        'phys-lentilles',
        'Ex 4 : Correction de la myopie',
        2,
        'Un élève est myope : il voit flou le tableau au fond de la classe. Quel type de lentille corrige sa vue ?',
        [
          'Une lentille divergente (vergence négative)',
          'Une lentille convergente (loupe)',
          'Un miroir plan',
          'Un prisme opaque',
        ],
        'Une lentille divergente (vergence négative)',
        'L’œil myope converge trop ; il faut écarter un peu les rayons avec une lentille divergente.',
        'La myopie est corrigée par des verres divergents (C < 0) qui ramènent l’image sur la rétine.',
        [
          {
            title: 'Analyser le défaut visuel',
            explanation: 'Œil myope = trop convergent ➔ image devant la rétine.',
            math: 'Correction myopie ➔ Lentille divergente (C < 0)',
            subResult: 'Lentille divergente',
          },
        ],
        '👁️'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 11 : DISPERSION DE LA LUMIÈRE & COULEURS
  // ==========================================
  {
    id: 'phys-dispersion-couleurs',
    subject: 'physique',
    domainId: 'optique',
    order: 11,
    title: 'Dispersion de la lumière blanche et couleur des objets',
    badge: 'Physique Ch. 11 · 4ème',
    shortDesc: 'Prisme et arc-en-ciel, spectre continu de la lumière blanche, synthèse additive (RVB), filtres colorés et couleur perçue des objets.',
    themeColor: '#ec4899',
    themeGradient: 'from-rose-500 via-amber-400 to-emerald-400',
    readingTimeMinutes: 12,
    visualizerType: 'optique',
    illustrationKey: 'dispersion-couleurs',
    bossMeta: { name: 'MAÎTRE DU PRISME', emoji: '🌈', xp: 150 },
    kokoSpeech:
      'La lumière blanche du Soleil n’est pas vide : elle contient toutes les couleurs de l’arc-en-ciel ! Et sur l’écran de ton téléphone, seulement 3 couleurs suffisent (Rouge, Vert, Bleu) pour fabriquer le blanc !',
    realWorldHook: {
      title: 'L’arc-en-ciel après la tornade tropicale et les maillots des Panthères',
      scenario:
        'Après une forte pluie à Libreville, le soleil réapparaît et dessine un grand arc-en-ciel. Le soir, sous un projecteur rouge pur sur la scène, le maillot jaune et vert d’un supporter paraît soudainement presque noir pour les parties vertes.',
      question:
        'Comment la lumière blanche se sépare-t-elle en arc-en-ciel, et pourquoi la couleur d’un vêtement change-t-elle selon la lumière qui l’éclaire ?',
    },
    unitsTable: [
      { symbol: 'RVB', quantity: 'Synthèse additive (lumières)', unit: 'Rouge + Vert + Bleu = Blanc', instrument: 'Écrans / Projecteurs' },
      { symbol: 'Spectre', quantity: 'Ensemble des radiations colorées', unit: 'Du Rouge au Violet', instrument: 'Prisme en verre' },
      { symbol: 'Filtre', quantity: 'Filtre coloré (soustractive)', unit: 'Ne laisse passer que sa propre couleur', instrument: 'Gélatine colorée' },
    ],
    experimentOrActivity: {
      title: 'Décomposer la lumière blanche avec un prisme',
      materials: ['1 lampe à fente de lumière blanche', '1 prisme triangulaire en verre', '1 écran blanc'],
      observation:
        'À la sortie du prisme, le faisceau blanc s’étale en une bande colorée continue allant du rouge (le moins dévié) au violet (le plus dévié).',
      conclusion:
        'La lumière blanche est polychromatique (composée de plusieurs couleurs) ; le prisme la disperse.',
    },
    revisionChecklist: [
      'Je sais que le rouge est le moins dévié et le violet le plus dévié par un prisme.',
      'Je connais les résultats de la synthèse additive : R+V=Jaune, R+B=Magenta, V+B=Cyan, R+V+B=Blanc.',
      'Je sais déterminer de quelle couleur apparaît un objet sous une lumière colorée.',
    ],
    keyFormulas: [
      'Lumière blanche = lumière polychromatique (spectre continu du Rouge au Violet)',
      'Synthèse additive : Rouge + Vert = Jaune  |  Vert + Bleu = Cyan  |  Rouge + Bleu = Magenta',
      'Rouge + Vert + Bleu = Lumière BLANCHE',
      'Un objet bleu absorbe le rouge et le vert et ne diffuse que le bleu (s’il est éclairé en rouge, il paraît NOIR !)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Dispersion & Couleurs',
      slogan: 'Le prisme décompose le blanc ; Rouge + Vert + Bleu = Blanc sur nos écrans !',
      summaryBulletPoints: [
        'Un prisme (ou les gouttes de pluie) disperse la lumière blanche : c’est l’expérience historique de Newton.',
        'Lumière monochromatique (comme un laser rouge) : ne peut pas être décomposée par un prisme.',
        'Un objet blanc diffuse toutes les couleurs ; un objet noir les absorbe toutes (c’est pour cela qu’un t-shirt noir chauffe au soleil !).',
        'Un filtre rouge absorbe toutes les couleurs sauf le rouge.',
      ],
      verticalFormulas: [
        {
          name: 'Addition des lumières primaires (RVB)',
          badge: '🌈',
          steps: [
            'Rouge + Vert = Jaune',
            'Rouge + Bleu = Magenta',
            'Vert + Bleu = Cyan',
            'Rouge + Vert + Bleu = Blanc',
          ],
          resultHighlight: 'R + V + B = Blanc',
          explanation: 'C’est la synthèse additive utilisée par les écrans de télévision et de smartphone.',
        },
      ],
      kokoTip: 'Pourquoi une voiture noire est brûlante au soleil à Libreville ? Parce que le noir ABSORBE toute la lumière solaire et la transforme en chaleur !',
      pitfallToAvoid: 'Confondre mélange de peinture (où rouge+vert fait marron) et mélange de lumières (synthèse additive où Rouge + Vert = Jaune vif !).',
    },
    sections: [
      {
        title: '1. Dispersion de la lumière blanche par un prisme',
        explanation: [
          'Lorsqu’un faisceau de lumière blanche traverse un prisme en verre, il est réfracté deux fois et étalé en une bande continue de couleurs : rouge, orange, jaune, vert, bleu, indigo, violet. Ce phénomène s’appelle la dispersion.',
          'Dans la nature, les millions de gouttes d’eau en suspension après la pluie jouent le rôle de petits prismes et forment l’arc-en-ciel.',
        ],
        rules: [
          {
            name: 'Lumière monochromatique vs polychromatique',
            description: 'La lumière blanche est polychromatique (plusieurs couleurs). Une lumière qui ne se décompose pas (laser) est monochromatique.',
            example: 'Lumière blanche ➔ Prisme ➔ Spectre arc-en-ciel | Laser rouge ➔ Prisme ➔ Un seul trait rouge dévié',
          },
        ],
      },
      {
        title: '2. Synthèse additive et couleur des objets',
        explanation: [
          'En superposant les 3 lumières primaires Rouge, Vert et Bleu (RVB), on obtient toutes les couleurs, et les trois ensemble donnent du Blanc.',
          'Un objet coloré reçoit la lumière, en absorbe une partie et diffuse le reste vers nos yeux.',
        ],
        rules: [
          {
            name: 'Objet éclairé en lumière colorée',
            description: 'Un objet vert ne peut diffuser que du vert. S’il ne reçoit que de la lumière rouge, il absorbe le rouge et ne diffuse rien : il paraît NOIR.',
            example: 'T-shirt vert sous lumière blanche ➔ Vert | T-shirt vert sous lumière rouge pure ➔ Noir !',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-11-1',
        'phys-dispersion-couleurs',
        'Ex 1 : Rôle du prisme',
        1,
        'Quel phénomène observe-t-on lorsqu’un faisceau de lumière blanche traverse un prisme en verre ?',
        [
          'La dispersion (apparition du spectre de l’arc-en-ciel)',
          'La transformation de la lumière en ombre noire',
          'La lumière reste uniquement bleue',
          'Le prisme devient aimanté',
        ],
        'La dispersion (apparition du spectre de l’arc-en-ciel)',
        'Le prisme sépare toutes les radiations contenues dans la lumière blanche.',
        'Le prisme disperse la lumière blanche en un spectre continu du rouge au violet.',
        [
          {
            title: 'Identifier l’action du prisme',
            explanation: 'Chaque couleur est déviée d’un angle légèrement différent.',
            math: 'Lumière blanche ➔ Prisme ➔ Dispersion (Rouge ➔ Violet)',
            subResult: 'Dispersion',
          },
        ],
        '🌈'
      ),
      mkQcm(
        'phys-11-2',
        'phys-dispersion-couleurs',
        'Ex 2 : Synthèse additive RVB',
        2,
        'Sur un écran noir, on superpose deux projecteurs de lumière : un ROUGE et un VERT. Quelle couleur obtient-on ?',
        [
          'Du jaune',
          'Du marron foncé',
          'Du cyan',
          'Du noir',
        ],
        'Du jaune',
        'En synthèse additive de lumières (contrairement à la peinture), Rouge + Vert donne du Jaune !',
        'En synthèse additive, Rouge + Vert = Jaune.',
        [
          {
            title: 'Appliquer la synthèse additive',
            explanation: 'Les pixels rouges et verts allumés ensemble sur un écran donnent du jaune.',
            math: 'Lumière Rouge + Lumière Verte = Jaune',
            subResult: 'Jaune',
          },
        ],
        '📺'
      ),
      mkQcm(
        'phys-11-3',
        'phys-dispersion-couleurs',
        'Ex 3 : Maillot sous lumière colorée',
        3,
        'Un ballon bleu est placé dans une pièce éclairée uniquement par une lampe verte pure. De quelle couleur apparaît-il ?',
        [
          'Noir',
          'Bleu',
          'Vert',
          'Blanc',
        ],
        'Noir',
        'Un objet bleu absorbe le rouge et le vert ; il ne diffuse que le bleu. S’il n’y a pas de bleu dans la pièce, il ne renvoie rien !',
        'Le ballon bleu absorbe la lumière verte et ne renvoie aucune lumière : il paraît noir.',
        [
          {
            title: 'Analyser diffusion et absorption',
            explanation: 'Lumière reçue = Vert uniquement. L’objet bleu absorbe le vert.',
            math: 'Objet bleu + Éclairage vert ➔ Absorption totale ➔ Paraît NOIR',
            subResult: 'Noir',
          },
        ],
        '⚽'
      ),
      mkQcm(
        'phys-11-4',
        'phys-dispersion-couleurs',
        'Ex 4 : Couleur et chaleur au soleil',
        2,
        'À midi à Port-Gentil, pourquoi a-t-on beaucoup plus chaud avec une chemise noire qu’avec une chemise blanche ?',
        [
          'Le noir absorbe toutes les radiations lumineuses reçues, alors que le blanc les diffuse',
          'Le blanc absorbe plus de chaleur que le noir',
          'Le noir réfléchit 100% du Soleil',
          'La couleur n’a aucun lien avec l’absorption de lumière',
        ],
        'Le noir absorbe toutes les radiations lumineuses reçues, alors que le blanc les diffuse',
        'L’énergie lumineuse absorbée est transformée en énergie thermique (chaleur).',
        'Un tissu noir absorbe presque toute la lumière solaire reçue et s’échauffe vite ; le blanc la diffuse.',
        [
          {
            title: 'Relier couleur et absorption d’énergie',
            explanation: 'Noir = absorption maximale ; Blanc = diffusion maximale.',
            math: 'Noir ➔ Absorbe la lumière ➔ Échauffement',
            subResult: 'Absorption par le noir',
          },
        ],
        '☀️'
      ),
    ],
  },
];
