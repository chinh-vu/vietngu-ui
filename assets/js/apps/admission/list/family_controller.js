SchoolAppsManager.module("Family.List", function (List, SchoolAppsManager,
                                                  Backbone, Marionette, $, _) {
    List.Controller = {
        listFamilies: function () {
            var families = SchoolAppsManager.request("family:entities");

            var familiesListView = new List.FamiliesView({
                collection: families
            });

            familiesListView.on("childview:family:highlighting:toggled",
                function (childView, model) {
                    console.log("Highlighting toggled on model: ", model.toJSON());
                });
            familiesListView.on("childview:family:delete",
                function (childView, model) {
                    families.remove(model);
                });

            familiesListView.on("childview:family:show",
                function (childView, model) {
                    console.log(model.toJSON());
                });
            SchoolAppsManager.mainRegion.show(familiesListView);
        }
    }
});