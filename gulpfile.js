var gulp = require("gulp");
var scss = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');


// FN Minify HTML
gulp.task('minify', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./code/'));
});


// FN Transforma Scss em Css
gulp.task('scss', function () {
   	 return gulp.src('./source/dist/css/*.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./css'));
	});


// FN Mover arquivo
gulp.task('move-css', function(){
	return gulp.src("./source/scss/*.scss")
		   .pipe(gulp.dest("./dist/css"));
});



//FN Monitorar arquivo
gulp.task('background', function(){
	gulp.watch('./source/scss/*.scss', ['move-css', 'scss' ]);
});


