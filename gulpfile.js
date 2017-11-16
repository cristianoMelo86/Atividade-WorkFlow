var gulp = require("gulp");
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');


// FN Minify HTML
gulp.task('minify', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('sass', function(){
    return gulp.src('./source/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});


// FN Mover arquivo
gulp.task('move-css', function(){
	return gulp.src("./source/scss/*.scss")
		   .pipe(gulp.dest("./dist/css/"));
});



//FN Monitorar arquivo
gulp.task('background', function(){
	gulp.watch('./source/scss/*.scss', ['move-css', 'sass']);
});






gulp.task('um', function(){
	console.log("tarefa um 1");
});

gulp.task('dois', function(){
	console.log("tarefa dois 2");
});


//FN Monitorar arquivo
gulp.task('watch', function(){
	gulp.watch('./source/scss/*.scss', ['um', 'dois' ]);
});

