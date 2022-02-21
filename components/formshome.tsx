import Link from "next/link"
import { useRouter } from "next/router"
import { Size } from '../interfaces/size'
import Image from 'next/image'
import { MyHome } from "../interfaces/myhome"

const size: Size = {
    width: 350,
    height: 350,
}

function FormsHome({ children }: any) {

    const value: any = children.home
    const URL_API: any = children.url_api
    const IMG: any = children.img
    const router = useRouter()
    const registerNewHome = async (event: any) => {
        event.preventDefault()
        if (value != null) {
            const URL_PATCH = URL_API + "/home/" + value.id
            await fetch(URL_PATCH, {
                body: JSON.stringify({
                    name: event.target.name.value,
                    category: event.target.category.value,
                    url: event.target.url.value,
                    url_img: event.target.url_img.value,
                    actif: event.target.flexSwitchCheckDefault.checked,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PATCH'
            })
        } else {
            await fetch(URL_API + "/home", {
                body: JSON.stringify({
                    name: event.target.name.value,
                    category: event.target.category.value,
                    url: event.target.url.value,
                    url_img: event.target.url_img.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
        }
        router.push('/home/admin')
    }
    return (<>
        <div className="row">
            <div className="col-3">
                {value === null ?
                    <Image src={IMG}
                        alt='IMG'
                        title='IMG'
                        className="card-img-top"
                        width={size.width}
                        height={size.height}
                    /> :
                    <Image src={value.url_img}
                        alt={value.name}
                        title={value.name}
                        className="card-img-top"
                        width={size.width}
                        height={size.height}
                    />
                }
            </div>
            <div className="col-6">
                <form onSubmit={registerNewHome}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        {value === null ?
                            <input id="name" name="name" className="form-control form-control-lg" type="text" required /> :
                            <input id="name" name="name" className="form-control form-control-lg" defaultValue={value.name} type="text" required />}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        {value === null ?
                            <input id="category" name="category" className="form-control form-control-lg" type="text" autoComplete="category" required /> :
                            <input id="category" name="category" className="form-control form-control-lg" defaultValue={value.category} type="text" autoComplete="category" required />}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="url" className="form-label">Url</label>
                        {value === null ?
                            <input id="url" name="url" className="form-control form-control-lg" type="text" autoComplete="url" required /> :
                            <input id="url" name="url" className="form-control form-control-lg" type="text" defaultValue={value.url} autoComplete="url" required />}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="url_img" className="form-label">Url_img</label>
                        {value === null ?
                            <textarea id="url_img" name="url_img" className="form-control" rows={3} autoComplete="url_img" required ></textarea> :
                            <textarea id="url_img" name="url_img" className="form-control" rows={3} defaultValue={value.url_img} autoComplete="url_img" required ></textarea>}
                    </div>
                    {value === null ? "" :
                        <div className="mb-3">
                            <label htmlFor="actif" className="form-label">Actif</label>
                            {value === null ?
                                ""
                                :
                                <div className="form-check form-switch">
                                    {value.actif === true ?
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked></input> :
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />}
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                                </div>}

                        </div>
                    }
                    <br />
                    <div className="d-grid gap-4 d-md-flex">
                        <button className="btn btn-success btn-lg" type="submit">Valider</button>
                        <Link href="/home/admin">
                            <a className="btn btn-danger btn-lg">Annuler</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div >
    </>)
}

export default FormsHome