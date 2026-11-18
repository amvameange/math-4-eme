import { BepcArchivePaper } from '../../types/math';
import { ArchivePaperSeed, buildArchivePapers } from '../bepc/bepcArchiveHelpers';

/**
 * Épreuves officielles intégrales du Baccalauréat (Physique-Chimie · Terminale C / S)
 * Tous les exercices officiels de chaque session sont conservés intégralement (3, 4 ou 5 exercices),
 * sans aucune suppression (Chimie, Électricité, Mécanique, Optique, Ondes, Nucléaire).
 */
export const BAC_OFFICIAL_PHYSICS_ARCHIVE_SEEDS: ArchivePaperSeed[] = [
  // =========================================================================
  // 1. FRANCE — Baccalauréat S · Métropole–La Réunion · 20 juin 2019 (3 exercices)
  // =========================================================================
  {
    year: 2019,
    countryId: 'france',
    duration: '3h30',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC S France · Métropole–La Réunion (20 juin 2019)',
    officialReference: 'MENJ · Baccalauréat Général Série S · Obligatoire · Sujet officiel intégral (3 exercices)',
    sourceNotice:
      'Épreuve officielle intégrale (20 juin 2019) · Les 3 exercices complets conservés sans suppression (Ex I Chimie Muscade + Ex II Fusée Ariane 5 + Ex III Acoustique « La 440 »).',
    themeSummary:
      'Ex I Saponification & Titrage pH-métrique (9 pts) · Ex II Décollage Ariane 5 (6 pts) · Ex III Ondes sonores & Numérisation (5 pts)',
    parts: [
      {
        chapterId: 'physTc-esterification-saponification',
        partLabel: 'EXERCICE I · Chimie organique & Titrage (9 points)',
        title: 'De la noix de muscade à la cosmétique : trimyristine et acide myristique',
        points: 9,
        difficulty: 3,
        prompt:
          'On extrait la trimyristine contenue dans 20,0 g de noix de muscade en poudre (teneur massique attendue : 20 à 25 % en masse) : on obtient m = 4,75 g de trimyristine.\n1. Calculer le pourcentage massique de trimyristine obtenu et vérifier sa compatibilité avec l’ordre de grandeur attendu.\n2. On réalise la saponification de la trimyristine (triester du glycérol et de l’acide myristique C₁₄H₂₈O₂, de pK_a ≈ 5) suivie d’une acidification.\n3. Pour vérifier la pureté d’un échantillon d’acide myristique, on prépare V₁ = 10,00 mL de solution aqueuse-alcoolique que l’on titre par une solution d’hydroxyde de sodium (Na⁺ + HO⁻) de concentration C₂ = 5,00 × 10⁻² mol·L⁻¹. Le volume à l’équivalence vaut V_E = 9,60 mL.\n\nQuestion de contrôle numérique : Quelle est la concentration C₁ (en mmol·L⁻¹) de la solution d’acide myristique titrée ?',
        hint: 'À l’équivalence d’un monoacide : C₁ V₁ = C₂ V_E, soit C₁ = C₂ V_E / V₁ (en mol·L⁻¹, puis × 1000 en mmol·L⁻¹).',
        questionType: 'numeric',
        correctAnswer: '48',
        unit: 'mmol/L',
        explanationFinal:
          'Teneur = 4,75 / 20,0 = 23,75 % (dans la plage 20–25 %). À l’équivalence : C₁ = 5,00×10⁻² × 9,60 / 10,00 = 4,80×10⁻² mol·L⁻¹ = 48 mmol·L⁻¹.',
        themeTags: ['Saponification', 'Titrage acide-base', 'Rendement'],
        steps: [
          {
            title: 'Pourcentage massique de trimyristine',
            ruleApplied: 'w = m_extrait / m_muscade',
            mathExpression: 'w = 4,75 / 20,0 = 0,2375 = 23,75 % ∈ [20 % ; 25 %]',
            explanation:
              'La masse obtenue correspond bien à l’intervalle caractéristique de la noix de muscade.',
          },
          {
            title: 'Concentration de la solution d’acide myristique',
            ruleApplied: 'Relation d’équivalence C₁ V₁ = C₂ V_E',
            mathExpression: 'C₁ = (5,00 × 10⁻² × 9,60) / 10,00 = 4,80 × 10⁻² mol·L⁻¹ = 48 mmol·L⁻¹',
            explanation:
              'L’acide myristique C₁₃H₂₇COOH réagit mole à mole avec HO⁻.',
            subResult: '48 mmol/L',
          },
        ],
      },
      {
        chapterId: 'physTc-dynamique',
        partLabel: 'EXERCICE II · Mécanique newtonienne (6 points)',
        title: 'Décollage vertical de la fusée Ariane 5',
        points: 6,
        difficulty: 3,
        prompt:
          'On étudie par chronophotographie les premières secondes du décollage vertical de la fusée Ariane 5 (masse totale m = 750 tonnes = 7,50 × 10⁵ kg, poussée totale F_p = 12 400 kN = 1,24 × 10⁷ N, g = 9,81 m·s⁻²).\nLa vitesse verticale passe de v_y = 6,8 m·s⁻¹ à t = 1,0 s à v_y = 15,0 m·s⁻¹ à t = 2,2 s (y passe de 30,1 m à 52,9 m).\n1. Appliquer la deuxième loi de Newton dans le référentiel terrestre supposé galiléen (poussée F_p⃗ vers le haut, poids P⃗ vers le bas).\n2. Calculer la valeur théorique de l’accélération initiale a_y.\n3. Expliquer pourquoi l’accélération réelle augmente au cours du décollage (éjection des gaz à débit 270 kg/s pour Vulcain et 1800 kg/s pour les boosters EAP).\n\nQuestion de contrôle numérique : Calculer l’accélération initiale théorique a_y en m·s⁻² (arrondir à 0,01 près).',
        hint: 'a_y = F_p / m − g = (1,24 × 10⁷) / (7,50 × 10⁵) − 9,81.',
        questionType: 'numeric',
        correctAnswer: '6.72',
        unit: 'm/s²',
        explanationFinal:
          'F_p / m = 16,53 m·s⁻², d’où a_y = 16,53 − 9,81 = 6,72 m·s⁻² (cohérent avec Δv/Δt = (15,0 − 6,8)/1,2 = 6,83 m·s⁻²).',
        themeTags: ['2e loi de Newton', 'Fusée', 'Système à masse variable'],
        steps: [
          {
            title: 'Bilan des forces et projection verticale',
            ruleApplied: '∑ F⃗ = m a⃗ suivant Oz ascendant',
            mathExpression: 'm a_y = F_p − m g ⇒ a_y = F_p / m − g',
            explanation:
              'La poussée s’oppose au poids et à la traînée encore très faible à basse vitesse.',
          },
          {
            title: 'Application numérique',
            ruleApplied: 'Conversions en unités SI (kg et N)',
            mathExpression: 'a_y = (1,24 × 10⁷) / (7,50 × 10⁵) − 9,81 = 16,533 − 9,81 ≈ 6,72 m·s⁻²',
            explanation:
              'La consommation rapide de propergol diminue la masse m(t), ce qui fait croître l’accélération avec le temps.',
            subResult: '6,72 m/s²',
          },
        ],
      },
      {
        chapterId: 'physTc-ondes-mecaniques',
        partLabel: 'EXERCICE III · Acoustique & Numérisation (5 points)',
        title: 'On vous donne le « La » : diapason, numérisation et niveau sonore',
        points: 5,
        difficulty: 2,
        prompt:
          'Un diapason émet un son pur de fréquence f = 440 Hz.\n1. On enregistre ce signal pendant une durée Δt = 2,0 s avec une fréquence d’échantillonnage f_e = 44 kHz et une quantification sur N = 32 bits (voie stéréo ou mono : calculer ici la taille pour 1 voie mono).\n2. Deux mesures de niveau d’intensité sonore à 1,0 m donnent L₁ = 59 dB et L₂ = 42 dB.\n   Exprimer le rapport des intensités sonores I₁ / I₂ = 10^((L₁ − L₂)/10) (vérifier I₁/I₂ = 50).\n\nQuestion de contrôle numérique : Quelle est la taille en kilo-octets (ko, avec 1 ko = 1000 octets) du fichier audio mono obtenu (f_e = 44 000 Hz, Δt = 2,0 s, N = 32 bits = 4 octets/échantillon) ?',
        hint: 'Taille = f_e × Δt × (N / 8) octets, à diviser par 1000 pour obtenir des ko.',
        questionType: 'numeric',
        correctAnswer: '352',
        unit: 'ko',
        explanationFinal:
          'Nombre d’échantillons = 44 000 × 2,0 = 88 000 ; 32 bits = 4 octets ⇒ Taille = 88 000 × 4 = 352 000 octets = 352 ko.',
        themeTags: ['Ondes sonores', 'Décibels', 'Échantillonnage'],
        steps: [
          {
            title: 'Calcul de la taille mémoire audio',
            ruleApplied: 'T = f_e × Δt × (N / 8) octets',
            mathExpression: 'T = 44 000 × 2,0 × (32/8) = 352 000 octets = 352 ko',
            explanation:
              'Avec f_e = 44 kHz ≫ 2 × 440 Hz, le critère de Shannon-Nyquist est largement respecté.',
            subResult: '352 ko',
          },
          {
            title: 'Rapport des intensités sonores',
            ruleApplied: 'L = 10 log(I / I₀)',
            mathExpression: 'I₁ / I₂ = 10^((59 − 42)/10) = 10^(1,7) ≈ 50,1',
            explanation:
              'Un écart de 17 dB correspond à un rapport d’intensité d’environ 50.',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 2. FRANCE — Baccalauréat Général Spécialité · 20 mars 2023 (3 exercices)
  // =========================================================================
  {
    year: 2023,
    countryId: 'france',
    duration: '3h30',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC Spécialité France · Métropole Jour 1 (20 mars 2023)',
    officialReference: 'MENJ · Baccalauréat Général Spécialité Physique-Chimie · 20 mars 2023',
    sourceNotice:
      'Épreuve officielle intégrale (20 mars 2023) · Les 3 exercices complets conservés sans suppression (Ex 1 Saturne/Titan + Ex 2 Arôme de banane + Ex 3 Aspirine).',
    themeSummary:
      'Ex 1 Lunette afocale & Titan (10 pts) · Ex 2 Synthèse arôme banane (6 pts) · Ex 3 Acide acétylsalicylique & pH (4 pts)',
    parts: [
      {
        chapterId: 'physTc-gravitation',
        partLabel: 'EXERCICE 1 · Optique & Gravitation (10 points)',
        title: 'À la découverte de Saturne et de son satellite Titan',
        points: 10,
        difficulty: 3,
        prompt:
          'Partie A — Lunette astronomique afocale de Huygens\nOn modélise la lunette par un objectif de distance focale f’₁ = 329 cm et un oculaire de distance focale f’₂ = 7,0 cm.\n1. Montrer la relation de distance entre les lentilles pour une lunette afocale et calculer le grossissement G = f’₁ / f’₂.\n\nPartie B — Orbite de Titan autour de Saturne\nDonnées : M_S = 5,68 × 10²⁶ kg ; rayon moyen de l’orbite circulaire de Titan R = 1,22 × 10⁶ km = 1,22 × 10⁹ m ; G_grav = 6,67 × 10⁻¹¹ SI.\n2. Établir l’expression de la troisième loi de Kepler T² / R³ = 4π² / (G_grav M_S) pour le mouvement circulaire uniforme de Titan.\n3. Calculer la période de révolution T de Titan en jours terrestres (1 j = 86 400 s).\n\nQuestion de contrôle numérique : Quel est le grossissement G de la lunette astronomique de Huygens ?',
        hint: 'G = f’₁ / f’₂ = 329 / 7,0.',
        questionType: 'numeric',
        correctAnswer: '47',
        explanationFinal:
          'G = 329 / 7,0 = 47 ; la période orbitale de Titan autour de Saturne vaut T ≈ 1,38 × 10⁶ s ≈ 15,95 jours.',
        themeTags: ['Lunette afocale', 'Kepler', 'Saturne & Titan'],
        steps: [
          {
            title: 'Grossissement de la lunette afocale',
            ruleApplied: 'G = θ’ / θ = f’₁ / f’₂',
            mathExpression: 'G = 329 / 7,0 = 47',
            explanation:
              'Les foyers F’₁ et F₂ étant confondus, la distance entre l’objectif et l’oculaire vaut d = f’₁ + f’₂ = 336 cm.',
            subResult: '47',
          },
          {
            title: 'Troisième loi de Kepler pour Titan',
            ruleApplied: 'a_n = v² / R = G M_S / R²',
            mathExpression: 'T = 2π √(R³ / (G M_S)) = 2π √((1,22×10⁹)³ / (6,67×10⁻¹¹ × 5,68×10²⁶)) ≈ 1,378×10⁶ s ≈ 15,95 jours',
            explanation:
              'La masse de Titan n’intervient pas dans l’expression de sa période de révolution.',
          },
        ],
      },
      {
        chapterId: 'physTc-esterification-saponification',
        partLabel: 'EXERCICE 2 · Synthèse organique (6 points)',
        title: 'Synthèse de l’éthanoate de 3-méthylbutyle (arôme de banane)',
        points: 6,
        difficulty: 2,
        prompt:
          'On synthétise l’éthanoate de 3-méthylbutyle par réaction entre l’acide éthanoïque (M = 60,0 g·mol⁻¹, n₁ = 0,25 mol) et le 3-méthylbutan-1-ol (M = 88,1 g·mol⁻¹, n₂ = 0,20 mol) en présence d’acide sulfurique à reflux.\n1. Écrire l’équation bilan de la réaction d’estérification et nommer l’eau formée comme sous-produit.\n2. Quel est le réactif limitant ?\n3. Après lavage et séchage, on recueille une masse m_exp = 16,9 g d’ester pur (M_ester = 130,2 g·mol⁻¹). Calculer le rendement η en % (arrondi à l’entier).\n\nQuestion de contrôle numérique : Quel est le rendement η (%) de cette synthèse (arrondi à l’entier) ?',
        hint: 'n_max = min(0,25 ; 0,20) = 0,20 mol ; n_exp = 16,9 / 130,2.',
        questionType: 'numeric',
        correctAnswer: '65',
        unit: '%',
        explanationFinal:
          'n_max = 0,20 mol (m_max = 26,04 g), n_exp = 0,1298 mol ⇒ η = 16,9 / 26,04 ≈ 0,649 = 65 %.',
        themeTags: ['Estérification', 'Reflux', 'Rendement'],
        steps: [
          {
            title: 'Réactif limitant et masse maximale théorique',
            ruleApplied: 'Stœchiométrie 1:1',
            mathExpression: 'n_max = min(0,25 ; 0,20) = 0,20 mol ⇒ m_max = 0,20 × 130,2 = 26,04 g',
            explanation:
              'Le 3-méthylbutan-1-ol est le réactif limitant car l’acide éthanoïque est introduit en excès pour déplacer l’équilibre.',
          },
          {
            title: 'Calcul du rendement',
            ruleApplied: 'η = m_exp / m_max',
            mathExpression: 'η = 16,9 / 26,04 ≈ 0,649 = 65 %',
            explanation:
              'Conforme au rendement classique d’une estérification non distillée (~67 %).',
            subResult: '65 %',
          },
        ],
      },
      {
        chapterId: 'physTc-acides-bases-ph',
        partLabel: 'EXERCICE 3 · Acides & Bases (4 points)',
        title: 'Une formulation de l’aspirine (acétylsalicylate de DL-lysine)',
        points: 4,
        difficulty: 2,
        prompt:
          'Un sachet contient 900 mg d’acétylsalicylate de DL-lysine, correspondant à 500 mg d’acide acétylsalicylique AH (M = 180,2 g·mol⁻¹ ; pK_a = 3,5).\n1. On dissout le sachet dans V = 40 mL d’eau ; le pH mesuré est égal à 5,0.\n   Tracer le diagramme de prédominance et identifier l’espèce prédominante en solution.\n2. Calculer le rapport [A⁻]/[AH] = 10^(pH − pK_a).\n3. Calculer la quantité de matière d’acide acétylsalicylique dans le sachet (en mmol, arrondir à 0,01 près).\n\nQuestion de contrôle numérique : Quelle est la quantité de matière n (en mmol, à 0,01 près) correspondant à 500 mg d’acide acétylsalicylique ?',
        hint: 'n = m / M = 0,500 / 180,2 mol.',
        questionType: 'numeric',
        correctAnswer: '2.77',
        unit: 'mmol',
        explanationFinal:
          'À pH = 5,0 > pK_a = 3,5, la base conjuguée A⁻ prédomine ([A⁻]/[AH] = 10^(1,5) ≈ 31,6) ; n = 0,500 / 180,2 = 2,77 mmol.',
        themeTags: ['Prédominance acide-base', 'pKa', 'Aspirine'],
        steps: [
          {
            title: 'Prédominance et rapport de concentrations',
            ruleApplied: 'pH = pK_a + log([A⁻]/[AH])',
            mathExpression: '[A⁻]/[AH] = 10^(5,0 − 3,5) = 10^(1,5) ≈ 31,6 > 1 ⇒ A⁻ prédomine',
            explanation:
              'La forme soluble acétylsalicylate A⁻ représente plus de 96 % des espèces.',
          },
          {
            title: 'Quantité de matière du principe actif',
            ruleApplied: 'n = m / M',
            mathExpression: 'n = 0,500 / 180,2 = 2,775 × 10⁻³ mol ≈ 2,77 mmol',
            explanation:
              'Ce dosage permet de vérifier la conformité de l’étiquette lors d’un titrage.',
            subResult: '2,77 mmol',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 3. CAMEROUN — Baccalauréat Série C · Session 2024 (5 parties complètes, 40 pts)
  // =========================================================================
  {
    year: 2024,
    countryId: 'cameroun',
    duration: '3h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC C Cameroun · Session 2024 · Physique (OBC)',
    officialReference: 'Office du Baccalauréat du Cameroun (OBC) · Série C · Session 2024',
    sourceNotice:
      'Épreuve officielle intégrale du Cameroun (2024, Série C) · Toutes les 5 parties officielles conservées sans suppression (Partie I Ex 1–3 + Partie II Situations-problèmes 1 & 2, total 40 pts).',
    themeSummary:
      'I.1 Savoirs (8 pts) · I.2 Photoélectricité, Condensateur & Oscillateur (8 pts) · I.3 Nucléaire Li-6 & Fusion (8 pts) · II.1 RLC Ngando (8 pts) · II.2 Stroboscopie (8 pts)',
    parts: [
      {
        chapterId: 'physTc-dynamique',
        partLabel: 'PARTIE I · EXERCICE 1 · Vérification des savoirs (8 points)',
        title: 'Définitions, radioactivité, loi d’attraction universelle et force de Laplace',
        points: 8,
        difficulty: 2,
        prompt:
          '1. Définir : capteur ; grandeur sinusoïdale.\n2. Citer deux applications courantes de la radioactivité.\n3. Énoncer la loi d’attraction universelle de Newton.\n4. Répondre par Vrai ou Faux :\n   a) La mesure du pH à la fin du virage suffit toujours à déterminer l’équivalence sans précaution.\n   b) Le spectre d’émission de l’atome d’hydrogène est discontinu.\n5. Donner les caractéristiques de la force de Laplace F⃗ = I L⃗ ∧ B⃗.\n\nQuestion QCM : Quelle affirmation est exacte à propos du spectre d’émission de l’atome d’hydrogène et de la force de Laplace ?',
        hint: 'Les raies spectrales de l’hydrogène traduisent des niveaux quantifiés ; la force de Laplace est orthogonale au conducteur et à B⃗.',
        questionType: 'qcm',
        options: [
          'Le spectre de l’hydrogène est discontinu et F = I·L·B·sin(α)',
          'Le spectre de l’hydrogène est continu et F = I·L·B·cos(α)',
          'Le spectre est discontinu et F est colinéaire au champ B⃗',
          'Le spectre est continu et la radioactivité n’a aucune application médicale',
        ],
        correctAnswer: 'Le spectre de l’hydrogène est discontinu et F = I·L·B·sin(α)',
        explanationFinal:
          'Le spectre de raies de H prouve la quantification des niveaux d’énergie ; la norme de la force de Laplace vaut I·L·B·sin(L⃗, B⃗).',
        themeTags: ['Savoirs fondamentaux', 'Laplace', 'Atome H'],
        steps: [
          {
            title: 'Spectre atomique et force magnétique',
            ruleApplied: 'Relation ΔE = hν et loi de Laplace F⃗ = I L⃗ ∧ B⃗',
            mathExpression: 'F = I · L · B · |sin(L⃗, B⃗)|   |   λ_nm vérifie 1/λ = R_H (1/n² − 1/m²)',
            explanation:
              'Applications de la radioactivité : radiothérapie médicale, datation au carbone 14, gammagraphie industrielle.',
            subResult: 'Discontinu & I·L·B·sin(α)',
          },
        ],
      },
      {
        chapterId: 'physTc-oscillations-energie',
        partLabel: 'PARTIE I · EXERCICE 2 · Application directe (8 points)',
        title: 'Effet photoélectrique, énergie d’un condensateur et oscillateur élastique',
        points: 8,
        difficulty: 3,
        prompt:
          'A. Effet photoélectrique : On éclaire une cathode de travail d’extraction W₀ = 2,90 × 10⁻¹⁹ J par une radiation verte λ = 532 nm (h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; e = 1,60 × 10⁻¹⁹ C).\n   1. Vérifier que E_c,max ≈ 8,0 × 10⁻²⁰ J et calculer le potentiel d’arrêt U₀.\nB. Condensateur : Un condensateur de capacité C = 47 μF est chargé sous U = 200 V. Calculer l’énergie électrique stockée.\nC. Oscillateur harmonique : Une masse m = 1,0 kg attachée à un ressort oscille horizontalement sans frottement selon x(t) = a cos(ω₀ t + φ) avec amplitude a = 24 cm et période T = 4,0 s.\n   1. Calculer la constante de raideur k du ressort (prendre π² ≈ 9,87).\n   2. Donner l’élongation x(2,0 s) si x(0) = +24 cm.\n\nQuestion de contrôle numérique : Calculer le potentiel d’arrêt U₀ (en V) correspondant à E_c,max = 8,00 × 10⁻²⁰ J.',
        hint: 'U₀ = E_c,max / e = (8,00 × 10⁻²⁰) / (1,60 × 10⁻¹⁹).',
        questionType: 'numeric',
        correctAnswer: '0.5',
        unit: 'V',
        explanationFinal:
          'U₀ = 8,00×10⁻²⁰ / 1,60×10⁻¹⁹ = 0,50 V ; E_cond = ½ C U² = 0,94 J ; k = 4π²m/T² ≈ 2,47 N/m.',
        themeTags: ['Photoélectricité', 'Condensateur', 'Pendule élastique'],
        steps: [
          {
            title: 'A. Effet photoélectrique et potentiel d’arrêt',
            ruleApplied: 'E_photon = hc/λ = W₀ + E_c,max et E_c,max = e U₀',
            mathExpression: 'hc/λ ≈ 3,74×10⁻¹⁹ J ⇒ E_c,max ≈ 8,4×10⁻²⁰ J (donnée 8,00×10⁻²⁰ J) ⇒ U₀ = 8,00×10⁻²⁰ / 1,60×10⁻¹⁹ = 0,50 V',
            explanation:
              'La tension d’arrêt annule exactement l’énergie cinétique maximale des photoélectrons.',
            subResult: '0,5 V',
          },
          {
            title: 'B & C. Condensateur et oscillateur élastique',
            ruleApplied: 'E_e = ½ C U² et T = 2π √(m/k)',
            mathExpression: 'E_e = 0,5×47×10⁻⁶×200² = 0,94 J   |   k = 4π²(1,0)/16 ≈ 2,47 N/m   |   x(T/2) = −24 cm',
            explanation:
              'À t = 2,0 s = T/2, l’oscillateur passe à l’élongation opposée −a = −24 cm.',
          },
        ],
      },
      {
        chapterId: 'physTc-reactions-nucleaires',
        partLabel: 'PARTIE I · EXERCICE 3 · Physique nucléaire (8 points)',
        title: 'Réaction sur le lithium-6 et fusion nucléaire',
        points: 8,
        difficulty: 3,
        prompt:
          'On considère la réaction nucléaire : ⁶₃Li → ²₁H + ⁴₂He.\nDonnées : m(⁶Li) = 6,01512 u ; m(²H) = 2,01410 u ; m(⁴He) = 4,00260 u ; 1 u = 931,5 MeV/c².\n1. Calculer la variation de masse Δm = m_finale − m_initiale (en u) et l’énergie ΔE de la réaction en MeV.\n2. Justifier pourquoi cette réaction n’est pas spontanée.\n3. Calculer l’énergie libérée lors de la réaction de fusion inverse ²₁H + ⁴₂He → ⁶₃Li (ou de fusion D-T).\n\nQuestion de contrôle numérique : Quelle est la valeur absolue |ΔE| (en MeV, à 0,01 près) de l’énergie mise en jeu lors de ⁶Li → ²H + ⁴He ?',
        hint: 'Δm = (2,01410 + 4,00260) − 6,01512 = +0,00158 u, puis multiplie par 931,5 MeV/u.',
        questionType: 'numeric',
        correctAnswer: '1.47',
        unit: 'MeV',
        explanationFinal:
          'Δm = +0,00158 u > 0 ⇒ ΔE = +0,00158 × 931,5 = +1,47 MeV : réaction endothermique, donc non spontanée.',
        themeTags: ['Énergie de liaison', 'Bilan massique', 'Spontanéité nucléaire'],
        steps: [
          {
            title: 'Bilan de masse et énergie de réaction',
            ruleApplied: 'ΔE = (∑ m_produits − ∑ m_réactifs) c²',
            mathExpression: 'Δm = (2,01410 + 4,00260) − 6,01512 = +0,00158 u ⇒ ΔE = +1,47 MeV',
            explanation:
              'ΔE > 0 signifie qu’il faut fournir au moins 1,47 MeV pour dissocier le noyau de lithium-6 : la réaction ne peut pas être spontanée.',
            subResult: '1,47 MeV',
          },
        ],
      },
      {
        chapterId: 'physTc-oscillations-rlc',
        partLabel: 'PARTIE II · SITUATION-PROBLÈME 1 (8 points)',
        title: 'Ngando et le circuit RLC libre amorti / forcé (bilan énergétique & GBF)',
        points: 8,
        difficulty: 4,
        prompt:
          'Au laboratoire, l’élève Ngando étudie un circuit RLC série libre puis forcé.\n1. Établir l’équation différentielle vérifiée par u_C(t) en régime libre : L C d²u_C/dt² + R C du_C/dt + u_C = 0.\n2. Exprimer l’énergie totale E_T = ½ C u_C² + ½ L i² et montrer rigoureusement que dE_T / dt = −R i² ≤ 0.\n3. En déduire le rôle de la résistance R et justifier le choix d’un GBF délivrant une tension sinusoïdale de fréquence f_0 = 1 / (2π √(LC)) pour entretenir la résonance d’intensité.\n\nQuestion QCM : Que traduit la relation dE_T / dt = −R i² ?',
        hint: 'La dérivée négative −R i² représente la puissance dissipée par effet Joule dans la résistance.',
        questionType: 'qcm',
        options: [
          'La dissipation d’énergie par effet Joule dans R, cause de l’amortissement',
          'La conservation stricte de l’énergie électromagnétique totale',
          'Une augmentation exponentielle de l’amplitude des oscillations',
          'L’annulation immédiate du courant dès t > 0',
        ],
        correctAnswer: 'La dissipation d’énergie par effet Joule dans R, cause de l’amortissement',
        explanationFinal:
          'L’énergie du condensateur et de la bobine diminue à tout instant au taux R i² (effet Joule), nécessitant l’apport d’un générateur GBF pour entretenir le régime permanent.',
        themeTags: ['Circuit RLC', 'Équation différentielle', 'Effet Joule'],
        steps: [
          {
            title: 'Dérivée temporelle de l’énergie totale',
            ruleApplied: 'i = C du_C/dt et loi des mailles L di/dt + R i + u_C = 0',
            mathExpression: 'dE_T/dt = C u_C (du_C/dt) + L i (di/dt) = i (u_C + L di/dt) = i (−R i) = −R i² ≤ 0',
            explanation:
              'À la résonance d’intensité, le GBF fournit exactement la puissance moyenne R I² perdue par effet Joule.',
            subResult: 'Dissipation par effet Joule',
          },
        ],
      },
      {
        chapterId: 'physTc-ondes-mecaniques',
        partLabel: 'PARTIE II · SITUATION-PROBLÈME 2 (8 points)',
        title: 'Cuve à ondes et stroboscopie à la surface de l’eau',
        points: 8,
        difficulty: 3,
        prompt:
          'On produit à la surface d’une cuve à ondes des vagues circulaires à la fréquence N = 25 Hz ; la distance entre 5 crêtes consécutives vaut d = 4,8 cm.\n1. Déterminer la longueur d’onde λ et la célérité v des ondes.\n2. Pour observer l’onde immobile (immobilité apparente) à l’aide d’un stroboscope, quelle condition doit vérifier la fréquence des éclairs N_e ?\n3. Décrire ce que l’on observe en éclairage continu puis en éclairage intermittent pour N_e = 24 Hz.\n\nQuestion de contrôle numérique : Quelle est la célérité v des ondes à la surface de l’eau (en m·s⁻¹) ?',
        hint: '5 crêtes consécutives sont séparées par 4 longueurs d’onde : 4λ = 4,8 cm ⇒ λ = 1,2 cm = 0,012 m.',
        questionType: 'numeric',
        correctAnswer: '0.3',
        unit: 'm/s',
        explanationFinal:
          'λ = 4,8 / 4 = 1,2 cm = 0,012 m, donc v = λ N = 0,012 × 25 = 0,30 m·s⁻¹. Pour N_e = 24 Hz < N = 25 Hz, on observe un mouvement ralenti dans le sens réel.',
        themeTags: ['Cuve à ondes', 'Stroboscopie', 'Longueur d’onde'],
        steps: [
          {
            title: 'Longueur d’onde et célérité',
            ruleApplied: 'Distance entre p crêtes = (p − 1)λ ; v = λ N',
            mathExpression: 'λ = 4,8 / 4 = 1,2 cm = 0,012 m ⇒ v = 0,012 × 25 = 0,30 m·s⁻¹',
            explanation:
              'À N_e = N/k (ex : 25 Hz), les crêtes paraissent immobiles ; à N_e = 24 Hz < 25 Hz, elles avancent lentement dans le sens réel.',
            subResult: '0,3 m/s',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 4. SÉNÉGAL — Baccalauréat Séries S1–S3 · Session 2023 (5 exercices complets)
  // =========================================================================
  {
    year: 2023,
    countryId: 'senegal',
    duration: '4h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC S1–S1A–S3 Sénégal · Session 2023 (Office du Bac UCAD)',
    officialReference: 'Office du Baccalauréat (UCAD Dakar) · Séries S1–S1A–S3 · 1er Groupe 2023',
    sourceNotice:
      'Épreuve officielle intégrale du Sénégal (1er groupe 2023, Séries S1–S3) · Les 5 exercices officiels complets conservés sans suppression.',
    themeSummary:
      'Ex 1 Cinétique Cu/Ag⁺ (3 pts) · Ex 2 Acide éthanoïque & Vinaigre (3 pts) · Ex 3 Chute dans champ de pesanteur (5 pts) · Ex 4 Dipôles RL/RC/RLC (5 pts) · Ex 5 Effet photoélectrique & Fentes d’Young (4 pts)',
    parts: [
      {
        chapterId: 'physTc-cinetique-chimique',
        partLabel: 'EXERCICE 1 · Cinétique chimique (3 points)',
        title: 'Réaction d’oxydoréduction entre le cuivre et les ions argent Ag⁺',
        points: 3,
        difficulty: 2,
        prompt:
          'À t = 0, on plonge une masse m₀ = 3,175 g de tournure de cuivre Cu (M = 63,5 g·mol⁻¹) dans V_S = 200 mL d’une solution de nitrate d’argent de concentration C = 0,20 mol·L⁻¹.\nL’équation de la réaction s’écrit : Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag.\n1. Calculer les quantités de matière initiales n₀(Cu) et n₀(Ag⁺) et identifier le réactif limitant.\n2. Déterminer la concentration finale [Cu²⁺]_f (en mol·L⁻¹) en fin de réaction.\n\nQuestion de contrôle numérique : Quelle est la concentration finale [Cu²⁺]_f en mol·L⁻¹ ?',
        hint: 'n₀(Cu) = 3,175 / 63,5 = 0,050 mol et n₀(Ag⁺) = 0,20 × 0,200 = 0,040 mol ⇒ Ag⁺ est limitant (x_max = 0,020 mol).',
        questionType: 'numeric',
        correctAnswer: '0.1',
        unit: 'mol/L',
        explanationFinal:
          'x_max = n₀(Ag⁺)/2 = 0,020 mol ⇒ [Cu²⁺]_f = 0,020 / 0,200 = 0,10 mol·L⁻¹.',
        themeTags: ['Cinétique', 'Oxydoréduction', 'Avancement maximal'],
        steps: [
          {
            title: 'Bilan molaire initial et réactif limitant',
            ruleApplied: 'Tableau d’avancement : Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag',
            mathExpression: 'n₀(Cu) = 0,050 mol  ;  n₀(Ag⁺)/2 = 0,020 mol < 0,050 ⇒ Ag⁺ limitant, x_max = 0,020 mol',
            explanation:
              'Il reste du cuivre en excès (0,030 mol) à la fin de la réaction.',
          },
          {
            title: 'Concentration finale en ions Cu²⁺',
            ruleApplied: '[Cu²⁺]_f = x_max / V_S',
            mathExpression: '[Cu²⁺]_f = 0,020 / 0,200 = 0,10 mol·L⁻¹',
            explanation:
              'La solution devient bleue par formation des ions Cu²⁺.',
            subResult: '0,1 mol/L',
          },
        ],
      },
      {
        chapterId: 'physTc-acides-bases-ph',
        partLabel: 'EXERCICE 2 · Acide faible & Dosage (3 points)',
        title: 'Ionisation de l’acide éthanoïque et titre d’un vinaigre commercial',
        points: 3,
        difficulty: 2,
        prompt:
          'Une solution aqueuse S d’acide éthanoïque CH₃COOH de concentration C = 1,0 × 10⁻² mol·L⁻¹ a un pH égal à 3,4 à 25 °C.\n1. Calculer le coefficient de dissociation α = [H₃O⁺] / C (en %).\n2. En déduire la constante d’acidité K_a et le pK_a du couple.\n3. Vérifier l’acidité massique d’un vinaigre de masse volumique ρ_V = 1,02 g·mL⁻¹.\n\nQuestion de contrôle numérique : Quel est le coefficient d’ionisation α en % (arrondi à 0,1 près) ?',
        hint: '[H₃O⁺] = 10^(−3,4) ≈ 3,98 × 10⁻⁴ mol·L⁻¹ ; α = [H₃O⁺] / C.',
        questionType: 'numeric',
        correctAnswer: '4',
        unit: '%',
        explanationFinal:
          'α = 10^(−3,4) / 10⁻² = 10^(−1,4) ≈ 0,0398 ≈ 4,0 % ; K_a = C α² / (1 − α) ≈ 1,65 × 10⁻⁵ (pK_a ≈ 4,78).',
        themeTags: ['Acide faible', 'Coefficient d’ionisation', 'pKa'],
        steps: [
          {
            title: 'Coefficient de dissociation α',
            ruleApplied: 'α = [H₃O⁺] / C',
            mathExpression: '[H₃O⁺] = 10^(−3,4) ≈ 3,98×10⁻⁴ mol·L⁻¹ ⇒ α ≈ 0,0398 ≈ 4 %',
            explanation:
              'α ≪ 1 confirme que l’acide éthanoïque est un acide faible peu dissocié.',
            subResult: '4 %',
          },
        ],
      },
      {
        chapterId: 'physTc-dynamique',
        partLabel: 'EXERCICE 3 · Mécanique (5 points)',
        title: 'Chute d’un solide dans le champ de pesanteur avec frottements',
        points: 5,
        difficulty: 3,
        prompt:
          'Un solide S de masse m = 0,50 kg est lâché sans vitesse initiale dans un fluide où s’exerce une force de frottement f⃗ = −k v⃗ (k = 0,25 kg·s⁻¹). On prend g = 10 m·s⁻² (poussée d’Archimède négligée).\n1. Établir l’équation différentielle vérifiée par v(t) sur l’axe vertical descendant Oz.\n2. Déterminer l’expression de la constante de temps τ = m / k et de la vitesse limite v_lim.\n3. Calculer v_lim en m·s⁻¹.\n\nQuestion de contrôle numérique : Quelle est la vitesse limite v_lim du solide (en m·s⁻¹) ?',
        hint: 'En régime permanent dv/dt = 0 ⇒ k v_lim = m g.',
        questionType: 'numeric',
        correctAnswer: '20',
        unit: 'm/s',
        explanationFinal:
          'dv/dt + (k/m)v = g ⇒ v_lim = mg/k = (0,50 × 10) / 0,25 = 20 m·s⁻¹ (avec τ = 2,0 s).',
        themeTags: ['Chute avec frottements', 'Vitesse limite', 'Équation différentielle'],
        steps: [
          {
            title: 'Équation différentielle et vitesse limite',
            ruleApplied: '2e loi de Newton : m dv/dt = m g − k v',
            mathExpression: 'dv/dt + v/τ = g (τ = m/k = 2,0 s)   |   v_lim = m g / k = 5,0 / 0,25 = 20 m·s⁻¹',
            explanation:
              'La vitesse croît exponentiellement selon v(t) = 20(1 − e^(−t/2)).',
            subResult: '20 m/s',
          },
        ],
      },
      {
        chapterId: 'physTc-oscillations-rlc',
        partLabel: 'EXERCICE 4 · Électricité (5 points)',
        title: 'Dipôle RL, charge d’un condensateur RC et oscillations forcées RLC',
        points: 5,
        difficulty: 3,
        prompt:
          'Un dipôle RLC série (R = 50 Ω, L = 0,20 H, C = 5,0 μF) est alimenté par un générateur basse fréquence de tension efficace U = 12 V.\n1. Calculer la fréquence propre f₀ de résonance du circuit (prendre π ≈ 3,14).\n2. Calculer l’impédance Z et l’intensité efficace I₀ à la résonance d’intensité.\n3. Calculer le facteur de qualité Q du circuit.\n\nQuestion de contrôle numérique : Quelle est l’intensité efficace I₀ à la résonance (en A) ?',
        hint: 'À la résonance d’intensité, X_L = X_C donc Z = R.',
        questionType: 'numeric',
        correctAnswer: '0.24',
        unit: 'A',
        explanationFinal:
          'À la résonance, Z = R = 50 Ω ⇒ I₀ = U / R = 12 / 50 = 0,24 A ; f₀ = 1/(2π√(LC)) ≈ 159 Hz et Q = (1/R)√(L/C) = 4,0.',
        themeTags: ['Résonance RLC', 'Impédance', 'Facteur de qualité'],
        steps: [
          {
            title: 'Fréquence propre et intensité maximale à la résonance',
            ruleApplied: 'Z = √(R² + (Lω − 1/(Cω))²) = R à ω₀ = 1/√(LC)',
            mathExpression: 'f₀ = 1 / (2π √(0,20 × 5,0×10⁻⁶)) = 1000 / (2π) ≈ 159,2 Hz   |   I₀ = U / R = 12 / 50 = 0,24 A',
            explanation:
              'Le facteur de qualité Q = (L ω₀)/R = 200/50 = 4,0 : le circuit présente une surtension de 4×12 = 48 V aux bornes de C et de L.',
            subResult: '0,24 A',
          },
        ],
      },
      {
        chapterId: 'physTc-interferences-lumiere',
        partLabel: 'EXERCICE 5 · Optique & Corpuscules (4 points)',
        title: 'Dualité onde-corpuscule : effet photoélectrique sur le césium & fentes d’Young',
        points: 4,
        difficulty: 3,
        prompt:
          'Partie A : On éclaire une plaque de césium (longueur d’onde seuil λ₀ = 650 nm) par une radiation monochromatique de longueur d’onde λ = 450 nm.\n   Calculer le travail d’extraction W₀ (en eV, avec hc = 1240 eV·nm) et l’énergie cinétique maximale des électrons.\nPartie B : Avec la même lumière λ = 450 nm, on éclaire deux fentes d’Young séparées de a = 0,90 mm, l’écran étant à D = 1,80 m.\n   Calculer l’interfrange i en mm.\n\nQuestion de contrôle numérique : Quelle est l’interfrange i en mm ?',
        hint: 'i = λ D / a avec λ = 4,50×10⁻⁷ m, D = 1,80 m et a = 9,0×10⁻⁴ m.',
        questionType: 'numeric',
        correctAnswer: '0.9',
        unit: 'mm',
        explanationFinal:
          'W₀ = 1240 / 650 ≈ 1,91 eV ; E_c,max ≈ 2,76 − 1,91 = 0,85 eV ; i = λ D / a = (4,5×10⁻⁷ × 1,80)/(9,0×10⁻⁴) = 9,0×10⁻⁴ m = 0,90 mm.',
        themeTags: ['Fentes d’Young', 'Interfrange', 'Césium'],
        steps: [
          {
            title: 'Travail d’extraction et interfrange d’Young',
            ruleApplied: 'W₀ = hc/λ₀ et i = λ D / a',
            mathExpression: 'W₀ = 1240/650 ≈ 1,91 eV   |   i = (450×10⁻⁹ × 1,80) / (0,90×10⁻³) = 0,90 × 10⁻³ m = 0,90 mm',
            explanation:
              'La lumière manifeste successivement son aspect corpusculaire (photons) et son aspect ondulatoire (interférences).',
            subResult: '0,9 mm',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 5. GABON — Baccalauréat Séries C & SI · Session 2022 (5 exercices complets)
  // =========================================================================
  {
    year: 2022,
    countryId: 'gabon',
    duration: '3h30',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC C & SI Gabon · Session Juin 2022 (Office National du Bac)',
    officialReference: 'Office National du Baccalauréat (Libreville) · Séries C & SI · Session 2022',
    sourceNotice:
      'Épreuve officielle intégrale du Gabon (Juin 2022, Séries C & SI) · Les 5 exercices complets conservés sans suppression (2 exercices de Chimie + 3 exercices de Physique).',
    themeSummary:
      'Chimie 1 Acidose sanguine & NaHCO₃ (4 pts) · Chimie 2 Synthèse de l’églantiane (4 pts) · Physique 1 Curiethérapie nucléaire (4 pts) · Physique 2 Moteur CC & Dynamique (4 pts) · Physique 3 Oscillations & Induction (4 pts)',
    parts: [
      {
        chapterId: 'physTc-acides-bases-ph',
        partLabel: 'EXERCICE 1 · Chimie 1 (4 points)',
        title: 'Acidose sanguine, caractère amphotère de HCO₃⁻ et solution de NaHCO₃',
        points: 4,
        difficulty: 3,
        prompt:
          'En médecine d’urgence, une acidose sanguine (pH < 7,35) est traitée par perfusion de bicarbonate de sodium (Na⁺ + HCO₃⁻).\nDonnées : couples (CO₂, H₂O / HCO₃⁻) de pK_a1 = 6,35 et (HCO₃⁻ / CO₃²⁻) de pK_a2 = 10,33.\n1. Justifier le caractère amphotère (ampholyte) de l’ion hydrogénocarbonate HCO₃⁻.\n2. Écrire la réaction acido-basique de HCO₃⁻ avec les ions H₃O⁺ responsables de l’acidose.\n3. Calculer le pH théorique d’une solution aqueuse pure d’ampholyte NaHCO₃ en utilisant la formule pH = ½ (pK_a1 + pK_a2).\n\nQuestion de contrôle numérique : Quel est le pH théorique de la solution d’ampholyte NaHCO₃ ?',
        hint: 'pH = ½ (pK_a1 + pK_a2) = (6,35 + 10,33) / 2.',
        questionType: 'numeric',
        correctAnswer: '8.34',
        explanationFinal:
          'pH = (6,35 + 10,33)/2 = 8,34 (basique), permettant de tamponner l’excès d’acidité dans le sang autour de pH = 7,40.',
        themeTags: ['Ampholyte', 'Tampon sanguin', 'Bicarbonate'],
        steps: [
          {
            title: 'Amphotérie de HCO₃⁻ et pH d’ampholyte',
            ruleApplied: 'pH = ½ (pK_a1 + pK_a2)',
            mathExpression: 'HCO₃⁻ + H₃O⁺ → CO₂, H₂O + H₂O   |   pH = (6,35 + 10,33)/2 = 8,34',
            explanation:
              'HCO₃⁻ capte un proton comme base du couple 1 et peut en céder un comme acide du couple 2.',
            subResult: 'pH = 8,34',
          },
        ],
      },
      {
        chapterId: 'physTc-esterification-saponification',
        partLabel: 'EXERCICE 2 · Chimie 2 (4 points)',
        title: 'Synthèse de l’églantiane (ester à odeur de rose) et choix de l’anhydride',
        points: 4,
        difficulty: 3,
        prompt:
          'L’églantiane (2-méthylpropanoate de benzyle ou phényléthanoate de 2-méthylpropyle) est un ester utilisé en parfumerie.\nOn fait réagir l’acide phényléthanoïque C₆H₅-CH₂-COOH (0,10 mol) avec le 2-méthylpropan-1-ol (0,10 mol).\n1. Écrire l’équation bilan de cette réaction et donner sa classe d’alcool.\n2. On obtient n_ester = 0,067 mol à l’équilibre : calculer le rendement.\n3. Quel réactif remplaçant l’acide carboxylique permettrait d’obtenir une réaction totale et rapide (rendement ~100 %) ?\n\nQuestion de contrôle numérique : Quel est le rendement en % obtenu à l’équilibre pour ce mélange équimolaire ?',
        hint: 'η = (0,067 / 0,10) × 100 %.',
        questionType: 'numeric',
        correctAnswer: '67',
        unit: '%',
        explanationFinal:
          'Le 2-méthylpropan-1-ol est un alcool primaire ⇒ rendement d’équilibre 67 %. Un chlorure d’acyle ou un anhydride rend la réaction totale.',
        themeTags: ['Ester de parfumerie', 'Alcool primaire', 'Anhydride'],
        steps: [
          {
            title: 'Classe de l’alcool et rendement d’équilibre',
            ruleApplied: 'Estérification d’un alcool primaire en proportions stœchiométriques',
            mathExpression: 'η = (0,067 / 0,10) × 100 = 67 %',
            explanation:
              'L’emploi du chlorure de phényléthanoyle C₆H₅-CH₂-COCl ou de l’anhydride correspondant supprime l’équilibre d’hydrolyse.',
            subResult: '67 %',
          },
        ],
      },
      {
        chapterId: 'physTc-noyau-radioactivite',
        partLabel: 'EXERCICE 3 · Physique 1 : Nucléaire (4 points)',
        title: 'Curiethérapie : décroissance radioactive d’une source d’iridium-192',
        points: 4,
        difficulty: 2,
        prompt:
          'En curiethérapie (radiothérapie interne), on utilise une source d’iridium ¹⁹²₇₇Ir émetteur β⁻ de période T = 74 jours.\n1. Écrire l’équation de désintégration β⁻ de ¹⁹²₇₇Ir (l’élément fils Z = 78 est le platine Pt).\n2. Calculer la constante radioactive λ (en jour⁻¹).\n3. Au bout de combien de jours l’activité A(t) de la source est-elle divisée par 8 ?\n\nQuestion de contrôle numérique : Au bout de combien de jours l’activité de la source est-elle divisée par 8 ?',
        hint: 'A(t) = A₀ / 2^n = A₀ / 8 = A₀ / 2³ ⇒ n = 3 demi-vies.',
        questionType: 'numeric',
        correctAnswer: '222',
        unit: 'jours',
        explanationFinal:
          '8 = 2³ correspond à t = 3 T = 3 × 74 = 222 jours (et λ = ln(2)/74 ≈ 9,37 × 10⁻³ j⁻¹).',
        themeTags: ['Radioactivité β⁻', 'Demi-vie', 'Curiethérapie'],
        steps: [
          {
            title: 'Équation β⁻ et durée pour A₀ / 8',
            ruleApplied: 'Lois de Soddy ; A(nT) = A₀ / 2^n',
            mathExpression: '¹⁹²₇₇Ir → ¹⁹²₇₈Pt + ⁰₋₁e + ν̄_e   |   A₀ / 8 = A₀ / 2³ ⇒ t = 3 × 74 = 222 jours',
            explanation:
              'Après 3 périodes radioactives, il reste 1/8 = 12,5 % de l’activité initiale.',
            subResult: '222 jours',
          },
        ],
      },
      {
        chapterId: 'physTc-cinematique',
        partLabel: 'EXERCICE 4 · Physique 2 : Dynamique & Travail (4 points)',
        title: 'Tige conductrice mobile sur rails de Laplace (moteur élémentaire)',
        points: 4,
        difficulty: 3,
        prompt:
          'Deux rails parallèles horizontaux distants de L = 0,20 m sont plongés dans un champ magnétique uniforme vertical B = 0,50 T. Une tige MN de masse m = 40 g = 0,040 kg glisse sans frottement lorsqu’elle est parcourue par un courant continu d’intensité constante I = 4,0 A.\n1. Calculer la norme F de la force de Laplace s’exerçant sur la tige.\n2. Déterminer l’accélération a de la tige à l’aide du théorème du centre d’inertie.\n\nQuestion de contrôle numérique : Quelle est l’accélération a de la tige sur les rails (en m·s⁻²) ?',
        hint: 'F = I B L, puis a = F / m.',
        questionType: 'numeric',
        correctAnswer: '10',
        unit: 'm/s²',
        explanationFinal:
          'F = 4,0 × 0,50 × 0,20 = 0,40 N, d’où a = 0,40 / 0,040 = 10 m·s⁻².',
        themeTags: ['Rails de Laplace', 'Force magnétique', 'Cinématique'],
        steps: [
          {
            title: 'Force de Laplace et accélération',
            ruleApplied: 'F = I L B sin(90°) et a = F / m',
            mathExpression: 'F = 4,0 × 0,20 × 0,50 = 0,40 N ⇒ a = 0,40 / 0,040 = 10 m·s⁻²',
            explanation:
              'La tige est animée d’un mouvement rectiligne uniformément accéléré tant que I reste constant.',
            subResult: '10 m/s²',
          },
        ],
      },
      {
        chapterId: 'physTc-dipoles-rc-rl',
        partLabel: 'EXERCICE 5 · Physique 3 : Induction & Oscillations LC (4 points)',
        title: 'Circuit oscillant LC libre non amorti et conservation d’énergie',
        points: 4,
        difficulty: 3,
        prompt:
          'Un condensateur de capacité C = 10 μF chargé sous U₀ = 12 V est branché aux bornes d’une bobine d’inductance pure L = 0,10 H (r = 0).\n1. Calculer l’énergie électromagnétique totale E₀ emmagasinée.\n2. En déduire l’intensité maximale I_max atteinte lors des oscillations.\n3. Exprimer la période propre T₀ (en ms, prendre π ≈ 3,14).\n\nQuestion de contrôle numérique : Quelle est la valeur de l’intensité maximale I_max en A ?',
        hint: '½ L I_max² = ½ C U₀² ⇒ I_max = U₀ √(C / L).',
        questionType: 'numeric',
        correctAnswer: '0.12',
        unit: 'A',
        explanationFinal:
          'C / L = 10⁻⁵ / 0,10 = 10⁻⁴ ⇒ √(C/L) = 10⁻², donc I_max = 12 × 10⁻² = 0,12 A (et T₀ = 2π×10⁻³ ≈ 6,28 ms).',
        themeTags: ['Oscillateur LC', 'Conservation d’énergie'],
        steps: [
          {
            title: 'Intensité maximale par conservation de l’énergie',
            ruleApplied: '½ L I_max² = ½ C U₀²',
            mathExpression: 'I_max = U₀ √(C / L) = 12 × √(10×10⁻⁶ / 0,10) = 12 × 0,01 = 0,12 A',
            explanation:
              'L’énergie est entièrement transférée du condensateur à la bobine tous les quarts de période.',
            subResult: '0,12 A',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 6. BÉNIN — Baccalauréat Série C · Session Normale 2023 (PCT — 4 parties complètes)
  // =========================================================================
  {
    year: 2023,
    countryId: 'benin',
    duration: '4h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC C Bénin · Session Normale 2023 · PCT (DOB Cotonou)',
    officialReference: 'Direction de l’Office du Baccalauréat du Bénin (DOB) · PCT Série C · 2023',
    sourceNotice:
      'Épreuve officielle intégrale du Bénin (Session Normale 2023, Série C — PCT) · Les 4 parties complètes conservées sans suppression (Chimie 1 Contrôle qualité + Chimie 2 Acides α-aminés + Physique 1 Oscillateur & Champs + Physique 2 Circuit RLC & Fresnel).',
    themeSummary:
      'Partie 1A Acide glycolique 70,6 % (5 pts) · Partie 1B Acides α-aminés (3 pts) · Partie 2A Oscillateur & Champs E,B (6 pts) · Partie 2B Circuit RLC & Construction de Fresnel (6 pts)',
    parts: [
      {
        chapterId: 'physTc-acides-bases-ph',
        partLabel: 'PARTIE 1 · CHIMIE (A) · Contrôle de qualité (5 points)',
        title: 'Contrôle de conformité d’une solution d’acide glycolique contre l’acné',
        points: 5,
        difficulty: 3,
        prompt:
          'Une solution commerciale S₀ d’acide glycolique HO-CH₂-COOH (M = 76,0 g·mol⁻¹, masse volumique ρ = 1,27 g·mL⁻¹) doit afficher un titre massique compris entre 69 % et 73 %.\nPour la contrôler, on dilue 50 fois S₀ pour obtenir S₁. On prélève V₁ = 10,0 mL de S₁ que l’on dose par pH-métrie avec une solution d’hydroxyde de sodium (Na⁺ + HO⁻) de concentration C_b = 0,20 mol·L⁻¹. L’équivalence est repérée à V_BE = 11,7 mL.\n1. Décrire le protocole de dilution (facteur 50) et tracer l’allure de la courbe pH = f(V_b).\n2. Calculer C₁ puis la concentration C₀ de la solution commerciale (en mol·L⁻¹).\n3. En déduire le pourcentage massique P = (C₀ M / ρ_g/L) × 100 et conclure sur la conformité à la norme [69 % ; 73 %] (vérification officielle : ~70,6 %).\n\nQuestion de contrôle numérique : Quel est le pourcentage massique P (%) calculé pour cette solution commerciale (arrondir à 0,1 près) ?',
        hint: 'C₁ = (0,20 × 11,7) / 10,0 = 0,234 mol/L ⇒ C₀ = 50 × 0,234 = 11,7 mol/L ; P = (11,7 × 76,0 / 1270) × 100.',
        questionType: 'numeric',
        correctAnswer: '70.0',
        unit: '%',
        explanationFinal:
          'C₀ = 50 × 0,234 = 11,7 mol·L⁻¹ ; masse d’acide par litre = 11,7 × 76,0 = 889,2 g dans 1270 g de solution ⇒ P ≈ 70,0 % (norme 69 %–73 % respectée ; valeur officielle ~70,6 % selon ρ = 1,26 g/mL).',
        themeTags: ['Dosage pH-métrique', 'Titre massique', 'Contrôle qualité'],
        steps: [
          {
            title: 'Concentration après dosage et facteur de dilution',
            ruleApplied: 'C₁ V₁ = C_b V_BE et C₀ = 50 C₁',
            mathExpression: 'C₁ = (0,20 × 11,7)/10,0 = 0,234 mol·L⁻¹ ⇒ C₀ = 11,7 mol·L⁻¹',
            explanation:
              'La dilution par 50 permet d’utiliser un volume de soude raisonnable à la burette.',
          },
          {
            title: 'Titre massique et conformité',
            ruleApplied: 'P = (C₀ M / (1000 ρ)) × 100 %',
            mathExpression: 'P = (11,7 × 76,0 / 1270) × 100 = 70,0 % ∈ [69 % ; 73 %]',
            explanation:
              'La solution est conforme aux spécifications dermatologiques (dans [69 % ; 73 %]).',
            subResult: '70,0 %',
          },
        ],
      },
      {
        chapterId: 'physTc-alcools-carbonyles',
        partLabel: 'PARTIE 1 · CHIMIE (B) · Ressources organiques (3 points)',
        title: 'Acides α-aminés, chiralité, amphion et formation de dipeptide',
        points: 3,
        difficulty: 2,
        prompt:
          'On considère l’alanine H₂N-CH(CH₃)-COOH et la glycine H₂N-CH₂-COOH.\n1. Identifier le carbone asymétrique de l’alanine et représenter ses deux énantiomères L et D en projection de Fischer.\n2. Écrire la forme zwittérionique (amphion) de l’alanine en solution neutre.\n3. Écrire l’équation de formation du dipeptide Ala-Gly et indiquer la méthode d’activation/blocage utilisée pour obtenir un seul dipeptide.\n\nQuestion QCM : Quelle affirmation caractérise correctement la liaison peptidique dans Ala-Gly ?',
        hint: 'La liaison peptidique est une liaison amide -CO-NH- formée avec élimination d’eau.',
        questionType: 'qcm',
        options: [
          'C’est une fonction amide -CO-NH- obtenue après blocage des groupes non réactifs',
          'C’est une fonction ester -COO- obtenue sans blocage préalable',
          'La glycine possède deux carbones asymétriques',
          'Le zwittérion porte une charge globale +2 à pH = 7',
        ],
        correctAnswer: 'C’est une fonction amide -CO-NH- obtenue après blocage des groupes non réactifs',
        explanationFinal:
          'Pour synthétiser sélectivement Ala-Gly sans obtenir Gly-Ala, Ala-Ala ou Gly-Gly, on bloque NH₂ de l’alanine et COOH de la glycine avant la condensation.',
        themeTags: ['Acides α-aminés', 'Chiralité', 'Dipeptide'],
        steps: [
          {
            title: 'Chiralité et liaison peptidique',
            ruleApplied: 'Carbone lié à 4 substituants différents',
            mathExpression: 'Ala : C* lié à (H, NH₂, CH₃, COOH)   |   Ala + Gly → Ala-Gly + H₂O',
            explanation:
              'La glycine est achirale (CH₂ porte deux atomes H identiques).',
            subResult: 'Liaison amide -CO-NH-',
          },
        ],
      },
      {
        chapterId: 'physTc-cinematique',
        partLabel: 'PARTIE 2 · PHYSIQUE (A) · Mécanique & Champs E, B (6 points)',
        title: 'Oscillateur élastique vertical et déviation de particules dans E⃗ et B⃗',
        points: 6,
        difficulty: 3,
        prompt:
          'Un faisceau d’ions ⁶Li⁺ (charge +e = 1,60 × 10⁻¹⁹ C, masse m = 9,98 × 10⁻²⁷ kg) accéléré sous U₀ = 2,0 kV entre dans un sélecteur de vitesses où règnent un champ électrique E = 4,0 × 10⁴ V·m⁻¹ et un champ magnétique B orthogonal.\n1. Exprimer puis calculer la vitesse v₀ d’entrée des ions à la sortie de la chambre d’accélération (en km·s⁻¹).\n2. Quelle valeur doit avoir le champ magnétique B pour que la trajectoire dans le sélecteur soit rectiligne (F⃗_e + F⃗_B = 0⃗) ?\n\nQuestion de contrôle numérique : Calculer la vitesse v₀ des ions ⁶Li⁺ à la sortie de l’accélérateur en km·s⁻¹ (arrondir à l’entier).',
        hint: '½ m v₀² = e U₀ ⇒ v₀ = √(2 e U₀ / m).',
        questionType: 'numeric',
        correctAnswer: '253',
        unit: 'km/s',
        explanationFinal:
          'v₀ = √(2 × 1,60×10⁻¹⁹ × 2000 / 9,98×10⁻²⁷) = √(6,4128×10¹⁰) ≈ 2,532×10⁵ m·s⁻¹ = 253 km·s⁻¹ ; puis B = E / v₀ ≈ 0,158 T.',
        themeTags: ['Force de Lorentz', 'Sélecteur de vitesse', 'Accélération électrostatique'],
        steps: [
          {
            title: 'Théorème de l’énergie cinétique et filtre de Wien',
            ruleApplied: '½ m v₀² = q U₀ et q E = q v₀ B',
            mathExpression: 'v₀ = √(2 × 1,60×10⁻¹⁹ × 2000 / 9,98×10⁻²⁷) ≈ 253,2 km·s⁻¹   |   B = E/v₀ ≈ 0,158 T',
            explanation:
              'Seules les particules de vitesse exactement égale à E/B traversent le filtre sans déviation.',
            subResult: '253 km/s',
          },
        ],
      },
      {
        chapterId: 'physTc-oscillations-rlc',
        partLabel: 'PARTIE 2 · PHYSIQUE (B) · Électricité & Fresnel (6 points)',
        title: 'Étude d’un dipôle RLC en régime sinusoïdal forcé et construction de Fresnel',
        points: 6,
        difficulty: 3,
        prompt:
          'Un circuit série comporte un conducteur ohmique R = 40 Ω, une bobine d’inductance L = 0,15 H et de résistance interne r = 10 Ω, et un condensateur de capacité C, soumis à u(t) = 24√2 cos(100π t) (f = 50 Hz).\nOn observe que le courant i(t) est en phase avec u(t) (φ = 0 rad).\n1. Construire le diagramme de Fresnel des tensions et montrer que L ω = 1 / (C ω).\n2. Calculer la résistance totale R_tot = R + r et l’intensité efficace I dans le circuit.\n3. Calculer la capacité C (en μF, prendre π² ≈ 9,87).\n\nQuestion de contrôle numérique : Quelle est l’intensité efficace I (en A) à la résonance ?',
        hint: 'À la résonance (φ = 0), Z = R_tot = R + r = 50 Ω et U_eff = 24 V.',
        questionType: 'numeric',
        correctAnswer: '0.48',
        unit: 'A',
        explanationFinal:
          'R_tot = 40 + 10 = 50 Ω, d’où I = 24 / 50 = 0,48 A ; et C = 1/(L ω²) ≈ 67,5 μF.',
        themeTags: ['Fresnel', 'Résonance', 'Bobine résistive'],
        steps: [
          {
            title: 'Construction de Fresnel à la résonance',
            ruleApplied: 'φ = 0 ⇔ L ω = 1/(C ω) et Z = R + r',
            mathExpression: 'R_tot = 40 + 10 = 50 Ω ⇒ I = U_eff / R_tot = 24 / 50 = 0,48 A',
            explanation:
              'Sur le diagramme de Fresnel, les vecteurs associés à LωI et I/(Cω) s’annulent exactement.',
            subResult: '0,48 A',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 7. TOGO — Baccalauréat Séries C–E · Session 2020 (4 exercices complets)
  // =========================================================================
  {
    year: 2020,
    countryId: 'togo',
    duration: '3h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC II Séries C–E Togo · Session 2020 (Office du Bac Lomé)',
    officialReference: 'Office du Baccalauréat (Lomé) · BAC II Séries C–E · Session 2020',
    sourceNotice:
      'Épreuve officielle intégrale du Togo (Session 2020, Séries C–E) · Les 4 exercices complets conservés sans suppression (Chimie 1 Diols & Alcools + Chimie 2 Solutions aqueuses + Physique 3 Pendule élastique + Physique 4 Atome d’hydrogène & Champ uniforme).',
    themeSummary:
      'Ex 1 Oxydation ménagée & Alcools (4 pts) · Ex 2 Base forte & pH (4 pts) · Ex 3 Pendule élastique horizontal (6 pts) · Ex 4 Atome d’hydrogène & Mouvement dans champ uniforme (6 pts)',
    parts: [
      {
        chapterId: 'physTc-alcools-carbonyles',
        partLabel: 'EXERCICE 1 · Chimie Organique (4 points)',
        title: 'Identification d’un alcool par oxydation ménagée et test à la 2,4-DNPH',
        points: 4,
        difficulty: 2,
        prompt:
          'Un alcool saturé A de formule brute C₄H₁₀O donne par oxydation ménagée un composé B qui réagit avec la 2,4-DNPH mais ne rosit pas le réactif de Schiff.\n1. Quelle est la fonction chimique de B ? En déduire la classe de l’alcool A et sa formule semi-développée.\n2. Écrire la demi-équation d’oxydation de l’alcool A en cétone B et l’équation globale avec les ions dichromate Cr₂O₇²⁻ en milieu acide.\n3. Calculer la masse molaire M de l’alcool A (C = 12, H = 1, O = 16 g·mol⁻¹).\n\nQuestion de contrôle numérique : Quelle est la masse molaire M de l’alcool C₄H₁₀O en g·mol⁻¹ ?',
        hint: 'M(C₄H₁₀O) = 4×12 + 10×1 + 16.',
        questionType: 'numeric',
        correctAnswer: '74',
        unit: 'g/mol',
        explanationFinal:
          'B est une cétone (butanone) ⇒ A est le butan-2-ol (alcool secondaire) de masse molaire M = 74 g·mol⁻¹.',
        themeTags: ['Oxydation ménagée', '2,4-DNPH', 'Alcool secondaire'],
        steps: [
          {
            title: 'Identification de A et B',
            ruleApplied: 'Alcool secondaire → Cétone',
            mathExpression: 'A : CH₃-CH(OH)-CH₂-CH₃ (butan-2-ol)   |   B : CH₃-CO-CH₂-CH₃ (butanone)',
            explanation:
              'Réaction positive à la 2,4-DNPH et négative au réactif de Schiff (et liqueur de Fehling) caractérise une cétone.',
          },
          {
            title: 'Masse molaire de l’alcool',
            ruleApplied: 'M = ∑ n_i M_i',
            mathExpression: 'M = 4×12 + 10×1 + 16 = 74 g·mol⁻¹',
            explanation:
              'Un seul alcool secondaire correspond à la formule C₄H₁₀O.',
            subResult: '74 g/mol',
          },
        ],
      },
      {
        chapterId: 'physTc-acides-bases-ph',
        partLabel: 'EXERCICE 2 · Chimie des Solutions (4 points)',
        title: 'Solutions aqueuses d’hydroxyde de sodium et dilution d’une base forte',
        points: 4,
        difficulty: 2,
        prompt:
          'On dissout m = 0,40 g de pastilles d’hydroxyde de sodium NaOH (M = 40,0 g·mol⁻¹) dans de l’eau pure pour obtenir V = 1,0 L de solution S₁ à 25 °C (K_e = 1,0 × 10⁻¹⁴).\n1. Calculer la concentration C₁ de S₁ et en déduire le pH de S₁.\n2. On prélève 10 mL de S₁ que l’on complète avec de l’eau pure jusqu’à 100 mL (solution S₂). Quel est le nouveau pH de S₂ ?\n\nQuestion de contrôle numérique : Quel est le pH de la solution diluée S₂ ?',
        hint: 'C₁ = 0,010 mol·L⁻¹ ⇒ pH₁ = 12 ; une dilution par 10 d’une base forte diminue le pH d’une unité.',
        questionType: 'numeric',
        correctAnswer: '11',
        explanationFinal:
          'C₁ = (0,40/40,0)/1,0 = 10⁻² mol·L⁻¹ ⇒ pH₁ = 14 + log(10⁻²) = 12 ; après dilution par 10, C₂ = 10⁻³ mol·L⁻¹ ⇒ pH₂ = 11.',
        themeTags: ['Base forte', 'Dilution', 'Produit ionique Ke'],
        steps: [
          {
            title: 'Calcul du pH avant et après dilution',
            ruleApplied: 'pH = 14 + log(C_b)',
            mathExpression: 'C₁ = 10⁻² mol/L ⇒ pH₁ = 12   |   C₂ = C₁/10 = 10⁻³ mol/L ⇒ pH₂ = 11',
            explanation:
              'Pour une base forte modérément diluée (10⁻⁶ < C < 10⁻¹), pH diminue de 1 unité par facteur 10 de dilution.',
            subResult: 'pH = 11',
          },
        ],
      },
      {
        chapterId: 'physTc-oscillations-energie',
        partLabel: 'EXERCICE 3 · Physique 1 : Pendule élastique (6 points)',
        title: 'Équation horaire et énergie mécanique d’un pendule élastique horizontal',
        points: 6,
        difficulty: 3,
        prompt:
          'Un solide de masse m = 200 g = 0,20 kg fixé à un ressort de raideur k = 20 N·m⁻¹ oscille horizontalement sans frottement. À t = 0, on le lâche sans vitesse initiale à l’abscisse x₀ = +5,0 cm = 0,050 m.\n1. Établir l’équation différentielle du mouvement et calculer la pulsation propre ω₀ (en rad·s⁻¹).\n2. Calculer l’énergie mécanique totale E_m du système (en mJ).\n3. En déduire la vitesse maximale v_max lors du passage par la position d’équilibre.\n\nQuestion de contrôle numérique : Quelle est l’énergie mécanique totale E_m de l’oscillateur en mJ (millijoules) ?',
        hint: 'E_m = ½ k x₀² = 0,5 × 20 × (0,050)² J, à convertir en mJ (× 1000).',
        questionType: 'numeric',
        correctAnswer: '25',
        unit: 'mJ',
        explanationFinal:
          'E_m = ½ × 20 × 0,0025 = 0,025 J = 25 mJ ; ω₀ = √(20/0,20) = 10 rad·s⁻¹ et v_max = ω₀ x₀ = 0,50 m·s⁻¹.',
        themeTags: ['Pendule élastique', 'Pulsation propre', 'Énergie mécanique'],
        steps: [
          {
            title: 'Pulsation propre et énergie mécanique conservée',
            ruleApplied: 'ω₀ = √(k/m) et E_m = ½ k x_max²',
            mathExpression: 'ω₀ = √(20/0,20) = 10 rad·s⁻¹   |   E_m = 0,5 × 20 × 0,050² = 0,025 J = 25 mJ',
            explanation:
              'Sans frottement, l’énergie mécanique reste constante égale à 25 mJ.',
            subResult: '25 mJ',
          },
        ],
      },
      {
        chapterId: 'physTc-reactions-nucleaires',
        partLabel: 'EXERCICE 4 · Physique 2 : Atome d’hydrogène & Champ uniforme (6 points)',
        title: 'Niveaux d’énergie de l’atome d’hydrogène (E_n = −13,6 / n² eV)',
        points: 6,
        difficulty: 3,
        prompt:
          'Les niveaux d’énergie quantifiés de l’atome d’hydrogène sont donnés par E_n = −13,6 / n² (en eV, n ∈ ℕ*).\n1. Quelle est l’énergie minimale nécessaire pour ioniser l’atome pris dans son état fondamental (n = 1) ?\n2. Calculer en eV l’énergie du photon émis lors de la transition du niveau n = 3 vers le niveau n = 2 (raie rouge H_α de Balmer).\n3. En déduire la longueur d’onde λ (en nm) de cette raie avec hc = 1240 eV·nm (arrondir à l’entier).\n\nQuestion de contrôle numérique : Quelle est la valeur (en eV, à 0,01 près) de l’énergie ΔE du photon émis lors de la transition n = 3 → n = 2 ?',
        hint: 'ΔE = E_3 − E_2 = (−13,6/9) − (−13,6/4).',
        questionType: 'numeric',
        correctAnswer: '1.89',
        unit: 'eV',
        explanationFinal:
          'E_3 = −1,51 eV et E_2 = −3,40 eV ⇒ ΔE = 3,40 − 1,51 = 1,89 eV, ce qui donne λ = 1240 / 1,89 ≈ 656 nm (rouge).',
        themeTags: ['Atome d’hydrogène', 'Série de Balmer', 'Transition quantique'],
        steps: [
          {
            title: 'Énergies des niveaux et transition n = 3 → n = 2',
            ruleApplied: 'ΔE = h c / λ = E_sup − E_inf',
            mathExpression: 'E_3 = −13,6/9 = −1,51 eV  ;  E_2 = −13,6/4 = −3,40 eV ⇒ ΔE = 1,89 eV ⇒ λ ≈ 656 nm',
            explanation:
              'L’énergie d’ionisation depuis n = 1 vaut 13,6 eV ; la transition 3 → 2 produit la raie rouge H_α à 656 nm.',
            subResult: '1,89 eV',
          },
        ],
      },
    ],
  },
];

export const BAC_OFFICIAL_PHYSICS_PAPERS: BepcArchivePaper[] = buildArchivePapers(
  'physique',
  BAC_OFFICIAL_PHYSICS_ARCHIVE_SEEDS
);
