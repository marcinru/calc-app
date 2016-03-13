angular.module('calc', []).controller('cartCtrl', function($scope) {
    var cart = this;
    cart.shippingOptions = [
        { name: 'Flat Rate', cost: 10 },
        { name: 'Express', cost: 20 },
        { name: 'Super Express', cost: 30 }
    ];
    cart.price = 0;
    cart.inclTax = true;
    cart.shipping = cart.shippingOptions[0];
    $scope.$watch('cart.price', updateView);
    $scope.$watch('cart.inclTax', updateView);
    $scope.$watch('cart.shipping', updateView);
    function updateView() {
        cart.tax = cart.inclTax ? cart.price * 0.25 : 0;
        cart.total = +cart.price + cart.tax + cart.shipping.cost;
    }
});
