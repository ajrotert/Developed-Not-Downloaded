window.onload = function () {
    var placeholder = document.getElementById("placeholder");
    var html_block = localStorage["html"];

    html_block = "<center>" + html_block + "<\/center>";

    placeholder.innerHTML = html_block;

    var temp = placeholder.getElementsByTagName("center")[0];
    if (temp != null)
        temp = temp.getElementsByTagName("h2")[0];
    if (temp != null)
        document.getElementById("title").textContent = temp.textContent;

};