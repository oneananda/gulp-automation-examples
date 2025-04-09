const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    scripts: {
        src: 'src/**/*.js',
        dest: 'dist/'
    }
};

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init()) // Initialize sourcemap generation
        .pipe(babel({
            presets: ['@babel/preset-env']  // Use the Babel preset for modern JavaScript
        }))
        .pipe(sourcemaps.write('.')) // Write .map files in the same directory as the transpiled files
        .pipe(gulp.dest(paths.scripts.dest));
}

exports.scripts = scripts;
exports.default = scripts;
