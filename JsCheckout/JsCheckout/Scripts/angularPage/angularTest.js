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
        row.total = row.cost * row.amount;
        return (row.amount * row.cost);
    }

    $scope.allTotals = function () {
        var k = 0;
        for (var i = 0; i < $scope.rows.length; i++)
        {
            k += $scope.rows[i].total;
        }
        return k;
    }
    $scope.newRow = function () {
        console.log('test');
        $scope.rows.push({
            'name': 'test',
            'amount': 2,
            'cost': 300,
            'vat': 25,
            'total': 1000
        });
    }

    $scope.nextStep = function () {
        $scope.stepTwo = true;
    }

    $scope.removeRow = function (idx) {
        var rowToRemove = $scope.rows[idx];
        $scope.rows.splice(idx, 1);
    }
});
