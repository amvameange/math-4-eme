# Guide d'installation et de build sur Android Studio 📱🇬🇦

Cette application de **Physique-Chimie & Mathématiques (3ème BEPC Gabon — version 3.2.0)** est configurée pour être ouverte, exécutée et compilée directement dans **Android Studio** (APK Debug / Release ou App Bundle).

Elle embarque hors-ligne :
- **27 chapitres complets de 3ème** (13 Physique-Chimie + 14 Maths CIAM Gabon) avec 10 exercices d'application + 80 exercices progressifs par chapitre ;
- **270 exercices Type BEPC par chapitre** (10 par chapitre à difficulté croissante, Gabon & International) ;
- **40 grands Problèmes Type Examen BEPC** (20 Physique-Chimie + 20 Maths) corrigés étape par étape ;
- **444 Épreuves complètes d'entraînement BEPC 1990–2026** (6 pays × 37 années × 2 matières = 1 776 exercices détaillés sur 20 pts : Gabon, France, Sénégal, Cameroun, Bénin, Togo) ;
- **81 expériences interactives SVG** (3 par chapitre dans Labo Visuel & Mémo), **Exercices Infinis** et **Mes Exercices** sauvegardés localement.

---

## 🛠️ Ouvrir et compiler le dossier `android/` dans Android Studio

1. Synchronise d'abord le build web dans les assets Android (nettoie automatiquement les anciens fichiers `assets/` et exclut les fichiers temporaires) :
   ```bash
   npm run build:android
   ```
   Cela compile l'application Vite dans `dist/` et copie l'intégralité du bundle dans `android/app/src/main/assets/`.
2. Ouvre **Android Studio** → **File > Open** → sélectionne le dossier `android/` de ce projet.
3. Laisse Android Studio effectuer le **Gradle Sync** (**Gradle 8.9**, **AGP `8.7.3`**, **Kotlin `1.9.25`**, **Java 17**, **compileSdk / targetSdk 35**, `versionCode 5` / `3.2.0`).
   - `android/settings.gradle` centralise les dépôts (`RepositoriesMode.PREFER_SETTINGS`).
   - `android/build.gradle` déclare les plugins au format moderne (`plugins { ... apply false }`) sans conflit `allprojects`.
4. Clique sur **Run ▶** (émulateur ou appareil USB) ou **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

---

## 🔍 Correctifs Android Studio, Android 15 (SDK 35) & WebView

1. **Résolution du warning `SDK XML versions up to 3 but an SDK XML file of version 4 was encountered`** :
   - Cause : Les anciennes versions d'AGP (`8.2.x`) et de Gradle (`8.2`) utilisent un parseur `repository2-3.xml` incompatible avec les fichiers XML v4 (`repository2-4.xml`) des SDK Tools récents d'Android Studio.
   - Correction appliquée : Passage à **AGP `8.7.3`**, **Gradle `8.9`**, **Kotlin `1.9.25`**, `compileSdk 35` / `targetSdk 35`, `versionCode 5` (`3.2.0`), `packaging { resources { excludes += '/META-INF/{AL2.0,LGPL2.1}' } }`, et dépendances AndroidX à jour (`core-ktx:1.15.0`, `appcompat:1.7.0`, `material:1.12.0`, `webkit:1.12.1`, `activity-ktx:1.9.3`).
   - Dans Android Studio, si un ancien cache Gradle subsiste : **File > Sync Project with Gradle Files** (ou **Build > Clean Project**).
2. **Compatibilité Android 15 Edge-to-Edge & Clavier (`MainActivity.kt`)** :
   - `WindowCompat.setDecorFitsSystemWindows(window, false)` couplé à `ViewCompat.setOnApplyWindowInsetsListener(webView)` applique proprement les marges `systemBars()` + `ime()` sur Android 15 (`targetSdk 35`) pour éviter tout chevauchement de la barre d'état ou du clavier.
   - `WindowInsetsControllerCompat` gère les icônes claires sur fond sombre (`#020617`) sans API dépréciées.
   - `onSaveInstanceState` / `restoreState` préservent la session WebView lors des rotations/changements de configuration, et `WebView.setWebContentsDebuggingEnabled` est activé uniquement en build Debug (`FLAG_DEBUGGABLE`).
3. **Import/Export JSON & Impression PDF natifs dans WebView (`AndroidBridge` + `onShowFileChooser`)** :
   - `WebChromeClient.onShowFileChooser` + `ActivityResultContracts.StartActivityForResult` permettent au bouton **Importer JSON** (*Mes Exercices*) d'ouvrir le sélecteur de fichiers Android.
   - `AndroidBridge.shareJson` ouvre la feuille de partage Android pour exporter la sauvegarde JSON (là où `<a download="blob:...">` échoue en WebView).
   - `AndroidBridge.printPage` déclenche le service natif `PrintManager` d'Android pour imprimer ou enregistrer les Fiches Mémos en PDF (avec règle `-keep class ...AndroidBridge` dans `proguard-rules.pro`).
4. **Chargement ES Modules hors-ligne sans erreur CORS (`WebViewAssetLoader`)** :
   - Dans `MainActivity.kt`, `WebViewAssetLoader` sert `app/src/main/assets/` via `https://appassets.androidplatform.net/assets/index.html`, évitant les erreurs CORS de `file:///android_asset/` sur `<script type="module">`.
   - `AndroidManifest.xml` utilise `android:usesCleartextTraffic="false"` et `android:hardwareAccelerated="true"`.
5. **Configuration Gradle 8.9 & AndroidX pure** :
   - `android/gradle.properties` active `android.useAndroidX=true` et désactive Jetifier (`android.enableJetifier=false`) pour éviter l'avertissement de dépréciation AGP 8.7 et accélérer le Gradle Sync.
   - `namespace` et `applicationId` conservés sur `com.ciam.maths4emegabon` (`minSdk 24`, `targetSdk 35`, `compileSdk 35`, Java 17) pour assurer la compatibilité des mises à jour installées.
6. **Icônes de lancement & APIs WebView** :
   - Icônes adaptatives (`mipmap-anydpi-v26`) **et** icônes PNG (`mipmap-mdpi` à `mipmap-xxxhdpi`) fournies pour éviter toute erreur AAPT2.
   - Garde `Object.defineProperty(window, 'fetch', ...)` dans `index.html`, protections `try/catch` sur `AudioContext`, et chemins relatifs (`base: './'`).
