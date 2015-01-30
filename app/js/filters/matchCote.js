angular.module('liste-invite-mariage').filter('matchCote', function () {
	"use strict";

	return function (list, showClaire, showThierry) {

		if (showClaire && showThierry) {
			return list;
		} else if (showClaire && !showThierry) {
			return _.filter(list, function (invite) {
				return invite.cote === 'Claire';
			});
		} else if (!showClaire && showThierry) {
			return _.filter(list, function (invite) {
				return invite.cote === 'Thierry';
			});
		} else {
			return [];
		}
	};

});
