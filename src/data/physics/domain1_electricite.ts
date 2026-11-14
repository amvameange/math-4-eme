import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_DOMAIN1_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHAPITRE 1 : CIRCUIT ÉLECTRIQUE SIMPLE & SCHÉMATISATION
  // ==========================================
  {
    id: 'phys-circuit-simple',
    subject: 'physique',
    domainId: 'electricite',
    order: 1,
    title: 'Le circuit électrique simple et la schématisation normalisée',
    badge: 'Physique Ch. 1 · 4ème',
    shortDesc: 'Dipôles, générateurs et récepteurs, symboles normalisés, sens conventionnel du courant, conducteurs et isolants.',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-orange-500 to-yellow-400',
    readingTimeMinutes: 12,
    visualizerType: 'electricite',
    illustrationKey: 'circuit-simple',
    bossMeta: { name: 'GARDIEN DE LA PILE', emoji: '🔋', xp: 140 },
    kokoSpeech:
      'Mbolo physicien de 4ème ! Un circuit électrique est une boucle fermée qui contient toujours un GÉNÉRATEUR (comme une pile). Le courant sort par la borne (+) et revient par la borne (−) !',
    realWorldHook: {
      title: 'La lampe torche qui ne s’allume pas dans le quartier Nkembo',
      scenario:
        'Un soir de coupure à Libreville, Moussa met deux piles neuves dans sa torche, appuie sur le bouton, mais rien ne s’allume. En ouvrant le boîtier, il voit qu’une pile est mise à l’envers et qu’un bout de plastique bloque le contact métallique.',
      question:
        'Quels éléments sont indispensables pour qu’un courant électrique circule et que l’ampoule brille ?',
    },
    unitsTable: [
      { symbol: '+ / −', quantity: 'Bornes du générateur (pile)', unit: 'Polarisées', instrument: 'Pile plate ou ronde' },
      { symbol: 'I (flèche)', quantity: 'Sens conventionnel du courant', unit: 'De + vers − à l’extérieur', instrument: 'Schéma normalisé' },
      { symbol: 'K', quantity: 'Interrupteur (ouvert / fermé)', unit: 'Commande du circuit', instrument: 'Bouton ou lame' },
    ],
    experimentOrActivity: {
      title: 'Tester conducteurs et isolants avec un circuit testeur',
      materials: ['1 pile de 4,5 V', '1 lampe de 3,8 V', '3 fils de connexion', 'Objets : clou en fer, règle en plastique, mine de crayon (graphite), eau salée'],
      observation:
        'La lampe s’allume avec le clou en fer, la mine de crayon et l’eau salée. Elle reste éteinte avec la règle en plastique ou du bois sec.',
      conclusion:
        'Les métaux (cuivre, fer, aluminium), le graphite et l’eau salée sont des conducteurs ; le plastique, le verre, l’air et le bois sec sont des isolants.',
    },
    revisionChecklist: [
      'Je sais tracer un schéma à la règle avec des angles droits (rectangle propre).',
      'Je connais les symboles de la pile, de la lampe, de l’interrupteur, du moteur et de la diode.',
      'Je sais placer la flèche du sens conventionnel du courant : de la borne (+) vers la borne (−).',
    ],
    keyFormulas: [
      'Circuit fermé (interrupteur fermé) ➔ le courant circule, la lampe brille',
      'Circuit ouvert (interrupteur ouvert ou fil coupé) ➔ aucun courant ne circule',
      'Sens conventionnel : à l’extérieur du générateur, le courant va de (+) vers (−)',
      'Une DEL (diode électroluminescente) ne laisse passer le courant que dans le sens passant',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Circuit Simple & Schématisation',
      slogan: 'Boucle fermée, symboles normalisés à la règle et sens du courant de (+) vers (−)',
      summaryBulletPoints: [
        'Un dipôle possède deux bornes de connexion (ex : pile, lampe, interrupteur, moteur).',
        'Un générateur fournit l’énergie électrique (pile, batterie, prise SEEG) ; un récepteur la reçoit (lampe, moteur, résistance).',
        'On dessine toujours un schéma électrique au crayon et à la règle, en formant un rectangle.',
        'La diode ne laisse passer le courant que dans le sens de sa flèche (sens passant).',
      ],
      verticalFormulas: [
        {
          name: 'Condition de fonctionnement d’un circuit',
          badge: '💡',
          ruleTitle: 'Double condition obligatoire',
          steps: [
            '1. Présence d’un générateur (pile / batterie)',
            '2. Boucle fermée et continue de conducteurs',
            '➔ Résultat : Le courant circule de (+) vers (−)',
          ],
          resultHighlight: 'Lampe allumée !',
          explanation: 'S’il manque le générateur ou si la boucle est ouverte, le courant est nul.',
          tip: 'Un fil débranché ou un isolant dans la boucle équivaut à un interrupteur ouvert.',
        },
        {
          name: 'Règle de la Diode / DEL',
          badge: '🔺',
          ruleTitle: 'Dipôle polarisé',
          steps: [
            'Flèche de la diode dans le sens (+ ➔ −) : PASSANTE',
            'Flèche de la diode dans le sens opposé : BLOQUÉE',
          ],
          resultHighlight: 'Sens unique',
          explanation: 'Une diode agit comme un sens unique sur une route.',
        },
      ],
      kokoTip: 'Pour retenir le sens du courant : le signe PLUS (+) donne, le signe MOINS (−) reçoit !',
      pitfallToAvoid: 'Tracer les fils en courbes à main levée ou oublier le grand trait (+) et le petit trait épais (−) de la pile !',
    },
    sections: [
      {
        title: '1. Générateurs, récepteurs et schématisation normalisée',
        explanation: [
          'Un circuit électrique simple comporte au moins un générateur (pile, batterie), un ou plusieurs récepteurs (lampe, moteur, DEL) et des fils de connexion formant une boucle fermée.',
          'Pour que tout le monde comprenne un montage, les physiciens utilisent des symboles normalisés tracés à la règle sur un rectangle.',
        ],
        rules: [
          {
            name: 'Symboles essentiels du programme 4ème',
            description: 'Pile : grand trait fin (+) et petit trait épais (−). Lampe : cercle avec une croix (⊗). Moteur : cercle avec la lettre M. Interrupteur : trait basculant ouvert ou fermé.',
            example: 'Pile (+) ➔ Fil ➔ Interrupteur fermé ➔ Lampe (⊗) | ➔ Fil de retour ➔ Borne (−) de la pile',
            tip: 'La lampe et le fil de connexion ne sont pas polarisés : on peut inverser leurs bornes.',
          },
        ],
        commonMistakes: [
          'Inverser les deux traits de la pile : le grand trait fin est toujours le (+), le petit trait épais est toujours le (−).',
        ],
      },
      {
        title: '2. Sens du courant, conducteurs et isolants',
        explanation: [
          'Par convention internationale, à l’extérieur du générateur, le courant électrique circule toujours de la borne positive (+) vers la borne négative (−).',
          'Un matériau conducteur laisse passer le courant (métaux, corps humain, eau du robinet) ; un isolant le bloque (plastique, caoutchouc, air sec, verre).',
        ],
        rules: [
          {
            name: 'Rôle de la diode (et DEL)',
            description: 'Une diode est un composant polarisé : le courant ne la traverse que si la pointe du triangle pointe vers la borne (−).',
            example: 'Borne (+) ➔ [▷|] ➔ Lampe ➔ Borne (−) | Le triangle pointe vers (−) ➔ La lampe brille !',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-1-1',
        'phys-circuit-simple',
        'Ex 1 : Sens conventionnel du courant',
        1,
        'À l’extérieur d’une pile, dans quel sens circule le courant électrique (sens conventionnel) ?',
        [
          'De la borne (+) vers la borne (−)',
          'De la borne (−) vers la borne (+)',
          'Dans les deux sens en même temps',
          'Uniquement à l’intérieur de la lampe',
        ],
        'De la borne (+) vers la borne (−)',
        'Le signe (+) donne le courant, le signe (−) le reçoit.',
        'À l’extérieur du générateur, le courant va toujours de (+) vers (−).',
        [
          {
            title: 'Appliquer la convention internationale',
            explanation: 'Le courant électrique est représenté par une flèche qui sort du pôle positif (+) et retourne au pôle négatif (−).',
            math: 'Borne (+) ➔ Récepteurs ➔ Borne (−)',
            rule: 'Sens conventionnel du courant continu',
            subResult: '(+) ➔ (−)',
          },
        ],
        '⚡'
      ),
      mkQcm(
        'phys-1-2',
        'phys-circuit-simple',
        'Ex 2 : Reconnaître les symboles de la pile',
        1,
        'Sur le schéma normalisé d’une pile, comment distingue-t-on la borne positive (+) de la borne négative (−) ?',
        [
          'Le (+) est un grand trait fin et le (−) est un petit trait épais',
          'Le (+) est un petit trait épais et le (−) est un grand trait fin',
          'Les deux traits ont exactement la même taille',
          'La pile est représentée par un cercle avec un P',
        ],
        'Le (+) est un grand trait fin et le (−) est un petit trait épais',
        'Grand = Plus (+), Petit et épais = Moins (−).',
        'Le grand trait fin représente la borne (+) et le petit trait épais représente la borne (−).',
        [
          {
            title: 'Lire le symbole normalisé',
            explanation: 'On associe le grand trait fin au (+) et le trait court et épais au (−).',
            math: 'Grand trait fin = (+) | Petit trait épais = (−)',
            subResult: 'Grand (+) / Petit (−)',
          },
        ],
        '🔋'
      ),
      mkQcm(
        'phys-1-3',
        'phys-circuit-simple',
        'Ex 3 : Conducteurs et isolants',
        2,
        'Parmi les objets suivants posés sur la paillasse du laboratoire à Port-Gentil, lequel laisse passer le courant électrique ?',
        [
          'Une règle en plastique',
          'Une gomme blanche',
          'Une pièce de monnaie en métal (100 F CFA)',
          'Une baguette de verre sec',
        ],
        'Une pièce de monnaie en métal (100 F CFA)',
        'Tous les métaux (cuivre, fer, nickel, aluminium) sont d’excellents conducteurs.',
        'La pièce de monnaie métallique est conductrice ; le plastique, le caoutchouc et le verre sont isolants.',
        [
          {
            title: 'Identifier la nature des matériaux',
            explanation: 'Plastique, gomme (caoutchouc) et verre sont des isolants électriques. Les alliages métalliques des pièces de monnaie conduisent le courant.',
            math: 'Métal = Conducteur | Plastique / Verre / Gomme = Isolant',
            subResult: 'Pièce métallique',
          },
        ],
        '🪙'
      ),
      mkQcm(
        'phys-1-4',
        'phys-circuit-simple',
        'Ex 4 : Fonctionnement d’une DEL',
        2,
        'Dans un circuit fermé contenant une pile, une lampe et une DEL, la lampe ne s’allume pas bien que tout soit neuf. Quelle est la cause la plus probable ?',
        [
          'La lampe est branchée à l’envers',
          'La DEL est branchée en sens bloquant',
          'Les fils de cuivre sont trop courts',
          'L’interrupteur fermé bloque le courant',
        ],
        'La DEL est branchée en sens bloquant',
        'Une lampe n’a pas de sens de branchement, contrairement à la DEL qui est polarisée !',
        'Une DEL ne laisse passer le courant que dans un seul sens (sens passant). Si elle est inversée, aucun courant ne circule.',
        [
          {
            title: 'Vérifier les dipôles polarisés',
            explanation: 'La lampe fonctionne dans les deux sens, mais la DEL bloque le courant si elle est branchée à l’envers.',
            math: 'DEL inversée ➔ Courant bloqué (I = 0) | Solution : retourner la DEL',
            subResult: 'DEL en sens bloquant',
          },
        ],
        '💡'
      ),
      mkQcm(
        'phys-1-5',
        'phys-circuit-simple',
        'Ex 5 : Sécurité électrique et corps humain',
        3,
        'Pourquoi est-il très dangereux de toucher un fil électrique dénudé avec les mains mouillées ?',
        [
          'L’eau pure ou salée rend la peau beaucoup plus conductrice',
          'Le plastique du sol attire le courant',
          'Le courant s’arrête brusquement dans les mains',
          'La pile change de borne automatiquement',
        ],
        'L’eau pure ou salée rend la peau beaucoup plus conductrice',
        'L’eau contenant des sels minéraux (comme la sueur ou l’eau du robinet) est conductrice.',
        'Le corps humain et l’eau minéralisée sont conducteurs : le courant peut traverser le corps (électrisation ou électrocution).',
        [
          {
            title: 'Analyser la conductivité',
            explanation: 'La peau humide diminue fortement la résistance électrique et laisse passer un courant dangereux.',
            math: 'Eau minéralisée + Corps humain = Conducteur ➔ Danger d’électrocution',
            subResult: 'Peau mouillée = Conductrice',
          },
        ],
        '⚠️'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 2 : CIRCUITS EN SÉRIE ET EN DÉRIVATION
  // ==========================================
  {
    id: 'phys-circuits-serie-derivation',
    subject: 'physique',
    domainId: 'electricite',
    order: 2,
    title: 'Circuits en série, en dérivation et court-circuit',
    badge: 'Physique Ch. 2 · 4ème',
    shortDesc: 'Boucle unique vs plusieurs boucles (nœuds et branches), indépendance des lampes à la maison (SEEG), dangers du court-circuit.',
    themeColor: '#0ea5e9',
    themeGradient: 'from-sky-500 via-cyan-500 to-blue-500',
    readingTimeMinutes: 13,
    visualizerType: 'electricite',
    illustrationKey: 'circuits-serie-derivation',
    bossMeta: { name: 'MAÎTRE DES MAILLES', emoji: '🔀', xp: 150 },
    kokoSpeech:
      'Dans ta maison au Gabon, les lampes du salon et de la chambre sont branchées en DÉRIVATION (parallèle) : si une ampoule grille, les autres continuent de briller !',
    realWorldHook: {
      title: 'Les guirlandes du 17 Août vs l’éclairage d’une maison à Franceville',
      scenario:
        'Sur une vieille guirlande, lorsqu’une seule petite ampoule grille, toute la guirlande s’éteint d’un coup. Pourtant, dans le salon familial, si l’ampoule du couloir grille, la télévision et la lampe du salon restent allumées.',
      question:
        'Quelle différence de montage explique que les appareils d’une maison fonctionnent indépendamment les uns des autres ?',
    },
    unitsTable: [
      { symbol: 'Série', quantity: '1 seule boucle de courant', unit: 'Dipôles à la suite', instrument: '1 maille unique' },
      { symbol: 'Dérivation', quantity: 'Au moins 2 boucles', unit: 'Branches reliées aux nœuds', instrument: 'Installation SEEG' },
      { symbol: 'Nœud', quantity: 'Point de jonction ≥ 3 fils', unit: 'Séparation du courant', instrument: 'Domino / borne' },
    ],
    experimentOrActivity: {
      title: 'Dévisser une lampe en série puis en dérivation',
      materials: ['1 pile 4,5 V', '2 lampes L1 et L2 identiques', '6 fils de connexion'],
      observation:
        'En série : quand on dévisse L1, L2 s’éteint immédiatement. En dérivation : quand on dévisse L1, L2 continue de briller normalement (et même un peu plus fort avec une pile).',
      conclusion:
        'En série les dipôles dépendent les uns des autres ; en dérivation chaque branche fonctionne de façon indépendante.',
    },
    revisionChecklist: [
      'Je sais compter le nombre de boucles (mailles) sur un schéma.',
      'Je sais repérer les nœuds, la branche principale et les branches dérivées.',
      'Je sais expliquer pourquoi un court-circuit du générateur peut provoquer un incendie et comment le fusible/disjoncteur protège le circuit.',
    ],
    keyFormulas: [
      'Circuit en série = 1 seule boucle : si un dipôle est coupé ou dévissé, tout s’éteint',
      'Circuit en dérivation = au moins 2 boucles : chaque branche est indépendante',
      'Court-circuit d’un dipôle : on relie ses deux bornes par un fil ➔ il s’éteint',
      'Court-circuit du générateur : le courant devient très fort ➔ surchauffe et incendie !',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Série, Dérivation & Sécurité',
      slogan: 'Repérer les nœuds, protéger le générateur et comprendre le réseau domestique',
      summaryBulletPoints: [
        'Dans un circuit en série, plus on ajoute de lampes, moins elles brillent.',
        'Dans un circuit en dérivation, toutes les branches reçoivent la même tension : les lampes brillent normalement.',
        'À la maison (réseau SEEG 220 V), toutes les prises et lampes sont en dérivation.',
        'Un fusible ou un disjoncteur coupe automatiquement le circuit si l’intensité devient dangereuse.',
      ],
      verticalFormulas: [
        {
          name: 'Identifier le type de circuit',
          badge: '🔀',
          steps: [
            'Compter les nœuds (points à 3 fils ou plus) :',
            '0 nœud (1 boucle) ➔ Circuit en SÉRIE',
            '≥ 2 nœuds (≥ 2 boucles) ➔ Circuit en DÉRIVATION',
          ],
          resultHighlight: '0 nœud = Série',
          explanation: 'Suis le trajet du courant avec ton doigt : s’il a le choix entre deux chemins, c’est une dérivation.',
        },
        {
          name: 'Effet d’un court-circuit',
          badge: '🔥',
          steps: [
            'Fil relié aux bornes d’une lampe L1 :',
            'Le courant choisit le fil (chemin sans obstacle)',
            'L1 s’éteint, le reste du circuit reçoit plus de courant',
            'Si le générateur est court-circuité ➔ DANGER D’INCENDIE',
          ],
          resultHighlight: 'Protéger par fusible',
          explanation: 'Le courant prend toujours le chemin le plus facile offert par le fil de court-circuit.',
        },
      ],
      kokoTip: 'Pour savoir si un montage est en dérivation, cherche les carrefours à 3 fils : ce sont les NŒUDS !',
      pitfallToAvoid: 'Croire que le courant s’arrête partout quand une seule lampe est en court-circuit dans un circuit en série : les autres lampes brillent au contraire PLUS fort !',
    },
    sections: [
      {
        title: '1. Circuit en série vs Circuit en dérivation',
        explanation: [
          'Un circuit en série ne possède qu’une seule boucle : tous les dipôles sont branchés les uns à la suite des autres. L’ordre des dipôles n’a pas d’importance.',
          'Un circuit en dérivation comporte une branche principale (celle du générateur) et des branches dérivées reliées entre elles par des nœuds.',
        ],
        rules: [
          {
            name: 'Règle d’indépendance',
            description: 'En dérivation, chaque branche dérivée peut être allumée ou éteinte séparément grâce à son propre interrupteur.',
            example: 'Salon (L1) // Chambre (L2) | Si L1 grille, le courant passe toujours dans la boucle de L2 ➔ L2 reste allumée !',
          },
        ],
      },
      {
        title: '2. Le court-circuit et la protection électrique',
        explanation: [
          'Il y a court-circuit lorsqu’on relie directement les deux bornes d’un dipôle par un conducteur de très faible résistance (un fil de cuivre).',
          'Si le générateur lui-même est court-circuité, une intensité énorme chauffe les fils jusqu’à provoquer un incendie.',
        ],
        rules: [
          {
            name: 'Organes de protection (SEEG)',
            description: 'Le fusible fond lorsque le courant dépasse sa limite ; le disjoncteur ouvre automatiquement le circuit et peut être réarmé.',
            example: 'Court-circuit sur prise ➔ Intensité brutale ➔ Le disjoncteur déclenche immédiatement et coupe le courant.',
          },
        ],
        commonMistakes: [
          'Oublier qu’en dérivation, court-circuiter une seule lampe court-circuite en fait le générateur lui-même !',
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-2-1',
        'phys-circuits-serie-derivation',
        'Ex 1 : Panne dans un circuit en série',
        1,
        'Deux lampes L1 et L2 sont branchées en série sur une pile. On dévisse la lampe L1. Que fait la lampe L2 ?',
        [
          'Elle s’éteint immédiatement',
          'Elle brille deux fois plus fort',
          'Elle reste allumée normalement',
          'Elle clignote puis reste allumée',
        ],
        'Elle s’éteint immédiatement',
        'En série, il n’y a qu’une seule boucle : si on enlève L1, le circuit est ouvert.',
        'La boucle unique étant ouverte à l’emplacement de L1, le courant ne circule plus et L2 s’éteint.',
        [
          {
            title: 'Analyser la boucle unique',
            explanation: 'Un circuit en série possède un seul chemin pour le courant.',
            math: 'L1 dévissée ➔ Boucle ouverte ➔ I = 0 ➔ L2 éteinte',
            subResult: 'L2 s’éteint',
          },
        ],
        '💡'
      ),
      mkQcm(
        'phys-2-2',
        'phys-circuits-serie-derivation',
        'Ex 2 : Installation électrique domestique (SEEG)',
        1,
        'Dans un appartement à Libreville, comment sont branchés le réfrigérateur, la télévision et les lampes ?',
        [
          'En série sur une seule boucle',
          'En dérivation (en parallèle)',
          'En court-circuit permanent',
          'Sans générateur',
        ],
        'En dérivation (en parallèle)',
        'Tu peux éteindre la lampe de la chambre sans couper le réfrigérateur !',
        'Les appareils domestiques sont tous en dérivation pour fonctionner indépendamment sous la même tension (220 V).',
        [
          {
            title: 'Tester l’indépendance',
            explanation: 'Éteindre un appareil ne coupe pas les autres : c’est la propriété du montage en dérivation.',
            math: 'Fonctionnement indépendant ➔ Branchement en dérivation',
            subResult: 'En dérivation',
          },
        ],
        '🏠'
      ),
      mkQcm(
        'phys-2-3',
        'phys-circuits-serie-derivation',
        'Ex 3 : Définition d’un nœud',
        2,
        'Sur un schéma électrique, comment reconnaît-on un nœud ?',
        [
          'C’est le filament à l’intérieur de l’ampoule',
          'C’est un point de connexion où arrivent au moins 3 fils',
          'C’est un fil coupé en deux',
          'C’est uniquement la borne négative de la pile',
        ],
        'C’est un point de connexion où arrivent au moins 3 fils',
        'Un carrefour routier sépare la route en plusieurs directions ; un nœud sépare le fil en plusieurs branches.',
        'Un nœud est une jonction électrique reliant au moins trois conducteurs (branches).',
        [
          {
            title: 'Compter les fils au carrefour',
            explanation: '2 fils qui se suivent forment un simple coin de fil, pas un nœud. Il faut 3 fils ou plus.',
            math: 'Nombre de fils au point ≥ 3 ➔ Nœud électrique',
            subResult: '≥ 3 fils au point',
          },
        ],
        '🔀'
      ),
      mkQcm(
        'phys-2-4',
        'phys-circuits-serie-derivation',
        'Ex 4 : Court-circuit d’une lampe en série',
        3,
        'Deux lampes L1 et L2 sont en série. On branche un fil de cuivre directement aux deux bornes de L1. Que se passe-t-il ?',
        [
          'L1 s’éteint et L2 brille plus fort',
          'L1 brille plus fort et L2 s’éteint',
          'Les deux lampes s’éteignent',
          'Rien ne change',
        ],
        'L1 s’éteint et L2 brille plus fort',
        'Le courant contourne L1 par le fil de cuivre (court-circuit), donc toute l’énergie de la pile va dans L2 !',
        'L1 est court-circuitée donc elle s’éteint ; le circuit reste fermé via le fil et L2 reçoit plus de courant.',
        [
          {
            title: 'Suivre le trajet du courant',
            explanation: 'Le courant passe par le fil sans résistance plutôt que par L1, puis traverse L2.',
            math: 'Fil aux bornes de L1 ➔ L1 court-circuitée (éteinte) | Tout le courant passe dans L2 ➔ L2 brille plus fort',
            subResult: 'L1 éteinte, L2 plus brillante',
          },
        ],
        '⚡'
      ),
      mkQcm(
        'phys-2-5',
        'phys-circuits-serie-derivation',
        'Ex 5 : Rôle du disjoncteur et du fusible',
        2,
        'Quel appareil coupe automatiquement le courant dans un tableau électrique en cas de court-circuit ?',
        [
          'Le voltmètre',
          'Le disjoncteur (ou le fusible)',
          'La diode électroluminescente',
          'Le rhéostat',
        ],
        'Le disjoncteur (ou le fusible)',
        'Cet appareil protège les câbles contre l’échauffement et l’incendie.',
        'Le fusible (à usage unique) et le disjoncteur (réarmable) ouvrent le circuit dès que l’intensité dépasse le seuil de sécurité.',
        [
          {
            title: 'Sécurité des installations',
            explanation: 'Lors d’un court-circuit, l’intensité grimpe brutalement ; le disjoncteur déclenche instantanément.',
            math: 'Court-circuit ➔ I très grande ➔ Ouverture par disjoncteur/fusible',
            subResult: 'Disjoncteur / Fusible',
          },
        ],
        '🛡️'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 3 : INTENSITÉ DU COURANT ÉLECTRIQUE (I)
  // ==========================================
  {
    id: 'phys-intensite',
    subject: 'physique',
    domainId: 'electricite',
    order: 3,
    title: 'L’intensité du courant électrique (I) et lois de l’intensité',
    badge: 'Physique Ch. 3 · 4ème',
    shortDesc: 'Unité Ampère (A) et mA, branchement en série de l’ampèremètre, loi d’unicité en série et loi des nœuds en dérivation.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-teal-500 to-cyan-400',
    readingTimeMinutes: 14,
    visualizerType: 'electricite',
    illustrationKey: 'intensite',
    bossMeta: { name: 'SEIGNEUR AMPÈRE', emoji: '🧭', xp: 160 },
    kokoSpeech:
      'Retiens le mot magique : l’Ampèremètre se branche toujours EN SÉRIE (dans la boucle) ! En série, l’intensité est PARTOUT la même ; en dérivation, elle se PARTAGE aux nœuds (I = I1 + I2) !',
    realWorldHook: {
      title: 'La multiprise surchargée',
      scenario:
        'Sur une seule multiprise branchée à une prise murale de 16 A, on branche un fer à repasser (8 A), un ventilateur (2 A) et un four électrique (9 A). Soudain, le disjoncteur coupe le courant.',
      question:
        'Comment s’additionnent les intensités des appareils branchés en dérivation sur la même prise principale ?',
    },
    unitsTable: [
      { symbol: 'I', quantity: 'Intensité du courant électrique', unit: 'Ampère (A) ou milliampère (mA)', instrument: 'Ampèremètre (en série)' },
      { symbol: '1 A', quantity: 'Conversion de base', unit: '1 A = 1 000 mA', instrument: 'Multimètre calibre A / mA' },
      { symbol: 'COM / A', quantity: 'Bornes de l’ampèremètre', unit: 'Courant entre par A (ou mA), sort par COM', instrument: 'Signe + si bien branché' },
    ],
    experimentOrActivity: {
      title: 'Vérifier la loi des nœuds avec trois ampèremètres',
      materials: ['1 générateur 6 V', '2 lampes L1 et L2 en dérivation', '3 ampèremètres (branche principale, branche 1, branche 2)'],
      observation:
        'Dans la branche de L1 on lit I1 = 0,25 A ; dans celle de L2 on lit I2 = 0,15 A ; et dans la branche principale du générateur on lit I = 0,40 A.',
      conclusion:
        'On vérifie exactement que I = I1 + I2 (0,40 A = 0,25 A + 0,15 A). C’est la loi d’additivité des intensités (loi des nœuds).',
    },
    revisionChecklist: [
      'Je sais convertir des A en mA (× 1 000) et des mA en A (÷ 1 000).',
      'Je sais insérer un ampèremètre en série (borne A côté du +, borne COM côté du −).',
      'Je maîtrise les deux lois : unicité en série (I1 = I2) et additivité aux nœuds en dérivation (I = I1 + I2).',
    ],
    keyFormulas: [
      'Conversion : 1 A = 1 000 mA   |   1 mA = 0,001 A',
      'Loi d’unicité (circuit en SÉRIE) : I = I1 = I2 = I3',
      'Loi des nœuds (circuit en DÉRIVATION) : I_principale = I1 + I2',
      'Branchement ampèremètre : toujours EN SÉRIE, entrée par A (ou mA), sortie par COM',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Intensité du Courant (I)',
      slogan: 'Ampèremètre en série, même débit partout en série, addition aux nœuds en dérivation',
      summaryBulletPoints: [
        'L’intensité I représente le débit d’électricité qui traverse une section du fil chaque seconde.',
        'On choisit toujours le plus grand calibre en premier (ex : 10 A), puis on descend au calibre adapté sans le dépasser.',
        'Ne JAMAIS brancher un ampèremètre directement aux bornes d’une pile (risque de court-circuit !).',
        'En série : le courant ne s’use pas ! L’intensité avant et après une lampe est identique.',
      ],
      verticalFormulas: [
        {
          name: 'Loi d’unicité (Série)',
          badge: '🔗',
          steps: [
            'Circuit en série avec L1 et L2 :',
            'I_générateur = I1 = I2',
            'Si I1 = 0,35 A ➔ alors I2 = 0,35 A',
          ],
          resultHighlight: 'I partout identique',
          explanation: 'Dans une seule boucle, la même quantité de courant traverse tous les composants.',
        },
        {
          name: 'Loi des nœuds (Dérivation)',
          badge: '🔀',
          steps: [
            'Données : I_total = 0,85 A et I1 = 0,30 A',
            'Loi des nœuds : I_total = I1 + I2',
            'I2 = I_total − I1',
            'I2 = 0,85 − 0,30 = 0,55 A',
          ],
          resultHighlight: 'I2 = 0,55 A (550 mA)',
          explanation: 'La somme des intensités qui arrivent à un nœud est égale à la somme des intensités qui en repartent.',
          tip: 'Vérifie toujours que les intensités sont dans la même unité (tout en A ou tout en mA) avant d’additionner !',
        },
      ],
      kokoTip: 'Imagine l’eau dans un fleuve comme l’Ogooué : si le fleuve se sépare en deux bras (dérivation), le débit total vaut la somme des débits des deux bras !',
      pitfallToAvoid: 'Additionner des ampères et des milliampères sans convertir (ex : 0,5 A + 200 mA = 0,5 A + 0,2 A = 0,7 A, et NON 200,5 !).',
    },
    sections: [
      {
        title: '1. Mesure de l’intensité avec un ampèremètre',
        explanation: [
          'L’intensité du courant électrique, notée I, s’exprime en ampère (symbole A) ou en milliampère (mA) avec 1 A = 1 000 mA.',
          'Elle se mesure à l’aide d’un ampèremètre (symbole Ⓐ) branché obligatoirement en série dans la branche étudiée : le courant doit entrer par la borne A (ou mA) et sortir par la borne COM.',
        ],
        rules: [
          {
            name: 'Choix du calibre',
            description: 'Toujours commencer par le plus grand calibre (10 A) puis descendre vers le calibre juste supérieur à la valeur lue pour une meilleure précision.',
            example: 'Courant mesuré = 180 mA = 0,18 A | Calibre 20 mA trop petit (affiche 1.) | Calibre 200 mA parfait (affiche 180 mA) !',
          },
        ],
      },
      {
        title: '2. Lois de l’intensité : Série vs Dérivation',
        explanation: [
          'Dans un circuit en série, l’intensité a la même valeur en tout point du circuit (Loi d’unicité : I1 = I2 = I3). Le courant n’est ni consommé, ni perdu par les lampes.',
          'Dans un circuit en dérivation, l’intensité dans la branche principale est égale à la somme des intensités dans les branches dérivées (Loi des nœuds : I = I1 + I2).',
        ],
        rules: [
          {
            name: 'Application numérique en colonne',
            description: 'Conversions puis application de I = I1 + I2.',
            example: 'I = 1,2 A et I1 = 450 mA | I1 = 450 ÷ 1 000 = 0,45 A | I2 = I - I1 = 1,2 - 0,45 | I2 = 0,75 A',
          },
        ],
        commonMistakes: [
          'Penser que l’intensité diminue après avoir traversé une lampe en série.',
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys-3-1',
        'phys-intensite',
        'Ex 1 : Convertir des milliampères en ampères',
        1,
        'Un ampèremètre affiche une intensité de I = 450 mA dans une lampe. Exprime cette intensité en ampères (A).',
        '0.45',
        '1 A = 1 000 mA, donc pour passer des mA aux A, on divise par 1 000 !',
        'L’intensité vaut I = 0,45 A.',
        [
          {
            title: 'Appliquer la conversion 1 A = 1 000 mA',
            explanation: 'Pour passer de mA à A, on divise par 1 000.',
            math: 'I = 450 ÷ 1 000 | I = 0,45 A',
            rule: '1 mA = 0,001 A',
            subResult: '0,45 A',
          },
        ],
        'A',
        '🔄'
      ),
      mkNum(
        'phys-3-2',
        'phys-intensite',
        'Ex 2 : Loi d’unicité en série',
        1,
        'Dans un circuit en série composé d’une pile, d’un moteur et d’une lampe, l’intensité qui entre dans le moteur vaut I1 = 0,28 A. Quelle est l’intensité I2 qui sort de la lampe (en A) ?',
        '0.28',
        'Dans un circuit en série, l’intensité du courant est la même partout.',
        'Par la loi d’unicité, I2 = 0,28 A.',
        [
          {
            title: 'Citer la loi d’unicité',
            explanation: 'Le circuit est en série (1 seule boucle), donc l’intensité ne varie pas.',
            math: 'I2 = I1 = 0,28 A',
            rule: 'Loi d’unicité des intensités en série',
            subResult: '0,28 A',
          },
        ],
        'A',
        '🔗'
      ),
      mkNum(
        'phys-3-3',
        'phys-intensite',
        'Ex 3 : Loi des nœuds en dérivation',
        2,
        'Deux lampes L1 et L2 sont branchées en dérivation. L’intensité dans L1 vaut I1 = 0,35 A et celle dans L2 vaut I2 = 0,55 A. Calcule l’intensité I délivrée par le générateur (en A).',
        '0.9',
        'Applique la loi des nœuds : I = I1 + I2.',
        'L’intensité principale est I = 0,9 A.',
        [
          {
            title: 'Écrire la loi des nœuds',
            explanation: 'L’intensité de la branche principale est la somme des intensités des branches dérivées.',
            math: 'I = I1 + I2 | I = 0,35 + 0,55 | I = 0,90 A',
            rule: 'Loi d’additivité des intensités (loi des nœuds)',
            subResult: '0,9 A',
          },
        ],
        'A',
        '🔀'
      ),
      mkNum(
        'phys-3-4',
        'phys-intensite',
        'Ex 4 : Trouver une intensité manquante avec conversion',
        3,
        'Dans un montage en dérivation, le générateur fournit I = 1,1 A. La première branche consomme I1 = 350 mA. Quelle est l’intensité I2 dans la deuxième branche (en A) ?',
        '0.75',
        'Convertis d’abord 350 mA en A (0,35 A), puis calcule I2 = 1,1 − 0,35.',
        'L’intensité dans la deuxième branche vaut I2 = 0,75 A.',
        [
          {
            title: 'Convertir I1 en ampères',
            explanation: 'Il faut la même unité partout : 350 mA = 0,35 A.',
            math: 'I1 = 350 ÷ 1 000 = 0,35 A',
            subResult: 'I1 = 0,35 A',
          },
          {
            title: 'Appliquer la loi des nœuds',
            explanation: 'I = I1 + I2 donc I2 = I − I1.',
            math: 'I2 = 1,10 - 0,35 | I2 = 0,75 A',
            rule: 'Loi des nœuds : I2 = I − I1',
            subResult: '0,75 A',
          },
        ],
        'A',
        '🧮'
      ),
      mkNum(
        'phys-3-5',
        'phys-intensite',
        'Ex 5 : Multiprise et disjoncteur (Situation Gabon)',
        4,
        'Sur une multiprise protégée par un disjoncteur de 16 A, on branche en dérivation : un fer à repasser (8 A), un ventilateur (1,5 A) et une plaque chauffante (7 A). Quelle est l’intensité totale demandée (en A) ?',
        '16.5',
        'Additionne les trois intensités : 8 + 1,5 + 7. (Et note que 16,5 A > 16 A donc ça disjoncte !)',
        'L’intensité totale demandée est de 16,5 A (ce qui déclenche la protection de 16 A !).',
        [
          {
            title: 'Additionner les intensités en dérivation',
            explanation: 'Tous les appareils sur une multiprise sont en dérivation.',
            math: 'I_tot = 8 + 1,5 + 7 | I_tot = 16,5 A',
            rule: 'Loi des nœuds sur une multiprise',
            subResult: '16,5 A (> 16 A ➔ Disjoncte)',
          },
        ],
        'A',
        '⚡'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 4 : TENSION ÉLECTRIQUE (U)
  // ==========================================
  {
    id: 'phys-tension',
    subject: 'physique',
    domainId: 'electricite',
    order: 4,
    title: 'La tension électrique (U) et lois des tensions',
    badge: 'Physique Ch. 4 · 4ème',
    shortDesc: 'Unité Volt (V), branchement en dérivation du voltmètre, additivité des tensions en série (mailles), unicité en dérivation.',
    themeColor: '#8b5cf6',
    themeGradient: 'from-violet-500 via-purple-500 to-indigo-500',
    readingTimeMinutes: 14,
    visualizerType: 'electricite',
    illustrationKey: 'tension',
    bossMeta: { name: 'TITAN DU VOLT', emoji: '🔋', xp: 160 },
    kokoSpeech:
      'Attention, c’est l’inverse de l’intensité ! Le Voltmètre se branche EN DÉRIVATION (en pont aux bornes du dipôle). En SÉRIE les tensions s’ajoutent (U = U1 + U2) ; en DÉRIVATION elles sont égales (U = U1 = U2) !',
    realWorldHook: {
      title: 'Les 3 piles dans la radio portable',
      scenario:
        'Pour faire fonctionner une radio marquée « 4,5 V », on glisse bout à bout (en série) trois petites piles rondes de 1,5 V chacune dans le compartiment.',
      question:
        'Pourquoi placer trois piles de 1,5 V en série permet-il d’obtenir exactement 4,5 V ?',
    },
    unitsTable: [
      { symbol: 'U', quantity: 'Tension électrique', unit: 'Volt (V) ou millivolt (mV) / kV', instrument: 'Voltmètre (en dérivation)' },
      { symbol: '1 kV', quantity: 'Kilovolt (lignes haute tension)', unit: '1 kV = 1 000 V', instrument: 'Réseau transport SEEG' },
      { symbol: '220 V', quantity: 'Tension secteur domestique', unit: '220 V – 230 V (alternatif)', instrument: 'Prise murale Gabon' },
    ],
    experimentOrActivity: {
      title: 'Mesurer la tension aux bornes de deux lampes en série puis en dérivation',
      materials: ['1 générateur 6 V', '2 lampes L1 et L2 différentes', '1 voltmètre (multimètre sur V)'],
      observation:
        'En série : U_générateur = 6,0 V, U1 = 3,8 V et U2 = 2,2 V (3,8 + 2,2 = 6,0 V). En dérivation : U_générateur = U1 = U2 = 6,0 V.',
      conclusion:
        'En série, la tension du générateur se partage (additivité). En dérivation, toutes les branches ont la même tension (unicité).',
    },
    revisionChecklist: [
      'Je sais brancher un voltmètre en dérivation (borne V côté +, borne COM côté −).',
      'Je sais que même si l’interrupteur est ouvert, une pile garde sa tension à ses bornes (ex : 4,5 V).',
      'Je ne confonds pas les lois de I (unique en série) et les lois de U (additives en série).',
    ],
    keyFormulas: [
      'Voltmètre (Ⓥ) : toujours branché EN DÉRIVATION aux bornes du dipôle',
      'Loi d’additivité / des mailles (SÉRIE) : U_générateur = U1 + U2',
      'Loi d’unicité (DÉRIVATION) : U_générateur = U1 = U2',
      'Tension aux bornes d’un fil fermé ou d’un interrupteur fermé : U = 0 V',
    ],
    memoSheet: {
      title: 'Fiche Mémo : La Tension Électrique (U)',
      slogan: 'Voltmètre en pont (dérivation), addition en série, égalité en dérivation',
      summaryBulletPoints: [
        'La tension se note U et s’exprime en Volt (V). Elle existe même aux bornes d’une pile débranchée !',
        'Sur un fil de connexion ou un interrupteur fermé, la tension est nulle (U = 0 V).',
        'Piles en série dans le même sens : les tensions s’additionnent (1,5 V + 1,5 V + 1,5 V = 4,5 V).',
        'Tableau comparatif : en SÉRIE, I est unique et U s’ajoute ; en DÉRIVATION, U est unique et I s’ajoute.',
      ],
      verticalFormulas: [
        {
          name: 'Loi d’additivité des tensions (Série)',
          badge: '➕',
          steps: [
            'U_générateur = 12 V et U1 = 4,5 V',
            'Loi d’additivité : U_gén = U1 + U2',
            'U2 = U_gén − U1',
            'U2 = 12 − 4,5 = 7,5 V',
          ],
          resultHighlight: 'U2 = 7,5 V',
          explanation: 'En série, la tension du générateur est égale à la somme des tensions des récepteurs.',
        },
        {
          name: 'Loi d’unicité des tensions (Dérivation)',
          badge: '🟰',
          steps: [
            'L1 et L2 sont en dérivation sur pile 6 V :',
            'U_pile = U1 = U2 = 6 V',
          ],
          resultHighlight: 'Partout 6 V',
          explanation: 'Chaque branche branchée directement aux bornes du générateur reçoit toute la tension du générateur.',
        },
      ],
      kokoTip: 'Moyen mnémotechnique : « U-Série = S-omme (addition) » et « U-Dérivation = D-ouble égalité (=) » !',
      pitfallToAvoid: 'Brancher un voltmètre en série dans le circuit : sa très grande résistance bloque presque tout le courant et la lampe ne s’allume pas !',
    },
    sections: [
      {
        title: '1. Mesurer la tension avec un voltmètre',
        explanation: [
          'La tension électrique U est une différence d’état électrique entre deux points d’un circuit. Son unité dans le Système International est le volt (V).',
          'Pour mesurer la tension aux bornes d’un dipôle, on branche un voltmètre (symbole Ⓥ) en dérivation (en pont) : borne V reliée au côté (+) et borne COM au côté (−).',
        ],
        rules: [
          {
            name: 'Tension d’un fil ou interrupteur fermé vs ouvert',
            description: 'Un fil de connexion ou un interrupteur fermé ont une tension nulle (0 V). Un interrupteur ouvert dans un circuit simple porte toute la tension du générateur aux bornes de son ouverture.',
            example: 'Pile 9 V + Interrupteur ouvert + Lampe | U_pile = 9 V | U_lampe = 0 V | U_interrupteur = 9 V',
          },
        ],
      },
      {
        title: '2. Lois des tensions en série et en dérivation',
        explanation: [
          'En série (une seule maille), la tension aux bornes du générateur est égale à la somme des tensions aux bornes des récepteurs : U = U1 + U2.',
          'En dérivation, la tension est la même aux bornes de toutes les branches dérivées : U = U1 = U2.',
        ],
        rules: [
          {
            name: 'Calcul d’une tension manquante en série',
            description: 'On isole la tension inconnue en soustrayant de la tension du générateur.',
            example: 'U_gén = 9 V ; U_lampe = 3,5 V | U_moteur = 9 - 3,5 | U_moteur = 5,5 V',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys-4-1',
        'phys-tension',
        'Ex 1 : Branchement du voltmètre',
        1,
        'Comment doit-on toujours brancher un voltmètre pour mesurer la tension aux bornes d’une lampe ?',
        [
          'En dérivation aux deux bornes de la lampe',
          'En série avant la lampe',
          'À la place du générateur',
          'En reliant V et COM ensemble sans la lampe',
        ],
        'En dérivation aux deux bornes de la lampe',
        'Une tension se mesure entre deux bornes (en pont / en dérivation).',
        'Le voltmètre se branche toujours en dérivation aux bornes du dipôle mesuré.',
        [
          {
            title: 'Règle de branchement',
            explanation: 'Contrairement à l’ampèremètre (en série), le voltmètre se place en dérivation.',
            math: 'Borne V et Borne COM aux deux côtés de la lampe',
            subResult: 'En dérivation',
          },
        ],
        '🔌'
      ),
      mkNum(
        'phys-4-2',
        'phys-tension',
        'Ex 2 : Association de piles en série',
        1,
        'Une lampe de torche nécessite 6 V. Combien faut-il de piles de 1,5 V branchées en série dans le même sens ? (Donne le nombre)',
        '4',
        'Divise 6 par 1,5 : 1,5 + 1,5 + 1,5 + 1,5 = 6 V.',
        'Il faut 4 piles de 1,5 V en série.',
        [
          {
            title: 'Diviser la tension totale par la tension d’une pile',
            explanation: 'En série, les tensions des piles s’ajoutent.',
            math: 'n = 6 ÷ 1,5 | n = 4 piles',
            rule: 'Additivité des tensions de piles en série',
            subResult: '4 piles',
          },
        ],
        'piles',
        '🔋'
      ),
      mkNum(
        'phys-4-3',
        'phys-tension',
        'Ex 3 : Loi d’additivité en série',
        2,
        'Un générateur délivre U = 12 V aux bornes d’une lampe L1 et d’un moteur M branchés en série. La tension aux bornes de L1 est U1 = 4,8 V. Calcule la tension UM aux bornes du moteur (en V).',
        '7.2',
        'En série : U = U1 + UM, donc UM = 12 − 4,8.',
        'La tension aux bornes du moteur est UM = 7,2 V.',
        [
          {
            title: 'Appliquer la loi d’additivité des tensions',
            explanation: 'Dans une boucle en série, la somme des tensions des récepteurs vaut celle du générateur.',
            math: 'U = U1 + UM | UM = 12 - 4,8 | UM = 7,2 V',
            rule: 'Loi d’additivité en série',
            subResult: '7,2 V',
          },
        ],
        'V',
        '⚙️'
      ),
      mkNum(
        'phys-4-4',
        'phys-tension',
        'Ex 4 : Loi d’unicité en dérivation',
        2,
        'Deux lampes L1 et L2 sont branchées en dérivation sur une batterie de 12 V. Quelle est la tension U2 aux bornes de L2 (en V) ?',
        '12',
        'En dérivation, toutes les branches ont la même tension que le générateur !',
        'Par la loi d’unicité des tensions en dérivation, U2 = 12 V.',
        [
          {
            title: 'Appliquer la loi d’unicité',
            explanation: 'Les dipôles en dérivation ont exactement la même tension à leurs bornes.',
            math: 'U_batterie = U1 = U2 | U2 = 12 V',
            rule: 'Loi d’unicité des tensions en dérivation',
            subResult: '12 V',
          },
        ],
        'V',
        '🟰'
      ),
      mkNum(
        'phys-4-5',
        'phys-tension',
        'Ex 5 : Conversion en kilovolts (Ligne SEEG)',
        3,
        'Une ligne de transport électrique entre le barrage de Poubara et Franceville a une tension de 90 kV. Combien cela fait-il en Volts (V) ?',
        '90000',
        '1 kV = 1 000 V, donc multiplie 90 par 1 000.',
        '90 kV = 90 000 V.',
        [
          {
            title: 'Convertir les kilovolts en volts',
            explanation: 'Le préfixe kilo (k) signifie × 1 000.',
            math: 'U = 90 × 1 000 | U = 90 000 V',
            subResult: '90 000 V',
          },
        ],
        'V',
        '⚡'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 5 : RÉSISTANCE ÉLECTRIQUE & LOI D'OHM
  // ==========================================
  {
    id: 'phys-loi-ohm',
    subject: 'physique',
    domainId: 'electricite',
    order: 5,
    title: 'La résistance électrique et la loi d’Ohm (U = R × I)',
    badge: 'Physique Ch. 5 · 4ème',
    shortDesc: 'Conducteur ohmique (résistor), unité Ohm (Ω), ohmmètre, proportionnalité U/I, formule U = R × I et protection d’une DEL.',
    themeColor: '#ec4899',
    themeGradient: 'from-pink-500 via-rose-500 to-amber-500',
    readingTimeMinutes: 15,
    visualizerType: 'ohm-seeg',
    illustrationKey: 'loi-ohm',
    bossMeta: { name: 'MAÎTRE GEORG OHM', emoji: '🎛️', xp: 180 },
    kokoSpeech:
      'Voici LA formule star de la 4ème : U = R × I ! Attention aux unités : U doit être en Volts (V), R en Ohms (Ω), et I OBLIGATOIREMENT en Ampères (A) — jamais en mA !',
    realWorldHook: {
      title: 'Pourquoi une DEL grille sans résistance sur une pile 9 V ?',
      scenario:
        'Un élève branche directement une petite DEL rouge (prévue pour 2 V et 20 mA) sur une pile de 9 V : la DEL brille très fort une demi-seconde puis grille définitivement. Pour la protéger, un technicien ajoute un petit cylindre coloré en série : un conducteur ohmique.',
      question:
        'Comment un conducteur ohmique limite-t-il l’intensité du courant, et comment calculer la valeur exacte R nécessaire ?',
    },
    unitsTable: [
      { symbol: 'U', quantity: 'Tension aux bornes', unit: 'Volt (V)', instrument: 'Voltmètre' },
      { symbol: 'R', quantity: 'Résistance électrique', unit: 'Ohm (Ω) ; 1 kΩ = 1 000 Ω', instrument: 'Ohmmètre (hors circuit)' },
      { symbol: 'I', quantity: 'Intensité du courant', unit: 'Ampère (A) obligatoirement !', instrument: 'Ampèremètre' },
    ],
    experimentOrActivity: {
      title: 'Tracer la caractéristique U = f(I) d’un conducteur ohmique',
      materials: ['1 générateur réglable (0 à 12 V)', '1 conducteur ohmique R = 100 Ω', '1 voltmètre', '1 ampèremètre'],
      observation:
        'Pour I = 0,03 A on lit U = 3 V ; pour I = 0,06 A on lit U = 6 V ; pour I = 0,09 A on lit U = 9 V. Les points sont alignés sur une droite passant par (0 ; 0) !',
      conclusion:
        'Le rapport U ÷ I est constant et vaut 100 Ω : la tension U est proportionnelle à l’intensité I selon U = R × I.',
    },
    revisionChecklist: [
      'Je sais manipuler le triangle magique de la loi d’Ohm : U = R × I, R = U ÷ I, I = U ÷ R.',
      'Je convertis TOUJOURS les mA en A et les kΩ en Ω avant d’appliquer la formule.',
      'Je sais reconnaître la courbe caractéristique d’une résistance : une droite passant par l’origine O(0 ; 0).',
    ],
    keyFormulas: [
      'Loi d’Ohm : U = R × I  (U en V, R en Ω, I en A)',
      'Calculer R : R = U ÷ I',
      'Calculer I : I = U ÷ R',
      '1 kΩ = 1 000 Ω   |   1 MΩ = 1 000 000 Ω',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Résistance & Loi d’Ohm',
      slogan: 'U = R × I — Toujours convertir en Volts, Ohms et Ampères !',
      summaryBulletPoints: [
        'Plus la résistance R d’un circuit est grande, plus l’intensité I qui le traverse est faible.',
        'L’ohmmètre se branche directement aux bornes d’une résistance ISOLÉE (hors circuit).',
        'Graphique U en fonction de I : pour un conducteur ohmique, c’est une droite passant par O(0 ; 0).',
        'Rôle d’une résistance : limiter l’intensité (protection des DEL) ou produire de la chaleur (fer à repasser, bouilloire — effet Joule).',
      ],
      verticalFormulas: [
        {
          name: 'Calculer U (U = R × I)',
          badge: '⚡',
          steps: [
            'Données : R = 150 Ω ; I = 40 mA = 0,04 A',
            'Formule : U = R × I',
            'U = 150 × 0,04',
            'U = 6 V',
          ],
          resultHighlight: 'U = 6 V',
          explanation: 'On convertit 40 mA en 0,04 A avant de multiplier.',
          tip: 'Oublier la conversion mA ➔ A donne un résultat 1 000 fois trop grand !',
        },
        {
          name: 'Calculer R (R = U ÷ I)',
          badge: '🎛️',
          steps: [
            'Données : U = 12 V ; I = 0,25 A',
            'Formule : R = U ÷ I',
            'R = 12 ÷ 0,25',
            'R = 48 Ω',
          ],
          resultHighlight: 'R = 48 Ω',
          explanation: 'La résistance est le quotient de la tension par l’intensité.',
        },
        {
          name: 'Calculer I (I = U ÷ R)',
          badge: '🔢',
          steps: [
            'Données : U = 9 V ; R = 450 Ω',
            'Formule : I = U ÷ R',
            'I = 9 ÷ 450 = 0,02 A',
            'I = 20 mA',
          ],
          resultHighlight: 'I = 0,02 A (20 mA)',
          explanation: 'On divise la tension par la résistance.',
        },
      ],
      kokoTip: 'Utilise le triangle magique : U en haut, R et I en bas ! Cache la lettre que tu cherches pour voir immédiatement s’il faut multiplier ou diviser.',
      pitfallToAvoid: 'Mesurer la résistance avec un ohmmètre pendant que la pile est encore branchée : il faut TOUJOURS débrancher la résistance du circuit avant de la mesurer !',
    },
    sections: [
      {
        title: '1. Le conducteur ohmique et la mesure de R',
        explanation: [
          'Un conducteur ohmique (ou résistor) est un dipôle non polarisé qui s’oppose au passage du courant électrique : plus sa résistance R est élevée, plus l’intensité I diminue.',
          'La résistance se note R, son unité est l’ohm (Ω). On la mesure hors circuit avec un ohmmètre, ou on la lit grâce au code des anneaux de couleur.',
        ],
        rules: [
          {
            name: 'Effet d’une résistance en série',
            description: 'Ajouter une résistance en série avec une lampe fait baisser l’intensité du courant : la lampe brille moins fort.',
            example: 'Circuit 6 V + Lampe seule ➔ I = 0,30 A | Circuit 6 V + Lampe + Résistance 100 Ω ➔ I = 0,05 A',
          },
        ],
      },
      {
        title: '2. La loi d’Ohm : U = R × I',
        explanation: [
          'La tension U aux bornes d’un conducteur ohmique est proportionnelle à l’intensité I du courant qui le traverse : U = R × I.',
          'Le coefficient de proportionnalité est précisément la résistance R (en Ω). Sur un graphique U en fonction de I, la courbe est une droite passant par l’origine.',
        ],
        rules: [
          {
            name: 'Les trois écritures de la loi d’Ohm',
            description: 'U = R × I   |   R = U ÷ I   |   I = U ÷ R (avec U en V, R en Ω, I en A).',
            example: 'U = 12 V et R = 240 Ω | I = 12 ÷ 240 | I = 0,05 A = 50 mA',
            tip: 'Rédige toujours en 4 lignes : Données (converties) ➔ Formule ➔ Calcul debout ➔ Résultat avec unité.',
          },
        ],
        commonMistakes: [
          'Multiplier directement des Ohms par des milliampères : 100 Ω × 50 mA ≠ 5 000 V ! Il faut faire 100 × 0,050 = 5 V.',
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys-5-1',
        'phys-loi-ohm',
        'Ex 1 : Calculer la tension U = R × I',
        1,
        'Un conducteur ohmique de résistance R = 220 Ω est traversé par un courant d’intensité I = 0,5 A. Calcule la tension U à ses bornes (en V).',
        '110',
        'Applique directement U = R × I = 220 × 0,5.',
        'La tension aux bornes de la résistance est U = 110 V.',
        [
          {
            title: 'Appliquer la loi d’Ohm',
            explanation: 'R est en Ω et I est déjà en A.',
            math: 'U = R × I | U = 220 × 0,5 | U = 110 V',
            rule: 'Loi d’Ohm : U = R × I',
            subResult: '110 V',
          },
        ],
        'V',
        '⚡'
      ),
      mkNum(
        'phys-5-2',
        'phys-loi-ohm',
        'Ex 2 : Calculer une résistance R = U ÷ I',
        2,
        'Aux bornes d’un résistor, on mesure U = 15 V et I = 0,3 A. Calcule la valeur de sa résistance R (en Ω).',
        '50',
        'Isole R dans la loi d’Ohm : R = U ÷ I = 15 ÷ 0,3.',
        'La résistance vaut R = 50 Ω.',
        [
          {
            title: 'Exprimer R en fonction de U et I',
            explanation: 'Si U = R × I, alors R = U ÷ I.',
            math: 'R = U ÷ I | R = 15 ÷ 0,3 | R = 50 Ω',
            rule: 'R = U ÷ I',
            subResult: '50 Ω',
          },
        ],
        'Ω',
        '🎛️'
      ),
      mkNum(
        'phys-5-3',
        'phys-loi-ohm',
        'Ex 3 : Piège de conversion mA → A',
        2,
        'Une résistance R = 400 Ω est traversée par un courant I = 25 mA. Calcule la tension U à ses bornes (en V).',
        '10',
        'Convertis 25 mA en Ampères (25 ÷ 1 000 = 0,025 A), puis calcule 400 × 0,025.',
        'La tension vaut U = 10 V.',
        [
          {
            title: 'Convertir I en ampères',
            explanation: '1 A = 1 000 mA donc 25 mA = 0,025 A.',
            math: 'I = 25 ÷ 1 000 = 0,025 A',
            subResult: 'I = 0,025 A',
          },
          {
            title: 'Calculer U = R × I',
            explanation: 'On multiplie 400 Ω par 0,025 A.',
            math: 'U = 400 × 0,025 | U = 10 V',
            rule: 'U = R × I avec I en Ampères',
            subResult: '10 V',
          },
        ],
        'V',
        '⚠️'
      ),
      mkNum(
        'phys-5-4',
        'phys-loi-ohm',
        'Ex 4 : Calculer l’intensité I = U ÷ R',
        3,
        'On branche un conducteur ohmique de résistance R = 1,2 kΩ sous une tension U = 12 V. Calcule l’intensité I qui le traverse en milliampères (mA).',
        '10',
        'Convertis 1,2 kΩ = 1 200 Ω, calcule I = 12 ÷ 1 200 = 0,01 A, puis convertis en mA (× 1 000).',
        'L’intensité vaut I = 0,01 A = 10 mA.',
        [
          {
            title: 'Convertir R en Ohms',
            explanation: '1 kΩ = 1 000 Ω donc 1,2 kΩ = 1 200 Ω.',
            math: 'R = 1,2 × 1 000 = 1 200 Ω',
            subResult: 'R = 1 200 Ω',
          },
          {
            title: 'Calculer I en A puis en mA',
            explanation: 'I = 12 ÷ 1 200 = 0,01 A ; 0,01 × 1 000 = 10 mA.',
            math: 'I = 12 ÷ 1 200 = 0,01 A | I = 0,01 × 1 000 = 10 mA',
            rule: 'I = U ÷ R',
            subResult: '10 mA',
          },
        ],
        'mA',
        '🔬'
      ),
      mkQcm(
        'phys-5-5',
        'phys-loi-ohm',
        'Ex 5 : Reconnaître la courbe caractéristique',
        2,
        'Quelle est la forme du graphique représentant U en fonction de I pour un conducteur ohmique ?',
        [
          'Une droite passant par l’origine (0 ; 0)',
          'Une courbe qui descend vers zéro',
          'Un cercle centré sur 10 V',
          'Une droite horizontale qui ne passe pas par (0 ; 0)',
        ],
        'Une droite passant par l’origine (0 ; 0)',
        'U et I sont proportionnels ! En maths de 4ème, une proportionnalité est représentée par une droite passant par (0 ; 0).',
        'La caractéristique U = f(I) d’un conducteur ohmique est une droite passant par l’origine.',
        [
          {
            title: 'Relier physique et mathématiques',
            explanation: 'Puisque U = R × I avec R constant, U est proportionnel à I.',
            math: 'U = R × I ➔ Situation de proportionnalité ➔ Droite passant par O(0 ; 0)',
            subResult: 'Droite passant par (0 ; 0)',
          },
        ],
        '📈'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 6 : PUISSANCE ET ÉNERGIE ÉLECTRIQUE (FACTURE SEEG EN F CFA)
  // ==========================================
  {
    id: 'phys-puissance-seeg',
    subject: 'physique',
    domainId: 'electricite',
    order: 6,
    title: 'Puissance et énergie électrique (Facture SEEG en F CFA)',
    badge: 'Physique Ch. 6 · 4ème',
    shortDesc: 'Puissance P = U × I (Watt), énergie E = P × t (Wh et kWh), compteur électrique et calcul du coût de consommation au Gabon en F CFA.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-amber-400 to-sky-500',
    readingTimeMinutes: 15,
    visualizerType: 'ohm-seeg',
    illustrationKey: 'puissance-seeg',
    bossMeta: { name: 'INSPECTEUR SEEG', emoji: '🧾', xp: 200 },
    kokoSpeech:
      'Chapitre super utile dans la vie au Gabon ! La puissance P = U × I s’exprime en Watts (W), et l’énergie sur le compteur SEEG se calcule avec E = P × t en kilowattheures (kWh) pour payer en F CFA !',
    realWorldHook: {
      title: 'Réduire la facture d’électricité SEEG à la maison',
      scenario:
        'Chez tante Pauline à Owendo, on utilise chaque soir un climatiseur de 1 500 W pendant 4 heures, tandis que les 5 ampoules LED de 10 W restent allumées 5 heures. Le kWh coûte environ 120 F CFA.',
      question:
        'Quel appareil pèse le plus lourd sur la facture en F CFA à la fin du mois ?',
    },
    unitsTable: [
      { symbol: 'P', quantity: 'Puissance électrique', unit: 'Watt (W) ; 1 kW = 1 000 W', instrument: 'Plaque signalétique' },
      { symbol: 'E', quantity: 'Énergie électrique consommée', unit: 'Wattheure (Wh), kWh ou Joule (J)', instrument: 'Compteur SEEG / Edan' },
      { symbol: '1 kWh', quantity: 'Unité de facturation SEEG', unit: '1 kWh = 1 000 Wh = 3 600 000 J', instrument: 'Tarif en F CFA / kWh' },
    ],
    experimentOrActivity: {
      title: 'Comparer la consommation d’une ampoule LED et d’un fer à repasser',
      materials: ['1 lampe LED 10 W (0,01 kW)', '1 fer à repasser 1 200 W (1,2 kW)', 'Tarif SEEG : 120 F CFA / kWh'],
      observation:
        'En 1 heure, la lampe LED consomme 0,01 kWh (soit 1,2 F CFA), alors que le fer à repasser consomme 1,2 kWh (soit 144 F CFA), c’est-à-dire 120 fois plus !',
      conclusion:
        'Les appareils chauffants (fer à repasser, bouilloire, climatiseur, plaque) ont une grande puissance et coûtent le plus cher en F CFA.',
    },
    revisionChecklist: [
      'Je sais calculer P = U × I, ainsi que I = P ÷ U (pour choisir un fusible adapté).',
      'Je sais calculer l’énergie en kWh : je mets P en kW (÷ 1 000) et le temps t en heures.',
      'Je sais calculer le montant d’une facture SEEG : Coût = E (en kWh) × Prix du kWh (en F CFA).',
    ],
    keyFormulas: [
      'Puissance électrique : P = U × I  (P en Watt W, U en Volt V, I en Ampère A)',
      'Intensité nominale : I = P ÷ U',
      'Énergie électrique : E = P × t  (en kWh si P en kW et t en h ; en Joules si P en W et t en s)',
      'Coût SEEG (F CFA) = Énergie (en kWh) × Tarif unitaire (F CFA/kWh)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Puissance, Énergie & Facture SEEG',
      slogan: 'P = U × I pour la puissance, E = P × t en kWh pour calculer la facture en F CFA !',
      summaryBulletPoints: [
        'La puissance indique l’énergie reçue chaque seconde : plus P est grand, plus l’appareil éclaire, chauffe ou tourne fort.',
        'Sur la plaque d’un appareil, on lit la tension nominale (220 V) et la puissance nominale (ex : 1 100 W).',
        'Pour obtenir des kWh directement : convertis d’abord les Watts en kW (÷ 1 000) et les minutes en heures (÷ 60).',
        'Pour convertir en Joules (unité SI) : E (J) = P (W) × t (secondes).',
      ],
      verticalFormulas: [
        {
          name: 'Calculer l’intensité d’un appareil (I = P ÷ U)',
          badge: '🔌',
          steps: [
            'Fer à repasser : P = 1 100 W sous U = 220 V',
            'Formule : I = P ÷ U',
            'I = 1 100 ÷ 220',
            'I = 5 A',
          ],
          resultHighlight: 'I = 5 A',
          explanation: 'On vérifie ainsi qu’un fusible de 10 A suffit largement.',
        },
        {
          name: 'Calculer une facture SEEG en F CFA',
          badge: '🧾',
          steps: [
            'Climatiseur P = 1 500 W = 1,5 kW pendant t = 4 h',
            'E = 1,5 × 4 = 6 kWh',
            'Prix (à 120 F/kWh) = 6 × 120',
            'Coût = 720 F CFA',
          ],
          resultHighlight: '720 F CFA',
          explanation: 'Multiplier les kW par les heures donne les kWh, puis multiplier par le prix du kWh.',
          tip: 'Sur un mois de 30 jours, on multiplie encore par 30 : 720 × 30 = 21 600 F CFA !',
        },
      ],
      kokoTip: 'Pour passer de W à kW, décale la virgule de 3 rangs à gauche (1 500 W = 1,5 kW). Pour passer de Wh à kWh, pareil : 3 000 Wh = 3 kWh !',
      pitfallToAvoid: 'Oublier de diviser par 1 000 pour passer des Wh aux kWh avant de multiplier par le prix du kWh en F CFA !',
    },
    sections: [
      {
        title: '1. La puissance électrique P = U × I',
        explanation: [
          'La puissance électrique P reçue par un appareil en courant continu (ou un appareil chauffant/lampe en alternatif) est égale au produit de la tension U par l’intensité I : P = U × I.',
          'Son unité est le watt (W). On utilise souvent le kilowatt : 1 kW = 1 000 W.',
        ],
        rules: [
          {
            name: 'Vérifier la sécurité d’une multiprise',
            description: 'Si une multiprise supporte au maximum 3 500 W, la somme des puissances des appareils allumés en même temps ne doit jamais dépasser 3 500 W.',
            example: 'Bouilloire 2 000 W + Fer 1 200 W + Télé 150 W | Total = 2 000 + 1 200 + 150 = 3 350 W | 3 350 W < 3 500 W ➔ Autorisé !',
          },
        ],
      },
      {
        title: '2. L’énergie électrique E = P × t et le compteur SEEG',
        explanation: [
          'L’énergie électrique consommée par un appareil pendant une durée t vaut E = P × t.',
          'Dans la vie courante (compteur SEEG / Edan au Gabon), P est en kW, t en heures (h), donc E est en kilowattheures (kWh). En unité officielle SI, P en W et t en secondes donnent des Joules (J).',
        ],
        rules: [
          {
            name: 'De l’énergie au montant en F CFA',
            description: 'Coût = Énergie (kWh) × Prix d’un kWh (F CFA).',
            example: 'Téléviseur 100 W (= 0,1 kW) allumé 5 h par jour pendant 30 jours | E = 0,1 × 5 × 30 = 15 kWh | Coût (à 120 F/kWh) = 15 × 120 = 1 800 F CFA',
          },
        ],
        commonMistakes: [
          'Utiliser 30 minutes comme 0,30 h au lieu de 0,5 h (30 ÷ 60 = 0,5 h).',
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys-6-1',
        'phys-puissance-seeg',
        'Ex 1 : Puissance d’un phare de véhicule',
        1,
        'Une ampoule de phare de voiture fonctionne sous une tension U = 12 V et est traversée par I = 4,5 A. Calcule sa puissance électrique P (en W).',
        '54',
        'Utilise P = U × I = 12 × 4,5.',
        'La puissance électrique du phare est P = 54 W.',
        [
          {
            title: 'Appliquer P = U × I',
            explanation: 'U est en V et I en A, donc P est directement en Watts.',
            math: 'P = 12 × 4,5 | P = 54 W',
            rule: 'P = U × I',
            subResult: '54 W',
          },
        ],
        'W',
        '🚗'
      ),
      mkNum(
        'phys-6-2',
        'phys-puissance-seeg',
        'Ex 2 : Intensité d’une bouilloire à Libreville',
        2,
        'Une bouilloire électrique porte les indications « 220 V – 1 760 W ». Calcule l’intensité I qui la traverse lorsqu’elle chauffe (en A).',
        '8',
        'I = P ÷ U = 1 760 ÷ 220.',
        'L’intensité vaut I = 8 A.',
        [
          {
            title: 'Isoler I = P ÷ U',
            explanation: 'Puisque P = U × I, on divise la puissance par la tension.',
            math: 'I = 1 760 ÷ 220 | I = 8 A',
            rule: 'I = P ÷ U',
            subResult: '8 A',
          },
        ],
        'A',
        '🫖'
      ),
      mkNum(
        'phys-6-3',
        'phys-puissance-seeg',
        'Ex 3 : Énergie consommée en kWh',
        2,
        'Un congélateur de puissance P = 250 W fonctionne effectivement pendant 8 heures par jour. Quelle énergie électrique consomme-t-il en une journée (en kWh) ?',
        '2',
        'Convertis 250 W = 0,25 kW, puis multiplie par 8 heures : 0,25 × 8.',
        'Le congélateur consomme 2 kWh par jour.',
        [
          {
            title: 'Convertir P en kilowatts',
            explanation: '1 kW = 1 000 W.',
            math: 'P = 250 ÷ 1 000 = 0,25 kW',
            subResult: '0,25 kW',
          },
          {
            title: 'Calculer E = P × t',
            explanation: '0,25 kW × 8 h = 2 kWh.',
            math: 'E = 0,25 × 8 | E = 2 kWh',
            rule: 'E (kWh) = P (kW) × t (h)',
            subResult: '2 kWh',
          },
        ],
        'kWh',
        '❄️'
      ),
      mkNum(
        'phys-6-4',
        'phys-puissance-seeg',
        'Ex 4 : Facture mensuelle SEEG en F CFA',
        3,
        'Un climatiseur de puissance 1 500 W fonctionne 4 heures chaque soir pendant 30 jours. Le tarif SEEG est de 120 F CFA le kWh. Quel est le coût mensuel (en F CFA) ?',
        '21600',
        '1) P = 1,5 kW. 2) Durée totale = 4 × 30 = 120 h. 3) E = 1,5 × 120 = 180 kWh. 4) Coût = 180 × 120 F.',
        'Le coût mensuel est de 21 600 F CFA.',
        [
          {
            title: 'Calculer l’énergie mensuelle en kWh',
            explanation: '1 500 W = 1,5 kW et 4 h × 30 jours = 120 h.',
            math: 'E = 1,5 × 120 | E = 180 kWh',
            subResult: '180 kWh',
          },
          {
            title: 'Calculer le montant en F CFA',
            explanation: 'On multiplie 180 kWh par 120 F CFA.',
            math: 'Coût = 180 × 120 | Coût = 21 600 F CFA',
            subResult: '21 600 F CFA',
          },
        ],
        'F CFA',
        '🧾'
      ),
      mkNum(
        'phys-6-5',
        'phys-puissance-seeg',
        'Ex 5 : Relevé de compteur Edan (SEEG)',
        4,
        'Au début du mois, le compteur indique 4 215 kWh. À la fin du mois, il indique 4 365 kWh. À 115 F CFA le kWh, quel est le prix de l’électricité consommée (en F CFA) ?',
        '17250',
        'Consommation = 4 365 − 4 215 = 150 kWh, puis multiplie par 115 F CFA.',
        'La consommation est de 150 kWh, soit 17 250 F CFA.',
        [
          {
            title: 'Calculer l’énergie consommée par différence',
            explanation: 'Nouvel index − Ancien index.',
            math: 'E = 4 365 - 4 215 | E = 150 kWh',
            subResult: '150 kWh',
          },
          {
            title: 'Calculer le montant en F CFA',
            explanation: '150 × 115 = 17 250 F CFA.',
            math: 'Montant = 150 × 115 | Montant = 17 250 F CFA',
            subResult: '17 250 F CFA',
          },
        ],
        'F CFA',
        '⚡'
      ),
    ],
  },
];
