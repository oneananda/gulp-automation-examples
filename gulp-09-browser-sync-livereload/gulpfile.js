const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Paths to watch
const paths = {
    html: './*.html',
    css: './css/**/*.css',
    js: './js/**/*.js',
};

// Task: Serve and watch files
function serve() {
    browserSync.init({
        server: {
            baseDir: './',
        },
    });

    gulp.watch(paths.html).on('change', browserSync.reload);
    gulp.watch(paths.css).on('change', browserSync.reload);
    gulp.watch(paths.js).on('change', browserSync.reload);
}

// Default task
exports.default = serve;
