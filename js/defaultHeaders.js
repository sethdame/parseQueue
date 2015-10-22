var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {
            	'X-Parse-Application-Id': 'cSBhNFGPcxPDXs3pCikRb2euSebiroeLDPhFiiSP', 
            	'X-Parse-REST-API-Key': 'QL0Nx2z4v1GcQpmNRNdiQM1lvhcK8q0MA9V8QaYR'
            };
            	return config; 
        }
    };
});