import Link from "next/link"

function Nav() {
    return (<>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link href='/home/admin'>
                    <a className="nav-link" aria-current="page">Tous</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href='/radios/admin'>
                    <a className="nav-link" aria-current="page">Radios</a>
                </Link>
            </li>
        </ul>
    </>)
}

export default Nav