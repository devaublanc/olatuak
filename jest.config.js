module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/', 'src/__tests__/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
