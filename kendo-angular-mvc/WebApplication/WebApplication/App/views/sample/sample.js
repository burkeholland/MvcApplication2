'use strict';

webApplication.controller('sampleController',
    function ($scope, productDataSource) {
        $scope.title = 'Sample';
        $scope.productDataSource = productDataSource;
    });
