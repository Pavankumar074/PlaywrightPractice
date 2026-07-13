import {Page}  from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export class AccessibilityChecker {
    static async scanPageForAccessibility(page: Page) {
        const result = await new AxeBuilder({ page }).analyze();
        if (result.violations.length > 0) {
            console.error('Accessibility violations found:', result.violations);   
        }
        return result;
    }
}