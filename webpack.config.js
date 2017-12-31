module.exports = {
  entry: "./app.js",
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
	watch: true
}