import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Myfooter from "../components/footer/footer";

export default function Home(initialData) {
    return (
        <SimpleLayout>
            <Head>
                <title>Kakotsu - Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="col">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Home</h1>
                    </div>

                    <div className="row">
                        <p1>Hey People</p1>

                    </div>
                </section>
            </div>
        </SimpleLayout>
    )
}
