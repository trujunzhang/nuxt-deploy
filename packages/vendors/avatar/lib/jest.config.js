module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  testMatch: ['**/*.test.ts?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true
}
