import { Given, Then } from '../fixtures/fixtures';  ;
import {AccessibilityChecker} from '../utils/accesablity';

Then('Login page should pass accessibility validation', async ({page}) => {
    const result = await AccessibilityChecker.scanPageForAccessibility(page);
});