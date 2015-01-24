angular.module('liste-invite-mariage').controller('mainController', function ($scope, inviteService) {
    "use strict";

	$scope.invites = inviteService.fetch();

	$scope.order = function (tri) {
		if($scope.tri === tri) {
			$scope.inverse = !$scope.inverse;
		}
		$scope.tri = tri;
	}
});
