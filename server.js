var express = require('express');
var _ = require('underscore');
var url = require('url');

var app = express();

var totalCount = 201;

app.get('/customers', function(req, res) {
	var itemsPerPage = req.query.itemCount;
	var page = req.query.page;
	var count = page * itemsPerPage < totalCount ? itemsPerPage : totalCount % itemsPerPage;  
	res.send({
		totalCount: totalCount,
		customers: _.range(count).map(function(idx) {
			return {
				id: (page - 1) * itemsPerPage + idx + 1,
				firstname: 'Annakin',
				lastname: 'Skywalker',
				phone: '06215/32434235',
				email: 'as@death-star.org',
				address: 'Tatooine'
			};
		})
	});
});
app.get('/customers/:id', function(req, res) {
	res.send({
		id: Number(req.params.id),
		firstname: 'Annakin',
		lastname: 'Skywalker',
		phone: '06215/32434235',
		email: 'as@death-star.org',
		address: 'Tatooine'
	});
});

app.put('/customers/:id', function (req, res) {
	res.send({
		id: Number(req.params.id),
		firstname: 'Annakin updated',
		lastname: 'Skywalker updated',
		phone: '06215/32434235',
		email: 'as@death-star.org',
		address: 'Tatooine'
	});
});

app.get('/', function(req, res) {
	res.sendfile('app/index.html');
});
app.get('*', function(req, res) {
	res.sendfile('app' + req.path);
});

app.listen('9887');