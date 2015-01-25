angular.module('liste-invite-mariage').filter('matchCote', function () {
	"use strict";

	return function (list, cote) {

		if (cote === 'ALL') {
			return list;
		}

		if (cote === 'ONLY_THIERRY') {
			return _.filter(list, function (invite) {
				return invite.cote === 'Thierry';
			});
		}

		if (cote === 'ONLY_CLAIRE') {
			return _.filter(list, function (invite) {
				return invite.cote === 'Claire';
			});
		}

		return cote;
	}

});
