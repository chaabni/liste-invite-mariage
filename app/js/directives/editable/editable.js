angular.module('liste-invite-mariage').directive('editable', function ($timeout) {
	"use strict";

	return {
		restrict: 'E',
		templateUrl : 'js/directives/editable/editable.html',
		replace: true,
		scope: {
			value : '=',
			onSave : '&'
		},
		link : function (scope, element, attr) {

			var save = function () {
				scope.$apply(function () {
					scope.editMode = false;
					scope.onSave();
					toast('Modification sauvegardée', 4000, 'green');
				});
			};

			var input = element.find('input');

			scope.editMode = false;

			scope.enterEditMode = function () {
				scope.editMode = true;
				$timeout(function() {
					$(input).focus();
				});
			};

			input.on('keypress', function (event) {
				if ( event.which == 13 ) {
					save();
				}
			});
		}
	}
});
