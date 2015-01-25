angular.module('liste-invite-mariage', ['ngRoute', 'firebase']);

angular.module('liste-invite-mariage').config(function ($routeProvider) {

	$routeProvider
		.when('/list',  {
			templateUrl: '/partials/list.html',
			controller: 'mainController'
		})
		.when('/stats', {
			templateUrl: '/partials/stats.html',
			controller: 'mainController'
		})
		.otherwise({redirectTo: 'list'})

});


angular.module('liste-invite-mariage').constant('firebaseRootUrl', 'https://listeinvitemariage.firebaseio.com/');


