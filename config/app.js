export default {
  useScss: true,
  
  htmlminConf: { collapseWhitespace: true },

  cssRenameConf: { suffix: ".min" },

  webpackStreamConfig: {
    mode: "development",
    output: {
      filename: "main.js",
    },
  },
};
