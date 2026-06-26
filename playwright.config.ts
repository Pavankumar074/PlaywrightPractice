import {defineConfig,devices} from '@playwright/test';
import {defineBddConfig} from 'playwright-bdd';
import dotenv from 'dotenv';

const environment = process.env.ENVIRONMENT || 'qa';
dotenv.config({
  path: `.env.${environment}`,
});

export const bddConfig = defineBddConfig({
  features: 'src/features/**/*.feature',
  steps: ['src/steps/**/*.ts','src/fixtures/**/*.ts']

});

export default defineConfig({
  fullyParallel:true,
  testDir: bddConfig,
  retries: 2,
  reporter: [['html'],['allure-playwright']],
  use: {
    headless: process.env.CI? true : false,
    baseURL: process.env.BASE_URL,
    video: 'off',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },  
    // }
  ]
});
