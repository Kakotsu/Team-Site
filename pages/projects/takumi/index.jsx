import SimpleLayout from '../../../components/layout/simple'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Head from "next/head";


export default function Projects(initialData) {
    return (
        <SimpleLayout>
            <Head>
                <title>Kakotsu - Takumi</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="col">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Takumi</h1>
                        <p1>Discord bot, 3 Languages</p1>
                    </div>
                </section>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <div className="card" style={{ width: 'auto' }}>
                            <img className="card-img-top" src="/projects/takumi.png" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Takumi TS</h3>

                                <div className="chip bg-light">
                                    2021 Typescript
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <div className="card" style={{ width: 'auto' }}>
                            <img className="card-img-top" src="/projects/takumi.png" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Takumi JS</h3>

                                <div className="chip bg-light">
                                    2020 JavaScript
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <div className="card" style={{ width: 'auto' }}>
                            <img className="card-img-top" src="/projects/takumi.png" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Takumi Py</h3>

                                <div className="chip bg-light">
                                    2019 Python
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SimpleLayout>
    )
}
