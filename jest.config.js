module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/', 'src/__tests__/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
