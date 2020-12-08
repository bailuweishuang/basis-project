const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const gulpLoadPlugins = require('gulp-load-plugins');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const $ = gulpLoadPlugins();

// https://blog.csdn.net/weixin_41305441/article/details/102481705

function js() {
  return src(['src/components/**/*.js', 'src/components/**/*.jsx'])
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('output/'));
}

function cleanF() {
  return src('output/', { read: false }).pipe(clean());
}

function cass() {
  return src('src/components/**/*.scss')
    .pipe(sass())
    .pipe($.autoprefixer())
    .pipe(dest('output/'));
}

exports.default = series(cleanF, js, cass);
