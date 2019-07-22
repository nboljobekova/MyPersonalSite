var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp
    .src('./sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('pug', function () {
  return gulp
    .src('./pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist/html'));
});

gulp.task('pug:watch', function () {
  gulp.watch('./pug/**/*.pug', gulp.series('pug'));
});

