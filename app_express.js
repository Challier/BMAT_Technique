var http = require('http');
var express = require('express')
var bodyParser = require('body-parser')

// We have imported all the needed modules, let's build our app that will allow us to answer calls!

var app = express()

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  	extended: true
})); 

app.get('/', function (req, res) {
  	res.send('Hello World!');
  	console.log('One / call was made');
})

app.get('/get_channel_plays', function (req, res) {
  	res.send('Hello World!');
  	console.log('One /get_channel_plays call was made');
})

app.post('/add_play', function (req, res) {
	var performer 	= req.body.performer;
	var title 		= req.body.title;
	var channel 	= req.body.channel;
	var start 		= req.body.start;
	var end 		= req.body.end;
  	res.send('Hello World!');
  	console.log('One /add_play call was made', performer, title, channel, start, end);
})

app.post('/add_channel', function (req, res) {
	var name = req.body.name;
  	res.send('Hello World!');
  	console.log('One /add_channel call was made', name);
})

app.post('/add_performer', function (req, res) {
	var name = req.body.name;
  	res.send('Hello World!');
  	console.log('One /add_performer call was made', name);
})

app.post('/add_song', function (req, res) {
	var performer 	= req.body.performer;
	var title 		= req.body.title;
  	res.send('Hello World!');
  	console.log('One /add_song call was made', performer, title);
})

app.listen(5000, function () {
  	console.log('Example app listening on port 5000!')
})


// Let's setup the MySQL connection

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     	: 'localhost',
  user     	: 'Test',
  password 	: 'Test',
  port	  	: '8880'
});

connection.connect();



