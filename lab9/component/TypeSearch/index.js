import styles from  "TypeSearch.module.css";

class TypeSearch extends React.Component {

    pokeType(event) {

        // Stop (prevent) the 'default' form action
        event.preventDefault();

        // Find the element with 'id="name"'
        let element = document.querySelector("#type");

        fetch("http://localhost/type/" + element.value)
            .then((res) => {
                // Parse the string into a JavaScript object and return it
                return res.json();
            })
            .then((processed) => {

                // Find the element with 'id="reportingArea"'
                let reporting = document.querySelector("#reportingArea");

                // Does the 'processed' object have a property called 'error'?
                if (processed.error) {
                    reporting.innerHTML = processed.error;
                } else {
                    reporting.innerHTML = processed.id;
                }

            });
    }
    render() {
        return (
            <div>
                <h2>Name</h2>
                <form onSubmit={this.pokeType}>
                    <input id="type" type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default TypeSearch;