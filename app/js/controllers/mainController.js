angular.module('liste-invite-mariage').controller('mainController', function ($scope, inviteService) {
    "use strict";

	$scope.statut = 'ALL';
	$scope.cote = 'ALL';

	$scope.invites = inviteService.fetch();

	$scope.order = function (tri) {
		if($scope.tri === tri) {
			$scope.inverse = !$scope.inverse;
		}
		$scope.tri = tri;
	};

});
