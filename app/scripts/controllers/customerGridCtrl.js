angular.module('grid')
	.controller('customerGridCtrl', function($scope, Customer) {
		$scope.itemCount = 50;
		$scope.page = 1;
		$scope.loadPage = function(page) {
			var itemCount = $scope.itemCount;

			$scope.customers = Customer.query({
				page: page,
				itemCount: itemCount
			}, function(data) {
				$scope.totalCount = data.totalCount;
				$scope.customers = data.customers;
				$scope.start = (page - 1) * itemCount + 1;
				$scope.end = data.totalCount < page * itemCount ? data.totalCount : page * itemCount;
				$scope.page = page;
				$scope.pages = _.range(Math.ceil(data.totalCount/itemCount));
			});
		};
		$scope.loadPage($scope.page);
		$scope.$watch('itemCount', function() {
			$scope.loadPage(1);
		});
	});