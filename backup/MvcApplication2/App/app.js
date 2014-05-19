define([
    'angular-kendo'
], function (layoutController, homeController) {

    //var start = function (app) {

    //    app.config(function ($routeProvider) {
    //        $routeProvider
    //            .when('/', {
    //                templateUrl: 'partials/home.html',
    //                controller: 'HomeController'
    //            })
    //            .when('/details', {
    //                templateUrl: 'partials/details.html',
    //                controller: 'DetailsController'
    //            });
    //    });

    //    angular.bootstrap(document, [ 'App' ]);
    //}
    

    return angular.module('app', ['kendo.directives']);

});