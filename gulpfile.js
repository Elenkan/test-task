'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const del = require('del');

gulp.task('css', () => {
	return gulp.src('source/less/style.less')
	.pipe(plumber())
	.pipe(sourcemap.init())
	.pipe(less())
	.pipe(postcss([
    autoprefixer()]))
  .pipe(csso())
  .pipe(rename('style.min.css'))
	.pipe(sourcemap.write('.'))
	.pipe(gulp.dest('build/css'));
}
	);

gulp.task('images', () => {
  return gulp.src('source/img/**/*.{png,svg}')
  .pipe(imagemin([
    imagemin.svgo()]))
  .pipe(gulp.dest('build/img'));
});

gulp.task('server', () => {
	server.init({
		server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
	});

	gulp
  .watch('source/less/**/*.less', gulp.series('css'))
  .on('change', server.reload);
	gulp
  .watch('source/*.html')
  .on('change', server.reload);
  gulp
  .watch('source/js/**/*.js')
  .on('change', server.reload);
});

gulp.task('copy', () => {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/js/**',
    'source/index.html'
    ],
    {
      base: 'source'
    })
  .pipe(gulp.dest('build'));
});

gulp.task('clean', () => {
  return del('build');
});

gulp.task('build', gulp.series('clean', 'copy', 'images', 'css'));
gulp.task('start', gulp.series('build','server'));
