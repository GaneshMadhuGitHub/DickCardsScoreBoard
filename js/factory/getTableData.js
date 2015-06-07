app.factory("getTable1Factory", function($http) {
	getTable1Data = function(filename, callback) {
		var URL = "Json/" + filename;
		$http({
			url : URL,
			method : "GET",
			dataType : "json"
		}).success(function(result) {
			callback(result);
		}).error(function(failure) {
			console.log("Failure: " + failure);
			callback([]);
		});
	};
	return {
		getTable1Data : getTable1Data
	};
});
