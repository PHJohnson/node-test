var express = require('express');
//var db = require('mongojs').connect('test', ['customers', 'real_time19', 'client_lookup']);
//EDIT
var app = express.createServer();
var io = require('socket.io').listen(app);
var mu = require('mu2');


mu.root = __dirname + 'public/templates';

app.configure(function() {
   app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res){
   res.send("Hello Alex!");
});

//test
app.listen(5000);
console.log('server started');