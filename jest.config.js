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
      statements: 100,
      branches: 65,
      lines: 100,
      functions: 100,
    },
  },
  collectCoverageFrom: [
    "!src/index.ts",
    "!src/__mock__/**/*.*",
    "!dist/**/*.{js,jsx,ts,tsx}",
    "!data/**/*.*",
    "!coverage/**/*.*",
    "!jest.config.js",
  ],
};
