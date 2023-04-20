export default {
  useScss: true,

  htmlminConf: {
    collapseWhitespace: true,
  },

  cssRenameConf: {
    suffix: ".min",
  },

  jsRenameConf: {
    suffix: ".min",
  },

  minifyJsConf: {
    ext: {
      min: ".min.js",
    },
    noSource: true,
  },

  webpackStreamConfig: {
    mode: "production",
    output: {
      filename: "main.js",
    },
  },

  babelConfig: {
    presets: ["@babel/env"],
  },
};
