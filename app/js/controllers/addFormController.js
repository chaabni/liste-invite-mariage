angular.module('liste-invite-mariage').controller('addFormController', function ($scope, inviteService) {
	"use strict";

	var initForm = function () {
		$scope.invite =  {
			enfants: 0,
			honneur: 'unanswered',
			diner: 'unanswered',
			ready : 'non'
		};

		$scope.cote = $scope.coteOptions[0];
		$scope.honneur = $scope.honneurOptions[0];
		$scope.diner = $scope.dinerOptions[0];
	};

	$scope.coteOptions = [
		{label : 'Thierry', value : 'Thierry'},
		{label : 'Claire', value : 'Claire'},
		{label : 'Jean-Paul', value : 'JP'}
	];

	$scope.honneurOptions = [
		{label : '?', value : 'unanswered'},
		{label : 'Confimé', value : 'confirmed'},
		{label : 'Refusé', value : 'refused'}
	];

	$scope.dinerOptions = [
		{label : '?', value : 'unanswered'},
		{label : 'Confimé', value : 'confirmed'},
		{label : 'Refusé', value : 'refused'}
	];

	initForm();

	$scope.addInvite = function(invite) {
		invite.cote = $scope.cote.value;
		invite.honneur = $scope.honneur.value;
		invite.diner = $scope.diner.value;

		inviteService.add($scope.invite).then(function () {
			initForm();
			$scope.addForm.$setPristine();
			toast('Invité ajouté', 4000, 'green');
		});
	};

});
