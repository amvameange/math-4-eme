import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_TC_NUCLEAIRE: Chapter[] = [
  {
    id: 'physTc-noyau-radioactivite',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'nucleaire',
    order: 9,
    title: 'Noyau Atomique, Radioactivité (α, β⁻, β⁺, γ) & Décroissance',
    badge: 'Physique Tle C · Ch. 9',
    shortDesc: 'Défaut de masse Δm, énergie de liaison E_l = Δm·c², courbe d’Aston, lois de conservation de Soddy et loi exponentielle N(t) = N₀ e^(-λt).',
    themeColor: '#f43f5e',
    themeGradient: 'from-rose-500 via-pink-500 to-purple-500',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-noyau-radioactivite',
    bossMeta: { name: 'PHYSICIEN NUCLÉAIRE D’OKLO', emoji: '☢️', xp: 210 },
    kokoSpeech:
      'Le Gabon possède avec Oklo le seul réacteur nucléaire naturel connu sur Terre ! Retiens les 3 lois clés : conservation de A et Z (Soddy), décroissance N(t) = N₀ e^(-λt) avec λ = ln(2)/t₁/₂, et défaut de masse Δm = [Z m_p + (A-Z) m_n] - m_noyau !',
    realWorldHook: {
      title: 'Les réacteurs nucléaires naturels d’Oklo & Mounana au Gabon',
      scenario:
        'Il y a environ 2 milliards d’années, les gisements riches en uranium 235 d’Oklo (Haut-Ogooué) ont déclenché des réactions nucléaires naturelles entretenues par les eaux souterraines.',
      question:
        'Comment dater un échantillon fossile au carbone 14 (t₁/₂ = 5 730 ans) et calculer l’énergie de liaison par nucléon d’un noyau ?',
    },
    unitsTable: [
      { symbol: '1 u', quantity: 'Unité de masse atomique', unit: '931,5 MeV/c² = 1,66×10⁻²⁷ kg', instrument: 'ΔE = Δm · c²' },
      { symbol: 'E_l / A', quantity: 'Énergie de liaison par nucléon', unit: 'MeV / nucléon', instrument: 'Courbe d’Aston (max vers Fe)' },
      { symbol: 'A(t) = λ N(t)', quantity: 'Activité radioactive', unit: 'Becquerel (Bq = s⁻¹)', instrument: 'Compteur Geiger-Müller' },
      { symbol: 't₁/₂ = ln(2)/λ', quantity: 'Demi-vie radioactive', unit: 's, h ou ans', instrument: 'N(n·t₁/₂) = N₀ / 2ⁿ' },
    ],
    experimentOrActivity: {
      title: 'Simulation du tirage aléatoire de la décroissance radioactive (dés à 6 faces)',
      materials: ['Lot de 100 dés identiques', 'Chronomètre / tableau de comptage', 'Tableur graphique N(n)'],
      observation:
        'À chaque lancer, on retire tous les dés affichant « 6 » (probabilité p = 1/6). Le nombre N restant décroît selon N(n) = N₀ (5/6)ⁿ.',
      conclusion:
        'La désintégration radioactive est un phénomène aléatoire, spontané et inéluctable dont la loi macroscopique suit une exponentielle décroissante N(t) = N₀ e^(-λt).',
    },
    revisionChecklist: [
      'Je sais écrire et équilibrer toute équation α (⁴₂He), β⁻ (⁰₋₁e + antineutrino) et β⁺ (⁰₊₁e + neutrino).',
      'Je maîtrise l’équivalence 1 u = 931,5 MeV/c² pour calculer E_l en MeV puis en Joules (1 MeV = 1,6×10⁻¹³ J).',
      'Je sais calculer l’âge t d’un échantillon par datation : t = (t₁/₂ / ln 2) · ln(A₀ / A(t)).',
    ],
    keyFormulas: [
      'Lois de Soddy : Conservation du nombre de masse A et du nombre de charge Z',
      'Défaut de masse : Δm = Z m_p + (A - Z) m_n - m_noyau > 0  ;  E_l = Δm · c²',
      'Décroissance : N(t) = N₀ e^(-λt) ; A(t) = A₀ e^(-λt) = λ N(t) ; t₁/₂ = ln(2) / λ',
      'Datation : t = -(1/λ) ln(N/N₀) = [t₁/₂ / ln(2)] · ln(A₀ / A)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Noyau & Radioactivité',
      slogan: 'Soddy (A, Z) · E_l = Δm·c² · N(t) = N₀ e^(-λt)',
      summaryBulletPoints: [
        'Particule α = noyau d’hélium ⁴₂He ; électron β⁻ = ⁰₋₁e (Z augmente de 1) ; positon β⁺ = ⁰₊₁e (Z diminue de 1).',
        'La désexcitation γ* émet un photon γ sans modifier ni A ni Z.',
        'Plus E_l/A est grande, plus le noyau est stable (maximum autour de A ≈ 60 sur la courbe d’Aston).',
        'Au bout de n demi-vies (t = n·t₁/₂), il reste exactement N₀ / 2ⁿ noyaux.',
      ],
      verticalFormulas: [
        {
          name: 'Énergie de liaison de l’Hélium ⁴₂He',
          badge: '⚛️',
          steps: [
            'm_p = 1,00728 u | m_n = 1,00866 u | m(⁴He) = 4,00150 u',
            'Δm = 2(1,00728) + 2(1,00866) - 4,00150 = 0,03038 u',
            'E_l = 0,03038 × 931,5 = 28,30 MeV',
            'E_l / A = 28,30 ÷ 4 = 7,07 MeV/nucléon',
          ],
          resultHighlight: 'E_l ≈ 28,3 MeV (7,07 MeV/nucl.)',
          explanation: 'On multiplie directement Δm (en u) par 931,5 pour obtenir MeV.',
        },
        {
          name: 'Datation au Carbone 14',
          badge: '🦴',
          steps: [
            't₁/₂ = 5 730 ans | A(t) = A₀ / 4',
            'A₀ / 4 = A₀ / 2ⁿ  ➔  2ⁿ = 4  ➔  n = 2',
            't = 2 × t₁/₂ = 2 × 5 730',
            't = 11 460 ans',
          ],
          resultHighlight: 't = 11 460 ans',
          explanation: 'Lorsque le rapport est une puissance de 2 (1/2, 1/4, 1/8, 1/16), le calcul est immédiat.',
        },
      ],
      kokoTip: 'Pour la radioactivité β⁻, un neutron devient un proton + électron : donc Z du noyau fils vaut Z_père + 1 !',
      pitfallToAvoid: 'Oublier le facteur 10⁶ entre eV et MeV : 1 MeV = 1,6×10⁻¹³ J (et non 10⁻¹⁹ J) !',
    },
    sections: [
      {
        title: '1. Cohésion du noyau, défaut de masse et courbe d’Aston',
        explanation: [
          'La masse d’un noyau est toujours inférieure à la somme des masses de ses nucléons séparés : Δm = Z m_p + (A - Z) m_n - m_noyau > 0.',
          'Selon Einstein, E_l = Δm·c² représente l’énergie à fournir pour dissocier le noyau au repos en nucléons isolés.',
        ],
        rules: [
          {
            name: 'Stabilité nucléaire et courbe d’Aston',
            description: 'La courbe -E_l/A en fonction de A passe par un minimum autour du Fer ⁵⁶Fe (E_l/A ≈ 8,8 MeV/nucléon). Les noyaux légers fusionnent et les lourds fissionnent pour gagner en stabilité.',
            example: 'Δm = 0,020 u | E_l = 0,020 × 931,5 | E_l = 18,63 MeV',
          },
        ],
      },
      {
        title: '2. Radioactivité α, β⁻, β⁺, γ et loi de décroissance',
        explanation: [
          'La constante radioactive λ vérifie A(t) = -dN/dt = λ N(t) = A₀ e^(-λt). La demi-vie t₁/₂ = ln(2)/λ est le temps nécessaire pour que la moitié des noyaux se désintègrent.',
        ],
        rules: [
          {
            name: 'Équation de désintégration α de l’Uranium 238',
            description: 'Les lois de Soddy imposent A_père = A_fils + 4 et Z_père = Z_fils + 2.',
            example: '²³⁸₉₂U ➔ ²³⁴₉₀Th + ⁴₂He (α)  ;  ¹⁴₆C ➔ ¹⁴₇N + ⁰₋₁e (β⁻) + ν̄',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'physTc-9-1',
        'physTc-noyau-radioactivite',
        'Ex 1 : Équilibrer une équation β⁻ (Cobalt 60)',
        1,
        'Le noyau de Cobalt ⁶⁰₂₇Co est radioactif β⁻ et donne un noyau de Nickel Ni.\nQuel est le noyau de Nickel obtenu ?',
        ['⁶⁰₂₈Ni', '⁵⁶₂₅Ni', '⁶⁰₂₆Ni', '⁶¹₂₇Ni'],
        '⁶⁰₂₈Ni',
        'En β⁻, on émet ⁰₋₁e donc 60 = A + 0 et 27 = Z - 1.',
        'Z = 27 + 1 = 28 et A = 60, soit ⁶⁰₂₈Ni.',
        [
          {
            title: 'Lois de conservation de Soddy',
            explanation: '⁶⁰₂₇Co ➔ ᴬ_Z Ni + ⁰₋₁e.',
            math: 'A = 60 - 0 = 60  ;  27 = Z - 1 ➔ Z = 28',
            subResult: '⁶⁰₂₈Ni',
          },
        ]
      ),
      mkNum(
        'physTc-9-2',
        'physTc-noyau-radioactivite',
        'Ex 2 : Activité résiduelle après 3 demi-vies',
        1,
        'Une source d’Iode 131 (t₁/₂ = 8 jours) possède une activité initiale A₀ = 800 kBq.\nQuelle est son activité (en kBq) au bout de t = 24 jours ?',
        '100',
        '24 jours = 3 × 8 jours = 3 t₁/₂ donc A = A₀ / 2³.',
        'L’activité restante vaut A = 100 kBq.',
        [
          {
            title: 'Nombre de demi-vies',
            explanation: 'n = t / t₁/₂.',
            math: 'n = 24 ÷ 8 = 3',
            subResult: 'n = 3',
          },
          {
            title: 'Division par 2ⁿ',
            explanation: 'A = A₀ / 2³ = A₀ / 8.',
            math: 'A = 800 ÷ 8 = 100 kBq',
            subResult: '100 kBq',
          },
        ],
        'kBq'
      ),
      mkNum(
        'physTc-9-3',
        'physTc-noyau-radioactivite',
        'Ex 3 : Énergie de liaison totale en MeV',
        2,
        'Le défaut de masse du noyau de Deutérium ²₁H vaut Δm = 0,00239 u (1 u = 931,5 MeV/c²).\nCalcule son énergie de liaison E_l en MeV (arrondie à 0,01 près).',
        '2.23',
        'Multiplie Δm par 931,5.',
        'E_l = 0,00239 × 931,5 ≈ 2,23 MeV.',
        [
          {
            title: 'Calcul via 1 u = 931,5 MeV/c²',
            explanation: 'E_l = Δm × 931,5.',
            math: 'E_l = 0,00239 × 931,5 ≈ 2,226 MeV ≈ 2,23 MeV',
            subResult: '2,23 MeV',
          },
        ],
        'MeV'
      ),
      mkNum(
        'physTc-9-4',
        'physTc-noyau-radioactivite',
        'Ex 4 : Constante radioactive λ d’un isotope',
        3,
        'La demi-vie du Radon 222 est t₁/₂ = 3,8 jours = 3,28×10⁵ s (ln 2 ≈ 0,693).\nCalcule sa constante radioactive λ en 10⁻⁶ s⁻¹ (arrondie à 0,01 près).',
        '2.11',
        'λ = ln(2) / t₁/₂ = 0,693 / (3,28×10⁵).',
        'λ ≈ 2,11×10⁻⁶ s⁻¹.',
        [
          {
            title: 'Relation λ et t₁/₂',
            explanation: 'λ = ln(2) / t₁/₂.',
            math: 'λ = 0,693 ÷ 3,28×10⁵ ≈ 2,11×10⁻⁶ s⁻¹',
            subResult: '2,11×10⁻⁶ s⁻¹',
          },
        ],
        '10⁻⁶ s⁻¹'
      ),
    ],
  },

  {
    id: 'physTc-reactions-nucleaires',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'nucleaire',
    order: 10,
    title: 'Réactions Nucléaires Provoquées : Fission, Fusion & Bilan Énergétique',
    badge: 'Physique Tle C · Ch. 10',
    shortDesc: 'Fission de l’uranium 235, fusion deutérium-tritium, bilan de masse Δm et bilan des énergies de liaison E_lib = ΣE_l(produits) - ΣE_l(réactifs).',
    themeColor: '#fb7185',
    themeGradient: 'from-rose-500 via-orange-500 to-amber-500',
    readingTimeMinutes: 14,
    illustrationKey: 'tc-fission-fusion',
    bossMeta: { name: 'MAÎTRE DES BILANS D’EINSTEIN', emoji: '💥', xp: 210 },
    kokoSpeech:
      'Attention au signe pour le bilan énergétique d’une réaction nucléaire : avec les masses, ΔE = (Σm_produits - Σm_réactifs)·c² < 0 (l’énergie libérée est E_lib = |ΔE|). Mais avec les énergies de liaison, c’est PRODUITS MOINS RÉACTIFS : E_lib = ΣE_l(produits) - ΣE_l(réactifs) !',
    realWorldHook: {
      title: 'Énergie libérée par 1 kg d’Uranium 235 (comparaison thermique)',
      scenario:
        'Une seule fission d’uranium 235 libère environ 200 MeV (3,2×10⁻¹¹ J). Comparons la masse d’uranium enrichi à la masse de fioul nécessaire pour alimenter une grande centrale électrique.',
      question:
        'Combien de mégajoules libère la fission complète de 1,0 g d’uranium 235 (M = 235 g/mol, N_A = 6,02×10²³ mol⁻¹) ?',
    },
    unitsTable: [
      { symbol: 'E_lib = |Δm|·c²', quantity: 'Énergie libérée par une réaction', unit: 'MeV ou J', instrument: 'Δm = Σm(réactifs) - Σm(produits) > 0' },
      { symbol: 'E_lib = ΣE_l(prod) - ΣE_l(réac)', quantity: 'Bilan par énergies de liaison', unit: 'MeV', instrument: 'Attention à l’ordre !' },
      { symbol: 'N = (m/M)·N_A', quantity: 'Nombre de noyaux dans m', unit: 'noyaux', instrument: 'E_tot = N × E_lib' },
    ],
    experimentOrActivity: {
      title: 'Comparaison énergétique Fission (²³⁵U) vs Fusion (²H + ³H) par nucléon',
      materials: ['Données de masses nucléaires', 'Diagramme d’Aston', 'Calculatrice scientifique'],
      observation:
        'La fission de ²³⁵U + ¹n libère ≈ 200 MeV pour 236 nucléons (0,85 MeV/nucléon). La fusion ²H + ³H ➔ ⁴He + ¹n libère 17,6 MeV pour 5 nucléons (3,52 MeV/nucléon).',
      conclusion:
        'À masse égale de combustible, la fusion nucléaire libère environ 4 fois plus d’énergie que la fission et produit très peu de déchets radioactifs à vie longue.',
    },
    revisionChecklist: [
      'Je sais trouver le nombre de neutrons émis lors d’une fission en équilibrant A et Z.',
      'Je maîtrise les deux formules du bilan énergétique (par les masses ET par les énergies de liaison) sans inverser le signe.',
      'Je sais calculer la consommation journalière d’uranium connaissant la puissance électrique P_e et le rendement η.',
    ],
    keyFormulas: [
      'Fission type : ¹₀n + ²³⁵₉₂U ➔ ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n',
      'Fusion (étoiles / tokamak) : ²₁H + ³₁H ➔ ⁴₂He + ¹₀n',
      'Bilan par les masses : E_lib = [Σm(réactifs) - Σm(produits)] · c² > 0',
      'Bilan par les énergies de liaison : E_lib = ΣE_l(produits) - ΣE_l(réactifs) > 0 ;  P_élec = η · (E_tot / Δt)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Fission, Fusion & Rendement',
      slogan: 'Masses : Réactifs − Produits · Énergies de liaison : Produits − Réactifs',
      summaryBulletPoints: [
        'Un neutron libre ¹₀n n’a ni défaut de masse ni énergie de liaison (E_l(¹n) = 0).',
        '1 MeV = 1,6×10⁻¹³ J et 1 u·c² = 931,5 MeV.',
        'Pour 1 g d’Uranium 235 : N = (1 / 235) × 6,02×10²³ ≈ 2,56×10²¹ noyaux.',
        'Rendement de centrale : η = P_élec / P_nucléaire = E_élec / E_libérée.',
      ],
      verticalFormulas: [
        {
          name: 'Énergie libérée par fusion D-T',
          badge: '☀️',
          steps: [
            '²₁H + ³₁H ➔ ⁴₂He + ¹₀n',
            'm(²H)+m(³H) = 2,01355 + 3,01550 = 5,02905 u',
            'm(⁴He)+m(¹n) = 4,00150 + 1,00866 = 5,01016 u',
            'Δm = 0,01889 u ➔ E_lib = 0,01889 × 931,5 = 17,6 MeV',
          ],
          resultHighlight: 'E_lib ≈ 17,6 MeV',
          explanation: 'Cette réaction alimente les recherches sur la fusion contrôlée (ITER).',
        },
        {
          name: 'Bilan avec les énergies de liaison',
          badge: '⚖️',
          steps: [
            'E_l(²H) = 2,23 MeV ; E_l(³H) = 8,48 MeV ; E_l(⁴He) = 28,30 MeV',
            'E_lib = E_l(⁴He) - [E_l(²H) + E_l(³H)]',
            'E_lib = 28,30 - (2,23 + 8,48) = 28,30 - 10,71',
            'E_lib = 17,59 MeV ≈ 17,6 MeV',
          ],
          resultHighlight: '17,6 MeV (identique !)',
          explanation: 'Les deux méthodes donnent exactement le même résultat.',
        },
      ],
      kokoTip: 'Pour retenir le sens : E_lib = E_l(après) − E_l(avant) car les produits sont PLUS liés (plus stables) que les réactifs !',
      pitfallToAvoid: 'Inverser l’ordre dans ΣE_l(produits) - ΣE_l(réactifs) et obtenir un résultat négatif pour une réaction exothermique !',
    },
    sections: [
      {
        title: '1. Réactions de fission et de fusion nucléaires',
        explanation: [
          'La fission est l’éclatement d’un noyau lourd fissile (²³⁵U, ²³⁹Pu) sous l’impact d’un neutron thermique en deux noyaux plus légers et plusieurs neutrons (réaction en chaîne).',
          'La fusion est l’union à très haute température de deux noyaux légers (Deutérium + Tritium) pour former un noyau d’Hélium plus stable.',
        ],
        rules: [
          {
            name: 'Conservation du nombre de nucléons lors d’une fission',
            description: 'N’oublie jamais de compter le neutron incident à gauche de l’équation pour calculer le nombre x de neutrons émis à droite !',
            example: '¹₀n + ²³⁵₉₂U ➔ ¹³⁹₅₄Xe + ⁹⁵₃₈Sr + x ¹₀n | 1 + 235 = 139 + 95 + x | x = 2 neutrons',
          },
        ],
      },
      {
        title: '2. Bilan énergétique et rendement d’un réacteur',
        explanation: [
          'Toute réaction nucléaire spontanée ou exothermique s’accompagne d’une diminution de masse Δm = Σm_réactifs - Σm_produits > 0 convertie en énergie cinétique et rayonnement γ.',
        ],
        rules: [
          {
            name: 'Puissance nucléaire et consommation de combustible',
            description: 'Si une centrale fournit une puissance électrique P_e avec un rendement η, la puissance nucléaire consommée vaut P_th = P_e / η.',
            example: 'P_e = 900 MW ; η = 0,30 | P_th = 900 ÷ 0,30 | P_th = 3 000 MW = 3,0 GW',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-10-1',
        'physTc-reactions-nucleaires',
        'Ex 1 : Nombre de neutrons émis dans une fission',
        1,
        'On considère la fission : ¹₀n + ²³⁵₉₂U ➔ ⁹⁴₃₈Sr + ¹⁴⁰₅₄Xe + x ¹₀n.\nDétermine le nombre x de neutrons émis.',
        '2',
        '1 + 235 = 94 + 140 + x.',
        '2 neutrons sont émis.',
        [
          {
            title: 'Conservation de A',
            explanation: 'Nombre total de nucléons avant = après.',
            math: '1 + 235 = 94 + 140 + x ➔ 236 = 234 + x ➔ x = 2',
            subResult: 'x = 2',
          },
        ]
      ),
      mkNum(
        'physTc-10-2',
        'physTc-reactions-nucleaires',
        'Ex 2 : Bilan par les énergies de liaison',
        2,
        'Lors de la fusion ²H + ³H ➔ ⁴He + ¹n, on donne E_l(²H) = 2,2 MeV, E_l(³H) = 8,5 MeV et E_l(⁴He) = 28,3 MeV.\nCalcule l’énergie libérée E_lib en MeV.',
        '17.6',
        'E_lib = ΣE_l(produits) - ΣE_l(réactifs) avec E_l(¹n) = 0.',
        'E_lib = 28,3 - (2,2 + 8,5) = 17,6 MeV.',
        [
          {
            title: 'Bilan des énergies de liaison',
            explanation: 'Produits moins réactifs.',
            math: 'E_lib = 28,3 - (2,2 + 8,5) = 17,6 MeV',
            subResult: '17,6 MeV',
          },
        ],
        'MeV'
      ),
      mkNum(
        'physTc-10-3',
        'physTc-reactions-nucleaires',
        'Ex 3 : Conversion d’une fission de 200 MeV en Joules',
        2,
        'La fission d’un noyau d’uranium 235 libère E = 200 MeV.\nExprime cette énergie en 10⁻¹¹ Joules (sachant 1 MeV = 1,6×10⁻¹³ J).',
        '3.2',
        'E = 200 × 1,6×10⁻¹³ = 3,2×10⁻¹¹ J.',
        'Une fission libère 3,2×10⁻¹¹ J.',
        [
          {
            title: 'Conversion MeV ➔ J',
            explanation: '1 MeV = 1,6×10⁻¹³ J.',
            math: 'E = 200 × 1,6×10⁻¹³ = 3,2×10⁻¹¹ J',
            subResult: '3,2×10⁻¹¹ J',
          },
        ],
        '10⁻¹¹ J'
      ),
      mkNum(
        'physTc-10-4',
        'physTc-reactions-nucleaires',
        'Ex 4 : Rendement d’une centrale nucléaire',
        3,
        'Un réacteur nucléaire libère une puissance thermique P_th = 2 500 MW et délivre au réseau une puissance électrique P_e = 850 MW.\nCalcule le rendement η en %.',
        '34',
        'η = (P_e / P_th) × 100.',
        'Le rendement du réacteur est de 34 %.',
        [
          {
            title: 'Rapport des puissances',
            explanation: 'η = P_e / P_th.',
            math: 'η = 850 ÷ 2 500 = 0,34 = 34 %',
            subResult: '34 %',
          },
        ],
        '%'
      ),
    ],
  },
];
