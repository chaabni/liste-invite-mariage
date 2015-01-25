angular.module('liste-invite-mariage').controller('mainController', function ($scope, inviteService) {
    "use strict";

	$scope.statut = 'ALL';
	$scope.cote = 'ALL';

	inviteService.fetch()
		.then(function (data) {
			$scope.invites = data;
		})
		.catch(function(error) {
			console.error("Error:", error);
		});

	$scope.order = function (tri) {
		if($scope.tri === tri) {
			$scope.inverse = !$scope.inverse;
		}
		$scope.tri = tri;
	};

});
