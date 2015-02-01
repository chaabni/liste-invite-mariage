angular.module('liste-invite-mariage').controller('headerController', function ($scope) {

	"use strict";

	this.showStats = function () {
		$('#stats').openModal();
	};

	this.showAddForm = function () {
		$('#add-form').openModal();
		$('select').material_select();
	};

});
