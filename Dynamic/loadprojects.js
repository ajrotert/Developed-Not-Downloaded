$(function () {

    if (document.getElementById("iOS-Table") != null) {
        $("#iOS-Table").load("Dynamic/HTML/iOSPlaceholder.html");
    }

    if (document.getElementById("Android-Table") != null) {
        $("#Android-Table").load("Dynamic/HTML/AndroidPlaceholder.html");
    }
    
    if (document.getElementById("Other-Table") != null) {
        $("#Other-Table").load("Dynamic/HTML/OtherPlaceholder.html");
    }
});