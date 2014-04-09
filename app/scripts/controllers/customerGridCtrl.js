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

		$scope.edit = function(customer) {
			$scope.editedCustomer = Customer.get({id:customer.id});
		};

		$scope.save = function (editedCustomer) {
			$scope.editedCustomer = null;
			editedCustomer.$save({id:editedCustomer.id}, function (updatedCustomer) {
				console.log(_.findWhere($scope.customers, {id:updatedCustomer.id}));
				_.extend(_.findWhere($scope.customers, {id:updatedCustomer.id}), updatedCustomer);
			});
		};
		
		$scope.$watch('itemCount', function() {
			$scope.loadPage(1);
		});
	});