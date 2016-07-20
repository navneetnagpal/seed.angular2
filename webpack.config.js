var webpack = require("webpack");
module.exports = {
  entry: {vendor:"./src/app/vendor.ts",app:"./src/app/main.ts"},
  output: {
    filename: "./public/[name].bundle.js"
  },
  watch:true,
  module: {
   loaders: [
     {
       test: /\.ts$/,
       exclude: /node_modules/,
       loader: 'ts-loader'       
     }
   ]
 },
 plugins: [
    new webpack.optimize.CommonsChunkPlugin( chunkName= "vendor",  filename= "./public/vendor.bundle.js")
  ],
  resolve: {
   extensions: ['', '.js', '.ts']
 }
}