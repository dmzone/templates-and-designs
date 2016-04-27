var gulp = require('gulp'),
    critical = require('critical'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin');

gulp.task('styles', function(){
  return gulp.src('src/css/*.css')
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function(){
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function(){
  return gulp.src('src/images/*')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('critical', function (cb) {
  critical.generate({
      inline: true,
      src: 'index.html',
      dest: 'dist/index.html',
      width: 1300,
      height: 900
  });
});

gulp.task('default', ['styles', 'scripts', 'images', 'html']);