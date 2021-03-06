angular.module('liste-invite-mariage', ['ngRoute', 'firebase', 'angular-chartist']);

angular.module('liste-invite-mariage').config(function ($routeProvider) {

	"use strict";

	$routeProvider
		.when('/list',  {
			templateUrl: './partials/list.html',
			controller: 'mainController'
		})
		.when('/stats', {
			templateUrl: './partials/stats.html',
			controller: 'statsController'
		})
		.otherwise({redirectTo: 'list'});

});


angular.module('liste-invite-mariage').constant('firebaseRootUrl', 'https://listeinvitemariage.firebaseio.com/');


