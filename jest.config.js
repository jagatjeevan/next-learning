module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    'jest.config.js',
    '<rootDir>/.next/',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['<rootDir>/pages', '**/*.{js,jsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/pages/api',
    '<rootDir>/coverage/',
    'jest.config.js',
    '<rootDir>/.next/',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 33,
      lines: 48,
      statements: 45,
    },
  },
};
