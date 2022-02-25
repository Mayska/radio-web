import Nav from "../../../components/nav"
import TablesRadios from "../../../components/tablesradios"
import { MyRadios } from "../../../interfaces/myradios"


function Index(props: any) {
    return (<>
        <Nav />
        <br />
        <TablesRadios>{props}</TablesRadios>
    </>)
}

export async function getServerSideProps() {
    const res: Response = await fetch(process.env.URL_API + '/radios')
    const radios: MyRadios[] = await res.json()
    return {
        props: {
            radios,
        },
    }
};

export default Index
