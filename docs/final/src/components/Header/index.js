import React from "react";

class Header extends React.Component {

    render() {

        const divStyleF = {

            border: 'aqua solid 2px',
            padding: '10px',
        };

        return (

            <header style={divStyleF}>

               <h1>Insight on Maurice</h1>
               
           </header>

        );
    }

}
export default Header;