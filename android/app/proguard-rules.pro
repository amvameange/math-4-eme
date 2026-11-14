# Proguard rules for Maths 4ème Gabon
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
