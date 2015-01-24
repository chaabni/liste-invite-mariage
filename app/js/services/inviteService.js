angular.module('liste-invite-mariage').factory('inviteService', function ($firebase, firebaseRef) {

	"use strict";

	var sync = $firebase(firebaseRef);

	var invites = sync.$asArray();

	return {
		fetch : function () {
			return invites;
		},
		getByRecordKey: function (recordKey) {
			return invites.$getRecord(recordKey);
		},
		save : function (gift) {
			return invites.$save(gift);
		}
	};

});
