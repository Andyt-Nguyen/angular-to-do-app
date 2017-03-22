var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController',["$scope", function($scope){
	$scope.ninjas = [
		{
			name: "Andrew",
			belt: "blue",
			rate: 131.83,
			available: true
		},
		{
			name: "Ryu",
			belt: "red",
			rate: 1342.83,
			thumb: "img/ryuthumb.jpg",
			available: true
		},
		{
			name: "Raiden",
			belt: "aqua",
			rate: 189.23,
			thumb: "img/mgs2thumb.jpg",
			available: true
		},
		{
			name: "Ezio",
			belt: "green",
			rate: 1208.23,
			thumb: "img/creedthumb.jpg",
			available: true
		}
	];


	$scope.remove = function(ninja){
		var removedNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removedNinja, 1);
	};

	$scope.addNinja = function(){
		$scope.ninjas.push({
			name: $scope.newNinja.name,
			belt: $scope.newNinja.belt,
			rate: $scope.newNinja.rate,
			available: true
		});
		$scope.newNinja.name = "";
		$scope.newNinja.belt = "";
		$scope.newNinja.rate = "";
	}


}]);
