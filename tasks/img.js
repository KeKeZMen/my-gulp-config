import gulp from "gulp";
import imagemin from "gulp-imagemin"

import path from "../config/path.js";
import app from "../config/app.js"

const img = () => {
  return gulp
    .src(path.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(path.img.dest));
};

export default img;
