const path = require("path");

module.exports.next = {
  // Sails integration options
  api: {
    // Prefix for all Sails API routes
    prefix: "/api",
  },

  // Next.js instance options. Passed to `next()`.
  server: {
    // Next.js root directory
    dir: ".",
    // Dev mode. Is overridden by `process.env.NODE_ENV !== 'production'`
    dev: false,
    // Hide error messages
    quiet: false,
    // Equivalent to a `next.config.js` file
    conf: {
      webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
      ) => {
        console.log({
          config,
          buildId,
          dev,
          isServer,
          defaultLoaders,
          nextRuntime,
          webpack,
        });
        console.log(config.module.rules[0]);
        return {
          ...config,
          resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", "..."], // Add '.tsx' and '.ts' here
          },
          module: {
            rules: [
              // {
              //   test: /\.tsx?$/, // Matches both '.ts' and '.tsx' files
              //   use: "ts-loader", // Or another TypeScript loader
              //   exclude: /node_modules/,
              // },
              ...config.module.rules,
              {
                test: /\.tsx?$/,
                include: ["D:\\Innorix\\Experimental\\my-project"],
                exclude: /node_modules/,
                use: {
                  loader: "next-babel-loader",
                  options: { dev: true, isServer: true },
                },
              },
              // Other rules...
            ],
          },
        };
      },
    },
  },
};
