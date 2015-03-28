var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var environment = process.env.ENVIRONMENT || 'development';


gulp.task('js', function(){
  if(environment === 'production'){
    gulp.src(['public/javascripts/vendors/angular/angular.min.js',
             'public/javascripts/vendors/angular-ui-router.min.js',
             'public/app.js',
             'public/javascripts/**/*.js'])
      .pipe(concat('appDist.js'))
      .pipe(uglify())
    .pipe(gulp.dest('public/assets'))

  }else{

    gulp.src(['public/javascripts/vendors/angular/angular.min.js',
             'public/javascripts/vendors/angular-ui-router.min.js',
             'public/app.js',
             'public/javascripts/**/*.js'])
      .pipe(concat('appDist.js'))
      //.pipe(uglify())
    .pipe(gulp.dest('public/assets'))
    
  }
})



gulp.task('watch:js', ['jshint', 'js'], function(){
  gulp.watch('public/**/*.js', ['jshint', 'js'])
})

gulp.task('jshint', function() {
  return gulp.src('public/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('start', function(){
  nodemon({
    script: './bin/www'
  })
})

gulp.task('go', ['watch:js', 'start']);