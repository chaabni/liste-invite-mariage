/*jshint -W106*/

angular.module('liste-invite-mariage').controller('mainController', function ($scope, inviteService, $log) {
    "use strict";

	$scope.statut = 'ALL';
	$scope.cote = 'ALL';
	$scope.showFriends = true;
	$scope.showFamily = true;

	inviteService.fetch()
		.then(function (data) {
			$scope.invites = data;
		})
		.catch(function(error) {
			$log.error("Error:", error);
		});

	$scope.order = function (tri) {
		if($scope.tri === tri) {
			$scope.inverse = !$scope.inverse;
		}
		$scope.tri = tri;
	};

	$scope.showAddForm = function () {
		$('#add-form').openModal();
		$('select').material_select();
	};

	$scope.switchStatus = function (invite, statut) {
		if(invite[statut] === "unanswered") {
			invite[statut] = "confirmed";
		} else if (invite[statut] === "confirmed") {
			invite[statut] = "refused";
		} else {
			invite[statut] = 'unanswered';
		}
		$scope.invites.$save(invite);
		toast('Modification sauvegardée', 2000, 'green');
	};

	$scope.switchParty = function (invite) {

		if (invite.party === 'non') {
			invite.party = 'oui';
		} else {
			invite.party = 'non';
		}
		$scope.invites.$save(invite);
		toast('Modification sauvegardée', 2000, 'green');
	};

});
