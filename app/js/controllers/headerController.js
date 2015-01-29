angular.module('liste-invite-mariage').controller('headerController', function ($scope) {

	"use strict";

	$scope.showFilter = true;

	$scope.toogleFilter = function () {
		$scope.showFilter = !$scope.showFilter;
	};

});
