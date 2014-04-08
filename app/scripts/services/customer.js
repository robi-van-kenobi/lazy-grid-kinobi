angular.module('grid').factory('Customer', function($resource) {
	var resource = $resource('/customers',{}, {
		query: {
			method: 'GET',
			isArray: false
		}
	});
	return resource;
});