var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	watch = require('gulp-watch');
	less = require('gulp-less')

gulp.task('watch', function(){
	gulp.watch(['./clientReact/*.js'], ['react'], ['./style/*.less'], ['compile-less'])
});

gulp.task('compile-less', function(){
	gulp.src('./style/*.less').pipe(less()).pipe(gulp.dest('./style/'))
})

gulp.task('react', function(){
	return browserify('./clientReact/main.js')
	.transform('babelify', {presets: ["react"]}).bundle()
	.pipe(source('build.js'))
	.pipe(gulp.dest('./scripts/'))
});



gulp.task('default', ['react','compile-less','watch']);