import { test as base } from '@playwright/test';

import { App } from '../app';

export const test = base.extend({
    app: async ({ page }, use) => {
        const app = new App(page);
        await app.open('/find-bugs/');
        await use(app);
    }
});

export { expect } from '@playwright/test';