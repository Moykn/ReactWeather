const path = require("path");
module.exports = {
  entry: path.join(__dirname, "app", "app.jsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react", "stage-0"]
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      __dirname,
      "node_modules",
      "app/components/",
      "public/components/"
    ],
    alias: {
      Main: "app/components/Main",
      Nav: "app/components/Nav",
      Weather: "app/components/Weather",
      WeatherForm: "app/components/WeatherForm",
      WeatherMessage: "app/components/WeatherMessage",
      About: "app/components/About",
      Examples: "app/components/Examples",
      openWeatherMap: "app/api/openWeatherMap"
    },
    extensions: [".json", ".js", ".jsx", ".css"]
  },
  devtool: "source-map",
  devServer: {
    publicPath: path.join("/dist/")
  }
};
