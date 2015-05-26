var gulp = require("gulp");
var babel = require("gulp-babel");
var del = require('del');

gulp.task('clean:dist', function (cb) {
  del(['dist/**/*'], cb);
});

gulp.task('default', ['clean:dist'], function () {
  return gulp.src(['warena.js'])
    .pipe(babel())
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('test-app'));
});
