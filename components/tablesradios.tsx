import Image from 'next/image'
import Link from 'next/link'
import { MyRadios } from '../interfaces/myradios'
import { Size } from '../interfaces/size'

const size: Size = {
    width: 50,
    height: 50,
}

function TablesRadios({ children }: any) {
    let i: number = 1
    return (<>
        <Link href='/radios/admin/add'>
            <a className="btn btn-success" aria-current="page">Ajouter</a>
        </Link>
        <br />
        <br />
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Nom</th>
                    <th scope="col">url_flux</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {children.radios.map(({ id, name, url_flux, url_img }: MyRadios) => {
                    return (<>
                        <tr>
                            <th scope="row">{i++}</th>
                            <td>{id}</td>
                            <td>
                                <Image
                                    src={url_img}
                                    alt={name}
                                    title={name}
                                    className="card-img-top"
                                    width={size.width}
                                    height={size.height}
                                />
                            </td>
                            <td>{name}</td>
                            <td>
                                <Link href={url_flux}>
                                    <a className="nav-link active" aria-current="page" target="_blank">{url_flux}</a>
                                </Link>
                            </td>
                            <td><Link href={{
                                pathname: '/radios/admin/update/[id]',
                                query: { id: id },
                            }}>
                                <a className="btn btn-warning" aria-current="page">Modifier</a>
                            </Link>
                                <span> | </span>
                                <Link href={{
                                    pathname: '/radios/admin/delete/[id]',
                                    query: { id: id },
                                }}>
                                    <a className="btn btn-danger" aria-current="page">Supprimer</a>
                                </Link>
                            </td>
                        </tr>
                    </>)
                })
                }
            </tbody>
        </table>
    </>)
}

export default TablesRadios