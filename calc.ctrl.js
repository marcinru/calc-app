angular.module('calcApp', []).controller('calcCtrl', function($scope) {
	var cart = this;
	cart.shipping_options = [
		{ name: 'Flat Rate', cost: 10 },
		{ name: 'Express', cost: 20 },
		{ name: 'Super Express', cost: 30 }
	];
	cart.price = 100;
	cart.incl_tax = true;
	cart.shipping = cart.shipping_options[0];
	$scope.$watch('cart.price', updateView);
	$scope.$watch('cart.incl_tax', updateView);
	$scope.$watch('cart.shipping', updateView);
	function updateView() {
		cart.tax = cart.incl_tax ? cart.price * 0.23 : 0;
		cart.total = parseFloat(cart.price) + cart.tax + cart.shipping.cost;
	}
});
