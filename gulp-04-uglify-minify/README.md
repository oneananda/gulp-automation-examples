# gulp-04-uglify-minify

This project demonstrates how to use Gulp with the `gulp-uglify` plugin to minify JavaScript files. It automates the process of reducing file size by compressing JavaScript code from a source folder and outputting the minified files to a destination folder.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Gulp CLI](https://gulpjs.com/) installed globally. You can install it with:

  ```bash
  npm install --global gulp-cli
  ```

## Installation

1. Clone the repository or copy the project files to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running:

   ```bash
   npm install gulp gulp-uglify
   ```

## Project Structure

```
gulp-04-uglify-minify/
├── gulpfile.js         # Gulp tasks for minifying JavaScript files
├── package.json        # Project metadata and dependencies
├── source-folder/      # Folder containing the original JavaScript files
└── destination-folder/ # Folder where the minified JavaScript files will be saved
```

## Usage

### Minify JavaScript Files

To run the minification process, simply execute the default Gulp task:

```bash
gulp
```

This command will run the `minify.js` task, which reads all JavaScript files from the `source-folder`, minifies them using `gulp-uglify`, and writes the minified files to the `destination-folder`.

## How It Works

- **gulpfile.js:**
  - The script imports Gulp and the `gulp-uglify` plugin.
  - The `minify.js` task:
    - Reads JavaScript files from `source-folder` (ensure the folder exists and contains `.js` files).
    - Pipes the files through `uglify()` to minify them.
    - Outputs the minified files to `destination-folder`.
  - The default task runs the `minify.js` task using Gulp's `series` method.

> **Note:** There is a minor typo in the source code (`gult.src` should be corrected to `gulp.src`) to ensure proper execution.

## Customization

- **File Paths:**  
  You can modify the source (`source-folder/*.js`) and destination (`destination-folder`) paths in `gulpfile.js` to suit your project structure.
- **Uglify Options:**  
  Customize the minification process by passing options to the `uglify()` function if needed.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Gulp](https://gulpjs.com/) for providing a robust streaming build system.
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) for JavaScript minification.

Happy coding!
