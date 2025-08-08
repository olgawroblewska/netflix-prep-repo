# Test Automation Self-education repo for Netflix Tudum page 

## Links
- test site https://www.tudum.com
- code repository https://github.com/olgawroblewska/netflix-prep-repo

## Commands

- check `NodeJS` version  
  `node -v`
- new project with Playwright  
  `npm init playwright@latest`
- record tests for given site  
  `npx playwright codegen https://www.tudum.com`
- run tests without browser GUI  
  `npx playwright test`
- run tests with browser GUI  
  `npx playwright test --headed`
- view report  
  `npx playwright show-report`

## Playwright Config modifications

- config file `playwright.config.ts`

## Vitest Config modifications

- config file `vitest.config.ts`

## Visual Studio Code

- Preview: for README.md
- Autosave: in File -> Auto Save
- Timeline: file context menu -> Open Timeline
- Formatting: editor -> context menu -> Format Document

## Playwright snippets

- test:
  ```javascript
  test("test description", async ({ page }) => {});
  ```
- describe:
  ```javascript
  test.describe("Group description", () => {});
  ```
- describe:
  ```javascript
  test.beforeEach( async ({ page }) => {});
  ```
- running one test: `test.only`