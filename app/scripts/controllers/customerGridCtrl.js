angular.module('grid')
	.controller('customerGridCtrl', function($scope, Customer) {
		$scope.page = 1;
		$scope.loadPage = function(page) {
			$scope.customers = Customer.query({
				page: page
			}, function(data) {
				$scope.totalCount = data.totalCount;
				$scope.customers = data.customers;
				$scope.start = (page - 1) * 50 + 1;
				$scope.end = data.totalCount < page * 50 ? data.totalCount : page * 50;
				$scope.page = page;
				$scope.pages = _.range(Math.ceil(data.totalCount/50));
			});
		};
		$scope.loadPage($scope.page);
	});