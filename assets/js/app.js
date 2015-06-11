var SchoolAppsManager = new Marionette.Application();

SchoolAppsManager.addRegions({
    mainRegion: "#main-region"
});

SchoolAppsManager.on("start", function () {
    SchoolAppsManager.Family.List.Controller.listFamilies();
});