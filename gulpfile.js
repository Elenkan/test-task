'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
gulp.task('css', function () {
	return gulp.src('source/less/style.less')
	.pipe(plumber())
	.pipe(sourcemap.init())
	.pipe(less())
	.pipe(postcss([
		autoprefixer()]
		))
	.pipe(sourcemap.write('.'))
	.pipe(gulp.dest('source/css'));
}
	);
gulp.task('server', function() {
	server.init({
		server: 'source/'
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
gulp.task('start', gulp.series('css','server'));
