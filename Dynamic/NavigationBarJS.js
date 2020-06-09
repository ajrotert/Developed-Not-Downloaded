var loadFunction = function () {
    $("#nav-placeholder").load("Dynamic/NavigationBar.html", function (response, status, xhr) {
        if (status == "error") {
            console.log("An error has occured. Attempting to reload navigation bar.");
            caches.delete("NavigationBar.html");
            caches.delete("Dynamic/NavigationBar.html");
            loadFunction();
        }
    });

};
$(loadFunction);