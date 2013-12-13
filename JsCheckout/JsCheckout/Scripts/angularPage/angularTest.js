var checkoutApp = angular.module('checkoutApp', []);


checkoutApp.controller('OrderRowController', function ($scope) {
    $scope.rows = [
        {
            'name': 'test',
            'amount': 2,
            'cost': 300,
            'vat': 25,
            'total': 1000
        },
         {
             'name': 'En liten låda',
             'amount': 2,
             'cost': 300,
             'vat': 25,
             'total': 1000
         }
    ];

    $scope.stepTwo = false;
    
    $scope.total = function (row) {
        var total = row.cost * row.amount;
        row.total = total;
        return total;
    };

    $scope.allTotals = function () {
        var sum = 0;
        for (var i = 0; i < $scope.rows.length; i++) {
            sum += $scope.rows[i].total;
        }
        return sum;
    };
    
    $scope.newRow = function () {
        $scope.rows.push({
            'name': 'test',
            'amount': 2,
            'cost': 300,
            'vat': 25,
            'total': 1000
        });
    };

    $scope.nextStep = function () {
        $scope.stepTwo = true;
    };

    $scope.removeRow = function (idx) {
        $scope.rows.splice(idx, 1);
    };
});
