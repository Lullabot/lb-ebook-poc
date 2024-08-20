# Lullabot eBook Template POC

This project is a proof of concept for generating eBooks using Eleventy, a simple static site generator. The project includes custom configurations and scripts to build and serve the eBooks.

You can visit the [live demo](https://ebooks.lullabot.com/) to see the eBooks in action.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [GitHub Actions](#github-actions)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/lb-ebook-poc.git
cd lb-ebook-poc
npm install
```

## Usage

### Development

To start the development server with live reloading:

```bash
npm start
```

This will watch for changes in Sass and Eleventy files and rebuild the project as needed.

### Build

To build the project for production:

```bash
npm run build
```

This will compile the Sass files and generate the static site using Eleventy.

## Project Structure

The project structure is as follows:

- `src/`: Contains the source files for the eBooks.
  - `ebooks/`: Contains individual eBook directories.
  - `sass/`: Contains Sass files for styling.
  - `_includes/`: Contains reusable templates and partials.
- `_site/`: The output directory for the built site (ignored by Git).
- `.eleventy.js`: Configuration file for Eleventy.
- `package.json`: Contains project metadata and scripts.
- `.github/workflows/BuildGitHubPages.yml`: GitHub Actions workflow for building and deploying the site.

## Scripts

The following scripts are defined in `package.json`:

- `npm start`: Runs the build scripts and starts the development server.
- `npm run build`: Builds the project for production.
- `npm run watch:sass`: Watches for changes in Sass files and compiles them.
- `npm run build:sass`: Compiles Sass files.
- `npm run watch:eleventy`: Starts the Eleventy development server.
- `npm run build:eleventy`: Builds the site using Eleventy.

## GitHub Actions

The project includes a GitHub Actions workflow for building and deploying the site to GitHub Pages. The workflow is defined in `.github/workflows/BuildGitHubPages.yml`:

The build script performs the following tasks:

1. Compiles the Sass files to CSS.
2. Generates the static site using Eleventy.
3. Prepares the project for production deployment by optimizing and bundling the necessary assets.

There is then an Action as part of the workflow that publishes the built site to GitHub Pages.

## QA

The main path for the ebooks mini-site, `ebooks.lullabot.com`, redirects to the main Lullabot site by default. In order to reach an actual ebook, the pattern is:

`ebooks.lullabot.com/ebooks/` + any book title from https://github.com/Lullabot/lb-ebook-poc/tree/main/src/ebooks + `/cover`

e.g. https://ebooks.lullabot.com/ebooks/large-team-challenges/cover/

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
