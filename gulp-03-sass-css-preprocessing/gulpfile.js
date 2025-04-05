const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

// sass() will do the work of compiling scss to css
gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss') // Source folder containing Sass files
        .pipe(sass().on('error', sass.logError)) // Compile Sass and log errors
        .pipe(gulp.dest('./css')); // Output folder for CSS files
});

// Watch Sass files for changes
gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});