define([
    './controllers/index',
    './services/index'
], function (controllers, index) {

    return angular.module('app', [
        'ngRoute',
        'kendo.directives',
        'app.controllers',
        'app.services'
    ]);

});