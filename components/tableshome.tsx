import Image from 'next/image'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { MyHome } from '../interfaces/myhome'
import { Size } from '../interfaces/size'

const size: Size = {
    width: 50,
    height: 50,
}


function TablesHome({ children }: any) {
    const router = useRouter()
    const deleteItems = async (event: any) => {
        event.preventDefault()
        await fetch("https://nestradio.herokuapp.com" + '/home/' + event.target.id.id, {
            method: 'delete'
        })
        router.push('/home/admin')
    }

    let i: number = 1
    return (<>
        <Link href='/home/admin/add'>
            <a className="btn btn-success" aria-current="page">Ajouter</a>
        </Link>
        <br />
        <br />
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Catégorie</th>
                    <th scope="col">Image</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Lien</th>
                    <th scope="col">Actif</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {children.home.map(({ id, category, name, url, url_img, actif }: MyHome) => {
                    return (<>
                        <tr>
                            <th scope="row">{i++}</th>
                            <td>{id}</td>
                            <td>{category}</td>
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
                                <Link href={url}>
                                    <a className="nav-link active" aria-current="page" target="_blank">{url}</a>
                                </Link>
                            </td>
                            <td>{actif === true ?
                                <span className="material-icons">
                                    task_alt
                                </span>
                                :
                                <span className="material-icons">
                                    highlight_off
                                </span>}</td>
                            <td><Link href={{
                                pathname: '/home/admin/update/[id]',
                                query: { id: id },
                            }}>
                                <a className="btn btn-warning" aria-current="page">Modifier</a>
                            </Link>
                                <span> | </span>
                                <form onSubmit={deleteItems}>
                                    <button id={id} name="id" className="btn btn-danger" aria-current="page" type="submit">Supprimer</button>
                                </form>
                            </td>
                        </tr>
                    </>)
                })
                }
            </tbody>
        </table>
    </>)
}

export default TablesHome