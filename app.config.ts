import { ExpoConfig, ConfigContext } from 'expo/config';

const IS_PRODUCTION = process.env.APP_VARIANT === 'production';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: 'olatuak',
  scheme: 'olatuak',
  version: '1.0.0',
  orientation: 'portrait',
  icon: IS_PRODUCTION ? './assets/icon.png' : './assets/icon-dev.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#2a2c37',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: getBundleName(),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#2a2c37',
    },
    package: getBundleName(),
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    API_URL: process.env.API_URL,
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

const getAppName = () => {
  switch (process.env.APP_VARIANT) {
    case 'development':
      return 'Olatuak (Dev)';
    case 'preview':
      return 'Olatuak (Preview)';
    default:
      return 'Olatuak';
  }
};

const getBundleName = () => {
  switch (process.env.APP_VARIANT) {
    case 'development':
      return 'com.bdevaublanc.olatuak.dev';
    case 'preview':
      return 'com.bdevaublanc.olatuak.preview';
    default:
      return 'com.bdevaublanc.olatuak';
  }
};
