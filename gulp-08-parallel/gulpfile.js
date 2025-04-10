// Import required packages
const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');

// Task: clean
// This function uses the 'del' module to remove the 'dist' folder.
function clean() {
    return del(['dist']);
}

// Task: styles
// This task compiles all Sass (.scss) files from the 'src/scss' folder into CSS.
// It also handles errors by logging them.
function styles() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Task: scripts
// This task takes JavaScript files from 'src/js', processes them with Babel
// (for compatibility using the preset "@babel/env"), and writes the output into 'dist/js'.
function scripts() {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'));
}

// Composite task: build
// Here we combine tasks using 'gulp.series' and 'gulp.parallel'.
//  - 'clean' runs first to ensure the 'dist' folder is cleared.
//  - 'styles' and 'scripts' run concurrently via 'gulp.parallel', speeding up the build process.
const build = gulp.series(
    clean,
    gulp.parallel(styles, scripts)
);

// Export tasks so they can be invoked from the command line
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.build = build;
exports.default = build;
