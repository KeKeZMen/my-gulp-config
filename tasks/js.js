import gulp from "gulp";
import webpackStream from "webpack-stream";
import minify from "gulp-minify";

import path from "../config/path.js";
import app from "../config/app.js";
import babel from "gulp-babel";

const js = () => {
  return gulp
    .src(path.js.src)
    .pipe(webpackStream(app.webpackStreamConfig))
    .pipe(babel(app.babelConfig))
    .pipe(gulp.dest(path.js.dest))
    .pipe(minify(app.minifyJsConf))
    .pipe(gulp.dest(path.js.dest));
};

export default js;
