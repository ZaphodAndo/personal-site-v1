var gulp = require('gulp');
var sass = require('gulp-sass');
var wait = require('gulp-wait');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
    .pipe(wait(200))
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('app/css'))
});

gulp.task('watch',function() {
    gulp.watch('app/scss/**/*.scss',gulp.series('sass'));
});