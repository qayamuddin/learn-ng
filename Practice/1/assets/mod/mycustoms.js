var myMod = angular.module("anMod", []);
myMod.controller('myController', function($scope){
	alert('aknss - frm myMod module');
	$scope.myVar = "This ";
	$scope.myVar1 = "is a";
	$scope.myVar2 = "test ";
});

myMod.controller('myCtrl', function($scope){
	//alert('aknss - frm muMod module - myctrl controller');
	$scope.myVar = "This ";
	$scope.myVar1 = "is a";
	$scope.myVar2 = "test from myctrl ";
});

var myMod1 = angular.module("anMod1", []);
myMod1.controller('myController1', function($scope){
	alert('aknss1 this is myMod1........');

	$scope.a = 1;
	$scope.b = 2;
	$scope.myFunc = function(){
		//alert($scope.a);
		if($scope.a == "")
			$scope.a = 0;
		if($scope.b == "")
			$scope.b = 0;

		return parseInt($scope.a) + parseInt($scope.b);
	}
	//Simple cals
	$scope.opEx = "0";
	$scope.ans = 0;

	$scope.simpleCalc = function(){
		
		if($scope.opA == "")
			$scope.opA = 0;
		if($scope.opB == "")
			$scope.opB = 0;

		if($scope.opEx == "0")
			$scope.ans = 0;
		if($scope.opEx == "1")
			$scope.ans = parseInt($scope.opA) + parseInt($scope.opB);
		if($scope.opEx == "2")
			$scope.ans = parseInt($scope.opA) - parseInt($scope.opB);
		if($scope.opEx == "3")
			$scope.ans = parseInt($scope.opA) * parseInt($scope.opB);
		if($scope.opEx == "4")
			$scope.ans = parseInt($scope.opA) / parseInt($scope.opB);

		return $scope.ans;
	}
});

angular.module("CombineModule", ["anMod", "anMod1"]);