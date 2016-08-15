const gulp = require('gulp'),
			sass = require('gulp-sass'),
			bourbon = require('node-bourbon').includePaths,
			plumber = require("gulp-plumber"),
			uglify = require("gulp-uglify"),
			cleanCSS = require('gulp-clean-css'),
			sourcemaps = require("gulp-sourcemaps"),
			imagemin = require("gulp-imagemin"),
			htmlmin = require("gulp-htmlmin"),
	    bs = require("browser-sync").create();

	//Stars the server
	bs.init({
		server: "./dist"
	});


	//Optimize Images
	gulp.task('images', () =>
		gulp.src('src/assets/**/*')
				.pipe(plumber())
				.pipe(imagemin())
				.pipe(gulp.dest('dist/assets'))
				.pipe(bs.stream())
	);

	//HTML compile Task
	gulp.task('html', () =>
		gulp.src('src/*.html')
				.pipe(plumber())
				.pipe(htmlmin({collapseWhitespace: true}))
				.pipe(gulp.dest('dist'))
				.pipe(bs.stream())
	);

	//Sass compile Task
	gulp.task('sass', () =>
		gulp.src('src/sass/style.sass')
				.pipe(plumber())
				.pipe(sourcemaps.init())
					.pipe(sass({
						includePaths: bourbon
					}).on('error', sass.logError))
					.pipe(cleanCSS())
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('dist/css'))
				.pipe(bs.stream())
	);

	//JavaScript compile stask
	gulp.task('scripts', () =>
		gulp.src('src/js/app.js')
		.pipe(plumber())
		.pipe(sourcemaps.init())
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'))
		.pipe(bs.stream({once: true}))
	);


// Live reload anytime a file changes
	gulp.task("default", ["html","images","sass","scripts"], () => {
  		gulp.watch(["src/sass/**/*.sass", "src/sass/**/*.scss"], ["sass"]);
			gulp.watch(["src/js/**/*.js"], ["scripts"]);
			gulp.watch(["src/assets/**/*"], ["images"]);
			gulp.watch(["src/*.html"], ["html"]);
});
