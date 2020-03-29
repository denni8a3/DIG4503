import styles from '../component/IdSearch/IdSearch.module.css';

class IdSearch extends React.Component {

    pokeId(event) {

        // Stop (prevent) the 'default' form action
        event.preventDefault();

        // Find the element with 'id="score"'
        let element = document.querySelector("#id");

        fetch("http://localhost/id/" + element.value)
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
                    reporting.innerHTML = processed.name;
                }

            });
    }
    render() {
        return (
            <div><h2 className={styles.id}>ID</h2>
                <form onSubmit={this.pokeId}>
                    <input id="id" type="text" />
                    <button>Submit</button>
                </form>


            </div>
        );
    }
}
export default IdSearch;