module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', 'jest.config.js'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['<rootDir>/pages', '**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/pages/api', '<rootDir>/coverage/', 'jest.config.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 33,
      lines: 25,
      statements: 40,
    },
  },
};
