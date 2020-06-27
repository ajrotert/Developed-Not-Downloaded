
class AndroidProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="grid-container">
                <div className="block_region published-tag">
                    <a className="overlay_region"></a>
                    <div className="inner_region">
                        <center>
                            <img className="resizing" src="Images/Projects/Lift.png" alt="Lift Force Calculator" />
                            <h2><i>Lift Force Calculator</i></h2>
                            <p>Published: <a href="LiftCoefficientCalculator.html">Support Page</a></p>
                            <p>View at the Google Play Store: <a href="https://play.google.com/store/apps/details?id=com.ar.liftcalculator">Visit Now</a></p>
                            <p>See the code: <a href="https://github.com/ajrotert/Lift-Coefficient-Calculator">View Repository</a></p>
                            <p>Tags:  <object class="tag">Published</object> </p>
                            <p>Language Used: C#</p>
                            <p>About:</p>
                            <p className="just">
                                Lift Coefficient Calclulator uses an Android based platform to calculate the lift coefficient formula.
                                The user interface implaments event handlers for each text field, allowing calculations to happen
                                as soon as all the required input is provided.
                            </p>
                            <hr className="table" />
                        </center>
                    </div>
                </div>
            </div>
        ); 
    }
}

ReactDOM.render(<AndroidProjects />, document.querySelector('#Android-Table'));