require.config({
    paths: {
        'text': '../Scripts/text',
        'kendo': 'vendor/kendo/kendo',
        'angular': '../Scripts/angular',
        'angular-route': '../Scripts/angular-route',
        'angular-kendo': '../Scripts/angular-kendo',
        'app': 'app'
    },
    shim: {
        'app': {
            deps: [ 'kendo' ]
        },
        'angular-route': {
            deps: [ 'angular' ]
        },
        'angular-kendo': {
            deps: [ 'angular', 'kendo' ]
        }
    }
});

define([
    'app',
    'controllers/layoutController'
], function (app, layoutController, homeController, detailsController) {

    angular.bootstrap(document, ['app']);

});