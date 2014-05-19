
define(['kendo'],
    function (kendo) {
        var aboutViewModel = new kendo.data.ObservableObject({
            title: "About",
            message: "Your application description page."
        });

        return aboutViewModel;
    });
