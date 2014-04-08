angular.module('grid')
	.controller('customerGridCtrl', function($scope) {
		$scope.customers = [
			{
				firstname: 'Annakin',
				lastname: 'Skywalker',
				phone: '06215/32434235',
				email: 'as@death-star.org',
				address: 'Tatooine'
			},
			{
				firstname: 'Annakin',
				lastname: 'Skywalker',
				phone: '06215/32434235',
				email: 'as@death-star.org',
				address: 'Tatooine'
			}
		]
	});