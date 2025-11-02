import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.polydecypher.copticlearn",
  appName: "CopticLearn",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    // Uncomment for development with live reload:
    // url: "http://localhost:9583",
    // cleartext: true,
    androidScheme: "https",
    iosScheme: "capacitor",
  },
  ios: {
    contentInset: "automatic",
    scrollEnabled: true,
    allowsLinkPreview: false,
    // Status bar configuration
    statusBarStyle: "default",
    // Splash screen configuration
    splashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#003366",
      showSpinner: false,
    },
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
    // Status bar configuration
    statusBarColor: "#003366",
    // Splash screen configuration
    splashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#003366",
      showSpinner: false,
    },
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#003366",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: "default",
      backgroundColor: "#003366",
    },
    Keyboard: {
      resize: "body",
      style: "dark",
      resizeOnFullScreen: true,
    },
  },
};

export default config;
