import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: 'olatuak',
  scheme: 'olatuak',
  version: '1.0.2',
  orientation: 'portrait',

  icon: getAppIcon(),
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#2a2c37',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    buildNumber: '2',
    supportsTablet: true,
    bundleIdentifier: getBundleName(),
  },
  android: {
    versionCode: 2,
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
    appVariant: process.env.APP_VARIANT,
    eas: {
      projectId: 'c4c58d88-f165-44f8-9ee0-0cb5f0666486',
    },
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  updates: {
    url: 'https://u.expo.dev/c4c58d88-f165-44f8-9ee0-0cb5f0666486',
  },
});

const getAppName = () => {
  switch (process.env.APP_VARIANT) {
    case 'development':
      return 'Olatuak (dev)';
    case 'staging':
      return 'Olatuak (staging)';
    default:
      return 'Olatuak';
  }
};

const getAppIcon = () => {
  switch (process.env.APP_VARIANT) {
    case 'development':
      return './assets/icon-dev.png';
    case 'staging':
      return './assets/icon-staging.png';
    default:
      return './assets/icon.png';
  }
};

const getBundleName = () => {
  switch (process.env.APP_VARIANT) {
    case 'development':
      return 'com.bdevaublanc.olatuak.dev';
    case 'staging':
      return 'com.bdevaublanc.olatuak.staging';
    default:
      return 'com.bdevaublanc.olatuak';
  }
};
