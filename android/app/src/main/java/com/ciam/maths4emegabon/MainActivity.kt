package com.ciam.maths4emegabon

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.content.pm.ApplicationInfo
import android.graphics.Color
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.print.PrintAttributes
import android.print.PrintManager
import android.view.ViewGroup
import android.webkit.JavascriptInterface
import android.webkit.JsPromptResult
import android.webkit.JsResult
import android.webkit.RenderProcessGoneDetail
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.OnBackPressedCallback
import androidx.activity.result.contract.ActivityResultContracts
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.core.view.updatePadding
import androidx.webkit.WebViewAssetLoader

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private var isWebViewDestroyed = false
    private var fileUploadCallback: ValueCallback<Array<Uri>>? = null

    private val fileChooserLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        val callback = fileUploadCallback
        fileUploadCallback = null
        if (callback == null) return@registerForActivityResult

        val uris = WebChromeClient.FileChooserParams.parseResult(result.resultCode, result.data)
        callback.onReceiveValue(uris)
    }

    private val assetLoader: WebViewAssetLoader by lazy {
        WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()
    }

    private inner class AndroidBridge {
        @JavascriptInterface
        fun shareJson(filename: String, jsonContent: String) {
            runOnUiThread {
                try {
                    val shareIntent = Intent(Intent.ACTION_SEND).apply {
                        type = "application/json"
                        putExtra(Intent.EXTRA_SUBJECT, filename)
                        putExtra(Intent.EXTRA_TEXT, jsonContent)
                    }
                    startActivity(Intent.createChooser(shareIntent, "Exporter $filename"))
                } catch (_: Exception) {
                    // Ignored if no handler installed
                }
            }
        }

        @JavascriptInterface
        fun shareText(title: String, textContent: String) {
            runOnUiThread {
                try {
                    val shareIntent = Intent(Intent.ACTION_SEND).apply {
                        type = "text/plain"
                        putExtra(Intent.EXTRA_SUBJECT, title)
                        putExtra(Intent.EXTRA_TEXT, textContent)
                    }
                    startActivity(Intent.createChooser(shareIntent, title))
                } catch (_: Exception) {
                    // Ignored if no handler installed
                }
            }
        }

        @JavascriptInterface
        fun printPage() {
            runOnUiThread {
                if (!::webView.isInitialized || isWebViewDestroyed) return@runOnUiThread
                try {
                    val printManager = getSystemService(Context.PRINT_SERVICE) as? PrintManager
                        ?: return@runOnUiThread
                    val jobName = "Physique_Maths_Tle_C_Gabon"
                    val adapter = webView.createPrintDocumentAdapter(jobName)
                    printManager.print(jobName, adapter, PrintAttributes.Builder().build())
                } catch (_: Exception) {
                    // Ignored if print service unavailable
                }
            }
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Enable Chrome DevTools WebView debugging in debug builds only
        val isDebuggable = (applicationInfo.flags and ApplicationInfo.FLAG_DEBUGGABLE) != 0
        WebView.setWebContentsDebuggingEnabled(isDebuggable)

        // Android 15 (SDK 35) edge-to-edge safe inset handling
        WindowCompat.setDecorFitsSystemWindows(window, false)
        window.decorView.setBackgroundColor(Color.parseColor("#020617"))

        webView = WebView(this).apply {
            setBackgroundColor(Color.parseColor("#020617"))
        }
        setContentView(webView)

        ViewCompat.setOnApplyWindowInsetsListener(webView) { view, windowInsets ->
            val insets = windowInsets.getInsets(
                WindowInsetsCompat.Type.systemBars() or WindowInsetsCompat.Type.ime()
            )
            view.updatePadding(
                left = insets.left,
                top = insets.top,
                right = insets.right,
                bottom = insets.bottom
            )
            WindowInsetsCompat.CONSUMED
        }

        // Light icons off => light foreground icons on dark slate-950 system bars
        WindowInsetsControllerCompat(window, webView).apply {
            isAppearanceLightStatusBars = false
            isAppearanceLightNavigationBars = false
        }

        configureWebViewSettings(webView.settings)
        webView.addJavascriptInterface(AndroidBridge(), "AndroidBridge")

        // Serve Vite ES modules cleanly from https://appassets.androidplatform.net/assets/
        // Avoids file:// CORS restrictions on <script type="module"> in Android WebView
        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest?
            ): WebResourceResponse? {
                val url = request?.url ?: return null
                val response = assetLoader.shouldInterceptRequest(url) ?: return null
                val path = url.path?.lowercase().orEmpty()
                val enforcedMime = when {
                    path.endsWith(".js") || path.endsWith(".mjs") -> "text/javascript"
                    path.endsWith(".css") -> "text/css"
                    path.endsWith(".svg") -> "image/svg+xml"
                    path.endsWith(".json") -> "application/json"
                    path.endsWith(".webmanifest") -> "application/manifest+json"
                    path.endsWith(".html") -> "text/html"
                    path.endsWith(".jpg") || path.endsWith(".jpeg") -> "image/jpeg"
                    path.endsWith(".png") -> "image/png"
                    path.endsWith(".webp") -> "image/webp"
                    path.endsWith(".woff2") -> "font/woff2"
                    path.endsWith(".woff") -> "font/woff"
                    path.endsWith(".ttf") -> "font/ttf"
                    path.endsWith(".otf") -> "font/otf"
                    path.endsWith(".mp3") -> "audio/mpeg"
                    path.endsWith(".wav") -> "audio/wav"
                    path.endsWith(".wasm") -> "application/wasm"
                    else -> null
                }
                if (enforcedMime != null && response.mimeType != enforcedMime) {
                    response.mimeType = enforcedMime
                }
                return response
            }

            override fun shouldOverrideUrlLoading(
                view: WebView?,
                request: WebResourceRequest?
            ): Boolean {
                val url = request?.url ?: return false
                val scheme = url.scheme?.lowercase() ?: return false
                if (url.host == "appassets.androidplatform.net") {
                    return false
                }
                // Never pass internal/data/blob/about URLs to external intents
                if (scheme !in listOf("http", "https", "mailto", "tel")) {
                    return false
                }
                return try {
                    startActivity(Intent(Intent.ACTION_VIEW, url))
                    true
                } catch (_: Exception) {
                    false
                }
            }

            @RequiresApi(Build.VERSION_CODES.O)
            override fun onRenderProcessGone(
                view: WebView?,
                detail: RenderProcessGoneDetail?
            ): Boolean {
                if (view != null) {
                    isWebViewDestroyed = true
                    (view.parent as? ViewGroup)?.removeView(view)
                    view.destroy()
                }
                if (!isFinishing && !isDestroyed) {
                    runOnUiThread { recreate() }
                }
                return true
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onShowFileChooser(
                webView: WebView?,
                filePathCallback: ValueCallback<Array<Uri>>?,
                fileChooserParams: FileChooserParams?
            ): Boolean {
                fileUploadCallback?.onReceiveValue(null)
                fileUploadCallback = filePathCallback
                return try {
                    val intent = fileChooserParams?.createIntent() ?: Intent(Intent.ACTION_GET_CONTENT).apply {
                        addCategory(Intent.CATEGORY_OPENABLE)
                        type = "*/*"
                    }
                    fileChooserLauncher.launch(intent)
                    true
                } catch (_: Exception) {
                    fileUploadCallback?.onReceiveValue(null)
                    fileUploadCallback = null
                    false
                }
            }

            override fun onJsAlert(
                view: WebView?,
                url: String?,
                message: String?,
                result: JsResult?
            ): Boolean {
                result?.confirm()
                return true
            }

            override fun onJsConfirm(
                view: WebView?,
                url: String?,
                message: String?,
                result: JsResult?
            ): Boolean {
                result?.confirm()
                return true
            }

            override fun onJsPrompt(
                view: WebView?,
                url: String?,
                message: String?,
                defaultValue: String?,
                result: JsPromptResult?
            ): Boolean {
                result?.cancel()
                return true
            }
        }

        val restored = savedInstanceState != null && webView.restoreState(savedInstanceState) != null
        if (!restored) {
            // Load local compiled assets via WebViewAssetLoader HTTPS origin
            webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")
        }

        // Handle Android hardware/gesture Back button
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (::webView.isInitialized && webView.canGoBack()) {
                    webView.goBack()
                } else {
                    isEnabled = false
                    onBackPressedDispatcher.onBackPressed()
                }
            }
        })
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun configureWebViewSettings(settings: WebSettings) {
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.allowFileAccess = false
        settings.allowContentAccess = true
        @Suppress("DEPRECATION")
        settings.allowFileAccessFromFileURLs = false
        @Suppress("DEPRECATION")
        settings.allowUniversalAccessFromFileURLs = false
        settings.mediaPlaybackRequiresUserGesture = false
        settings.setSupportMultipleWindows(false)
        settings.mixedContentMode = WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE

        settings.useWideViewPort = true
        settings.loadWithOverviewMode = true
        settings.textZoom = 100
        settings.displayZoomControls = false
        settings.builtInZoomControls = true
        settings.setSupportZoom(true)

        settings.cacheMode = WebSettings.LOAD_DEFAULT
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        if (::webView.isInitialized && !isWebViewDestroyed) {
            webView.saveState(outState)
        }
    }

    override fun onResume() {
        super.onResume()
        if (::webView.isInitialized && !isWebViewDestroyed) {
            webView.onResume()
        }
    }

    override fun onPause() {
        if (::webView.isInitialized && !isWebViewDestroyed) {
            webView.onPause()
        }
        super.onPause()
    }

    override fun onDestroy() {
        fileUploadCallback?.onReceiveValue(null)
        fileUploadCallback = null
        if (::webView.isInitialized && !isWebViewDestroyed) {
            isWebViewDestroyed = true
            (webView.parent as? ViewGroup)?.removeView(webView)
            webView.stopLoading()
            webView.destroy()
        }
        super.onDestroy()
    }
}
