var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var srcmaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

var sassPaths = ["src/scss"];

var paths = {
	dist: "",
	jsDist: "js",
	cssDist: "css",
	jsSrc: "src/js",
	cssSrc: "src/scss"
};



////////////////////////////////////////////////////////////////////
// js operations

gulp.task('process-vendors-js', function () {  
	return gulp.src(paths.jsSrc+"/vendors/*.js")
		.pipe(concat('vendors.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.jsDist));
});

gulp.task('process-site-js', function () {  
	return gulp.src(paths.jsSrc+'/*.js')
		.pipe(srcmaps.init())
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(srcmaps.write('.'))
		.pipe(gulp.dest(paths.jsDist));
});

////////////////////////////////////////////////////////////////////
// css operations

gulp.task('compile-site-sass', function () {  
  return gulp.src(paths.cssSrc+"/main.scss")
  	.pipe(srcmaps.init())
    .pipe(sass({ includePaths: sassPaths, outputStyle: 'compressed' }))    
    .pipe(concat('style.css'))
    .pipe(srcmaps.write('.'))
    .pipe(gulp.dest(paths.cssDist));
});



////////////////////////////////////////////////////////////////////
// watching operations

gulp.task('watch', function () {  
  	livereload.listen();
	gulp.watch(paths.jsSrc	+"/vendors/*.js", ['process-vendors-js']);
	gulp.watch(paths.jsSrc	+"/*.js", ['process-site-js']);
	gulp.watch(paths.cssSrc	+"/*.scss", ['compile-site-sass']);
	gulp.watch(paths.dist	+"/**").on('change', livereload.changed);
});

////////////////////////////////////////////////////////////////////
// wrap up

gulp.task('default', 	['compile-site-sass', 'process-site-js', 'process-vendors-js', 'watch' ]);
gulp.task('all', 		['compile-site-sass', 'process-site-js', 'process-vendors-js' ]);
