# Guide d'installation et de build sur Android Studio 📱🇬🇦

Cette application de **Physique-Chimie (20 chapitres) & Mathématiques CIAM (27 chapitres) — 4ème Gabon** est configurée pour être ouverte, exécutée et compilée directement dans **Android Studio** (APK Debug / Release ou App Bundle).

---

## 🛠️ Ouvrir et compiler le dossier `android/` dans Android Studio

1. Synchronise d'abord le build web dans les assets Android (nettoie automatiquement les anciens fichiers `assets/`) :
   ```bash
   npm run build:android
   ```
   Cela compile l'application Vite dans `dist/` et copie l'intégralité du bundle dans `android/app/src/main/assets/`.
2. Ouvre **Android Studio** → **File > Open** → sélectionne le dossier `android/` de ce projet.
3. Laisse Android Studio effectuer le **Gradle Sync** (Gradle 8.2, AGP `8.2.2`, Kotlin `1.9.22`, Java 17).
   - `android/settings.gradle` centralise les dépôts (`RepositoriesMode.PREFER_SETTINGS`).
   - `android/build.gradle` déclare les plugins au format moderne (`plugins { ... apply false }`) sans conflit `allprojects`.
4. Clique sur **Run ▶** (émulateur ou appareil USB) ou **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

---

## 🔍 Corrections & Vérifications Techniques Intégrées

1. **Chargement ES Modules hors-ligne sans erreur CORS (`WebViewAssetLoader`)** :
   - Dans `MainActivity.kt`, `WebViewAssetLoader` sert `app/src/main/assets/` via `https://appassets.androidplatform.net/assets/index.html`, évitant les erreurs CORS de `file:///android_asset/` sur `<script type="module">`.
   - `setContentView(webView)` est appelé avant la configuration de `WindowInsetsController` (API 30+), et les callbacks WebView gèrent `WebResourceRequest?` nullable et `onJsAlert`.
2. **Configuration Gradle 8 & AndroidX complète** :
   - `android/gradle.properties` active `android.useAndroidX=true` et `android.enableJetifier=true`.
   - `namespace` et `applicationId` définis sur `com.ciam.maths4emegabon` (`minSdk 24`, `targetSdk 34`, `compileSdk 34`, Java 17).
   - `proguard-rules.pro` et `themes.xml` / `colors.xml` / `strings.xml` alignés.
3. **Icônes de lancement compatibles Android 7 à Android 14+** :
   - Icônes adaptatives (`mipmap-anydpi-v26`) **et** icônes PNG (`mipmap-mdpi` à `mipmap-xxxhdpi`) fournies pour éviter toute erreur AAPT2.
4. **Protection `window.fetch` & APIs navigateur WebView** :
   - Garde `Object.defineProperty(window, 'fetch', ...)` avec liaison `.bind(window)` dans `index.html`.
   - Protections `try/catch` sur `window.print()` et `AudioContext`.
   - Chemins relatifs (`base: './'`) dans `vite.config.ts` et `manifest.json`.
