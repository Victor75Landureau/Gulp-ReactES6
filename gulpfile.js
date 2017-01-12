//Declarations, dependencies
//----------------------------------------------------
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

var dependencies = [
	'react',
  	'react-dom'
];

// Gulp tasks
//----------------------------------------------------


gulp.task('build', function () {
    return browserify({entries: './app/jsx/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);