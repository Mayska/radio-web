import axios from "axios"
import Home from "../components/home"
import { MyHome } from '../interfaces/myhome'


function Index() {
  const home: any = axios.get("https://nestradio.herokuapp.com" + '/home/category/home')
    .catch(error => console.log(error))
  console.log(home)
  return (<>
    <h1>CUOCUCOUC</h1>
    {/*<Home>{home}</Home>*/}
  </>)
}


export default Index

/*
export async function getStaticProps() {
  const res: Response = await fetch("https://nestradio.herokuapp.com" + '/home/category/home')
  console.log(res)
  const home: MyHome[] = await res.json()
  return {
    props: {
      home
    },
  }
};
*/