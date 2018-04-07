var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');

var sassDest = './dist/css';
var sassSrc = './src/styles/*.scss';
var jsDest = './dist/scripts';
var jsSrc = './src/scripts/**/*.js';

gulp.task('log', function() {
    gutil.log('== My Log Task ==')
});

gulp.task('sass', function() {
    gulp.src(sassSrc)
        .pipe(sass(
            {
                style: 'expanded',
                sourceComments: true,
            }
        ))
        .on('error', gutil.log)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            grid: false,
        }))
        .pipe(gulp.dest(sassDest))
});

gulp.task('js', function () {
    gulp.src(jsSrc)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(jsDest))
});

gulp.task('watch', function () {
    gulp.watch(sassSrc, ['sass']);
    gulp.watch(jsSrc, ['js']);
});
