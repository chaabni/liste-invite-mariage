angular.module('liste-invite-mariage').filter('matchCategory', function () {
	"use strict";

	return function (list, showFriends, showFamily) {

		if (showFriends && showFamily) {
			return list;
		} else if (showFriends && !showFamily) {
			return _.filter(list, function (invite) {
				return invite.categorie === 'ami';
			});
		} else if (!showFriends && showFamily) {
			return _.filter(list, function (invite) {
				return invite.categorie === 'famille';
			});
		} else {
			return [];
		}
	};

});
