import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  RefreshCw,
  CheckCircle2,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StepByStepCorrection } from './StepByStepCorrection';
import { CorrectionStep } from '../types/math';
import {
  KokoSuccessCelebration,
  KokoEncouragingFeedback,
} from './illustrations/FunFeedbackIllustrations';

type ExerciseTheme =
  | 'puissances-relatifs'
  | 'calcul-litteral'
  | 'equations'
  | 'pythagore'
  | 'vitesse-volumes';

interface GeneratedExercise {
  theme: ExerciseTheme;
  title: string;
  prompt: string;
  hint: string;
  correctAnswer: string;
  unit?: string;
  steps: CorrectionStep[];
  explanationFinal: string;
}

export const InfiniteExerciseGenerator: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<ExerciseTheme>('puissances-relatifs');
  const [exercise, setExercise] = useState<GeneratedExercise | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showCorrection, setShowCorrection] = useState<boolean>(false);

  const generateNewExercise = (theme: ExerciseTheme): GeneratedExercise => {
    setIsAnswered(false);
    setUserAnswer('');
    setShowHint(false);
    setShowCorrection(false);

    if (theme === 'puissances-relatifs') {
      const a = -(Math.floor(Math.random() * 6) + 2); // -2..-7
      const b = -(Math.floor(Math.random() * 5) + 2); // -2..-6
      const c = Math.floor(Math.random() * 4) + 2; // 2..5
      const prodAB = a * b; // positive
      const res = prodAB * c;

      return {
        theme: 'puissances-relatifs',
        title: 'Produit de nombres relatifs (Règle des signes)',
        prompt: `Calculer le produit suivant en détaillant debout :\nP = (${a}) × (${b}) × (+${c})`,
        hint: `Il y a 2 facteurs négatifs (nombre pair !), donc le résultat final sera POSITIF (+). Calcule d'abord (${a}) × (${b}) = +${prodAB}.`,
        correctAnswer: res.toString(),
        explanationFinal: `Le résultat est P = ${res}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Multiplier les deux premiers relatifs',
            explanation: `(-) × (-) donne (+), donc (${a}) × (${b}) = +${prodAB}.`,
            mathExpression: `P = (+${prodAB}) × (+${c})`,
            ruleApplied: 'Deux nombres de même signe ont un produit positif.',
            subResult: `(${a}) × (${b}) = +${prodAB}`,
          },
          {
            stepNumber: 2,
            title: 'Finaliser la multiplication',
            explanation: `${prodAB} × ${c} = ${res}.`,
            mathExpression: `P = ${res}`,
            subResult: `${prodAB} × ${c} = ${res}`,
          },
        ],
      };
    } else if (theme === 'calcul-litteral') {
      // Develop k(ax + b) and evaluate or ask for developed expression
      const k = Math.floor(Math.random() * 5) + 2; // 2..6
      const a = Math.floor(Math.random() * 4) + 2; // 2..5
      const b = Math.floor(Math.random() * 7) + 1; // 1..7
      const ka = k * a;
      const kb = k * b;

      return {
        theme: 'calcul-litteral',
        title: 'Simple distributivité : Développer k(ax + b)',
        prompt: `Développer et réduire l'expression suivante (écrire sous la forme Ax+B sans espaces) :\nE = ${k}(${a}x + ${b})`,
        hint: `Distribue ${k} à chaque terme : ${k} × ${a}x + ${k} × ${b}.`,
        correctAnswer: `${ka}x+${kb}`,
        explanationFinal: `L'expression développée est E = ${ka}x + ${kb}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la distributivité',
            explanation: `On multiplie ${k} par ${a}x et ${k} par ${b}.`,
            mathExpression: `E = ${k} × ${a}x + ${k} × ${b}`,
            ruleApplied: 'k(a + b) = ka + kb',
          },
          {
            stepNumber: 2,
            title: 'Réduire chaque produit',
            explanation: `${k} × ${a}x = ${ka}x et ${k} × ${b} = ${kb}.`,
            mathExpression: `E = ${ka}x + ${kb}`,
            subResult: `E = ${ka}x + ${kb}`,
          },
        ],
      };
    } else if (theme === 'equations') {
      // ax + b = c in F CFA or integer
      const xSol = (Math.floor(Math.random() * 8) + 2) * 500; // 1000..4500 F CFA
      const a = Math.floor(Math.random() * 4) + 2; // 2..5
      const b = (Math.floor(Math.random() * 6) + 1) * 500; // 500..3000 F CFA
      const c = a * xSol + b;

      return {
        theme: 'equations',
        title: 'Résoudre une équation du 1er degré (en F CFA)',
        prompt: `Résoudre l'équation suivante (prix x en F CFA) :\n${a}x + ${b} = ${c}`,
        hint: `Commence par soustraire ${b} des deux côtés (${c} - ${b} = ${c - b}), puis divise par ${a} !`,
        correctAnswer: xSol.toString(),
        unit: 'F CFA',
        explanationFinal: `La solution est x = ${xSol} F CFA.`,
        steps: [
          {
            stepNumber: 1,
            title: `Soustraire ${b} des deux membres`,
            explanation: `Pour isoler ${a}x, on passe +${b} de l'autre côté en -${b}.`,
            mathExpression: `${a}x = ${c} - ${b} | ${a}x = ${c - b}`,
            ruleApplied: 'Si ax + b = c, alors ax = c - b',
            subResult: `${c} - ${b} = ${c - b}`,
          },
          {
            stepNumber: 2,
            title: `Diviser par ${a}`,
            explanation: `x = ${c - b} ÷ ${a} = ${xSol} F CFA.`,
            mathExpression: `x = ${c - b} ÷ ${a} | x = ${xSol} F CFA`,
            subResult: `x = ${xSol}`,
          },
        ],
      };
    } else if (theme === 'pythagore') {
      // Clean Pythagorean triples: (3,4,5)*k, (5,12,13)*k, (8,15,17)
      const triples = [
        [3, 4, 5],
        [6, 8, 10],
        [9, 12, 15],
        [5, 12, 13],
        [12, 16, 20],
        [8, 15, 17],
      ];
      const [ab, ac, bc] = triples[Math.floor(Math.random() * triples.length)];

      return {
        theme: 'pythagore',
        title: 'Théorème de Pythagore (Calculer l’hypoténuse)',
        prompt: `Dans un triangle ABC rectangle en A, on donne AB = ${ab} cm et AC = ${ac} cm. Calculer la longueur de l'hypoténuse BC (en cm).`,
        hint: `Pose BC² = ${ab}² + ${ac}² = ${ab * ab} + ${ac * ac} = ${bc * bc}, puis prends la racine carrée √${bc * bc} !`,
        correctAnswer: bc.toString(),
        unit: 'cm',
        explanationFinal: `L'hypoténuse mesure BC = ${bc} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire l’égalité de Pythagore',
            explanation: 'Le triangle ABC est rectangle en A, donc l’hypoténuse est [BC].',
            mathExpression: `BC² = AB² + AC² | BC² = ${ab}² + ${ac}²`,
            ruleApplied: 'Théorème de Pythagore : Hypoténuse² = Côté1² + Côté2²',
          },
          {
            stepNumber: 2,
            title: 'Calculer la somme des carrés',
            explanation: `${ab}² = ${ab * ab} et ${ac}² = ${ac * ac}.`,
            mathExpression: `BC² = ${ab * ab} + ${ac * ac} | BC² = ${bc * bc}`,
            subResult: `${ab * ab} + ${ac * ac} = ${bc * bc}`,
          },
          {
            stepNumber: 3,
            title: 'Prendre la racine carrée',
            explanation: `BC = √${bc * bc} = ${bc} cm.`,
            mathExpression: `BC = √${bc * bc} | BC = ${bc} cm`,
            subResult: `BC = ${bc} cm`,
          },
        ],
      };
    } else {
      // Vitesse & Pyramides (alternating or speed d = v * t)
      const isVolume = Math.random() > 0.5;
      if (isVolume) {
        const side = (Math.floor(Math.random() * 4) + 2) * 3; // 6, 9, 12, 15 (multiple of 3!)
        const h = Math.floor(Math.random() * 7) + 4; // 4..10
        const baseArea = side * side;
        const vol = (baseArea * h) / 3;

        return {
          theme: 'vitesse-volumes',
          title: 'Volume d’une pyramide à base carrée',
          prompt: `Une pyramide a une base carrée de côté c = ${side} cm et une hauteur h = ${h} cm. Calculer son volume (en cm³).`,
          hint: `1) Aire de la base B = ${side} × ${side} = ${baseArea} cm². 2) Pour un solide pointu, V = (B × h) ÷ 3 !`,
          correctAnswer: vol.toString(),
          unit: 'cm³',
          explanationFinal: `Le volume de la pyramide vaut ${vol} cm³.`,
          steps: [
            {
              stepNumber: 1,
              title: 'Calculer l’aire de la base carrée',
              explanation: `B = ${side} × ${side} = ${baseArea} cm².`,
              mathExpression: `B = ${side} × ${side} | B = ${baseArea} cm²`,
            },
            {
              stepNumber: 2,
              title: 'Appliquer V = (B × h) ÷ 3',
              explanation: `V = (${baseArea} × ${h}) ÷ 3 = ${baseArea * h} ÷ 3 = ${vol} cm³.`,
              mathExpression: `V = (${baseArea} × ${h}) ÷ 3 | V = ${vol} cm³`,
              ruleApplied: 'Volume d’une pyramide = (Aire de base × hauteur) ÷ 3',
            },
          ],
        };
      } else {
        const v = (Math.floor(Math.random() * 6) + 5) * 10; // 50..100 km/h
        const t = Math.floor(Math.random() * 4) + 2; // 2..5 h
        const d = v * t;

        return {
          theme: 'vitesse-volumes',
          title: 'Vitesse moyenne sur route au Gabon (v = d ÷ t)',
          prompt: `Un car de transport parcourt ${d} km en ${t} heures entre deux villes du Gabon. Calculer sa vitesse moyenne (en km/h).`,
          hint: `Utilise la formule : Vitesse = Distance ÷ Temps = ${d} ÷ ${t}.`,
          correctAnswer: v.toString(),
          unit: 'km/h',
          explanationFinal: `La vitesse moyenne est de ${v} km/h.`,
          steps: [
            {
              stepNumber: 1,
              title: 'Écrire la formule de la vitesse',
              explanation: 'v = d ÷ t.',
              mathExpression: `v = ${d} ÷ ${t}`,
              ruleApplied: 'Vitesse = Distance ÷ Temps',
            },
            {
              stepNumber: 2,
              title: 'Calculer le quotient',
              explanation: `${d} ÷ ${t} = ${v} km/h.`,
              mathExpression: `v = ${v} km/h`,
              subResult: `${v} km/h`,
            },
          ],
        };
      }
    }
  };

  useEffect(() => {
    setExercise(generateNewExercise(selectedTheme));
  }, [selectedTheme]);

  const handleCheckAnswer = () => {
    if (!exercise || !userAnswer.trim()) return;

    const cleanUser = userAnswer.trim().replace(/\s+/g, '').replace(',', '.').toLowerCase();
    const cleanCorrect = exercise.correctAnswer.replace(/\s+/g, '').replace(',', '.').toLowerCase();

    const isMatch = cleanUser === cleanCorrect;
    setIsCorrect(isMatch);
    setIsAnswered(true);

    if (isMatch) {
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.65 },
        });

        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      } catch {}
    }
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Header card with theme selector */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Générateur des exercices infini</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Entraîne-toi à volonté sur tout le programme de 4ème Gabon avec corrections debout étape par étape
            </p>
          </div>

          <button
            onClick={() => setExercise(generateNewExercise(selectedTheme))}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition cursor-pointer active:scale-95 shadow shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5 text-sky-400" />
            <span>Nouvel exercice</span>
          </button>
        </div>

        {/* Theme buttons */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {[
            { id: 'puissances-relatifs', label: 'Relatifs & Puissances' },
            { id: 'calcul-litteral', label: 'Calcul Littéral' },
            { id: 'equations', label: 'Équations (F CFA)' },
            { id: 'pythagore', label: 'Pythagore' },
            { id: 'vitesse-volumes', label: 'Volumes & Vitesses' },
          ].map((th) => (
            <button
              key={th.id}
              onClick={() => setSelectedTheme(th.id as ExerciseTheme)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                selectedTheme === th.id
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {th.label}
            </button>
          ))}
        </div>
      </div>

      {/* Exercise card */}
      {exercise && (
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded-md border border-sky-800/60">
              {exercise.title}
            </span>
            <span className="text-[11px] text-slate-400 font-semibold">Niveau 4ème Gabon</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 text-sm font-medium text-slate-100 whitespace-pre-line leading-relaxed shadow-inner">
            {exercise.prompt}
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/80 border border-amber-500/20 text-xs flex items-center justify-between gap-2">
            <span className="text-amber-300 font-bold flex items-center gap-1.5">
              <span>📐</span>
              <span>Rappel CIAM : Pose ce calcul debout ligne par ligne (= bien alignés) !</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              Debout en colonne
            </span>
          </div>

          <div>
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-medium cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Besoin d’un indice ?</span>
              </button>
            ) : (
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2 animate-fade-in">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-amber-300">Indice :</strong> {exercise.hint}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2 pt-1 border-t border-slate-800">
            <label className="text-xs text-slate-400 font-medium">Ta réponse :</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder={exercise.unit ? `Ex: 24 (en ${exercise.unit})` : 'Tape ta réponse ici...'}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheckAnswer()}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white font-mono focus:border-sky-500 focus:outline-none"
              />
              <button
                onClick={handleCheckAnswer}
                disabled={!userAnswer.trim()}
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow active:scale-95"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Vérifier</span>
              </button>
            </div>
          </div>

          {isAnswered && (
            <div className="pt-2 animate-fade-in">
              {isCorrect ? (
                <KokoSuccessCelebration
                  message="Akiba ! Tu as trouvé !"
                  subMessage="Formidable ! Tu maîtrises parfaitement cette notion de 4ème. Consulte la méthode ci-dessous pour perfectionner ta rédaction !"
                />
              ) : (
                <KokoEncouragingFeedback
                  title="Ce n’est pas grave, Koko t’explique !"
                  message="En mathématiques, chaque erreur est une occasion de devenir plus fort. Regarde la méthode détaillée pas à pas ci-dessous !"
                  onShowSolution={() => setShowCorrection(true)}
                />
              )}
            </div>
          )}

          {!isAnswered && !showCorrection && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowCorrection(true)}
                className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1.5 font-semibold cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Afficher directement la correction pas à pas</span>
              </button>
            </div>
          )}

          {showCorrection && (
            <div className="pt-3 border-t border-slate-800 animate-fade-in">
              <StepByStepCorrection
                steps={exercise.steps}
                finalResult={exercise.explanationFinal}
                initialShowAll={false}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
