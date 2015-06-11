SchoolAppsManager.module("Entities", function (Entities, SchoolAppsManager,
                                               Backbone, Marionette, $, _) {
    Entities.Family = Backbone.Model.extend({
        defaults: {
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            postaCode: ""
        }
    });

    Entities.FamilyCollection = Backbone.Collection.extend({
        model: Entities.Family,
        comparator: function (family) {
            return family.get('addressLine1') + " " + family.get('addressLine2') + " " + family.get('city') + " " + family.get('state') + " " + family.get('postalCode');
        }
    });

    var families;
    var initializeFamilies = function () {
        families = new Entities.FamilyCollection([{
            addressLine1: "3085 Aspen Lake Dr N.E.",
            city: "Blaine",
            state: "MN",
            postalCode: "55449"
        },
            {
                addressLine1: "13105 Grand Ave",
                city: "Burnsville",
                state: "MN",
                postalCode: "55337"
            },
            {
                addressLine1: "3087 Aspen Lake Dr N.E.",
                city: "Blaine",
                state: "MN",
                postalCode: "55449"
            }]);
    };

    var API = {
        getFamilies: function () {
            if (families === undefined)
                initializeFamilies();

            return families;
        }
    };

    SchoolAppsManager.reqres.setHandler("family:entities", function () {
        return API.getFamilies();
    });
});