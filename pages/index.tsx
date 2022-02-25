import axios from "axios"
import Home from "../components/home"
import { MyHome } from '../interfaces/myhome'


function Index(props: any) {
  console.log(props.home)
  return (<>
    <h1>RERERERERRE</h1>
    <Home>{props}</Home>
  </>)
}



export async function getStaticProps() {
  const res: Response = await fetch("https://nestradio.herokuapp.com" + '/home/category/home')
  console.log(res)
  const home: MyHome[] = await res.json()
  return {
    props: {
      home: home
    }
  }
}

export default Index