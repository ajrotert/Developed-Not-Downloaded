
var loaded;
window.onload = function () {
    loaded = false;
    /* Page content is loaded after the page loads, so the elements will not be found, this ensures that the content will be loaded first */
    window.onmousemove = events; //Computer
    window.ontouchstart = events; //Mobile
};
var behavior = function (evt, link) {
    var link = link;
    var html_block = link.getElementsByTagName("div")[0].getElementsByTagName("center")[0];
    html_block.classList.add("region")
    localStorage['html'] = html_block.innerHTML;
    window.location.assign("ProjectView.html");
    if (!evt)
        evt = window.event;
    if (evt.preventDefault)
        evt.preventDefault();
    else
        evt.returnFalse = false;
};
var events = function(){
    if (!loaded) {
        console.log("Loading Events");

        var Android = document.getElementById("Android-Table");
        var Other = document.getElementById("Other-Table");
        var IOS = document.getElementById("iOS-Table");
        if (Android != null) {
            var temp = Android.getElementsByClassName("grid-container");
            var Android_Elements = temp[0].getElementsByClassName("block_region");  //list of the group listings for each project
            for (var i = 0; i < Android_Elements.length; i++) {
                /*Add click event to all the seperate projects*/
                Android_Elements[i].getElementsByTagName("a")[0].onclick = function (evt) {
                    behavior(evt, this.parentElement)
                };
            }
        }
        if (Other != null) {
            var temp = Other.getElementsByClassName("grid-container");
            var Other_Elements = temp[0].getElementsByClassName("block_region");  //list of the group listings for each project
            for (var i = 0; i < Other_Elements.length; i++) {
                /*Add click event to all the seperate projects*/
                Other_Elements[i].getElementsByTagName("a")[0].onclick = function (evt) {
                    behavior(evt, this.parentElement)
                };
            }
        }
        if (IOS != null) {
            var temp = IOS.getElementsByClassName("grid-container");
            var IOS_Elements = temp[0].getElementsByClassName("block_region");  //list of the group listings for each project

            for (var i = 0; i < IOS_Elements.length; i++) {
                /*Add click event to all the seperate projects*/
                IOS_Elements[i].getElementsByTagName("a")[0].onclick = function (evt) {
                    behavior(evt, this.parentElement)
                };
            }
        }
        
        loaded = true;
    }
    else 
        window.onmousemove = null;
};