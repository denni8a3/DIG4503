import Head from 'next/head'
import Link from 'next/link';
import styles from '../component/IdSearch/IdSearch.module.css';

class Id extends React.Component {


    getId() {
        // Look for an element with the ID of nameInput
        let id = document.querySelector("#idInput");

        // Use the same origin
        // 
        // Based on the name, fetch using the server's
        //  request parameter.
        fetch("/api/pokemon/id/" + id.value)
            .then((res) => { return res.json(); })
            .then((processed) => {

                // Look for an element with the ID of results
                let resultElement = document.querySelector("#results");

                // If the processed object has an 'error' property...
                if (processed.error) {
                    //... write that it could not be found.
                    resultElement.innerHTML = "Could not find!";
                } else {
                    //... otherwise, since no error, write its ID.
                    resultElement.innerHTML = "Its NAME is " + processed.name;
                }

            });
    }

    render() {
        return (
            <div>

                <Head>
                    <title>Choose your Pokemon!</title>
                </Head>
                <div className={styles.id}>


                <h1>Id Search</h1>
                <input type="text" id="idInput" />
                <button onClick={() => { this.getId() }}>SUBMIT</button>

                <br></br>
                <br></br>
                <br></br>

                <Link href="/name">
                    <a>Name</a>
                </Link>

                <br></br>
                <br></br>

                <Link href="/type">
                    <a>Type</a>
                </Link>

                <br></br>
                <br></br>

                <Link href="/">
                    <a >Home</a>
                </Link>
                </div>

                <br></br>

                <h1>Results</h1>
                <div id="results"></div>
            </div>
        );
    }

}

export default Id;
