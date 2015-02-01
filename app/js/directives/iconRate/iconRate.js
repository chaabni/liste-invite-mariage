angular.module('liste-invite-mariage').directive('iconRate', function () {
	"use strict";

	return {
		restrict : 'A',
		replace : true,
		scope : {
			value : '='
		},
		templateUrl : 'js/directives/iconRate/iconRate.html'
	};
});
