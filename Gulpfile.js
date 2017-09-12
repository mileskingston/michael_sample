'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
  connect = require('gulp-connect');
	// uglify = require('gulp-uglify'),
 //    webserver = require('gulp-webserver');
	// pump = require('pump');

// gulp.task('default', () =>
// 	gulp.src('./styles/sass/*.scss')
//     	.pipe(sass().on('error', sass.logError))
    
//     gulp.src('./styles/main.css')
//     	.pipe(autoprefixer({
//         	browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./css'))
// );

gulp.task('default', ['connect', 'sass:watch']);

gulp.task('sass', function () {
  return gulp.src('styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('styles/css'));
});

gulp.task('autoprefixer', () =>
    gulp.src('styles/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./styles/css'))
);
 
// gulp.task('compress', function (cb) {
//   pump([
//         gulp.src('./js/*.js'),
//         uglify(),
//         gulp.dest('./js')
//     ],
//     cb
//   );
// });
 
// gulp.task('webserver', function() {
//   gulp.src('app')
//     .pipe(webserver({
//       livereload: true,
//       directoryListing: false,
//       open: true
//     }));
// });

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});
 
gulp.task('sass:watch', function () {
  gulp.watch('styles/scss/**/*.scss', ['sass']);
  gulp.watch(['./app/*.html'], ['html']);
});