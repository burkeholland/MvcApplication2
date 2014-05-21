'use strict';

var webApplication = angular.module('webApplication', ['kendo.directives', 'ngRoute', 'ngAnimate'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home',
            {
                templateUrl: '/app/views/home/home.html',
                controller: 'homeController'
            })
            .when('/details',
            {
                templateUrl: '/app/views/details/details.html',
                controller: 'detailsController'
            })
            .when('/samples/listview',
            {
                templateUrl: '/app/views/samples/listview/listview.html',
                controller: 'listViewController'
            })
            .when('/samples/grid',
            {
                templateUrl: '/app/views/samples/grid/grid.html',
                controller: 'gridController'
            })
            .otherwise(
            {
                redirectTo: '/home'
            });
    });