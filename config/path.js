const pathSrc = "../src";
const pathDest = "../public";

export default {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest,
  },

  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css",
  },

  scss: {
    src: pathSrc + "/sass/*.scss",
    watch: pathSrc + "/sass/**/*.scss",
    dest: pathDest + "/css",
  }
};