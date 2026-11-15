import React from 'react';
import { Chapter, DomainId, DomainMeta, SubjectId } from '../types/math';
import { ExerciseCheckRecord } from '../hooks/useLearningProgress';
import { Play, BookOpen, FileText, CheckCircle2 } from 'lucide-react';

interface ChapterListSelectorProps {
  subject: SubjectId;
  domains: DomainMeta[];
  chapters: Chapter[];
  selectedChapterId: string;
  onSelectChapter: (id: string, targetTab?: 'cours' | 'memo' | 'exercices') => void;
  selectedDomain: DomainId | 'all';
  onSelectDomain: (domain: DomainId | 'all') => void;
  checkedState: Record<string, ExerciseCheckRecord>;
}

const CHAPTER_ICONS: Record<string, { emoji: string; accent: string }> = {
  // Maths
  'nombres-relatifs-operations': { emoji: '⚡', accent: 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300' },
  'puissances-notation-scientifique': { emoji: '🚀', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'fractions-operations': { emoji: '🍕', accent: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300' },
  'calcul-litteral-developpement': { emoji: '🌱', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },
  'equations-premier-degre': { emoji: '⚖️', accent: 'bg-pink-500/15 border-pink-400/40 text-pink-300' },
  'racine-carree': { emoji: '√', accent: 'bg-violet-500/15 border-violet-400/40 text-violet-300' },
  'factorisation-identites-remarquables': { emoji: '📦', accent: 'bg-amber-600/15 border-amber-400/40 text-amber-300' },
  'inequations-premier-degre': { emoji: '↕️', accent: 'bg-rose-500/15 border-rose-400/40 text-rose-300' },
  'nombres-premiers-divisibilite': { emoji: '🔢', accent: 'bg-teal-500/15 border-teal-400/40 text-teal-300' },
  'proportionnalite-pourcentages': { emoji: '🛍️', accent: 'bg-pink-500/15 border-pink-400/40 text-pink-300' },
  'vitesse-duree-distance': { emoji: '🚄', accent: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' },
  'statistiques-moyenne-mediane': { emoji: '📊', accent: 'bg-emerald-600/15 border-emerald-400/40 text-emerald-300' },
  probabilites: { emoji: '🎲', accent: 'bg-violet-500/15 border-violet-400/40 text-violet-300' },
  'fonctions-representation-graphique': { emoji: '📈', accent: 'bg-blue-500/15 border-blue-400/40 text-blue-300' },
  'statistiques-quartiles-diagrammes': { emoji: '📦', accent: 'bg-teal-500/15 border-teal-400/40 text-teal-300' },
  'theoreme-pythagore': { emoji: '📐', accent: 'bg-violet-500/15 border-violet-400/40 text-violet-300' },
  'triangles-agrandissement-reduction': { emoji: '🌉', accent: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300' },
  translations: { emoji: '➡️', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'symetries-transformations': { emoji: '🪞', accent: 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300' },
  'theoreme-thales': { emoji: '🔺', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },
  'trigonometrie-triangle-rectangle': { emoji: '🧭', accent: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' },
  homothetie: { emoji: '📽️', accent: 'bg-purple-500/15 border-purple-400/40 text-purple-300' },
  rotation: { emoji: '🎡', accent: 'bg-rose-500/15 border-rose-400/40 text-rose-300' },
  'droites-remarquables-triangle': { emoji: '⌖', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'geometrie-espace-volumes': { emoji: '🔺', accent: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' },
  'reperage-plan-coordonnees': { emoji: '📍', accent: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300' },
  'cercle-proprietes-avancees': { emoji: '⭕', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },

  // Physique-Chimie 4ème (20 exact IDs)
  'phys-circuit-simple': { emoji: '💡', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },
  'phys-circuits-serie-derivation': { emoji: '🔀', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'phys-intensite': { emoji: '⚡', accent: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' },
  'phys-tension': { emoji: '🔋', accent: 'bg-purple-500/15 border-purple-400/40 text-purple-300' },
  'phys-loi-ohm': { emoji: '🎛️', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },
  'phys-puissance-seeg': { emoji: '🏠', accent: 'bg-rose-500/15 border-rose-400/40 text-rose-300' },
  'phys-propagation-lumiere': { emoji: '🔦', accent: 'bg-amber-400/15 border-amber-300/40 text-amber-300' },
  'phys-ombres-eclipses': { emoji: '🌒', accent: 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300' },
  'phys-reflexion-refraction': { emoji: '🪞', accent: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300' },
  'phys-lentilles': { emoji: '🔍', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'phys-dispersion-couleurs': { emoji: '🌈', accent: 'bg-purple-500/15 border-purple-400/40 text-purple-300' },
  'phys-masse-volumique': { emoji: '🪵', accent: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' },
  'phys-forces-dynamometre': { emoji: '🏹', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },
  'phys-poids-masse': { emoji: '🌍', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'phys-pression-archimede': { emoji: '🚢', accent: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300' },
  'phys-air-gaz': { emoji: '🌬️', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'phys-atomes-molecules': { emoji: '⚛️', accent: 'bg-purple-500/15 border-purple-400/40 text-purple-300' },
  'phys-combustions': { emoji: '🔥', accent: 'bg-rose-500/15 border-rose-400/40 text-rose-300' },
  'phys-equations-bilan': { emoji: '⚖️', accent: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' },
  'phys-solutions-ph': { emoji: '🧪', accent: 'bg-violet-500/15 border-violet-400/40 text-violet-300' },

  // Physique-Chimie 3ème BEPC (13 exact IDs)
  'phys3-actions-mecaniques': { emoji: '🏗️', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },
  'phys3-equilibre-solide': { emoji: '⚖️', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'phys3-travail-puissance': { emoji: '⚙️', accent: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' },
  'phys3-energie-mecanique': { emoji: '🎢', accent: 'bg-purple-500/15 border-purple-400/40 text-purple-300' },
  'phys3-conducteurs-ohmiques': { emoji: '🎛️', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },
  'phys3-energie-puissance-seeg': { emoji: '🔌', accent: 'bg-rose-500/15 border-rose-400/40 text-rose-300' },
  'phys3-transformateur-electronique': { emoji: '🔋', accent: 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300' },
  'phys3-lentilles-construction': { emoji: '🔬', accent: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300' },
  'phys3-oeil-instruments': { emoji: '👁️', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'phys3-metaux-oxydation': { emoji: '🪨', accent: 'bg-orange-500/15 border-orange-400/40 text-orange-300' },
  'phys3-ions-tests': { emoji: '🧫', accent: 'bg-teal-500/15 border-teal-400/40 text-teal-300' },
  'phys3-acides-bases-ph': { emoji: '🧪', accent: 'bg-violet-500/15 border-violet-400/40 text-violet-300' },
  'phys3-hydrocarbures-alcools': { emoji: '🛢️', accent: 'bg-rose-500/15 border-rose-400/40 text-rose-300' },

  // Mathématiques 3ème CIAM BEPC (14 exact IDs)
  'math3-racines-carrees': { emoji: '√', accent: 'bg-violet-500/15 border-violet-400/40 text-violet-300' },
  'math3-calcul-litteral-equations': { emoji: '🧩', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },
  'math3-inequations-intervalles': { emoji: '📏', accent: 'bg-rose-500/15 border-rose-400/40 text-rose-300' },
  'math3-systemes-equations': { emoji: '🔗', accent: 'bg-pink-500/15 border-pink-400/40 text-pink-300' },
  'math3-applications-affines': { emoji: '📈', accent: 'bg-blue-500/15 border-blue-400/40 text-blue-300' },
  'math3-statistiques-3eme': { emoji: '📊', accent: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' },
  'math3-probabilites-3eme': { emoji: '🎲', accent: 'bg-purple-500/15 border-purple-400/40 text-purple-300' },
  'math3-thales-3eme': { emoji: '🔺', accent: 'bg-amber-500/15 border-amber-400/40 text-amber-300' },
  'math3-trigonometrie-3eme': { emoji: '📐', accent: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300' },
  'math3-vecteurs-translations': { emoji: '🧭', accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300' },
  'math3-angles-polygones': { emoji: '⭕', accent: 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300' },
  'math3-reperage-droites': { emoji: '📍', accent: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300' },
  'math3-pyramides-cones': { emoji: '🏛️', accent: 'bg-emerald-600/15 border-emerald-400/40 text-emerald-300' },
  'math3-sections-agrandissement': { emoji: '🔍', accent: 'bg-teal-500/15 border-teal-400/40 text-teal-300' },
};

export const ChapterListSelector: React.FC<ChapterListSelectorProps> = ({
  subject,
  domains,
  chapters,
  selectedChapterId,
  onSelectChapter,
  selectedDomain,
  onSelectDomain,
  checkedState,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredChapters = chapters.filter((c) => {
    const matchesDomain = selectedDomain === 'all' || c.domainId === selectedDomain;
    const matchesQuery =
      !searchQuery.trim() ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesQuery;
  });

  return (
    <div className="space-y-3">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between">
        <input
          type="text"
          placeholder={
            subject === 'physique'
              ? `Rechercher parmi les ${chapters.length} chapitres (ex: Ohm, SEEG, lentilles, poids, atomes, pH...)`
              : `Rechercher parmi les ${chapters.length} chapitres (ex: Thalès, fractions, racine carrée, rotation...)`
          }
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none flex-1 max-w-xl"
        />
        <div className="text-[11px] text-slate-400 font-semibold hidden sm:block">
          Chapitres séparés : <span className="text-sky-300">Cours & Dessin</span> ·{' '}
          <span className="text-amber-300">Fiche Mémo</span> ·{' '}
          <span className="text-emerald-300">Exercices</span>
        </div>
      </div>

      {/* Domain Filter Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => onSelectDomain('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 ${
            selectedDomain === 'all'
              ? 'bg-white text-slate-950 font-bold shadow'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Tous ({chapters.length})
        </button>

        {domains.map((dom) => (
          <button
            key={dom.id}
            onClick={() => onSelectDomain(dom.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 ${
              selectedDomain === dom.id
                ? 'bg-sky-500 text-slate-950 font-bold shadow'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {dom.shortTitle}
          </button>
        ))}
      </div>

      {/* Liste des chapitres séparés */}
      <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
        {filteredChapters.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-400 rounded-2xl bg-slate-900 border border-slate-800">
            Aucun chapitre trouvé pour « {searchQuery} ». Efface la recherche pour afficher les {chapters.length} chapitres.
          </div>
        ) : (
          filteredChapters.map((chap) => {
            const isSelected = chap.id === selectedChapterId;
            const domain = domains.find((d) => d.id === chap.domainId);
            const iconMeta = CHAPTER_ICONS[chap.id] || {
              emoji: '📘',
              accent: 'bg-sky-500/15 border-sky-400/40 text-sky-300',
            };

            const prefixApp = `${chap.id}-app-`;
            const prefixCours = `${chap.id}-c-lvl`;
            const legacyIds = new Set(chap.exercises.map((e) => e.id));
            const solvedInChap = Math.min(
              90,
              Object.entries(checkedState).filter(
                ([id, rec]) =>
                  rec?.correct &&
                  (id.startsWith(prefixApp) || id.startsWith(prefixCours) || legacyIds.has(id))
              ).length
            );
            const allSolved = solvedInChap >= 90;

            return (
              <div
                key={chap.id}
                onClick={() => onSelectChapter(chap.id, 'cours')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectChapter(chap.id, 'cours');
                  }
                }}
                className={`rounded-2xl border p-3 sm:p-3.5 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group ${
                  isSelected
                    ? 'bg-slate-800/95 border-amber-400 ring-1 ring-amber-400/40 shadow-lg'
                    : 'bg-slate-900/90 border-slate-800 hover:bg-slate-800/75 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div
                    className={`w-11 h-11 rounded-2xl border flex items-center justify-center text-xl shrink-0 font-black ${iconMeta.accent}`}
                  >
                    {iconMeta.emoji}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                      <span className="text-amber-300">{chap.badge}</span>
                      <span>·</span>
                      <span className="truncate">{domain?.shortTitle}</span>
                    </div>
                    <h4 className="text-sm font-extrabold text-white truncate group-hover:text-amber-200 transition-colors">
                      {chap.title}
                    </h4>
                    <div className="text-[11px] text-slate-400 flex flex-wrap items-center gap-2 mt-0.5 tabular-nums">
                      <span className={allSolved ? 'text-emerald-400 font-bold flex items-center gap-1' : 'text-emerald-400/90 font-semibold'}>
                        {allSolved && <CheckCircle2 className="w-3 h-3" />}
                        {solvedInChap}/90 exercices (10 app. + 80 cours)
                      </span>
                      <span>·</span>
                      <span>~{chap.readingTimeMinutes} min</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectChapter(chap.id, 'cours');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 shadow'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Cours</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectChapter(chap.id, 'memo');
                    }}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/30 flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">Fiche</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectChapter(chap.id, 'exercices');
                    }}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center gap-1.5 transition cursor-pointer shadow active:scale-95 whitespace-nowrap"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Jouer</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
