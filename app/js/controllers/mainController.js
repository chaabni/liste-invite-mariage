/*jshint -W106*/

angular.module('liste-invite-mariage').controller('mainController', function ($scope, inviteService, $log) {
    "use strict";

	$scope.statut = 'ALL';
	$scope.showFriends = true;
	$scope.showFamily = true;
	$scope.showClaire = true;
	$scope.showThierry = true;

	$scope.honneurEnfants = 0;
	$scope.dinerEnfants = 0;
	$scope.honneurAdultes = 0;
	$scope.dinerAdultes = 0;

	$scope.$watch('invites', function (newInvites) {
		$scope.honneurEnfants = 0;
		$scope.dinerEnfants = 0;
		$scope.honneurAdultes = 0;
		$scope.dinerAdultes = 0;

		var honneurEnfants = 0,
			dinerEnfants = 0,
			honneurAdultes = 0,
			dinerAdultes = 0;

		_.each(newInvites, function (invite) {
			if (invite.honneur === 'confirmed') {
				honneurEnfants += +invite.enfants;
				honneurAdultes++;
			}

			if (invite.diner === 'confirmed') {
				dinerEnfants += +invite.enfants;
				dinerAdultes++;
			}
		});

		$scope.honneurEnfants = honneurEnfants;
		$scope.dinerEnfants = dinerEnfants;
		$scope.honneurAdultes = honneurAdultes;
		$scope.dinerAdultes = dinerAdultes;

	}, true);

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
			invite.diner = 'unanswered';
		}
		$scope.invites.$save(invite);
		toast('Modification sauvegardée', 2000, 'green');
	};

	$scope.switchReady = function (invite) {
		if (invite.ready === 'non') {
			invite.ready = 'oui';
		} else {
			invite.ready = 'non';
		}
		$scope.invites.$save(invite);
		toast('Modification sauvegardée', 2000, 'green');
	};

});
