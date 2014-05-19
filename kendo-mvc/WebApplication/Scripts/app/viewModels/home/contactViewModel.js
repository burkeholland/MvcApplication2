
define(['kendo'],
    function (kendo) {
        var contactViewModel = new kendo.data.ObservableObject({
            title: "Contact",
            message: "Your contact page."
        });

        return contactViewModel;
    });
