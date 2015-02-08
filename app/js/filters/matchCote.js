angular.module('liste-invite-mariage').filter('matchCote', function () {
	"use strict";

	return function (list, showClaire, showThierry, showJeanPaul) {

		if (showClaire && showThierry && showJeanPaul ) {
			return list;
		} else {
			return _.filter(list, function (invite) {
				var criteria = false;

				if (showClaire) {
					criteria = criteria || invite.cote === 'Claire';
				}

				if (showThierry) {
					criteria = criteria || invite.cote === 'Thierry';
				}

				if (showJeanPaul) {
					criteria = criteria || invite.cote === 'JP';
				}
				return criteria;
			});
		}
	};

});
