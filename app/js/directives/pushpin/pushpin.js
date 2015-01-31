angular.module('liste-invite-mariage').directive('pushpin', function () {
	"use strict";

	return {
		restrict : 'A',
		link : function (scope, element) {
			$(element).pushpin({
				top: $(element).offset().top,
				offset: 80
			});
		}
	};
});
