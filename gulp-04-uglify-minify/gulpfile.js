const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minify.js', function () {
    return gult.src('source-folder/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('destination-folder'));
});

gulp.task('default', gulp.series('minify.js'));