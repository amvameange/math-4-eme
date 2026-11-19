/// <reference types="vite/client" />

interface AndroidBridgeInterface {
  shareJson?: (filename: string, jsonContent: string) => void;
  shareText?: (title: string, textContent: string) => void;
  printPage?: () => void;
}

interface Window {
  AndroidBridge?: AndroidBridgeInterface;
}
