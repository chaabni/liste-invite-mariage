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

});
