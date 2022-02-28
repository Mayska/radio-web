import Home from "../../../components/home"
import { MyHome } from "../../../interfaces/myhome"

function Favoris(props: MyHome[]) {
    return (<>
        <Home>{props}</Home>
    </>)
}

export async function getServerSideProps() {
    const res: Response = await fetch(process.env.URL_API + "/home/category/favori")
    const home: MyHome[] = await res.json()
    return {
        props: {
            home: home
        }
    }
};

export default Favoris