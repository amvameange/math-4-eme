# Proguard rules for Physique & Maths 3ème BEPC Gabon
-keepattributes JavascriptInterface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
-keepclassmembers class * extends android.webkit.WebViewClient {
    <methods>;
}
-keepclassmembers class * extends android.webkit.WebChromeClient {
    <methods>;
}
-keepclassmembers class * extends androidx.webkit.WebViewAssetLoader {
    <methods>;
}
-keep class com.ciam.maths4emegabon.MainActivity$AndroidBridge {
    *;
}
