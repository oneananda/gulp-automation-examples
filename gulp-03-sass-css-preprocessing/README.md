# gulp-03-sass-css-preprocessing

This project demonstrates how to use Gulp for Sass to CSS preprocessing. The setup compiles all `.scss` files from the `./scss` folder into CSS files in the `./css` folder and includes a watch task to automatically recompile files when changes are detected.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Gulp CLI](https://gulpjs.com/) installed globally. Install it using:
  
  ```
  npm install --global gulp-cli
  ```

## Installation

1. Clone the repository or copy the project files to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running:

   ```
   npm install gulp gulp-sass sass
   ```

    ```
    npm install gulp gulp-sass sass --save-dev
    ```

## Project Structure

```
gulp-03-sass-css-preprocessing/
├── gulpfile.js       # Gulp task definitions for Sass preprocessing
├── package.json      # Project metadata and dependencies
├── scss/             # Source folder containing Sass (.scss) files
└── css/              # Output folder for compiled CSS files
```

## Usage

### Compile Sass to CSS

To compile your Sass files into CSS once, run:

```
gulp sass
```

This command processes all `.scss` files in the `scss` directory and outputs the compiled CSS into the `css` directory.

### Watch for Changes

To automatically recompile Sass files when they change, run:

```
gulp sass:watch
```

This task monitors the `scss` folder for any changes and triggers the `sass` task automatically.

## How It Works

- **gulpfile.js:**
  - Uses `gulp` for task automation.
  - Utilizes `gulp-sass` (with the `sass` compiler) to transform Sass files into CSS.
  - The `sass` task:
    - Reads `.scss` files from the `./scss` folder.
    - Compiles them into CSS, logging any errors encountered.
    - Writes the resulting CSS files to the `./css` folder.
  - The `sass:watch` task watches for changes in the `./scss` folder and reruns the `sass` task when modifications occur.

## Customization

- **File Paths:**  
  Modify the source (`./scss/**/*.scss`) and destination (`./css`) paths in the `gulpfile.js` to suit your project structure.
- **Error Handling:**  
  The setup uses `sass.logError` to log errors during the compilation process, ensuring smooth debugging.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Gulp](https://gulpjs.com/)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [Sass](https://sass-lang.com/)

Happy coding!