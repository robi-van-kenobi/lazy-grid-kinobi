angular.module('grid')
	.controller('customerGridCtrl', function($scope, Customer) {
		$scope.customers = Customer.query();
	});