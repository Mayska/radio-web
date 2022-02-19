import FormsRadio from "../../../../components/formsradio"
import { MyRadios } from "../../../../interfaces/myradios"

function Update(props: MyRadios) {
    return (<>
        <FormsRadio>{props}</FormsRadio>
    </>)
}

export async function getStaticProps({ params }: any) {
    const URL_API: any = process.env.URL_API
    const IMG: any = process.env.IMG
    const res: Response = await fetch(process.env.URL_API + '/radios/' + params.id, {
        method: 'get'
    })
    const radios: MyRadios = await res.json()
    return {
        props: {
            url_api: URL_API,
            img: IMG,
            radios,
        },
    }
}

export async function getStaticPaths() {
    const res: Response = await fetch(process.env.URL_API + '/radios')
    const radios: MyRadios[] = await res.json()
    return {
        paths: radios.map(h => ({
            params: { id: h.id.toString() }
        })),
        fallback: false
    }
}


export default Update