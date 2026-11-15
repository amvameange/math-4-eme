/// <reference types="vite/client" />

interface AndroidBridgeInterface {
  shareJson?: (filename: string, jsonContent: string) => void;
  printPage?: () => void;
}

interface Window {
  AndroidBridge?: AndroidBridgeInterface;
}
