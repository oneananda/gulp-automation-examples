# gulp-05-concat-strings-gulp-concat

A simple Gulp project demonstrating how to concatenate multiple string/text files using [gulp-concat](https://www.npmjs.com/package/gulp-concat).

## Overview

This project is a lightweight example for using [Gulp](https://gulpjs.com) to automate the process of concatenating multiple string files (e.g., plain text, HTML fragments, or any text-based files) into a single file. It serves as a starting point for learning how to integrate and use Gulp plugins for file manipulation tasks.

## Features

- **Concatenation**: Merges multiple source files into a single output file.
- **Customizable**: Easily modify source and destination paths as needed.
- **Simple Setup**: Minimal configuration required for a quick start with Gulp and gulp-concat.
- **Educational**: Ideal for beginners looking to understand basic Gulp workflows.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/gulp-05-concat-strings-gulp-concat.git
   cd gulp-05-concat-strings-gulp-concat
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

   This will install Gulp, gulp-concat, and any other required packages as specified in `package.json`.

## Usage

To execute the file concatenation task, simply run the default Gulp task:

```bash
gulp
```

This command will:

- Locate all source files specified by the file pattern in the `gulpfile.js` (by default, this may include files in the `src` directory).
- Concatenate them into a single file.
- Output the result to the designated destination folder (typically `dist`).

### Customizing Your Task

If you need to change the file sources or the output destination, edit the `gulpfile.js` accordingly. For example, to modify the source files or the output file name, adjust the following segments:

```javascript
gulp.src('src/**/*.txt')  // Define the pattern for source files
  .pipe(concat('combined.txt'))  // Specify the output file name
  .pipe(gulp.dest('dist'));  // Define the destination directory
```

## Example Gulpfile

Here’s a sample `gulpfile.js` to get you started:

```javascript
const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concatStrings', function() {
  return gulp.src('src/**/*.txt') // Select all .txt files under src
    .pipe(concat('combined.txt')) // Concatenate into combined.txt
    .pipe(gulp.dest('dist')); // Output the file to the dist folder
});

// Default task
gulp.task('default', gulp.series('concatStrings'));
```
