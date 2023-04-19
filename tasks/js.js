import gulp from "gulp";
import webpackStream from "webpack-stream";

import path from "../config/path.js";
import app from "../config/app.js";

const js = () => {
  return gulp
    .src(path.js.src)
    .pipe(webpackStream(app.webpackStreamConfig))
    .pipe(gulp.dest(path.js.dest));
};

export default js;
