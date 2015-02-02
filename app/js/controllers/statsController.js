angular.module('liste-invite-mariage').controller('statsController', function ($scope) {
	"use strict";

	$scope.$watch('invites', function (newInvites) {
		$scope.honneurEnfants = 0;
		$scope.dinerEnfants = 0;
		$scope.honneurAdultes = 0;
		$scope.dinerAdultes = 0;
		$scope.partyCount = 0;
		$scope.alcool0 = 0;
		$scope.alcool1 = 0;
		$scope.alcool2 = 0;
		$scope.alcool3 = 0;

		var honneurEnfants = 0,
			dinerEnfants = 0,
			honneurAdultes = 0,
			dinerAdultes = 0,
			partyCount = 0,
			alcool0 = 0,
			alcool1 = 0,
			alcool2 = 0,
			alcool3 = 0;

		_.each(newInvites, function (invite) {
			if (invite.honneur === 'confirmed') {
				honneurEnfants += +invite.enfants;
				honneurAdultes++;
			}

			if (invite.diner === 'confirmed') {
				dinerEnfants += +invite.enfants;
				dinerAdultes++;
			}

			if (invite.party === "oui") {
				partyCount++;
			}

			if (!invite.alcool || invite.alcool === "0") {
				alcool0++;
			} else if (invite.alcool === 1) {
				alcool1++;
			} else if (invite.alcool === 2) {
				alcool2++;
			} else if (invite.alcool === 3) {
				alcool3++;
			}

		});

		$scope.honneurEnfants = honneurEnfants;
		$scope.dinerEnfants = dinerEnfants;
		$scope.honneurAdultes = honneurAdultes;
		$scope.dinerAdultes = dinerAdultes;
		$scope.partyCount = partyCount;
		$scope.alcool0 = alcool0;
		$scope.alcool1 = alcool1;
		$scope.alcool2 = alcool2;
		$scope.alcool3 = alcool3;

	}, true);

});
