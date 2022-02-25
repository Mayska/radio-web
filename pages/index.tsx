import axios from "axios"
import Home from "../components/home"
import { MyHome } from '../interfaces/myhome'


function Index(props: any) {
  return (<>
    <Home>{props}</Home>
  </>)
}

export async function getServerSideProps() {
  const res: Response = await fetch("https://nestradio.herokuapp.com" + '/home/category/home')
  const home: MyHome[] = await res.json()
  return {
    props: {
      home: home
    }
  }
}

export default Index