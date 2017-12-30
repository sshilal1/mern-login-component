const express = require('express');
const app = express();

-app.use(express.static('public'));

app.get('/', function(req,res) {
	res.sendFile('index.html', { root : __dirname });
})

app.get('/blue', function(req,res) {
	res.send("blue");
})

app.get('/red', function(req,res) {
	res.send("red");
})

app.listen(3000, function() {
	console.log("listening on port 3000...");
})
