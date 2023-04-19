import gulp from "gulp";
import browserSync from "browser-sync";

import path from "./config/path.js";

import clear from "./tasks/clear.js";
import html from "./tasks/html.js";
import scss from "./tasks/scss.js";
import js from "./tasks/js.js";
import css from "./tasks/css.js";
import app from "./config/app.js";

browserSync.create();

export const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload);
  gulp.watch(path.js.watch, js).on("all", browserSync.reload);
  app.useScss
    ? gulp.watch(path.scss.watch, scss).on("all", browserSync.reload)
    : gulp.watch(path.css.watch, css).on("all", browserSync.reload);
};

export const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

export const dev = gulp.series(
  clear,
  gulp.parallel(html, app.useScss ? scss : css, js),
  gulp.parallel(watcher, server)
);
