const gulp = require('gulp');
const eslint = require('gulp-eslint');

// Lint task: Scans JavaScript files for errors and style issues.
function lint() {
    return gulp.src('src/js/**/*.js')
        .pipe(eslint())          // Run ESLint.
        .pipe(eslint.format())   // Format the results and output to the console.
        .pipe(eslint.failAfterError());  // Fail the task if an error is found.
}

// Expose the lint task to be run with `gulp lint`
exports.lint = lint;
exports.default = lint;
