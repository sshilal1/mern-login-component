var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
	  loaders: [
	    { 
				test: /\.js$/, 
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ['env','react']
				}
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
	  ]
	},
	watch: true,
	plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    })
  ]
}