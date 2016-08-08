var gulp = require('gulp'),
	sass = require('gulp-sass'),
	bourbon = require('node-bourbon').includePaths,
	plumber = require("gulp-plumber"),
    browserSync = require("browser-sync");


	// Spin up a server
	gulp.task("browserSync", function() {
	  browserSync({
	    server: {
	      baseDir: ""
	    }
	  })
	});

	//Sass compile stask
	gulp.task('sass', function(){
		gulp.src('sass/**/*.sass')
		.pipe(plumber())
		.pipe(sass({
			includePaths: bourbon
		}).on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({
        stream: true
      }))
	});

// Live reload anytime a file changes
	gulp.task("default", ["browserSync", "sass"], function() {
  		gulp.watch(["sass/**/*.sass"], ["sass"]);
  		gulp.watch("js/**/*.js").on("change", browserSync.reload);
  		gulp.watch("dist/*.html").on("change", browserSync.reload);
});