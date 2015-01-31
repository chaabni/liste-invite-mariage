angular.module('liste-invite-mariage').controller('headerController', function ($scope) {

	"use strict";

	$scope.toogleFilter = function () {
		$('#stats').openModal();
	};


});
