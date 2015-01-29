angular.module('liste-invite-mariage').controller('headerController', function ($scope) {

	$scope.showFilter = true;

	$scope.toogleFilter = function () {
		$scope.showFilter = !$scope.showFilter;
	};

});
