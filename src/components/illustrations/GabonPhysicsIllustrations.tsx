import React from 'react';
import { PhysicsIllustrationKey } from '../../types/math';

/**
 * Illustrations pédagogiques vivantes, colorées et gabonaises pour les 20 chapitres de Physique-Chimie 4ème Gabon
 */

export const MascotKokoPhysics: React.FC<{ speech?: string }> = ({ speech }) => {
  return (
    <div className="flex items-start gap-3.5 p-4 rounded-3xl bg-gradient-to-r from-amber-500/15 via-sky-500/10 to-purple-500/15 border border-sky-500/35 shadow-lg">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-400 to-emerald-400 p-1 flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
        <svg viewBox="0 0 64 64" className="w-12 h-12 select-none">
          {/* Tête de Koko en blouse blanche de labo + lunettes de protection */}
          <circle cx="32" cy="35" r="20" fill="#f59e0b" />
          <circle cx="16" cy="20" r="7" fill="#d97706" />
          <circle cx="16" cy="20" r="3.5" fill="#fef3c7" />
          <circle cx="48" cy="20" r="7" fill="#d97706" />
          <circle cx="48" cy="20" r="3.5" fill="#fef3c7" />
          <ellipse cx="32" cy="41" rx="10" ry="6.5" fill="#fef3c7" />
          <polygon points="32,37 29,34 35,34" fill="#b45309" />
          {/* Lunettes de protection chimie/physique */}
          <rect x="16" y="22" width="14" height="10" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.2" />
          <circle cx="23" cy="27" r="2.4" fill="#0f172a" />
          <rect x="34" y="22" width="14" height="10" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.2" />
          <circle cx="41" cy="27" r="2.4" fill="#0f172a" />
          <line x1="30" y1="27" x2="34" y2="27" stroke="#0284c7" strokeWidth="2.2" />
          {/* Sourire */}
          <path d="M 28 43 Q 32 47 36 43" fill="none" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
          {/* Blouse de laboratoire blanche + drapeau Gabon */}
          <path d="M 14 57 L 20 49 L 44 49 L 50 57 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="26" y="51" width="12" height="5" rx="1" fill="#10b981" />
          <rect x="26" y="53" width="12" height="1.8" fill="#facc15" />
          <rect x="26" y="54.8" width="12" height="1.5" fill="#0284c7" />
          {/* Petite fiole dans la patte */}
          <polygon points="52,44 58,56 46,56" fill="#a855f7" fillOpacity="0.8" stroke="#e9d5ff" strokeWidth="1.5" />
          <rect x="50" y="39" width="4" height="5" fill="#e9d5ff" />
        </svg>
      </div>

      <div className="flex-1 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-extrabold text-sky-300">Prof. Koko le Physicien (4ème)</span>
          <span className="text-slate-500">·</span>
          <span className="text-[11px] text-emerald-400 font-bold">
            Programme Officiel Physique-Chimie Gabon 🇬🇦
          </span>
        </div>
        <p className="text-slate-200 mt-1 leading-relaxed font-medium">
          {speech || "Mbolo jeune scientifique ! En Physique-Chimie 4ème, on rédige toujours en 4 temps : 1) Données & conversions, 2) Formule littérale, 3) Calcul posé debout, 4) Phrase réponse avec la bonne unité !"}
        </p>
      </div>
    </div>
  );
};

