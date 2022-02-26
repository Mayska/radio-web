import Radios from "../../components/radios"
import { MyRadios } from '../../interfaces/myradios'


function Index(props: MyRadios[]) {
    return (<>
        <Radios>{props}</Radios>
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

