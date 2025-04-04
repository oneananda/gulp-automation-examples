const { src, dest, series } = require('gulp');
const minimist = require('minimist');

const options = minimist(process.argv.slice(2), {
    string: 'fileType',
    default: { fileType: '*' }
});

function copyFiles() {
    let pattern;

    if (options.fileType === '*' || options.fileType === '*.*') {
        pattern = 'source-folder/*.*';
    } else {
        pattern = `source-folder/*.${options.fileType}`;
    }
    console.log(`Copying files using pattern: ${pattern}`);

    return src(pattern)
        .pipe(dest('destination-folder'));
}

exports.default = series(copyFiles);

// gulp --fileType=txt
// gulp --fileType=html
// gulp --fileType=htmls -- will not copy 