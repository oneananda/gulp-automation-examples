const { src, dest, series } = require('gulp');

function copyHTML() {
    return src('source-folder/*.html')
        .pipe(dest('destination-folder'))
}

exports.default = series(copyHTML);