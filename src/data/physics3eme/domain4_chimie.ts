import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_3EME_CHIMIE: Chapter[] = [
  {
    id: 'phys3-metaux-oxydation',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'chimie',
    order: 10,
    title: 'Métaux usuels (Fe, Cu, Al, Zn) & Oxydation à l’air / Corrosion',
    badge: 'Chimie 3ème · Ch. 10',
    shortDesc: 'Propriétés et tests des 4 métaux usuels, oxydation du fer (rouille Fe₂O₃) vs passivation de l’aluminium (Al₂O₃), prévention.',
    themeColor: '#a855f7',
    themeGradient: 'from-purple-500 via-fuchsia-500 to-rose-400',
    readingTimeMinutes: 13,
    visualizerType: 'chimie-gaz',
    illustrationKey: 'metaux-oxydation',
    bossMeta: { name: 'MÉTALLURGISTE DU GABON', emoji: '🔩', xp: 160 },
    kokoSpeech:
      'Dans le climat humide et salin de Libreville ou Port-Gentil, les tôles en fer rouillent vite (formation poreuse d’oxyde ferrique Fe₂O₃) ! Par contre, l’aluminium se protège tout seul grâce à une couche étanche d’alumine Al₂O₃ !',
    realWorldHook: {
      title: 'Pourquoi les portails en fer rouillent-ils à Libreville et pas l’aluminium ?',
      scenario:
        'En bord de mer à Libreville, un portail en fer non peint rouille et se troue en quelques années, tandis que les fenêtres en aluminium ou les tôles galvanisées (recouvertes de zinc) résistent très longtemps.',
      question:
        'Quelles réactions chimiques se produisent entre ces métaux et le dioxygène de l’air ?',
    },
    unitsTable: [
      { symbol: 'Fe', quantity: 'Fer (attiré par l’aimant)', unit: 'Oxyde : Fe₂O₃ (rouille)', instrument: 'Aimant / Acide' },
      { symbol: 'Cu', quantity: 'Cuivre (rouge-orangé)', unit: 'Oxyde : CuO (noir)', instrument: 'Couleur / Conductivité' },
      { symbol: 'Al', quantity: 'Aluminium (léger, gris)', unit: 'Alumine : Al₂O₃ (étanche)', instrument: 'Masse vol. 2,7 g/cm³' },
      { symbol: 'Zn', quantity: 'Zinc (galvanisation)', unit: 'Oxyde : ZnO (blanc)', instrument: 'Protège le fer' },
    ],
    experimentOrActivity: {
      title: 'Facteurs de la corrosion du fer (Air sec vs Eau salée)',
      materials: ['4 tubes à essai', '4 clous en fer', 'Eau du robinet, eau salée, huile, chlorure de calcium sec'],
      observation:
        'Le clou ne rouille pas dans l’air sec ni dans l’eau bouillie sans air (sous huile). Il rouille dans l’air humide, et encore plus vite dans l’eau salée !',
      conclusion:
        'La rouille nécessite à la fois le dioxygène (O₂) et l’eau ; le sel marin accélère fortement la corrosion.',
    },
    revisionChecklist: [
      'Je sais reconnaître Fe (attiré par l’aimant), Cu (rouge), Al (très léger) et Zn (gris-bleuté).',
      'Je sais équilibrer les équations d’oxydation : 4 Fe + 3 O₂ ➔ 2 Fe₂O₃ et 4 Al + 3 O₂ ➔ 2 Al₂O₃.',
      'Je connais les méthodes de protection contre la rouille (peinture, vernis, graisse, galvanisation par du zinc).',
    ],
    keyFormulas: [
      'Formation de la rouille (lente, à froid, eau + O₂) : 4 Fe + 3 O₂ ➔ 2 Fe₂O₃ (oxyde de fer III)',
      'Combustion du fer (vive) : 3 Fe + 2 O₂ ➔ Fe₃O₄ (oxyde magnétique de fer)',
      'Oxydation du cuivre : 2 Cu + O₂ ➔ 2 CuO  |  Aluminium : 4 Al + 3 O₂ ➔ 2 Al₂O₃',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Métaux Usuels & Oxydation',
      slogan: 'Rouille = Fe₂O₃ poreux (détruit) · Alumine = Al₂O₃ étanche (protège)',
      summaryBulletPoints: [
        'Le fer est le seul des 4 métaux usuels attiré par un aimant.',
        'La rouille est poreuse : l’air et l’eau continuent d’attaquer le fer en profondeur.',
        'La couche d’alumine Al₂O₃ sur l’aluminium est imperméable : c’est la PASSIVATION.',
      ],
      verticalFormulas: [
        {
          name: 'Équation équilibrée de la rouille',
          badge: '🔩',
          steps: [
            'Réactifs : Fer (Fe) + Dioxygène (O₂)',
            'Produit : Oxyde ferrique (Fe₂O₃)',
            '4 Fe + 3 O₂ ➔ 2 Fe₂O₃',
            '(4 atomes Fe et 6 atomes O de chaque côté)',
          ],
          resultHighlight: '4 Fe + 3 O₂ ➔ 2 Fe₂O₃',
          explanation: 'En présence d’humidité, le fer s’oxyde lentement en oxyde ferrique rouge-brun.',
        },
      ],
      kokoTip: 'Protéger un portail à Port-Gentil ? Peinture antirouille, graisse ou galvanisation (couche de zinc) pour empêcher l’air et l’eau de toucher le fer !',
      pitfallToAvoid: 'Confondre Fe₃O₄ (combustion vive dans O₂ pur) et Fe₂O₃ (rouille lente dans l’air humide) !',
    },
    sections: [
      {
        title: '1. Identification des métaux et oxydation',
        explanation: [
          'Les 4 métaux usuels sont le fer (Fe), le cuivre (Cu), l’aluminium (Al) et le zinc (Zn). Tous conduisent très bien la chaleur et l’électricité.',
          'Au contact du dioxygène, les métaux s’oxydent : le cuivre forme une couche noire d’oxyde de cuivre II (CuO), l’aluminium forme de l’alumine (Al₂O₃) protectrice, et le fer humide forme de la rouille (Fe₂O₃) destructrice.',
        ],
        rules: [
          {
            name: 'Comment protéger le fer de la rouille ?',
            description: 'Il faut isoler le fer de l’air et de l’humidité par peinture, vernis, huilage, étamage (étain) ou galvanisation (zinc), ou fabriquer de l’acier inoxydable.',
            example: '4 Al + 3 O₂ ➔ 2 Al₂O₃ | Couche d’alumine étanche = Auto-protection de l’aluminium',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys3-10-1',
        'phys3-metaux-oxydation',
        'Ex 1 : Pourquoi l’aluminium ne rouille-t-il pas en profondeur ?',
        1,
        'Contrairement à la rouille sur le fer, pourquoi la couche d’alumine (Al₂O₃) protège-t-elle l’aluminium ?',
        [
          'Elle est mince, adhérente et imperméable à l’air et à l’eau',
          'Elle est attirée par un aimant',
          'L’aluminium ne réagit jamais avec le dioxygène',
          'L’alumine est un gaz qui s’évapore',
        ],
        'Elle est mince, adhérente et imperméable à l’air et à l’eau',
        'On appelle ce phénomène la passivation.',
        'L’alumine Al₂O₃ forme un bouclier étanche qui empêche le dioxygène d’atteindre le métal en dessous.',
        [
          {
            title: 'Comparer rouille et alumine',
            explanation: 'La rouille est poreuse et s’effrite ; l’alumine est compacte et étanche.',
            math: 'Al₂O₃ = Couche protectrice imperméable',
            subResult: 'Couche imperméable',
          },
        ],
        '🛡️'
      ),
      mkNum(
        'phys3-10-2',
        'phys3-metaux-oxydation',
        'Ex 2 : Coefficient dans l’équation de l’alumine',
        2,
        'On équilibre l’équation d’oxydation de l’aluminium : a Al + 3 O₂ ➔ 2 Al₂O₃.\nQuel entier doit remplacer la lettre a ?',
        '4',
        'Compte le nombre total d’atomes Al dans 2 Al₂O₃ : 2 × 2 = 4.',
        'Il faut 4 Al + 3 O₂ ➔ 2 Al₂O₃, donc a = 4.',
        [
          {
            title: 'Compter les atomes dans les produits',
            explanation: '2 molécules de Al₂O₃ contiennent 2 × 2 = 4 atomes Al et 2 × 3 = 6 atomes O.',
            math: 'Produits : 4 Al et 6 O | Réactifs : a Al et 3 × 2 = 6 O',
          },
          {
            title: 'Conclure sur a',
            explanation: 'Pour conserver les atomes Al, a = 4.',
            math: 'a = 4 | 4 Al + 3 O₂ ➔ 2 Al₂O₃',
            subResult: 'a = 4',
          },
        ],
        undefined,
        '⚖️'
      ),
    ],
  },

  {
    id: 'phys3-ions-tests',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'chimie',
    order: 11,
    title: 'Atomes, Ions en solution & Tests d’identification (BEPC)',
    badge: 'Chimie 3ème · Ch. 11',
    shortDesc: 'Structure de l’atome (noyau + Z électrons), formation des cations (+) et anions (−), tests à la soude et au nitrate d’argent.',
    themeColor: '#0ea5e9',
    themeGradient: 'from-cyan-500 via-sky-500 to-indigo-500',
    readingTimeMinutes: 15,
    visualizerType: 'solutions-ph',
    illustrationKey: 'ions-tests',
    bossMeta: { name: 'ANALYSTE DES IONS', emoji: '🔬', xp: 170 },
    kokoSpeech:
      'Un atome est électriquement NEUTRE (autant de protons + que d’électrons −). S’il PERD des électrons, il devient un CATION positif (ex : Cu²⁺, Fe²⁺). S’il GAGNE des électrons, il devient un ANION négatif (ex : Cl⁻) !',
    realWorldHook: {
      title: 'Contrôler la qualité de l’eau potable ou de l’eau d’un forage au Gabon',
      scenario:
        'Un laboratoire d’analyse à Libreville reçoit un flacon sans étiquette contenant une eau minérale ou une solution métallique. Il verse quelques gouttes de soude (NaOH) et de nitrate d’argent (AgNO₃).',
      question:
        'Comment la couleur du précipité obtenu permet-elle d’identifier immédiatement les ions présents ?',
    },
    unitsTable: [
      { symbol: 'Cu²⁺ + 2 OH⁻', quantity: 'Test ion cuivre II (solution bleue)', unit: 'Précipité BLEU', instrument: 'Réactif : Soude (NaOH)' },
      { symbol: 'Fe²⁺ + 2 OH⁻', quantity: 'Test ion fer II (vert pâle)', unit: 'Précipité VERT', instrument: 'Réactif : Soude (NaOH)' },
      { symbol: 'Fe³⁺ + 3 OH⁻', quantity: 'Test ion fer III (rouille)', unit: 'Précipité ROUILLE (orange)', instrument: 'Réactif : Soude (NaOH)' },
      { symbol: 'Cl⁻ + Ag⁺', quantity: 'Test ion chlorure', unit: 'Précipité BLANC (noircit à la lumière)', instrument: 'Nitrate d’argent' },
    ],
    experimentOrActivity: {
      title: 'Identifier 4 flacons inconnus par précipitation',
      materials: ['4 tubes à essai', 'Solutions de Cu²⁺, Fe²⁺, Fe³⁺, Cl⁻', 'Flacons compte-gouttes de soude et de nitrate d’argent'],
      observation:
        'La soude forme un précipité bleu avec Cu²⁺, vert avec Fe²⁺, rouille avec Fe³⁺ et blanc avec Zn²⁺/Al³⁺. Le nitrate d’argent forme un précipité blanc avec Cl⁻.',
      conclusion:
        'Chaque ion possède un test de reconnaissance spécifique produisant un précipité de couleur caractéristique.',
    },
    revisionChecklist: [
      'Je sais trouver le nombre d’électrons d’un ion à partir du numéro atomique Z (ex : Fe a Z=26 ➔ Fe³⁺ a 26 − 3 = 23 électrons).',
      'Je connais par cœur les 4 précipités clés du BEPC (Bleu Cu²⁺, Vert Fe²⁺, Rouille Fe³⁺, Blanc Cl⁻).',
      'Je sais écrire l’équation de précipitation équilibrée.',
    ],
    keyFormulas: [
      'Atome neutre : Nombre de protons (+) = Nombre d’électrons (−) = Z',
      'Cation Xⁿ⁺ = atome ayant PERDU n électrons (Z − n électrons)',
      'Anion Yᵐ⁻ = atome ayant GAGNÉ m électrons (Z + m électrons)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Atomes, Ions & Précipités',
      slogan: 'Perdre (−) ➔ Cation (+) · Gagner (−) ➔ Anion (−) · Couleurs des précipités',
      summaryBulletPoints: [
        'Les métaux dans l’eau conduisent le courant grâce aux électrons libres ; les solutions ioniques conduisent grâce aux IONS !',
        'Test des ions sulfate SO₄²⁻ : précipité BLANC avec le chlorure de baryum (BaCl₂).',
        'Neutralité d’un solide ou solution : une solution de chlorure de fer III s’écrit (Fe³⁺ + 3 Cl⁻).',
      ],
      verticalFormulas: [
        {
          name: 'Compter les électrons d’un ion',
          badge: '⚛️',
          steps: [
            'Cuivre Cu : Z = 29 (29 protons et 29 électrons)',
            'Ion Cu²⁺ : charge +2 ➔ a PERDU 2 électrons',
            'Électrons de Cu²⁺ = 29 − 2 = 27 électrons',
          ],
          resultHighlight: '27 électrons (toujours 29 protons)',
          explanation: 'Le noyau (protons) ne change jamais lors de la formation d’un ion !',
        },
      ],
      kokoTip: 'Pour retenir les précipités avec la soude : Cu²⁺ = Ciel Bleu | Fe²⁺ = Feuille Verte | Fe³⁺ = Fer Rouille !',
      pitfallToAvoid: 'Croire que l’ion Cu²⁺ a GAGNÉ 2 électrons à cause du signe « + » : un électron est NÉGATIF, donc en perdre 2 rend positif !',
    },
    sections: [
      {
        title: '1. Structure atomique et formation des ions',
        explanation: [
          'Un atome est formé d’un noyau central chargé positivement (contenant Z protons) autour duquel tournent Z électrons chargés négativement.',
          'Un ion provient d’un atome (ou groupe d’atomes) qui a gagné ou perdu un ou plusieurs électrons.',
        ],
        rules: [
          {
            name: 'Tests d’identification des ions au BEPC',
            description: 'Réactif Soude (OH⁻) : Cu²⁺ (bleu), Fe²⁺ (vert), Fe³⁺ (rouille), Zn²⁺ (blanc). Réactif Nitrate d’argent (Ag⁺) : Cl⁻ (blanc noircissant à la lumière).',
            example: 'Fe³⁺ + 3 OH⁻ ➔ Fe(OH)₃ (précipité couleur rouille)',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys3-11-1',
        'phys3-ions-tests',
        'Ex 1 : Nombre d’électrons de l’ion Fe³⁺',
        1,
        'L’atome de fer (Fe) a pour numéro atomique Z = 26.\nCombien d’électrons possède l’ion fer III (Fe³⁺) ?',
        '23',
        'L’ion Fe³⁺ a une charge +3 : l’atome de fer a PERDU 3 électrons.',
        '26 − 3 = 23 électrons.',
        [
          {
            title: 'Lire la charge de l’ion',
            explanation: '3+ signifie un défaut de 3 charges négatives (3 électrons perdus).',
            math: 'Électrons = Z − 3 | = 26 − 3 = 23',
            subResult: '23 électrons',
          },
        ],
        'électrons',
        '⚛️'
      ),
      mkQcm(
        'phys3-11-2',
        'phys3-ions-tests',
        'Ex 2 : Test de reconnaissance à la soude',
        2,
        'On verse quelques gouttes de soude (hydroxyde de sodium) dans une solution bleue : il se forme un précipité bleu. Quel ion est mis en évidence ?',
        ['L’ion cuivre II (Cu²⁺)', 'L’ion fer II (Fe²⁺)', 'L’ion fer III (Fe³⁺)', 'L’ion chlorure (Cl⁻)'],
        'L’ion cuivre II (Cu²⁺)',
        'Cuivre = Bleu (Ciel Bleu) ; Fe²⁺ = Vert ; Fe³⁺ = Rouille.',
        'Le précipité bleu caractéristique avec la soude prouve la présence d’ions cuivre II (Cu²⁺).',
        [
          {
            title: 'Interpréter le précipité',
            explanation: 'Cu²⁺ + 2 OH⁻ ➔ Cu(OH)₂ (précipité bleu).',
            math: 'Précipité bleu avec soude ➔ Ion Cu²⁺',
            subResult: 'Cu²⁺',
          },
        ],
        '🧪'
      ),
    ],
  },

  {
    id: 'phys3-acides-bases-ph',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'chimie',
    order: 12,
    title: 'Solutions Acides, Basiques, Dilution & Neutralisation (pH 3ème)',
    badge: 'Chimie 3ème · Ch. 12',
    shortDesc: 'Ions H⁺ et OH⁻, action de l’acide chlorhydrique sur les métaux (Fe, Zn, Al), dilution du pH et réaction acide-base.',
    themeColor: '#10b981',
    themeGradient: 'from-rose-500 via-emerald-500 to-indigo-500',
    readingTimeMinutes: 15,
    visualizerType: 'solutions-ph',
    illustrationKey: 'acides-bases-neutralisation',
    bossMeta: { name: 'MAÎTRE DU pH 3ÈME', emoji: '🧪', xp: 170 },
    kokoSpeech:
      'En 3ème, on comprend POURQUOI une solution est acide ou basique : elle contient plus d’ions hydrogène H⁺ (acide, pH < 7) ou plus d’ions hydroxyde OH⁻ (basique, pH > 7). Quand on verse un acide dans une base, ils s’annulent pour donner de l’EAU : H⁺ + OH⁻ ➔ H₂O !',
    realWorldHook: {
      title: 'Sécurité chimique : ne jamais mettre d’acide chlorhydrique sur le fer ou l’aluminium !',
      scenario:
        'Un bidon d’esprit de sel (acide chlorhydrique H⁺ + Cl⁻) attaque fortement le fer ou le zinc en dégageant un gaz inflammable qui produit une détonation (« aboiement ») à l’approche d’une flamme : le dihydrogène H₂ !',
      question:
        'Comment évolue le pH lors d’une dilution et quelle équation bilan traduit la réaction acide-base ou acide-métal ?',
    },
    unitsTable: [
      { symbol: 'H⁺', quantity: 'Ion hydrogène (responsable de l’acidité)', unit: 'pH < 7', instrument: 'Majoritaire dans les acides' },
      { symbol: 'OH⁻', quantity: 'Ion hydroxyde (responsable basicité)', unit: 'pH > 7', instrument: 'Majoritaire dans les bases' },
      { symbol: 'H₂', quantity: 'Dihydrogène (gaz dégagé sur Fe, Zn, Al)', unit: 'Test flamme ➔ « pop »', instrument: 'Allumette enflammée' },
    ],
    experimentOrActivity: {
      title: 'Action de l’acide chlorhydrique sur le zinc et test du gaz H₂',
      materials: ['1 tube à essai avec grenaille de zinc (Zn)', 'Acide chlorhydrique (H⁺ + Cl⁻)', '1 allumette'],
      observation:
        'Effervescence vive : un gaz se dégage. En approchant une flamme à l’ouverture du tube, on entend une légère détonation (« pop »).',
      conclusion:
        'L’acide attaque le zinc en formant des ions Zn²⁺ et du dihydrogène H₂ : Zn + 2 H⁺ ➔ Zn²⁺ + H₂.',
    },
    revisionChecklist: [
      'Je connais l’effet de la dilution : pour un acide, le pH augmente vers 7 ; pour une base, le pH diminue vers 7 (il ne traverse jamais 7 !).',
      'Je sais que le cuivre (Cu) n’est PAS attaqué par l’acide chlorhydrique.',
      'Je sais écrire l’équation de neutralisation acide-base : H⁺ + OH⁻ ➔ H₂O.',
    ],
    keyFormulas: [
      'Acide : pH < 7 ([H⁺] > [OH⁻])  |  Neutre : pH = 7 ([H⁺] = [OH⁻])  |  Basique : pH > 7 ([OH⁻] > [H⁺])',
      'Réaction acide-base (exothermique) : H⁺ + OH⁻ ➔ H₂O',
      'Action acide sur le fer : Fe + 2 H⁺ ➔ Fe²⁺ + H₂↑  |  Sur le zinc : Zn + 2 H⁺ ➔ Zn²⁺ + H₂↑',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Acides, Bases & Métaux',
      slogan: 'Diluer ➔ Tend vers 7 · Acide + Base ➔ Eau (H₂O) · Acide + Fer ➔ H₂',
      summaryBulletPoints: [
        'Lors d’une dilution à l’eau, le pH se rapproche TOUJOURS de 7 sans jamais le dépasser.',
        'Sécurité au laboratoire : Toujours verser l’acide dans l’eau, JAMAIS l’eau dans l’acide concentré !',
        'La réaction entre acide chlorhydrique et soude est exothermique (dégage de la chaleur) et donne de l’eau salée (Na⁺ + Cl⁻).',
      ],
      verticalFormulas: [
        {
          name: 'Réaction acide-base (Bilan simplifié)',
          badge: '⚗️',
          steps: [
            'Acide chlorhydrique : (H⁺ + Cl⁻)',
            'Soude : (Na⁺ + OH⁻)',
            'H⁺ + OH⁻ ➔ H₂O (les ions Na⁺ et Cl⁻ sont spectateurs)',
          ],
          resultHighlight: 'H⁺ + OH⁻ ➔ H₂O',
          explanation: 'Au point d’équivalence, la solution redevient neutre (pH = 7).',
        },
      ],
      kokoTip: 'Le cuivre est trop « noble » : il résiste à l’acide chlorhydrique (pas de bulles de H₂), contrairement au fer, zinc et aluminium !',
      pitfallToAvoid: 'Dire qu’en diluant beaucoup un acide de pH = 2, son pH devient égal à 8 : FAUX, il tend vers 7 par valeurs inférieures !',
    },
    sections: [
      {
        title: '1. Dilution, Neutralisation et Action sur les métaux',
        explanation: [
          'Dans toute solution aqueuse coexistent des ions H⁺ et OH⁻. Si H⁺ domine, la solution est acide (pH < 7). Si OH⁻ domine, elle est basique (pH > 7).',
          'En ajoutant de l’eau pure (dilution), un acide devient moins acide (son pH monte vers 7) et une base devient moins basique (son pH descend vers 7).',
        ],
        rules: [
          {
            name: 'Attaque des métaux par l’acide chlorhydrique',
            description: 'Fe, Zn et Al disparaissent progressivement avec dégagement de dihydrogène H₂ (qui explose à la flamme). Cu ne réagit pas.',
            example: 'Fe + 2 H⁺ ➔ Fe²⁺ + H₂↑ | Tests : flamme (« pop » pour H₂) + soude (précipité vert pour Fe²⁺)',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys3-12-1',
        'phys3-acides-bases-ph',
        'Ex 1 : Dilution d’une solution acide',
        1,
        'On verse 10 mL d’acide chlorhydrique de pH = 2 dans un grand bécher contenant 500 mL d’eau distillée.\nQue devient le pH de la solution obtenue ?',
        [
          'Il augmente et se rapproche de 7 (sans jamais dépasser 7)',
          'Il diminue vers 0',
          'Il devient égal à 12',
          'Il reste exactement égal à 2',
        ],
        'Il augmente et se rapproche de 7 (sans jamais dépasser 7)',
        'Diluer affaiblit l’acidité : le pH se rapproche donc de la neutralité (7).',
        'La dilution d’un acide fait augmenter son pH vers 7 sans jamais le franchir.',
        [
          {
            title: 'Appliquer la règle de dilution',
            explanation: 'L’eau diminue la concentration des ions H⁺.',
            math: 'Acide dilué : 2 < pH_final < 7',
            subResult: 'Augmente vers 7',
          },
        ],
        '💧'
      ),
      mkQcm(
        'phys3-12-2',
        'phys3-acides-bases-ph',
        'Ex 2 : Gaz produit par acide sur le zinc',
        2,
        'On verse de l’acide chlorhydrique sur de la poudre de zinc. Un gaz s’échappe et produit une petite détonation à l’approche d’une flamme.\nQuel est ce gaz ?',
        ['Le dihydrogène (H₂)', 'Le dioxyde de carbone (CO₂)', 'Le dioxygène (O₂)', 'Le diazote (N₂)'],
        'Le dihydrogène (H₂)',
        'CO₂ trouble l’eau de chaux ; O₂ ravive une flamme ; H₂ fait « pop » !',
        'La réaction Zn + 2 H⁺ ➔ Zn²⁺ + H₂ libère du dihydrogène H₂.',
        [
          {
            title: 'Identifier le gaz',
            explanation: 'Le test de la flamme avec détonation caractérise le dihydrogène H₂.',
            math: 'Zn + 2 H⁺ ➔ Zn²⁺ + H₂ (détonation)',
            subResult: 'Dihydrogène H₂',
          },
        ],
        '💥'
      ),
    ],
  },

  {
    id: 'phys3-hydrocarbures-alcools',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'chimie',
    order: 13,
    title: 'Hydrocarbures (Alcanes, Alcènes) & Pétrole du Gabon (BEPC)',
    badge: 'Chimie 3ème · Ch. 13',
    shortDesc: 'Formules générales (CnH2n+2, CnH2n, CnH2n-2), isomérie, raffinage du pétrole de Port-Gentil (SOGARA) et combustion des alcanes.',
    themeColor: '#eab308',
    themeGradient: 'from-amber-500 via-orange-600 to-slate-600',
    readingTimeMinutes: 14,
    visualizerType: 'chimie-gaz',
    illustrationKey: 'hydrocarbures-alcools',
    bossMeta: { name: 'RAFFINEUR DE SOGARA', emoji: '🛢️', xp: 180 },
    kokoSpeech:
      'Le pétrole extrait au large de Port-Gentil et raffiné à la SOGARA est un mélange d’HYDROCARBURES (composés uniquement de Carbone C et d’Hydrogène H) ! Pour le BEPC, connais par cœur les formules des 4 premiers alcanes : Méthane, Éthane, Propane, Butane !',
    realWorldHook: {
      title: 'Le pétrole gabonais à Port-Gentil & le gaz butane en cuisine',
      scenario:
        'À Port-Gentil, le brut gabonais (Mandji, Rabi) est séparé par distillation fractionnée en gaz butane (C₄H₁₀), essence, kérosène, gazole et bitume pour les routes du Gabon.',
      question:
        'Comment reconnaître un alcane d’un alcène par sa formule brute et comment équilibrer sa combustion complète ?',
    },
    unitsTable: [
      { symbol: 'CₙH₂ₙ₊₂', quantity: 'Alcanes (liaisons simples C−C)', unit: 'CH₄, C₂H₆, C₃H₈, C₄H₁₀', instrument: 'Saturés' },
      { symbol: 'CₙH₂ₙ', quantity: 'Alcènes (1 double liaison C=C)', unit: 'Ex : Éthène C₂H₄', instrument: 'Décolorent eau de brome' },
      { symbol: 'CₙH₂ₙ₋₂', quantity: 'Alcynes (1 triple liaison C≡C)', unit: 'Ex : Éthyne C₂H₂', instrument: 'Chalumeau oxyacétylénique' },
    ],
    experimentOrActivity: {
      title: 'Combustion complète du butane C₄H₁₀ d’un briquet ou réchaud',
      materials: ['1 réchaud à gaz butane', '1 verre froid sec', 'Eau de chaux limpide'],
      observation:
        'De la buée (H₂O) apparaît sur les parois froides et l’eau de chaux se trouble fortement (CO₂).',
      conclusion:
        'La combustion complète de tout hydrocarbure dans le dioxygène produit uniquement du dioxyde de carbone CO₂ et de l’eau H₂O.',
    },
    revisionChecklist: [
      'Je connais les 4 premiers alcanes : CH₄ (méthane), C₂H₆ (éthane), C₃H₈ (propane), C₄H₁₀ (butane).',
      'Je sais trouver la formule d’un alcane/alcène connaissant le nombre de C ou de H.',
      'Je sais équilibrer la combustion complète d’un alcane (ex : C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O).',
    ],
    keyFormulas: [
      'Alcane : CₙH₂ₙ₊₂  |  Alcène : CₙH₂ₙ  |  Alcyne : CₙH₂ₙ₋₂',
      'Combustion complète du propane : C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O',
      'Combustion complète du butane : 2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Hydrocarbures & Combustions',
      slogan: 'Alcanes CₙH₂ₙ₊₂ · Méthode équilibre : C puis H puis O !',
      summaryBulletPoints: [
        'Moyen mnémotechnique des 4 premiers alcanes : « Maman Est Partie Bouder » (Méthane n=1, Éthane n=2, Propane n=3, Butane n=4).',
        'Des isomères ont la MÊME formule brute mais des formules développées différentes (ex : butane normal vs isobutane C₄H₁₀).',
        'La combustion complète dégage beaucoup de chaleur (flamme bleue) ; incomplète (manque d’O₂), elle produit du monoxyde de carbone CO toxique et du carbone C (fumée noire).',
      ],
      verticalFormulas: [
        {
          name: 'Équilibrer la combustion du propane (C₃H₈)',
          badge: '🔥',
          steps: [
            '1) Carbones (3) : C₃H₈ + … O₂ ➔ 3 CO₂ + … H₂O',
            '2) Hydrogènes (8 = 4×2) : C₃H₈ + … O₂ ➔ 3 CO₂ + 4 H₂O',
            '3) Oxygènes (3×2 + 4×1 = 10 = 5×2) :',
            'C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O',
          ],
          resultHighlight: 'C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O',
          explanation: 'Toujours équilibrer C d’abord, H ensuite, et O en tout dernier !',
        },
      ],
      kokoTip: 'Si le nombre d’atomes H est égal à (2×C + 2), c’est un ALCANE. S’il est égal à (2×C), c’est un ALCÈNE !',
      pitfallToAvoid: 'Oublier de multiplier par 2 le coefficient entier du butane (2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O) quand O donne 13/2 !',
    },
    sections: [
      {
        title: '1. Alcanes, Alcènes et Alcynes (Formules générales)',
        explanation: [
          'Un hydrocarbure est un corps moléculaire constitué uniquement d’atomes de carbone (C, tétravalent = 4 liaisons) et d’hydrogène (H, monovalent = 1 liaison).',
          'Dans un alcane (CₙH₂ₙ₊₂), toutes les liaisons entre atomes de carbone sont simples. Dans un alcène (CₙH₂ₙ), il y a une double liaison C=C.',
        ],
        rules: [
          {
            name: 'Combustion complète des hydrocarbures',
            description: 'En présence d’un excès de dioxygène O₂, un hydrocarbure brûle avec une flamme bleue en produisant CO₂ et H₂O.',
            example: 'C₂H₆ : 2 C et 6 H | 2 C₂H₆ + 7 O₂ ➔ 4 CO₂ + 6 H₂O',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys3-13-1',
        'phys3-hydrocarbures-alcools',
        'Ex 1 : Trouver le nombre d’atomes H d’un alcane',
        1,
        'Un alcane contient n = 5 atomes de carbone (le pentane).\nCombien d’atomes d’hydrogène possède sa molécule ?',
        '12',
        'Formule générale d’un alcane : CₙH₂ₙ₊₂, donc H = 2×5 + 2.',
        '2×5 + 2 = 12 atomes H (C₅H₁₂).',
        [
          {
            title: 'Appliquer la formule CₙH₂ₙ₊₂',
            explanation: 'Pour n = 5 : nombre de H = 2n + 2.',
            math: 'H = 2 × 5 + 2 | H = 12',
            subResult: '12 atomes H (C₅H₁₂)',
          },
        ],
        'atomes',
        '🛢️'
      ),
      mkNum(
        'phys3-13-2',
        'phys3-hydrocarbures-alcools',
        'Ex 2 : Coefficient de O₂ dans la combustion du méthane',
        2,
        'On équilibre la combustion complète du méthane : CH₄ + x O₂ ➔ CO₂ + 2 H₂O.\nCombien vaut le coefficient x devant O₂ ?',
        '2',
        'Compte les atomes d’oxygène dans les produits : 1×2 (dans CO₂) + 2×1 (dans 2 H₂O) = 4 atomes O.',
        'Il faut 4 atomes O à gauche, soit 2 molécules O₂ (x = 2).',
        [
          {
            title: 'Compter les atomes O dans les produits',
            explanation: 'CO₂ apporte 2 O et 2 H₂O apporte 2 O, soit 4 atomes O au total.',
            math: 'O_produits = 2 + 2 = 4 | x × 2 = 4 ➔ x = 2',
            subResult: 'x = 2',
          },
        ],
        undefined,
        '🔥'
      ),
    ],
  },
];
