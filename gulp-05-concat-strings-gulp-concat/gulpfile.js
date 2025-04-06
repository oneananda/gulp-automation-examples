// Import required modules
const gulp = require('gulp');
const concat = require('gulp-concat');

// Define a task named 'scripts'
gulp.task('scripts', function () {
    // Specify the source JavaScript files using a glob pattern
    return gulp.src('source-folder/js/*.js')
        // Concatenate them into a file named 'all.js'
        .pipe(concat('all.js'))
        // Output the concatenated file to the 'destination-folder/js' directory
        .pipe(gulp.dest('destination-folder/js'));
});

// Default task to run when you just type 'gulp'
gulp.task('default', gulp.series('scripts'));
