const gulp = require('gulp');

const { src, series, parallel } = require('gulp');

const imagemin = require('gulp-imagemin');

function imgTask() {
  return src('src/images/*').pipe(imagemin()).pipe(gulp.dest('src/images/img'));
}

exports.default = series(parallel(imgTask));
