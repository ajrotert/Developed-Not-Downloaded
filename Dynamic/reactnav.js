
/* HOW TO USE
 * THREE STEPS

 *(1) At the top of each HTML BODY add

    <nav id="nav-placeholder"></nav>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    <script type="text/babel" src="Navigation/reactnav.js"></script>



 *(2) Add navigation links in the render() function inside the  <ul className="nav" id="navStart"> </ul>
    * For NON-Dropdown use this template:
        <li className="navitem" id="Home-Page"><a href="index.html">Home</a></li>

    * For Dropdown use this template:
        <li class="dropdown navitem" id="Main-Page">
            <a href="#null" class="dropbtn">Dropdown Menu</a>
            <div class="dropdown-content">
                <a href="#webpage_here">Item 1</a>
                <a href="#webpage_here">Item 2</a>
                <a href="#webpage_here">Item 3</a>
            </div>
        </li>



    *(3) To show the active page add the page ID to the list below
        else if (title.includes("Online")) {
            document.getElementById("PB-Page").classList.add("active");
*/


//Styles for the navigation bar
function getStylesAsString() {
    return { __html: 'ul.nav { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; } li.navitem { float: left;  } li.navitem a, .dropbtn { display: inline-block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; } li.navitem a:hover, dropdown:hover .dropbtn { background-color: #0066ff; } li.dropdown { display: inline-block; } .dropdown-content { display: none; position: absolute; background-color: #DCDCDC; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; } div.dropdown-content a { color: black; padding: 12px 16px; text-decoration: none; text-align: left; display: block; } .dropdown-content a:hover { background-color: #f1f1f1; } .dropdown:hover .dropdown-content { display: block; } .active { background-color: #022E6D; } .hamburgerBar { display: none; } .sticky { position: fixed; top: 0; width: 90%; z-index: 100; } img.logo-nav { z-index: 1; position: fixed; top: 0; left: 0; height: 60px;} @media screen and (max-width: 1000px) { li.navitem a, .dropbtn { font-size: 12px;} div.dropdown-content a { font-size: 12px; } .sticky { width: 100%; } } @media screen and (max-width: 600px) { .nav li:not(:first-child):not(:last-child) { display: none; } .nav.responsive li:not(:empty) { float: none; display: block; text-align: left; } .navitem.hamburgerBar { float: right; display: block; } .nav.responsive { position: relative; } .nav.responsive .hamburgerBar { position: absolute; right: 0; top: 0; } .dropdown-content a { background-color: #DCDCDC; } .dropdown:hover .dropdown-content { display: contents; color: white; } li.navitem a, .dropbtn { float: none; display: block; text-align: left;} }'};
}

