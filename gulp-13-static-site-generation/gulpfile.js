const gulp = require('gulp');
const pug = require('gulp-pug');
const nunjucks = require('gulp-nunjucks');
const markdown = require('gulp-markdown');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Convert Markdown to HTML
gulp.task('markdown', () => {
    return gulp.src('src/md/**/*.md') // Source markdown files
        .pipe(markdown()) // Convert to HTML
        .pipe(gulp.dest('dist')); // Output to dist folder
});

// Convert Pug to HTML
gulp.task('pug', () => {
    return gulp.src('src/pug/**/*.pug') // Source pug files
        .pipe(pug({ pretty: true })) // Convert to HTML
        .pipe(gulp.dest('dist')); // Output to dist folder
});

// Convert Nunjucks to HTML
gulp.task('nunjucks', () => {
    return gulp.src('src/nunjucks/**/*.njk') // Source Nunjucks templates
        .pipe(nunjucks.compile()) // Compile Nunjucks to HTML
        .pipe(gulp.dest('dist')); // Output to dist folder
});

// Compile Sass to CSS and minify
gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.scss') // Source Sass files
        .pipe(sass().on('error', sass.logError)) // Compile Sass
        .pipe(cleanCSS()) // Minify CSS
        .pipe(gulp.dest('dist/css')); // Output to dist/css folder
});

// Minify JS files
gulp.task('scripts', () => {
    return gulp.src('src/js/**/*.js') // Source JS files
        .pipe(uglify()) // Minify JS
        .pipe(gulp.dest('dist/js')); // Output to dist/js folder
});

// Compress images
gulp.task('images', () => {
    return gulp.src('src/images/**/*') // Source images
        .pipe(imagemin()) // Compress images
        .pipe(gulp.dest('dist/images')); // Output to dist/images folder
});

// Serve and watch for changes
gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('src/md/**/*.md', gulp.series('markdown')).on('change', browserSync.reload);
    gulp.watch('src/pug/**/*.pug', gulp.series('pug')).on('change', browserSync.reload);
    gulp.watch('src/nunjucks/**/*.njk', gulp.series('nunjucks')).on('change', browserSync.reload);
    gulp.watch('src/sass/**/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js', gulp.series('scripts')).on('change', browserSync.reload);
    gulp.watch('src/images/**/*', gulp.series('images')).on('change', browserSync.reload);
});

// Default task to run all tasks
gulp.task('default', gulp.series(
    gulp.parallel('markdown', 'pug', 'nunjucks', 'sass', 'scripts', 'images'),
    'serve'
));
 