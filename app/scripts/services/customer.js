angular.module('grid').factory('Customer', function($resource) {
	var resource = $resource('/customers/:id',{}, {
		query: {
			method: 'GET',
			isArray: false
		},
		'save':     {method:'PUT'},
		'insert':   {method:'POST'}
	});
	return resource;
});