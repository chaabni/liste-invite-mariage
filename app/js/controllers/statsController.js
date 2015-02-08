angular.module('liste-invite-mariage').controller('statsController', function ($scope) {
	"use strict";

	$scope.$watch('invites', function (newInvites) {
		$scope.honneurEnfants = 0;
		$scope.dinerEnfants = 0;
		$scope.honneurAdultes = 0;
		$scope.dinerAdultes = 0;
		$scope.partyCount = 0;
		$scope.alcool0 = {
			honneur : 0,
			diner : 0
		};
		$scope.alcool1 = {
			honneur : 0,
			diner : 0
		};
		$scope.alcool2 = {
			honneur : 0,
			diner : 0
		};
		$scope.alcool3 = {
			honneur : 0,
			diner : 0
		};

		var honneurEnfants = 0,
			dinerEnfants = 0,
			honneurAdultes = 0,
			dinerAdultes = 0,
			partyCount = 0,
			alcoolHonneur0 = 0,
			alcoolHonneur1 = 0,
			alcoolHonneur2 = 0,
			alcoolHonneur3 = 0,
			alcoolDiner0 = 0,
			alcoolDiner1 = 0,
			alcoolDiner2 = 0,
			alcoolDiner3 = 0;

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

			if (invite.honneur === "confirmed" && (!invite.alcool || invite.alcool === "0")) {
				alcoolHonneur0++;
			} else if (invite.honneur === "confirmed" && invite.alcool === 1) {
				alcoolHonneur1++;
			} else if (invite.honneur === "confirmed" && invite.alcool === 2) {
				alcoolHonneur2++;
			} else if (invite.honneur === "confirmed" && invite.alcool === 3) {
				alcoolHonneur3++;
			} else if (invite.diner === "confirmed" && (!invite.alcool || invite.alcool === "0")) {
				alcoolDiner0++;
			} else if (invite.diner === "confirmed" && invite.alcool === 1) {
				alcoolDiner1++;
			} else if (invite.diner === "confirmed" && invite.alcool === 2) {
				alcoolDiner2++;
			} else if (invite.diner === "confirmed" && invite.alcool === 3) {
				alcoolDiner3++;
			}

		});

		$scope.honneurEnfants = honneurEnfants;
		$scope.dinerEnfants = dinerEnfants;
		$scope.honneurAdultes = honneurAdultes;
		$scope.dinerAdultes = dinerAdultes;
		$scope.partyCount = partyCount;
		$scope.alcool0 = {
			honneur : alcoolHonneur0,
			diner : alcoolDiner0
		};
		$scope.alcool1 = {
			honneur : alcoolHonneur1,
			diner : alcoolDiner1
		};
		$scope.alcool2 = {
			honneur : alcoolHonneur2,
			diner : alcoolDiner2
		};
		$scope.alcool3 = {
			honneur : alcoolHonneur3,
			diner : alcoolDiner3
		};

	}, true);

});
