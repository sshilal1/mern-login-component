module.exports = {
  entry: "./app.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
	  rules: [
	    { 
				test: /\.js$/, 
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ['env','react']
				}
			}
	  ]
	}
}