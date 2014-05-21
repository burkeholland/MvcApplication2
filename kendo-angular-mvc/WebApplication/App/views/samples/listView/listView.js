'use strict';

webApplication.controller('listViewController',
    function ($scope, productDataSource) {
        $scope.title = 'ListView';
        $scope.template = kendo.template($("#template").html());
        $scope.dataSource = productDataSource;
    });
