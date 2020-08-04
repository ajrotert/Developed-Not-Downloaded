window.onload = function () {
    var placeholder = document.getElementById("placeholder");
    var html_block = localStorage["html"];

    html_block = "<center>" + html_block + "<\/center>";

    placeholder.innerHTML = html_block;

    var temp = placeholder.getElementsByTagName("center")[0];
    if (temp != null) {
        temp = temp.getElementsByTagName("h2")[0];
    }
    if (temp != null) {
        var title = temp.textContent;
        document.getElementById("title").textContent = title;
        var filename = title.replace(/\s/g, '') + '.gif';
        var filepath = 'Images/ProjectDemos/' + filename;
        var image = `<img src=${filepath} />`;
        var centerImage = "<center>" + image + "<\/center>";
        var demo = document.getElementById("demo-placeholder");
        demo.innerHTML = centerImage;
    }

};