import gulp from "gulp";
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";

import path from "../config/path.js";
import app from "../config/app.js";

const html = () => {
  return gulp
    .src(path.html.src)
    .pipe(fileInclude())
    .pipe(htmlmin(app.htmlminConf))
    .pipe(gulp.dest(path.html.dest));
};

export default html;
