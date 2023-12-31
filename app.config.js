module.exports = {
  name: "Visit Jwalamukhi",
  slug: "visit-jwalamukhi",
  version: "7.0.0",
  orientation: "portrait",
  scheme: "wine-dwine",
  icon: "./assets/Images/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/Images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    entitlements: {
      "com.apple.developer.networking.wifi-info": true,
    },
    bundleIdentifier: "com.bms.dhadhingapp",
    buildNumber: "1.0.0",
    config: {
      googleMapsApiKey: "AIzaSyAa0BjHuGpQ0YtaJuVJC23RcbTvw99jh80",
    },
  },
  android: {
    permissions: [
      "INTERNET",
      "ACCESS_FINE_LOCATION",
      "ACCESS_COARSE_LOCATION",
      "android.permission.ACCESS_COARSE_LOCATION",
      "android.permission.ACCESS_FINE_LOCATION",
      "android.permission.FOREGROUND_SERVICE",
    ],
    adaptiveIcon: {
      foregroundImage: "./assets/Images/adaptiveicon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.bms.dhadhingapp",
    versionCode: 7,
    config: {
      googleMaps: {
        apiKey: "AIzaSyAa0BjHuGpQ0YtaJuVJC23RcbTvw99jh80",
      },
    },
  },
  web: {
    favicon: "./assets/Images/adaptiveicon.png",
    bundler: "metro",
  },
  plugins: [
    "expo-localization",
    [
      "expo-location",
      {
        locationAlwaysAndWhenInUsePermission:
          "Allow Dhadhing-app to use your location.",
      },
    ],
    ["@react-native-google-signin/google-signin"],
  ],
  extra: {
    WEATHER_API_KEY: "f873e2396c79be34489bd8d70b7e5f32",
    "eas": {
      "projectId": "cceb7cd0-30ec-46a8-bdfd-4ada1e78ab0f"
    }
  },
  owner: "samir_kumal",
  sdkVersion: "48.0.0",
  platforms: ["ios", "android", "web"],
};
