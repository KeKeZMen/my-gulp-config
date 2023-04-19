import gulp from "gulp";
import concat from "gulp-concat";
import cssimport from "gulp-cssimport";
import autoPrefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";

import path from "../config/path.js";
import app from "../config/app.js"

const css = () => {
  return gulp
    .src(path.css.src, { sourcemaps: true })
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(autoPrefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(gulp.dest(path.css.dest, { sourcemaps: true }))
    .pipe(rename(app.renameConf))
    .pipe(csso())
    .pipe(gulp.dest(path.css.dest, { sourcemaps: true }));
};

export default css;
