import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import scssCompiler from "gulp-sass";
import sassSrc from "sass";

const sass = scssCompiler(sassSrc);

import path from "../config/path.js";
import app from "../config/app.js";

const scss = () => {
  return gulp
    .src(path.scss.src, { sourcemaps: true })
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }))
    .pipe(rename(app.renameConf))
    .pipe(csso())
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }));
};

export default scss;
