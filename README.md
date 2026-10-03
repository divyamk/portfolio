# React portfolio prototype

An early personal website built in 2022 with React, JavaScript, CSS, and Create React App. The application is organized into About, Projects, Resume, and Contact sections, with reusable navigation and project-card components.

**For my current work, start with my [engineering portfolio](https://github.com/divyamk/engineering-portfolio) or [GitHub profile](https://github.com/divyamk).**

## What this repository demonstrates

- A component-based single-page layout.
- Separation of page sections and reusable UI components.
- Custom CSS and section navigation using `react-scroll`.

## Status

This is a historical learning project. Some project cards still contain placeholders, and the biography reflects when the site was created. It is preserved as an early React example rather than a current professional website.

## Local development

Install a Node.js version compatible with the included Create React App toolchain, then:

```sh
npm ci
npm start
```

The development server opens at `http://localhost:3000`. To generate a production bundle:

```sh
npm run build
```

The dependencies are from an older toolchain. They have not been modernized or revalidated for a current deployment as part of this documentation update.

## Code map

| Path | Purpose |
| --- | --- |
| `src/App.js` | Composes the page sections |
| `src/components/Navbar` | Section navigation |
| `src/components/Project` | Reusable project card |
| `src/pages` | About, Projects, Resume, and Contact content |

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
