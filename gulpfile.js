var gulp = require("gulp")

// FN Mover arquivo
gulp.task('mover-arquivo', function(){
	return gulp.src("./source/scss/*.scss")
		   .pipe(gulp.dest("./dist/css"));
});


//FN Monitorar arquivo
gulp.task('monitorar-arquivo', function(){
	gulp.watch('./source/scss/*.scss', ['mover-arquivo']);
});