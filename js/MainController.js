var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService){
	
	$scope.postData = function(question){
		parseService.postData(question).then(function(){
			$scope.question = " ";

	$scope.getParseData();

			});
		};

		$scope.getParseData = function(){
		parseService.getData().then(function(response){
			console.log(response.data.results);
		});
	};
	});
