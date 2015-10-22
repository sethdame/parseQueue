var app = angular.module('parseQ');

app.service('parseService', function($http){
	this.postData = function(question){
    return $http({
	method: 'POST',
	url: 'https://api.parse.com/1/classes/post',
	data: {
		text: question
				}
		});
	}

	this.getData = function(){
		var deferred = $q.defer();
		return $http.get('https://api.parse.com/1/classes/post?order=-createdAt'){
			deferred.resolve(response.data.results);
		};
	};
});