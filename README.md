# Gulp Automation Projects

This repository showcases various **Gulp**-based workflows for front-end automation. Each subfolder in this repository demonstrates a particular Gulp use case or concept. Explore, modify, and use them as a reference for your own projects.

## Table of Contents

1. [Getting Started](#getting-started)  
2. [Project Structure](#project-structure)  
3. [Project Details](#project-details)  
   - [gulp-01-basic-read-files](#gulp-01-basic-read-files)  
   - [gulp-02-basic-read-files-params](#gulp-02-basic-read-files-params)  
   - [gulp-03-sass-css-preprocessing](#gulp-03-sass-css-preprocessing)  
   - [gulp-04-uglify-minify](#gulp-04-uglify-minify)  
   - [gulp-05-concat-strings-gulp-concat](#gulp-05-concat-strings-gulp-concat)  
4. [Expanding to More Projects](#expanding-to-more-projects)  
5. [License](#license)  

---

## Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/gulp-automation-projects.git
   cd gulp-automation-projects
   ```

2. **Install Dependencies**  
   - If each sub-project has its own `package.json`, navigate into each folder and run `npm install`.  
   - If you have a single root `package.json`, just run `npm install` in the root folder.  

3. **Run Gulp Tasks**  
   - Typically, you will navigate into a specific project folder and run `gulp` (or a custom task name, e.g. `gulp build`, `gulp watch`, etc.).  
   - Example:  
     ```bash
     cd gulp-01-basic-read-files
     gulp
     ```

---

## Project Structure

```plaintext
gulp-automation-projects/
├─ gulp-01-basic-read-files/
├─ gulp-02-basic-read-files-params/
├─ gulp-03-sass-css-preprocessing/
├─ gulp-04-uglify-minify/
├─ gulp-05-concat-strings-gulp-concat/
├─ .gitignore
├─ LICENSE
├─ package-lock.json
├─ package.json
└─ README.md
```

Each `gulp-0x-...` folder contains a Gulp configuration demonstrating a specific feature or task.

---

## Project Details

### gulp-01-basic-read-files
- **Purpose:** Demonstrates reading files with Gulp and performing a simple output task.  
- **Key Points:**
  - Basic introduction to Gulp streams.
  - Uses `gulp.src` and `gulp.dest`.
  - Minimal or no additional plugins.

**How to Use:**
```bash
cd gulp-01-basic-read-files
npm install
gulp
```
The default task reads files from a specified directory and writes them to a destination folder.

---

### gulp-02-basic-read-files-params
- **Purpose:** Similar to the first project but showcases how to pass parameters or options to Gulp tasks.  
- **Key Points:**
  - Demonstrates customizing the source/destination or file handling with environment variables or command-line arguments.
  - Introduces some best practices for parameter handling in Gulp.

**How to Use:**
```bash
cd gulp-02-basic-read-files-params
npm install
# Example usage:
gulp --env production
```
Depending on the parameter passed, the Gulp task may alter its behavior.

---

### gulp-03-sass-css-preprocessing
- **Purpose:** Demonstrates how to compile SASS (SCSS) files into CSS using Gulp.  
- **Key Points:**
  - Utilizes `gulp-sass` (or a similar plugin) for SCSS compilation.
  - Potentially includes auto-prefixing, sourcemaps, or minification.

**How to Use:**
```bash
cd gulp-03-sass-css-preprocessing
npm install
gulp
```
Your SCSS files will be compiled and output to a CSS folder, often with a minified version.

---

### gulp-04-uglify-minify
- **Purpose:** Focuses on JavaScript minification and uglification.  
- **Key Points:**
  - Uses a plugin such as `gulp-uglify`.
  - Possibly integrates Babel transpilation if ES6+ features are used (optional).

**How to Use:**
```bash
cd gulp-04-uglify-minify
npm install
gulp
```
The script(s) in the source folder will be minified and placed in the destination folder.

---

### gulp-05-concat-strings-gulp-concat
- **Purpose:** Shows how to concatenate multiple files (e.g., JavaScript, CSS, or text) into a single file.  
- **Key Points:**
  - Uses `gulp-concat`.
  - Useful for bundling multiple files into one, reducing HTTP requests.

**How to Use:**
```bash
cd gulp-05-concat-strings-gulp-concat
npm install
gulp
```
Multiple input files are merged into a single output file (e.g., `bundle.js` or `all.css`).

---

## Expanding to More Projects

Below are a few suggestions for additional Gulp projects that can be added to this repository. Feel free to create new folders like `gulp-06-...`, `gulp-07-...`, and so on, each demonstrating a unique use case.

- **gulp-06-image-optimization**  
  - Demonstrate using plugins like `gulp-imagemin` to optimize images (PNG, JPG, SVG).  
  - Show how to reduce file sizes without compromising quality.

- **gulp-07-babel-transpile**  
  - Transpile modern JavaScript (ES6/ESNext) to a browser-compatible version using Babel.  
  - Combine with sourcemaps for debugging.

- **gulp-08-browser-sync-livereload**  
  - Automatically refresh the browser on file changes.  
  - Great for rapid development and testing.

- **gulp-09-linting**  
  - Use `gulp-eslint` or similar plugins to lint JavaScript files.  
  - Enforce code quality and style guides.

- **gulp-10-cache-busting**  
  - Add hash strings to file names to prevent caching issues.  
  - Integrate with HTML templating for updating file references automatically.

- **gulp-12-automated-version-bumping**
  - Automatically increments version numbers in `package.json` or other manifest files.
  - Integrates with release workflows, tags git commits, and updates dependency references while bumping the semantic versioning.

---

## License

This repository is covered under the [LICENSE](LICENSE) file included in the root directory. Make sure to read the terms before using or distributing this code.

---

### Contributing

If you’d like to contribute:
1. Fork this repository.
2. Create a new branch for your changes.
3. Submit a pull request with a clear explanation of your additions or changes.

---



