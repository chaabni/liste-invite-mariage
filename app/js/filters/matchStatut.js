angular.module('liste-invite-mariage').filter('matchStatut', function () {
	"use strict";

	return function (list, statut) {

		if (statut === 'ALL') {
			return list;
		}

		if (statut === 'ONLY_HONNEUR_CONFIRMED') {
			return _.filter(list, function (invite) {
				return invite.diner === 'confirmed';
			});
		}

		if (statut === 'ONLY_DINER_CONFIRMED') {
			return _.filter(list, function (invite) {
				return invite.honneur === 'confirmed';
			});
		}

		if (statut === 'ONLY_UNANSWERED') {
			return _.filter(list, function (invite) {
				return (invite.diner === 'unanswered' || invite.honneur === 'unanswered');
			});
		}

		if (statut === 'ONLY_REFUSED') {
			return _.filter(list, function (invite) {
				return (invite.diner === 'refused' || invite.honneur === 'refused');
			});
		}

		if (statut === 'ONLY_PARTY') {
			return _.filter(list, function (invite) {
				return (invite.party === 'oui');
			});
		}

		return list;
	};

});
