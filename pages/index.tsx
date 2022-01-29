import type { NextPage } from 'next'
import Image from 'next/image'
import axios from 'axios';



interface Size {
  width: number,
  height: number,
}

interface Radios {
  id: string,
  name: string,
  url_flux: string,
  url_img: string,
}

const size: Size = {
  width: 150,
  height: 150,
}

const Home: NextPage = ({ radios }: any) => {
  if (radios === undefined) {
    radios = []
  }
  return (<>
    <br />
    <h1 className='text-center'>Radios</h1>
    <br />
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {radios.map(({ id, name, url_flux, url_img }: Radios) => {
          return (<>
            <div className="col">
              <div className="card">
                <Image
                  src={url_img}
                  alt={name}
                  className="card-img-top"
                  width={size.width}
                  height={size.height}
                />
                <h5 className="card-title text-center">{name}</h5>
                <audio id={id} controls src={url_flux}></audio>
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
    const res = await axios.get(process.env.URL_API + '/radios');
    const radios: Radios[] = res.data;
    return { radios };
  } catch (error) {
    return { error };
  }
};

export default Home