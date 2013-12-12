var checkoutApp = angular.module('checkoutApp', []);


checkoutApp.controller('OrderRowController', function ($scope) {
    $scope.rows = [
        {
            'name': 'test',
            'amount': '2',
            'cost': '300',
            'vat': '25 %',
            'total': '1000 SEKsdd'
        },
         {
             'name': 'test',
             'amount': '2',
             'cost': '300 SEK',
             'vat': '25 %',
             'total': '1000 SEKsdd'
         }
    ];
    $scope.change = function (row) {
        console.log($scope.amount);
        row.amount = $scope.amount;
        row.total = row.cost * row.amount;
        console.log(row);
    };
    
    $scope.total = function (row) {
        console.log(row.amount);
        return (row.amount * row.cost) + 'SEK';
    };
});