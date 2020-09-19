const allPathIgnorePatterns = [
  '<rootDir>/.check/',
  '<rootDir>/.circleci/',
  '<rootDir>/.idea/',
  '<rootDir>/.next/',
  '<rootDir>/.vscode/',
  '<rootDir>/config/',
  '<rootDir>/coverage/',
  '<rootDir>/jest/',
  '<rootDir>/production-server/',
  '<rootDir>/production-cloud/',
  '<rootDir>/public/',
  '<rootDir>/static/',
  '<rootDir>/build/',
  '<rootDir>/dist/',
  '<rootDir>/styles/',
  '<rootDir>/node_modules/'
]

module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  testMatch: ['**/*.test.ts?(x)'],
  globals: {},
  testPathIgnorePatterns: allPathIgnorePatterns,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: allPathIgnorePatterns
}
