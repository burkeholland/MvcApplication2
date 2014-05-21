'use strict';

webApplication.controller('gridController',
    function ($scope, productDataSource) {
        $scope.title = 'Grid';
        $scope.dataSource = productDataSource;
    });
