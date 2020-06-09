var loadIos = function () {
    $("#iOS-Table").load("Dynamic/HTML/iOSPlaceholder.html", function (response, status, xhr) {
        if (status == "error") {
            console.log("An error has occured. Attempting to reload iOS projects.");
            caches.delete("iOSPlaceholder.html");
            caches.delete("Dynamic/HTML/iOSPlaceholder.html");
            loadIos();
        }
    });
};
var loadAndroid = function () {
    $("#Android-Table").load("Dynamic/HTML/AndroidPlaceholder.html", function (response, status, xhr) {
        if (status == "error") {
            console.log("An error has occured. Attempting to reload Android projects.");
            caches.delete("AndroidPlaceholder.html");
            caches.delete("Dynamic/HTML/AndroidPlaceholder.html");
            loadAndroid();
        }
    });
};
var loadOther = function () {
    $("#Other-Table").load("Dynamic/HTML/OtherPlaceholder.html", function (response, status, xhr) {
        if (status == "error") {
            console.log("An error has occured. Attempting to reload other projects.");
            caches.delete("OtherPlaceholder.html");
            caches.delete("Dynamic/HTML/OtherPlaceholder.html");
            loadOther();
        }
    });
};

$(function () {
    if (document.getElementById("iOS-Table") != null) {
        loadIos();
    }

    if (document.getElementById("Android-Table") != null) {
        loadAndroid();
    }
    
    if (document.getElementById("Other-Table") != null) {
        loadOther();
    }
});