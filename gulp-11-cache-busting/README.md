# gulp-11-cache-busting

**gulp-11-cache-busting** is a Gulp plugin that appends unique hash strings to file names to prevent browser caching issues. It also integrates with HTML templating to automatically update asset file references when file names change.

## Features

- **Cache Busting:** Automatically appends hash strings (e.g., `style.1a2b3c4d.css`) to static assets such as CSS and JS files.
- **HTML Integration:** Scans and updates file references in HTML files to ensure they point to the hashed assets.
- **Flexible Options:** Configure hash length, delimiters, and file filtering via options.

## Installation

Install the plugin using npm:

```bash
npm install --save-dev gulp-11-cache-busting
```

Ensure you also have [Gulp](https://gulpjs.com/) installed in your project.

## Usage

Below is an example setup using **gulp-11-cache-busting**.

### Project Structure

```
project/
│
├── gulpfile.js
├── package.json
└── src
    ├── index.html
    ├── css
    │   └── style.css
    └── js
        └── app.js
```

### Example Gulpfile

```js
'use strict';

const gulp = require('gulp');
const cacheBuster = require('gulp-11-cache-busting');

// Process CSS and JS assets by appending hash strings.
gulp.task('cacheBust-assets', () => {
  return gulp.src('src/{css,js}/*.{css,js}', { base: 'src' })
    .pipe(cacheBuster({
      hashLength: 8,      // Optional: length of the hash (default is 8)
      delimiter: '.',     // Optional: delimiter between file name and hash (default is '.')
    }))
    .pipe(gulp.dest('dist'));
});

// Update HTML references automatically.
gulp.task('cacheBust-html', () => {
  return gulp.src('src/*.html')
    .pipe(cacheBuster({
      updateHtml: true    // Enable HTML templating integration
    }))
    .pipe(gulp.dest('dist'));
});

// Default task: First process assets then update HTML.
gulp.task('default', gulp.series('cacheBust-assets', 'cacheBust-html'));
```

### Running the Gulp Tasks

To run the default task, simply execute:

```bash
gulp
```

This command will:
1. Process and rename your CSS/JS files with a hash appended.
2. Update your HTML files to reference the new file names.

## Options

The plugin supports several options:

- **updateHtml** (`Boolean`):  
  When set to `true`, the plugin will find and update asset references in HTML files.

- **hashLength** (`Number`):  
  Specifies the number of characters for the appended hash. The default is `8`.

- **delimiter** (`String`):  
  Sets the character used to separate the original file name and the appended hash. The default is `.`.

- **srcFilter** (`String` or `Array`):  
  A glob pattern (or patterns) that filters the files to be processed.

Example of using custom options:

```js
.pipe(cacheBuster({
  updateHtml: true,
  hashLength: 10,
  delimiter: '-'
}))
```

## License

This project is licensed under the MIT License.
```

---

