import React from "react";
import Header from "../Header/";
import Footer from "../Footer/";
import AboutMe from "../AboutMe/";
import Work from "../WorkFm/";
import "./index.css";

class HomePage extends React.Component {

    render() {

        const divStyleF = {
            
            border: 'aqua solid 2px',
            padding: '10px',
        };


        return(
            <html>

                <head>
                    <title>Maurice's Page</title>
                </head>
             <Header />
            
             <AboutMe />


             <Work />


                <div style={divStyleF} > 
             <Footer />
                </div>

            </html> 
        );
    }

}
export default HomePage;