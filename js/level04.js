
// using directive
(function () {

	var app = angular.module("store", []);

	app.controller("StoreController", function () {
		this.products = products;
	});

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
				}
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


	// products
	var products = [
		{ name: 'Some Awesome Product', price: 123.45,
          images: [
            { full: 'product01-image01-full.jpg', thumb: 'product01-image01-thumb.jpg' },
            { full: 'product01-image02-full.jpg', thumb: 'product01-image02-thumb.jpg' },
            { full: 'product01-image03-full.jpg', thumb: 'product01-image03-thumb.jpg' }
          ],
          description: "This product is awesome!",
          specifications: "Filled with Awesome",
          reviews: [
            { body: "This product is awesome!", stars: 5, author: "fanboy@apple.com" },
            { body: "Would not buy again...", stars: 1, author: "hater@losers.com" }
          ],
          canPurchase: true,
          isSoldOut: false
        },
        { name: 'Some Other Awesome Product', price: 183.45,
          images: [
            { full: 'product02-image01-full.jpg', thumb: 'product02-image01-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' }
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [],
          canPurchase: true,
          isSoldOut: false
        },
        {
        	name: 'Some sold out!', price: 110.00,
        	images: [],
        	canPurchase: false,
        	isSoldOut: true
        }
  ];
})();