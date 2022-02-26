import Link from "next/link"
import { useRouter } from "next/router"
import { Size } from '../interfaces/size'
import Image from 'next/image'
import { MyRadios } from "../interfaces/myradios"

const size: Size = {
    width: 350,
    height: 350,
}

function FormsRadio({ children }: any) {
    const value: MyRadios = children.radios
    const URL_API: any = children.url_api
    const IMG: any = children.img
    const router = useRouter()
    const registerNewRadio = async (event: any) => {
        event.preventDefault()
        if (value != null) {
            const URL_PATCH = URL_API + "/radios/" + value.id
            await fetch(URL_PATCH, {
                body: JSON.stringify({
                    name: event.target.name.value,
                    url_flux: event.target.url_flux.value,
                    url_flux_secondary: event.target.url_flux_secondary.value,
                    url_img: event.target.url_img.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PATCH'
            })
        } else {
            await fetch(URL_API + "/radios", {
                body: JSON.stringify({
                    name: event.target.name.value,
                    url_flux: event.target.url_flux.value,
                    url_flux_secondary: event.target.url_flux_secondary.value,
                    url_img: event.target.url_img.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
        }
        router.push('/radios/admin')
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
                <form onSubmit={registerNewRadio}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        {value === null ?
                            <input id="name" name="name" className="form-control form-control-lg" type="text" required /> :
                            <input id="name" name="name" className="form-control form-control-lg" defaultValue={value.name} type="text" required />}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="url_flux" className="form-label">Url flux</label>
                        {value === null ?
                            <input id="url_flux" name="url_flux" className="form-control form-control-lg" type="text" autoComplete="url_flux" required /> :
                            <input id="url_flux" name="url_flux" className="form-control form-control-lg" type="text" defaultValue={value.url_flux} autoComplete="url" required />}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="url_flux_secondary" className="form-label">Url flux secondaire</label>
                        {value === null ?
                            <input id="url_flux_secondary" name="url_flux_secondary" className="form-control form-control-lg" type="text" autoComplete="url_flux_secondary" /> :
                            <input id="url_flux_secondary" name="url_flux_secondary" className="form-control form-control-lg" type="text" defaultValue={value.url_flux_secondary} autoComplete="url" />}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="url_img" className="form-label">Url img</label>
                        {value === null ?
                            <textarea id="url_img" name="url_img" className="form-control" rows={3} autoComplete="url_img" required ></textarea> :
                            <textarea id="url_img" name="url_img" className="form-control" rows={3} defaultValue={value.url_img} autoComplete="url_img" required ></textarea>}
                    </div>
                    <br />
                    <div className="d-grid gap-4 d-md-flex">
                        <button className="btn btn-success btn-lg" type="submit">Valider</button>
                        <Link href="/radios/admin">
                            <a className="btn btn-danger btn-lg">Annuler</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default FormsRadio