var gulp       = require('gulp'),
    rename     = require('gulp-rename'),
    jshint     = require('gulp-jshint'),
    browserify = require('browserify'),
    phantomjs  = require('gulp-mocha-phantomjs');

// Lint Tasks
gulp.task('lint-client', function() {
  return gulp.src('./client/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function() {
  return gulp.src('./test/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', function() {});

