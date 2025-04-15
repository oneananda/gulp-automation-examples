// Import required modules
const gulp = require('gulp');
const bump = require('gulp-bump');         // For updating version numbers in JSON files
const git = require('gulp-git');           // For committing changes with Git
const tagVersion = require('gulp-tag-version');  // For tagging the repository with the version number

// Task: bump version number in package.json
gulp.task('bump', function () {
  // The 'type' option can be 'patch', 'minor', or 'major'
  return gulp.src('./package.json')
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest('./'));
});

// Task: commit the changed files (e.g., package.json)
gulp.task('commit', function () {
  // Commit the updated package.json with a commit message
  return gulp.src(['package.json'])
    .pipe(git.commit('chore: bump version'));
});

// Task: tag the commit with the new version number
gulp.task('tag', function () {
  // Ensure you read the new version from package.json
  return gulp.src('package.json')
    .pipe(tagVersion({ prefix: 'v' })); // The tag will be like v1.0.1 if package.json has version 1.0.1
});

// Task: release - run bump, commit, and tag sequentially
gulp.task('release', gulp.series('bump', 'commit', 'tag'));
