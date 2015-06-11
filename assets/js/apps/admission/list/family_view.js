SchoolAppsManager.module("Family.List", function (List, SchoolAppsManager, Backbone, Marionette, $, _) {
    List.FamilyView = Marionette.ItemView.extend({
        tagName: "tr",
        template: "#family-list-item",
        events: {
            "click": "highlight",
            "click button.js-delete": "deleteClicked",
            "click td a.js-show": "showClicked",
            //"click td": "alertCellText"
        },

        highlight: function (e) {
            e.preventDefault();
            this.$el.toggleClass("warning");

            this.trigger("family:highlighting:toggled", this.model);
        },

        showClicked: function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger("family:show", this.model);
        },

        deleteClicked: function (e) {
            e.stopPropagation();
            this.trigger("family:delete", this.model);
            //this.model.collection.remove(this.model);
        },

        remove: function () {
            var self = this;
            this.$el.fadeOut(function () {
                Marionette.ItemView.prototype.remove.call(self);
            });
        },

        alertCellText: function (e) {
            alert($(e.target).text());
        }
    });

    List.FamiliesView = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#family-list",
        childView: List.FamilyView,
        childViewContainer: "tbody",

        onChildviewFamilyViewDelete: function () {
            this.$el.fadeOut(1000, function () {
                $(this).fadeIn(1000);
            });
        }
    });
});