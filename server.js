const express = require('express');
const app = express();
var mongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/mdb";
var sha1 = require('sha1');
const cors = require('cors');

var findUser = function(user) {
	return new Promise((resolve,reject) => {
		mongoClient.connect(dbUrl, function(err, db) {
			db.collection("members").findOne({"user": user}, function(err, result) {
				if (result) {
					console.log("Found:", result);
					resolve(result);
				}
				else {
					console.log("Could Not Find:", user);
					reject(`Could Not Find: ${user}`);
				}
			})
		})
	})
}

app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req,res) {
	res.sendFile('index.html', { root : __dirname });
})

app.post('/newuser', function (req,res) {
	var myobj = req.body;
	console.log("Attempting to add new user:", myobj.user);
	findUser(myobj.user)
	.then(function(result) {
		res.send(result);
	})
})

app.post('/finduser', function (req,res) {
	var myobj = req.body;
	console.log("Searching for user name:", myobj.user);
	findUser(myobj.user)
	.then(function(result) {
		if(result) {
			res.send({
				msg: `Found a user with name: ${myobj.user}`,
				stat: true
			})
		}
	})
	.catch(function(err) {
		res.send({
			msg: err,
			stat: false
		})
	})
})

app.post('/login', function (req,res) {
	var myobj = req.body;
	console.log(`User '${myobj.user}' attempting to log in...`);
	var hashedPass = sha1(myobj.password);

	findUser(myobj.user)
	.then(function(result) {
		console.log(`\nhash:${hashedPass}\nresp:${result.pass}`);
		if (hashedPass == result.pass) {
			res.send({
				msg: "Succesfully Logged In",
				stat: true
			})
		}
		else {
			res.send({
				msg: "Bad Password...",
				stat: false
			})
		}
	})
	.catch(function(err) {
		res.send({
			msg: err,
			stat: false
		})
	})
})

app.get('/red', function(req,res) {
	res.send("red");
})

app.listen(4000, function() {
	console.log("listening on port 3000...");
})
