# Sudoku Reflexcel

A modern React + TypeScript Sudoku puzzle generator and solver, deployable as a static site (e.g., GitHub Pages).

## Features
- Generate Sudoku puzzles by difficulty: Very Easy, Easy, Medium, Hard, Very Hard
- Solve your own Sudoku puzzles instantly
- Clean, responsive UI with Material-UI
- Ready for static deployment (GitHub Pages)

## Local Development
```sh
npm install
npm run dev
```

## Build for Production
```sh
npm run build
```
The output will be in the `dist/` folder.

## Deploy to GitHub Pages
- Push to the `main` branch. GitHub Actions will build and deploy automatically to the `gh-pages` branch.
- Ensure your repository is configured to serve from the `gh-pages` branch (Settings > Pages).

## Customization
- Update `vite.config.ts` base path if your repo name changes.

---

© 2026 Sudoku Reflexcel
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
