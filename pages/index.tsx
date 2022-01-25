import type { NextPage } from 'next'
import Image from 'next/image'
import axios from 'axios';


interface Props {
  width: number,
  height: number,
}

interface Radios {
  name: string,
  url_flux: string,
  url_img: string,
}

const props: Props = {
  width: 250,
  height: 250
}

const Home: NextPage = ({ radios }: any) => {
  return (<>
    <br />
    <h1 className='text-center'>Radios</h1>
    <br />
    <div className="container">
      <div className="row">
        {radios.map(({ name, url_flux, url_img }: any) => {
          return (<>
            <div className="col">
              <div className="card">
                <Image
                  src={url_img}
                  alt={name}
                  className="card-img-top"
                  width={props.width}
                  height={props.height}
                />
                <h5 className="card-title text-center">{name}</h5>
                <audio controls src={url_flux}></audio>
              </div>
            </div>
            <br />
          </>)
        })}
      </div>
    </div>
  </>)
}

Home.getInitialProps = async () => {
  try {
    const res = await axios.get('http://localhost:4000/radios');
    const radios: Radios[] = res.data;
    return { radios };
  } catch (error) {
    return { error };
  }
};

export default Home
