import Constants from 'expo-constants';

export function getAppVariant() {
  const APP_VARIANT = Constants.expoConfig?.extra?.APP_VARIANT;

  if (!APP_VARIANT) {
    return 'development';
  }

  return APP_VARIANT;
}

export const Env = {
  APP_VARIANT: getAppVariant(),
};
