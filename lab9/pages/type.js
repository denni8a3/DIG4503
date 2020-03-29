import Head from 'next/head'
import Link from 'next/link';
import styles from '../component/TypeSearch/TypeSearch.module.css';


class Type extends React.Component {


    getType() {
        // Look for an element with the ID of nameInput
        let typeList = document.querySelector("#typeListInput");

        // Use the same origin
        // 
        // Based on the name, fetch using the server's
        //  request parameter.
        fetch("/api/pokemon/type/" + typeList.value)
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
                    resultElement.innerHTML = "The Names are " + processed.name;
                }

            });
    }

    render() {
        return (
            <div className={styles.type}>

                <Head>
                    <title>Choose by Pokemon type!</title>
                </Head>
                <div>

                <h1>Type Search</h1>
                <input type="text" id="typeListInput" />
                <button onClick={() => { this.getType() }}>SUBMIT</button>

                <br></br>
                <br></br>
                <br></br>

                <Link href="/name">
                    <a>Name</a>
                </Link>

                <br></br>
                <br></br>

                <Link href="/">
                    <a>Home</a>
                </Link>

                <br></br>
                <br></br>

                <Link href="/id">
                    <a>Id</a>
                </Link>
                </div>

                <br></br>

                <h1>Results</h1>
                <div id="results"></div>
            </div>
        );
    }

}

export default Type;
