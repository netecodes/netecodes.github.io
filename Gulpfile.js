var gulp = require('gulp'),
	sass = require('gulp-sass'),
	bourbon = require('node-bourbon').includePaths;

	gulp.task('styles', function(){
		gulp.src('sass/**/*.sass')
		.pipe(sass({
			includePaths: bourbon
		}).on('error', sass.logError))
		.pipe(gulp.dest('./css'))
	});

	//Watch task
	gulp.task('default', function(){
		gulp.watch('sass/**/*.sass',['styles']);
	});