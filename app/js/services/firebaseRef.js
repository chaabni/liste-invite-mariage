angular.module('liste-invite-mariage').factory('firebaseRef', function (firebaseRootUrl) {
	"use strict";

	var ref = new Firebase(firebaseRootUrl);

	return ref;
});
