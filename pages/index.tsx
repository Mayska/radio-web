import Home from "../components/home"
import { MyHome } from '../interfaces/myhome'


function Index(props: any) {
  return (<>
    {props.error != "" ? <p>props.error</p> : ""}
    <Home>{props}</Home>
  </>)
}

export async function getStaticProps() {
  const res: Response = await fetch(process.env.URL_API + '/home/category/home')
  let error: string = ""
  if (res.status != 200) {
    error = "Error fetch => " + res.status
  }
  const home: MyHome[] = await res.json()
  return {
    props: {
      home,
      error
    },
  }
};

export default Index