const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", (done) => {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./css"));

  done();
});

gulp.task("watch", (done) => {
  gulp.watch("sass/**/*.scss", gulp.series("sass"));
  done();
});
