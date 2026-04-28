const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,   // ✅ must
  workers: 2,            // ✅ must

  use: {
    headless: false,
    slowMo: 100,
  },
});