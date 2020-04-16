import Head from 'next/head'
import Link from 'next/link';

import styles from '../component/NameSearch/NameSearch.module.css';


class Name extends React.Component {


getName() {
    // Look for an element with the ID of nameInput
    let name = document.querySelector("#nameInput");

    // Use the same origin
    // 
    // Based on the name, fetch using the server's
    //  request parameter.
    fetch("/api/pokemon/name/" + name.value)
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
                resultElement.innerHTML = "Its ID is " + processed.id;
            }

        });
}

    render() {
        return (
            <div>

                <Head>
                    <title>Choose A Pokemon name!</title>
                </Head>
                <div className={styles.name}>

                

                    <h1 className={styles.name }>Name Search</h1>
                <input type="text" id="nameInput" />
                <button onClick={() => { this.getName() }}>SUBMIT</button>

                <br></br>
                <br></br>
                <br></br>

                <Link href="/">
                        <a className={styles.name}>Home</a>
                </Link>

                <br></br>
                <br></br>

                <Link href="/type">
                        <a className={styles.name}>Type</a>
                </Link>

                <br></br>
                <br></br>

                <Link href="/id">
                        <a className={styles.name} >Id</a>
                </Link>
                </div>

                <br></br>

                <h1>Results</h1>
                <div id="results"></div>
            </div>
        );
  }

}

export default Name;