//Create navigation bar using react/JSX
class ArNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
            <style dangerouslySetInnerHTML={getStylesAsString()} />

            <nav id="nav-placeholder">
                <ul className="nav" id="navStart">
                        <li className="navitem" id="Home-Page"><a href="index.html">Home</a></li>
                        <li class="dropdown navitem" id="iOS-Page">
                            <a href="#null" className="dropbtn">iOS Apps</a>
                            <div class="dropdown-content">
                                <a href="PutterFitter.html">Putter Fitter</a>
                                <a href="TrapshootingScorecard.html">Trapshooting Scorecard</a>
                                <a href="ComputerScienceCalculator.html">Computer Science Calculator</a>
                                <a href="SpeedometerPlusMap.html">Speedometer Plus Map</a>
                                <a href="HolidayClicker.html">Holiday Clicker</a>
                                <a href="AugmentedRealityVisualizer.html">AR Visualizer</a>
                                <a href="PhotoboxWidget.html">Photobox Widget</a>
                            </div>
                        </li>
                        <li className="dropdown navitem" id="Android-Page">
                            <a href="#null" className="dropbtn">Android Apps</a>
                            <div className="dropdown-content">
                                <a href="LiftCoefficientCalculator.html">Lift Coefficient Calculator</a>
                            </div>
                        </li>
                        <li className="dropdown navitem" id="Projects-Page">
                            <a href="Projects.html" className="dropbtn">Projects</a>
                            <div className="dropdown-content">
                                <a href="iOS.html">iOS Projects</a>
                                <a href="Android.html">Android Projects</a>
                                <a href="Other.html">Other Projects</a>
                            </div>
                        </li>
                        <li className="navitem" id="App-Page"><a href="app">App API</a></li>
                        <li class="dropdown navitem" id="Articles-Page">
                            <a href="#null" className="dropbtn">My Articles</a>
                            <div class="dropdown-content">
                                <a href="BusinessPlan.html">Business Plan Competition</a>
                                <a href="BuildWidgets.html">Widgets Article</a>
                            </div>
                        </li>
                        <li className="navitem" id="About-Page"><a href="AboutMe.html">About Me</a></li>
                        <li className="navitem" id="Contact-Page"><a href="ContactUs.html">Contact Us</a></li>
                        <li className="navitem hamburgerBar" id="Drop-Down"><a href="#null" onClick={this.props.onClick}>&#9776;</a></li>
                </ul>
                </nav>
            </div>
        );
    }
}

//Loads navigation bar into webpage
ReactDOM.render(<ArNav onClick={toggleFunction} />, document.querySelector('#nav-placeholder'));


//*******************************************************************************
//Shows color on the active page.

var title = document.title;
var text = "Developed Not Downlaoded | ";

if ((text + "Contact Us") == title)
    document.getElementById("Contact-Page").classList.add("active");
else if ((text + "Home") == title)
    document.getElementById("Home-Page").classList.add("active");
else if ((text + "About The Developer") == title)
    document.getElementById("About-Page").classList.add("active");
else if ((text + "Business Plan") == title)
    document.getElementById("Articles-Page").classList.add("active");
else if ((text + "Widgets Article") == title)
    document.getElementById("Articles-Page").classList.add("active");
else if ((text + "Projects") == title)
    document.getElementById("Projects-Page").classList.add("active");
else if ((text + "iOS Projects") == title)
    document.getElementById("Projects-Page").classList.add("active");
else if ((text + "Android Projects") == title)
    document.getElementById("Projects-Page").classList.add("active");
else if ((text + "Other Projects") == title)
    document.getElementById("Projects-Page").classList.add("active");
else if ((text + "Project View") == title)
    document.getElementById("Projects-Page").classList.add("active");
else if ((text + "Computer Science Calculator App") == title)
    document.getElementById("iOS-Page").classList.add("active");
else if ((text + "Holiday Clicker App") == title)
    document.getElementById("iOS-Page").classList.add("active");
else if ((text + "Lift Coefficient Calculator App") == title)
    document.getElementById("Android-Page").classList.add("active");
else if ((text + "Putter Fitter App") == title)
    document.getElementById("iOS-Page").classList.add("active");
else if ((text + "Simple Speedometer and Map App") == title)
    document.getElementById("iOS-Page").classList.add("active");
else if ((text + "Trap Shooting Scorecard App") == title)
    document.getElementById("iOS-Page").classList.add("active");
else if ((text + "Augmented Reality Visualizer App") == title)
    document.getElementById("iOS-Page").classList.add("active");
else if ((text + "Photobox Widget") == title)
    document.getElementById("iOS-Page").classList.add("active");
else if ((text + "iOS App Download Counter") == title)
    document.getElementById("App-Page").classList.add("active");

//*******************************************************************************
//Toggles Responsive menu 
function toggleFunction() {
    var x = document.getElementById("navStart");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
    return false;
}

//*******************************************************************************
//Toggles sticky menu. When the menu reaches the top, it attaches to the top

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("nav-placeholder");

var sticky = navbar.offsetTop;

function myFunction() {

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }

}
