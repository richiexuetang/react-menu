# React Menu Application

A reference React application implementing SPA with CI/CD pipeline.

![homepage screenshot](img/app_homepage.png)

## Getting Started

This version of application is based on React 19.

### Prerequisites

- Clone the repository: https://github.com/richiexuetang/react-menu
- [Install Dependencies w/ PNPM](https://pnpm.io/)

### Running the application

> [!WARNING]
> Node version 18+

- Or run the application from your terminal:

```sh
pnpm i
pnpm dev
```

### Project setup and structure.

- Tech Stack
  - React (UI framework/library)
  - Tailwindcss (styling)
  - shadcn (component library)
  - vite (builder)
  - pnpm (package manager)
  - vitest (unit test and coverage)
  - GitHub Actions (cicd)

> Project structure follows standard vite setup with additional `components` folder for reusable UI components and
> `lib` for utility/helper methods

### CICD Jobs

The jobs (cicd.yml) are automatically triggered on any code changes pushed to `main` branch, and ensure the hosted site gets updated with most current changes.

1. debug-environment: Ensure repo gets checked out properly and correct permissions are set up before deploying since I had trouble with permission issue while deploying app to GitHub pages.
2. build-and-test: Install dependency with pnpm, build project and run test cases. This step can be further expanded upon with type and lint check, coverage report etc.
3. deploy: deploy artifact and host SPA on GitHub pages
