# gulp-07-babel-transpile

A Gulp-powered workflow for transpiling modern JavaScript using Babel with source maps support. This project allows you to write modern ES6+ JavaScript and transpile it into code compatible with older browsers.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Babel Transpilation:** Convert your modern JavaScript (ES6+) into backwards-compatible JavaScript using [Babel](https://babeljs.io/).
- **Source Maps:** Automatically generate source maps to ease the debugging process.
- **Gulp Integration:** Automate the transpilation process using Gulp.

## Installation

Before running the task, make sure you have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository** (or download the project files) and navigate to the project directory.

2. **Install Dependencies:** Use npm or yarn to install the required packages.

Using **npm**:

```bash
npm install gulp gulp-babel gulp-sourcemaps @babel/core @babel/preset-env --save-dev
```

Or using **yarn**:

```bash
yarn add gulp gulp-babel gulp-sourcemaps @babel/core @babel/preset-env --dev
```

## Usage

The project defines a Gulp task in your gulpfile (e.g., `gulpfile.js`) that watches for JavaScript files in the `src` directory. When run, it transpiles the JS files using Babel and generates corresponding source maps in the output directory (`dist`).

### Running the Task

To run the transpilation task, execute the following command:

```bash
npx gulp
```

Alternatively, you can run the specific task directly:

```bash
npx gulp scripts
```

### What Happens During the Task

1. **Source Files:** The task targets all JavaScript files under the `src` directory (`src/**/*.js`).
2. **Source Maps Initialization:** Initializes source map creation.
3. **Babel Transpilation:** Transpiles the JavaScript files using the Babel preset `@babel/preset-env`.
4. **Writing Source Maps:** Generates and writes the source map files alongside the transpiled JavaScript.
5. **Output:** The transpiled files (and their corresponding source maps) are saved into the `dist` directory.

## Configuration

You can configure the task by modifying the `gulpfile.js`. Here are some configurations you might consider:

- **Source Path:** Change the `paths.scripts.src` property to target different directories or file patterns.
- **Destination Path:** Modify `paths.scripts.dest` to set a different output directory.
- **Babel Options:** Customize the Babel configuration within the task. For example, you can add more plugins or presets based on your project's needs.

## Project Structure

Below is an example of what your project structure might look like:

```
gulp-07-babel-transpile/
├── src/
│   └── your-script.js    <-- Your original JavaScript files
├── dist/
│   └── (transpiled files with source maps)
├── gulpfile.js           <-- Contains the Gulp task configuration
├── package.json
└── README.md             <-- This file
```

- **src/**: Contains the source JavaScript files that will be transpiled.
- **dist/**: The folder where the transpiled code along with the source maps is output.
- **gulpfile.js**: Includes the tasks for processing the JavaScript code.
- **package.json**: Manages project dependencies and scripts.

## Contributing

Contributions are welcome! If you have suggestions or bug fixes, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your improvements and commit them with clear commit messages.
4. Open a pull request explaining your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---


