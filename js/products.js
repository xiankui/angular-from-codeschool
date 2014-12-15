
// store-products module
(function () {
	var app = angular.module("store-products", []);

	// dash in HTML translates to camelCase in JavaScript
	app.directive("productTitle", function () {
		return {
			restrict: "E",
			templateUrl: "directives/product-title.htm"
		};
	});

	// product-gallery
	app.directive("productGallery", function () {
		return {
			restrict: "E",
			templateUrl: "directives/product-gallery.htm",
			controller: function () {
			  var current = 0;

			  this.setCurrent = function (index) {
			    current = index;
			  };

			  this.getCurrent = function (images) {
			    return images[current];
			  };

			  this.isCurrent = function (index) {
			    return current === index;
			  };
			},
			controllerAs: "gallery"
		};
	});

	/*
	* product panel
	* ----product-review-form
	*/
	app.directive("productPanel", function () {
		return {
			restrict: "E",
			templateUrl: "directives/product-panel.htm",
			controller: function () {
				var current = 1;

				this.setCurrent = function (index) {
					current = index;
				};

				this.isCurrent = function (index) {
					return current === index;
				};
			},
			controllerAs: "panel"
		};
	});

	app.directive("productReviewForm", function () {
		return {
			restrict: "E",
			templateUrl: "directives/product-review-form.htm",
			controller: function () {
			  this.review = {};

			  this.addReview = function (reviews) {
			    reviews.push(this.review);

			    this.review = {};
			  };
			},
			controllerAs: "reviewCtrl"
		};
	});
})();