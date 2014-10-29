/**
 *
 * gulpfile
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-28
 * @update 2014-10-29
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var paths = {
  sass: 'sass/site.sass'
};

gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass({ style: 'compressed', noCache: true }))
    .on('error', function (err) { console.log(err); })
    .pipe(gulp.dest('css/'));
});

gulp.task('default', ['sass']);

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});
