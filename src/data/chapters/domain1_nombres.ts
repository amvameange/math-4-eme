import { Chapter } from '../../types/math';
import { CHAP1_EXERCISES } from '../exercises/chap1_relatifs_puissances';
import { CHAP2_EXERCISES } from '../exercises/chap2_calcul_litteral';
import { CHAP3_EXERCISES } from '../exercises/chap3_equations';
import { CHAP4_EXERCISES } from '../exercises/chap4_pythagore';
import { pickExercises, mkNum, mkQcm } from './exerciseHelpers';

export const DOMAIN1_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHAPITRE 1 : NOMBRES RELATIFS (4 OPÉRATIONS)
  // ==========================================
  {
    id: 'nombres-relatifs-operations',
    domainId: 'nombres-calculs',
    order: 1,
    title: 'Nombres relatifs : les quatre opérations',
    badge: 'Chapitre 1 · 4ème',
    shortDesc: 'Addition, soustraction, règle des signes en multiplication et division, et priorités opératoires.',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-500 via-sky-500 to-cyan-400',
    readingTimeMinutes: 12,
    visualizerType: 'relatifs-puissances',
    illustrationKey: 'relatifs',
    bossMeta: { name: 'TITAN DES SIGNES', emoji: '⚡', xp: 140 },
    kokoSpeech:
      'Mbolo champion de 4ème ! Pour multiplier ou diviser des nombres relatifs : deux signes identiques donnent PLUS (+), deux signes contraires donnent MOINS (-). Compte toujours les signes moins !',
    keyFormulas: [
      'Addition même signe : on garde le signe et on additionne les distances à zéro',
      'Produit / Quotient même signe : (+) × (+) = (+)  |  (-) × (-) = (+)',
      'Produit / Quotient contraires : (+) × (-) = (-)  |  (-) ÷ (+) = (-)',
      'Grand produit : nombre PAIR de (-) ➔ (+)  |  nombre IMPAIR de (-) ➔ (-)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Nombres Relatifs (4 Opérations)',
      slogan: 'Distinguer addition de relatifs et règle des signes en multiplication/division',
      summaryBulletPoints: [
        'Addition de deux négatifs : (-5) + (-3) = -8 (on ajoute les dettes, ça reste négatif).',
        'Multiplication de deux négatifs : (-5) × (-3) = +15 (deux signes contraires à la suite ? Non, deux signes identiques ➔ +).',
        'Soustraction : soustraire un nombre, c’est additionner son opposé : a - (-b) = a + b.',
        'Division : la règle des signes est identique à la multiplication !',
        'Priorités : Parenthèses d’abord, puis × et ÷, et enfin + et -.',
      ],
      verticalFormulas: [
        {
          name: 'Produit à plusieurs facteurs',
          badge: '⚡',
          ruleTitle: 'Compter les signes (-)',
          steps: [
            'A = (-5) × (-4) × (-2)',
            'A = (+20) × (-2)',
            'A = -40',
          ],
          resultHighlight: 'A = -40',
          explanation: 'Il y a 3 signes (-) donc le résultat est négatif, puis 5 × 4 × 2 = 40.',
          tip: 'Regroupe les (-) par paires : (-) × (-) = (+).',
        },
        {
          name: 'Soustraction d’un négatif',
          badge: '➖',
          ruleTitle: 'a - (-b) = a + b',
          steps: [
            'B = (-12) - (-7)',
            'B = -12 + 7',
            'B = -5',
          ],
          resultHighlight: 'B = -5',
          explanation: 'Enlever une dette de 7 revient à gagner +7.',
          tip: 'Deux signes « - » collés (-(-7)) deviennent immédiatement « + » !',
        },
        {
          name: 'Enchaînement prioritaire',
          badge: '🎯',
          ruleTitle: 'Priorité à × et ÷',
          steps: [
            'C = -8 + (-4) × (-3)',
            'C = -8 + (+12)',
            'C = +4',
          ],
          resultHighlight: 'C = 4',
          explanation: 'On calcule d’abord la multiplication (-4) × (-3) = +12 avant l’addition.',
          tip: 'Ne fais jamais -8 + (-4) en premier !',
        },
      ],
      kokoTip: 'En F CFA, imagine un compte : -2 000 F est une dette. Si on t’annule 3 dettes de 2 000 F (-3 × -2 000), tu es plus riche de +6 000 F CFA !',
      pitfallToAvoid: 'Confondre (-5) + (-5) = -10 avec (-5) × (-5) = +25 !',
    },
    sections: [
      {
        title: '1. Addition et Soustraction de nombres relatifs (Rappel consolidé)',
        explanation: [
          'Un nombre relatif a un signe (+ ou -) et une distance à zéro (valeur numérique).',
          'Pour additionner deux nombres de même signe, on garde ce signe et on additionne. S’ils sont de signes contraires, on prend le signe de celui qui est le plus loin de zéro et on soustrait.',
        ],
        rules: [
          {
            name: 'Soustraire = Ajouter l’opposé',
            description: 'a - b = a + (-b) et surtout a - (-b) = a + b.',
            example: 'A = (-15) - (-9) | A = -15 + 9 | A = -6',
            tip: 'En température ou budget en F CFA, annuler un retrait (-) revient à un ajout (+).',
          },
        ],
        commonMistakes: [
          'Appliquer la règle des signes de la multiplication à une addition : (-4) + (-6) vaut -10 (et PAS +10) !',
        ],
      },
      {
        title: '2. Multiplication et Division de nombres relatifs',
        explanation: [
          'Pour multiplier ou diviser deux nombres relatifs : 1) On trouve le SIGNE avec la règle des signes ; 2) On multiplie ou divise les distances à zéro.',
          'Même signe ➔ Résultat POSITIF (+). Signes contraires ➔ Résultat NÉGATIF (-).',
        ],
        rules: [
          {
            name: 'Règle des signes (× et ÷)',
            description: 'Dans un produit de plusieurs facteurs non nuls, on compte le nombre de signes (-). Pair ➔ (+), Impair ➔ (-).',
            example: 'P = (-2) × (-3) × (-4) × (+5) | 3 signes (-) (impair) ➔ signe (-) | P = -(2 × 3 × 4 × 5) = -120',
          },
        ],
      },
    ],
    exercises: pickExercises(
      CHAP1_EXERCISES,
      ['exo-4e-1-1', 'exo-4e-1-2', 'exo-4e-1-3', 'exo-4e-1-6', 'exo-4e-1-16', 'exo-4e-1-18'],
      'nombres-relatifs-operations'
    ),
  },

  // ==========================================
  // CHAPITRE 2 : PUISSANCES & NOTATION SCIENTIFIQUE
  // ==========================================
  {
    id: 'puissances-notation-scientifique',
    domainId: 'nombres-calculs',
    order: 2,
    title: 'Puissances de 10 et notation scientifique (et aⁿ)',
    badge: 'Chapitre 2 · 4ème',
    shortDesc: 'Définition de aⁿ, exposants négatifs 10⁻ⁿ, lois de calcul et écriture scientifique a × 10ⁿ.',
    themeColor: '#0284c7',
    themeGradient: 'from-sky-500 via-indigo-500 to-blue-500',
    readingTimeMinutes: 13,
    visualizerType: 'relatifs-puissances',
    illustrationKey: 'puissances',
    bossMeta: { name: 'FUSÉE EXPOSANT', emoji: '🚀', xp: 150 },
    kokoSpeech:
      'Attention au piège n°1 : (-3)² vaut +9 grâce aux parenthèses, alors que -3² vaut -9 ! Et pour l’écriture scientifique, un seul chiffre de 1 à 9 avant la virgule !',
    keyFormulas: [
      'aⁿ = a × a × ... × a (n facteurs)  |  a⁰ = 1  |  a¹ = a',
      'Exposant négatif : 10⁻ⁿ = 1 ÷ 10ⁿ = 0,00...1 (n zéros au total)',
      '10ⁿ × 10ᵐ = 10ⁿ⁺ᵐ  |  10ⁿ ÷ 10ᵐ = 10ⁿ⁻ᵐ  |  (10ⁿ)ᵐ = 10ⁿˣᵐ',
      'Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Puissances & Notation Scientifique',
      slogan: 'Maîtriser les exposants positifs, négatifs et les grands nombres en F CFA',
      summaryBulletPoints: [
        '10ⁿ s’écrit 1 suivi de n zéros (ex : 10⁵ = 100 000).',
        '10⁻ⁿ s’écrit 0,0...1 avec le chiffre 1 au n-ième rang après la virgule (ex : 10⁻³ = 0,001).',
        'Quand on multiplie des puissances de même base, on ADDITIONNE les exposants.',
        'Quand on divise, on SOUSTRAIT l’exposant du bas à celui du haut.',
        'Écriture scientifique : déplacer la virgule pour n’avoir qu’un seul chiffre non nul (1 à 9) à gauche.',
      ],
      verticalFormulas: [
        {
          name: 'Calcul de puissances de 10',
          badge: '🚀',
          ruleTitle: 'Addition et soustraction des exposants',
          steps: [
            'A = (10⁴ × 10³) ÷ 10²',
            'A = 10⁴⁺³ ÷ 10²',
            'A = 10⁷ ÷ 10²',
            'A = 10⁷⁻² = 10⁵',
          ],
          resultHighlight: 'A = 10⁵ = 100 000',
          explanation: 'En haut on ajoute 4 + 3 = 7, puis on retire l’exposant du bas : 7 - 2 = 5.',
          tip: 'Si l’exposant du bas est négatif, attention : 10⁵ ÷ 10⁻² = 10⁵⁻⁽⁻²⁾ = 10⁷ !',
        },
        {
          name: 'Écriture scientifique d’un grand montant',
          badge: '💰',
          ruleTitle: '1 ≤ a < 10',
          steps: [
            'M = 450 000 F CFA',
            'Virgule décalée de 5 rangs à gauche',
            'M = 4,5 × 10⁵ F CFA',
          ],
          resultHighlight: '4,5 × 10⁵',
          explanation: 'On place la virgule après le 4 (qui est entre 1 et 9), puis on compte les 5 rangs.',
          tip: 'Grand nombre (> 10) ➔ exposant positif ; tout petit nombre (< 1) ➔ exposant négatif.',
        },
        {
          name: 'Piège des parenthèses négatives',
          badge: '⚠️',
          ruleTitle: 'Base avec ou sans ( )',
          steps: [
            '(-3)² = (-3) × (-3) = +9',
            '-3² = -(3 × 3) = -9',
          ],
          resultHighlight: '+9 ≠ -9',
          explanation: 'Sans parenthèses, le carré ne porte que sur le chiffre 3, et le signe moins reste devant.',
        },
      ],
      kokoTip: 'Le budget d’une école à Libreville est 2 400 000 F CFA : compte 6 chiffres après le 2 ➔ 2,4 × 10⁶ F CFA !',
      pitfallToAvoid: 'Calculer 2³ = 2 × 3 = 6 ! NON : 2³ = 2 × 2 × 2 = 8.',
    },
    sections: [
      {
        title: '1. Puissances d’un nombre relatif et puissances de 10',
        explanation: [
          'Une puissance sert à écrire de façon condensée un produit de facteurs tous égaux : 5⁴ = 5 × 5 × 5 × 5 = 625.',
          'Par définition, a⁰ = 1 (pour tout a ≠ 0) et a⁻ⁿ = 1 ÷ aⁿ.',
        ],
        rules: [
          {
            name: 'Règles sur les exposants',
            description: 'aⁿ × aᵐ = aⁿ⁺ᵐ | (aⁿ)ᵐ = aⁿˣᵐ | aⁿ ÷ aᵐ = aⁿ⁻ᵐ.',
            example: 'B = 10⁵ × 10⁻² | B = 10⁵⁺⁽⁻²⁾ | B = 10³ = 1 000',
            tip: 'La puissance est prioritaire sur la multiplication et l’addition !',
          },
        ],
        commonMistakes: [
          'Additionner les bases : 2³ × 2⁴ vaut 2⁷ (et PAS 4⁷).',
          'Confondre -5² (= -25) et (-5)² (= +25).',
        ],
      },
      {
        title: '2. L’écriture (ou notation) scientifique',
        explanation: [
          'En physique, astronomie ou économie (grands budgets en F CFA), on écrit tout nombre décimal positif sous la forme a × 10ⁿ avec 1 ≤ a < 10.',
        ],
        rules: [
          {
            name: 'Passer en notation scientifique',
            description: 'Un seul chiffre non nul avant la virgule, multiplié par la bonne puissance de 10.',
            example: '0,000 32 = 3,2 × 10⁻⁴ | 7 800 000 = 7,8 × 10⁶',
          },
        ],
      },
    ],
    exercises: pickExercises(
      CHAP1_EXERCISES,
      ['exo-4e-1-4', 'exo-4e-1-5', 'exo-4e-1-7', 'exo-4e-1-8', 'exo-4e-1-11', 'exo-4e-1-12', 'exo-4e-1-13', 'exo-4e-1-15', 'exo-4e-1-17', 'exo-4e-1-20'],
      'puissances-notation-scientifique'
    ),
  },

  // ==========================================
  // CHAPITRE 3 : FRACTIONS (TOUTES OPÉRATIONS)
  // ==========================================
  {
    id: 'fractions-operations',
    domainId: 'nombres-calculs',
    order: 3,
    title: 'Fractions : toutes opérations (+, −, ×, ÷)',
    badge: 'Chapitre 3 · 4ème',
    shortDesc: 'Mettre au même dénominateur pour additionner/soustraire, multiplier en ligne et diviser par l’inverse.',
    themeColor: '#0ea5e9',
    themeGradient: 'from-cyan-500 via-sky-500 to-teal-400',
    readingTimeMinutes: 13,
    visualizerType: 'relatifs-puissances',
    illustrationKey: 'fractions',
    bossMeta: { name: 'MAÎTRE DES INVERSEURS', emoji: '🍕', xp: 140 },
    kokoSpeech:
      'Ne confonds jamais ! Pour + et -, il FAUT le même dénominateur. Pour ×, tu multiplies tout droit en haut et en bas. Pour ÷, tu multiplies par l’INVERSE de la deuxième fraction !',
    keyFormulas: [
      'Addition / Soustraction : a/d + b/d = (a + b)/d (même dénominateur obligatoire)',
      'Multiplication : (a/b) × (c/d) = (a × c) ÷ (b × d)',
      'Inverse d’une fraction non nulle a/b ➔ b/a',
      'Division : (a/b) ÷ (c/d) = (a/b) × (d/c)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Opérations sur les Fractions',
      slogan: 'Savoir quand chercher un dénominateur commun et quand inverser',
      summaryBulletPoints: [
        'Addition & Soustraction : même dénominateur OBLIGATOIRE, on n’additionne jamais les dénominateurs !',
        'Multiplication : pas besoin de même dénominateur ! Numérateur × Numérateur et Dénominateur × Dénominateur.',
        'Division : on garde la 1ère fraction intacte, et on multiplie par l’INVERSE de la 2ème.',
        'Toujours penser à SIMPLIFIER (haut et bas par le même diviseur) à la fin !',
      ],
      verticalFormulas: [
        {
          name: 'Addition à dénominateurs différents',
          badge: '➕',
          ruleTitle: 'Dénominateur commun',
          steps: [
            'A = 2/3 + 1/6',
            'A = (2×2)/(3×2) + 1/6',
            'A = 4/6 + 1/6',
            'A = 5/6',
          ],
          resultHighlight: 'A = 5/6',
          explanation: 'On transforme 2/3 en 4/6 pour obtenir le même dénominateur 6.',
          tip: 'Multiplie toujours le haut ET le bas par le même nombre.',
        },
        {
          name: 'Division de deux fractions',
          badge: '🔄',
          ruleTitle: 'Multiplier par l’inverse',
          steps: [
            'B = (3/4) ÷ (5/2)',
            'B = (3/4) × (2/5)',
            'B = 6/20 = 3/10',
          ],
          resultHighlight: 'B = 3/10',
          explanation: 'Diviser par 5/2 revient à multiplier par son inverse 2/5.',
          tip: 'On ne retourne JAMAIS la première fraction !',
        },
      ],
      kokoTip: 'Prendre une fraction d’une somme en F CFA (ex : 3/4 de 20 000 F CFA), c’est MULTIPLIER : (3 ÷ 4) × 20 000 = 15 000 F CFA !',
      pitfallToAvoid: 'Écrire 1/2 + 1/3 = 2/5 ! Faux : on met sur 6 ➔ 3/6 + 2/6 = 5/6 !',
    },
    sections: [
      {
        title: '1. Additionner et soustraire deux fractions',
        explanation: [
          'On ne peut additionner ou soustraire que des parts de même taille : il faut donc d’abord réduire les fractions au MÊME DÉNOMINATEUR.',
          'Une fois le dénominateur commun obtenu, on additionne ou soustrait uniquement les numérateurs.',
        ],
        rules: [
          {
            name: 'Mise au même dénominateur',
            description: 'a/b = (a × k)/(b × k) pour tout k ≠ 0.',
            example: 'S = 3/4 - 5/12 | S = 9/12 - 5/12 | S = 4/12 = 1/3',
            tip: 'Simplifie toujours ton résultat final ! Ici 4/12 se divise par 4 en haut et en bas.',
          },
        ],
        commonMistakes: [
          'Additionner les dénominateurs entre eux : 3/4 + 1/4 = 4/4 = 1 (et PAS 4/8).',
        ],
      },
      {
        title: '2. Multiplier et diviser des fractions',
        explanation: [
          'Pour multiplier, on multiplie les numérateurs ensemble et les dénominateurs ensemble. On peut même simplifier avant de multiplier !',
          'Deux nombres sont inverses si leur produit vaut 1 (ex: 3/5 et 5/3). Diviser par un nombre non nul, c’est multiplier par son inverse.',
        ],
        rules: [
          {
            name: 'Multiplication & Quotient',
            description: '(a/b) × (c/d) = (a × c)/(b × d)   et   (a/b) ÷ (c/d) = (a/b) × (d/c).',
            example: 'Q = (5/6) ÷ (10/9) | Q = (5/6) × (9/10) | Q = 45/60 = 3/4',
          },
        ],
      },
    ],
    exercises: [
      ...pickExercises(
        CHAP1_EXERCISES,
        ['exo-4e-1-9', 'exo-4e-1-10', 'exo-4e-1-14', 'exo-4e-1-19'],
        'fractions-operations'
      ),
      mkQcm(
        'exo-4e-frac-extra-1',
        'fractions-operations',
        'Ex 5 : Soustraction de fractions à dénominateurs multiples',
        2,
        'Calculer et simplifier : C = 5/6 − 1/3.',
        ['1/2', '4/3', '2/3', '4/6'],
        '1/2',
        'Transforme 1/3 en sixièmes en multipliant haut et bas par 2.',
        'C = 5/6 − 2/6 = 3/6 = 1/2.',
        [
          {
            title: 'Mettre au même dénominateur 6',
            explanation: 'On multiplie 1/3 par 2 en haut et en bas : 1/3 = 2/6.',
            math: 'C = 5/6 - 2/6',
          },
          {
            title: 'Soustraire puis simplifier',
            explanation: '5 - 2 = 3, donc 3/6, qui se simplifie par 3 en 1/2.',
            math: 'C = 3/6 | C = 1/2',
            subResult: '1/2',
          },
        ],
        '🍰'
      ),
      mkNum(
        'exo-4e-frac-extra-2',
        'fractions-operations',
        'Ex 6 : Dépense en fractions au marché (F CFA)',
        4,
        'Moussa possède 24 000 F CFA. Il dépense les 3/8 pour ses cahiers, puis 1/3 du reste pour son repas.\nCombien lui reste-t-il à la fin (en F CFA) ?',
        '10000',
        'Calcule d’abord les 3/8 de 24 000 F, trouve ce qu’il reste après les cahiers, puis enlève 1/3 de ce reste.',
        'Il lui reste exactement 10 000 F CFA.',
        [
          {
            title: 'Coût des cahiers (3/8 de 24 000)',
            explanation: '(3 × 24 000) ÷ 8 = 9 000 F CFA. Il reste 24 000 − 9 000 = 15 000 F CFA.',
            math: 'Cahiers = 9 000 F | Reste 1 = 15 000 F',
          },
          {
            title: 'Repas et solde final',
            explanation: '1/3 de 15 000 = 5 000 F CFA. Solde = 15 000 − 5 000 = 10 000 F CFA.',
            math: 'Repas = 5 000 F | Final = 10 000 F CFA',
            subResult: '10 000 F CFA',
          },
        ],
        'F CFA',
        '🛍️'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 4 : CALCUL LITTÉRAL (DÉVELOPPEMENT & RÉDUCTION)
  // ==========================================
  {
    id: 'calcul-litteral-developpement',
    domainId: 'nombres-calculs',
    order: 4,
    title: 'Calcul littéral : développement et réduction',
    badge: 'Chapitre 4 · 4ème',
    shortDesc: 'Réduire par familles (x², x), supprimer les parenthèses, simple et double distributivité.',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-orange-400 to-yellow-400',
    readingTimeMinutes: 14,
    visualizerType: 'calcul-litteral',
    illustrationKey: 'calcul-litteral',
    bossMeta: { name: 'MAÎTRE ALGÉBRA', emoji: '🌱', xp: 160 },
    kokoSpeech:
      'Observe mon champ de manioc ! On ne mélange JAMAIS les x² avec les x ni avec les nombres purs. Et si un signe (-) est devant une parenthèse, il change tous les signes à l’intérieur !',
    keyFormulas: [
      'Réduire par famille : ax² + bx + c (ne jamais mélanger x² et x !)',
      'Signe (-) devant parenthèse : -(a - b) = -a + b',
      'Simple distributivité : k(a + b) = ka + kb',
      'Double distributivité : (a + b)(c + d) = ac + ad + bc + bd',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Développement & Réduction',
      slogan: 'Trier les familles et distribuer sans jamais oublier un signe',
      summaryBulletPoints: [
        'Conventions : 4 × x = 4x, x × x = x², 1x = x.',
        'On additionne les x² ensemble, les x ensemble, les nombres seuls ensemble.',
        'Signe (-) devant ( ) : on supprime les parenthèses en inversant TOUS les signes.',
        'Simple distributivité : k(a - b) = ka - kb.',
        'Double distributivité : 4 flèches ➔ 4 termes, puis on réduit les termes en x du milieu !',
      ],
      verticalFormulas: [
        {
          name: 'Simple distributivité',
          badge: '🏹',
          ruleTitle: 'k(a - b) = ka - kb',
          steps: [
            'A = 4(2x - 3)',
            'A = 4 × 2x + 4 × (-3)',
            'A = 8x - 12',
          ],
          resultHighlight: 'A = 8x - 12',
          explanation: 'Le nombre 4 multiplie chacun des deux termes dans la parenthèse.',
          tip: 'Trace mentalement deux flèches depuis 4 vers 2x et vers -3.',
        },
        {
          name: 'Double distributivité',
          badge: '🌱',
          ruleTitle: '(a + b)(c + d)',
          steps: [
            'B = (x + 3)(x + 2)',
            'B = x² + 2x + 3x + 6',
            'B = x² + 5x + 6',
          ],
          resultHighlight: 'B = x² + 5x + 6',
          explanation: 'On obtient 4 produits puis on regroupe +2x + 3x = +5x.',
          tip: 'Vérifie qu’il y a bien 4 termes avant de réduire !',
        },
        {
          name: 'Suppression de parenthèses avec (-)',
          badge: '⚠️',
          ruleTitle: 'Changement de signe',
          steps: [
            'C = 10 - (4x - 3)',
            'C = 10 - 4x + 3',
            'C = 13 - 4x',
          ],
          resultHighlight: 'C = 13 - 4x',
          explanation: 'Le signe (-) devant la parenthèse transforme +4x en -4x et -3 en +3.',
        },
      ],
      kokoTip: 'Pour vérifier ton développement en DS, remplace x par 1 (ou 2) dans l’expression de départ et dans ton résultat : tu dois trouver exactement le même nombre !',
      pitfallToAvoid: 'Écrire 3x + 2 = 5x ! On ne peut pas additionner des x et des nombres sans x.',
    },
    sections: [
      {
        title: '1. Réduire et supprimer les parenthèses',
        explanation: [
          'Réduire une somme littérale, c’est regrouper les termes de même nature (les x² ensemble, les x ensemble, les constantes ensemble).',
          'Une parenthèse précédée de (+) s’enlève sans rien changer. Précédée de (-), on change tous les signes à l’intérieur.',
        ],
        rules: [
          {
            name: 'Regroupement par familles',
            description: 'x + x = 2x alors que x × x = x².',
            example: 'E = 5x² + 3x - 2x² + x - 7 | E = (5 - 2)x² + (3 + 1)x - 7 | E = 3x² + 4x - 7',
          },
        ],
        commonMistakes: [
          'Écrire x + x = x² (faux, x + x = 2x).',
          'Oublier de changer le 2ème signe dans -(2x - 5) = -2x + 5.',
        ],
      },
      {
        title: '2. Simple et Double Distributivité',
        explanation: [
          'Développer signifie transformer un produit en une somme ou une différence.',
          'Dans la double distributivité (a + b)(c + d), chaque terme de la 1ère parenthèse multiplie chaque terme de la 2ème.',
        ],
        rules: [
          {
            name: 'Formules de développement',
            description: 'k(a + b) = ka + kb   |   (a + b)(c + d) = ac + ad + bc + bd.',
            example: 'F = (x - 4)(x + 5) | F = x² + 5x - 4x - 20 | F = x² + x - 20',
          },
        ],
      },
    ],
    exercises: pickExercises(
      CHAP2_EXERCISES,
      [
        'exo-4e-2-1', 'exo-4e-2-2', 'exo-4e-2-3', 'exo-4e-2-4', 'exo-4e-2-5',
        'exo-4e-2-6', 'exo-4e-2-7', 'exo-4e-2-8', 'exo-4e-2-10', 'exo-4e-2-11',
        'exo-4e-2-12', 'exo-4e-2-14', 'exo-4e-2-15', 'exo-4e-2-16', 'exo-4e-2-17',
        'exo-4e-2-18', 'exo-4e-2-19', 'exo-4e-2-20',
      ],
      'calcul-litteral-developpement'
    ),
  },

  // ==========================================
  // CHAPITRE 5 : ÉQUATIONS DU 1ER DEGRÉ
  // ==========================================
  {
    id: 'equations-premier-degre',
    domainId: 'nombres-calculs',
    order: 5,
    title: 'Équations du premier degré à une inconnue',
    badge: 'Chapitre 5 · 4ème',
    shortDesc: 'Règle de la balance, transposition, ax + b = cx + d et mise en équation de problèmes en F CFA.',
    themeColor: '#ec4899',
    themeGradient: 'from-pink-500 via-rose-400 to-amber-400',
    readingTimeMinutes: 14,
    visualizerType: 'equations',
    illustrationKey: 'equations',
    bossMeta: { name: 'GARDIEN DE LA BALANCE', emoji: '⚖️', xp: 180 },
    kokoSpeech:
      'La balance doit toujours rester équilibrée ! Quand un terme change de côté du signe =, + devient -, et à la toute fin pour passer de ax = b à x, on DIVISE par a !',
    keyFormulas: [
      'Balance : même opération des deux côtés de =',
      'Transposition : +b passe en -b ; -b passe en +b',
      'Division finale : si ax = b (a ≠ 0), alors x = b ÷ a',
      'Problème : 1. Soit x... ➔ 2. Équation ➔ 3. Résolution ➔ 4. Phrase réponse',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Équations du 1er Degré',
      slogan: 'Isoler l’inconnue x verticalement étape par étape sans erreur',
      summaryBulletPoints: [
        'Si l’équation contient des parenthèses, développe d’abord.',
        'Passe tous les termes avec x à gauche et les nombres seuls à droite (en changeant leur signe !).',
        'Réduis chaque membre pour arriver à la forme ax = b.',
        'Divise ensuite par le coefficient devant x : x = b ÷ a.',
        'Vérifie toujours la solution en remplaçant x dans l’équation de départ !',
      ],
      verticalFormulas: [
        {
          name: 'Équation ax + b = c',
          badge: '⚖️',
          steps: ['3x + 5 = 20', '3x = 20 - 5', '3x = 15', 'x = 15 ÷ 3 = 5'],
          resultHighlight: 'x = 5',
          explanation: 'On isole 3x en passant +5 à droite (-5), puis on divise par 3.',
        },
        {
          name: 'Inconnue des 2 côtés',
          badge: '🔄',
          steps: ['5x + 3 = 2x + 18', '5x - 2x = 18 - 3', '3x = 15', 'x = 5'],
          resultHighlight: 'x = 5',
          explanation: 'Le +2x passe à gauche en -2x, et le +3 passe à droite en -3.',
        },
        {
          name: 'Problème Mont-Bouët (F CFA)',
          badge: '🧺',
          steps: ['4x + 2 500 = 6 500', '4x = 4 000', 'x = 1 000 F CFA'],
          resultHighlight: 'x = 1 000 F CFA',
          explanation: 'Un tas d’atangas coûte 1 000 F CFA.',
        },
      ],
      kokoTip: 'En devoir, teste toujours ta réponse : si 5x + 3 = 28 et 2x + 18 = 28 pour x = 5, tu es sûr d’avoir 20/20 à cette question !',
      pitfallToAvoid: 'À l’étape 4x = 20, écrire x = 20 - 4 = 16 au lieu de diviser : x = 20 ÷ 4 = 5 !',
    },
    sections: [
      {
        title: '1. Règle de la Balance & Résolution générale',
        explanation: [
          'Une équation est une égalité contenant une lettre (souvent x) appelée inconnue.',
          'On a le droit d’ajouter, soustraire, multiplier ou diviser les DEUX membres par un même nombre (non nul pour ÷ et ×).',
        ],
        rules: [
          {
            name: 'Méthode en 4 lignes',
            description: 'Développer ➔ Regrouper (x à gauche) ➔ Réduire ➔ Diviser.',
            example: '2(x - 3) = 14 | 2x - 6 = 14 | 2x = 14 + 6 | 2x = 20 | x = 10',
          },
        ],
        commonMistakes: [
          'Oublier de distribuer avant de regrouper les x.',
          'Oublier le signe moins du coefficient lors de la division : -3x = 12 donne x = 12 ÷ (-3) = -4.',
        ],
      },
      {
        title: '2. Mise en équation de problèmes concrets',
        explanation: [
          'Pour résoudre un problème d’achat au marché en F CFA ou de géométrie : on choisit l’inconnue (« Soit x... »), on traduit les phrases en égalité, on résout puis on vérifie.',
        ],
        rules: [
          {
            name: 'Traductions classiques',
            description: 'Double ➔ 2x ; Triple ➔ 3x ; Augmenté de 500 ➔ + 500 ; Diminué de 200 ➔ - 200.',
            example: '3x + 500 = 2 000 | 3x = 1 500 | x = 500 F CFA',
          },
        ],
      },
    ],
    exercises: pickExercises(
      CHAP3_EXERCISES,
      CHAP3_EXERCISES.map((e) => e.id),
      'equations-premier-degre'
    ),
  },

  // ==========================================
  // CHAPITRE 6 : RACINE CARRÉE
  // ==========================================
  {
    id: 'racine-carree',
    domainId: 'nombres-calculs',
    order: 6,
    title: 'Racine carrée : définition et calculs',
    badge: 'Chapitre 6 · 4ème',
    shortDesc: 'Carrés parfaits de 1 à 15, définition de √a, propriétés √(a×b) et encadrement entre deux entiers.',
    themeColor: '#7c3aed',
    themeGradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    readingTimeMinutes: 11,
    visualizerType: 'pythagore',
    illustrationKey: 'racine-carree',
    bossMeta: { name: 'GARDIEN DU RADICAL √', emoji: '√', xp: 150 },
    kokoSpeech:
      'La racine carrée √a est l’opération INVERSE du carré ! Chercher √49, c’est te demander : quel nombre positif multiplié par lui-même donne 49 ? C’est 7 !',
    keyFormulas: [
      'Pour a ≥ 0 : (√a)² = a  et  √(a²) = a',
      'Produit : √(a × b) = √a × √b  (a ≥ 0, b ≥ 0)',
      'Quotient : √(a ÷ b) = √a ÷ √b  (a ≥ 0, b > 0)',
      'PIÈGE FATAL : √(a + b) ≠ √a + √b  !!',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Racine Carrée (√)',
      slogan: 'Connaître les carrés parfaits et les règles de produit/quotient',
      summaryBulletPoints: [
        '√a n’existe dans les nombres réels que si a ≥ 0 (jamais de racine carrée d’un nombre négatif !).',
        'Liste d’or : √1=1 ; √4=2 ; √9=3 ; √16=4 ; √25=5 ; √36=6 ; √49=7 ; √64=8 ; √81=9 ; √100=10 ; √121=11 ; √144=12 ; √169=13.',
        'On peut séparer ou regrouper sous un même radical uniquement pour × et ÷ (JAMAIS pour + et -).',
        'Pour simplifier √a : extrais le plus grand carré parfait (ex: √50 = √(25×2) = 5√2).',
      ],
      verticalFormulas: [
        {
          name: 'Simplifier une racine carrée',
          badge: '✨',
          steps: ['√50 = √(25 × 2)', '= √25 × √2', '= 5√2'],
          resultHighlight: '5√2',
          explanation: 'On repère le carré parfait 25 qui divise 50, car √25 = 5.',
        },
        {
          name: 'Produit de racines carrées',
          badge: '✖️',
          steps: ['√3 × √12 = √(3 × 12)', '= √36', '= 6'],
          resultHighlight: '6',
          explanation: 'On regroupe 3 × 12 = 36 sous un seul radical pour trouver un carré parfait.',
        },
        {
          name: 'Encadrer √30 entre deux entiers',
          badge: '📏',
          steps: ['25 < 30 < 36', '√25 < √30 < √36', '5 < √30 < 6'],
          resultHighlight: 'Entre 5 et 6',
          explanation: 'On encadre 30 par les deux carrés parfaits les plus proches (25 et 36).',
        },
      ],
      kokoTip: 'Si un carré a une aire de 81 m² au Gabon, la longueur de son côté mesure √81 = 9 m !',
      pitfallToAvoid: 'Écrire √(9 + 16) = √9 + √16 = 3 + 4 = 7 ! FAUX : √(9 + 16) = √25 = 5 !',
    },
    sections: [
      {
        title: '1. Définition et Carrés Parfaits',
        explanation: [
          'La racine carrée d’un nombre positif a, notée √a, est le seul nombre POSITIF dont le carré vaut a.',
          'Par exemple, √144 = 12 car 12 ≥ 0 et 12² = 144.',
        ],
        rules: [
          {
            name: 'Propriété fondamentale',
            description: 'Pour tout nombre positif a : (√a)² = a et √(a²) = a.',
            example: '√64 = 8 | (√7)² = 7 | √(9²) = 9',
          },
        ],
        commonMistakes: [
          'Écrire √(-9) = -3 (impossible, un carré est toujours positif !).',
        ],
      },
      {
        title: '2. Règles de calcul et pièges d’addition',
        explanation: [
          'La racine carrée est compatible avec la multiplication et la division, mais JAMAIS avec l’addition ou la soustraction.',
        ],
        rules: [
          {
            name: 'Produit & Quotient sous radical',
            description: '√(a × b) = √a × √b  et  √(a/b) = √a / √b.',
            example: 'A = √2 × √8 | A = √(2 × 8) = √16 | A = 4',
          },
        ],
      },
    ],
    exercises: [
      ...pickExercises(CHAP4_EXERCISES, ['exo-4e-4-2', 'exo-4e-4-8'], 'racine-carree'),
      mkQcm(
        'exo-4e-rac-3',
        'racine-carree',
        'Ex 3 : Produit de deux racines carrées',
        2,
        'Calculer la valeur exacte de A = √2 × √18.',
        ['6', '20', '36', '9'],
        '6',
        'Regroupe sous un seul radical : √(2 × 18).',
        'A = √36 = 6.',
        [
          { title: 'Regrouper le produit', explanation: '√a × √b = √(a × b).', math: 'A = √(2 × 18) = √36' },
          { title: 'Extraire la racine', explanation: '6² = 36.', math: 'A = 6', subResult: '6' },
        ],
        '√'
      ),
      mkQcm(
        'exo-4e-rac-4',
        'racine-carree',
        'Ex 4 : Piège classique √(a + b)',
        2,
        'Que vaut l’expression B = √(9 + 16) ?',
        ['5', '7', '25', '12,5'],
        '5',
        'Calcule TOUJOURS l’addition à l’intérieur de la racine carrée en premier !',
        'B = √25 = 5 (et surtout pas √9 + √16 = 7 !).',
        [
          { title: 'Additionner sous le radical', explanation: '9 + 16 = 25.', math: 'B = √25' },
          { title: 'Calculer la racine carrée', explanation: '√25 = 5.', math: 'B = 5', subResult: '5' },
        ],
        '⚠️'
      ),
      mkQcm(
        'exo-4e-rac-5',
        'racine-carree',
        'Ex 5 : Simplifier sous la forme a√b',
        3,
        'Écrire √75 sous la forme a√b avec b le plus petit possible.',
        ['5√3', '3√5', '25√3', '15√5'],
        '5√3',
        'Décompose 75 comme le produit d’un carré parfait (25) par 3.',
        '√75 = √(25 × 3) = √25 × √3 = 5√3.',
        [
          { title: 'Trouver le plus grand carré parfait', explanation: '75 = 25 × 3.', math: '√75 = √(25 × 3)' },
          { title: 'Sortir √25 = 5', explanation: '√25 × √3 = 5√3.', math: '= 5√3', subResult: '5√3' },
        ],
        '✨'
      ),
      mkNum(
        'exo-4e-rac-6',
        'racine-carree',
        'Ex 6 : Côté d’un terrain carré à Libreville',
        4,
        'Un terrain carré destiné à un potager scolaire a une aire de 196 m².\nQuelle est la longueur d’un côté de ce carré (en mètres) ?',
        '14',
        'Aire du carré = côté × côté = côté². Prends la racine carrée de 196.',
        'Le côté mesure √196 = 14 m.',
        [
          { title: 'Poser l’équation d’aire', explanation: 'c² = 196.', math: 'c = √196' },
          { title: 'Calculer √196', explanation: '14 × 14 = 196.', math: 'c = 14 m', subResult: '14 m' },
        ],
        'm',
        '🌱'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 7 : FACTORISATION & IDENTITÉS REMARQUABLES
  // ==========================================
  {
    id: 'factorisation-identites-remarquables',
    domainId: 'nombres-calculs',
    order: 7,
    title: 'Factorisation et identités remarquables',
    badge: 'Chapitre 7 · 4ème',
    shortDesc: 'Mettre un facteur commun devant, développer et factoriser avec (a+b)², (a-b)² et a²-b².',
    themeColor: '#d97706',
    themeGradient: 'from-amber-600 via-yellow-500 to-lime-400',
    readingTimeMinutes: 14,
    visualizerType: 'calcul-litteral',
    illustrationKey: 'identites-factorisation',
    bossMeta: { name: 'ROI DE LA FACTORISATION', emoji: '📦', xp: 170 },
    kokoSpeech:
      'Factoriser, c’est remettre les parenthèses ! Cherche le facteur commun OU reconnais l’une des 3 identités remarquables : (a+b)², (a-b)² et surtout a² - b² = (a+b)(a-b) !',
    keyFormulas: [
      'Facteur commun : ka + kb = k(a + b)',
      'Identité 1 : (a + b)² = a² + 2ab + b²',
      'Identité 2 : (a - b)² = a² - 2ab + b²',
      'Identité 3 (Différence de carrés) : a² - b² = (a + b)(a - b)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Factorisation & Identités Remarquables',
      slogan: 'Savoir transformer une somme en produit en 2 secondes',
      summaryBulletPoints: [
        'Toujours chercher d’abord un facteur commun (nombre, lettre x ou parenthèse entière).',
        'Dans (a + b)², ne JAMAIS oublier le double produit +2ab au milieu !',
        'Pour factoriser x² - 25 : reconnais a² - b² = x² - 5² = (x + 5)(x - 5).',
        'Astuce calcul mental rapide : 101² = (100 + 1)² = 10 000 + 200 + 1 = 10 201.',
      ],
      verticalFormulas: [
        {
          name: 'Factorisation par facteur commun',
          badge: '📦',
          steps: ['A = 6x + 18', 'A = 6 × x + 6 × 3', 'A = 6(x + 3)'],
          resultHighlight: '6(x + 3)',
          explanation: '6 divise 6x et 18 : on le place en facteur devant.',
        },
        {
          name: 'Développer (x + 5)²',
          badge: '⭐',
          steps: ['B = (x + 5)²', 'B = x² + 2×x×5 + 5²', 'B = x² + 10x + 25'],
          resultHighlight: 'x² + 10x + 25',
          explanation: 'On applique (a + b)² = a² + 2ab + b² avec a = x et b = 5.',
          tip: 'N’oublie pas le 10x ! (x + 5)² ≠ x² + 25.',
        },
        {
          name: 'Factoriser a² - b²',
          badge: '🔥',
          steps: ['C = x² - 49', 'C = x² - 7²', 'C = (x + 7)(x - 7)'],
          resultHighlight: '(x + 7)(x - 7)',
          explanation: '49 est le carré de 7 : différence de deux carrés.',
        },
      ],
      kokoTip: 'Pour calculer de tête 21 × 19 : vois (20 + 1)(20 - 1) = 20² - 1² = 400 - 1 = 399 ! Magique !',
      pitfallToAvoid: 'Écrire (x + 3)² = x² + 9 ! Il manque le double produit +6x !',
    },
    sections: [
      {
        title: '1. Factoriser avec un facteur commun',
        explanation: [
          'Factoriser une somme, c’est l’écrire sous forme d’un produit.',
          'On cherche le plus grand diviseur ou la lettre commune à tous les termes.',
        ],
        rules: [
          {
            name: 'Distributivité à l’envers',
            description: 'ka + kb = k(a + b)  |  ka - kb = k(a - b).',
            example: 'D = 12x² - 8x | D = 4x × 3x - 4x × 2 | D = 4x(3x - 2)',
          },
        ],
      },
      {
        title: '2. Les 3 Identités Remarquables',
        explanation: [
          'Elles permettent de développer et de factoriser très rapidement des expressions quadratiques.',
        ],
        rules: [
          {
            name: 'Les 3 formules incontournables',
            description: '(a + b)² = a² + 2ab + b²  |  (a - b)² = a² - 2ab + b²  |  a² - b² = (a + b)(a - b).',
            example: 'E = (2x - 3)² | E = (2x)² - 2(2x)(3) + 3² | E = 4x² - 12x + 9',
          },
        ],
        commonMistakes: [
          'Oublier les parenthèses pour (2x)² : (2x)² = 4x² (et PAS 2x²).',
        ],
      },
    ],
    exercises: [
      ...pickExercises(CHAP2_EXERCISES, ['exo-4e-2-9', 'exo-4e-2-13'], 'factorisation-identites-remarquables'),
      mkQcm(
        'exo-4e-fact-3',
        'factorisation-identites-remarquables',
        'Ex 3 : Développer avec (a + b)²',
        2,
        'Développer l’identité remarquable (x + 6)².',
        ['x² + 12x + 36', 'x² + 36', 'x² + 6x + 36', '2x + 12'],
        'x² + 12x + 36',
        'Utilise (a + b)² = a² + 2ab + b² avec a = x et b = 6.',
        '(x + 6)² = x² + 12x + 36.',
        [
          { title: 'Appliquer a² + 2ab + b²', explanation: '2 × x × 6 = 12x et 6² = 36.', math: 'x² + 2×x×6 + 6²' },
          { title: 'Réduire', explanation: 'On obtient x² + 12x + 36.', math: 'x² + 12x + 36', subResult: 'x² + 12x + 36' },
        ],
        '⭐'
      ),
      mkQcm(
        'exo-4e-fact-4',
        'factorisation-identites-remarquables',
        'Ex 4 : Factoriser avec a² − b²',
        3,
        'Factoriser l’expression F = x² − 81.',
        ['(x + 9)(x − 9)', '(x − 9)²', '(x + 81)(x − 1)', 'x(x − 81)'],
        '(x + 9)(x − 9)',
        '81 = 9². C’est a² − b² = (a + b)(a − b).',
        'F = (x + 9)(x − 9).',
        [
          { title: 'Reconnaître les deux carrés', explanation: 'x² − 81 = x² − 9².', math: 'x² - 9²' },
          { title: 'Factoriser', explanation: 'a² − b² = (a + b)(a − b).', math: '(x + 9)(x - 9)', subResult: '(x + 9)(x - 9)' },
        ],
        '🔥'
      ),
      mkNum(
        'exo-4e-fact-5',
        'factorisation-identites-remarquables',
        'Ex 5 : Calcul malin grâce à (a+b)(a−b)',
        3,
        'En utilisant a² − b², calculer de tête : 31 × 29.',
        '899',
        '31 × 29 = (30 + 1)(30 − 1) = 30² − 1².',
        '31 × 29 = 900 − 1 = 899.',
        [
          { title: 'Écrire comme (a+b)(a−b)', explanation: '31 = 30 + 1 et 29 = 30 − 1.', math: '(30 + 1)(30 - 1)' },
          { title: 'Calculer 30² − 1²', explanation: '900 − 1 = 899.', math: '30² - 1² = 900 - 1 = 899', subResult: '899' },
        ],
        undefined,
        '⚡'
      ),
      mkQcm(
        'exo-4e-fact-6',
        'factorisation-identites-remarquables',
        'Ex 6 : Factoriser une expression à facteur commun composé',
        4,
        'Factoriser G = 15x + 25 (économie en F CFA par élève).',
        ['5(3x + 5)', '5(3x + 25)', '3(5x + 5)', '15(x + 10)'],
        '5(3x + 5)',
        '5 divise 15 et 25.',
        'G = 5 × 3x + 5 × 5 = 5(3x + 5).',
        [
          { title: 'Repérer le facteur commun 5', explanation: '15 = 5 × 3 et 25 = 5 × 5.', math: 'G = 5×3x + 5×5' },
          { title: 'Factoriser', explanation: 'On place 5 devant la parenthèse.', math: 'G = 5(3x + 5)', subResult: '5(3x + 5)' },
        ],
        '📦'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 8 : INÉQUATIONS DU 1ER DEGRÉ
  // ==========================================
  {
    id: 'inequations-premier-degre',
    domainId: 'nombres-calculs',
    order: 8,
    title: 'Inéquations du premier degré à une inconnue',
    badge: 'Chapitre 8 · 4ème',
    shortDesc: 'Symboles <, >, ≤, ≥, règle d’inversion lors d’une division par un négatif et droite graduée.',
    themeColor: '#f43f5e',
    themeGradient: 'from-rose-500 via-pink-500 to-orange-400',
    readingTimeMinutes: 12,
    visualizerType: 'equations',
    illustrationKey: 'inequations',
    bossMeta: { name: 'GARDIEN DES INÉGALITÉS', emoji: '↕️', xp: 160 },
    kokoSpeech:
      'Attention à la RÈGLE D’OR des inéquations : quand tu multiplies ou divises les deux côtés par un nombre NÉGATIF, le sens du symbole (< ou >) se RETOURNE !',
    keyFormulas: [
      'Addition / Soustraction : ne change JAMAIS le sens (< reste <)',
      'Multiplier / Diviser par k > 0 : le sens NE CHANGE PAS',
      'Multiplier / Diviser par k < 0 : LE SENS S’INVERSE (< devient > ; ≤ devient ≥)',
      'Représentation : crochet tourné vers les solutions si ≤ ou ≥, sinon tourné vers l’extérieur',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Inéquations du 1er Degré',
      slogan: 'Résoudre comme une équation tout en surveillant le signe du diviseur !',
      summaryBulletPoints: [
        'x < 4 signifie « x strictement inférieur à 4 » (4 n’est pas solution).',
        'x ≤ 4 signifie « x inférieur ou égal à 4 » (4 est solution).',
        'Transposer +b en -b de l’autre côté ne change pas le sens de l’inégalité.',
        'RÈGLE CRITIQUE : dès que tu divises par un nombre NÉGATIF (ex: -2x < 10), retourne le signe (x > -5) !',
      ],
      verticalFormulas: [
        {
          name: 'Inéquation standard (diviseur positif)',
          badge: '📏',
          steps: ['3x + 2 ≤ 14', '3x ≤ 14 - 2', '3x ≤ 12', 'x ≤ 12 ÷ 3 ➔ x ≤ 4'],
          resultHighlight: 'x ≤ 4',
          explanation: 'On divise par +3 (positif) : le symbole ≤ reste dans le même sens.',
        },
        {
          name: 'Inéquation piège (diviseur NÉGATIF !)',
          badge: '🔄',
          steps: ['-2x + 5 < 11', '-2x < 11 - 5', '-2x < 6', 'x > 6 ÷ (-2)  [Sens inversé !]', 'x > -3'],
          resultHighlight: 'x > -3',
          explanation: 'En divisant par -2 (négatif), le signe < bascule obligatoirement en >.',
          tip: 'Vérifie avec x = 0 : -2(0) + 5 = 5 < 11 (vrai !), donc 0 > -3 est bien dans les solutions.',
        },
      ],
      kokoTip: 'En budget en F CFA : « ne pas dépasser 10 000 F CFA » se traduit toujours par « ≤ 10 000 » !',
      pitfallToAvoid: 'Oublier de retourner le symbole < en > quand on divise par un coefficient négatif (-2x < 6).',
    },
    sections: [
      {
        title: '1. Comparer et résoudre une inéquation',
        explanation: [
          'Une inéquation contient une inconnue x et un symbole d’inégalité (<, >, ≤, ≥). Contrairement à une équation qui a souvent une seule solution, une inéquation a généralement une INFINITÉ de solutions (un intervalle).',
        ],
        rules: [
          {
            name: 'La règle du diviseur négatif',
            description: 'Si a < 0, alors ax < b ⟺ x > b ÷ a.',
            example: '-5x ≥ 20 | On divise par -5 (< 0), donc ≥ devient ≤ | x ≤ 20 ÷ (-5) | x ≤ -4',
          },
        ],
        commonMistakes: [
          'Garder le même sens quand on divise par -5.',
        ],
      },
      {
        title: '2. Traduire un problème de budget en F CFA',
        explanation: [
          '« Au maximum 15 000 F » s’écrit ≤ 15 000. « Strictement plus de 5 cahiers » s’écrit > 5.',
        ],
        rules: [
          {
            name: 'Problème de choix de forfait ou achat',
            description: 'On résout l’inéquation puis on interprète avec un nombre entier si on compte des objets.',
            example: '1 500x + 2 000 ≤ 10 000 | 1 500x ≤ 8 000 | x ≤ 5,33 ➔ Au maximum 5 articles !',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-ineq-1',
        'inequations-premier-degre',
        'Ex 1 : Tester une solution d’inéquation',
        1,
        'Le nombre x = 3 est-il solution de l’inéquation 4x − 2 > 11 ?',
        ['Non, car 10 n’est pas > 11', 'Oui, car 10 < 11', 'Oui, car 4×3 = 12', 'Impossible à savoir'],
        'Non, car 10 n’est pas > 11',
        'Remplace x par 3 dans 4x − 2.',
        '4 × 3 − 2 = 12 − 2 = 10, et 10 n’est pas strictement supérieur à 11.',
        [
          { title: 'Substituer x = 3', explanation: 'Calculer 4(3) − 2.', math: '4 × 3 - 2 = 10' },
          { title: 'Comparer à 11', explanation: '10 > 11 est faux.', math: '10 ≤ 11 ➔ Non', subResult: 'Non' },
        ],
        '🔎'
      ),
      mkQcm(
        'exo-4e-ineq-2',
        'inequations-premier-degre',
        'Ex 2 : Inéquation simple (sens conservé)',
        2,
        'Résoudre l’inéquation 5x − 3 ≤ 17.',
        ['x ≤ 4', 'x ≥ 4', 'x ≤ 2,8', 'x < 4'],
        'x ≤ 4',
        'Ajoute 3 des deux côtés puis divise par +5 (positif).',
        '5x ≤ 20 donc x ≤ 4.',
        [
          { title: 'Transposer -3', explanation: '5x ≤ 17 + 3 = 20.', math: '5x ≤ 20' },
          { title: 'Diviser par +5', explanation: '+5 > 0 donc ≤ reste ≤.', math: 'x ≤ 4', subResult: 'x ≤ 4' },
        ],
        '📏'
      ),
      mkQcm(
        'exo-4e-ineq-3',
        'inequations-premier-degre',
        'Ex 3 : Piège du diviseur négatif',
        3,
        'Résoudre l’inéquation : −3x > 12.',
        ['x < −4', 'x > −4', 'x < 4', 'x > 4'],
        'x < −4',
        'En divisant par -3 (négatif), le symbole > bascule en < !',
        'x < 12 ÷ (-3) soit x < -4.',
        [
          { title: 'Diviser par -3 (< 0)', explanation: 'Le sens > s’inverse en <.', math: 'x < 12 ÷ (-3)' },
          { title: 'Conclure', explanation: '12 ÷ (-3) = -4.', math: 'x < -4', subResult: 'x < -4' },
        ],
        '🔄'
      ),
      mkQcm(
        'exo-4e-ineq-4',
        'inequations-premier-degre',
        'Ex 4 : Inéquation avec x des deux côtés',
        3,
        'Résoudre : 6x − 5 ≥ 2x + 7.',
        ['x ≥ 3', 'x ≤ 3', 'x ≥ 0,5', 'x ≤ −3'],
        'x ≥ 3',
        'Regroupe les x à gauche : 6x − 2x ≥ 7 + 5.',
        '4x ≥ 12 donc x ≥ 3.',
        [
          { title: 'Regrouper les x et nombres', explanation: '6x - 2x ≥ 7 + 5.', math: '4x ≥ 12' },
          { title: 'Diviser par 4 (> 0)', explanation: 'x ≥ 3.', math: 'x ≥ 3', subResult: 'x ≥ 3' },
        ],
        '⚖️'
      ),
      mkNum(
        'exo-4e-ineq-5',
        'inequations-premier-degre',
        'Ex 5 : Budget cahiers au marché en F CFA',
        4,
        'Un élève a 7 500 F CFA. Il achète un livre à 2 500 F CFA et des stylos à 400 F CFA pièce.\nQuel est le nombre MAXIMUM entier de stylos qu’il peut acheter ?',
        '12',
        'Pose 400x + 2 500 ≤ 7 500 et résous pour x.',
        '400x ≤ 5 000 ➔ x ≤ 12,5 ➔ Maximum 12 stylos.',
        [
          { title: 'Écrire l’inéquation du budget', explanation: 'Le total ne doit pas dépasser 7 500 F.', math: '400x + 2 500 ≤ 7 500' },
          { title: 'Résoudre et arrondir en dessous', explanation: '400x ≤ 5 000 ➔ x ≤ 12,5.', math: 'x ≤ 12,5 ➔ 12 stylos', subResult: '12' },
        ],
        'stylos',
        '✏️'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 9 : NOMBRES PREMIERS, DIVISIBILITÉ & PGCD
  // ==========================================
  {
    id: 'nombres-premiers-divisibilite',
    domainId: 'nombres-calculs',
    order: 9,
    title: 'Nombres premiers, divisibilité et PGCD',
    badge: 'Chapitre 9 · 4ème',
    shortDesc: 'Critères de divisibilité (2, 3, 5, 9), crible des nombres premiers, décomposition et PGCD.',
    themeColor: '#14b8a6',
    themeGradient: 'from-teal-500 via-emerald-500 to-green-400',
    readingTimeMinutes: 12,
    visualizerType: 'relatifs-puissances',
    illustrationKey: 'nombres-premiers',
    bossMeta: { name: 'SPHINX ARITHMÉTIQUE', emoji: '🔢', xp: 150 },
    kokoSpeech:
      'Un nombre premier n’a que DEUX diviseurs : 1 et lui-même ! Retiens le début : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29... Attention : 1 n’est PAS premier !',
    keyFormulas: [
      'Divisible par 3 ou 9 : la SOMME des chiffres est divisible par 3 ou 9',
      'Nombre premier : exactement 2 diviseurs distincts (1 et lui-même)',
      'Décomposition unique en produit de facteurs premiers (ex: 60 = 2² × 3 × 5)',
      'PGCD(a, b) : le Plus Grand Commun Diviseur (sert à faire des lots équitables ou rendre une fraction irréductible)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Nombres Premiers & PGCD',
      slogan: 'Décomposer en facteurs premiers pour simplifier et partager équitablement',
      summaryBulletPoints: [
        '2 est le SEUL nombre premier pair ! 1 n’est pas premier (il n’a qu’un diviseur).',
        'Critère par 2 : termine par 0, 2, 4, 6, 8. Par 5 : termine par 0 ou 5.',
        'Critère par 3 (ou 9) : additionne tous les chiffres (ex: 126 ➔ 1+2+6 = 9, divisible par 3 et 9).',
        'Pour décomposer un nombre : divise successivement par 2, puis 3, puis 5, puis 7, etc.',
        'PGCD en problème : mot-clé « plus grand nombre de paquets identiques sans reste ».',
      ],
      verticalFormulas: [
        {
          name: 'Décomposition en facteurs premiers',
          badge: '🧬',
          steps: ['60 ÷ 2 = 30', '30 ÷ 2 = 15', '15 ÷ 3 = 5', '5 ÷ 5 = 1', '60 = 2² × 3 × 5'],
          resultHighlight: '60 = 2² × 3 × 5',
          explanation: 'On divise dans l’ordre par les plus petits nombres premiers (2, 3, 5...).',
        },
        {
          name: 'Simplifier une fraction avec le PGCD',
          badge: '✂️',
          steps: ['PGCD(42 ; 70) = 14', '42 ÷ 14 = 3', '70 ÷ 14 = 5', '42/70 = 3/5'],
          resultHighlight: '3/5 (irréductible)',
          explanation: 'En divisant numérateur et dénominateur par leur PGCD, la fraction est directement irréductible.',
        },
      ],
      kokoTip: 'Pour distribuer exactement 48 mangues et 36 ananas dans le plus grand nombre de paniers identiques : calcule le PGCD(48 ; 36) = 12 paniers !',
      pitfallToAvoid: 'Croire que 1 ou 9 ou 15 ou 21 sont des nombres premiers ! (9 = 3×3, 15 = 3×5, 21 = 3×7).',
    },
    sections: [
      {
        title: '1. Critères de divisibilité et Nombres premiers',
        explanation: [
          'Tout nombre entier supérieur ou égal à 2 se décompose de manière unique en un produit de facteurs premiers.',
          'Les 10 premiers nombres premiers à connaître par cœur : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.',
        ],
        rules: [
          {
            name: 'Décomposer en facteurs premiers',
            description: 'Diviser successivement par 2, 3, 5, 7, 11... jusqu’à obtenir 1.',
            example: '84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7',
          },
        ],
        commonMistakes: [
          'Laisser un facteur non premier comme 4 ou 9 dans la décomposition (4 doit s’écrire 2²).',
        ],
      },
      {
        title: '2. PGCD et partage en lots égaux',
        explanation: [
          'Le PGCD(a ; b) est le plus grand entier qui divise à la fois a et b. Si PGCD(a ; b) = 1, on dit que a et b sont premiers entre eux.',
        ],
        rules: [
          {
            name: 'Trouver le PGCD par décomposition',
            description: 'On prend les facteurs premiers COMMUNS avec leur plus petit exposant.',
            example: '24 = 2³ × 3 et 36 = 2² × 3² ➔ PGCD = 2² × 3 = 12',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-prem-1',
        'nombres-premiers-divisibilite',
        'Ex 1 : Reconnaître un nombre premier',
        1,
        'Parmi les nombres suivants, lequel est un nombre premier ?',
        ['23', '21', '1', '27'],
        '23',
        'Teste si chaque nombre a d’autres diviseurs que 1 et lui-même (21 = 3×7, 27 = 3×9, 1 n’a qu’un diviseur).',
        '23 n’est divisible que par 1 et par 23.',
        [
          { title: 'Éliminer les non-premiers', explanation: '1 a un seul diviseur ; 21 = 3×7 ; 27 = 3×9.', math: '23 ÷ 2, 3, 5 ➔ aucun diviseur' },
          { title: 'Conclure', explanation: '23 est premier.', math: '23', subResult: '23' },
        ],
        '🔢'
      ),
      mkQcm(
        'exo-4e-prem-2',
        'nombres-premiers-divisibilite',
        'Ex 2 : Critère de divisibilité par 3 et 9',
        1,
        'Le nombre 4 158 est-il divisible par 9 ?',
        ['Oui, car 4+1+5+8 = 18', 'Non, car il finit par 8', 'Non, car 18 est pair', 'Seulement par 2'],
        'Oui, car 4+1+5+8 = 18',
        'Additionne les chiffres de 4 158.',
        '4 + 1 + 5 + 8 = 18, et 18 = 2 × 9 est dans la table de 9.',
        [
          { title: 'Somme des chiffres', explanation: '4 + 1 + 5 + 8 = 18.', math: '18 = 9 × 2' },
          { title: 'Conclure', explanation: 'Donc 4 158 est divisible par 9.', math: 'Oui', subResult: 'Oui' },
        ],
        '➕'
      ),
      mkQcm(
        'exo-4e-prem-3',
        'nombres-premiers-divisibilite',
        'Ex 3 : Décomposition en facteurs premiers de 90',
        2,
        'Quelle est la décomposition en facteurs premiers du nombre 90 ?',
        ['2 × 3² × 5', '2 × 9 × 5', '6 × 15', '2² × 3 × 5'],
        '2 × 3² × 5',
        'Divise 90 par 2 (= 45), puis par 3 (= 15), puis par 3 (= 5).',
        '90 = 2 × 3 × 3 × 5 = 2 × 3² × 5.',
        [
          { title: 'Diviser successivement', explanation: '90 ÷ 2 = 45 ; 45 ÷ 3 = 15 ; 15 ÷ 3 = 5.', math: '90 = 2 × 3 × 3 × 5' },
          { title: 'Écrire avec puissances', explanation: 'Tous les facteurs sont premiers.', math: '2 × 3² × 5', subResult: '2 × 3² × 5' },
        ],
        '🧬'
      ),
      mkNum(
        'exo-4e-prem-4',
        'nombres-premiers-divisibilite',
        'Ex 4 : Calculer le PGCD(48 ; 36)',
        3,
        'Calculer le Plus Grand Commun Diviseur de 48 et 36.',
        '12',
        'Liste les diviseurs de 36 (36, 18, 12, 9...) et cherche le plus grand qui divise aussi 48.',
        'PGCD(48 ; 36) = 12 (48 = 12 × 4 et 36 = 12 × 3).',
        [
          { title: 'Décomposer 48 et 36', explanation: '48 = 2⁴ × 3 et 36 = 2² × 3².', math: 'Facteurs communs : 2² × 3' },
          { title: 'Calculer', explanation: '4 × 3 = 12.', math: 'PGCD = 12', subResult: '12' },
        ],
        undefined,
        '🎯'
      ),
      mkNum(
        'exo-4e-prem-5',
        'nombres-premiers-divisibilite',
        'Ex 5 : Paniers équitables de fruits à Lambaréné',
        4,
        'Un vendeur veut répartir 60 mangues et 45 ananas dans le plus grand nombre possible de paniers identiques sans qu’il ne reste aucun fruit.\nCombien de paniers au maximum peut-il préparer ?',
        '15',
        'Cherche le PGCD(60 ; 45).',
        'PGCD(60 ; 45) = 15 paniers (chaque panier aura 4 mangues et 3 ananas).',
        [
          { title: 'Identifier le PGCD', explanation: '60 = 15 × 4 et 45 = 15 × 3.', math: 'PGCD(60 ; 45) = 15' },
          { title: 'Vérifier la composition', explanation: '4 et 3 n’ont plus de diviseur commun > 1.', math: '15 paniers', subResult: '15' },
        ],
        'paniers',
        '🍍'
      ),
    ],
  },
];
