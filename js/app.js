
// separate diffrent module
(function () {
	var app = angular.module('store', ['store-products']);

	app.controller("StoreController", ['$http', function ($http) {
		var store = this;
		store.products = [];

		$http.get("js/products.json").success(function (res) {
			store.products = res;
		});
	}]);
})();


