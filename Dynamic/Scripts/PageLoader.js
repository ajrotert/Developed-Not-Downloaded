
var loaded;
window.onload = function () {
    loaded = false;
    /* Page content is loaded after the page loads, so the elements will not be found, this ensures that the content will be loaded first */
    window.onmousemove = events;
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
                    var link = this.parentElement;
                    var html_block = link.getElementsByTagName("div")[0].getElementsByTagName("center")[0];
                    localStorage['html'] = html_block.innerHTML;
                    window.location.assign("ProjectView.html");
                    if (!evt)
                        evt = window.event;
                    if (evt.preventDefault)
                        evt.preventDefault();
                    else
                        evt.returnFalse = false;
                };
            }
        }
        if (Other != null) {
            var temp = Other.getElementsByClassName("grid-container");
            var Other_Elements = temp[0].getElementsByClassName("block_region");  //list of the group listings for each project
            for (var i = 0; i < Other_Elements.length; i++) {
                /*Add click event to all the seperate projects*/
                Other_Elements[i].getElementsByTagName("a")[0].onclick = function (evt) {
                    var link = this.parentElement;
                    var html_block = link.getElementsByTagName("div")[0].getElementsByTagName("center")[0];
                    localStorage['html'] = html_block.innerHTML;
                    window.location.assign("ProjectView.html");
                    if (!evt)
                        evt = window.event;
                    if (evt.preventDefault)
                        evt.preventDefault();
                    else
                        evt.returnFalse = false;
                };
            }
        }
        if (IOS != null) {
            var temp = IOS.getElementsByClassName("grid-container");
            var IOS_Elements = temp[0].getElementsByClassName("block_region");  //list of the group listings for each project

            for (var i = 0; i < IOS_Elements.length; i++) {
                /*Add click event to all the seperate projects*/
                IOS_Elements[i].getElementsByTagName("a")[0].onclick = function (evt) {
                    var link = this.parentElement;
                    var html_block = link.getElementsByTagName("div")[0].getElementsByTagName("center")[0];
                    localStorage['html'] = html_block.innerHTML;
                    window.location.assign("ProjectView.html");
                    if (!evt)
                        evt = window.event;
                    if (evt.preventDefault)
                        evt.preventDefault();
                    else
                        evt.returnFalse = false;
                };
            }
        }
        
        loaded = true;
    }
    else 
        window.onmousemove = null;
};

//document.getElementById("Android-Table").onclick = function () {



//    };



   /* <div class="grid-container">
            <div class="block_region">
                <a class="overlay_region" href="#"></a>
                <div class="inner_region">
                    <center>
                        <img class="resizing" src="Images/Projects/Lift.png" alt="Lift Force Calculator" />
                        <h2><i>Lift Force Calculator</i></h2>
                        <p>Published: <a href="LiftCoefficientCalculator.html">Support Page</a></p>
                        <p>View at the Google Play Store: <a href="https://play.google.com/store/apps/details?id=com.ar.liftcalculator">Visit Now</a></p>
                        <p>Language Used: C#</p>
                        <p>About:</p>
                        <p class="just">
                            Lift Coefficient Calclulator uses an Android based platform to calculate the lift coefficient formula.
                            The user interface implaments event handlers for each text field, allowing calculations to happen
                            as soon as all the required input is provided.
    
                    </p>
                        <hr class="table" />
                    </center>
                </div>
            </div>
    </div>
    */