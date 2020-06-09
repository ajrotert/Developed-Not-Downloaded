function toggleContent(event) {
    var ids = document.getElementById(event.currentTarget.id);
    ids = document.getElementById(ids.id.replace("-carrot", ""));
    var contents = ids;
    var carrots = document.getElementById(contents.id + "-carrot");

    if (contents.style.display === "none") {
        contents.style.display = "inline-block";
        console.log("here: " + carrots.getElementsByTagName("p").textContent);
        carrots.innerHTML = "<center> <p>&#x2571&#x2572</p> </center>";
    } else {
        contents.style.display = "none";
        carrots.innerHTML = "<center> <p>&#x2572&#x2571</p> </center>";
    }
}