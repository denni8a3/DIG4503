import React from "react";
import "./index.css";

class Work extends React.Component {

    render() {
        return (

            <div class="grid-item par">
                <div id="lang"></div>

                <h2>Computer Softwares and Languages</h2>
                <div class="langgrid">
                    <div class="lang">
                        <h3>Front-end:</h3>
                        <p>HTML5</p>
                        <p>CSS</p>
                        <p>WordPress</p>
                        <p>SASS</p>
                    </div>

                    <div class="lang">
                        <h3>Back-end:</h3>
                        <p>PHP</p>
                        <p>mySQL</p>
                        <p>JavaScript</p>
                        <p>Node JS</p>
                        <p>Command Line</p>
                        <p>React/React-Native</p>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
        );
    }

}
export default Work;