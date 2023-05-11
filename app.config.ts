import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'olatuak',
  slug: 'olatuak',
  scheme: 'olatuak',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#2a2c37',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.bdevaublanc.olatuak',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#2a2c37',
    },
    package: 'com.bdevaublanc.olatuak',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: 'c4c58d88-f165-44f8-9ee0-0cb5f0666486',
    },
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  updates: {
    url: 'https://u.expo.dev/c4c58d88-f165-44f8-9ee0-0cb5f0666486',
  },
});
