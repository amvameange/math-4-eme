import { ExperimentActivity, RealWorldHook, UnitReferenceRow } from '../types/math';

export interface MathChapterEnhancement {
  realWorldHook: RealWorldHook;
  unitsTable: UnitReferenceRow[];
  experimentOrActivity: ExperimentActivity;
  revisionChecklist: string[];
}

export const MATH_ENHANCEMENTS: Record<string, MathChapterEnhancement> = {
  'nombres-relatifs-operations': {
    realWorldHook: {
      title: 'Gestion d’un compte mobile money & températures en chambre froide à Owendo',
      scenario:
        'Au port d’Owendo, un entrepôt frigorifique descend à −18 °C tandis qu’un commerçant annule 3 dettes de 2 500 F CFA sur son carnet : (−3) × (−2 500) = +7 500 F CFA.',
      question:
        'Comment savoir rapidement si le résultat d’un enchaînement de multiplications ou de soustractions de relatifs est positif ou négatif ?',
    },
    unitsTable: [
      { symbol: '(+) × (+)', quantity: 'Produit de même signe', unit: 'Résultat POSITIF (+)', instrument: 'Règle des signes' },
      { symbol: '(−) × (−)', quantity: 'Produit de deux négatifs', unit: 'Résultat POSITIF (+)', instrument: 'Parité des signes (−)' },
      { symbol: 'a − (−b)', quantity: 'Soustraction d’un négatif', unit: 'Devient a + b', instrument: 'Opposé' },
    ],
    experimentOrActivity: {
      title: 'Manipulation : La droite graduée et le compteur de signes (−)',
      materials: ['1 droite graduée de −10 à +10', 'Des jetons (+) verts et (−) rouges'],
      observation:
        'En regroupant les facteurs négatifs par paires : (−2) × (−3) = +6 (la paire s’annule en +). S’il reste un signe (−) tout seul, tout le produit devient négatif.',
      conclusion:
        'Un nombre PAIR de facteurs négatifs donne un produit positif ; un nombre IMPAIR donne un produit négatif.',
    },
    revisionChecklist: [
      'Je ne confonds pas (−4) + (−5) = −9 avec (−4) × (−5) = +20.',
      'J’effectue les multiplications et divisions AVANT les additions et soustractions.',
      'Je pose toujours mes étapes debout en colonne avec les signes = alignés.',
    ],
  },

  'puissances-notation-scientifique': {
    realWorldHook: {
      title: 'Budgets en millions de F CFA & distances astronomiques',
      scenario:
        'Le budget de construction d’un nouveau lycée à Libreville est de 450 000 000 F CFA, tandis que la taille d’un globule rouge est de 0,000 007 m. Écrire autant de zéros entraîne vite des erreurs.',
      question:
        'Comment condenser ces très grands ou très petits nombres sous la forme scientifique a × 10ⁿ ?',
    },
    unitsTable: [
      { symbol: 'aⁿ', quantity: 'Puissance d’exposant positif', unit: 'a × a × … × a (n facteurs)', instrument: 'Calcul direct' },
      { symbol: '10⁻ⁿ', quantity: 'Exposant négatif', unit: '1 ÷ 10ⁿ = 0,00…1 (n chiffres après virgule)', instrument: 'Puissance de 10' },
      { symbol: 'a × 10ⁿ', quantity: 'Écriture scientifique', unit: '1 ≤ a < 10 et n entier relatif', instrument: '1 chiffre non nul avant virgule' },
    ],
    experimentOrActivity: {
      title: 'Pliage de feuille et croissance exponentielle des puissances de 2',
      materials: ['1 feuille de cahier', '1 règle'],
      observation:
        '1 pli = 2¹ = 2 épaisseurs ; 2 plis = 2² = 4 ; 4 plis = 2⁴ = 16 ; 10 plis = 2¹⁰ = 1 024 épaisseurs !',
      conclusion:
        'Une puissance grandit beaucoup plus vite qu’une simple multiplication : 2⁴ = 16 ≠ 2 × 4 = 8.',
    },
    revisionChecklist: [
      'Je distingue (−3)² = +9 de −3² = −9.',
      'J’additionne les exposants pour multiplier (10ⁿ × 10ᵐ = 10ⁿ⁺ᵐ) et je les soustrais pour diviser.',
      'En écriture scientifique, le nombre devant 10ⁿ est toujours compris entre 1 et 9,999…',
    ],
  },

  'fractions-operations': {
    realWorldHook: {
      title: 'Partage d’une récolte de cacao et recettes en cuisine gabonaise',
      scenario:
        'Une coopérative agricole du Woleu-Ntem vend 3/4 de sa récolte le matin, puis partage le reste en petits sacs de 1/8 de tonne chacun.',
      question:
        'Comment additionner des fractions de dénominateurs différents et comment diviser deux fractions ?',
    },
    unitsTable: [
      { symbol: 'a/b + c/b', quantity: 'Somme même dénominateur', unit: '(a + c) / b', instrument: 'Réduction au même dén.' },
      { symbol: 'a/b × c/d', quantity: 'Produit de deux fractions', unit: '(a × c) / (b × d)', instrument: 'Simplifier avant de ×' },
      { symbol: 'a/b ÷ c/d', quantity: 'Division par une fraction', unit: '(a/b) × (d/c)', instrument: 'Multiplier par l’inverse' },
    ],
    experimentOrActivity: {
      title: 'Découpage visuel de parts de gâteau en 4èmes et 8èmes',
      materials: ['2 disques en papier', 'Ciseaux'],
      observation:
        '1/4 de disque correspond exactement à 2/8. On peut alors ajouter 2/8 + 3/8 = 5/8, et diviser 3/4 par 1/8 donne 6 parts.',
      conclusion:
        'On ne peut additionner ou soustraire que des parts de même taille (même dénominateur), alors que pour diviser on multiplie par l’inverse.',
    },
    revisionChecklist: [
      'Je mets toujours au même dénominateur avant d’additionner ou de soustraire.',
      'Pour diviser par c/d, je garde la première fraction intacte et je retourne la deuxième (d/c).',
      'Je simplifie toujours ma fraction finale au maximum (fraction irréductible).',
    ],
  },

  'calcul-litteral-developpement': {
    realWorldHook: {
      title: 'Calculer l’aire d’un champ de manioc agrandi à Oyem',
      scenario:
        'Un champ carré de côté x mètres est agrandi de 3 m en longueur et de 2 m en largeur pour cultiver davantage de manioc. Sa nouvelle aire est (x + 3)(x + 2).',
      question:
        'Comment transformer un produit avec des parenthèses en une somme simplifiée de termes en x², x et nombres ?',
    },
    unitsTable: [
      { symbol: 'k(a + b)', quantity: 'Simple distributivité', unit: 'k·a + k·b', instrument: 'Flèches de distribution' },
      { symbol: '(a+b)(c+d)', quantity: 'Double distributivité', unit: 'ac + ad + bc + bd', instrument: 'Aire de 4 rectangles' },
      { symbol: '−(a − b)', quantity: 'Signe − devant parenthèse', unit: '−a + b', instrument: 'Inversion des signes' },
    ],
    experimentOrActivity: {
      title: 'Découper l’aire du rectangle (x + 3)(x + 2) en 4 parcelles',
      materials: ['Feuille quadrillée', 'Crayons de couleur'],
      observation:
        'On obtient 1 carré d’aire x², deux bandes d’aires 3x et 2x (soit 5x ensemble), et un petit rectangle d’aire 3 × 2 = 6.',
      conclusion:
        'Géométriquement comme algébriquement : (x + 3)(x + 2) = x² + 5x + 6.',
    },
    revisionChecklist: [
      'Je ne mélange jamais les familles x² et x lors de la réduction.',
      'Devant un signe (−), j’inverse TOUS les signes à l’intérieur de la parenthèse.',
      'Je sais tester ma réponse en remplaçant x par 1 ou 2 dans l’énoncé et dans mon résultat.',
    ],
  },

  'equations-premier-degre': {
    realWorldHook: {
      title: 'Retrouver le prix inconnu d’un tas d’atangas au marché Mont-Bouët',
      scenario:
        'Maman Pauline achète 3 tas d’atangas de même prix x F CFA et un régime de bananes à 1 500 F CFA. Elle paie au total 4 500 F CFA.',
      question:
        'Comment traduire ce problème en équation 3x + 1 500 = 4 500 et isoler l’inconnue x étape par étape ?',
    },
    unitsTable: [
      { symbol: 'ax + b = c', quantity: 'Équation du 1er degré', unit: 'ax = c − b ➔ x = (c − b) ÷ a', instrument: 'Balance équilibrée' },
      { symbol: 'x', quantity: 'Inconnue du problème', unit: 'F CFA, cm, kg, âge…', instrument: 'Mise en équation' },
      { symbol: 'Vérification', quantity: 'Contrôle du résultat', unit: 'Membre gauche = Membre droit', instrument: 'Substitution' },
    ],
    experimentOrActivity: {
      title: 'Manipuler la balance à deux plateaux',
      materials: ['Schéma de balance', 'Poids inconnus x et masses de 500 F'],
      observation:
        'Si on enlève 500 F à gauche, il faut aussi enlever 500 F à droite pour que le fléau reste horizontal.',
      conclusion:
        'Ajouter, soustraire, multiplier ou diviser les deux membres par un même nombre non nul conserve l’égalité.',
    },
    revisionChecklist: [
      'Quand un terme change de côté (=), son signe s’inverse (+ devient −, − devient +).',
      'Pour passer de 4x = 2 000 à x, je DIVISE par 4 (et je ne soustrais pas 4 !).',
      'Je conclus toujours par une phrase avec l’unité (ex : « Un tas coûte 1 000 F CFA »).',
    ],
  },

  'racine-carree': {
    realWorldHook: {
      title: 'Retrouver le côté d’une parcelle carrée à Akanda',
      scenario:
        'Un terrain carré destiné à construire une salle informatique a une aire exacte de 144 m². Pour poser la clôture, le maçon doit connaître la longueur d’un côté.',
      question:
        'Quelle opération permet de passer de l’aire d’un carré (c²) à la longueur de son côté (c) ?',
    },
    unitsTable: [
      { symbol: '√a', quantity: 'Racine carrée (avec a ≥ 0)', unit: 'Nombre positif dont le carré vaut a', instrument: 'Touche √' },
      { symbol: '√(a × b)', quantity: 'Produit de racines', unit: '√a × √b', instrument: 'Simplification a√b' },
      { symbol: '√(a+b) ≠', quantity: 'Piège classique', unit: '√(a+b) ≠ √a + √b', instrument: 'Calculer sous √ d’abord' },
    ],
    experimentOrActivity: {
      title: 'Construire la table des 15 premiers carrés parfaits',
      materials: ['Cahier quadrillé'],
      observation:
        '1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100, 11²=121, 12²=144…',
      conclusion:
        'Connaître les carrés parfaits permet de simplifier instantanément √50 = √(25×2) = 5√2.',
    },
    revisionChecklist: [
      'Je sais que √a n’existe pas dans les réels si a est négatif.',
      'Je n’écris JAMAIS √(9 + 16) = 3 + 4 = 7 : on calcule d’abord 9 + 16 = 25, puis √25 = 5.',
      'Je sais écrire √72 sous la forme a√b = 6√2.',
    ],
  },

  'factorisation-identites-remarquables': {
    realWorldHook: {
      title: 'Calcul mental éclair d’une facture au marché : 102² ou 99 × 101',
      scenario:
        'Un vendeur doit calculer mentalement 101 × 99 F CFA. Plutôt que de poser une longue multiplication, il remarque que (100 + 1)(100 − 1) = 100² − 1² = 9 999 F CFA !',
      question:
        'Comment utiliser les trois identités remarquables pour développer ou factoriser en quelques secondes ?',
    },
    unitsTable: [
      { symbol: '(a+b)²', quantity: 'Carré d’une somme', unit: 'a² + 2ab + b²', instrument: '1ère identité' },
      { symbol: '(a−b)²', quantity: 'Carré d’une différence', unit: 'a² − 2ab + b²', instrument: '2ème identité' },
      { symbol: '(a+b)(a−b)', quantity: 'Produit somme × différence', unit: 'a² − b²', instrument: '3ème identité' },
    ],
    experimentOrActivity: {
      title: 'Vérifier le double produit 2ab sur un carré de côté (a + b)',
      materials: ['Découpage d’un carré de côté (a + b)'],
      observation:
        'Le grand carré contient a², b², ET deux rectangles identiques d’aire a×b chacun !',
      conclusion:
        'Sans le double produit 2ab, il manque deux morceaux entiers du carré : (a + b)² ≠ a² + b².',
    },
    revisionChecklist: [
      'Je n’oublie jamais le double produit 2ab dans (a + b)² et (a − b)².',
      'Pour factoriser x² − 49, je reconnais a² − b² = (x + 7)(x − 7).',
      'Pour factoriser ka + kb, je repère d’abord le plus grand facteur commun k.',
    ],
  },

  'inequations-premier-degre': {
    realWorldHook: {
      title: 'Comparer deux forfaits téléphoniques au Gabon',
      scenario:
        'Un forfait A coûte 500 F + 50 F/min ; un forfait B coûte 2 000 F fixe illimité. On cherche pour combien de minutes x le forfait A reste moins cher : 500 + 50x < 2 000.',
      question:
        'Quelle est la SEULE règle où le symbole d’inégalité (< ou >) doit changer de sens lors de la résolution ?',
    },
    unitsTable: [
      { symbol: '< / >', quantity: 'Inégalité stricte', unit: 'Crochet tourné vers l’extérieur', instrument: 'Droite graduée' },
      { symbol: '≤ / ≥', quantity: 'Inégalité large', unit: 'Crochet tourné vers la solution', instrument: 'Droite graduée' },
      { symbol: '÷ (−a)', quantity: 'Division par un négatif', unit: 'INVERSE le sens de l’inégalité !', instrument: 'Piège n°1 en 4ème' },
    ],
    experimentOrActivity: {
      title: 'Tester l’inversion du signe avec −2 < +5',
      materials: ['Droite graduée'],
      observation:
        'On a bien 2 < 5. Si on multiplie les deux membres par (−1), on obtient −2 et −5 : or −2 est PLUS GRAND que −5 (−2 > −5) !',
      conclusion:
        'Multiplier ou diviser les deux membres d’une inéquation par un nombre NÉGATIF renverse toujours le sens du symbole.',
    },
    revisionChecklist: [
      'Si je divise par un nombre positif (+3), le sens ne change PAS.',
      'Si je divise par un nombre négatif (−3), j’inverse < en > (ou ≤ en ≥).',
      'Je sais hachurer et orienter le crochet sur la droite graduée.',
    ],
  },

  'nombres-premiers-divisibilite': {
    realWorldHook: {
      title: 'Composer des colis identiques pour des écoles rurales du Gabon',
      scenario:
        'Une ONG dispose de 84 cahiers et 60 stylos. Elle veut préparer le plus grand nombre possible de kits scolaires exactement identiques sans aucun reste.',
      question:
        'Comment décomposer 84 et 60 en facteurs premiers pour trouver instantanément leur PGCD et simplifier les fractions ?',
    },
    unitsTable: [
      { symbol: 'Premiers', quantity: 'Nombres à 2 diviseurs exacts', unit: '2, 3, 5, 7, 11, 13, 17, 19…', instrument: 'Crible d’Ératosthène' },
      { symbol: 'PGCD', quantity: 'Plus Grand Commun Diviseur', unit: 'Facteurs communs au plus petit exposant', instrument: 'Partage maximal' },
      { symbol: 'PPCM', quantity: 'Plus Petit Commun Multiple', unit: 'Synchronisation de cycles', instrument: 'Départ simultané' },
    ],
    experimentOrActivity: {
      title: 'Construire l’arbre de décomposition de 60 et 84',
      materials: ['Cahier et tableau des nombres premiers'],
      observation:
        '60 = 2 × 30 = 2 × 2 × 15 = 2² × 3 × 5 ; 84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7.',
      conclusion:
        'Les facteurs communs sont 2² × 3 = 12 : on peut faire 12 kits identiques de 7 cahiers et 5 stylos !',
    },
    revisionChecklist: [
      'Je sais que 1 n’est PAS premier (il n’a qu’1 diviseur) et que 2 est le seul nombre premier pair.',
      'Je connais les critères de divisibilité par 2, 3, 5, 9 et 10.',
      'Je sais rendre irréductible une grande fraction grâce au PGCD.',
    ],
  },

  'proportionnalite-pourcentages': {
    realWorldHook: {
      title: 'Soldes au supermarché à Libreville et calcul de la TVA (18%)',
      scenario:
        'Une paire de chaussures affichée 20 000 F CFA bénéficie d’une remise de 25%, puis le ticket ajoute ou inclut la taxe. Ailleurs, 3 kg de bananes coûtent 2 400 F CFA.',
      question:
        'Comment passer rapidement d’un pourcentage de réduction au nouveau prix en F CFA par produit en croix ou coefficient multiplicateur ?',
    },
    unitsTable: [
      { symbol: 'k = y ÷ x', quantity: 'Coefficient de proportionnalité', unit: 'Rapport constant dans le tableau', instrument: 'Produit en croix' },
      { symbol: '−t %', quantity: 'Baisse / Remise de t%', unit: 'Multiplier par (1 − t/100)', instrument: 'Calcul en F CFA' },
      { symbol: '+t %', quantity: 'Hausse / Taxe de t%', unit: 'Multiplier par (1 + t/100)', instrument: 'Calcul en F CFA' },
    ],
    experimentOrActivity: {
      title: 'Tester une hausse de 10% suivie d’une baisse de 10% sur 10 000 F',
      materials: ['Calculatrice ou calcul posé'],
      observation:
        '10 000 F + 10% = 11 000 F. Puis 11 000 F − 10% (= −1 100 F) = 9 900 F ! On ne revient PAS à 10 000 F !',
      conclusion:
        'Des pourcentages successifs s’appliquent à la nouvelle valeur, jamais en les additionnant simplement.',
    },
    revisionChecklist: [
      'Sur un graphique, la proportionnalité est une DROITE passant par l’origine O(0 ; 0).',
      'Pour trouver un pourcentage : (Partie ÷ Total) × 100.',
      'Je vérifie tous les rapports d’un tableau avant de conclure qu’il est proportionnel.',
    ],
  },

  'vitesse-duree-distance': {
    realWorldHook: {
      title: 'Le trajet du Transgabonais entre Owendo et Franceville',
      scenario:
        'Un train parcourt les 648 km entre Owendo et Franceville en 12 heures, avec parfois des arrêts de 15 minutes ou 30 minutes en gare de Ndjolé ou Booué.',
      question:
        'Comment convertir « 2 h 30 min » sans écrire 2,30 h, et passer des km/h aux m/s ?',
    },
    unitsTable: [
      { symbol: 'v = d ÷ t', quantity: 'Vitesse moyenne', unit: 'km/h ou m/s', instrument: 'Triangle d / (v × t)' },
      { symbol: '30 min', quantity: 'Conversion minute → heure', unit: '30 ÷ 60 = 0,5 h', instrument: 'Diviser min par 60' },
      { symbol: '× / ÷ 3,6', quantity: 'm/s ↔ km/h', unit: '1 m/s = 3,6 km/h', instrument: 'Facteur 3,6' },
    ],
    experimentOrActivity: {
      title: 'Convertir une durée sexagésimale en heure décimale',
      materials: ['Cadran d’horloge dessiné'],
      observation:
        '15 min = 1/4 h = 0,25 h ; 30 min = 1/2 h = 0,5 h ; 45 min = 3/4 h = 0,75 h ; 12 min = 12/60 = 0,2 h.',
      conclusion:
        'Il y a 60 minutes dans une heure (et non 100 !), donc il faut toujours diviser les minutes par 60.',
    },
    revisionChecklist: [
      'Je n’écris jamais 1 h 30 min = 1,30 h : c’est 1,5 h !',
      'Pour passer des m/s aux km/h, je multiplie par 3,6 ; pour l’inverse, je divise par 3,6.',
      'Je vérifie la cohérence des unités entre d, v et t avant de calculer.',
    ],
  },

  'statistiques-moyenne-mediane': {
    realWorldHook: {
      title: 'Analyser les notes de classe et les températures à Libreville',
      scenario:
        'Dans une classe de 4ème, la moyenne des notes au devoir est de 11,5/20, mais quelques très mauvaises ou très bonnes notes tirent la moyenne. Le professeur calcule aussi la médiane et l’étendue.',
      question:
        'Quelle est la différence entre la moyenne pondérée et la médiane d’une série de données ?',
    },
    unitsTable: [
      { symbol: 'Moyenne', quantity: 'Moyenne pondérée', unit: 'Σ(valeur × effectif) ÷ effectif total', instrument: 'Tableau d’effectifs' },
      { symbol: 'Médiane', quantity: 'Valeur centrale (50% / 50%)', unit: 'Série OBLIGATOIREMENT triée !', instrument: 'Rang (N+1)/2' },
      { symbol: 'Étendue', quantity: 'Dispersion totale', unit: 'Maximum − Minimum', instrument: 'Écart extrêmes' },
    ],
    experimentOrActivity: {
      title: 'Trier 7 notes et trouver l’impact d’une note extrême',
      materials: ['Série A : 8 ; 10 ; 11 ; 12 ; 13 ; 14 ; 16'],
      observation:
        'La médiane est la 4ème note (12). Si on remplace 16 par 20, la moyenne monte mais la médiane reste exactement 12 !',
      conclusion:
        'La médiane n’est pas sensible aux valeurs extrêmes, contrairement à la moyenne.',
    },
    revisionChecklist: [
      'Je classe TOUJOURS les valeurs par ordre croissant avant de chercher la médiane.',
      'Si l’effectif total N est pair, la médiane est la moyenne des deux valeurs du milieu.',
      'Dans une moyenne pondérée, je divise par la SOMME des effectifs (ou coefficients), pas par le nombre de colonnes.',
    ],
  },

  'probabilites': {
    realWorldHook: {
      title: 'Tirage au sort d’une tombola scolaire et jeux de dés',
      scenario:
        'Pour la fête du collège, une urne contient 4 boules vertes, 3 jaunes et 3 bleues (couleurs du drapeau gabonais). On tire une boule au hasard sans regarder.',
      question:
        'Comment calculer la probabilité de tirer du vert, ou de NE PAS tirer du bleu grâce à l’événement contraire ?',
    },
    unitsTable: [
      { symbol: 'P(A)', quantity: 'Probabilité d’un événement', unit: 'Nombre compris entre 0 et 1 (ou 0% à 100%)', instrument: 'Cas fav. ÷ Cas poss.' },
      { symbol: 'P(Ā)', quantity: 'Événement contraire', unit: 'P(Ā) = 1 − P(A)', instrument: 'Complément à 1' },
      { symbol: '0 / 1', quantity: 'Limites', unit: '0 = impossible · 1 = certain', instrument: 'Échelle [0 ; 1]' },
    ],
    experimentOrActivity: {
      title: 'Lancer une pièce 20 fois vs probabilité théorique 0,5',
      materials: ['1 pièce de 100 F CFA'],
      observation:
        'Sur 20 lancers, on obtient parfois 12 Faces et 8 Piles (fréquence 0,6 ≠ 0,5). Sur 1 000 lancers, la fréquence se rapproche très près de 0,5.',
      conclusion:
        'Lorsqu’on répète un grand nombre de fois une expérience aléatoire, la fréquence observée tend vers la probabilité théorique.',
    },
    revisionChecklist: [
      'Une probabilité ne peut JAMAIS être négative ni supérieure à 1 (ex : 1,2 est impossible).',
      'La somme des probabilités de toutes les issues possibles vaut toujours 1.',
      'Utiliser P(non A) = 1 − P(A) fait gagner beaucoup de temps !',
    ],
  },

  'fonctions-representation-graphique': {
    realWorldHook: {
      title: 'Tarif d’un taxi à Libreville selon le nombre de kilomètres',
      scenario:
        'Un taxi propose une prise en charge de 500 F CFA puis 300 F CFA par kilomètre : le prix s’écrit P(x) = 300x + 500.',
      question:
        'Comment lire graphiquement le prix pour 6 km (image) ou la distance parcourue pour 2 900 F (antécédent) ?',
    },
    unitsTable: [
      { symbol: 'x ➔ f(x)', quantity: 'Image de x par f', unit: 'Se calcule ou se lit sur l’axe vertical (y)', instrument: 'Axe des ordonnées' },
      { symbol: 'f(x) = k', quantity: 'Antécédent(s) de k', unit: 'Se résout ou se lit sur l’axe horizontal (x)', instrument: 'Axe des abscisses' },
      { symbol: 'M(x ; f(x))', quantity: 'Point sur la courbe', unit: 'Appartient à la courbe si y = f(x)', instrument: 'Repère cartésien' },
    ],
    experimentOrActivity: {
      title: 'Construire le tableau de valeurs et tracer la courbe de f(x) = x² − 2',
      materials: ['Papier millimétré', 'x de −3 à +3'],
      observation:
        'f(−2) = (−2)² − 2 = 2 et f(2) = 2 : un même nombre (2) peut avoir PLUSIEURS antécédents (−2 et 2), alors qu’un x n’a qu’une seule image.',
      conclusion:
        'L’axe horizontal porte toujours x (antécédents) et l’axe vertical porte toujours f(x) (images).',
    },
    revisionChecklist: [
      'Je mets toujours des parenthèses quand je remplace x par un nombre négatif dans x².',
      'Pour trouver un antécédent par le calcul, je résous l’équation f(x) = valeur.',
      'Un point A(xA ; yA) est sur la courbe si et seulement si f(xA) = yA.',
    ],
  },

  'statistiques-quartiles-diagrammes': {
    realWorldHook: {
      title: 'Comparer deux classes avec un diagramme en boîte à moustaches',
      scenario:
        'Pour comparer les notes de deux classes de 4ème d’un collège de Port-Gentil, on trace deux boîtes à moustaches affichant Min, Q1, Médiane, Q3 et Max.',
      question:
        'Que représentent exactement Q1 (25%) et Q3 (75%), et quel pourcentage des élèves se trouve dans la boîte centrale ?',
    },
    unitsTable: [
      { symbol: 'Q1', quantity: '1er Quartile', unit: 'Au moins 25% (1/4) des données ≤ Q1', instrument: 'Rang N ÷ 4' },
      { symbol: 'Q3', quantity: '3ème Quartile', unit: 'Au moins 75% (3/4) des données ≤ Q3', instrument: 'Rang 3N ÷ 4' },
      { symbol: 'Q3 − Q1', quantity: 'Écart interquartile', unit: 'Largeur de la boîte (50% centraux)', instrument: 'Boîte à moustaches' },
    ],
    experimentOrActivity: {
      title: 'Découper une série triée de 12 notes en 4 quarts égaux',
      materials: ['12 fiches numérotées triées'],
      observation:
        '12 ÷ 4 = 3ème valeur (Q1), 6ème/7ème (Médiane), 9ème valeur (Q3). Entre Q1 et Q3, on a 50% de la classe.',
      conclusion:
        'La boîte à moustaches visualise immédiatement la répartition complète d’une série statistique.',
    },
    revisionChecklist: [
      'Série triée d’abord ! Rang de Q1 = N ÷ 4 (arrondi au-dessus si décimal) ; rang de Q3 = 3N ÷ 4.',
      '50% des valeurs sont comprises entre Q1 et Q3 (à l’intérieur du rectangle).',
      'Dans un histogramme, la largeur de chaque barre correspond à l’amplitude de la classe.',
    ],
  },

  'theoreme-pythagore': {
    realWorldHook: {
      title: 'Vérifier l’angle droit d’un mur de maison avec la règle 3-4-5',
      scenario:
        'À la construction d’une maison à Franceville, les maçons mesurent 3 m sur un mur, 4 m sur le mur voisin, et vérifient que la diagonale mesure exactement 5 m pour être sûrs d’avoir un angle droit de 90°.',
      question:
        'Comment calculer un côté manquant d’un triangle rectangle et comment prouver qu’un triangle est rectangle ?',
    },
    unitsTable: [
      { symbol: 'BC²=AB²+AC²', quantity: 'Théorème direct (hypoténuse)', unit: 'ADDITION des carrés', instrument: 'Triangle rectangle en A' },
      { symbol: 'AB²=BC²−AC²', quantity: 'Calcul d’un petit côté', unit: 'SOUSTRACTION des carrés', instrument: 'Hypoténuse connue' },
      { symbol: 'Réciproque', quantity: 'Prouver un angle droit (90°)', unit: 'Calculer séparément Grand² et C1²+C2²', instrument: 'Égalité / Différence' },
    ],
    experimentOrActivity: {
      title: 'Comparer les aires des 3 carrés construits sur un triangle 3-4-5',
      materials: ['Papier quadrillé', 'Ciseaux'],
      observation:
        'Le carré de côté 3 contient 9 carreaux ; le carré de côté 4 en contient 16 ; leur somme 9 + 16 = 25 carreaux forme exactement le carré de côté 5 !',
      conclusion:
        'Dans un triangle rectangle, l’aire du grand carré sur l’hypoténuse vaut la somme des aires des deux petits carrés.',
    },
    revisionChecklist: [
      'J’identifie d’abord l’hypoténuse (toujours en face de l’angle droit).',
      'Je n’oublie jamais de prendre la racine carrée √ à la dernière ligne.',
      'Pour la réciproque, je calcule les deux côtés SÉPARÉMENT avant de comparer.',
    ],
  },

  'triangles-agrandissement-reduction': {
    realWorldHook: {
      title: 'Traverser un pont ou réaliser une maquette d’immeuble à l’échelle k',
      scenario:
        'Un architecte réalise une maquette d’un bâtiment de Libreville à l’échelle k = 1/10 (longueurs divisées par 10). Mais attention : la surface de peinture nécessaire est divisée par 100 (10²) et le volume par 1 000 (10³) !',
      question:
        'Comment calculer une longueur avec la droite des milieux, et comment évoluent les aires et volumes lors d’un agrandissement de rapport k ?',
    },
    unitsTable: [
      { symbol: 'IJ = BC ÷ 2', quantity: 'Théorème des milieux', unit: '(IJ) // (BC) et IJ vaut la moitié de BC', instrument: 'I et J milieux' },
      { symbol: '× k / × k²', quantity: 'Longueurs et Aires', unit: 'Longueurs × k ; Aires × k²', instrument: 'Coefficient k' },
      { symbol: '× k³', quantity: 'Volumes après agrandissement', unit: 'Volumes multipliés par k³', instrument: 'Cube du rapport' },
    ],
    experimentOrActivity: {
      title: 'Doubler les côtés d’un carré (k = 2) sur papier quadrillé',
      materials: ['Feuille à carreaux'],
      observation:
        'Un carré de 1 cm a une aire de 1 cm². Si on double son côté (2 cm, k = 2), il contient 4 petits carrés (k² = 2² = 4 cm²) !',
      conclusion:
        'Quand on multiplie les longueurs par k, les aires sont multipliées par k² et les volumes par k³.',
    },
    revisionChecklist: [
      'Si k > 1 c’est un agrandissement ; si 0 < k < 1 c’est une réduction.',
      'Les angles ne sont JAMAIS multipliés par k : ils restent identiques !',
      'Si une droite passe par le milieu d’un côté et est // au 2ème, elle coupe le 3ème côté en son milieu.',
    ],
  },

  'translations': {
    realWorldHook: {
      title: 'Le déplacement d’une pirogue qui glisse droit sur le fleuve sans tourner',
      scenario:
        'Une pirogue traverse une lagune calme en ligne droite sur 50 mètres vers l’est sans changer d’orientation. Tous les points de la pirogue effectuent exactement le même glissement.',
      question:
        'Comment construire l’image d’une figure par la translation qui transforme A en B ?',
    },
    unitsTable: [
      { symbol: 'A ➔ B', quantity: 'Vecteur de translation', unit: 'Direction (AB), Sens A→B, Longueur AB', instrument: 'Règle & Compas' },
      { symbol: 'Parallél.', quantity: 'Lien avec le parallélogramme', unit: 'Si M’ image de M, alors ABM’M parallélogramme', instrument: 'Propriété clé' },
      { symbol: 'Conservation', quantity: 'Isométrie', unit: 'Conserve longueurs, angles, // et aires', instrument: 'Glissement pur' },
    ],
    experimentOrActivity: {
      title: 'Faire glisser un calque sans le faire tourner',
      materials: ['Papier calque', 'Règle'],
      observation:
        'En glissant de A vers B sans pivoter, les segments [AA’], [BB’], [CC’] sont tous parallèles, de même longueur et de même sens.',
      conclusion:
        'La translation déplace toute la figure en bloc selon un parallélogramme.',
    },
    revisionChecklist: [
      'Attention à l’ordre des lettres dans le parallélogramme ABM’M (ou ABNM).',
      'Une translation ne tourne pas et ne retourne pas la figure.',
      'Pour construire au compas : reporter la longueur AB depuis M et la longueur AM depuis B.',
    ],
  },

  'symetries-transformations': {
    realWorldHook: {
      title: 'Reflet dans l’eau (symétrie axiale) vs demi-tour de roue (symétrie centrale)',
      scenario:
        'Un palmier au bord d’un lac se reflète comme dans un miroir (pliage le long de la berge), tandis qu’une carte à jouer tournée de 180° autour de son centre retrouve sa forme à l’envers.',
      question:
        'Comment distinguer et construire l’image d’un point par symétrie axiale (droite d) et par symétrie centrale (point O) ?',
    },
    unitsTable: [
      { symbol: 'Axe (d)', quantity: 'Symétrie axiale (pliage)', unit: '(d) est la médiatrice de [MM’]', instrument: 'Équerre + Compas' },
      { symbol: 'Centre O', quantity: 'Symétrie centrale (180°)', unit: 'O est le MILIEU de [MM’]', instrument: 'Règle + Compas' },
      { symbol: 'Parallèles', quantity: 'Droite symétrique centrale', unit: 'Image d’une droite est une droite //', instrument: 'Propriété O' },
    ],
    experimentOrActivity: {
      title: 'Comparer pliage et demi-tour sur un triangle',
      materials: ['Feuille pliée et épingle'],
      observation:
        'Par pliage (axiale), l’orientation gauche/droite s’inverse. Par demi-tour (centrale), l’objet est la tête en bas mais les droites images sont parallèles !',
      conclusion:
        'Toutes deux conservent longueurs, angles, alignements et aires.',
    },
    revisionChecklist: [
      'En symétrie axiale, (d) est perpendiculaire à [MM’] en son milieu.',
      'En symétrie centrale, O est simplement le milieu de [MM’] (pas d’angle droit !).',
      'Le symétrique d’un cercle de rayon R est un cercle de même rayon R.',
    ],
  },

  'theoreme-thales': {
    realWorldHook: {
      title: 'Mesurer la hauteur d’un grand fromager avec l’ombre d’un bâton',
      scenario:
        'Au lycée, on plante verticalement un bâton de 1,5 m qui fait une ombre de 2 m au soleil. Au même instant, un grand arbre voisin projette une ombre de 16 m.',
      question:
        'Comment calculer la hauteur de l’arbre sans y grimper grâce au parallélisme des rayons du Soleil ?',
    },
    unitsTable: [
      { symbol: '(MN)//(BC)', quantity: 'Condition obligatoire', unit: 'Droites parallèles + points alignés', instrument: 'Théorème de Thalès' },
      { symbol: 'AM/AB', quantity: '3 rapports égaux', unit: 'AM/AB = AN/AC = MN/BC', instrument: 'Petit ÷ Grand' },
      { symbol: 'Produit en ×', quantity: 'Calcul de longueur', unit: 'x = (b × c) ÷ a', instrument: 'Proportionnalité' },
    ],
    experimentOrActivity: {
      title: 'Tester les 3 quotients sur deux triangles emboîtés',
      materials: ['Triangle ABC avec (MN) // (BC)', 'Règle graduée'],
      observation:
        'Si AM = 3, AB = 6, AN = 4, AC = 8, alors AM/AB = 0,5 et AN/AC = 0,5 : les longueurs du grand triangle sont exactement doubles de celles du petit !',
      conclusion:
        'Les côtés correspondants forment un tableau de proportionnalité.',
    },
    revisionChecklist: [
      'Je cite toujours les 2 hypothèses : points alignés dans le même ordre et droites parallèles.',
      'Je mets toujours les côtés du PETIT triangle en haut et ceux du GRAND en bas (sans inverser au milieu !).',
      'Attention à bien utiliser la longueur TOTALE AB (ex : AM + MB) et pas seulement MB !',
    ],
  },

  'trigonometrie-triangle-rectangle': {
    realWorldHook: {
      title: 'Calculer l’angle d’une rampe d’accès ou la hauteur d’un mât',
      scenario:
        'Une rampe d’accès longue de 6 m fait un angle de 30° avec le sol horizontal. Quelle hauteur permet-elle de franchir et quelle est sa portée au sol ?',
      question:
        'Comment choisir entre Sinus, Cosinus et Tangente (SOH – CAH – TOA) dans un triangle rectangle ?',
    },
    unitsTable: [
      { symbol: 'sin(α)', quantity: 'Sinus', unit: 'Côté Opposé ÷ Hypoténuse (SOH)', instrument: 'Calculatrice DEG' },
      { symbol: 'cos(α)', quantity: 'Cosinus', unit: 'Côté Adjacent ÷ Hypoténuse (CAH)', instrument: '0 < cos < 1' },
      { symbol: 'tan(α)', quantity: 'Tangente', unit: 'Côté Opposé ÷ Côté Adjacent (TOA)', instrument: 'Angle aigu' },
    ],
    experimentOrActivity: {
      title: 'Vérifier cos(60°) = 0,5 et sin(30°) = 0,5 sur un demi-triangle équilatéral',
      materials: ['Rapporteur', 'Règle'],
      observation:
        'Dans un triangle rectangle ayant un angle de 60° et une hypoténuse de 10 cm, le côté adjacent mesure exactement 5 cm : 5 ÷ 10 = 0,5 !',
      conclusion:
        'Le cosinus et le sinus d’un angle aigu sont toujours compris entre 0 et 1 car l’hypoténuse est le plus grand côté.',
    },
    revisionChecklist: [
      'Ma calculatrice est bien réglée en mode DEGRÉS (DEG), et pas en Radians !',
      'Je repère d’abord l’hypoténuse, puis le côté en face de l’angle (Opposé), et le côté qui touche l’angle (Adjacent).',
      'Pour retrouver un ANGLE à partir du rapport, j’utilise arccos / cos⁻¹ (ou arcsin / arctan).',
    ],
  },

  'homothetie': {
    realWorldHook: {
      title: 'Le vidéoprojecteur qui agrandit l’image sur le mur de la classe',
      scenario:
        'Une petite diapositive placée à 20 cm de la lampe projette une image géante sur un écran situé à 2 mètres : les rayons partent tous du centre O de la lentille.',
      question:
        'Comment le rapport k (positif ou négatif) transforme-t-il les dimensions et l’orientation de l’image ?',
    },
    unitsTable: [
      { symbol: 'k > 1', quantity: 'Agrandissement direct', unit: 'Image même sens, plus grande (× k)', instrument: 'Centre O' },
      { symbol: '0 < k < 1', quantity: 'Réduction directe', unit: 'Image plus proche de O et plus petite', instrument: 'Centre O' },
      { symbol: 'k < 0', quantity: 'Homothétie négative', unit: 'Image de l’autre côté de O (retournée)', instrument: 'Rapport |k|' },
    ],
    experimentOrActivity: {
      title: 'Tracer une homothétie de centre O et de rapport k = 2 puis k = −1',
      materials: ['Règle graduée', 'Triangle ABC et point O'],
      observation:
        'Pour k = 2, OA’ = 2 × OA dans le même sens. Pour k = −1, A’ est de l’autre côté de O à même distance : c’est exactement une symétrie centrale !',
      conclusion:
        'O, A et A’ sont toujours alignés, et les segments images sont toujours parallèles aux originaux.',
    },
    revisionChecklist: [
      'Les longueurs sont multipliées par |k| (toujours positif), et les aires par k².',
      'Si k est négatif, la figure se retourne de l’autre côté du centre O.',
      'Les angles sont parfaitement conservés.',
    ],
  },

  'rotation': {
    realWorldHook: {
      title: 'Les pales d’un ventilateur ou les aiguilles d’une horloge murale',
      scenario:
        'Lorsqu’une pale de ventilateur ou une aiguille d’horloge avance d’un quart de tour (90°), elle pivote autour de l’axe central O sans changer de taille.',
      question:
        'Quels sont les 3 éléments indispensables pour définir entièrement une rotation ?',
    },
    unitsTable: [
      { symbol: 'Centre O', quantity: 'Pivot fixe', unit: 'OM’ = OM (reste sur le cercle)', instrument: 'Compas' },
      { symbol: 'Angle α', quantity: 'Ouverture de rotation', unit: 'Degrés (ex : 60°, 90°, 180°)', instrument: 'Rapporteur' },
      { symbol: 'Sens', quantity: 'Horaire vs Anti-horaire', unit: 'Aiguilles montre (horaire) / inverse (direct)', instrument: 'Flèche courbée' },
    ],
    experimentOrActivity: {
      title: 'Pivoter une équerre autour de son sommet O de 90°',
      materials: ['Équerre', 'Compas', 'Rapporteur'],
      observation:
        'Chaque sommet décrit un arc de cercle de centre O de même angle 90°. Une rotation de 180° équivaut à une symétrie centrale !',
      conclusion:
        'La rotation est une isométrie : elle conserve longueurs, alignements, milieux, angles et aires.',
    },
    revisionChecklist: [
      'Je n’oublie jamais de vérifier le SENS demandé (horaire ou anti-horaire / trigonométrique).',
      'OM’ = OM toujours (les deux points sont à égale distance du centre O).',
      'Une rotation de 90° transforme une droite en une droite perpendiculaire.',
    ],
  },

  'droites-remarquables-triangle': {
    realWorldHook: {
      title: 'Placer un château d’eau à égale distance de 3 villages',
      scenario:
        'Trois villages gabonais forment un triangle ABC. On souhaite installer un forage d’eau exactement à la même distance des trois villages : c’est le centre du cercle circonscrit !',
      question:
        'Quelle droite remarquable faut-il tracer pour trouver le centre de gravité, l’orthocentre ou le centre du cercle circonscrit ?',
    },
    unitsTable: [
      { symbol: 'Médiatrice', quantity: '⊥ au côté en son milieu', unit: 'Centre du cercle CIRCONSCRIT (OA=OB=OC)', instrument: 'Équilibre des sommets' },
      { symbol: 'Bissectrice', quantity: 'Partage un angle en 2', unit: 'Centre du cercle INSCRIT (tangent côtés)', instrument: 'Équidistant des côtés' },
      { symbol: 'Médiane', quantity: 'Sommet ➔ milieu opposé', unit: 'Centre de gravité G (aux 2/3 du sommet)', instrument: 'Partage aire en 2' },
    ],
    experimentOrActivity: {
      title: 'Équilibrer un triangle découpé en carton sur la pointe d’un crayon',
      materials: ['Triangle en carton rigide', 'Règle'],
      observation:
        'En traçant les 3 médianes qui se coupent en G, le triangle tient en équilibre horizontal parfait sur la pointe du crayon placée exactement sous G !',
      conclusion:
        'Le point d’intersection des médianes est réellement le centre de gravité (d’équilibre) du triangle.',
    },
    revisionChecklist: [
      'Médiatrice ➔ passe par le milieu à 90° (ne passe pas forcément par le sommet opposé !).',
      'Hauteur ➔ part du sommet et tombe à 90° sur le côté opposé.',
      'Dans un triangle rectangle, le centre du cercle circonscrit est le MILIEU de l’hypoténuse.',
    ],
  },

  'geometrie-espace-volumes': {
    realWorldHook: {
      title: 'Calculer la contenance en litres d’un entonnoir conique ou d’une citerne',
      scenario:
        'Un réservoir conique ou pyramidal de hauteur 1,5 m sert à stocker de l’eau de pluie. Combien de bidons de 20 litres peut-on remplir avec son volume ?',
      question:
        'Pourquoi divise-t-on par 3 le volume d’une pyramide ou d’un cône par rapport au prisme ou cylindre ?',
    },
    unitsTable: [
      { symbol: 'V = B×h÷3', quantity: 'Volume solide pointu', unit: 'Pyramide et Cône de révolution', instrument: 'B = Aire de base' },
      { symbol: '1 dm³', quantity: 'Équivalence capacité', unit: '1 dm³ = 1 Litre (L)', instrument: 'Conversion volume' },
      { symbol: '1 m³', quantity: 'Grand réservoir', unit: '1 m³ = 1 000 Litres = 1 000 dm³', instrument: '× 1 000' },
    ],
    experimentOrActivity: {
      title: 'Transvaser 3 cônes d’eau dans 1 cylindre de même base et hauteur',
      materials: ['1 cône et 1 cylindre de même rayon r et hauteur h'],
      observation:
        'Il faut verser exactement 3 cônes pleins pour remplir à ras bord le cylindre !',
      conclusion:
        'Le volume d’un cône ou d’une pyramide est toujours le TIERS du cylindre ou prisme correspondant : V = (B × h) ÷ 3.',
    },
    revisionChecklist: [
      'Si l’énoncé donne le DIAMÈTRE d’un cône, je divise par 2 pour obtenir le rayon r avant de calculer π × r².',
      'Une section parallèle à la base d’une pyramide est une réduction de la base (longueurs × k, volume × k³).',
      'Je sais convertir : 1 m³ = 1 000 L et 1 L = 1 000 cm³.',
    ],
  },

  'reperage-plan-coordonnees': {
    realWorldHook: {
      title: 'Repérer des quartiers de Libreville sur un plan quadrillé & calculer la distance à vol d’oiseau',
      scenario:
        'Sur un plan orthonormé de la ville, le lycée est en A(1 ; 2) et la gare routière en B(7 ; 10). Un point de rendez-vous équidistant I est placé au milieu du trajet.',
      question:
        'Comment trouver les coordonnées exactes du milieu I et la distance AB en ligne droite grâce à Pythagore ?',
    },
    unitsTable: [
      { symbol: 'M(x ; y)', quantity: 'Coordonnées dans le plan', unit: 'x = abscisse (horizontal) ; y = ordonnée (vertical)', instrument: 'Repère (O,I,J)' },
      { symbol: 'I_milieu', quantity: 'Milieu de [AB]', unit: '((xA + xB) ÷ 2 ; (yA + yB) ÷ 2)', instrument: 'Moyenne des coord.' },
      { symbol: 'AB', quantity: 'Distance AB (orthonormé)', unit: '√[ (xB − xA)² + (yB − yA)² ]', instrument: 'Pythagore' },
    ],
    experimentOrActivity: {
      title: 'Tracer le triangle rectangle invisible entre A(1 ; 2) et B(5 ; 5)',
      materials: ['Repère quadrillé'],
      observation:
        'L’écart horizontal vaut Δx = 5 − 1 = 4 ; l’écart vertical vaut Δy = 5 − 2 = 3. L’hypoténuse AB vaut √(4² + 3²) = √25 = 5 !',
      conclusion:
        'La formule de distance dans un repère orthonormé est directement le théorème de Pythagore.',
    },
    revisionChecklist: [
      'Je lis toujours l’abscisse x (axe horizontal) en PREMIER, puis l’ordonnée y (axe vertical).',
      'Attention aux signes négatifs dans le milieu : (−4 + 2) ÷ 2 = −1.',
      'Le carré d’un écart négatif est toujours positif : (−3)² = +9.',
    ],
  },

  'cercle-proprietes-avancees': {
    realWorldHook: {
      title: 'L’angle de visée au stade d’Angondjé et la roue tangente à la route',
      scenario:
        'Deux défenseurs sont sur le rond central ou un cercle de centre O. Un attaquant M se déplace sur le cercle face aux poteaux A et B : son angle de tir reste constant !',
      question:
        'Quel lien relie l’angle au centre AÔB et l’angle inscrit AMB qui interceptent le même arc AB ?',
    },
    unitsTable: [
      { symbol: 'AÔB = 2×AMB', quantity: 'Angle au centre & inscrit', unit: 'L’angle au centre vaut le DOUBLE', instrument: 'Même arc AB' },
      { symbol: 'Cercle → 90°', quantity: 'Triangle inscrit sur diamètre', unit: 'Si [AB] est un diamètre, AMB = 90°', instrument: 'Triangle rectangle' },
      { symbol: 'Tangente ⊥', quantity: 'Tangente au cercle en T', unit: 'Toujours perpendiculaire au rayon [OT]', instrument: 'Angle 90°' },
    ],
    experimentOrActivity: {
      title: 'Mesurer au rapporteur deux angles inscrits interceptant le même arc',
      materials: ['Compas', 'Rapporteur'],
      observation:
        'Si l’angle au centre AÔB mesure 80°, n’importe quel angle inscrit AMB ou ANB regardant le même arc AB mesure exactement 40° !',
      conclusion:
        'Tous les angles inscrits interceptant le même arc sont égaux entre eux et valent la moitié de l’angle au centre.',
    },
    revisionChecklist: [
      'Si l’énoncé parle d’un cercle circonscrit dont un côté est le DIAMÈTRE ➔ le triangle est immédiatement RECTANGLE.',
      'La tangente touche le cercle en un SEUL point et forme un angle de 90° avec le rayon.',
      'Angle au centre = 2 × Angle inscrit (ne pas diviser au lieu de multiplier !).',
    ],
  },
};
