import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "monster.rrdevours.app",
  appName: "Sunlight Quest",
  webDir: "www",
  server: {
    androidScheme: "https",
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
  cordova: {
    preferences: {
      ScrollEnabled: "false",
      "android-minSdkVersion": "19",
      BackupWebStorage: "none",
      SplashMaintainAspectRatio: "true",
      FadeSplashScreenDuration: "300",
      SplashShowOnlyFirstTime: "false",
      SplashScreen: "screen",
      SplashScreenDelay: "3000",
    },
  },
};

export default config;
