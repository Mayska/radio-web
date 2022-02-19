import Link from 'next/link'

function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" >My Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/home/tv">
                                <a className="nav-link active" aria-current="page" href="#">Tv</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/radios'>
                                <a className="nav-link active" aria-current="page">Radios</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/home/admin'>
                                <a className="nav-link active" aria-current="page">Admin</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar