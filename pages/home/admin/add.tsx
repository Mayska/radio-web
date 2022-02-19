import FormsHome from "../../../components/formshome"
import { MyHome } from "../../../interfaces/myhome"

function Add(props: any) {
    return (<>
        <FormsHome>{props}</FormsHome>
    </>
    )
}

export async function getStaticProps() {
    const URL_API: any = process.env.URL_API
    const IMG: any = process.env.IMG
    const resCategory: Response = await fetch(process.env.URL_API + '/home/category')
    const allCategory: any = await resCategory.json()
    return {
        props: {
            url_api: URL_API,
            img: IMG,
            home: null,
            allCategory
        },
    }
};

export default Add