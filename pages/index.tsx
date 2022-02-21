import Home from "../components/home"
import { MyHome } from '../interfaces/myhome'


function Index(props: any) {
  return (<>
    <h1>Ajout Home</h1>
    <Home>{props}</Home>
  </>)
}


export default Index

export async function getStaticProps() {
  const res: Response = await fetch(process.env.URL_API + '/home/category/home')
  console.log(res)
  const home: MyHome[] = await res.json()
  return {
    props: {
      home
    },
  }
};