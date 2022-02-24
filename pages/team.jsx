import SimpleLayout from '../components/layout/simple'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Head from "next/head";
import Link from 'next/link';


export default function Projects(initialData) {
    return (
        <SimpleLayout>
            <Head>
                <title>Kakotsu - Team</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="col">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Kakotsu Team</h1>
                        <p1>1337 Hakkers</p1>
                    </div>
                </section>
            </div>
            <div className="col">
                <h1>JavaScript</h1>
                <div className="row">
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='https://github.com/Zemyoro'>
                            <div className="card" style={{ width: 'auto', cursor: 'pointer' }}>
                                <img className="card-img-top" src="/profiles/zemyoro.webp" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Zemyoro</h5>

                                    <div className="chip bg-light">
                                        Team leader
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='https://github.com/M1nxYT'>
                            <div className="card" style={{ width: 'auto', cursor: 'pointer' }}>
                                <img className="card-img-top" src="/profiles/m1nx.gif" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">M1nx</h5>

                                    <div className="chip bg-light">
                                        JS/TS Developer
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='https://github.com/levichlev'>
                            <div className="card" style={{ width: 'auto', cursor: "pointer" }}>
                                <img className="card-img-top" src="/profiles/levichlev.gif" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Levichlev</h5>

                                    <div className="bg-light">
                                        JS Developer
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='https://github.com/roembol2000'>
                            <div className="card" style={{ width: 'auto', cursor: "pointer" }}>
                                <img className="card-img-top" src="/profiles/roembol.webp" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Roembol</h5>

                                    <div className="chip bg-light">
                                        JS Developer
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='https://github.com/Exerra'>
                            <div className="card" style={{ width: 'auto', cursor: "pointer" }}>
                                <img className="card-img-top" src="/profiles/occultwaifu.webp" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Occult Waifu</h5>

                                    <div className="chip bg-light">
                                        JS Developer
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='https://github.com/CraftedVortex'>
                            <div className="card" style={{ width: 'auto', cursor: 'pointer' }}>
                                <img className="card-img-top" src="/profiles/craftedvortex.webp" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Crafted Vortex</h5>

                                    <div className="chip bg-light">
                                        JS Developer
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col">
                <h1>Python</h1>
                <div className="row">
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='https://github.com/ducanh2002123'>
                            <div className="card" style={{ width: 'auto', cursor: 'pointer' }}>
                                <img className="card-img-top" src="/profiles/thk.webp" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">THK</h5>

                                    <div className="chip bg-light">
                                        Team leader
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='https://github.com/Sangster-5'>
                            <div className="card" style={{ width: 'auto', cursor: 'pointer' }}>
                                <img className="card-img-top" src="/profiles/sangster.webp" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Sangster</h5>

                                    <div className="chip bg-light">
                                        Py Developer
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4" style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                        <Link href='https://github.com/Barry-16'>
                            <div className="card" style={{ width: 'auto', cursor: 'pointer' }}>
                                <img className="card-img-top" src="/profiles/barry.png" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Barry</h5>

                                    <div className="bg-light">
                                        Py Developer
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
