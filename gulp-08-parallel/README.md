# gulp-08-parallel

This project demonstrates how to use Gulp 4's built-in parallel functionality to run tasks concurrently. The example includes a build process that cleans the build directory, compiles Sass files, and transpiles JavaScript files using Babel.

## Overview

The main tasks in this project are:

- **clean**: Deletes the `dist` folder to ensure a fresh build.
- **styles**: Compiles Sass (.scss) files from `src/scss` to CSS and outputs them to `dist/css`.
- **scripts**: Transpiles JavaScript files in `src/js` using Babel and outputs them to `dist/js`.
- **build**: Runs the `clean` task followed by the `styles` and `scripts` tasks in parallel.

This setup illustrates the power of Gulp's task composition to efficiently manage build processes.

## Prerequisites

- [Node.js](https://nodejs.org/) (v10+ recommended)
- [npm](https://www.npmjs.com/)
- Familiarity with basic command line usage

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/gulp-parallel-example.git
