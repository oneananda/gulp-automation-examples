// gulpfile.mjs
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export function optimizeImages() {
    return gulp.src('source-folder/images/**/*.{png,jpg,jpeg,svg}')
        .pipe(imagemin([
            // Optimize JPEG images
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            // Optimize PNG images
            imagemin.optipng({ optimizationLevel: 5 }),
            // Optimize SVG files
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('destination-folder/images'));
}

export default optimizeImages;
