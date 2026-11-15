import { ExerciseDifficulty } from '../../types/math';
import { PHYSICS_CHAPTERS } from '../physicsCurriculum';
import { DIFFICULTY_META, GeneratedExercise, pickRandom, randFloat, randInt } from './types';
import { generatePhysics3emeExercise } from './physics3emeGenerators';

function makeResult(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  partial: Omit<GeneratedExercise, 'chapterId' | 'chapterTitle' | 'difficulty' | 'difficultyLabel'>
): GeneratedExercise {
  const chap = PHYSICS_CHAPTERS.find((c) => c.id === chapterId);
  return {
    chapterId,
    chapterTitle: chap?.title || chapterId,
    difficulty,
    difficultyLabel: DIFFICULTY_META[difficulty].label,
    ...partial,
  };
}

export function generatePhysicsExercise(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  variantIndex = 0
): GeneratedExercise {
  if (chapterId.startsWith('phys3-')) {
    return generatePhysics3emeExercise(chapterId, difficulty, variantIndex);
  }

  // 1. CIRCUIT SIMPLE
  if (chapterId === 'phys-circuit-simple') {
    if (difficulty === 1) {
      const closed = randFloat() > 0.5;
      return makeResult(chapterId, difficulty, {
        title: 'État du circuit électrique et sens du courant',
        prompt: `Dans un circuit simple pile + interrupteur + lampe, l’interrupteur est ${closed ? 'FERMÉ' : 'OUVERT'}.\nLa lampe brille-t-elle ?`,
        hint: 'Le courant ne peut circuler que dans une boucle fermée sans interruption.',
        questionType: 'qcm',
        options: ['Oui, elle brille', 'Non, elle reste éteinte'],
        correctAnswer: closed ? 'Oui, elle brille' : 'Non, elle reste éteinte',
        explanationFinal: closed
          ? 'L’interrupteur est fermé : la boucle est continue, le courant circule et la lampe brille.'
          : 'L’interrupteur est ouvert : le circuit est coupé, aucun courant ne circule et la lampe reste éteinte.',
        steps: [
          {
            stepNumber: 1,
            title: 'Analyser l’état de la boucle',
            explanation: `L’interrupteur est ${closed ? 'fermé' : 'ouvert'}.`,
            mathExpression: `État circuit = ${closed ? 'FERMÉ' : 'OUVERT'} | Passage du courant = ${closed ? 'OUI' : 'NON'}`,
            ruleApplied: 'Un courant électrique ne circule que dans un circuit fermé comportant un générateur.',
          },
          {
            stepNumber: 2,
            title: 'Conclure sur la lampe',
            explanation: closed ? 'La lampe reçoit le courant et éclaire.' : 'La lampe ne reçoit pas de courant.',
            mathExpression: `Lampe = ${closed ? 'Allumée' : 'Éteinte'}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const mat = pickRandom([
        { name: 'une règle en plastique', cond: false },
        { name: 'un fil de cuivre', cond: true },
        { name: 'une pièce en aluminium', cond: true },
        { name: 'une gomme en caoutchouc', cond: false },
        { name: 'une mine de crayon (graphite)', cond: true },
      ]);
      return makeResult(chapterId, difficulty, {
        title: 'Conducteur ou Isolant électrique',
        prompt: `On insère ${mat.name} entre deux pinces crocodiles dans un circuit fermé avec une lampe.\nCet objet est-il un conducteur ou un isolant ?`,
        hint: 'Les métaux (cuivre, fer, aluminium) et le graphite laissent passer le courant.',
        questionType: 'qcm',
        options: ['Conducteur (la lampe brille)', 'Isolant (la lampe reste éteinte)'],
        correctAnswer: mat.cond ? 'Conducteur (la lampe brille)' : 'Isolant (la lampe reste éteinte)',
        explanationFinal: `${mat.name} est un ${mat.cond ? 'conducteur' : 'isolant'}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Identifier la nature du matériau',
            explanation: `${mat.name} est testé en série dans la boucle.`,
            mathExpression: `Objet = ${mat.name} | Nature = ${mat.cond ? 'CONDUCTEUR' : 'ISOLANT'}`,
            ruleApplied: 'Un conducteur laisse passer le courant électrique ; un isolant le bloque.',
          },
          {
            stepNumber: 2,
            title: 'Effet sur la lampe',
            explanation: mat.cond ? 'La boucle est conductrice : la lampe brille.' : 'La boucle est bloquée : la lampe ne brille pas.',
            mathExpression: `Lampe = ${mat.cond ? 'Allumée' : 'Éteinte'}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const items = randInt(2, 4);
      const vPile = pickRandom([1.5, 4.5, 9]);
      return makeResult(chapterId, difficulty, {
        title: 'Sens conventionnel et nombre de dipôles',
        prompt: `Un circuit en boucle simple contient ${items} lampes identiques, 1 interrupteur fermé et une pile de ${vPile} V.\nCombien de dipôles composent ce circuit au total ?`,
        hint: 'Compte la pile (1) + l’interrupteur (1) + toutes les lampes.',
        questionType: 'numeric',
        correctAnswer: String(items + 2),
        unit: 'dipôles',
        explanationFinal: `Il y a 1 pile + 1 interrupteur + ${items} lampes = ${items + 2} dipôles.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Lister chaque dipôle (composant à 2 bornes)',
            explanation: `On compte 1 générateur, 1 interrupteur et ${items} récepteurs (lampes).`,
            mathExpression: `N = 1 + 1 + ${items} | N = ${items + 2} dipôles`,
            ruleApplied: 'Tout composant possédant deux bornes de connexion est un dipôle.',
          },
          {
            stepNumber: 2,
            title: 'Rappeler le sens du courant',
            explanation: 'À l’extérieur du générateur, le courant sort de la borne (+) vers la borne (−).',
            mathExpression: `Sens I : Borne (+) ➔ Lampes ➔ Borne (−)`,
          },
        ],
      });
    }
    const nbLampes = randInt(3, 6);
    const prixFil = pickRandom([500, 750, 1000]);
    const prixLampe = pickRandom([400, 500, 600]);
    const total = nbLampes * prixLampe + prixFil;
    return makeResult(chapterId, difficulty, {
      title: 'Maquette de classe à Libreville (Circuit + Budget F CFA)',
      prompt: `Pour l’atelier de Technologie d’un collège de Libreville, un groupe achète ${nbLampes} ampoules à ${prixLampe} F CFA pièce et 1 lot de fils + interrupteur à ${prixFil} F CFA.\nCalculer la dépense totale (en F CFA).`,
      hint: `Multiplie ${nbLampes} × ${prixLampe}, puis ajoute ${prixFil} F CFA.`,
      questionType: 'numeric',
      correctAnswer: String(total),
      unit: 'F CFA',
      explanationFinal: `La dépense totale pour la maquette est de ${total} F CFA.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer le coût des ampoules',
          explanation: `${nbLampes} × ${prixLampe} = ${nbLampes * prixLampe} F CFA.`,
          mathExpression: `C_ampoules = ${nbLampes} × ${prixLampe} | C_ampoules = ${nbLampes * prixLampe} F CFA`,
        },
        {
          stepNumber: 2,
          title: 'Ajouter les fils et l’interrupteur',
          explanation: `Total = ${nbLampes * prixLampe} + ${prixFil} = ${total} F CFA.`,
          mathExpression: `Total = ${nbLampes * prixLampe} + ${prixFil} | Total = ${total} F CFA`,
          subResult: `${total} F CFA`,
        },
      ],
    });
  }

  // 2. SÉRIE VS DÉRIVATION & COURT-CIRCUIT
  if (chapterId === 'phys-circuits-serie-derivation') {
    if (difficulty === 1) {
      const isSerie = randFloat() > 0.5;
      return makeResult(chapterId, difficulty, {
        title: 'Effet d’une panne sur L1 (Série vs Dérivation)',
        prompt: `Deux lampes L1 et L2 sont branchées en ${isSerie ? 'SÉRIE' : 'DÉRIVATION'}. Soudain, le filament de L1 grille.\nQue fait la lampe L2 ?`,
        hint: isSerie ? 'En série il n’y a qu’une seule boucle !' : 'En dérivation chaque lampe a sa propre boucle reliée au générateur.',
        questionType: 'qcm',
        options: ['L2 s’éteint aussi', 'L2 continue de briller normalement'],
        correctAnswer: isSerie ? 'L2 s’éteint aussi' : 'L2 continue de briller normalement',
        explanationFinal: isSerie
          ? 'En série, une lampe grillée ouvre l’unique boucle : L2 s’éteint.'
          : 'En dérivation, L2 reste dans sa propre boucle fermée et continue de briller.',
        steps: [
          {
            stepNumber: 1,
            title: 'Identifier la structure du circuit',
            explanation: isSerie ? '1 seule boucle.' : '2 boucles indépendantes.',
            mathExpression: `Montage = ${isSerie ? 'SÉRIE (1 boucle)' : 'DÉRIVATION (2 boucles)'}`,
          },
          {
            stepNumber: 2,
            title: 'Conclure sur L2',
            explanation: isSerie ? 'Le courant est bloqué pour tout le circuit.' : 'Le courant passe toujours dans la branche de L2.',
            mathExpression: `L2 = ${isSerie ? 'Éteinte' : 'Reste allumée'}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const branches = randInt(2, 5);
      return makeResult(chapterId, difficulty, {
        title: 'Compter les boucles et nœuds en dérivation',
        prompt: `On branche ${branches} lampes en dérivation aux bornes d’une pile (toutes en parallèle).\nCombien de boucles indépendantes contiennent chacune une lampe et le générateur ?`,
        hint: 'Chaque branche dérivée forme une boucle fermée avec la pile.',
        questionType: 'numeric',
        correctAnswer: String(branches),
        unit: 'boucles',
        explanationFinal: `Il y a ${branches} boucles indépendantes.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la définition du montage en dérivation',
            explanation: `Chaque lampe est reliée directement aux bornes de la pile sur sa propre branche.`,
            mathExpression: `Nb lampes en dérivation = ${branches} | Nb boucles = ${branches}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const isGenShort = randFloat() > 0.5;
      return makeResult(chapterId, difficulty, {
        title: 'Court-circuit d’un dipôle ou du générateur',
        prompt: isGenShort
          ? 'Dans un circuit en série (pile + L1 + L2), on relie directement par un fil de cuivre les deux bornes (+) et (−) de la PILE.\nQue risque-t-il d’arriver ?'
          : 'Dans un circuit en série (pile + L1 + L2), on relie les deux bornes de L1 uniquement par un fil de cuivre.\nQue fait L1 ?',
        hint: isGenShort
          ? 'La pile est en court-circuit direct !'
          : 'Le courant prend le chemin le plus facile (le fil) et contourne L1.',
        questionType: 'qcm',
        options: isGenShort
          ? ['Danger d’échauffement et d’incendie du générateur', 'L1 et L2 brillent 2 fois plus fort']
          : ['L1 s’éteint et L2 brille plus fort', 'L1 explose immédiatement'],
        correctAnswer: isGenShort
          ? 'Danger d’échauffement et d’incendie du générateur'
          : 'L1 s’éteint et L2 brille plus fort',
        explanationFinal: isGenShort
          ? 'Court-circuiter un générateur provoque une surintensité dangereuse pouvant déclencher un incendie.'
          : 'L1 est court-circuitée (elle s’éteint) ; toute la tension profite à L2 qui brille davantage.',
        steps: [
          {
            stepNumber: 1,
            title: 'Tracer le trajet du courant',
            explanation: 'Le courant passe en priorité par le fil de résistance quasi nulle.',
            mathExpression: isGenShort
              ? `Fil entre (+) et (−) ➔ Court-circuit générateur`
              : `Fil aux bornes de L1 ➔ Courant contourne L1`,
          },
          {
            stepNumber: 2,
            title: 'Conséquence physique',
            explanation: isGenShort
              ? 'Échauffement rapide des fils et de la pile.'
              : 'L1 s’éteint et le fusible protège le circuit si besoin.',
            mathExpression: isGenShort ? `Risque = Incendie (couper via fusible)` : `L1 = Éteinte | L2 = Brille plus`,
          },
        ],
      });
    }
    const rooms = randInt(3, 6);
    return makeResult(chapterId, difficulty, {
      title: 'Installation électrique d’une maison à Owendo',
      prompt: `Un électricien installe l’éclairage de ${rooms} pièces d’une maison à Owendo (chaque ampoule fonctionne sous 220 V indépendamment des autres).\nS’il les branche en série au lieu de la dérivation, que se passe-t-il si une ampoule du salon grille ?`,
      hint: 'Dans une maison, toutes les lampes doivent être en dérivation.',
      questionType: 'qcm',
      options: [
        `Les ${rooms} pièces se retrouvent dans le noir`,
        'Seul le salon est éteint',
      ],
      correctAnswer: `Les ${rooms} pièces se retrouvent dans le noir`,
      explanationFinal: `En série, la panne d’une seule ampoule coupe le courant dans toutes les ${rooms} pièces.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Comparer les deux montages domestiques',
          explanation: 'En série, toutes les lampes appartiennent à une boucle unique.',
          mathExpression: `1 ampoule grillée en série ➔ Circuit OUVERT`,
        },
        {
          stepNumber: 2,
          title: 'Conclure pour la maison',
          explanation: `Toutes les ${rooms} ampoules s’éteignent : c’est pourquoi une maison est toujours câblée en dérivation !`,
          mathExpression: `Conclusion = Les ${rooms} pièces s’éteignent`,
        },
      ],
    });
  }

  // 3. INTENSITÉ I & LOI DES NŒUDS
  if (chapterId === 'phys-intensite') {
    if (difficulty === 1) {
      const i1 = randInt(2, 8) / 10;
      const i2 = randInt(2, 8) / 10;
      const iTot = Number((i1 + i2).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Loi des nœuds : Calculer l’intensité principale I',
        prompt: `À un nœud de dérivation, deux branches dérivées sont parcourues par I₁ = ${i1} A et I₂ = ${i2} A.\nCalculer l’intensité I de la branche principale (en A).`,
        hint: `Applique la loi des nœuds : I = I₁ + I₂ = ${i1} + ${i2}.`,
        questionType: 'numeric',
        correctAnswer: String(iTot),
        unit: 'A',
        explanationFinal: `L’intensité principale vaut I = ${iTot} A.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire la loi des nœuds',
            explanation: 'La somme des intensités qui arrivent au nœud égale la somme de celles qui en repartent.',
            mathExpression: `I = I₁ + I₂`,
            ruleApplied: 'Loi des nœuds en dérivation',
          },
          {
            stepNumber: 2,
            title: 'Calculer debout',
            explanation: `${i1} + ${i2} = ${iTot} A.`,
            mathExpression: `I = ${i1} + ${i2} | I = ${iTot} A`,
            subResult: `I = ${iTot} A`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const ma = randInt(2, 9) * 50; // 100..450 mA
      const i2 = randInt(2, 7) / 10; // 0.2..0.7 A
      const i1A = ma / 1000;
      const iTot = Number((i1A + i2).toFixed(2));
      return makeResult(chapterId, difficulty, {
        title: 'Conversion mA ➔ A et Loi des nœuds',
        prompt: `Dans un circuit en dérivation, I₁ = ${ma} mA et I₂ = ${i2} A.\nConvertir I₁ en ampères puis calculer l’intensité totale I (en A).`,
        hint: `Divise ${ma} mA par 1 000 pour obtenir ${i1A} A, puis ajoute ${i2} A.`,
        questionType: 'numeric',
        correctAnswer: String(iTot),
        unit: 'A',
        explanationFinal: `I = ${i1A} + ${i2} = ${iTot} A.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir I₁ de mA en A',
            explanation: `1 A = 1 000 mA, donc ${ma} mA = ${ma} ÷ 1 000 = ${i1A} A.`,
            mathExpression: `I₁ = ${ma} ÷ 1 000 | I₁ = ${i1A} A`,
          },
          {
            stepNumber: 2,
            title: 'Appliquer la loi des nœuds',
            explanation: `I = ${i1A} + ${i2} = ${iTot} A.`,
            mathExpression: `I = ${i1A} + ${i2} | I = ${iTot} A`,
            subResult: `I = ${iTot} A`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const i1 = randInt(2, 6) / 10;
      const i2 = randInt(3, 8) / 10;
      const iTot = Number((i1 + i2).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Loi des nœuds inversée : Trouver I₂',
        prompt: `Un générateur débite une intensité totale I = ${iTot} A qui se sépare vers deux lampes en dérivation. L’ampèremètre sur la branche 1 indique I₁ = ${i1} A.\nCalculer I₂ dans la deuxième branche (en A).`,
        hint: `Isole I₂ par soustraction : I₂ = I - I₁ = ${iTot} - ${i1}.`,
        questionType: 'numeric',
        correctAnswer: String(i2),
        unit: 'A',
        explanationFinal: `I₂ = ${iTot} - ${i1} = ${i2} A.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Transformer la loi des nœuds',
            explanation: 'Puisque I = I₁ + I₂, on a I₂ = I − I₁.',
            mathExpression: `I = I₁ + I₂ | I₂ = I − I₁`,
          },
          {
            stepNumber: 2,
            title: 'Calculer I₂ debout',
            explanation: `${iTot} − ${i1} = ${i2} A.`,
            mathExpression: `I₂ = ${iTot} − ${i1} | I₂ = ${i2} A`,
            subResult: `I₂ = ${i2} A`,
          },
        ],
      });
    }
    const iLampMa = 450;
    const iVentA = randInt(1, 3) + 0.2;
    const iChargeurMa = 600;
    const tot = Number((iLampMa / 1000 + iVentA + iChargeurMa / 1000).toFixed(2));
    return makeResult(chapterId, difficulty, {
      title: 'Multiprise d’un salon à Libreville (3 appareils en dérivation)',
      prompt: `Sur une multiprise (en dérivation) à Libreville, on branche : une lampe (${iLampMa} mA), un ventilateur (${iVentA} A) et un chargeur (${iChargeurMa} mA).\nCalculer l’intensité totale I qui traverse le câble de la multiprise (en A).`,
      hint: `Convertis d’abord les mA en A (${iLampMa / 1000} A et ${iChargeurMa / 1000} A), puis additionne les 3 intensités !`,
      questionType: 'numeric',
      correctAnswer: String(tot),
      unit: 'A',
      explanationFinal: `L’intensité totale sur le câble est I = ${tot} A.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Tout convertir en Ampères (A)',
          explanation: `${iLampMa} mA = ${iLampMa / 1000} A et ${iChargeurMa} mA = ${iChargeurMa / 1000} A.`,
          mathExpression: `I₁ = 0,45 A | I₂ = ${iVentA} A | I₃ = 0,60 A`,
        },
        {
          stepNumber: 2,
          title: 'Additionner les 3 intensités',
          explanation: `I = 0,45 + ${iVentA} + 0,60 = ${tot} A.`,
          mathExpression: `I = 0,45 + ${iVentA} + 0,60 | I = ${tot} A`,
          subResult: `${tot} A`,
        },
      ],
    });
  }

  // 4. TENSION U & LOI DES MAILLES
  if (chapterId === 'phys-tension') {
    if (difficulty === 1) {
      const u1 = randInt(2, 6);
      const u2 = randInt(3, 8);
      const uG = u1 + u2;
      return makeResult(chapterId, difficulty, {
        title: 'Additivité des tensions en série',
        prompt: `Deux lampes L1 et L2 sont branchées en SÉRIE. Le voltmètre mesure U₁ = ${u1} V et U₂ = ${u2} V.\nCalculer la tension U_G du générateur (en V).`,
        hint: `En série, les tensions s’additionnent : U_G = U₁ + U₂.`,
        questionType: 'numeric',
        correctAnswer: String(uG),
        unit: 'V',
        explanationFinal: `U_G = ${u1} + ${u2} = ${uG} V.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire la loi d’additivité des tensions',
            explanation: 'Dans un circuit en série, U_G = U₁ + U₂.',
            mathExpression: `U_G = U₁ + U₂`,
          },
          {
            stepNumber: 2,
            title: 'Calculer debout',
            explanation: `${u1} + ${u2} = ${uG} V.`,
            mathExpression: `U_G = ${u1} + ${u2} | U_G = ${uG} V`,
            subResult: `U_G = ${uG} V`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const uG = pickRandom([6, 9, 12, 24]);
      return makeResult(chapterId, difficulty, {
        title: 'Unicité de la tension en dérivation',
        prompt: `Deux lampes L1 et L2 sont branchées en DÉRIVATION aux bornes d’un générateur de tension U_G = ${uG} V.\nQuelle est la tension U₂ aux bornes de L2 (en V) ?`,
        hint: 'En dérivation, toutes les branches ont la MÊME tension !',
        questionType: 'numeric',
        correctAnswer: String(uG),
        unit: 'V',
        explanationFinal: `En dérivation, la tension est identique partout : U₂ = ${uG} V.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la loi d’unicité des tensions',
            explanation: 'Des dipôles en dérivation ont la même tension à leurs bornes.',
            mathExpression: `U_G = U₁ = U₂ | U₂ = ${uG} V`,
            ruleApplied: 'Loi d’unicité des tensions en dérivation',
          },
        ],
      });
    }
    if (difficulty === 3) {
      const uG = pickRandom([12, 15, 18, 24]);
      const u1 = randInt(3, 8) + 0.5;
      const u2 = Number((uG - u1).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Tension manquante dans un circuit en série',
        prompt: `Un générateur de tension U_G = ${uG} V alimente en série une résistance et un moteur. La tension aux bornes de la résistance vaut U₁ = ${u1} V.\nCalculer la tension U₂ aux bornes du moteur (en V).`,
        hint: `Soustrais : U₂ = U_G - U₁ = ${uG} - ${u1}.`,
        questionType: 'numeric',
        correctAnswer: String(u2),
        unit: 'V',
        explanationFinal: `U₂ = ${uG} - ${u1} = ${u2} V.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la loi d’additivité',
            explanation: 'En série, U_G = U₁ + U₂ donc U₂ = U_G − U₁.',
            mathExpression: `U_G = U₁ + U₂ | U₂ = ${uG} − ${u1}`,
          },
          {
            stepNumber: 2,
            title: 'Calculer U₂ debout',
            explanation: `${uG} − ${u1} = ${u2} V.`,
            mathExpression: `U₂ = ${u2} V`,
            subResult: `U₂ = ${u2} V`,
          },
        ],
      });
    }
    const vNominal = 220;
    const vTransfo = 12;
    const piles = vTransfo / 1.5;
    return makeResult(chapterId, difficulty, {
      title: 'Piles en série vs Secteur SEEG 220 V',
      prompt: `Une radio de brousse fonctionne sous U = ${vTransfo} V. On utilise des piles neuves de 1,5 V branchées en SÉRIE.\nCombien de piles faut-il mettre en série pour obtenir ${vTransfo} V ?`,
      hint: `En série les tensions des piles s’additionnent : divise ${vTransfo} par 1,5 !`,
      questionType: 'numeric',
      correctAnswer: String(piles),
      unit: 'piles',
      explanationFinal: `Il faut ${piles} piles de 1,5 V en série (car ${piles} × 1,5 = ${vTransfo} V). (Prise SEEG = ${vNominal} V).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Utiliser l’additivité des tensions en série',
          explanation: `Pour n piles identiques de 1,5 V en série : U_totale = n × 1,5 V.`,
          mathExpression: `n × 1,5 = ${vTransfo} | n = ${vTransfo} ÷ 1,5`,
        },
        {
          stepNumber: 2,
          title: 'Calculer le nombre de piles',
          explanation: `${vTransfo} ÷ 1,5 = ${piles} piles.`,
          mathExpression: `n = ${piles} piles`,
          subResult: `${piles} piles`,
        },
      ],
    });
  }

  // 5. LOI D'OHM U = R * I
  if (chapterId === 'phys-loi-ohm') {
    if (difficulty === 1) {
      const r = randInt(2, 9) * 10;
      const i = randInt(2, 5);
      const u = r * i;
      return makeResult(chapterId, difficulty, {
        title: 'Calcul direct de tension (Loi d’Ohm)',
        prompt: `Une résistance R = ${r} Ω est traversée par un courant I = ${i} A.\nCalculer la tension U à ses bornes (en V).`,
        hint: `Applique U = R × I = ${r} × ${i}.`,
        questionType: 'numeric',
        correctAnswer: String(u),
        unit: 'V',
        explanationFinal: `U = ${r} × ${i} = ${u} V.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire la loi d’Ohm',
            explanation: `R = ${r} Ω et I = ${i} A.`,
            mathExpression: `U = R × I`,
            ruleApplied: 'Loi d’Ohm : U (V) = R (Ω) × I (A)',
          },
          {
            stepNumber: 2,
            title: 'Calculer debout',
            explanation: `${r} × ${i} = ${u} V.`,
            mathExpression: `U = ${r} × ${i} | U = ${u} V`,
            subResult: `U = ${u} V`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const r = randInt(3, 9) * 10;
      const ma = randInt(2, 8) * 100; // 200..800 mA
      const iA = ma / 1000;
      const u = Number((r * iA).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Loi d’Ohm avec conversion mA ➔ A',
        prompt: `Un conducteur ohmique de résistance R = ${r} Ω est traversé par I = ${ma} mA.\nConvertir I en ampères puis calculer U (en V).`,
        hint: `Convertis ${ma} mA = ${iA} A, puis calcule U = ${r} × ${iA}.`,
        questionType: 'numeric',
        correctAnswer: String(u),
        unit: 'V',
        explanationFinal: `U = ${r} × ${iA} = ${u} V.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir l’intensité en Ampères',
            explanation: `${ma} mA = ${ma} ÷ 1 000 = ${iA} A.`,
            mathExpression: `I = ${ma} ÷ 1 000 | I = ${iA} A`,
          },
          {
            stepNumber: 2,
            title: 'Appliquer U = R × I',
            explanation: `U = ${r} × ${iA} = ${u} V.`,
            mathExpression: `U = ${r} × ${iA} | U = ${u} V`,
            subResult: `U = ${u} V`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const i = randInt(2, 6) / 10;
      const r = randInt(3, 12) * 5;
      const u = Number((r * i).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Identifier une résistance inconnue (R = U ÷ I)',
        prompt: `Aux bornes d’un résistor inconnu, on mesure U = ${u} V pour une intensité I = ${i} A.\nCalculer la valeur de sa résistance R (en Ω).`,
        hint: `Transforme U = R × I en R = U ÷ I.`,
        questionType: 'numeric',
        correctAnswer: String(r),
        unit: 'Ω',
        explanationFinal: `La résistance mesure R = ${r} Ω.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Isoler R dans U = R × I',
            explanation: 'R = U ÷ I.',
            mathExpression: `R = U ÷ I | R = ${u} ÷ ${i}`,
          },
          {
            stepNumber: 2,
            title: 'Calculer R debout',
            explanation: `${u} ÷ ${i} = ${r} Ω.`,
            mathExpression: `R = ${r} Ω`,
            subResult: `R = ${r} Ω`,
          },
        ],
      });
    }
    const r = randInt(4, 10) * 10;
    const uPile = 12;
    const uLed = 2;
    const uRes = uPile - uLed;
    const iA = Number((uRes / r).toFixed(2));
    const iMa = Math.round((uRes / r) * 1000);
    return makeResult(chapterId, difficulty, {
      title: 'Protection d’une LED de signalisation (Série + Ohm)',
      prompt: `Une batterie de ${uPile} V alimente en série une LED (tension U_LED = ${uLed} V) et une résistance de protection R = ${r} Ω.\nCalculer l’intensité I qui traverse le circuit (en A, arrondir à 2 décimales si besoin, ici exact ou 2 décimales).`,
      hint: `1) Trouve U_R = ${uPile} - ${uLed} = ${uRes} V. 2) Calcule I = U_R ÷ R !`,
      questionType: 'numeric',
      correctAnswer: String(iA),
      unit: 'A',
      explanationFinal: `U_R = ${uRes} V donc I = ${uRes} ÷ ${r} ≈ ${iA} A (${iMa} mA).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer la tension aux bornes de la résistance',
          explanation: `En série, U_pile = U_LED + U_R donc U_R = ${uPile} − ${uLed} = ${uRes} V.`,
          mathExpression: `U_R = ${uPile} − ${uLed} | U_R = ${uRes} V`,
        },
        {
          stepNumber: 2,
          title: 'Appliquer I = U_R ÷ R',
          explanation: `I = ${uRes} ÷ ${r} ≈ ${iA} A.`,
          mathExpression: `I = ${uRes} ÷ ${r} | I ≈ ${iA} A`,
          subResult: `${iA} A`,
        },
      ],
    });
  }

  // 6. PUISSANCE & FACTURE SEEG
  if (chapterId === 'phys-puissance-seeg') {
    if (difficulty === 1) {
      const u = 220;
      const i = randInt(2, 8);
      const p = u * i;
      return makeResult(chapterId, difficulty, {
        title: 'Puissance électrique P = U × I',
        prompt: `Un fer à repasser branché sur une prise SEEG (U = ${u} V) est traversé par un courant I = ${i} A.\nCalculer sa puissance électrique P (en Watts W).`,
        hint: `Utilise P = U × I = ${u} × ${i}.`,
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'W',
        explanationFinal: `P = ${u} × ${i} = ${p} W.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire la formule de puissance',
            explanation: 'P = U × I.',
            mathExpression: `P = U × I | P = ${u} × ${i}`,
          },
          {
            stepNumber: 2,
            title: 'Calculer P debout',
            explanation: `${u} × ${i} = ${p} W.`,
            mathExpression: `P = ${p} W`,
            subResult: `${p} W`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const kw = pickRandom([1.5, 2, 2.5, 3]);
      const h = randInt(2, 6);
      const e = Number((kw * h).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Énergie électrique consommée E = P × t (en kWh)',
        prompt: `Un réfrigérateur / climatiseur de puissance P = ${kw * 1000} W fonctionne pendant t = ${h} heures.\nConvertir P en kW puis calculer l’énergie consommée E (en kWh).`,
        hint: `${kw * 1000} W = ${kw} kW, puis E = P × t.`,
        questionType: 'numeric',
        correctAnswer: String(e),
        unit: 'kWh',
        explanationFinal: `E = ${kw} × ${h} = ${e} kWh.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir P en kW',
            explanation: `1 kW = 1 000 W, donc ${kw * 1000} W = ${kw} kW.`,
            mathExpression: `P = ${kw * 1000} ÷ 1 000 | P = ${kw} kW`,
          },
          {
            stepNumber: 2,
            title: 'Calculer l’énergie E = P × t',
            explanation: `E = ${kw} × ${h} = ${e} kWh.`,
            mathExpression: `E = ${kw} × ${h} | E = ${e} kWh`,
            subResult: `${e} kWh`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const p = pickRandom([660, 1100, 1540, 2200]);
      const u = 220;
      const i = p / u;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer l’intensité efficace (I = P ÷ U) et calibrer le fusible',
        prompt: `Un four électrique porte l’indication « ${p} W ; ${u} V ».\nCalculer l’intensité I qu’il appelle sur le réseau SEEG (en A).`,
        hint: `Isole I : I = P ÷ U = ${p} ÷ ${u}.`,
        questionType: 'numeric',
        correctAnswer: String(i),
        unit: 'A',
        explanationFinal: `L’appareil appelle I = ${i} A.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Transformer P = U × I',
            explanation: 'I = P ÷ U.',
            mathExpression: `I = P ÷ U | I = ${p} ÷ ${u}`,
          },
          {
            stepNumber: 2,
            title: 'Calculer I debout',
            explanation: `${p} ÷ ${u} = ${i} A.`,
            mathExpression: `I = ${i} A`,
            subResult: `${i} A`,
          },
        ],
      });
    }
    const kw = pickRandom([2, 3]);
    const hPerDay = randInt(3, 5);
    const days = 30;
    const tariff = pickRandom([110, 120, 130]);
    const totalKwh = kw * hPerDay * days;
    const cost = totalKwh * tariff;
    return makeResult(chapterId, difficulty, {
      title: 'Facture mensuelle SEEG à Port-Gentil (en F CFA)',
      prompt: `À Port-Gentil, une famille utilise un climatiseur de ${kw * 1000} W pendant ${hPerDay} h par jour durant ${days} jours.\nLe tarif SEEG est de ${tariff} F CFA par kWh. Calculer le montant mensuel (en F CFA).`,
      hint: `1) P = ${kw} kW. 2) Durée totale = ${hPerDay} × ${days} = ${hPerDay * days} h. 3) E = P × t, puis × ${tariff} F !`,
      questionType: 'numeric',
      correctAnswer: String(cost),
      unit: 'F CFA',
      explanationFinal: `La facture pour le climatiseur est de ${cost.toLocaleString('fr-FR')} F CFA.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer l’énergie mensuelle E (kWh)',
          explanation: `P = ${kw} kW et t = ${hPerDay} × ${days} = ${hPerDay * days} h.`,
          mathExpression: `E = ${kw} × ${hPerDay * days} | E = ${totalKwh} kWh`,
        },
        {
          stepNumber: 2,
          title: 'Calculer le coût SEEG en F CFA',
          explanation: `Prix = ${totalKwh} × ${tariff} = ${cost} F CFA.`,
          mathExpression: `Prix = ${totalKwh} × ${tariff} | Prix = ${cost} F CFA`,
          subResult: `${cost} F CFA`,
        },
      ],
    });
  }

  // 7. PROPAGATION LUMIÈRE
  if (chapterId === 'phys-propagation-lumiere') {
    if (difficulty === 1) {
      const t = randInt(2, 6);
      const d = t * 300000;
      return makeResult(chapterId, difficulty, {
        title: 'Distance parcourue par la lumière (d = c × t)',
        prompt: `La lumière se propage dans le vide à c = 300 000 km/s.\nQuelle distance parcourt un rayon lumineux en t = ${t} secondes (en km) ?`,
        hint: `Multiplie : d = 300 000 × ${t}.`,
        questionType: 'numeric',
        correctAnswer: String(d),
        unit: 'km',
        explanationFinal: `La lumière parcourt ${d.toLocaleString('fr-FR')} km en ${t} s.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer d = c × t',
            explanation: `c = 300 000 km/s et t = ${t} s.`,
            mathExpression: `d = 300 000 × ${t} | d = ${d} km`,
            subResult: `${d} km`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const t = randInt(2, 8);
      const d = t * 300000;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer la durée de trajet t = d ÷ c',
        prompt: `Un signal laser parcourt d = ${d.toLocaleString('fr-FR')} km dans le vide (c = 300 000 km/s).\nCombien de secondes dure ce trajet (en s) ?`,
        hint: `Divise la distance par 300 000 !`,
        questionType: 'numeric',
        correctAnswer: String(t),
        unit: 's',
        explanationFinal: `t = ${d} ÷ 300 000 = ${t} s.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Transformer d = c × t',
            explanation: 't = d ÷ c.',
            mathExpression: `t = ${d} ÷ 300 000 | t = ${t} s`,
            subResult: `${t} s`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const mins = pickRandom([5, 8, 10]);
      const secs = mins * 60;
      const distKm = secs * 300000;
      return makeResult(chapterId, difficulty, {
        title: 'Convertir des minutes en secondes puis calculer d',
        prompt: `La lumière d’une étoile met ${mins} minutes pour traverser une portion de l’espace (c = 300 000 km/s).\nCalculer la distance parcourue en km.`,
        hint: `Convertis d’abord ${mins} min = ${mins} × 60 = ${secs} s, puis multiplie par 300 000.`,
        questionType: 'numeric',
        correctAnswer: String(distKm),
        unit: 'km',
        explanationFinal: `d = ${secs} × 300 000 = ${distKm.toLocaleString('fr-FR')} km.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir le temps en secondes',
            explanation: `1 min = 60 s donc ${mins} min = ${secs} s.`,
            mathExpression: `t = ${mins} × 60 | t = ${secs} s`,
          },
          {
            stepNumber: 2,
            title: 'Calculer la distance d = c × t',
            explanation: `d = 300 000 × ${secs} = ${distKm} km.`,
            mathExpression: `d = 300 000 × ${secs} | d = ${distKm} km`,
            subResult: `${distKm} km`,
          },
        ],
      });
    }
    const secAllerRetour = randInt(2, 6);
    const dist = (secAllerRetour / 2) * 300000;
    return makeResult(chapterId, difficulty, {
      title: 'Télémétrie laser Terre-Satellite (Aller-Retour ÷ 2)',
      prompt: `Une station d’observation au Gabon envoie une impulsion laser vers un satellite géostationnaire et reçoit l’écho après Δt = ${secAllerRetour} s au total (aller + retour).\nSachant que c = 300 000 km/s, à quelle distance se trouve le satellite (en km) ?`,
      hint: `Attention : ${secAllerRetour} s est le temps ALLER-RETOUR ! Divise par 2 pour avoir le temps aller simple.`,
      questionType: 'numeric',
      correctAnswer: String(dist),
      unit: 'km',
      explanationFinal: `Le temps aller simple est ${secAllerRetour / 2} s, donc la distance est ${dist.toLocaleString('fr-FR')} km.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Trouver le temps de l’aller simple',
          explanation: `t_aller = ${secAllerRetour} ÷ 2 = ${secAllerRetour / 2} s.`,
          mathExpression: `t_aller = ${secAllerRetour} ÷ 2 | t_aller = ${secAllerRetour / 2} s`,
        },
        {
          stepNumber: 2,
          title: 'Calculer la distance d = c × t_aller',
          explanation: `d = 300 000 × ${secAllerRetour / 2} = ${dist} km.`,
          mathExpression: `d = 300 000 × ${secAllerRetour / 2} | d = ${dist} km`,
          subResult: `${dist} km`,
        },
      ],
    });
  }

  // 8. OMBRES & ÉCLIPSES
  if (chapterId === 'phys-ombres-eclipses') {
    if (difficulty === 1) {
      const solar = randFloat() > 0.5;
      return makeResult(chapterId, difficulty, {
        title: 'Ordre d’alignement lors d’une éclipse',
        prompt: solar
          ? 'Lors d’une ÉCLIPSE DE SOLEIL, quel astre se place entre le Soleil et la Terre ?'
          : 'Lors d’une ÉCLIPSE DE LUNE, quel astre se place entre le Soleil et la Lune ?',
        hint: solar ? 'Elle cache le Soleil aux Terriens !' : 'Elle projette son ombre sur la Lune !',
        questionType: 'qcm',
        options: ['La Lune', 'La Terre', 'Mars'],
        correctAnswer: solar ? 'La Lune' : 'La Terre',
        explanationFinal: solar
          ? 'Soleil — Lune — Terre : la Lune cache le Soleil.'
          : 'Soleil — Terre — Lune : la Terre bloque la lumière vers la Lune.',
        steps: [
          {
            stepNumber: 1,
            title: 'Schématiser l’alignement des 3 astres',
            explanation: solar ? 'La Lune est au milieu.' : 'La Terre est au milieu.',
            mathExpression: solar ? `Soleil ➔ LUNE ➔ Terre` : `Soleil ➔ TERRE ➔ Lune`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      return makeResult(chapterId, difficulty, {
        title: 'Distinguer Ombre propre, Cône d’ombre et Ombre portée',
        prompt: 'Comment appelle-t-on la zone noire visible sur le mur (l’écran) derrière un ballon éclairé par une lampe ?',
        hint: 'Elle est « portée » sur le mur/écran.',
        questionType: 'qcm',
        options: ['L’ombre portée', 'L’ombre propre', 'Le foyer image'],
        correctAnswer: 'L’ombre portée',
        explanationFinal: 'La tache sombre sur l’écran est l’ombre portée ; la face non éclairée du ballon est l’ombre propre.',
        steps: [
          {
            stepNumber: 1,
            title: 'Différencier les 3 zones d’ombre',
            explanation: 'Sur l’objet = ombre propre ; dans l’espace = cône d’ombre ; sur l’écran = ombre portée.',
            mathExpression: `Tache sur l’écran = Ombre portée`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const k = randInt(2, 4);
      const rBall = randInt(3, 6);
      const rShadow = rBall * k;
      return makeResult(chapterId, difficulty, {
        title: 'Taille de l’ombre portée par proportionnalité (Thalès)',
        prompt: `Une source ponctuelle éclaire un disque opaque de diamètre d = ${rBall} cm placé à 20 cm de la source. L’écran est placé ${k} fois plus loin (à ${20 * k} cm de la source).\nQuel est le diamètre de l’ombre portée sur l’écran (en cm) ?`,
        hint: `La lumière se propage en ligne droite : si l’écran est ${k} fois plus loin, l’ombre est ${k} fois plus grande !`,
        questionType: 'numeric',
        correctAnswer: String(rShadow),
        unit: 'cm',
        explanationFinal: `D_ombre = ${rBall} × ${k} = ${rShadow} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Utiliser la propagation rectiligne (Thalès)',
            explanation: `Le rapport des distances vaut k = ${20 * k} ÷ 20 = ${k}.`,
            mathExpression: `D_ombre = ${k} × d | D_ombre = ${k} × ${rBall} | D_ombre = ${rShadow} cm`,
            subResult: `${rShadow} cm`,
          },
        ],
      });
    }
    const hPoteau = randInt(2, 4);
    const oPoteau = randInt(3, 5);
    const oArbre = oPoteau * randInt(3, 5);
    const hArbre = (hPoteau * oArbre) / oPoteau;
    return makeResult(chapterId, difficulty, {
      title: 'Mesurer la hauteur d’un okoumé par son ombre (Libreville)',
      prompt: `Au soleil à midi, un bâton vertical de ${hPoteau} m projette une ombre de ${oPoteau} m. Au même instant, un grand okoumé projette une ombre de ${oArbre} m.\nCalculer la hauteur de l’okoumé (en m).`,
      hint: `Les rayons du Soleil sont parallèles : h_arbre / ${oArbre} = ${hPoteau} / ${oPoteau}.`,
      questionType: 'numeric',
      correctAnswer: String(hArbre),
      unit: 'm',
      explanationFinal: `L’okoumé mesure ${hArbre} m de haut.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Écrire la proportionnalité des ombres',
          explanation: 'Les triangles formés par les rayons parallèles sont proportionnels.',
          mathExpression: `h_okoumé / ${oArbre} = ${hPoteau} / ${oPoteau}`,
        },
        {
          stepNumber: 2,
          title: 'Produit en croix debout',
          explanation: `h_okoumé = (${hPoteau} × ${oArbre}) ÷ ${oPoteau} = ${hArbre} m.`,
          mathExpression: `h = (${hPoteau} × ${oArbre}) ÷ ${oPoteau} | h = ${hArbre} m`,
          subResult: `${hArbre} m`,
        },
      ],
    });
  }

  // 9. RÉFLEXION & RÉFRACTION
  if (chapterId === 'phys-reflexion-refraction') {
    if (difficulty === 1) {
      const i = randInt(20, 70);
      return makeResult(chapterId, difficulty, {
        title: 'Loi de la réflexion sur un miroir plan',
        prompt: `Un rayon lumineux frappe un miroir plan avec un angle d’incidence i = ${i}° par rapport à la normale.\nQuelle est la valeur de l’angle de réflexion r (en degrés) ?`,
        hint: 'Sur un miroir plan, l’angle réfléchi est toujours égal à l’angle incident.',
        questionType: 'numeric',
        correctAnswer: String(i),
        unit: '°',
        explanationFinal: `r = i = ${i}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la loi de Descartes (Réflexion)',
            explanation: 'r = i.',
            mathExpression: `i = ${i}° | r = i = ${i}°`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const surfaceAngle = randInt(20, 65);
      const i = 90 - surfaceAngle;
      return makeResult(chapterId, difficulty, {
        title: 'Piège : Angle avec le miroir vs Angle avec la Normale',
        prompt: `Un rayon laser arrive en faisant un angle de ${surfaceAngle}° avec la SURFACE du miroir plan (et non la normale).\nCalculer l’angle de réflexion r par rapport à la normale (en degrés).`,
        hint: `La normale est perpendiculaire (90°) au miroir ! Donc i = 90° - ${surfaceAngle}°.`,
        questionType: 'numeric',
        correctAnswer: String(i),
        unit: '°',
        explanationFinal: `i = 90° - ${surfaceAngle}° = ${i}°, donc r = ${i}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Trouver l’angle d’incidence i avec la normale',
            explanation: `La normale forme un angle de 90° avec le miroir.`,
            mathExpression: `i = 90° − ${surfaceAngle}° | i = ${i}°`,
          },
          {
            stepNumber: 2,
            title: 'En déduire l’angle de réflexion r',
            explanation: `r = i = ${i}°.`,
            mathExpression: `r = ${i}°`,
            subResult: `${i}°`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const i = randInt(25, 65);
      const total = 2 * i;
      return makeResult(chapterId, difficulty, {
        title: 'Angle total entre rayon incident et rayon réfléchi',
        prompt: `Un rayon arrive sur un miroir avec un angle d’incidence i = ${i}°.\nQuel est l’angle total formé entre le rayon incident et le rayon réfléchi (en degrés) ?`,
        hint: 'L’angle total vaut i + r, et r = i !',
        questionType: 'numeric',
        correctAnswer: String(total),
        unit: '°',
        explanationFinal: `Angle total = i + r = ${i} + ${i} = ${total}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Additionner i et r',
            explanation: `Puisque r = i = ${i}°, l’écart entre les deux rayons vaut ${i} + ${i}.`,
            mathExpression: `Angle total = i + r | = ${i}° + ${i}° | = ${total}°`,
            subResult: `${total}°`,
          },
        ],
      });
    }
    return makeResult(chapterId, difficulty, {
      title: 'Réfraction lors de la pêche dans l’Ogooué',
      prompt: 'Un pêcheur sur l’Ogooué regarde un poisson immobile au fond de l’eau claire (l’indice de l’eau est supérieur à celui de l’air).\nOù le poisson paraît-il se trouver par rapport à sa vraie position ?',
      hint: 'Les rayons sortant de l’eau s’écartent de la normale en entrant dans l’air : l’image paraît remontée !',
      questionType: 'qcm',
      options: ['Plus proche de la surface (moins profond)', 'Plus profond qu’en réalité'],
      correctAnswer: 'Plus proche de la surface (moins profond)',
      explanationFinal: 'À cause de la réfraction Eau ➔ Air, le poisson paraît moins profond qu’il ne l’est réellement.',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyser le changement de milieu Eau ➔ Air',
          explanation: 'En passant de l’eau dans l’air, le rayon réfracté s’écarte de la normale.',
          mathExpression: `Eau ➔ Air : le rayon est dévié (réfraction)`,
        },
        {
          stepNumber: 2,
          title: 'Localiser l’image apparente',
          explanation: 'Le cerveau prolonge le rayon en ligne droite : le poisson semble plus haut.',
          mathExpression: `Profondeur apparente < Profondeur réelle`,
        },
      ],
    });
  }

  // 10. LENTILLES & VERGENCE
  if (chapterId === 'phys-lentilles') {
    if (difficulty === 1) {
      const f = pickRandom([0.1, 0.2, 0.25, 0.5]);
      const c = Number((1 / f).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Calcul direct de la vergence (C = 1 ÷ f’)',
        prompt: `Une lentille convergente a une distance focale f’ = ${f} m.\nCalculer sa vergence C (en dioptries δ).`,
        hint: `Applique C = 1 ÷ ${f}.`,
        questionType: 'numeric',
        correctAnswer: String(c),
        unit: 'δ',
        explanationFinal: `C = 1 ÷ ${f} = ${c} δ.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la formule de vergence',
            explanation: 'C = 1 ÷ f’ (avec f’ déjà en mètres).',
            mathExpression: `C = 1 ÷ ${f} | C = ${c} δ`,
            subResult: `${c} δ`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const fCm = pickRandom([10, 20, 25, 40, 50]);
      const fM = fCm / 100;
      const c = Number((1 / fM).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Conversion cm ➔ m puis Vergence',
        prompt: `Une loupe possède une distance focale f’ = ${fCm} cm.\nConvertir f’ en mètres puis calculer sa vergence C (en dioptries δ).`,
        hint: `Attention ! ${fCm} cm = ${fM} m avant de calculer 1 ÷ f’.`,
        questionType: 'numeric',
        correctAnswer: String(c),
        unit: 'δ',
        explanationFinal: `f’ = ${fM} m donc C = 1 ÷ ${fM} = ${c} δ.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir f’ en mètres',
            explanation: `1 m = 100 cm donc ${fCm} cm = ${fM} m.`,
            mathExpression: `f’ = ${fCm} ÷ 100 | f’ = ${fM} m`,
          },
          {
            stepNumber: 2,
            title: 'Calculer C = 1 ÷ f’',
            explanation: `C = 1 ÷ ${fM} = ${c} δ.`,
            mathExpression: `C = 1 ÷ ${fM} | C = ${c} δ`,
            subResult: `${c} δ`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const c = pickRandom([2, 4, 5, 10]);
      const fM = 1 / c;
      const fCm = Math.round(fM * 100);
      return makeResult(chapterId, difficulty, {
        title: 'Retrouver la distance focale f’ en cm (f’ = 1 ÷ C)',
        prompt: `Les lunettes d’un élève hypermétrope ont une vergence C = +${c} δ.\nCalculer la distance focale f’ de cette lentille (en cm).`,
        hint: `Calcule d’abord f’ = 1 ÷ ${c} en mètres, puis multiplie par 100 pour convertir en cm !`,
        questionType: 'numeric',
        correctAnswer: String(fCm),
        unit: 'cm',
        explanationFinal: `f’ = 1 ÷ ${c} = ${fM} m = ${fCm} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer f’ en mètres',
            explanation: `f’ = 1 ÷ C = 1 ÷ ${c} = ${fM} m.`,
            mathExpression: `f’ = 1 ÷ ${c} | f’ = ${fM} m`,
          },
          {
            stepNumber: 2,
            title: 'Convertir en cm',
            explanation: `${fM} × 100 = ${fCm} cm.`,
            mathExpression: `f’ = ${fM} × 100 | f’ = ${fCm} cm`,
            subResult: `${fCm} cm`,
          },
        ],
      });
    }
    const c1 = pickRandom([2, 3]);
    const c2 = pickRandom([2, 7]);
    const cTot = c1 + c2;
    const fTotCm = Math.round((1 / cTot) * 100);
    return makeResult(chapterId, difficulty, {
      title: 'Accolage de deux lentilles convergentes (Théorème des vergences)',
      prompt: `On accole deux lentilles minces convergentes de vergences C₁ = ${c1} δ et C₂ = ${c2} δ (la vergence totale vaut C = C₁ + C₂).\nCalculer la distance focale équivalente f’ en cm (avec C = ${cTot} δ).`,
      hint: `Additionne C = ${c1} + ${c2} = ${cTot} δ, puis f’ = 1 ÷ ${cTot} en mètres, puis × 100 en cm.`,
      questionType: 'numeric',
      correctAnswer: String(fTotCm),
      unit: 'cm',
      explanationFinal: `C = ${cTot} δ, donc f’ = 1 ÷ ${cTot} = ${1 / cTot} m = ${fTotCm} cm.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Additionner les vergences accolées',
          explanation: `C_tot = ${c1} + ${c2} = ${cTot} δ.`,
          mathExpression: `C = ${c1} + ${c2} | C = ${cTot} δ`,
        },
        {
          stepNumber: 2,
          title: 'Trouver f’ et convertir en cm',
          explanation: `f’ = (1 ÷ ${cTot}) × 100 = ${fTotCm} cm.`,
          mathExpression: `f’ = 100 ÷ ${cTot} | f’ = ${fTotCm} cm`,
          subResult: `${fTotCm} cm`,
        },
      ],
    });
  }

  // 11. DISPERSION & COULEURS
  if (chapterId === 'phys-dispersion-couleurs') {
    if (difficulty === 1) {
      const combos = [
        { q: 'Lumière Rouge + Lumière Verte', a: 'Jaune' },
        { q: 'Lumière Rouge + Lumière Bleue', a: 'Magenta' },
        { q: 'Lumière Verte + Lumière Bleue', a: 'Cyan' },
        { q: 'Rouge + Vert + Bleu', a: 'Blanc' },
      ];
      const c = pickRandom(combos);
      return makeResult(chapterId, difficulty, {
        title: 'Synthèse additive des lumières colorées (RVB)',
        prompt: `On projette sur un écran blanc le mélange suivant : ${c.q}.\nQuelle couleur obtient-on sur l’écran ?`,
        hint: 'En synthèse additive : R+V = Jaune, R+B = Magenta, V+B = Cyan, R+V+B = Blanc.',
        questionType: 'qcm',
        options: ['Jaune', 'Magenta', 'Cyan', 'Blanc'],
        correctAnswer: c.a,
        explanationFinal: `${c.q} donne du ${c.a}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer les lois RVB',
            explanation: 'Les lumières colorées s’additionnent sur un écran blanc.',
            mathExpression: `${c.q} = ${c.a}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      return makeResult(chapterId, difficulty, {
        title: 'Dispersion de la lumière blanche par un prisme',
        prompt: 'Lorsqu’un faisceau de lumière blanche traverse un prisme en verre, quel phénomène observe-t-on ?',
        hint: 'Le prisme décompose la lumière blanche en un spectre continu.',
        questionType: 'qcm',
        options: [
          'La dispersion (décomposition en spectre arc-en-ciel)',
          'L’absorption totale en lumière noire',
        ],
        correctAnswer: 'La dispersion (décomposition en spectre arc-en-ciel)',
        explanationFinal: 'Le prisme disperse la lumière blanche du rouge (moins dévié) au violet (plus dévié).',
        steps: [
          {
            stepNumber: 1,
            title: 'Définir la dispersion',
            explanation: 'La lumière blanche est polychromatique (mélange de toutes les couleurs).',
            mathExpression: `Lumière blanche + Prisme ➔ Spectre continu (Rouge à Violet)`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      return makeResult(chapterId, difficulty, {
        title: 'Action d’un filtre coloré sur la lumière blanche',
        prompt: 'On place un filtre VERT pur devant une lampe de lumière blanche.\nQuelle lumière colorée traverse ce filtre ?',
        hint: 'Un filtre coloré ne laisse passer que sa propre couleur et absorbe les autres.',
        questionType: 'qcm',
        options: ['Uniquement la lumière verte', 'Toutes les lumières sauf le vert'],
        correctAnswer: 'Uniquement la lumière verte',
        explanationFinal: 'Un filtre vert transmet le vert et absorbe le rouge et le bleu.',
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la propriété d’un filtre',
            explanation: 'Lumière blanche = R + V + B. Le filtre vert bloque R et B.',
            mathExpression: `(R + V + B) ➔ [Filtre Vert] ➔ V uniquement`,
          },
        ],
      });
    }
    return makeResult(chapterId, difficulty, {
      title: 'Couleur du drapeau du Gabon sous un spot BLEU (Synthèse soustractive)',
      prompt: 'La bande centrale du drapeau du Gabon est JAUNE (elle diffuse du Rouge et du Vert). On l’éclaire la nuit avec un projecteur uniquement BLEU.\nDe quelle couleur apparaît alors cette bande jaune ?',
      hint: 'Un objet jaune absorbe le Bleu ! S’il ne reçoit que du Bleu, il ne renvoie rien…',
      questionType: 'qcm',
      options: ['Noire', 'Verte', 'Jaune'],
      correctAnswer: 'Noire',
      explanationFinal: 'Un objet jaune ne diffuse que R et V. Sous lumière bleue pure, il absorbe le bleu et paraît NOIR !',
      steps: [
        {
          stepNumber: 1,
          title: 'Identifier les couleurs diffusées par la bande jaune',
          explanation: 'Jaune = Rouge + Vert. Il absorbe le Bleu.',
          mathExpression: `Objet jaune diffuse : {R, V} | Absorbe : {B}`,
        },
        {
          stepNumber: 2,
          title: 'Tester sous lumière bleue',
          explanation: 'Aucune couleur reçue n’est diffusée : l’œil ne reçoit aucune lumière.',
          mathExpression: `Lumière reçue (B) + Objet jaune ➔ Aucun rayon renvoyé = NOIR`,
        },
      ],
    });
  }

  // 12. MASSE VOLUMIQUE
  if (chapterId === 'phys-masse-volumique') {
    if (difficulty === 1) {
      const rho = pickRandom([0.5, 0.8, 2, 2.5, 8]);
      const v = randInt(2, 6) * 10;
      const m = Number((rho * v).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Calcul direct de masse volumique (ρ = m ÷ V)',
        prompt: `Un bloc solide a une masse m = ${m} g et un volume V = ${v} cm³.\nCalculer sa masse volumique ρ (en g/cm³).`,
        hint: `Divise m par V : ρ = ${m} ÷ ${v}.`,
        questionType: 'numeric',
        correctAnswer: String(rho),
        unit: 'g/cm³',
        explanationFinal: `ρ = ${m} ÷ ${v} = ${rho} g/cm³.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer ρ = m ÷ V',
            explanation: `${m} ÷ ${v} = ${rho} g/cm³.`,
            mathExpression: `ρ = m ÷ V | ρ = ${m} ÷ ${v} | ρ = ${rho} g/cm³`,
            subResult: `${rho} g/cm³`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const rho = pickRandom([0.6, 0.8, 1.5, 2.7]);
      const v = randInt(2, 5) * 10;
      const m = Number((rho * v).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Calculer une masse avec m = ρ × V',
        prompt: `Un morceau de bois ou de métal a une masse volumique ρ = ${rho} g/cm³ et un volume V = ${v} cm³.\nCalculer sa masse m (en g).`,
        hint: `Transforme ρ = m ÷ V en m = ρ × V.`,
        questionType: 'numeric',
        correctAnswer: String(m),
        unit: 'g',
        explanationFinal: `m = ${rho} × ${v} = ${m} g.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Isoler m = ρ × V',
            explanation: `m = ${rho} × ${v} = ${m} g.`,
            mathExpression: `m = ρ × V | m = ${rho} × ${v} | m = ${m} g`,
            subResult: `${m} g`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const m = randInt(4, 9) * 100; // g
      const rho = pickRandom([0.5, 0.8, 2, 2.5]);
      const v = Math.round(m / rho);
      return makeResult(chapterId, difficulty, {
        title: 'Calculer le volume par déplacement d’eau (V = m ÷ ρ)',
        prompt: `Une pièce a une masse m = ${m} g et une masse volumique ρ = ${rho} g/cm³.\nCalculer son volume V (en cm³).`,
        hint: `Utilise V = m ÷ ρ = ${m} ÷ ${rho}.`,
        questionType: 'numeric',
        correctAnswer: String(v),
        unit: 'cm³',
        explanationFinal: `V = ${m} ÷ ${rho} = ${v} cm³.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Isoler V = m ÷ ρ',
            explanation: `${m} ÷ ${rho} = ${v} cm³.`,
            mathExpression: `V = m ÷ ρ | V = ${m} ÷ ${rho} | V = ${v} cm³`,
            subResult: `${v} cm³`,
          },
        ],
      });
    }
    const volM3 = randInt(2, 5);
    const rhoOkoume = 500; // kg/m3 -> 0.5 g/cm3
    const massKg = volM3 * rhoOkoume;
    return makeResult(chapterId, difficulty, {
      title: 'Flottage d’une grume d’Okoumé sur l’Ogooué',
      prompt: `Une grume d’okoumé de volume V = ${volM3} m³ a une masse de m = ${massKg} kg (sachant que ρ_eau = 1 000 kg/m³).\nCalculer la masse volumique de cette grume (en kg/m³) pour vérifier qu’elle flotte sur l’Ogooué.`,
      hint: `Calcule ρ = m ÷ V = ${massKg} ÷ ${volM3}. Si ρ < 1 000 kg/m³, elle flotte !`,
      questionType: 'numeric',
      correctAnswer: String(rhoOkoume),
      unit: 'kg/m³',
      explanationFinal: `ρ = ${rhoOkoume} kg/m³ (< 1 000 kg/m³) : la grume d’okoumé flotte parfaitement !`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer ρ en kg/m³',
          explanation: `ρ = ${massKg} ÷ ${volM3} = ${rhoOkoume} kg/m³.`,
          mathExpression: `ρ = ${massKg} ÷ ${volM3} | ρ = ${rhoOkoume} kg/m³`,
        },
        {
          stepNumber: 2,
          title: 'Comparer à la masse volumique de l’eau',
          explanation: `${rhoOkoume} < 1 000 kg/m³ donc l’okoumé flotte.`,
          mathExpression: `500 kg/m³ < 1 000 kg/m³ ➔ FLOTTE`,
          subResult: `${rhoOkoume} kg/m³`,
        },
      ],
    });
  }

  // 13. FORCES & DYNAMOMÈTRE
  if (chapterId === 'phys-forces-dynamometre') {
    if (difficulty === 1) {
      const f = randInt(4, 24);
      const scale = pickRandom([2, 4]);
      const cm = Number((f / scale).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Longueur d’un vecteur force à l’échelle',
        prompt: `On souhaite tracer un vecteur force d’intensité F = ${f} N avec l’échelle suivante : 1 cm ↔ ${scale} N.\nQuelle sera la longueur de la flèche sur la feuille (en cm) ?`,
        hint: `Divise F par l’échelle : L = ${f} ÷ ${scale}.`,
        questionType: 'numeric',
        correctAnswer: String(cm),
        unit: 'cm',
        explanationFinal: `La flèche mesure ${cm} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer la longueur par proportionnalité',
            explanation: `L = ${f} ÷ ${scale} = ${cm} cm.`,
            mathExpression: `L = ${f} ÷ ${scale} | L = ${cm} cm`,
            subResult: `${cm} cm`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const cm = randInt(2, 6);
      const scale = pickRandom([5, 10, 20]);
      const f = cm * scale;
      return makeResult(chapterId, difficulty, {
        title: 'Retrouver l’intensité F à partir d’un vecteur dessiné',
        prompt: `Sur un schéma de cours, un vecteur force mesure L = ${cm} cm. L’échelle indiquée est 1 cm ↔ ${scale} N.\nQuelle est la valeur de cette force F (en N) ?`,
        hint: `Multiplie la longueur en cm par ${scale} N.`,
        questionType: 'numeric',
        correctAnswer: String(f),
        unit: 'N',
        explanationFinal: `F = ${cm} × ${scale} = ${f} N.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Utiliser l’échelle du vecteur',
            explanation: `F = ${cm} × ${scale} = ${f} N.`,
            mathExpression: `F = ${cm} × ${scale} | F = ${f} N`,
            subResult: `${f} N`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const f1 = randInt(15, 40);
      const f2 = randInt(10, f1 - 5);
      const res = f1 - f2;
      return makeResult(chapterId, difficulty, {
        title: 'Résultante de deux forces de sens opposés',
        prompt: `Deux élèves tirent sur une corde horizontale en sens opposés : l’un tire vers la droite avec F₁ = ${f1} N, l’autre vers la gauche avec F₂ = ${f2} N.\nQuelle est l’intensité de la force résultante (en N) ?`,
        hint: 'Deux forces de sens opposés se soustraient : F_res = F₁ - F₂.',
        questionType: 'numeric',
        correctAnswer: String(res),
        unit: 'N',
        explanationFinal: `F_res = ${f1} - ${f2} = ${res} N (vers la droite).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Soustraire les deux intensités opposées',
            explanation: `F_res = ${f1} − ${f2} = ${res} N.`,
            mathExpression: `F_res = ${f1} − ${f2} | F_res = ${res} N`,
            subResult: `${res} N`,
          },
        ],
      });
    }
    const f = randInt(30, 80) * 10;
    return makeResult(chapterId, difficulty, {
      title: 'Équilibre d’un lustre suspendu dans un lycée de Franceville',
      prompt: `Un plafonnier immobile de poids P = ${f} N est suspendu au plafond par un fil vertical. Il est en équilibre sous l’action de son poids P⃗ et de la tension T⃗ du fil.\nQuelle est l’intensité de la tension T du fil (en N) ?`,
      hint: 'Un solide soumis à deux forces en équilibre : les deux forces ont la MÊME droite d’action, des sens opposés et la MÊME intensité !',
      questionType: 'numeric',
      correctAnswer: String(f),
      unit: 'N',
      explanationFinal: `À l’équilibre, T = P = ${f} N.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer la condition d’équilibre à 2 forces',
          explanation: 'Les deux forces ont même droite d’action, sens opposés et même valeur.',
          mathExpression: `Équilibre : T⃗ + P⃗ = 0⃗ | T = P = ${f} N`,
          subResult: `${f} N`,
        },
      ],
    });
  }

  // 14. POIDS ET MASSE
  if (chapterId === 'phys-poids-masse') {
    if (difficulty === 1) {
      const m = randInt(5, 30);
      const g = 10;
      const p = m * g;
      return makeResult(chapterId, difficulty, {
        title: 'Calcul direct du Poids (P = m × g)',
        prompt: `Un sac de riz a une masse m = ${m} kg. On prend g = 10 N/kg.\nCalculer la valeur de son poids P (en N).`,
        hint: `Multiplie la masse par g : P = ${m} × 10.`,
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'N',
        explanationFinal: `P = ${m} × 10 = ${p} N.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer P = m × g',
            explanation: `${m} × 10 = ${p} N.`,
            mathExpression: `P = ${m} × 10 | P = ${p} N`,
            subResult: `${p} N`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const mGrams = randInt(2, 9) * 500; // 1000..4500 g
      const mKg = mGrams / 1000;
      const g = 9.8;
      const p = Number((mKg * g).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Convertir g ➔ kg puis calculer le Poids au Gabon (g = 9,8 N/kg)',
        prompt: `Un livre de sciences a une masse m = ${mGrams} g. À Libreville, g = 9,8 N/kg.\nConvertir m en kg puis calculer son poids P (en N).`,
        hint: `1 kg = 1 000 g donc ${mGrams} g = ${mKg} kg, puis P = ${mKg} × 9,8.`,
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'N',
        explanationFinal: `P = ${mKg} × 9,8 = ${p} N.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir la masse en kilogrammes',
            explanation: `${mGrams} g = ${mGrams} ÷ 1 000 = ${mKg} kg.`,
            mathExpression: `m = ${mGrams} ÷ 1 000 | m = ${mKg} kg`,
          },
          {
            stepNumber: 2,
            title: 'Calculer P = m × g',
            explanation: `P = ${mKg} × 9,8 = ${p} N.`,
            mathExpression: `P = ${mKg} × 9,8 | P = ${p} N`,
            subResult: `${p} N`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const m = randInt(15, 80);
      const p = Number((m * 9.8).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Retrouver la masse m à partir du poids (m = P ÷ g)',
        prompt: `Le poids d’une caisse pesée au dynamomètre à Port-Gentil vaut P = ${p} N (avec g = 9,8 N/kg).\nCalculer la masse m de la caisse (en kg).`,
        hint: `Isole m : m = P ÷ g = ${p} ÷ 9,8.`,
        questionType: 'numeric',
        correctAnswer: String(m),
        unit: 'kg',
        explanationFinal: `m = ${p} ÷ 9,8 = ${m} kg.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Transformer P = m × g',
            explanation: 'm = P ÷ g.',
            mathExpression: `m = ${p} ÷ 9,8 | m = ${m} kg`,
            subResult: `${m} kg`,
          },
        ],
      });
    }
    const m = randInt(40, 70);
    const pGabon = Number((m * 9.8).toFixed(1));
    const pLune = Number((m * 1.6).toFixed(1));
    return makeResult(chapterId, difficulty, {
      title: 'Voyage Gabon ➔ Lune : Masse invariante et Poids différent',
      prompt: `Un spationaute a une masse m = ${m} kg sur Terre (g_Gabon = 9,8 N/kg, donc P_Gabon = ${pGabon} N).\nIl se pose sur la Lune où g_Lune = 1,6 N/kg. Quel est son nouveau poids P_Lune (en N) ?`,
      hint: `La masse m reste toujours ${m} kg sur la Lune ! Calcule P_Lune = ${m} × 1,6.`,
      questionType: 'numeric',
      correctAnswer: String(pLune),
      unit: 'N',
      explanationFinal: `Sa masse reste ${m} kg, mais son poids sur la Lune tombe à ${pLune} N.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Vérifier l’invariance de la masse',
          explanation: `La quantité de matière ne change pas : m = ${m} kg sur Terre comme sur la Lune.`,
          mathExpression: `m_Lune = m_Terre = ${m} kg`,
        },
        {
          stepNumber: 2,
          title: 'Calculer le poids sur la Lune',
          explanation: `P_Lune = ${m} × 1,6 = ${pLune} N.`,
          mathExpression: `P_Lune = ${m} × 1,6 | P_Lune = ${pLune} N`,
          subResult: `${pLune} N`,
        },
      ],
    });
  }

  // 15. PRESSION & ARCHIMÈDE
  if (chapterId === 'phys-pression-archimede') {
    if (difficulty === 1) {
      const s = pickRandom([0.1, 0.2, 0.5, 2]);
      const p = randInt(2, 9) * 100;
      const f = Math.round(p * s);
      return makeResult(chapterId, difficulty, {
        title: 'Calcul direct de la pression (p = F ÷ S)',
        prompt: `Une force pressante F = ${f} N s’exerce perpendiculairement sur une surface S = ${s} m².\nCalculer la pression p (en Pascals Pa).`,
        hint: `Applique p = F ÷ S = ${f} ÷ ${s}.`,
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'Pa',
        explanationFinal: `p = ${f} ÷ ${s} = ${p} Pa.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer p = F ÷ S',
            explanation: `${f} ÷ ${s} = ${p} Pa.`,
            mathExpression: `p = ${f} ÷ ${s} | p = ${p} Pa`,
            subResult: `${p} Pa`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const pAir = randInt(12, 30);
      const pEau = randInt(6, pAir - 2);
      const fa = pAir - pEau;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer la poussée d’Archimède (F_A = P_air − P_apparent)',
        prompt: `Suspendue dans l’air à un dynamomètre, une pierre indique un poids P = ${pAir} N. Immergée totalement dans l’eau, le dynamomètre n’indique plus que P’ = ${pEau} N.\nCalculer la valeur de la poussée d’Archimède F_A (en N).`,
        hint: `Soustrais : F_A = P - P' = ${pAir} - ${pEau}.`,
        questionType: 'numeric',
        correctAnswer: String(fa),
        unit: 'N',
        explanationFinal: `F_A = ${pAir} - ${pEau} = ${fa} N.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer F_A = P − P’',
            explanation: `F_A = ${pAir} − ${pEau} = ${fa} N.`,
            mathExpression: `F_A = ${pAir} − ${pEau} | F_A = ${fa} N`,
            subResult: `${fa} N`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const f = randInt(2, 8) * 100; // N
      const sCm2 = pickRandom([100, 200, 400, 500]); // 0.01 .. 0.05 m2
      const sM2 = sCm2 / 10000;
      const p = Math.round(f / sM2);
      return makeResult(chapterId, difficulty, {
        title: 'Conversion cm² ➔ m² puis calcul de Pression',
        prompt: `Un carton pesant F = ${f} N repose sur une surface S = ${sCm2} cm² (rappel : 1 m² = 10 000 cm²).\nConvertir S en m² puis calculer la pression p (en Pa).`,
        hint: `Divise ${sCm2} par 10 000 (= ${sM2} m²), puis calcule p = ${f} ÷ ${sM2}.`,
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'Pa',
        explanationFinal: `S = ${sM2} m² donc p = ${f} ÷ ${sM2} = ${p.toLocaleString('fr-FR')} Pa.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir S de cm² en m²',
            explanation: `${sCm2} cm² = ${sCm2} ÷ 10 000 = ${sM2} m².`,
            mathExpression: `S = ${sCm2} ÷ 10 000 | S = ${sM2} m²`,
          },
          {
            stepNumber: 2,
            title: 'Calculer p = F ÷ S',
            explanation: `p = ${f} ÷ ${sM2} = ${p} Pa.`,
            mathExpression: `p = ${f} ÷ ${sM2} | p = ${p} Pa`,
            subResult: `${p} Pa`,
          },
        ],
      });
    }
    const pPirogue = randInt(2000, 5000);
    return makeResult(chapterId, difficulty, {
      title: 'Pirogue en équilibre sur le fleuve Ogooué',
      prompt: `Une pirogue chargée sur le fleuve Ogooué possède un poids total P = ${pPirogue} N. Elle flotte calmement en équilibre à la surface de l’eau.\nQuelle est la valeur de la poussée d’Archimède F_A exercée par l’eau sur la pirogue (en N) ?`,
      hint: 'Un objet qui flotte en équilibre reçoit une poussée d’Archimède exactement égale à son poids !',
      questionType: 'numeric',
      correctAnswer: String(pPirogue),
      unit: 'N',
      explanationFinal: `À l’équilibre en flottaison, F_A = P = ${pPirogue} N.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Écrire la condition d’équilibre en flottaison',
          explanation: 'La poussée d’Archimède vers le haut compense exactement le poids vers le bas.',
          mathExpression: `Équilibre : F_A = P | F_A = ${pPirogue} N`,
          subResult: `${pPirogue} N`,
        },
      ],
    });
  }

  // 16. AIR & GAZ
  if (chapterId === 'phys-air-gaz') {
    if (difficulty === 1) {
      const vAir = randInt(2, 10) * 5; // 10..50 L
      const vO2 = vAir / 5;
      return makeResult(chapterId, difficulty, {
        title: 'Règle du 1/5 : Volume de dioxygène O₂ dans l’air',
        prompt: `On dispose d’une bouteille contenant V = ${vAir} L d’air. En prenant la règle simplifiée du 1/5 (≈ 20 %),\ncalculer le volume de dioxygène O₂ contenu (en L).`,
        hint: `Divise le volume d’air par 5 : V(O₂) = ${vAir} ÷ 5.`,
        questionType: 'numeric',
        correctAnswer: String(vO2),
        unit: 'L',
        explanationFinal: `V(O₂) = ${vAir} ÷ 5 = ${vO2} L.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la règle du 1/5',
            explanation: `L’air contient environ 1/5 de dioxygène O₂.`,
            mathExpression: `V(O₂) = ${vAir} ÷ 5 | V(O₂) = ${vO2} L`,
            subResult: `${vO2} L`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const vAir = randInt(2, 8) * 100; // 200..800 L
      const vO2 = Math.round(vAir * 0.21);
      return makeResult(chapterId, difficulty, {
        title: 'Calcul précis à 21 % de dioxygène O₂',
        prompt: `Une salle de cours contient V = ${vAir} L d’air (en prenant exactement 21 % de dioxygène et 78 % de diazote).\nCalculer le volume exact de dioxygène O₂ (en L).`,
        hint: `Calcule 21 % de ${vAir} : (${vAir} × 21) ÷ 100.`,
        questionType: 'numeric',
        correctAnswer: String(vO2),
        unit: 'L',
        explanationFinal: `V(O₂) = ${vAir} × 0,21 = ${vO2} L.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer 21 % du volume d’air',
            explanation: `${vAir} × 21 ÷ 100 = ${vO2} L.`,
            mathExpression: `V(O₂) = (${vAir} × 21) ÷ 100 | V(O₂) = ${vO2} L`,
            subResult: `${vO2} L`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const vAir = randInt(2, 10) * 10;
      const masseG = Number((vAir * 1.3).toFixed(1));
      return makeResult(chapterId, difficulty, {
        title: 'Masse d’un volume d’air (1 L d’air ≈ 1,3 g)',
        prompt: `Dans les conditions normales, 1 litre d’air a une masse de 1,3 g.\nCalculer la masse de ${vAir} L d’air contenus dans un grand ballon (en g).`,
        hint: `Multiplie ${vAir} par 1,3 g.`,
        questionType: 'numeric',
        correctAnswer: String(masseG),
        unit: 'g',
        explanationFinal: `m = ${vAir} × 1,3 = ${masseG} g.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Multiplier par 1,3 g/L',
            explanation: `${vAir} × 1,3 = ${masseG} g.`,
            mathExpression: `m = ${vAir} × 1,3 | m = ${masseG} g`,
            subResult: `${masseG} g`,
          },
        ],
      });
    }
    const len = 8;
    const wid = 6;
    const hei = 3;
    const volM3 = len * wid * hei; // 144 m3
    const volL = volM3 * 1000;
    const massKg = Number(((volL * 1.3) / 1000).toFixed(1)); // = volM3 * 1.3 kg
    return makeResult(chapterId, difficulty, {
      title: 'Masse de l’air dans une salle de 4ème au Gabon (en kg)',
      prompt: `Une salle de classe de 4ème mesure ${len} m de long, ${wid} m de large et ${hei} m de haut (V = ${volM3} m³).\nSachant que 1 m³ d’air (= 1 000 L) pèse 1,3 kg, calculer la masse totale de l’air dans cette classe (en kg).`,
      hint: `Calcule V = ${len} × ${wid} × ${hei} = ${volM3} m³, puis multiplie par 1,3 kg/m³ !`,
      questionType: 'numeric',
      correctAnswer: String(massKg),
      unit: 'kg',
      explanationFinal: `La salle de ${volM3} m³ contient ${massKg} kg d’air !`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer le volume de la salle en m³',
          explanation: `V = ${len} × ${wid} × ${hei} = ${volM3} m³.`,
          mathExpression: `V = ${len} × ${wid} × ${hei} | V = ${volM3} m³`,
        },
        {
          stepNumber: 2,
          title: 'Calculer la masse en kg',
          explanation: `1 m³ pèse 1,3 kg donc m = ${volM3} × 1,3 = ${massKg} kg.`,
          mathExpression: `m = ${volM3} × 1,3 | m = ${massKg} kg`,
          subResult: `${massKg} kg`,
        },
      ],
    });
  }

  // 17. ATOMES & MOLÉCULES
  if (chapterId === 'phys-atomes-molecules') {
    if (difficulty === 1) {
      const m = pickRandom([
        { f: 'H₂O (Eau)', n: 3 },
        { f: 'CO₂ (Dioxyde de carbone)', n: 3 },
        { f: 'CH₄ (Méthane)', n: 5 },
        { f: 'O₂ (Dioxygène)', n: 2 },
      ]);
      return makeResult(chapterId, difficulty, {
        title: 'Compter le nombre total d’atomes dans une molécule',
        prompt: `Combien d’atomes au TOTAL contient une seule molécule de ${m.f} ?`,
        hint: 'Additionne les petits indices (un symbole sans indice vaut 1).',
        questionType: 'numeric',
        correctAnswer: String(m.n),
        unit: 'atomes',
        explanationFinal: `La molécule ${m.f} contient ${m.n} atomes au total.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Lire les indices de la formule chimique',
            explanation: 'Chaque indice indique combien de fois l’atome précédent est présent.',
            mathExpression: `${m.f} ➔ Total = ${m.n} atomes`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const c = randInt(2, 4);
      const h = 2 * c + 2; // alcane C2H6, C3H8, C4H10
      return makeResult(chapterId, difficulty, {
        title: 'Décomposer la formule CₙH₂ₙ₊₂ d’un gaz domestique',
        prompt: `La bouteille de gaz domestique au Gabon contient du gaz de formule C${c}H${h}.\nCombien d’atomes d’hydrogène (H) y a-t-il dans cette molécule ?`,
        hint: `Regarde l’indice placé juste après la lettre H dans C${c}H${h}.`,
        questionType: 'numeric',
        correctAnswer: String(h),
        unit: 'atomes H',
        explanationFinal: `Il y a ${c} atomes de Carbone et ${h} atomes d’Hydrogène.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Lire la formule brute',
            explanation: `C${c} signifie ${c} atomes de Carbone ; H${h} signifie ${h} atomes d’Hydrogène.`,
            mathExpression: `C${c}H${h} ➔ ${c} C + ${h} H`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const k = randInt(2, 5);
      const totO = k * 2;
      return makeResult(chapterId, difficulty, {
        title: 'Coefficient devant une molécule : « 3 CO₂ » ou « k O₂ »',
        prompt: `On écrit devant une réaction chimique l’expression « ${k} CO₂ ».\nCombien d’atomes d’oxygène (O) cela représente-t-il au total ?`,
        hint: `Multiplie le coefficient ${k} par l’indice 2 de l’oxygène dans CO₂ !`,
        questionType: 'numeric',
        correctAnswer: String(totO),
        unit: 'atomes O',
        explanationFinal: `${k} × 2 = ${totO} atomes d’oxygène au total.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Multiplier coefficient × indice',
            explanation: `1 molécule CO₂ a 2 atomes O ; ${k} molécules ont ${k} × 2 atomes O.`,
            mathExpression: `Nb(O) = ${k} × 2 | Nb(O) = ${totO} atomes O`,
            subResult: `${totO}`,
          },
        ],
      });
    }
    const coef = randInt(2, 4);
    const tot = coef * 11; // 3 C + 8 H = 11 atomes par propane C3H8
    return makeResult(chapterId, difficulty, {
      title: 'Bilan total d’atomes dans « k C₃H₈ » (Gaz propane)',
      prompt: `On considère ${coef} molécules de gaz propane, notées « ${coef} C₃H₈ ».\nCombien d’atomes (C et H réunis) cela représente-t-il au total ?`,
      hint: `1 molécule C₃H₈ contient 3 + 8 = 11 atomes. Multiplie par ${coef} !`,
      questionType: 'numeric',
      correctAnswer: String(tot),
      unit: 'atomes',
      explanationFinal: `${coef} × (3 + 8) = ${coef} × 11 = ${tot} atomes au total.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Compter les atomes dans 1 molécule C₃H₈',
          explanation: '3 C + 8 H = 11 atomes.',
          mathExpression: `1 molécule C₃H₈ = 3 + 8 = 11 atomes`,
        },
        {
          stepNumber: 2,
          title: `Multiplier par ${coef} molécules`,
          explanation: `${coef} × 11 = ${tot} atomes.`,
          mathExpression: `Total = ${coef} × 11 | Total = ${tot} atomes`,
          subResult: `${tot} atomes`,
        },
      ],
    });
  }

  // 18. COMBUSTIONS
  if (chapterId === 'phys-combustions') {
    if (difficulty === 1) {
      return makeResult(chapterId, difficulty, {
        title: 'Les 3 éléments du Triangle du Feu',
        prompt: 'Quel gaz présent dans l’air est le COMBURANT indispensable à toute combustion ?',
        hint: 'Il représente 21 % de l’air.',
        questionType: 'qcm',
        options: ['Le dioxygène (O₂)', 'Le diazote (N₂)', 'Le dioxyde de carbone (CO₂)'],
        correctAnswer: 'Le dioxygène (O₂)',
        explanationFinal: 'Le dioxygène (O₂) est le comburant ; sans O₂, le feu s’éteint.',
        steps: [
          {
            stepNumber: 1,
            title: 'Rappeler le triangle du feu',
            explanation: 'Combustible + Comburant (O₂) + Énergie d’activation (chaleur).',
            mathExpression: `Comburant = Dioxygène (O₂)`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const complete = randFloat() > 0.5;
      return makeResult(chapterId, difficulty, {
        title: 'Couleur de flamme : Combustion complète vs incomplète',
        prompt: complete
          ? 'Un réchaud à gaz bien réglé donne une flamme BLEUE. Quels sont les deux produits formés ?'
          : 'Un réchaud mal réglé manque d’air et donne une flamme JAUNE qui noircit les casseroles. Quel gaz mortel se forme ?',
        hint: complete ? 'Combustion complète : gaz carbonique + vapeur d’eau.' : 'Ce gaz inodore est très toxique dans une pièce fermée.',
        questionType: 'qcm',
        options: complete
          ? ['Dioxyde de carbone (CO₂) et Eau (H₂O)', 'Carbone (C) et Monoxyde (CO)']
          : ['Le monoxyde de carbone (CO)', 'Le dioxygène (O₂)'],
        correctAnswer: complete
          ? 'Dioxyde de carbone (CO₂) et Eau (H₂O)'
          : 'Le monoxyde de carbone (CO)',
        explanationFinal: complete
          ? 'Flamme bleue = combustion complète ➔ CO₂ + H₂O.'
          : 'Flamme jaune = combustion incomplète ➔ Carbone (suie noire) + CO mortel !',
        steps: [
          {
            stepNumber: 1,
            title: 'Identifier le type de combustion',
            explanation: complete ? 'Il y a assez de dioxygène O₂.' : 'Il manque de dioxygène O₂.',
            mathExpression: complete
              ? `Flamme bleue ➔ CO₂ + H₂O`
              : `Flamme jaune ➔ C (suie) + CO (toxique)`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      return makeResult(chapterId, difficulty, {
        title: 'Test de reconnaissance des produits de combustion',
        prompt: 'Pour prouver qu’une bougie dégage du dioxyde de carbone CO₂ en brûlant, quel réactif utilise-t-on et que devient-il ?',
        hint: 'C’est un liquide limpide au départ qui blanchit en présence de CO₂.',
        questionType: 'qcm',
        options: ['L’eau de chaux qui se trouble', 'Le sulfate de cuivre qui bleuit'],
        correctAnswer: 'L’eau de chaux qui se trouble',
        explanationFinal: 'L’eau de chaux se trouble (devient laiteuse) uniquement en présence de CO₂ ; le sulfate de cuivre anhydre détecte l’eau H₂O.',
        steps: [
          {
            stepNumber: 1,
            title: 'Associer chaque test chimique à son produit',
            explanation: 'Eau de chaux ➔ CO₂ | Sulfate de cuivre anhydre ➔ H₂O.',
            mathExpression: `CO₂ + Eau de chaux limpide ➔ Trouble blanc`,
          },
        ],
      });
    }
    const vO2Req = randInt(2, 5) * 2; // litres O2
    const vAirReq = vO2Req * 5;
    return makeResult(chapterId, difficulty, {
      title: 'Volume d’air nécessaire pour éviter l’asphyxie dans une cuisine',
      prompt: `Pour brûler complètement le gaz d’un réchaud, la réaction doit consommer ${vO2Req} L de dioxygène pur O₂.\nEn utilisant la règle du 1/5 (l’air contient 1/5 d’O₂), quel volume d’AIR minimal doit entrer dans la cuisine (en L) ?`,
      hint: `Puisque V(O₂) = V(air) ÷ 5, on a V(air) = 5 × V(O₂) !`,
      questionType: 'numeric',
      correctAnswer: String(vAirReq),
      unit: 'L',
      explanationFinal: `Il faut au moins 5 × ${vO2Req} = ${vAirReq} L d’air neuf (d’où l’importance d’aérer !).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Utiliser la proportion 1/5 de O₂ dans l’air',
          explanation: `V(air) = 5 × V(O₂) = 5 × ${vO2Req}.`,
          mathExpression: `V(air) = 5 × ${vO2Req} | V(air) = ${vAirReq} L`,
          subResult: `${vAirReq} L d’air`,
        },
      ],
    });
  }

  // 19. ÉQUATIONS-BILAN & LAVOISIER
  if (chapterId === 'phys-equations-bilan') {
    if (difficulty === 1) {
      const m1 = randInt(10, 30);
      const m2 = randInt(15, 45);
      const mTot = m1 + m2;
      return makeResult(chapterId, difficulty, {
        title: 'Loi de Lavoisier : Conservation de la masse',
        prompt: `Lors d’une transformation chimique, ${m1} g de carbone réagissent totalement avec ${m2} g de dioxygène.\nQuelle masse totale de dioxyde de carbone se forme (en g) ?`,
        hint: 'Rien ne se perd, rien ne se crée : Masse des produits = Masse totale des réactifs !',
        questionType: 'numeric',
        correctAnswer: String(mTot),
        unit: 'g',
        explanationFinal: `M_CO₂ = ${m1} + ${m2} = ${mTot} g.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la loi de Lavoisier',
            explanation: `M_produits = M_réactifs = ${m1} + ${m2} = ${mTot} g.`,
            mathExpression: `m_CO₂ = ${m1} + ${m2} | m_CO₂ = ${mTot} g`,
            subResult: `${mTot} g`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const mC = randInt(3, 12);
      const mCO2 = mC * 3 + mC; // ex 12g C + 32g O2 = 44g CO2 -> let's use exact mC and mO2 = mTot - mC
      const mO2 = randInt(8, 32);
      const mProd = mC + mO2;
      return makeResult(chapterId, difficulty, {
        title: 'Loi de Lavoisier inversée : Trouver la masse de O₂ consommée',
        prompt: `La combustion complète de ${mC} g de fusain (carbone) produit ${mProd} g de dioxyde de carbone CO₂.\nQuelle masse de dioxygène O₂ a été consommée (en g) ?`,
        hint: `Soustrais : m(O₂) = m(CO₂) - m(C) = ${mProd} - ${mC}.`,
        questionType: 'numeric',
        correctAnswer: String(mO2),
        unit: 'g',
        explanationFinal: `m(O₂) = ${mProd} - ${mC} = ${mO2} g.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire la conservation de la masse',
            explanation: `m(C) + m(O₂) = m(CO₂).`,
            mathExpression: `m(O₂) = ${mProd} − ${mC} | m(O₂) = ${mO2} g`,
            subResult: `${mO2} g`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const k = pickRandom([1, 2]);
      const ans = k === 1 ? '2' : '4';
      return makeResult(chapterId, difficulty, {
        title: 'Équilibrer l’équation de combustion du méthane',
        prompt:
          k === 1
            ? 'Dans l’équation : CH₄ + ? O₂ ➔ CO₂ + 2 H₂O,\nquel coefficient faut-il mettre devant O₂ pour équilibrer les atomes d’oxygène ?'
            : 'Dans l’équation : 2 C₂H₆ + 7 O₂ ➔ ? CO₂ + 6 H₂O,\nquel coefficient faut-il mettre devant CO₂ pour équilibrer les atomes de carbone ?',
        hint: k === 1 ? 'À droite il y a 2 O (dans CO₂) + 2 O (dans 2 H₂O) = 4 O !' : 'À gauche il y a 2 × 2 = 4 atomes de carbone C !',
        questionType: 'numeric',
        correctAnswer: ans,
        explanationFinal: k === 1 ? 'Il faut 2 O₂ (car 2 × 2 = 4 atomes O).' : 'Il faut 4 CO₂ (pour avoir 4 atomes C).',
        steps: [
          {
            stepNumber: 1,
            title: 'Compter les atomes dans les deux membres',
            explanation: k === 1 ? 'Produits : 2 + 2 = 4 O. Donc 4 ÷ 2 = 2 O₂.' : 'Réactifs : 2 × 2 = 4 C. Donc 4 CO₂.',
            mathExpression: k === 1
              ? `CH₄ + 2 O₂ ➔ CO₂ + 2 H₂O`
              : `2 C₂H₆ + 7 O₂ ➔ 4 CO₂ + 6 H₂O`,
          },
        ],
      });
    }
    const mCH4 = 16;
    const mO2 = 64;
    const mCO2 = 44;
    const mH2O = mCH4 + mO2 - mCO2; // 36 g
    return makeResult(chapterId, difficulty, {
      title: 'Bilan de masse complet sur CH₄ + 2 O₂ ➔ CO₂ + 2 H₂O',
      prompt: `On fait brûler ${mCH4} g de méthane avec ${mO2} g de dioxygène ; il se forme ${mCO2} g de CO₂ et de l’eau H₂O.\nPar la loi de Lavoisier, quelle masse d’eau se forme-t-elle (en g) ?`,
      hint: `1) Masse réactifs = ${mCH4} + ${mO2} = ${mCH4 + mO2} g. 2) Soustrais ${mCO2} g !`,
      questionType: 'numeric',
      correctAnswer: String(mH2O),
      unit: 'g',
      explanationFinal: `m(H₂O) = (${mCH4} + ${mO2}) - ${mCO2} = ${mH2O} g.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer la masse totale des réactifs',
          explanation: `${mCH4} + ${mO2} = ${mCH4 + mO2} g.`,
          mathExpression: `M_réactifs = ${mCH4} + ${mO2} | = ${mCH4 + mO2} g`,
        },
        {
          stepNumber: 2,
          title: 'Trouver la masse d’eau produite',
          explanation: `m(H₂O) = ${mCH4 + mO2} − ${mCO2} = ${mH2O} g.`,
          mathExpression: `m(H₂O) = ${mCH4 + mO2} − ${mCO2} | m(H₂O) = ${mH2O} g`,
          subResult: `${mH2O} g`,
        },
      ],
    });
  }

  // 20. SOLUTIONS, CONCENTRATION & pH
  if (difficulty === 1) {
    const cm = randInt(2, 9) * 5; // 10..45 g/L
    const v = pickRandom([1, 2, 3]);
    const m = cm * v;
    return makeResult(chapterId, difficulty, {
      title: 'Calcul direct de Concentration Massique (Cm = m ÷ V)',
      prompt: `On dissout m = ${m} g de sucre dans de l’eau pour obtenir V = ${v} L de sirop.\nCalculer la concentration massique Cm (en g/L).`,
      hint: `Applique Cm = m ÷ V = ${m} ÷ ${v}.`,
      questionType: 'numeric',
      correctAnswer: String(cm),
      unit: 'g/L',
      explanationFinal: `Cm = ${m} ÷ ${v} = ${cm} g/L.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer Cm = m ÷ V',
          explanation: `${m} ÷ ${v} = ${cm} g/L.`,
          mathExpression: `Cm = m ÷ V | Cm = ${m} ÷ ${v} | Cm = ${cm} g/L`,
          subResult: `${cm} g/L`,
        },
      ],
    });
  }
  if (difficulty === 2) {
    const ph = randInt(1, 13);
    const nature = ph < 7 ? 'Acide' : ph === 7 ? 'Neutre' : 'Basique';
    return makeResult(chapterId, difficulty, {
      title: 'Lire et interpréter une valeur de pH',
      prompt: `On mesure au papier pH une boisson ou un produit ménager et on lit pH = ${ph}.\nCette solution est-elle Acide, Neutre ou Basique ?`,
      hint: 'pH < 7 : Acide | pH = 7 : Neutre | pH > 7 : Basique.',
      questionType: 'qcm',
      options: ['Acide', 'Neutre', 'Basique'],
      correctAnswer: nature,
      explanationFinal: `Puisque pH = ${ph}, la solution est ${nature}.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Comparer le pH à 7',
          explanation: ph < 7 ? `${ph} < 7.` : ph === 7 ? `${ph} = 7.` : `${ph} > 7.`,
          mathExpression: `pH = ${ph} ➔ Solution ${nature}`,
        },
      ],
    });
  }
  if (difficulty === 3) {
    const cm = randInt(3, 8) * 10;
    const vMl = pickRandom([250, 500]); // 0.25 L or 0.5 L
    const vL = vMl / 1000;
    const m = cm * vL;
    return makeResult(chapterId, difficulty, {
      title: 'Conversion mL ➔ L et Calcul de masse dissoute (m = Cm × V)',
      prompt: `Une solution saline a une concentration Cm = ${cm} g/L. On en prélève un volume V = ${vMl} mL.\nConvertir V en litres puis calculer la masse m de sel contenue (en g).`,
      hint: `${vMl} mL = ${vL} L, puis m = Cm × V = ${cm} × ${vL}.`,
      questionType: 'numeric',
      correctAnswer: String(m),
      unit: 'g',
      explanationFinal: `V = ${vL} L donc m = ${cm} × ${vL} = ${m} g.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Convertir mL en Litres',
          explanation: `1 L = 1 000 mL donc ${vMl} mL = ${vL} L.`,
          mathExpression: `V = ${vMl} ÷ 1 000 | V = ${vL} L`,
        },
        {
          stepNumber: 2,
          title: 'Calculer m = Cm × V',
          explanation: `m = ${cm} × ${vL} = ${m} g.`,
          mathExpression: `m = ${cm} × ${vL} | m = ${m} g`,
          subResult: `${m} g`,
        },
      ],
    });
  }
  const cInit = randInt(2, 5) * 20; // 40..100 g/L
  const factor = pickRandom([2, 4, 5]);
  const cFinal = cInit / factor;
  return makeResult(chapterId, difficulty, {
    title: 'Dilution d’un sirop ou d’un détartrant au laboratoire (Facteur F)',
    prompt: `On dispose de 100 mL d’une solution concentrée à Cm₁ = ${cInit} g/L. On lui ajoute de l’eau distillée jusqu’à obtenir un volume final ${factor} fois plus grand (${100 * factor} mL).\nCalculer la nouvelle concentration Cm₂ (en g/L).`,
    hint: `Lors d’une dilution d’un facteur ${factor}, la masse dissoute ne change pas donc la concentration est divisée par ${factor} !`,
    questionType: 'numeric',
    correctAnswer: String(cFinal),
    unit: 'g/L',
    explanationFinal: `Cm₂ = ${cInit} ÷ ${factor} = ${cFinal} g/L.`,
    steps: [
      {
        stepNumber: 1,
        title: 'Appliquer la conservation de la masse lors d’une dilution',
        explanation: `Le volume est multiplié par ${factor}, donc la concentration est divisée par ${factor}.`,
        mathExpression: `Cm₂ = Cm₁ ÷ ${factor} | Cm₂ = ${cInit} ÷ ${factor}`,
      },
      {
        stepNumber: 2,
        title: 'Calculer Cm₂ debout',
        explanation: `${cInit} ÷ ${factor} = ${cFinal} g/L.`,
        mathExpression: `Cm₂ = ${cFinal} g/L`,
        subResult: `${cFinal} g/L`,
      },
    ],
  });
}
