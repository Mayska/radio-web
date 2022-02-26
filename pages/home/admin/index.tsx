import Nav from "../../../components/nav"
import TablesHome from "../../../components/tableshome"
import { MyHome } from '../../../interfaces/myhome'


function Index(props: any) {
    return (<>
        <Nav />
        <br />
        <TablesHome>{props}</TablesHome>
    </>)
}

export async function getServerSideProps() {
    const resHome: Response = await fetch(process.env.URL_API + '/home')
    const home: MyHome[] = await resHome.json()
    return {
        props: {
            home: home
        },
    }
};

export default Index
