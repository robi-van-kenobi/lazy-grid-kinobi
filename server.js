var express = require('express');
var _ = require('underscore');
var url = require('url');

var app = express();

app.get('/customers', function(req, res) {
	res.send({
		totalCount: 201,
		customers: _.range(50).map(function(idx) {
			return {
				id: (req.query.page - 1) * 50 + idx + 1,
				firstname: 'Annakin',
				lastname: 'Skywalker',
				phone: '06215/32434235',
				email: 'as@death-star.org',
				address: 'Tatooine'
			};
		})
	});
});

app.get('/', function(req, res) {
	res.sendfile('app/index.html');
});
app.get('*', function(req, res) {
	res.sendfile('app' + req.path);
});

app.listen('9887');