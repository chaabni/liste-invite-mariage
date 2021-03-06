/*jshint -W106*/

angular.module('liste-invite-mariage').controller('mainController', function ($scope, inviteService, $log) {
    "use strict";

	$scope.statut = 'ALL';
	$scope.showFriends = true;
	$scope.showFamily = true;
	$scope.showClaire = true;
	$scope.showThierry = true;
	$scope.showJeanPaul = true;

	$scope.honneurEnfants = 0;
	$scope.dinerEnfants = 0;
	$scope.honneurAdultes = 0;
	$scope.dinerAdultes = 0;

	$('.tooltipped').tooltip();

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

	$scope.switchStatus = function (invite, statut) {
		if(invite[statut] === "unanswered") {
			invite[statut] = "confirmed";
		} else if (invite[statut] === "confirmed") {
			invite[statut] = "refused";
		} else {
			invite[statut] = 'unanswered';
		}

		$scope.invites.$save(invite).then(function () {
			toast('Modification sauvegardée', 2000, 'green');
		});

	};

	$scope.switchParty = function (invite) {

		if (invite.party === 'non') {
			invite.party = 'oui';
		} else {
			invite.party = 'non';
			invite.diner = 'unanswered';
		}
		$scope.invites.$save(invite).then(function () {
			toast('Modification sauvegardée', 2000, 'green');
		});

	};

	$scope.switchReady = function (invite) {
		if (invite.ready === 'non') {
			invite.ready = 'oui';
		} else {
			invite.ready = 'non';
		}
		$scope.invites.$save(invite).then(function () {
			toast('Modification sauvegardée', 2000, 'green');
		});
	};

	$scope.switchRate = function (invite) {
		invite.alcool++;

		if (invite.alcool === 4) {
			invite.alcool = 0;
		}

		$scope.invites.$save(invite).then(function () {
			toast('Modification sauvegardée', 2000, 'green');
		});
	};

	$scope.switchAge = function (invite) {
		if (invite.age === "< 35 ans") {
			invite.age = "entre 35 et 65 ans";
		} else if (invite.age === "entre 35 et 65 ans") {
			invite.age = "> 65 ans";
		} else if (invite.age === "> 65 ans") {
			invite.age = "";
		} else {
			invite.age = "< 35 ans";
		}

		$scope.invites.$save(invite).then(function () {
			toast('Modification sauvegardée', 2000, 'green');
		});

	};

	$scope.switchCote = function (invite) {
		if (invite.cote === "Thierry") {
			invite.cote = "Claire";
		} else if (invite.cote === "Claire") {
			invite.cote = "JP";
		} else if (invite.cote === "JP") {
			invite.cote = "";
		} else {
			invite.cote = "Thierry";
		}

		$scope.invites.$save(invite).then(function () {
			toast('Modification sauvegardée', 2000, 'green');
		});

	};

	$scope.switchCategorie = function (invite) {
		if (invite.categorie === "famille") {
			invite.categorie = "ami";
		} else if (invite.categorie === "ami") {
			invite.categorie = "famille";
		} else {
			invite.categorie = "famille";
		}

		$scope.invites.$save(invite).then(function () {
			toast('Modification sauvegardée', 2000, 'green');
		});
	};

	$scope.remove = function (invite) {
		var text = invite.nom + ' a été retiré de la liste des invités';
		$scope.invites.$remove(invite).then(function () {
			toast(text, 5000, 'green');
		});
	};

});
