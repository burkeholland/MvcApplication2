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
            .when('/sample',
            {
                templateUrl: '/app/views/sample/sample.html',
                controller: 'sampleController'
            })
            .otherwise(
            {
                redirectTo: '/home'
            });
    });