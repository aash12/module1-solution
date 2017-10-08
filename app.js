(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
 
  $scope.splitString = function(name) {
  	if ($scope.userForm.$valid) {
  var arrayOfStrings = name.split(",");
  	console.log(arrayOfStrings);
  	if (arrayOfStrings.length <= 3 && arrayOfStrings.length > 0) {
		console.log("Happy");
		$scope.msg = "Enjoy!";
	}
		else{
		$scope.msg = "Too much!";
	}
}
else{
	$scope.msg = "string is empty";
}
}
}

})();
