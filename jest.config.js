// jest.config.js

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 60,
      lines: 100,
      functions: 100,
    },
  },
};
