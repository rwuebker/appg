var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var environment = process.env.ENVIRONMENT || 'development';

if(environment === 'production'){
  gulp.task('js', function(){
    gulp.src(['bower_components/angular/angular.min.js',
             'bower_components/angular-ui-router/release/angular-ui-router.min.js',
             'public/javascripts/app.js',
             'public/javascripts/**/*.js'])
      .pipe(concat('appDist.js'))
      .pipe(uglify())
    .pipe(gulp.dest('public/assets'))
  })
}else{
  gulp.task('js', function(){
    gulp.src(['bower_components/angular/angular.min.js',
             'bower_components/angular-ui-router/release/angular-ui-router.min.js',
             'public/javascripts/app.js',
             'public/javascripts/**/*.js'])
      .pipe(concat('appDist.js'))
    .pipe(gulp.dest('public/assets'))
  })
}


gulp.task('watch:js', ['jshint', 'js'], function(){
  gulp.watch('public/javascripts/**/*.js', ['jshint', 'js'])
})

gulp.task('jshint', function() {
  return gulp.src('public/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('start', function(){
  nodemon({
    script: './bin/www'
  })
})

gulp.task('go', ['watch:js', 'start']);