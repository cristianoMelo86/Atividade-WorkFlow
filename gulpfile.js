var gulp = require("gulp");
var scss = require('gulp-sass');
var cssmin = require('gulp-cssmin');


// FN Transforma Scss em Css
gulp.task('scss', function () {
   	 return gulp.src('./source/scss/*.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./css'));
	});


// FN Mover arquivo
gulp.task('move-css', function(){
	return gulp.src("./source/scss/*.scss")
		   .pipe(gulp.dest("./dist/css"));
});

// FN Minificar Css
gulp.task('min', function () {
    gulp.src('./dist/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/'));
});


//FN Monitorar arquivo
gulp.task('background', function(){
	gulp.watch('./source/scss/*.scss', ['move-css']);
});


