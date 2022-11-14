const path = require("path");

module.exports = {
  entry: "./src/scripts/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        //Babel loader
      },
      {
        //HTMl loader
      },
      {
        //File loader
      },
    ],
  },
};

// index.js Entry point
