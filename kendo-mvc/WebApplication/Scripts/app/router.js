
define(['kendo'],
    function (kendo) {
        var router = new kendo.Router(),
            layout = new kendo.Layout("<div id='content'></div>");

        layout.render($("#app"));

        router.route("/", function () {
            require(['text!/home/index', 'home/indexViewModel'], function (view, viewModel) {
                loadView(view, viewModel);
            });
        });

        router.route("/home/index", function () {
            require(['text!/home/index', 'home/indexViewModel'], function (view, viewModel) {
                loadView(view, viewModel);
            });
        });

        router.route("/home/about", function () {
            require(['text!/home/about', 'home/aboutViewModel'], function (view, viewModel) {
                loadView(view, viewModel);
            });
        });

        router.route("/home/contact", function () {
            require(['text!/home/contact', 'home/contactViewModel'], function (view, viewModel) {
                loadView(view, viewModel);
            });
        });

        router.route("/help", function () {
            require(['text!/help'], function (view) {
                loadView(view, null);
            });
        });

        var loadView = function (view, viewModel, delegate) {
            var kendoView = new kendo.View(view, { model: viewModel });
            kendo.fx($("#content")).slideInRight().reverse().then(function () {
                layout.showIn("#content", kendoView);

                if (delegate != undefined)
                    delegate();

                kendo.fx($("#content")).slideInRight().play();
            });
        };

        return router;
    });