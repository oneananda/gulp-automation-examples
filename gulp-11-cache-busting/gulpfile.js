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
