import SimpleLayout from '../../components/layout/simple'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Head from "next/head";
import Link from 'next/link';


export default function Projects(initialData) {
    return (
        <SimpleLayout>
            <Head>
                <title>Kakotsu - Projects</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="col">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Projects</h1>
                        <p1>We do a lil' trolling</p1>
                    </div>
                </section>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='/projects/takumi'>
                            <div className="card" style={{ width: 'auto', cursor: 'pointer' }}>
                                <img className="card-img-top" src="/projects/takumi.png" alt="Card image cap" />
                                <div className="card-body">
                                    <h3 className="card-title">Takumi</h3>

                                    <div className="chip bg-light">
                                        Discord bot, 3 Languages
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </SimpleLayout>
    )
}
