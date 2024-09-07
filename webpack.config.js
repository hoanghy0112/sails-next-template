// webpack.config.js
module.exports = {
  // Other configuration options...
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Add '.tsx' and '.ts' here
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Matches both '.ts' and '.tsx' files
        use: "ts-loader", // Or another TypeScript loader
        exclude: /node_modules/,
      },
      // Other rules...
    ],
  },
};
