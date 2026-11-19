import React, { useState, useEffect } from 'react';
import { X, Printer, ArrowDown, FileText, FlaskConical } from 'lucide-react';
import { MATH_TC_CHAPTERS } from '../data/mathTcCurriculum';
import { PHYSICS_TC_CHAPTERS } from '../data/physicsTcCurriculum';
import { SubjectId } from '../types/math';
import { StandingMathRenderer } from './StandingMathRenderer';
import { ChapterThreeExperiencesPanel } from './ChapterThreeExperiencesPanel';
import { FormattedMathText } from './FormattedMathText';

interface MemoSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: SubjectId;
}

export const MemoSheetModal: React.FC<MemoSheetModalProps> = ({
  isOpen,
  onClose,
  initialSubject = 'physique',
}) => {
  const [modalSubject, setModalSubject] = useState<SubjectId>(initialSubject);
  const [selectedChapId, setSelectedChapId] = useState<string>('all');
  const [expandedExpIds, setExpandedExpIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setModalSubject(initialSubject);
    setSelectedChapId('all');
    setExpandedExpIds({});
  }, [initialSubject, isOpen]);

  if (!isOpen) return null;

  const subjectChapters =
    modalSubject === 'physique' ? PHYSICS_TC_CHAPTERS : MATH_TC_CHAPTERS;
  const activeChapters =
    selectedChapId === 'all'
      ? subjectChapters
      : subjectChapters.filter((c) => c.id === selectedChapId);

  const physCount = PHYSICS_TC_CHAPTERS.length;
  const mathCount = MATH_TC_CHAPTERS.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-400 text-slate-950 font-black shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-white">
                Fiches Mémos, Formules &amp; 10 Expériences (Terminale C · BAC Gabon)
              </h3>
              <div className="text-[11px] text-slate-400">
                {modalSubject === 'physique'
                  ? `Physique-Chimie Terminale C · ${physCount} Chapitres`
                  : `Mathématiques Terminale C · ${mathCount} Chapitres`}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => {
                  setModalSubject('physique');
                  setSelectedChapId('all');
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition whitespace-nowrap ${
                  modalSubject === 'physique' ? 'bg-sky-500 text-slate-950' : 'text-slate-300'
                }`}
              >
                Physique ({physCount})
              </button>
              <button
                onClick={() => {
                  setModalSubject('maths');
                  setSelectedChapId('all');
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition whitespace-nowrap ${
                  modalSubject === 'maths' ? 'bg-amber-400 text-slate-950' : 'text-slate-300'
                }`}
              >
                Maths ({mathCount})
              </button>
            </div>

            <button
              onClick={() => {
                try {
                  if (typeof window !== 'undefined' && window.AndroidBridge?.printPage) {
                    window.AndroidBridge.printPage();
                  } else if (typeof window !== 'undefined' && typeof window.print === 'function') {
                    window.print();
                  }
                } catch {}
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition cursor-pointer flex items-center gap-1.5 shadow"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Imprimer</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chapter Selection Bar */}
        <div className="px-5 py-2.5 border-b border-slate-800/80 bg-slate-950/50 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setSelectedChapId('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer shrink-0 ${
              selectedChapId === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Tous ({subjectChapters.length})
          </button>
          {subjectChapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setSelectedChapId(ch.id)}
              title={ch.title}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer shrink-0 ${
                selectedChapId === ch.id
                  ? 'bg-sky-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Ch. {ch.order} · <FormattedMathText text={ch.title.split(':')[0].slice(0, 18)} />
            </button>
          ))}
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs">
          {activeChapters.map((ch) => {
            const memo = ch.memoSheet;
            const showThreeExps =
              selectedChapId !== 'all' || !!expandedExpIds[ch.id];

            return (
              <div
                key={ch.id}
                className="rounded-3xl bg-slate-950/90 border border-slate-800 p-5 space-y-4 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <div className="text-[11px] font-extrabold text-amber-300">
                      {ch.badge} ·{' '}
                      {modalSubject === 'physique'
                        ? 'Physique-Chimie Terminale C'
                        : 'Mathématiques Terminale C'}
                    </div>
                    <h4 className="text-base font-black text-white mt-0.5"><FormattedMathText text={ch.title} /></h4>
                  </div>

                  {selectedChapId === 'all' && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedExpIds((prev) => ({
                          ...prev,
                          [ch.id]: !prev[ch.id],
                        }))
                      }
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <FlaskConical className="w-3.5 h-3.5 text-amber-400" />
                      <span>
                        {showThreeExps
                          ? 'Masquer les 10 expériences'
                          : 'Ouvrir les 10 expériences SVG'}
                      </span>
                    </button>
                  )}
                </div>

                {showThreeExps && (
                  <ChapterThreeExperiencesPanel
                    chapterId={ch.id}
                    subject={modalSubject}
                    mode="memo"
                  />
                )}

                {memo?.verticalFormulas && memo.verticalFormulas.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-[11px] font-black text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                      <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
                      <span>Formules en Colonne Verticale (À retenir par cœur) :</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {memo.verticalFormulas.map((vf, vIdx) => (
                        <div
                          key={vIdx}
                          className="rounded-2xl bg-slate-900 border border-slate-800 p-3.5 space-y-2.5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1.5 truncate">
                              <span>{vf.badge || '📐'}</span>
                              <span className="truncate"><FormattedMathText text={vf.name} /></span>
                            </div>

                            <StandingMathRenderer
                              expression={vf.steps.join('\n')}
                              subResult={vf.resultHighlight}
                              title={`Debout : ${vf.name}`}
                              showColumnOp={false}
                            />
                          </div>

                          {vf.tip && (
                            <div className="text-[11px] text-amber-300/90 italic pt-1 border-t border-slate-800">
                              💡 <FormattedMathText text={vf.tip} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {memo && (
                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200">
                      <strong>🐆 L’astuce de Koko :</strong> <FormattedMathText text={memo.kokoTip} />
                    </div>
                    <div className="p-3 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-[11px] text-rose-200">
                      <strong>⚠️ Piège à éviter :</strong> <FormattedMathText text={memo.pitfallToAvoid} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            🇬🇦 Conforme au programme officiel Terminale Série C Gabon · BAC C
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition cursor-pointer shadow"
          >
            Fermer les fiches mémos
          </button>
        </div>
      </div>
    </div>
  );
};
