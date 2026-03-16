# Modular Routing Refactor TODO

## Completed:
- [x] Plan approved by user

## Completed:
- [x] Create modular routes files in haa/src/routes/: index.js, pages.js, navigation.js, app-routes.js, utils.js

## Pending Steps:
1. [x] Create modular routes folder and files.
2. [x] Refactor src/routes.jsx to re-export.
3. [x] Fix JSX in app-routes.js with createElement.
4. [x] Verified App.jsx and DashboardLayout.jsx imports work with routes/index.js (no edits needed).
5. [x] Ran dev server (active).
6. Check for runtime errors (missing components), fix pages.js imports if needed.
7. Cleanup.

   - index.js (re-exports)
   - pages.js (page definitions with fixed imports)
   - navigation.js (navigation items)
   - app-routes.js (appRoutes definition)
   - utils.js (getDashboardPageTitle)

2. Refactor haa/src/routes.jsx to minimal re-export or empty.

3. Update imports in haa/src/App.jsx and haa/src/layouts/DashboardLayout.jsx.

4. Verify all page components exist and fix any broken imports (e.g., ProductsPage to features/client-dashboard/pages/ProductsPage.jsx).

5. Test: Run `cd haa && npm run dev`, check no route errors.

6. Clean up legacy pages/ folders if unused.

7. Mark complete and attempt_completion.

