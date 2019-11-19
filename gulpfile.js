const { src, watch, dest, series } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const gulpConcat = require("gulp-concat");

function style() {
  return src("app/scss/index.scss")
    .pipe(sass())
    .pipe(gulpConcat("main.css"))
    .pipe(dest("dist/"));
}

function startBrowserSync() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false
  });
}

function watcher() {
  startBrowserSync();
  watch("app/scss/**/*.scss").on("change", series(style, browserSync.reload));
  watch("index.html").on("change", browserSync.reload);
}

exports.run = watcher;
