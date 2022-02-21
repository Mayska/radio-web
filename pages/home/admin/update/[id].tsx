import { MyHome } from "../../../../interfaces/myhome"
import Forms from "../../../../components/formshome"

function Update(props: MyHome) {
    return (<>
        <Forms>{props}</Forms>
    </>)
}

export async function getStaticProps({ params }: any) {
    const URL_API: any = process.env.URL_API
    const IMG: any = process.env.IMG
    const res: Response = await fetch(process.env.URL_API + '/home/' + params.id, {
        method: 'get'
    })
    const home: MyHome = await res.json()
    return {
        props: {
            url_api: URL_API,
            img: IMG,
            home,
        },
    }
}

export async function getStaticPaths() {
    const res: Response = await fetch(process.env.URL_API + '/home', {
        method: "GET"
    })
    const home: MyHome[] = await res.json()
    return {
        paths: home.map(h => ({
            params: { id: h.id.toString() }
        })),
        fallback: false
    }
}


export default Update