export const PhysicsChapterIllustration: React.FC<{ illustrationKey: PhysicsIllustrationKey }> = ({
  illustrationKey,
}) => {
  return (
    <div className="rounded-3xl bg-slate-900 border-2 border-sky-500/35 p-4 sm:p-5 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-black text-sky-300">
        <span>
          {illustrationKey === 'circuit-simple' && '💡 Schéma Normalisé d’un Circuit Électrique & Sens du Courant'}
          {illustrationKey === 'circuits-serie-derivation' && '🔀 Montage en Série (1 Boucle) vs Dérivation (2 Boucles)'}
          {illustrationKey === 'intensite' && '⚡ Intensité I (Ampèremètre en Série & Loi des Nœuds)'}
          {illustrationKey === 'tension' && '🔋 Tension U (Voltmètre en Dérivation & Loi des Mailles)'}
          {illustrationKey === 'loi-ohm' && '🎛️ Loi d’Ohm (U = R × I) & Caractéristique Droite par (0;0)'}
          {illustrationKey === 'puissance-seeg' && '🏠 Puissance P = U × I & Calcul de la Facture SEEG (F CFA)'}
          {illustrationKey === 'propagation-lumiere' && '🔦 Propagation Rectiligne & Vitesse c = 300 000 km/s'}
          {illustrationKey === 'ombres-eclipses' && '🌒 Cône d’Ombre & Éclipse Solaire / Lunaire'}
          {illustrationKey === 'reflexion-refraction' && '🪞 Réflexion sur Miroir (i = r) & Réfraction Air ➔ Eau'}
          {illustrationKey === 'lentilles' && '🔍 Lentille Convergente, Foyer F’ & Vergence C = 1/f'}
          {illustrationKey === 'dispersion-couleurs' && '🌈 Dispersion par Prisme & Synthèse Additive (RVB)'}
          {illustrationKey === 'masse-volumique' && '🪵 Masse Volumique ρ = m/V & Flottabilité de l’Okoumé'}
          {illustrationKey === 'forces-dynamometre' && '🏹 Les 4 Caractéristiques d’une Force & Dynamomètre (N)'}
          {illustrationKey === 'poids-masse' && '🌍 Poids P = m × g (Gabon g ≈ 9,8 N/kg vs Lune 1,6 N/kg)'}
          {illustrationKey === 'pression-archimede' && '🚢 Pression p = F/S & Poussée d’Archimède sur l’Ogooué'}
          {illustrationKey === 'air-gaz' && '🌬️ Composition de l’Air (78% N₂, 21% O₂, 1% Gaz rares)'}
          {illustrationKey === 'atomes-molecules' && '⚛️ Atomes (C, H, O, N) & Molécules (H₂O, CO₂, CH₄, O₂)'}
          {illustrationKey === 'combustions' && '🔥 Triangle du Feu, Combustion Complète vs Incomplète'}
          {illustrationKey === 'equations-bilan' && '⚖️ Équilibrage & Conservation de Masse (Loi de Lavoisier)'}
          {illustrationKey === 'solutions-ph' && '🧪 Concentration Massique Cm = m/V & Échelle pH (0 à 14)'}
        </span>
        <span className="text-[11px] text-amber-300 font-bold">Schéma du Cours 4ème</span>
      </div>

      <div className="flex justify-center bg-slate-950/85 rounded-2xl border border-slate-800 p-3">
        <svg viewBox="0 0 460 195" className="w-full max-w-2xl h-auto select-none">
          {/* 1. CIRCUIT SIMPLE */}
          {illustrationKey === 'circuit-simple' && (
            <>
              <rect x="65" y="34" width="230" height="122" rx="10" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
              {/* Pile */}
              <rect x="46" y="72" width="38" height="44" fill="#020617" />
              <line x1="56" y1="86" x2="74" y2="86" stroke="#fbbf24" strokeWidth="4" />
              <line x1="60" y1="100" x2="70" y2="100" stroke="#38bdf8" strokeWidth="5" />
              <text x="42" y="82" className="text-xs font-black fill-rose-400">+</text>
              <text x="42" y="112" className="text-xs font-black fill-sky-400">−</text>
              <text x="26" y="98" textAnchor="end" className="text-[10px] font-bold fill-amber-300">Pile</text>
              {/* Interrupteur fermé */}
              <rect x="145" y="24" width="65" height="20" fill="#020617" />
              <circle cx="152" cy="34" r="3.5" fill="#38bdf8" />
              <circle cx="204" cy="34" r="3.5" fill="#38bdf8" />
              <line x1="152" y1="34" x2="204" y2="34" stroke="#34d399" strokeWidth="3" />
              <text x="178" y="18" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Interrupteur K (fermé)</text>
              {/* Lampe */}
              <circle cx="295" cy="94" r="18" fill="#fef08a" fillOpacity="0.2" stroke="#facc15" strokeWidth="2.5" />
              <line x1="283" y1="82" x2="307" y2="106" stroke="#facc15" strokeWidth="2.5" />
              <line x1="307" y1="82" x2="283" y2="106" stroke="#facc15" strokeWidth="2.5" />
              <text x="320" y="98" className="text-[10px] font-bold fill-amber-300">Lampe L</text>
              {/* Flèches sens conventionnel */}
              <polygon points="108,34 98,28 98,40" fill="#f43f5e" />
              <polygon points="248,34 238,28 238,40" fill="#f43f5e" />
              <polygon points="175,156 185,150 185,162" fill="#f43f5e" />
              {/* Encadré résumé */}
              <rect x="335" y="34" width="112" height="122" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="391" y="58" textAnchor="middle" className="text-[10px] font-black fill-rose-400">Sens du courant I :</text>
              <text x="391" y="76" textAnchor="middle" className="text-[10px] font-bold fill-white">Borne + ➔ Borne −</text>
              <text x="391" y="94" textAnchor="middle" className="text-[9px] fill-slate-300">(à l’extérieur du gén.)</text>
              <text x="391" y="122" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">Circuit FERMÉ =</text>
              <text x="391" y="138" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">La lampe brille !</text>
            </>
          )}

          {/* 2. SÉRIE VS DÉRIVATION */}
          {illustrationKey === 'circuits-serie-derivation' && (
            <>
              <rect x="18" y="18" width="198" height="158" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="117" y="38" textAnchor="middle" className="text-[11px] font-black fill-amber-300">CIRCUIT EN SÉRIE (1 boucle)</text>
              <rect x="48" y="52" width="138" height="84" rx="6" fill="none" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="92" cy="52" r="11" fill="#020617" stroke="#facc15" strokeWidth="2" />
              <text x="92" y="56" textAnchor="middle" className="text-[9px] font-black fill-amber-300">L1</text>
              <circle cx="144" cy="52" r="11" fill="#020617" stroke="#facc15" strokeWidth="2" />
              <text x="144" y="56" textAnchor="middle" className="text-[9px] font-black fill-amber-300">L2</text>
              <circle cx="117" cy="136" r="10" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
              <text x="117" y="139" textAnchor="middle" className="text-[9px] font-black fill-sky-300">G</text>
              <text x="117" y="164" textAnchor="middle" className="text-[9px] font-bold fill-rose-300">Si L1 grille ➔ L2 s’éteint !</text>

              <rect x="242" y="18" width="202" height="158" rx="14" fill="#064e3b" fillOpacity="0.25" stroke="#10b981" strokeWidth="1.5" />
              <text x="343" y="38" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">DÉRIVATION (2 boucles)</text>
              <rect x="270" y="54" width="146" height="84" rx="6" fill="none" stroke="#94a3b8" strokeWidth="2" />
              <line x1="270" y1="96" x2="416" y2="96" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="270" cy="96" r="4.5" fill="#fbbf24" />
              <circle cx="416" cy="96" r="4.5" fill="#fbbf24" />
              <circle cx="343" cy="54" r="11" fill="#020617" stroke="#10b981" strokeWidth="2" />
              <text x="343" y="58" textAnchor="middle" className="text-[9px] font-black fill-emerald-300">L1</text>
              <circle cx="343" cy="96" r="11" fill="#020617" stroke="#10b981" strokeWidth="2" />
              <text x="343" y="100" textAnchor="middle" className="text-[9px] font-black fill-emerald-300">L2</text>
              <circle cx="343" cy="138" r="10" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
              <text x="343" y="141" textAnchor="middle" className="text-[9px] font-black fill-sky-300">G</text>
              <text x="343" y="164" textAnchor="middle" className="text-[9px] font-bold fill-emerald-300">Indépendantes (comme à la maison) !</text>
            </>
          )}

          {/* 3. INTENSITÉ I */}
          {illustrationKey === 'intensite' && (
            <>
              <rect x="20" y="20" width="215" height="154" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="127" y="42" textAnchor="middle" className="text-[11px] font-black fill-sky-300">LOI DES NŒUDS (Dérivation)</text>
              <line x1="40" y1="98" x2="115" y2="98" stroke="#f59e0b" strokeWidth="4" />
              <polygon points="88,98 76,91 76,105" fill="#fbbf24" />
              <circle cx="115" cy="98" r="6" fill="#fbbf24" />
              <line x1="115" y1="98" x2="205" y2="62" stroke="#10b981" strokeWidth="3.5" />
              <line x1="115" y1="98" x2="205" y2="134" stroke="#38bdf8" strokeWidth="3.5" />
              <text x="72" y="84" textAnchor="middle" className="text-xs font-black fill-amber-300 font-mono">I = 0,8 A</text>
              <text x="172" y="62" textAnchor="middle" className="text-[11px] font-black fill-emerald-300 font-mono">I₁ = 0,5 A</text>
              <text x="172" y="146" textAnchor="middle" className="text-[11px] font-black fill-sky-300 font-mono">I₂ = 0,3 A</text>
              <text x="127" y="164" textAnchor="middle" className="text-[10px] font-black fill-white font-mono">I = I₁ + I₂</text>

              <rect x="252" y="20" width="190" height="154" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="347" y="42" textAnchor="middle" className="text-[11px] font-black fill-amber-300">AMPÈREMÈTRE (en SÉRIE)</text>
              <circle cx="347" cy="90" r="26" fill="#020617" stroke="#38bdf8" strokeWidth="3" />
              <text x="347" y="96" textAnchor="middle" className="text-lg font-black fill-white">A</text>
              <text x="305" y="94" textAnchor="end" className="text-[10px] font-black fill-rose-400">mA/A</text>
              <text x="389" y="94" textAnchor="start" className="text-[10px] font-black fill-slate-300">COM</text>
              <text x="347" y="140" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">Unité : Ampère (A)</text>
              <text x="347" y="158" textAnchor="middle" className="text-[10px] font-mono fill-amber-300">1 A = 1 000 mA</text>
            </>
          )}

          {/* 4. TENSION U */}
          {illustrationKey === 'tension' && (
            <>
              <rect x="25" y="22" width="210" height="150" rx="14" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="130" y="42" textAnchor="middle" className="text-[11px] font-black fill-amber-300">VOLTMÈTRE EN DÉRIVATION</text>
              <line x1="45" y1="115" x2="215" y2="115" stroke="#94a3b8" strokeWidth="2.5" />
              <circle cx="130" cy="115" r="14" fill="#020617" stroke="#facc15" strokeWidth="2.5" />
              <text x="130" y="119" textAnchor="middle" className="text-[10px] font-black fill-amber-300">L</text>
              <polyline points="88,115 88,68 172,68 172,115" fill="none" stroke="#a855f7" strokeWidth="2.5" />
              <circle cx="130" cy="68" r="15" fill="#020617" stroke="#a855f7" strokeWidth="2.5" />
              <text x="130" y="73" textAnchor="middle" className="text-sm font-black fill-purple-300">V</text>
              <text x="82" y="74" textAnchor="end" className="text-[10px] font-black fill-rose-400">V</text>
              <text x="178" y="74" textAnchor="start" className="text-[10px] font-black fill-slate-300">COM</text>
              <text x="130" y="156" textAnchor="middle" className="text-[10px] font-bold fill-purple-300">Toujours branché AUX BORNES !</text>

              <rect x="252" y="22" width="188" height="150" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="346" y="44" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">ADDITIVITÉ DES TENSIONS</text>
              <text x="346" y="74" textAnchor="middle" className="text-xs font-black fill-white font-mono">En SÉRIE : U_G = U₁ + U₂</text>
              <text x="346" y="96" textAnchor="middle" className="text-[11px] font-bold fill-amber-300 font-mono">12 V = 4,5 V + 7,5 V</text>
              <line x1="270" y1="112" x2="422" y2="112" stroke="#334155" strokeWidth="1.5" />
              <text x="346" y="134" textAnchor="middle" className="text-xs font-black fill-sky-300 font-mono">En DÉRIVATION :</text>
              <text x="346" y="154" textAnchor="middle" className="text-xs font-black fill-emerald-300 font-mono">U_G = U₁ = U₂</text>
            </>
          )}

          {/* 5. LOI D'OHM */}
          {illustrationKey === 'loi-ohm' && (
            <>
              <line x1="55" y1="154" x2="215" y2="154" stroke="#64748b" strokeWidth="2" />
              <line x1="55" y1="154" x2="55" y2="26" stroke="#64748b" strokeWidth="2" />
              <text x="218" y="158" className="text-[10px] font-black fill-sky-300">I (A)</text>
              <text x="55" y="20" textAnchor="middle" className="text-[10px] font-black fill-amber-300">U (V)</text>
              <line x1="55" y1="154" x2="195" y2="38" stroke="#10b981" strokeWidth="3.5" />
              <circle cx="55" cy="154" r="4" fill="#fbbf24" />
              <circle cx="125" cy="96" r="4.5" fill="#fbbf24" />
              <line x1="125" y1="96" x2="125" y2="154" stroke="#94a3b8" strokeDasharray="3 3" />
              <line x1="55" y1="96" x2="125" y2="96" stroke="#94a3b8" strokeDasharray="3 3" />
              <text x="125" y="170" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">0,2 A</text>
              <text x="48" y="100" textAnchor="end" className="text-[10px] font-mono fill-amber-300">6 V</text>

              <rect x="245" y="26" width="198" height="142" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="344" y="52" textAnchor="middle" className="text-sm font-black fill-amber-300 font-mono">U = R × I</text>
              <text x="344" y="78" textAnchor="middle" className="text-xs font-bold fill-white font-mono">R = U ÷ I   |   I = U ÷ R</text>
              <text x="344" y="106" textAnchor="middle" className="text-[11px] font-bold fill-emerald-300 font-mono">Ex : R = 6 V ÷ 0,2 A = 30 Ω</text>
              <text x="344" y="132" textAnchor="middle" className="text-[10px] fill-sky-300">Symbole Résistor : [ R ]</text>
              <text x="344" y="150" textAnchor="middle" className="text-[10px] fill-slate-300">Unité : Ohm (Ω)</text>
            </>
          )}

          {/* 6. PUISSANCE & FACTURE SEEG */}
          {illustrationKey === 'puissance-seeg' && (
            <>
              <rect x="22" y="22" width="195" height="150" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="119" y="44" textAnchor="middle" className="text-[11px] font-black fill-amber-300">PUISSANCE & ÉNERGIE</text>
              <text x="119" y="72" textAnchor="middle" className="text-sm font-black fill-white font-mono">P = U × I</text>
              <text x="119" y="92" textAnchor="middle" className="text-[10px] fill-slate-300">(W) = (V) × (A)</text>
              <line x1="40" y1="106" x2="198" y2="106" stroke="#334155" />
              <text x="119" y="128" textAnchor="middle" className="text-sm font-black fill-emerald-300 font-mono">E = P × t</text>
              <text x="119" y="148" textAnchor="middle" className="text-[10px] fill-sky-300">(kWh) = (kW) × (h)</text>

              <rect x="234" y="22" width="206" height="150" rx="14" fill="#064e3b" fillOpacity="0.28" stroke="#10b981" strokeWidth="1.5" />
              <text x="337" y="44" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">COMPTEUR SEEG GABON 🇬🇦</text>
              <rect x="254" y="56" width="166" height="32" rx="6" fill="#020617" stroke="#34d399" />
              <text x="337" y="76" textAnchor="middle" className="text-xs font-black fill-amber-300 font-mono">E = 150 kWh</text>
              <text x="337" y="112" textAnchor="middle" className="text-[11px] font-bold fill-white font-mono">Prix = E × Tarif F/kWh</text>
              <text x="337" y="134" textAnchor="middle" className="text-[11px] font-black fill-amber-300 font-mono">150 × 120 F = 18 000 F CFA</text>
              <text x="337" y="156" textAnchor="middle" className="text-[9px] fill-rose-300">1 kW = 1 000 W | 1 kWh = 3,6 MJ</text>
            </>
          )}

          {/* 7. PROPAGATION LUMIÈRE */}
          {illustrationKey === 'propagation-lumiere' && (
            <>
              <circle cx="52" cy="95" r="22" fill="#facc15" fillOpacity="0.85" />
              <text x="52" y="135" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Source</text>
              <rect x="135" y="42" width="10" height="106" fill="#475569" />
              <rect x="135" y="88" width="10" height="14" fill="#020617" />
              <rect x="225" y="42" width="10" height="106" fill="#475569" />
              <rect x="225" y="88" width="10" height="14" fill="#020617" />
              <line x1="74" y1="95" x2="310" y2="95" stroke="#fef08a" strokeWidth="3.5" />
              <polygon points="195,95 184,89 184,101" fill="#f59e0b" />
              <polygon points="285,95 274,89 274,101" fill="#f59e0b" />
              {/* Œil */}
              <ellipse cx="330" cy="95" rx="14" ry="9" fill="#f8fafc" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="326" cy="95" r="4" fill="#0284c7" />
              <rect x="358" y="34" width="90" height="122" rx="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="403" y="60" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Ligne droite !</text>
              <text x="403" y="88" textAnchor="middle" className="text-[10px] font-black fill-white font-mono">c = 300 000</text>
              <text x="403" y="104" textAnchor="middle" className="text-[10px] font-black fill-sky-300 font-mono">km/s</text>
              <text x="403" y="134" textAnchor="middle" className="text-[10px] font-black fill-emerald-300 font-mono">d = c × t</text>
            </>
          )}

          {/* 8. OMBRES & ÉCLIPSES */}
          {illustrationKey === 'ombres-eclipses' && (
            <>
              <circle cx="52" cy="98" r="24" fill="#facc15" />
              <text x="52" y="138" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Soleil</text>
              <polygon points="52,74 375,30 375,166 52,122" fill="#1e293b" fillOpacity="0.45" />
              <circle cx="170" cy="98" r="26" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <path d="M 170 72 A 26 26 0 0 1 170 124 Z" fill="#020617" fillOpacity="0.85" />
              <text x="170" y="142" textAnchor="middle" className="text-[10px] font-black fill-sky-300">Terre (Ombre propre)</text>
              <polygon points="170,72 375,44 375,152 170,124" fill="#020617" fillOpacity="0.9" />
              <circle cx="290" cy="98" r="10" fill="#94a3b8" />
              <text x="290" y="76" textAnchor="middle" className="text-[10px] font-black fill-rose-300">Lune éclipsée !</text>
              <rect x="372" y="25" width="8" height="145" fill="#475569" />
              <ellipse cx="376" cy="98" rx="4" ry="42" fill="#020617" />
              <text x="386" y="102" className="text-[9px] font-bold fill-slate-300">Ombre portée</text>
            </>
          )}

          {/* 9. RÉFLEXION & RÉFRACTION */}
          {illustrationKey === 'reflexion-refraction' && (
            <>
              {/* Réflexion Miroir */}
              <rect x="18" y="18" width="202" height="158" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="119" y="38" textAnchor="middle" className="text-[10px] font-black fill-sky-300">RÉFLEXION SUR MIROIR</text>
              <line x1="40" y1="142" x2="198" y2="142" stroke="#cbd5e1" strokeWidth="4" />
              <line x1="119" y1="54" x2="119" y2="142" stroke="#64748b" strokeDasharray="4 4" strokeWidth="1.5" />
              <line x1="55" y1="68" x2="119" y2="142" stroke="#facc15" strokeWidth="3" />
              <line x1="119" y1="142" x2="183" y2="68" stroke="#34d399" strokeWidth="3" />
              <text x="104" y="100" textAnchor="end" className="text-[10px] font-black fill-amber-300">i</text>
              <text x="134" y="100" textAnchor="start" className="text-[10px] font-black fill-emerald-300">r</text>
              <text x="119" y="164" textAnchor="middle" className="text-[11px] font-black fill-white font-mono">Angle i = Angle r</text>

              {/* Réfraction Air/Eau */}
              <rect x="238" y="18" width="204" height="158" rx="14" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="340" y="38" textAnchor="middle" className="text-[10px] font-black fill-cyan-300">RÉFRACTION (AIR ➔ EAU)</text>
              <rect x="252" y="98" width="176" height="62" fill="#0369a1" fillOpacity="0.4" />
              <line x1="252" y1="98" x2="428" y2="98" stroke="#38bdf8" strokeWidth="2" />
              <line x1="340" y1="48" x2="340" y2="160" stroke="#64748b" strokeDasharray="4 4" strokeWidth="1.5" />
              <line x1="280" y1="52" x2="340" y2="98" stroke="#facc15" strokeWidth="3" />
              <line x1="340" y1="98" x2="368" y2="154" stroke="#f43f5e" strokeWidth="3" />
              <text x="275" y="88" className="text-[9px] fill-slate-300">Air</text>
              <text x="275" y="114" className="text-[9px] fill-cyan-200">Eau</text>
              <text x="392" y="148" textAnchor="middle" className="text-[9px] font-bold fill-rose-300">Rayon dévié !</text>
            </>
          )}

          {/* 10. LENTILLES */}
          {illustrationKey === 'lentilles' && (
            <>
              <line x1="24" y1="98" x2="320" y2="98" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
              {/* Symbole lentille convergente */}
              <line x1="165" y1="30" x2="165" y2="166" stroke="#38bdf8" strokeWidth="3" />
              <polygon points="165,24 158,36 172,36" fill="#38bdf8" />
              <polygon points="165,172 158,160 172,160" fill="#38bdf8" />
              <circle cx="165" cy="98" r="4" fill="#ffffff" />
              <text x="158" y="114" textAnchor="end" className="text-[10px] font-black fill-white">O</text>
              {/* Rayons parallèles */}
              <polyline points="35,58 165,58 265,98 308,115" fill="none" stroke="#facc15" strokeWidth="2.5" />
              <polyline points="35,138 165,138 265,98 308,81" fill="none" stroke="#facc15" strokeWidth="2.5" />
              <circle cx="265" cy="98" r="5" fill="#f43f5e" />
              <text x="265" y="118" textAnchor="middle" className="text-xs font-black fill-rose-400">F’ (Foyer)</text>
              <text x="215" y="156" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">f’ = OF’ (en mètres)</text>

              <rect x="326" y="28" width="120" height="138" rx="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="386" y="56" textAnchor="middle" className="text-xs font-black fill-amber-300">VERGENCE C</text>
              <text x="386" y="84" textAnchor="middle" className="text-sm font-black fill-white font-mono">C = 1 ÷ f’</text>
              <text x="386" y="108" textAnchor="middle" className="text-[10px] fill-sky-300">Unité : dioptrie (δ)</text>
              <text x="386" y="136" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300 font-mono">f’=0,25m ➔ 4 δ</text>
            </>
          )}

          {/* 11. DISPERSION & COULEURS */}
          {illustrationKey === 'dispersion-couleurs' && (
            <>
              <line x1="25" y1="108" x2="105" y2="95" stroke="#ffffff" strokeWidth="5" />
              <text x="58" y="84" textAnchor="middle" className="text-[10px] font-black fill-white">Lumière blanche</text>
              <polygon points="100,145 148,45 196,145" fill="#38bdf8" fillOpacity="0.22" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="158" y1="78" x2="258" y2="54" stroke="#ef4444" strokeWidth="3.5" />
              <line x1="162" y1="86" x2="258" y2="78" stroke="#facc15" strokeWidth="3.5" />
              <line x1="166" y1="94" x2="258" y2="102" stroke="#22c55e" strokeWidth="3.5" />
              <line x1="170" y1="102" x2="258" y2="126" stroke="#3b82f6" strokeWidth="3.5" />
              <line x1="174" y1="110" x2="258" y2="148" stroke="#a855f7" strokeWidth="3.5" />
              <text x="200" y="170" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">Spectre (Arc-en-ciel)</text>

              {/* Synthèse additive RVB */}
              <rect x="275" y="22" width="170" height="152" rx="14" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="360" y="42" textAnchor="middle" className="text-[10px] font-black fill-purple-300">SYNTHÈSE ADDITIVE (RVB)</text>
              <circle cx="360" cy="82" r="24" fill="#ef4444" fillOpacity="0.6" />
              <circle cx="342" cy="112" r="24" fill="#22c55e" fillOpacity="0.6" />
              <circle cx="378" cy="112" r="24" fill="#3b82f6" fillOpacity="0.6" />
              <circle cx="360" cy="102" r="9" fill="#ffffff" />
              <text x="360" y="160" textAnchor="middle" className="text-[10px] font-black fill-white">R + V + B = BLANC</text>
            </>
          )}

          {/* 12. MASSE VOLUMIQUE */}
          {illustrationKey === 'masse-volumique' && (
            <>
              <rect x="35" y="34" width="120" height="132" rx="8" fill="#020617" stroke="#38bdf8" strokeWidth="2.5" />
              <rect x="37" y="76" width="116" height="88" fill="#0284c7" fillOpacity="0.45" />
              <text x="95" y="152" textAnchor="middle" className="text-[10px] font-bold fill-sky-200">Eau : ρ = 1 g/cm³</text>
              {/* Okoumé flotte */}
              <rect x="52" y="64" width="42" height="22" rx="4" fill="#b45309" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="73" y="56" textAnchor="middle" className="text-[9px] font-black fill-amber-300">Okoumé (0,5) ⬆️</text>
              {/* Pierre coule */}
              <circle cx="122" cy="126" r="12" fill="#64748b" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="122" y="108" textAnchor="middle" className="text-[9px] font-black fill-rose-300">Fer (7,8) ⬇️</text>

              <rect x="180" y="24" width="260" height="146" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="310" y="50" textAnchor="middle" className="text-sm font-black fill-amber-300 font-mono">ρ = m ÷ V</text>
              <text x="310" y="76" textAnchor="middle" className="text-xs font-bold fill-white font-mono">m = ρ × V   |   V = m ÷ ρ</text>
              <text x="310" y="106" textAnchor="middle" className="text-[11px] font-bold fill-emerald-300">Si ρ_objet &lt; ρ_eau : IL FLOTTE !</text>
              <text x="310" y="128" textAnchor="middle" className="text-[11px] font-bold fill-rose-300">Si ρ_objet &gt; ρ_eau : IL COULE !</text>
              <text x="310" y="152" textAnchor="middle" className="text-[10px] font-mono fill-sky-300">1 g/cm³ = 1 000 kg/m³</text>
            </>
          )}

          {/* 13. FORCES & DYNAMOMÈTRE */}
          {illustrationKey === 'forces-dynamometre' && (
            <>
              <rect x="28" y="24" width="160" height="148" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="108" y="44" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">DYNAMOMÈTRE</text>
              <rect x="92" y="54" width="32" height="72" rx="6" fill="#020617" stroke="#94a3b8" strokeWidth="2" />
              <polyline points="108,58 100,66 116,74 100,82 116,90 108,98" fill="none" stroke="#facc15" strokeWidth="2.5" />
              <line x1="108" y1="98" x2="108" y2="140" stroke="#38bdf8" strokeWidth="2.5" />
              <rect x="94" y="140" width="28" height="18" rx="4" fill="#0284c7" />
              <text x="108" y="153" textAnchor="middle" className="text-[9px] font-black fill-white">4 N</text>

              <rect x="208" y="24" width="234" height="148" rx="14" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="325" y="46" textAnchor="middle" className="text-[11px] font-black fill-amber-300">VECTEUR FORCE F⃗ : 4 ÉLÉMENTS</text>
              <circle cx="242" cy="90" r="5" fill="#f43f5e" />
              <line x1="242" y1="90" x2="395" y2="90" stroke="#fbbf24" strokeWidth="4" />
              <polygon points="405,90 388,82 388,98" fill="#fbbf24" />
              <text x="242" y="74" textAnchor="start" className="text-[9px] font-bold fill-rose-300">1. Point d’application</text>
              <text x="325" y="114" textAnchor="middle" className="text-[9px] font-bold fill-sky-300">2. Direction (droite) + 3. Sens (flèche)</text>
              <text x="325" y="138" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">4. Intensité (en Newton N) · Échelle !</text>
              <text x="325" y="156" textAnchor="middle" className="text-[9px] font-mono fill-slate-300">Ex : 1 cm ↔ 2 N ➔ 4 N = flèche de 2 cm</text>
            </>
          )}

          {/* 14. POIDS ET MASSE */}
          {illustrationKey === 'poids-masse' && (
            <>
              <rect x="22" y="24" width="190" height="148" rx="14" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <text x="117" y="46" textAnchor="middle" className="text-[11px] font-black fill-sky-300">TERRE / GABON (g ≈ 9,8 N/kg)</text>
              <circle cx="117" cy="96" r="24" fill="#0284c7" />
              <text x="117" y="100" textAnchor="middle" className="text-xs font-black fill-white">m = 50 kg</text>
              <line x1="117" y1="120" x2="117" y2="152" stroke="#facc15" strokeWidth="4" />
              <polygon points="117,158 110,146 124,146" fill="#facc15" />
              <text x="165" y="146" className="text-[11px] font-black fill-amber-300 font-mono">P = 490 N</text>

              <rect x="232" y="24" width="210" height="148" rx="14" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="337" y="46" textAnchor="middle" className="text-[11px] font-black fill-purple-300">LUNE (g ≈ 1,6 N/kg)</text>
              <circle cx="337" cy="96" r="22" fill="#64748b" />
              <text x="337" y="100" textAnchor="middle" className="text-xs font-black fill-white">m = 50 kg</text>
              <line x1="337" y1="118" x2="337" y2="132" stroke="#facc15" strokeWidth="3" />
              <polygon points="337,138 331,128 343,128" fill="#facc15" />
              <text x="337" y="156" textAnchor="middle" className="text-[10px] font-black fill-emerald-300 font-mono">
                P = 80 N (m invariant !)
              </text>
            </>
          )}

          {/* 15. PRESSION & ARCHIMÈDE */}
          {illustrationKey === 'pression-archimede' && (
            <>
              <rect x="22" y="22" width="198" height="150" rx="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="121" y="44" textAnchor="middle" className="text-[11px] font-black fill-amber-300">PRESSION : p = F ÷ S</text>
              <rect x="46" y="76" width="52" height="34" fill="#38bdf8" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
              <text x="72" y="130" textAnchor="middle" className="text-[9px] fill-sky-300">Grande S ➔ faible p</text>
              <polygon points="154,110 176,110 165,134" fill="#f43f5e" />
              <rect x="148" y="76" width="34" height="34" fill="#f43f5e" fillOpacity="0.35" stroke="#f43f5e" strokeWidth="2" />
              <text x="165" y="154" textAnchor="middle" className="text-[9px] fill-rose-300">Petite S ➔ forte p !</text>

              <rect x="236" y="22" width="206" height="150" rx="14" fill="#0369a1" fillOpacity="0.22" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="339" y="44" textAnchor="middle" className="text-[11px] font-black fill-sky-300">POUSSÉE D’ARCHIMÈDE (F_A)</text>
              <rect x="252" y="96" width="174" height="58" fill="#0284c7" fillOpacity="0.35" />
              <polygon points="295,88 383,88 369,112 309,112" fill="#f59e0b" stroke="#fde68a" strokeWidth="2" />
              <line x1="339" y1="88" x2="339" y2="56" stroke="#10b981" strokeWidth="3.5" />
              <polygon points="339,50 333,60 345,60" fill="#10b981" />
              <text x="352" y="72" className="text-[10px] font-black fill-emerald-300">F_A ↑</text>
              <line x1="339" y1="112" x2="339" y2="144" stroke="#f43f5e" strokeWidth="3.5" />
              <polygon points="339,150 333,140 345,140" fill="#f43f5e" />
              <text x="352" y="138" className="text-[10px] font-black fill-rose-300">P ↓</text>
            </>
          )}

          {/* 16. AIR & GAZ */}
          {illustrationKey === 'air-gaz' && (
            <>
              <rect x="30" y="42" width="234" height="44" rx="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <text x="147" y="69" textAnchor="middle" className="text-xs font-black fill-white">78 % Diazote (N₂)</text>
              <rect x="268" y="42" width="104" height="44" rx="10" fill="#059669" stroke="#34d399" strokeWidth="2" />
              <text x="320" y="69" textAnchor="middle" className="text-xs font-black fill-white">21 % O₂</text>
              <rect x="376" y="42" width="54" height="44" rx="10" fill="#a855f7" stroke="#d8b4fe" strokeWidth="2" />
              <text x="403" y="69" textAnchor="middle" className="text-[10px] font-black fill-white">1 %</text>

              <rect x="30" y="104" width="400" height="68" rx="14" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="230" y="128" textAnchor="middle" className="text-xs font-black fill-amber-300">
                1 Litre d’air pèse environ 1,3 g (dans les conditions normales)
              </text>
              <text x="230" y="152" textAnchor="middle" className="text-[11px] font-bold fill-slate-200 font-mono">
                Règle du 1/5 : Volume(O₂) = V(air) ÷ 5   |   V(N₂) ≈ 4 × V(O₂)
              </text>
            </>
          )}

          {/* 17. ATOMES & MOLÉCULES */}
          {illustrationKey === 'atomes-molecules' && (
            <>
              {/* Légende atomes */}
              <rect x="20" y="20" width="175" height="154" rx="14" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="107" y="40" textAnchor="middle" className="text-[10px] font-black fill-purple-300">CODE COULEUR DES ATOMES</text>
              <circle cx="48" cy="64" r="10" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" /><text x="70" y="68" className="text-[11px] font-bold fill-white">C : Carbone (Noir)</text>
              <circle cx="48" cy="94" r="7" fill="#f8fafc" /><text x="70" y="98" className="text-[11px] font-bold fill-white">H : Hydrogène (Blanc)</text>
              <circle cx="48" cy="124" r="10" fill="#ef4444" /><text x="70" y="128" className="text-[11px] font-bold fill-rose-300">O : Oxygène (Rouge)</text>
              <circle cx="48" cy="154" r="10" fill="#3b82f6" /><text x="70" y="158" className="text-[11px] font-bold fill-sky-300">N : Azote (Bleu)</text>

              {/* Molécules */}
              <rect x="210" y="20" width="232" height="154" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="326" y="40" textAnchor="middle" className="text-[10px] font-black fill-sky-300">EXEMPLES DE MOLÉCULES</text>
              {/* H2O */}
              <circle cx="268" cy="78" r="12" fill="#ef4444" />
              <circle cx="252" cy="88" r="7" fill="#f8fafc" />
              <circle cx="284" cy="88" r="7" fill="#f8fafc" />
              <text x="268" y="112" textAnchor="middle" className="text-xs font-black fill-white font-mono">H₂O (Eau)</text>
              {/* CO2 */}
              <circle cx="380" cy="78" r="12" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
              <circle cx="358" cy="78" r="10" fill="#ef4444" />
              <circle cx="402" cy="78" r="10" fill="#ef4444" />
              <text x="380" y="112" textAnchor="middle" className="text-xs font-black fill-amber-300 font-mono">CO₂</text>
              <text x="326" y="148" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">
                Molécule = Assemblage d’atomes liés
              </text>
            </>
          )}

          {/* 18. COMBUSTIONS */}
          {illustrationKey === 'combustions' && (
            <>
              <polygon points="120,28 45,152 195,152" fill="#f59e0b" fillOpacity="0.18" stroke="#fbbf24" strokeWidth="3" />
              <text x="120" y="102" textAnchor="middle" className="text-xs font-black fill-amber-300">TRIANGLE</text>
              <text x="120" y="118" textAnchor="middle" className="text-xs font-black fill-amber-300">DU FEU</text>
              <text x="120" y="20" textAnchor="middle" className="text-[10px] font-black fill-rose-300">Chaleur (Étincelle)</text>
              <text x="25" y="168" textAnchor="start" className="text-[10px] font-black fill-emerald-300">Combustible (Gaz)</text>
              <text x="215" y="168" textAnchor="end" className="text-[10px] font-black fill-sky-300">Comburant (O₂)</text>

              <rect x="232" y="22" width="210" height="148" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="337" y="44" textAnchor="middle" className="text-[11px] font-black fill-sky-300">COMPLÈTE vs INCOMPLÈTE</text>
              <text x="337" y="74" textAnchor="middle" className="text-xs font-black fill-sky-400">🔥 Flamme BLEUE = Complète</text>
              <text x="337" y="92" textAnchor="middle" className="text-[10px] fill-slate-200">Assez d’O₂ ➔ CO₂ + H₂O</text>
              <line x1="250" y1="106" x2="424" y2="106" stroke="#334155" />
              <text x="337" y="126" textAnchor="middle" className="text-xs font-black fill-amber-400">🔥 Flamme JAUNE = Incomplète</text>
              <text x="337" y="146" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">Manque d’O₂ ➔ C (suie) + CO (mortel !)</text>
            </>
          )}

          {/* 19. ÉQUATIONS-BILAN & LAVOISIER */}
          {illustrationKey === 'equations-bilan' && (
            <>
              <rect x="22" y="22" width="416" height="150" rx="16" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="230" y="48" textAnchor="middle" className="text-xs font-black fill-amber-300">
                CONSERVATION DES ATOMES & DE LA MASSE (LAVOISIER)
              </text>
              <text x="230" y="84" textAnchor="middle" className="text-base font-black fill-white font-mono">
                CH₄  +  2 O₂   ➔   CO₂  +  2 H₂O
              </text>
              <text x="125" y="114" textAnchor="middle" className="text-[11px] font-bold fill-sky-300">
                Réactifs : 1 C, 4 H, 4 O
              </text>
              <text x="335" y="114" textAnchor="middle" className="text-[11px] font-bold fill-emerald-300">
                Produits : 1 C, 4 H, 4 O
              </text>
              <rect x="65" y="130" width="330" height="28" rx="8" fill="#064e3b" fillOpacity="0.6" stroke="#34d399" />
              <text x="230" y="148" textAnchor="middle" className="text-[11px] font-black fill-emerald-200">
                Masse totale des réactifs = Masse totale des produits !
              </text>
            </>
          )}

          {/* 20. SOLUTIONS & pH */}
          {illustrationKey === 'solutions-ph' && (
            <>
              <text x="230" y="34" textAnchor="middle" className="text-xs font-black fill-white">ÉCHELLE DE pH (0 à 14)</text>
              <defs>
                <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="45%" stopColor="#eab308" />
                  <stop offset="50%" stopColor="#22c55e" />
                  <stop offset="75%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <rect x="36" y="48" width="388" height="26" rx="8" fill="url(#phGrad)" />
              <text x="46" y="92" textAnchor="start" className="text-[11px] font-black fill-rose-300">0 — ACIDE (&lt; 7)</text>
              <text x="230" y="92" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">7 (NEUTRE)</text>
              <text x="414" y="92" textAnchor="end" className="text-[11px] font-black fill-purple-300">14 — BASIQUE (&gt; 7)</text>

              <rect x="36" y="110" width="388" height="64" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="230" y="134" textAnchor="middle" className="text-xs font-black fill-amber-300 font-mono">
                Concentration Massique : Cm = m_soluté ÷ V_solution (en g/L)
              </text>
              <text x="230" y="158" textAnchor="middle" className="text-[10px] font-bold fill-slate-200">
                Diluer (ajouter de l’eau) rapproche toujours le pH vers 7 et diminue Cm !
              </text>
            </>
          )}
        </svg>
      </div>
    </div>
  );
};
