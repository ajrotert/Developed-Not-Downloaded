var intervalID;
function toggleContent(event) {
    var ids = document.getElementById(event.currentTarget.id);
    ids = document.getElementById(ids.id.replace("-carrot", ""));
    var contents = ids;
    var carrots = document.getElementById(contents.id + "-carrot");

    if (contents.style.display === "none") {
        contents.style.display = "inline-block";
        contents.style.opacity = 0;
        intervalID = setInterval(buildOpacity, 15, contents);
        carrots.innerHTML = "<center> <p>&#x2571&#x2572</p> </center>";
    } else {
        contents.style.opacity = 1;
        intervalID = setInterval(dropOpacity, 15, contents);
        carrots.innerHTML = "<center> <p>&#x2572&#x2571</p> </center>";
    }
};

function buildOpacity(node) {
    var opacity = parseFloat(node.style.opacity) + .05;
    node.style.opacity = opacity;
    if (node.style.opacity >= 1.0) {
        clearInterval(intervalID);
    }
};
function dropOpacity(node) {
    var opacity = parseFloat(node.style.opacity) - .05;
    node.style.opacity = opacity;
    if (node.style.opacity <= 0) {
        clearInterval(intervalID);
        node.style.display = "none";
    }
};