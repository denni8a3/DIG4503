import Head from 'next/head'
import Link from 'next/link';
import styles from '../component/IdSearch/IdSearch.module.css';


class Home extends React.Component {

  render() {
    return (
      <div>
        <Head>
          <title>Choose your Pokemon!</title>
        </Head>
        <div className={styles.id}>

          <h1 className={styles.id} >Welcome to the Pokey Stop</h1>

          <br></br>
          <h2>
            Go to one of the links below to find your partner!
        </h2>

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

          <Link href="/id">
            <a>Id</a>
          </Link>
        </div>
      </div>
    );
  }

}
export default Home
