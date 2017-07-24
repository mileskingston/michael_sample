'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify');
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

gulp.task('sass', function () {
  return gulp.src('./styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
});

gulp.task('autoprefixer', () =>
    gulp.src('./styles/main.css')
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
 
gulp.task('sass:watch', function () {
  gulp.watch('./styles/sass/*.scss', ['sass']);
});