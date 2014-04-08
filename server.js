var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.sendfile('app/index.html');
});
app.get('*', function(req, res) {
	res.sendfile('app' + req.path);
});

app.listen('9887');