import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise, pickRandom, randInt } from './types';
import { assembleHardMathExercise, fmt, HardQuestionSpec } from './tcHardMathHelpers';

export function generateHardMathCh12to14(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  vMod: number
): GeneratedExercise | null {
  switch (chapterId) {
    // -------------------------------------------------------------------------
    // 12. GÉOMÉTRIE DANS L'ESPACE
    // -------------------------------------------------------------------------
    case 'mathTc-geometrie-espace': {
      if (vMod === 0) {
        // Tétraèdre ABCD : A(k,0,0), B(0,k,0), C(0,0,k), D(k,k,k)
        // AB = (-k, k, 0), AC = (-k, 0, k)
        // AB ^ AC = (k^2, k^2, k^2) => n = (1, 1, 1) !
        // Plan (ABC) : x + y + z - k = 0
        // Aire ABC = 0.5 * ||AB ^ AC|| = 0.5 * k^2 * sqrt(3)
        // Distance D(k,k,k) au plan (ABC) : |3k - k| / sqrt(3) = 2k / sqrt(3)
        // Volume ABCD = (1/3) * Aire(ABC) * dist(D, ABC) = (1/3)*(0.5*k^2*sqrt(3))*(2k/sqrt(3)) = k^3 / 3 !
        // Projeté H de D(k,k,k) sur (ABC): H = (k,k,k) - t*(1,1,1) avec 3(k-t)=k => t = 2k/3 => H = (k/3, k/3, k/3) !
        const k = pickRandom([3, 6, 9]);
        const areaABC = 0.5 * k * k * Math.sqrt(3);
        const distD = (2 * k) / Math.sqrt(3);
        const volABCD = Math.pow(k, 3) / 3;
        const coordH = k / 3;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Dans l'espace orthonormé, on place A(${k} ; 0 ; 0), B(0 ; ${k} ; 0), C(0 ; 0 ; ${k}) et D(${k} ; ${k} ; ${k}). Calcule le produit scalaire AB · AC.`,
            questionType: 'numeric',
            correctAnswer: String(k * k),
            hint: `AB = (-${k} ; ${k} ; 0) et AC = (-${k} ; 0 ; ${k}).`,
            ruleApplied: 'Produit scalaire analytique',
            mathExpression: `AB · AC = (-${k})(-${k}) + 0 + 0 = ${k * k}`,
            explanation: `AB · AC = ${k * k}.`,
          },
          {
            questionPrompt: `Calcule la première composante (x) du produit vectoriel u = AB ∧ AC.`,
            questionType: 'numeric',
            correctAnswer: String(k * k),
            hint: `u_x = y_AB·z_AC - z_AB·y_AC.`,
            ruleApplied: 'Produit vectoriel dans l’espace',
            mathExpression: `u_x = (${k})(${k}) - 0×0 = ${k * k}`,
            explanation: `AB ∧ AC = (${k * k} ; ${k * k} ; ${k * k}) = ${k * k}(1 ; 1 ; 1).`,
          },
          {
            questionPrompt: `Calcule la norme ||AB ∧ AC|| (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(k * k * Math.sqrt(3)),
            hint: `√((${k * k})² × 3) = ${k * k}√3.`,
            ruleApplied: 'Norme d’un vecteur',
            mathExpression: `||AB ∧ AC|| = ${k * k}√3 ≈ ${fmt(k * k * Math.sqrt(3))}`,
            explanation: `La norme vaut ${k * k}√3 ≈ ${fmt(k * k * Math.sqrt(3))}.`,
          },
          {
            questionPrompt: `Déduis-en l'aire du triangle ABC (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(areaABC),
            hint: `Aire(ABC) = ½ ||AB ∧ AC||.`,
            ruleApplied: 'Aire par produit vectoriel',
            mathExpression: `Aire(ABC) = ½ × ${k * k}√3 ≈ ${fmt(areaABC)}`,
            explanation: `L'aire du triangle équilatéral ABC vaut ≈ ${fmt(areaABC)}.`,
          },
          {
            questionPrompt: `Quelle est l'équation cartésienne du plan (ABC) ?`,
            questionType: 'qcm',
            options: [
              `x + y + z - ${k} = 0`,
              `x + y + z + ${k} = 0`,
              `${k}x + ${k}y + ${k}z - 1 = 0`,
              `x + y - z - ${k} = 0`,
            ],
            correctAnswer: `x + y + z - ${k} = 0`,
            hint: `Vecteur normal n = (1 ; 1 ; 1) et passage par A(${k} ; 0 ; 0).`,
            ruleApplied: 'Équation cartésienne d’un plan',
            mathExpression: `1(x - ${k}) + 1(y - 0) + 1(z - 0) = 0`,
            explanation: `x + y + z - ${k} = 0 vérifie les coordonnées de A, B et C.`,
          },
          {
            questionPrompt: `Calcule la distance h de D(${k} ; ${k} ; ${k}) au plan (ABC) (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(distD),
            hint: `|x_D + y_D + z_D - ${k}| / √(1² + 1² + 1²).`,
            ruleApplied: 'Distance d’un point à un plan',
            mathExpression: `h = |${3 * k} - ${k}| / √3 = ${2 * k}/√3 ≈ ${fmt(distD)}`,
            explanation: `h = ${2 * k}/√3 ≈ ${fmt(distD)}.`,
          },
          {
            questionPrompt: `Calcule le volume exact du tétraèdre ABCD = (1/3) · Aire(ABC) · h (ou |det(AB, AC, AD)| / 6).`,
            questionType: 'numeric',
            correctAnswer: String(volABCD),
            hint: `Les facteurs √3 s'annulent exactement : ${k}³ / 3.`,
            ruleApplied: 'Volume d’un tétraèdre',
            mathExpression: `V = (1/3) × (½ ${k}²√3) × (${2 * k}/√3) = ${k}³/3 = ${volABCD}`,
            explanation: `V = ${volABCD} unités de volume.`,
          },
          {
            questionPrompt: `Soit H le projeté orthogonal de D sur (ABC). Quelle est la valeur commune de ses trois coordonnées x_H = y_H = z_H ?`,
            questionType: 'numeric',
            correctAnswer: String(coordH),
            hint: `H = (${k} - t ; ${k} - t ; ${k} - t) ∈ (ABC) ⇒ 3(${k} - t) = ${k}.`,
            ruleApplied: 'Projeté orthogonal sur un plan',
            mathExpression: `x_H = y_H = z_H = ${k} / 3 = ${coordH}`,
            explanation: `H(${coordH} ; ${coordH} ; ${coordH}) est le centre de gravité du triangle ABC.`,
          },
          {
            questionPrompt: `Calcule l'angle géométrique BAC en degrés (triangle ABC équilatéral).`,
            questionType: 'numeric',
            correctAnswer: '60',
            hint: `AB = AC = BC = ${k}√2.`,
            ruleApplied: 'Nature du triangle ABC',
            mathExpression: `cos(BAC) = (AB·AC)/(||AB||·||AC||) = ${k * k} / (${2 * k * k}) = 1/2 ⇒ 60°`,
            explanation: `cos(BAC) = 0,5 ⇒ 60°.`,
          },
          {
            questionPrompt: `Quel est le vecteur unitaire normal orienté vers D du plan (ABC) ?`,
            questionType: 'qcm',
            options: [
              '(1/√3 ; 1/√3 ; 1/√3)',
              '(1 ; 1 ; 1)',
              '(1/3 ; 1/3 ; 1/3)',
              '(-1/√3 ; -1/√3 ; -1/√3)',
            ],
            correctAnswer: '(1/√3 ; 1/√3 ; 1/√3)',
            hint: `Normalise n = (1 ; 1 ; 1) ; le produit scalaire HD · n est positif.`,
            ruleApplied: 'Vecteur normal unitaire',
            mathExpression: `n / ||n|| = (1/√3 ; 1/√3 ; 1/√3)`,
            explanation: `||n|| = √3, et HD = (2k/3)(1;1;1) pointe dans le même sens que (1;1;1).`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Tétraèdre régulier dans l'espace : produit vectoriel, plan, distance et volume`,
          `Dans l'espace muni d'un repère orthonormé, on étudie le tétraèdre ABCD avec A(${k};0;0), B(0;${k};0), C(0;0;${k}) et D(${k};${k};${k}).`,
          items
        );
      }

      if (vMod === 1) {
        // Deux droites non coplanaires D1 et D2 et perpendiculaire commune
        // D1 : passant par A(0,0,0) dirigée par u1 = (1, 0, 0) (axe Ox) -> x = t, y = 0, z = 0
        // Wait: faisons un cas non trivial !
        // D1 : A(1, 0, a) + t*(1, 1, 0)
        // D2 : B(0, 1, -a) + s*(1, -1, 0)
        // u1 . u2 = 1 - 1 + 0 = 0 (orthogonales !), u1 ^ u2 = (0, 0, -2) => direction verticale (0, 0, 1) !
        // Distance entre D1 et D2 = |z_A - z_B| = 2a !
        const a = pickRandom([2, 3, 4]);
        // Intersection de la perpendiculaire commune:
        // M(1+t, t, a) et N(s, 1-s, -a) avec MN colinéaire à (0, 0, 1) => 1 + t = s et t = 1 - s => t = 0, s = 1 !
        // Donc M0(1, 0, a) et N0(1, 0, -a), distance = 2a !
        const distMin = 2 * a;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit (D₁) : x = 1 + t, y = t, z = ${a} (t ∈ ℝ) et (D₂) : x = s, y = 1 - s, z = -${a} (s ∈ ℝ). Calcule le produit scalaire u₁ · u₂ des vecteurs directeurs u₁(1 ; 1 ; 0) et u₂(1 ; -1 ; 0).`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `1×1 + 1×(-1) + 0×0.`,
            ruleApplied: 'Orthogonalité de deux droites de l’espace',
            mathExpression: `u₁ · u₂ = 1 - 1 + 0 = 0`,
            explanation: `Les deux droites sont orthogonales dans l'espace.`,
          },
          {
            questionPrompt: `Les vecteurs u₁ et u₂ sont-ils colinéaires ?`,
            questionType: 'qcm',
            options: [
              'Non, car u₁ ∧ u₂ = (0 ; 0 ; -2) ≠ 0 (droites non parallèles)',
              'Oui, car elles appartiennent à des plans z = constante',
              'Oui, u₂ = -u₁',
              'Elles sont confondues',
            ],
            correctAnswer: 'Non, car u₁ ∧ u₂ = (0 ; 0 ; -2) ≠ 0 (droites non parallèles)',
            hint: `Calcule u₁ ∧ u₂.`,
            ruleApplied: 'Non-colinéarité par produit vectoriel',
            mathExpression: `u₁ ∧ u₂ = (0 ; 0 ; -2) ≠ 0`,
            explanation: `Les vecteurs directeurs ne sont pas colinéaires.`,
          },
          {
            questionPrompt: `Pourquoi (D₁) et (D₂) ne sont-elles pas coplanaires ?`,
            questionType: 'qcm',
            options: [
              `Elles ne sont ni parallèles ni sécantes (z = ${a} ≠ -${a} donc aucune intersection)`,
              `Leur produit scalaire est nul`,
              `Elles coupent l'axe (Oz)`,
              `Leurs vecteurs directeurs sont nuls`,
            ],
            correctAnswer: `Elles ne sont ni parallèles ni sécantes (z = ${a} ≠ -${a} donc aucune intersection)`,
            hint: `Deux droites non parallèles et sans point commun sont non coplanaires.`,
            ruleApplied: 'Position relative de deux droites',
            mathExpression: `z₁ = ${a} ≠ -${a} = z₂ ⇒ (D₁) ∩ (D₂) = ∅`,
            explanation: `(D₁) est dans le plan z = ${a} et (D₂) dans le plan parallèle z = -${a}.`,
          },
          {
            questionPrompt: `Calcule la norme ||u₁||² = 1² + 1² + 0².`,
            questionType: 'numeric',
            correctAnswer: '2',
            hint: `Somme des carrés des composantes de u₁(1 ; 1 ; 0).`,
            ruleApplied: 'Norme euclidienne',
            mathExpression: `||u₁||² = 2`,
            explanation: `||u₁|| = √2 et ||u₁||² = 2.`,
          },
          {
            questionPrompt: `On cherche le couple (t₀, s₀) tel que le vecteur M(t₀)N(s₀) soit orthogonal à la fois à u₁ et u₂. Comme u₁ ∧ u₂ = (0 ; 0 ; -2), M et N doivent avoir même abscisse et même ordonnée : 1 + t₀ = s₀ et t₀ = 1 - s₀. Calcule t₀.`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `Substitue s₀ = 1 + t₀ dans t₀ = 1 - s₀.`,
            ruleApplied: 'Perpendiculaire commune à deux droites',
            mathExpression: `t₀ = 1 - (1 + t₀) ⇒ 2t₀ = 0 ⇒ t₀ = 0`,
            explanation: `t₀ = 0, donc le pied sur (D₁) est M₀(1 ; 0 ; ${a}).`,
          },
          {
            questionPrompt: `Calcule la valeur correspondante s₀.`,
            questionType: 'numeric',
            correctAnswer: '1',
            hint: `s₀ = 1 + t₀.`,
            ruleApplied: 'Pied de la perpendiculaire commune',
            mathExpression: `s₀ = 1 + 0 = 1`,
            explanation: `Le pied sur (D₂) est N₀(1 ; 0 ; -${a}).`,
          },
          {
            questionPrompt: `Calcule la plus courte distance d(D₁, D₂) = M₀N₀.`,
            questionType: 'numeric',
            correctAnswer: String(distMin),
            hint: `Distance entre (1 ; 0 ; ${a}) et (1 ; 0 ; -${a}).`,
            ruleApplied: 'Distance entre deux droites gauches',
            mathExpression: `d(D₁, D₂) = |${a} - (-${a})| = ${distMin}`,
            explanation: `La perpendiculaire commune mesure ${distMin} unités.`,
          },
          {
            questionPrompt: `Vérifie cette distance avec la formule du produit mixte |det(AB, u₁, u₂)| / ||u₁ ∧ u₂|| avec A(1;0;${a}), B(0;1;-${a}). Que vaut |det(AB, u₁, u₂)| ?`,
            questionType: 'numeric',
            correctAnswer: String(2 * distMin),
            hint: `Distance × ||u₁ ∧ u₂|| = ${distMin} × 2.`,
            ruleApplied: 'Formule du produit mixte',
            mathExpression: `|AB · (u₁ ∧ u₂)| = |(-1 ; 1 ; -${2 * a}) · (0 ; 0 ; -2)| = ${4 * a}`,
            explanation: `Le produit mixte vaut ${4 * a}, et divisé par ||u₁ ∧ u₂|| = 2, on retrouve bien ${distMin}.`,
          },
          {
            questionPrompt: `Quel est le milieu I du segment [M₀N₀] de la perpendiculaire commune ? Que vaut sa cote z_I ?`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `(${a} + (-${a})) / 2.`,
            ruleApplied: 'Milieu dans l’espace',
            mathExpression: `I(1 ; 0 ; 0)`,
            explanation: `I(1 ; 0 ; 0) appartient au plan (xOy).`,
          },
          {
            questionPrompt: `Quelle est l'abscisse x_I du milieu I ?`,
            questionType: 'numeric',
            correctAnswer: '1',
            hint: `(x_{M₀} + x_{N₀}) / 2.`,
            ruleApplied: 'Coordonnées du milieu',
            mathExpression: `x_I = (1 + 1)/2 = 1`,
            explanation: `La perpendiculaire commune a pour droite support x = 1, y = 0.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Droites non coplanaires, perpendiculaire commune et produit mixte`,
          `Dans l'espace, on étudie deux droites (D₁) : (1+t ; t ; ${a}) et (D₂) : (s ; 1-s ; -${a}).`,
          items
        );
      }

      // vMod === 2: Sphère (S) et section par un plan (P) + plan tangent
      const R = pickRandom([5, 10, 13]);
      // Pour R = 5 -> d = 3, r = 4; pour R = 10 -> d = 6, r = 8; pour R = 13 -> d = 5, r = 12
      const d = R === 5 ? 3 : R === 10 ? 6 : 5;
      const rSec = R === 5 ? 4 : R === 10 ? 8 : 12;
      const xO = pickRandom([1, 2]);
      const yO = pickRandom([1, 2]);
      const zO = pickRandom([2, 3]);
      // Sphère de centre Omega(xO, yO, zO) et rayon R -> x^2 - 2*xO*x + y^2 - 2*yO*y + z^2 - 2*zO*z + c = 0
      const cSphere = xO * xO + yO * yO + zO * zO - R * R;
      // Plan P parallèle à (xOy) : z = zO + d -> vecteur normal k=(0,0,1), distance = d !
      const zPlane = zO + d;
      // Point T au sommet nord de la sphère : T(xO, yO, zO + R)

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Soit la sphère (S) : x² + y² + z² - ${2 * xO}x - ${2 * yO}y - ${2 * zO}z ${cSphere >= 0 ? `+ ${cSphere}` : `- ${-cSphere}`} = 0. Détermine l'abscisse x_Ω du centre Ω.`,
          questionType: 'numeric',
          correctAnswer: String(xO),
          hint: `Mise sous forme canonique : (x - ${xO})².`,
          ruleApplied: 'Forme canonique d’une équation de sphère',
          mathExpression: `(x - ${xO})² + (y - ${yO})² + (z - ${zO})² = ${R * R}`,
          explanation: `Le centre est Ω(${xO} ; ${yO} ; ${zO}).`,
        },
        {
          questionPrompt: `Calcule la cote z_Ω du centre Ω.`,
          questionType: 'numeric',
          correctAnswer: String(zO),
          hint: `Regarde le terme -${2 * zO}z.`,
          ruleApplied: 'Coordonnées du centre d’une sphère',
          mathExpression: `z_Ω = ${zO}`,
          explanation: `z_Ω = ${zO}.`,
        },
        {
          questionPrompt: `Calcule le rayon R de la sphère (S).`,
          questionType: 'numeric',
          correctAnswer: String(R),
          hint: `R² = ${xO}² + ${yO}² + ${zO}² - (${cSphere}) = ${R * R}.`,
          ruleApplied: 'Rayon d’une sphère',
          mathExpression: `R = √${R * R} = ${R}`,
          explanation: `R = ${R}.`,
        },
        {
          questionPrompt: `On coupe (S) par le plan (P) d'équation z = ${zPlane}. Calcule la distance d(Ω, (P)).`,
          questionType: 'numeric',
          correctAnswer: String(d),
          hint: `|z_Ω - ${zPlane}| / √1.`,
          ruleApplied: 'Distance d’un point à un plan',
          mathExpression: `d(Ω, P) = |${zO} - ${zPlane}| = ${d}`,
          explanation: `Comme ${d} < ${R}, le plan coupe la sphère selon un cercle.`,
        },
        {
          questionPrompt: `Calcule le rayon r du cercle intersection (C) = (S) ∩ (P).`,
          questionType: 'numeric',
          correctAnswer: String(rSec),
          hint: `Pythagore : r = √(R² - d²).`,
          ruleApplied: 'Section d’une sphère par un plan',
          mathExpression: `r = √(${R}² - ${d}²) = √${rSec * rSec} = ${rSec}`,
          explanation: `Le cercle section a pour rayon exact r = ${rSec}.`,
        },
        {
          questionPrompt: `Quelle est la cote z_H du centre H de ce cercle section ?`,
          questionType: 'numeric',
          correctAnswer: String(zPlane),
          hint: `H est le projeté orthogonal de Ω sur (P) : H(${xO} ; ${yO} ; ${zPlane}).`,
          ruleApplied: 'Centre du cercle section',
          mathExpression: `H(${xO} ; ${yO} ; ${zPlane})`,
          explanation: `z_H = ${zPlane}.`,
        },
        {
          questionPrompt: `Calcule l'aire exacte π r² du disque section (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(Math.PI * rSec * rSec),
          hint: `π × ${rSec}².`,
          ruleApplied: 'Aire d’un disque',
          mathExpression: `A = ${rSec * rSec}π ≈ ${fmt(Math.PI * rSec * rSec)}`,
          explanation: `L'aire vaut ${rSec * rSec}π ≈ ${fmt(Math.PI * rSec * rSec)}.`,
        },
        {
          questionPrompt: `Soit T(${xO} ; ${yO} ; ${zO + R}). Vérifie que T ∈ (S) en calculant ΩT.`,
          questionType: 'numeric',
          correctAnswer: String(R),
          hint: `ΩT = |(0 ; 0 ; ${R})|.`,
          ruleApplied: 'Appartenance à la sphère',
          mathExpression: `ΩT = ${R} = R`,
          explanation: `T est le pôle nord de la sphère (S).`,
        },
        {
          questionPrompt: `Quelle est l'équation du plan tangent à (S) au point T(${xO} ; ${yO} ; ${zO + R}) ?`,
          questionType: 'qcm',
          options: [
            `z = ${zO + R}`,
            `z = ${zO - R}`,
            `x + y + z = ${R}`,
            `z = ${zPlane}`,
          ],
          correctAnswer: `z = ${zO + R}`,
          hint: `Le plan tangent en T est orthogonal au rayon ΩT(0 ; 0 ; ${R}) et passe par T.`,
          ruleApplied: 'Plan tangent à une sphère',
          mathExpression: `M ∈ T_T(S) ⇔ TM · ΩT = 0 ⇔ ${R}(z - ${zO + R}) = 0`,
          explanation: `Le plan tangent en T a pour équation z = ${zO + R}.`,
        },
        {
          questionPrompt: `Calcule l'aire de la sphère 4π R² (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(4 * Math.PI * R * R),
          hint: `4 × π × ${R * R}.`,
          ruleApplied: 'Aire d’une sphère',
          mathExpression: `A_S = ${4 * R * R}π ≈ ${fmt(4 * Math.PI * R * R)}`,
          explanation: `A_S ≈ ${fmt(4 * Math.PI * R * R)}.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Sphère, section plane pythagoricienne et plan tangent`,
        `Dans l'espace, on étudie la sphère (S) : x² + y² + z² - ${2 * xO}x - ${2 * yO}y - ${2 * zO}z ${cSphere >= 0 ? `+ ${cSphere}` : `- ${-cSphere}`} = 0.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 13. ISOMÉTRIES & SIMILITUDES
    // -------------------------------------------------------------------------
    case 'mathTc-isometries-similitudes': {
      if (vMod === 0) {
        // Composition de deux réflexions s_D2 o s_D1 et similitude directe
        // D1 : y = 0 (axe Ox), D2 : y = x (angle pi/4) => s_D2 o s_D1 est une rotation de centre O et d'angle 2*(pi/4) = pi/2 !
        // Ou D1 : y = 0 et D2 : y = (tan alpha) x avec alpha = pi/6 (30°) => rotation d'angle 60° = pi/3, suivie d'une homothétie de rapport k !
        const k = pickRandom([2, 3]);
        const alphaDeg = pickRandom([30, 45]);
        const rotAngleDeg = 2 * alphaDeg; // 60° ou 90°
        const xA = pickRandom([2, 4]);
        const yA = 0;
        const rA = xA;
        const rAImg = k * rA;
        const areaScale = k * k;
        // Pour f = h(O, k) o s_D2 o s_D1 : f^n est une rotation-homothétie de rapport k^n et d'angle n*rotAngleDeg

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit (D₁) l'axe (Ox) et (D₂) la droite passant par O faisant un angle orienté (D₁, D₂) = +${alphaDeg}° dans le plan. Quelle est la nature de r = s_{D₂} ∘ s_{D₁} ?`,
            questionType: 'qcm',
            options: [
              `Rotation de centre O et d'angle +${rotAngleDeg}°`,
              `Rotation de centre O et d'angle +${alphaDeg}°`,
              `Translation de vecteur 2·u`,
              `Symétrie orthogonale d'axe médian`,
            ],
            correctAnswer: `Rotation de centre O et d'angle +${rotAngleDeg}°`,
            hint: `La composée de deux réflexions d'axes sécants en O est une rotation de centre O et d'angle 2·(D₁, D₂).`,
            ruleApplied: 'Décomposition d’une rotation en 2 réflexions',
            mathExpression: `s_{D₂} ∘ s_{D₁} = R(O ; 2×${alphaDeg}°) = R(O ; +${rotAngleDeg}°)`,
            explanation: `L'angle de la rotation est toujours le double de l'angle orienté entre les deux axes.`,
          },
          {
            questionPrompt: `Quel est l'ordre minimal m > 0 tel que r^m = Id (identité du plan) ?`,
            questionType: 'numeric',
            correctAnswer: String(360 / rotAngleDeg),
            hint: `m × ${rotAngleDeg}° = 360°.`,
            ruleApplied: 'Ordre d’une rotation',
            mathExpression: `m = 360° / ${rotAngleDeg}° = ${360 / rotAngleDeg}`,
            explanation: `Il faut ${360 / rotAngleDeg} itérations de r pour retrouver l'identité.`,
          },
          {
            questionPrompt: `Que vaut l'angle de la rotation réciproque r⁻¹ = s_{D₁} ∘ s_{D₂} (en degrés, dans ]-180° ; 180°]) ?`,
            questionType: 'numeric',
            correctAnswer: String(-rotAngleDeg),
            hint: `L'ordre de composition s'inverse, l'angle change de signe.`,
            ruleApplied: 'Réciproque d’une composée',
            mathExpression: `(s_{D₂} ∘ s_{D₁})⁻¹ = s_{D₁} ∘ s_{D₂} = R(O ; -${rotAngleDeg}°)`,
            explanation: `L'angle de r⁻¹ vaut -${rotAngleDeg}°.`,
          },
          {
            questionPrompt: `On compose r avec l'homothétie h(O ; ${k}) : soit f = h ∘ r. Quel est le rapport de la similitude directe f ?`,
            questionType: 'numeric',
            correctAnswer: String(k),
            hint: `Le rapport de la rotation vaut 1 et celui de h vaut ${k}.`,
            ruleApplied: 'Forme réduite d’une similitude directe',
            mathExpression: `f = S(O ; ${k} ; +${rotAngleDeg}°)`,
            explanation: `f est la similitude directe de centre O, rapport ${k} et angle +${rotAngleDeg}°.`,
          },
          {
            questionPrompt: `Soit A(${xA} ; 0). Calcule la distance OA' où A' = f(A).`,
            questionType: 'numeric',
            correctAnswer: String(rAImg),
            hint: `OA' = ${k} × OA.`,
            ruleApplied: 'Multiplication des longueurs',
            mathExpression: `OA' = ${k} × ${xA} = ${rAImg}`,
            explanation: `OA' = ${rAImg}.`,
          },
          {
            questionPrompt: `Si un triangle T a une aire de 12 cm², quelle est l'aire de son image f(T) (en cm²) ?`,
            questionType: 'numeric',
            correctAnswer: String(12 * areaScale),
            hint: `Une similitude de rapport k multiplie les aires par k².`,
            ruleApplied: 'Action d’une similitude sur les aires',
            mathExpression: `Aire(f(T)) = ${k}² × 12 = ${12 * areaScale} cm²`,
            explanation: `Les aires sont multipliées par ${k}² = ${areaScale}, d'où ${12 * areaScale} cm².`,
          },
          {
            questionPrompt: `Quel est l'unique point invariant par f ?`,
            questionType: 'qcm',
            options: ['O (0 ; 0)', `A (${xA} ; 0)`, 'Aucun point invariant', 'Toute la droite (D₂)'],
            correctAnswer: 'O (0 ; 0)',
            hint: `f est une similitude directe de rapport ${k} ≠ 1.`,
            ruleApplied: 'Point fixe d’une similitude',
            mathExpression: `f(M) = M ⇔ M = O`,
            explanation: `Toute similitude de rapport k ≠ 1 admet un unique centre fixe (ici O).`,
          },
          {
            questionPrompt: `Calcule le rapport de la similitude f³ = f ∘ f ∘ f.`,
            questionType: 'numeric',
            correctAnswer: String(Math.pow(k, 3)),
            hint: `k³.`,
            ruleApplied: 'Composition de similitudes',
            mathExpression: `rapport(f³) = ${k}³ = ${Math.pow(k, 3)}`,
            explanation: `Les rapports se multiplient : ${k}³ = ${Math.pow(k, 3)}.`,
          },
          {
            questionPrompt: `Quelle transformation obtient-on en composant une symétrie orthogonale s_{D₁} suivie d'une translation t_u où u est un vecteur non nul DIRECTEUR de (D₁) ?`,
            questionType: 'qcm',
            options: [
              'Une symétrie glissée d’axe (D₁) et de vecteur u',
              'Une rotation d’angle π',
              'Une homothétie de rapport -1',
              'Une symétrie centrale',
            ],
            correctAnswer: 'Une symétrie glissée d’axe (D₁) et de vecteur u',
            hint: `Un antidéplacement sans point fixe (car u ≠ 0 le long de l'axe).`,
            ruleApplied: 'Classification des antidéplacements du plan',
            mathExpression: `t_u ∘ s_{D₁} avec u ∈ dir(D₁)`,
            explanation: `C'est la forme réduite canonique d'une symétrie glissée.`,
          },
          {
            questionPrompt: `Quel est le rapport de la similitude réciproque f⁻¹ (arrondi à 0,001 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmt(1 / k, 3),
            hint: `1 / ${k}.`,
            ruleApplied: 'Similitude réciproque',
            mathExpression: `rapport(f⁻¹) = 1/${k} ≈ ${fmt(1 / k, 3)}`,
            explanation: `f⁻¹ est la similitude de centre O, rapport 1/${k} et angle -${rotAngleDeg}°.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Décomposition en réflexions, similitudes directes et symétrie glissée`,
          `On compose deux symétries orthogonales s_{D₁} et s_{D₂} d'axes sécants en O avec (D₁, D₂) = +${alphaDeg}°, puis une homothétie h(O ; ${k}).`,
          items
        );
      }

      if (vMod === 1) {
        // Similitude indirecte : z' = a * conj(z) + b
        // Prenons z' = k * conj(z) + b avec k réel positif (ex: k = 2 ou 3) et b = 2i (ou 2*(1-k) ? non, axe parallèle à Ox ou Oy)
        // Si z' = k * z̄ + 2i :
        // Cherchons point fixe w : w = k*w̄ + 2i => x + iy = k(x - iy) + 2i => x(1-k)=0 (x=0) et y(1+k)=2 => y = 2/(1+k) !
        // Exemple propre avec k = 3 et b = 4i : x = 0 et y = 4/(1+3) = 1 => point fixe Omega = i !
        // Vérification : 3*(-i) + 4i = i ! Parfait !
        // Et f(z) - i = 3 * conj(z - i) !
        // Donc f = h(Omega, 3) o s_D où D est la droite horizontale passant par Omega(i), d'équation y = 1 !
        const p = pickRandom([1, 2]);
        const k = pickRandom([2, 3]); // si k=2, b = 3p*i -> y_Omega = p; si k=3, b = 4p*i -> y_Omega = p !
        const bCoef = (k + 1) * p; // b = bCoef * i => y_Omega = bCoef / (1 + k) = p !
        // Test point A(2 + p*i) -> z_A - i*p = 2 -> f(A) - i*p = 2k => z_A' = 2k + p*i
        // Test point B(p*i + 2i) = (p+2)i -> z_B - p*i = 2i -> conj = -2i -> f(B) - p*i = -2k*i => y_B' = p - 2k

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit g la transformation complexe définie par z' = ${k}z̄ + ${bCoef}i. Quelle est la nature de g ?`,
            questionType: 'qcm',
            options: [
              `Similitude indirecte de rapport ${k}`,
              `Similitude directe de rapport ${k}`,
              `Symétrie glissée`,
              `Homothétie de rapport -${k}`,
            ],
            correctAnswer: `Similitude indirecte de rapport ${k}`,
            hint: `Écriture z' = a·z̄ + b avec |a| = ${k} ≠ 0.`,
            ruleApplied: 'Écriture complexe d’une similitude indirecte',
            mathExpression: `z' = ${k}z̄ + ${bCoef}i, rapport k = |${k}| = ${k}`,
            explanation: `La présence de z̄ caractérise une similitude indirecte de rapport ${k}.`,
          },
          {
            questionPrompt: `Détermine l'ordonnée y_Ω du point fixe Ω(x_Ω + i y_Ω) vérifiant g(Ω) = Ω.`,
            questionType: 'numeric',
            correctAnswer: String(p),
            hint: `Identifie x = ${k}x et y = -${k}y + ${bCoef}.`,
            ruleApplied: 'Point fixe d’une similitude indirecte',
            mathExpression: `x_Ω = 0 et (${k} + 1)y_Ω = ${bCoef} ⇒ y_Ω = ${p}`,
            explanation: `Le centre est Ω(${p}i), soit (0 ; ${p}).`,
          },
          {
            questionPrompt: `Quelle est la partie réelle x_Ω du centre Ω ?`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `x = ${k}x avec ${k} ≠ 1.`,
            ruleApplied: 'Point fixe',
            mathExpression: `(1 - ${k})x_Ω = 0 ⇒ x_Ω = 0`,
            explanation: `x_Ω = 0.`,
          },
          {
            questionPrompt: `Calcule la partie réelle de z_A' où A a pour affixe z_A = 2 + ${p}i.`,
            questionType: 'numeric',
            correctAnswer: String(2 * k),
            hint: `g(z_A) = ${k}(2 - ${p}i) + ${bCoef}i.`,
            ruleApplied: 'Image d’un point',
            mathExpression: `z_A' = ${2 * k} + (${bCoef - k * p})i = ${2 * k} + ${p}i`,
            explanation: `Re(z_A') = ${2 * k}.`,
          },
          {
            questionPrompt: `Calcule la partie imaginaire de z_B' où B a pour affixe z_B = ${p + 2}i.`,
            questionType: 'numeric',
            correctAnswer: String(p - 2 * k),
            hint: `z_B - ${p}i = 2i ⇒ g(z_B) - ${p}i = ${k}(-2i) = -${2 * k}i.`,
            ruleApplied: 'Forme réduite centrée en Ω',
            mathExpression: `Im(z_B') = ${p} - ${2 * k} = ${p - 2 * k}`,
            explanation: `g(z) - ${p}i = ${k}(z̄ + ${p}i). Pour z_B = ${p + 2}i, on obtient ${p - 2 * k}i.`,
          },
          {
            questionPrompt: `Quelle est l'équation cartésienne de l'axe Δ des points M tels que ΩM' et ΩM soient colinéaires de même sens (axe de symétrie de g) ?`,
            questionType: 'qcm',
            options: [`y = ${p}`, `x = ${p}`, `y = -${p}`, `x = 0`],
            correctAnswer: `y = ${p}`,
            hint: `L'axe passe par Ω(0 ; ${p}) et dirige les vecteurs u tels que z̄_u = z_u (réels).`,
            ruleApplied: 'Axe d’une similitude indirecte',
            mathExpression: `z - ${p}i ∈ ℝ ⇔ y = ${p}`,
            explanation: `L'axe est la droite horizontale y = ${p}.`,
          },
          {
            questionPrompt: `Quelle est la nature de la composée g² = g ∘ g ?`,
            questionType: 'qcm',
            options: [
              `Homothétie de centre Ω et de rapport ${k * k}`,
              `Symétrie centrale de centre Ω`,
              `Rotation d'angle π/2`,
              `Similitude indirecte de rapport ${k * k}`,
            ],
            correctAnswer: `Homothétie de centre Ω et de rapport ${k * k}`,
            hint: `La composée de deux similitudes indirectes est une similitude directe ; de plus g(z) - ω = ${k} conj(z - ω).`,
            ruleApplied: 'Carré d’une similitude indirecte',
            mathExpression: `g(g(z)) - ω = ${k}·conj(${k}·conj(z - ω)) = ${k * k}(z - ω)`,
            explanation: `g² est l'homothétie de centre Ω et de rapport ${k * k}.`,
          },
          {
            questionPrompt: `Quel est le rapport de la transformation réciproque g⁻¹ (arrondi à 0,001 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmt(1 / k, 3),
            hint: `1 / ${k}.`,
            ruleApplied: 'Rapport d’une similitude réciproque',
            mathExpression: `rapport(g⁻¹) = 1/${k} ≈ ${fmt(1 / k, 3)}`,
            explanation: `g⁻¹ est une similitude indirecte de même centre, même axe et de rapport 1/${k}.`,
          },
          {
            questionPrompt: `Comment g transforme-t-elle les angles orientés ?`,
            questionType: 'qcm',
            options: [
              'Elle change chaque angle orienté en son opposé (anticonservatrice)',
              'Elle conserve les angles orientés',
              'Elle multiplie les angles par ' + k,
              'Elle ajoute π/2 aux angles',
            ],
            correctAnswer: 'Elle change chaque angle orienté en son opposé (anticonservatrice)',
            hint: `Une similitude indirecte inverse l'orientation du plan.`,
            ruleApplied: 'Action sur les angles orientés',
            mathExpression: `(u', v') = -(u, v) [2π]`,
            explanation: `Toutes les similitudes indirectes changent l'orientation des angles.`,
          },
          {
            questionPrompt: `Si un segment [MN] mesure 5 cm, quelle est la longueur de [M'N'] = [g(M)g(N)] ?`,
            questionType: 'numeric',
            correctAnswer: String(5 * k),
            hint: `M'N' = ${k} × MN.`,
            ruleApplied: 'Rapport des longueurs',
            mathExpression: `M'N' = ${k} × 5 = ${5 * k} cm`,
            explanation: `M'N' = ${5 * k} cm.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Similitude indirecte z' = ${k}z̄ + ${bCoef}i, axe, centre et g²`,
          `Dans le plan complexe, on considère l'application g définie par z' = ${k}z̄ + ${bCoef}i.`,
          items
        );
      }

      // vMod === 2: Isométries de l'espace (matrice orthogonale / réflexion / vissage)
      const a = pickRandom([2, 3, 4]);
      // Réflexion par rapport au plan P : x + y - z = 0 (ou plan z = a -> trop simple)
      // Prenons réflexion S_P par rapport au plan (P) : x - y = 0 (bissecteur), suivie d'une translation t_u selon u = (0, 0, a) -> symétrie glissée de l'espace ou composée de 2 réflexions !
      // Plus complet : S₁ = réflexion / plan x = 0, S₂ = réflexion / plan y = 0 => S₂ o S₁(x, y, z) = (-x, -y, z) = demi-tour d'axe (Oz) !
      // Et f = t_{(0,0,a)} o S₂ o S₁ : f(x, y, z) = (-x, -y, z + a) -> vissage d'axe (Oz), d'angle π et de pas a !
      const detS1 = -1;
      const detVissage = 1;
      const xM = pickRandom([2, 3]);
      const yM = pickRandom([4, 5]);
      const zM = 1;
      // f(xM, yM, zM) = (-xM, -yM, zM + a)
      // f^2(x, y, z) = (x, y, z + 2a) !

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Dans l'espace, soient (P₁) : x = 0 et (P₂) : y = 0. Quel est le déterminant de la matrice d'une réflexion S_{P₁} ?`,
          questionType: 'numeric',
          correctAnswer: String(detS1),
          hint: `Une réflexion inverse l'orientation de l'espace (isométrie indirecte).`,
          ruleApplied: 'Déterminant d’un antidéplacement 3D',
          mathExpression: `det(S_{P₁}) = -1`,
          explanation: `S_{P₁}(x, y, z) = (-x, y, z), sa matrice diag(-1, 1, 1) a pour déterminant -1.`,
        },
        {
          questionPrompt: `Quelle est l'image du point M(${xM} ; ${yM} ; ${zM}) par r = S_{P₂} ∘ S_{P₁} ? Calcule sa première coordonnée x'.`,
          questionType: 'numeric',
          correctAnswer: String(-xM),
          hint: `r(x, y, z) = (-x, -y, z).`,
          ruleApplied: 'Composée de deux réflexions de plans perpendiculaires',
          mathExpression: `S_{P₂}(S_{P₁}(${xM};${yM};${zM})) = (-${xM} ; -${yM} ; ${zM})`,
          explanation: `x' = -${xM}.`,
        },
        {
          questionPrompt: `Quelle est la nature géométrique exacte de r = S_{P₂} ∘ S_{P₁} ?`,
          questionType: 'qcm',
          options: [
            'Demi-tour (rotation d’angle π) d’axe (Oz)',
            'Symétrie centrale de centre O',
            'Réflexion par rapport au plan x + y = 0',
            'Translation de vecteur k',
          ],
          correctAnswer: 'Demi-tour (rotation d’angle π) d’axe (Oz)',
          hint: `(P₁) ⊥ (P₂) et leur intersection est la droite (Oz).`,
          ruleApplied: 'Décomposition d’un demi-tour spatial',
          mathExpression: `r(x, y, z) = (-x, -y, z) = R_{(Oz) ; π}`,
          explanation: `La composée de deux réflexions par rapport à deux plans perpendiculaires est le demi-tour autour de leur droite d'intersection.`,
        },
        {
          questionPrompt: `Quel est le déterminant de la matrice linéaire de r ?`,
          questionType: 'numeric',
          correctAnswer: String(detVissage),
          hint: `(-1) × (-1).`,
          ruleApplied: 'Déplacement de l’espace',
          mathExpression: `det(r) = (-1)² = +1`,
          explanation: `r est un déplacement de l'espace (det = +1).`,
        },
        {
          questionPrompt: `On compose r avec la translation t_u de vecteur u = (0 ; 0 ; ${a}), soit f = t_u ∘ r. Calcule la troisième coordonnée z'' de M'' = f(${xM} ; ${yM} ; ${zM}).`,
          questionType: 'numeric',
          correctAnswer: String(zM + a),
          hint: `z'' = z + ${a}.`,
          ruleApplied: 'Expression analytique d’un vissage',
          mathExpression: `z'' = ${zM} + ${a} = ${zM + a}`,
          explanation: `z'' = ${zM + a}.`,
        },
        {
          questionPrompt: `Quelle est la nature géométrique exacte de f = t_u ∘ r ?`,
          questionType: 'qcm',
          options: [
            `Un vissage d'axe (Oz), d'angle π et de vecteur u(0 ; 0 ; ${a})`,
            `Une symétrie glissée`,
            `Un demi-tour d'axe parallèle à (Oz)`,
            `Une homothétie spatiale`,
          ],
          correctAnswer: `Un vissage d'axe (Oz), d'angle π et de vecteur u(0 ; 0 ; ${a})`,
          hint: `Vecteur u colinéaire à l'axe (Oz) de la rotation r.`,
          ruleApplied: 'Forme réduite d’un déplacement 3D',
          mathExpression: `f = t_{(0;0;${a})} ∘ R_{(Oz); π}`,
          explanation: `Tout déplacement sans point fixe de vecteur minimal non nul u colinéaire à l'axe de rotation est un vissage.`,
        },
        {
          questionPrompt: `Combien de points invariants f possède-t-elle dans l'espace ?`,
          questionType: 'numeric',
          correctAnswer: '0',
          hint: `z + ${a} = z n'a aucune solution car ${a} ≠ 0.`,
          ruleApplied: 'Recherche de points fixes',
          mathExpression: `f(M) = M ⇒ ${a} = 0 (impossible)`,
          explanation: `Un vissage de vecteur non nul n'a aucun point invariant.`,
        },
        {
          questionPrompt: `Que devient la transformation f² = f ∘ f ?`,
          questionType: 'qcm',
          options: [
            `La translation de vecteur (0 ; 0 ; ${2 * a})`,
            `L’identité de l’espace`,
            `Le demi-tour d’axe (Oz)`,
            `La symétrie centrale de centre O`,
          ],
          correctAnswer: `La translation de vecteur (0 ; 0 ; ${2 * a})`,
          hint: `f²(x, y, z) = (-(-x), -(-y), (z + ${a}) + ${a}).`,
          ruleApplied: 'Carré d’un vissage d’angle π',
          mathExpression: `f²(x, y, z) = (x, y, z + ${2 * a})`,
          explanation: `Comme r² = Id, f² se réduit à la translation de vecteur 2u = (0 ; 0 ; ${2 * a}).`,
        },
        {
          questionPrompt: `Calcule la distance entre M(${xM} ; ${yM} ; ${zM}) et f(M)(-${xM} ; -${yM} ; ${zM + a}) (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(Math.sqrt(4 * xM * xM + 4 * yM * yM + a * a)),
          hint: `√((2·${xM})² + (2·${yM})² + ${a}²).`,
          ruleApplied: 'Distance euclidienne 3D',
          mathExpression: `MM'' = √(${4 * xM * xM} + ${4 * yM * yM} + ${a * a}) ≈ ${fmt(Math.sqrt(4 * xM * xM + 4 * yM * yM + a * a))}`,
          explanation: `MM'' ≈ ${fmt(Math.sqrt(4 * xM * xM + 4 * yM * yM + a * a))}.`,
        },
        {
          questionPrompt: `Si un cube a un volume de 8 cm³, quel est le volume de son image par f (en cm³) ?`,
          questionType: 'numeric',
          correctAnswer: '8',
          hint: `Une isométrie conserve les distances, les aires et les volumes.`,
          ruleApplied: 'Invariance des volumes par isométrie',
          mathExpression: `V(f(C)) = |det(f)| · V(C) = 1 × 8 = 8 cm³`,
          explanation: `Toute isométrie préserve exactement les volumes.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Isométries de l'espace : réflexions, demi-tour et vissage`,
        `Dans l'espace orienté, on compose deux réflexions par rapport aux plans (P₁) : x = 0 et (P₂) : y = 0, puis la translation de vecteur u(0 ; 0 ; ${a}).`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 14. CONIQUES (ELLIPSE, HYPERBOLE, PARABOLE)
    // -------------------------------------------------------------------------
    case 'mathTc-coniques': {
      if (vMod === 0) {
        // Ellipse réduite à triplet pythagoricien (b, c, a) = (3k, 4k, 5k) ou (4k, 3k, 5k)
        const k = pickRandom([1, 2]);
        const a = 5 * k;
        const b = 3 * k;
        const c = 4 * k; // c = sqrt(a^2 - b^2) = 4k !
        const e = c / a; // 0.8 exact !
        const paramP = (b * b) / a; // 9k / 5 = 1.8 k
        const directrixX = (a * a) / c; // 25k / 4 = 6.25 k
        const areaEllipse = Math.PI * a * b;
        // Point M0 sur l'ellipse avec x0 = c = 4k => y0 = b^2/a = paramP !
        // Somme MF + MF' = 2a = 10k

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit l'ellipse (E) d'équation x²/${a * a} + y²/${b * b} = 1. Détermine le demi-grand axe a.`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `a² = max(${a * a} ; ${b * b}).`,
            ruleApplied: 'Équation réduite de l’ellipse',
            mathExpression: `a = √${a * a} = ${a}, b = √${b * b} = ${b}`,
            explanation: `Le demi-grand axe sur (Ox) vaut a = ${a}.`,
          },
          {
            questionPrompt: `Calcule la demi-distance focale c = √(a² - b²).`,
            questionType: 'numeric',
            correctAnswer: String(c),
            hint: `√(${a * a} - ${b * b}).`,
            ruleApplied: 'Relation focale de l’ellipse',
            mathExpression: `c = √(${a * a - b * b}) = ${c}`,
            explanation: `c = ${c} (foyers F(${c} ; 0) et F'(-${c} ; 0)).`,
          },
          {
            questionPrompt: `Calcule l'excentricité e = c / a de l'ellipse.`,
            questionType: 'numeric',
            correctAnswer: fmt(e),
            hint: `${c} / ${a}.`,
            ruleApplied: 'Excentricité d’une conique',
            mathExpression: `e = ${c}/${a} = ${fmt(e)}`,
            explanation: `Comme 0 < e = ${fmt(e)} < 1, il s'agit bien d'une ellipse.`,
          },
          {
            questionPrompt: `Calcule le paramètre p = b² / a (demi-corde focale orthogonale à l'axe focal).`,
            questionType: 'numeric',
            correctAnswer: fmt(paramP),
            hint: `${b * b} / ${a}.`,
            ruleApplied: 'Paramètre de la conique',
            mathExpression: `p = ${b * b}/${a} = ${fmt(paramP)}`,
            explanation: `Le point d'abscisse x = c sur l'ellipse a pour ordonnée positive y = p = ${fmt(paramP)}.`,
          },
          {
            questionPrompt: `La directrice (D) associée au foyer F(${c} ; 0) a pour équation x = a² / c. Calcule cette abscisse.`,
            questionType: 'numeric',
            correctAnswer: fmt(directrixX),
            hint: `${a * a} / ${c}.`,
            ruleApplied: 'Directrice d’une ellipse',
            mathExpression: `x_D = ${a * a} / ${c} = ${fmt(directrixX)}`,
            explanation: `x = ${fmt(directrixX)} est la directrice associée à F.`,
          },
          {
            questionPrompt: `Quelle est la somme constante MF + MF' des distances d'un point M ∈ (E) aux deux foyers F et F' ?`,
            questionType: 'numeric',
            correctAnswer: String(2 * a),
            hint: `Définition bifocale : MF + MF' = 2a.`,
            ruleApplied: 'Définition bifocale de l’ellipse',
            mathExpression: `MF + MF' = 2×${a} = ${2 * a}`,
            explanation: `MF + MF' = 2a = ${2 * a}.`,
          },
          {
            questionPrompt: `Calcule la distance MF' pour le point M(${c} ; ${fmt(paramP)}) sachant MF = ${fmt(paramP)}.`,
            questionType: 'numeric',
            correctAnswer: fmt(2 * a - paramP),
            hint: `2a - MF.`,
            ruleApplied: 'Conservation de la somme bifocale',
            mathExpression: `MF' = ${2 * a} - ${fmt(paramP)} = ${fmt(2 * a - paramP)}`,
            explanation: `MF' = ${fmt(2 * a - paramP)}.`,
          },
          {
            questionPrompt: `Quelle est l'équation de la tangente à (E) au point M(${c} ; ${fmt(paramP)}) par dédoublement x₀x/a² + y₀y/b² = 1 ?`,
            questionType: 'qcm',
            options: [
              `${c}x/${a * a} + ${fmt(paramP)}y/${b * b} = 1 (soit ${fmt(e)}x + y = ${a})`,
              `${c}x/${b * b} - ${fmt(paramP)}y/${a * a} = 1`,
              `x/${a} + y/${b} = 1`,
              `y = ${fmt(paramP)}`,
            ],
            correctAnswer: `${c}x/${a * a} + ${fmt(paramP)}y/${b * b} = 1 (soit ${fmt(e)}x + y = ${a})`,
            hint: `Simplifie (${b * b}/${a}) y / ${b * b} = y / ${a}.`,
            ruleApplied: 'Règle du dédoublement des termes',
            mathExpression: `${c}x/${a * a} + y/${a} = 1 ⇔ ${fmt(e)}x + y = ${a}`,
            explanation: `En multipliant par a = ${a}, la tangente s'écrit ${fmt(e)}x + y = ${a}.`,
          },
          {
            questionPrompt: `À l'abscisse x = 0, quelle est l'ordonnée d'intersection de cette tangente avec l'axe (Oy) ?`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `Remplace x = 0 dans ${fmt(e)}x + y = ${a}.`,
            ruleApplied: 'Intersection tangente / axe',
            mathExpression: `y = ${a}`,
            explanation: `Elle coupe (Oy) en (0 ; ${a}).`,
          },
          {
            questionPrompt: `Calcule l'aire exacte π a b délimitée par l'ellipse (E) (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(areaEllipse),
            hint: `π × ${a} × ${b}.`,
            ruleApplied: 'Aire intérieure d’une ellipse',
            mathExpression: `A = π × ${a} × ${b} = ${a * b}π ≈ ${fmt(areaEllipse)}`,
            explanation: `A ≈ ${fmt(areaEllipse)} unités d'aire.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Ellipse x²/${a * a} + y²/${b * b} = 1 : foyers, directrices, tangente & aire`,
          `Dans le repère orthonormé, on considère l'ellipse (E) d'équation x²/${a * a} + y²/${b * b} = 1.`,
          items
        );
      }

      if (vMod === 1) {
        // Hyperbole réduite : triplet (a, b, c) = (3k, 4k, 5k) ou (4k, 3k, 5k)
        const k = pickRandom([1, 2]);
        const a = 3 * k;
        const b = 4 * k;
        const c = 5 * k; // c = sqrt(a^2 + b^2)
        const e = c / a; // 5/3 ≈ 1.67
        const asympSlope = b / a; // 4/3 ≈ 1.33
        const dirX = (a * a) / c; // 9k / 5 = 1.8 k
        const paramP = (b * b) / a; // 16k / 3 ≈ 5.33 k

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit l'hyperbole (H) d'équation x²/${a * a} - y²/${b * b} = 1. Que vaut le demi-axe réel a ?`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `Terme positif x²/a².`,
            ruleApplied: 'Équation réduite de l’hyperbole',
            mathExpression: `a = √${a * a} = ${a}, b = √${b * b} = ${b}`,
            explanation: `Les sommets sont A(${a} ; 0) et A'(-${a} ; 0).`,
          },
          {
            questionPrompt: `Calcule la demi-distance focale c = √(a² + b²).`,
            questionType: 'numeric',
            correctAnswer: String(c),
            hint: `√(${a * a} + ${b * b}).`,
            ruleApplied: 'Relation focale de l’hyperbole',
            mathExpression: `c = √(${a * a + b * b}) = ${c}`,
            explanation: `c = ${c} (foyers F(${c} ; 0) et F'(-${c} ; 0)).`,
          },
          {
            questionPrompt: `Calcule l'excentricité e = c / a (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(e),
            hint: `${c} / ${a}.`,
            ruleApplied: 'Excentricité d’une hyperbole',
            mathExpression: `e = ${c}/${a} ≈ ${fmt(e)} > 1`,
            explanation: `e = 5/3 ≈ ${fmt(e)} > 1, caractéristique d'une hyperbole.`,
          },
          {
            questionPrompt: `Quelle est la pente positive b/a des asymptotes de (H) (arrondie à 0,01 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmt(asympSlope),
            hint: `Asymptotes y = ±(b/a)x.`,
            ruleApplied: 'Asymptotes d’une hyperbole',
            mathExpression: `y = ±(${b}/${a})x ≈ ±${fmt(asympSlope)}x`,
            explanation: `Les deux asymptotes sont y = ±(4/3)x.`,
          },
          {
            questionPrompt: `Calcule le cosinus de l'angle aigu θ entre l'asymptote y = (b/a)x et l'axe focal (Ox) : rappel cos θ = a / c.`,
            questionType: 'numeric',
            correctAnswer: fmt(a / c),
            hint: `1 / e = ${a} / ${c}.`,
            ruleApplied: 'Géométrie du rectangle fondamental',
            mathExpression: `cos θ = a/c = ${a}/${c} = ${fmt(a / c)}`,
            explanation: `cos θ = 3/5 = 0,6.`,
          },
          {
            questionPrompt: `Détermine l'abscisse x_D = a² / c de la directrice associée au foyer F(${c} ; 0).`,
            questionType: 'numeric',
            correctAnswer: fmt(dirX),
            hint: `${a * a} / ${c}.`,
            ruleApplied: 'Directrice de l’hyperbole',
            mathExpression: `x_D = ${a * a}/${c} = ${fmt(dirX)}`,
            explanation: `x = ${fmt(dirX)}.`,
          },
          {
            questionPrompt: `Quelle constante vaut |MF - MF'| pour tout point M ∈ (H) ?`,
            questionType: 'numeric',
            correctAnswer: String(2 * a),
            hint: `Définition bifocale de l'hyperbole : |MF - MF'| = 2a.`,
            ruleApplied: 'Définition bifocale',
            mathExpression: `|MF - MF'| = 2×${a} = ${2 * a}`,
            explanation: `La différence des distances aux deux foyers vaut 2a = ${2 * a}.`,
          },
          {
            questionPrompt: `Calcule le paramètre p = b² / a (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(paramP),
            hint: `${b * b} / ${a}.`,
            ruleApplied: 'Paramètre de l’hyperbole',
            mathExpression: `p = ${b * b}/${a} ≈ ${fmt(paramP)}`,
            explanation: `p = 16k/3 ≈ ${fmt(paramP)}.`,
          },
          {
            questionPrompt: `Soit M₀(x₀ ; y₀) avec x₀ = ${c} et y₀ > 0 sur (H). Calcule y₀ (= p ≈ ${fmt(paramP)}). Vérifie aussi le produit des distances de M₀ aux deux asymptotes y = ±(4/3)x : dans toute hyperbole ce produit constant vaut (a²b²)/(a²+b²). Calcule cette constante (arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmt((a * a * b * b) / (c * c)),
            hint: `(a·b / c)².`,
            ruleApplied: 'Invariant produit des distances aux asymptotes',
            mathExpression: `(ab/c)² = (${a * b}/${c})² = (${fmt((a * b) / c)})² = ${fmt((a * a * b * b) / (c * c))}`,
            explanation: `Ce produit remarquable vaut (${a * b}/${c})² = ${fmt((a * a * b * b) / (c * c))}.`,
          },
          {
            questionPrompt: `Quelle est la tangente à (H) au sommet A(${a} ; 0) ?`,
            questionType: 'qcm',
            options: [`x = ${a}`, `y = ${a}`, `y = ${fmt(asympSlope)}x`, `x = ${c}`],
            correctAnswer: `x = ${a}`,
            hint: `Dédoublement en A(${a} ; 0) : ${a}x/${a * a} - 0 = 1.`,
            ruleApplied: 'Tangente au sommet',
            mathExpression: `x / ${a} = 1 ⇔ x = ${a}`,
            explanation: `La tangente au sommet A est verticale : x = ${a}.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Hyperbole x²/${a * a} - y²/${b * b} = 1 : asymptotes, foyers et invariants`,
          `On étudie l'hyperbole (H) d'équation réduite x²/${a * a} - y²/${b * b} = 1.`,
          items
        );
      }

      // vMod === 2: Parabole y^2 = 2px et réduction quadratique
      const p = pickRandom([4, 6, 8]); // F(p/2 ; 0), directrice x = -p/2
      const halfP = p / 2;
      // Translation de sommet S(xS, yS) : (y - yS)^2 = 2p (x - xS)
      const xS = randInt(1, 3);
      const yS = randInt(1, 3);
      // Point M0 sur la parabole réduite y^2 = 2px avec x0 = p/2 => y0 = p (au-dessus de F !)
      // Tangente en M0(p/2, p) : y0*y = p(x + x0) => p*y = p(x + p/2) => y = x + p/2 ! Pente 1 !

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On considère la parabole (P) d'équation réduite y² = ${2 * p}x. Que vaut son paramètre p ?`,
          questionType: 'numeric',
          correctAnswer: String(p),
          hint: `Identifie y² = 2px avec y² = ${2 * p}x.`,
          ruleApplied: 'Équation réduite de la parabole',
          mathExpression: `2p = ${2 * p} ⇒ p = ${p}`,
          explanation: `Le paramètre focal vaut p = ${p}.`,
        },
        {
          questionPrompt: `Quelle est l'excentricité e de toute parabole ?`,
          questionType: 'numeric',
          correctAnswer: '1',
          hint: `MF = MH (distance au foyer = distance à la directrice).`,
          ruleApplied: 'Définition monofocale de la parabole',
          mathExpression: `e = MF / d(M, D) = 1`,
          explanation: `Toute parabole a une excentricité égale à 1.`,
        },
        {
          questionPrompt: `Détermine l'abscisse x_F = p/2 du foyer F.`,
          questionType: 'numeric',
          correctAnswer: String(halfP),
          hint: `${p} / 2.`,
          ruleApplied: 'Foyer d’une parabole',
          mathExpression: `F(${halfP} ; 0)`,
          explanation: `F a pour coordonnées (${halfP} ; 0).`,
        },
        {
          questionPrompt: `Quelle est l'équation de la directrice (D) de (P) ?`,
          questionType: 'qcm',
          options: [
            `x = -${halfP}`,
            `x = ${halfP}`,
            `y = -${halfP}`,
            `x = -${p}`,
          ],
          correctAnswer: `x = -${halfP}`,
          hint: `x = -p/2.`,
          ruleApplied: 'Directrice de la parabole',
          mathExpression: `D : x = -${halfP}`,
          explanation: `La directrice est symétrique du foyer par rapport au sommet O(0;0) : x = -${halfP}.`,
        },
        {
          questionPrompt: `Soit M₀(${halfP} ; y₀) ∈ (P) avec y₀ > 0. Calcule son ordonnée y₀.`,
          questionType: 'numeric',
          correctAnswer: String(p),
          hint: `y₀² = ${2 * p} × ${halfP} = ${p * p}.`,
          ruleApplied: 'Point à la verticale du foyer',
          mathExpression: `y₀ = √(${p * p}) = ${p}`,
          explanation: `La demi-corde focale vaut y₀ = p = ${p}.`,
        },
        {
          questionPrompt: `Quelle est la longueur totale de la corde focale verticale passant par F(${halfP} ; 0) ?`,
          questionType: 'numeric',
          correctAnswer: String(2 * p),
          hint: `2 × y₀ = 2p (appelée « latus rectum »).`,
          ruleApplied: 'Corde focale perpendiculaire à l’axe',
          mathExpression: `L = 2p = ${2 * p}`,
          explanation: `La corde focale verticale mesure 2p = ${2 * p}.`,
        },
        {
          questionPrompt: `Par dédoublement y₀·y = p(x + x₀), quel est le coefficient directeur m de la tangente en M₀(${halfP} ; ${p}) ?`,
          questionType: 'numeric',
          correctAnswer: '1',
          hint: `${p}y = ${p}(x + ${halfP}).`,
          ruleApplied: 'Tangente à une parabole',
          mathExpression: `y = x + ${halfP} ⇒ m = 1`,
          explanation: `La tangente en M₀ a pour pente 1 (angle de 45° avec l'axe focal).`,
        },
        {
          questionPrompt: `Où cette tangente coupe-t-elle l'axe focal (Ox) ? Donne l'abscisse x_T.`,
          questionType: 'numeric',
          correctAnswer: String(-halfP),
          hint: `Résous x + ${halfP} = 0.`,
          ruleApplied: 'Propriété de la sous-tangente',
          mathExpression: `x_T = -${halfP} = -x₀`,
          explanation: `Remarque classique : la tangente coupe l'axe en (-x₀ ; 0) et la directrice sur la droite y = ... (propriété optique du miroir parabolique).`,
        },
        {
          questionPrompt: `On translate (P) au sommet S(${xS} ; ${yS}) pour obtenir (P') : y² - ${2 * yS}y - ${2 * p}x + ${yS * yS + 2 * p * xS} = 0. Quelle est l'abscisse du nouveau foyer F' ?`,
          questionType: 'numeric',
          correctAnswer: String(xS + halfP),
          hint: `x_{F'} = x_S + p/2.`,
          ruleApplied: 'Translation d’une conique',
          mathExpression: `F'(${xS} + ${halfP} ; ${yS}) = (${xS + halfP} ; ${yS})`,
          explanation: `Le foyer est translaté de (${xS} ; ${yS}), d'où x_{F'} = ${xS + halfP}.`,
        },
        {
          questionPrompt: `Quelle est la sous-normale constante d'une parabole y² = 2px (distance entre le pied de l'ordonnée et l'intersection de la normale avec l'axe) ?`,
          questionType: 'numeric',
          correctAnswer: String(p),
          hint: `y · y' = p !`,
          ruleApplied: 'Propriété différentielle de la sous-normale',
          mathExpression: `Sous-normale = |y · dy/dx| = p = ${p}`,
          explanation: `La sous-normale de y² = 2px est constante et égale au paramètre p = ${p}.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Parabole y² = ${2 * p}x : foyer, corde focale, tangente et sous-normale`,
        `On étudie la parabole (P) d'équation réduite y² = ${2 * p}x et sa translatée de sommet S(${xS} ; ${yS}).`,
        items
      );
    }

    default:
      return null;
  }
}
