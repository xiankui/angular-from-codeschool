
// angular
(function () {
  // ng-app
	var app = angular.module('store', []);

  // ng-controller
	app.controller('StoreController', function () {
		this.products = products;
	});

	app.controller("PanelController", function () {
		var current = 1;

		this.setCurrent = function (index) {
			current = index;
		};

		this.isCurrent = function (index) {
			return current === index;
		}
	});

  app.controller("galleryController", function () {
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
  });

  app.controller("ReviewController", function () {
    this.review = {};

    this.addReview = function (product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });

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
    	images: [
        { full: 'product02-image01-full.jpg', thumb: 'product02-image01-thumb.jpg' },
        { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' }
      ],
    	canPurchase: false,
    	isSoldOut: true
    }
  ];
})();
