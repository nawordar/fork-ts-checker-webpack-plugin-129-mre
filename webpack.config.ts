import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

export default {
  mode,
  context: __dirname,
  entry: './src/index.ts',
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
