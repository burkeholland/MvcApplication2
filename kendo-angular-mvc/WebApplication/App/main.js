require.config({
    paths: {
        'jquery': 'vendor/jquery/jquery',
        'angular': 'vendor/angular/angular',
        'kendo': 'vendor/kendo/kendo',
        'angular-kendo': '../Scripts/angular-kendo',
        'app': 'app'
    },
    shim: {
        'app': {
            deps: ['jquery', 'angular', 'kendo', 'angular-kendo']
        }
    }
});

define(['app'], function () {
    require(['routes'], function () {
        angular.bootstrap(document, ['app']);
    });
})