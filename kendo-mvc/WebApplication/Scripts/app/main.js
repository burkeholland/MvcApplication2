
require.config({
    paths: {
        //packages
        'jquery': '/scripts/jquery-2.1.1.min',
        'kendo': '/scripts/kendo/2014.1.318/kendo.web.min',
        'text': '/scripts/text',
        'router': '/scripts/app/router',
        //models
        //viewModels
        'home/indexViewModel': 'viewModels/home/indexViewModel',
        'home/contactViewModel': 'viewModels/home/contactViewModel',
        'home/aboutViewModel': 'viewModels/home/aboutViewModel',
        //datasources
        // utils
        'util': '/scripts/util'
    },
    shim: {
        'kendo': ['jquery']
    },
    priority: ['text', 'router', 'app'],
    jquery: '2.1.1'
});

require([
        'app'
], function (app) {
    app.initialize();
});