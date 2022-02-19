import Image from 'next/image'
import { MyRadios } from '../interfaces/myradios'
import { Size } from '../interfaces/size'
import styles from '../styles.module.css'

const size: Size = {
    width: 250,
    height: 250,
}

function Radios({ children }: any) {
    return (<>
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {children.radios.map(({ id, name, url_flux, url_img }: MyRadios) => {
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
                            <h5 className="card-title text-center m-2">{name}</h5>
                            <audio id={id} className={styles.audio} controls src={url_flux}></audio>
                        </div>
                    </div>
                </>)
            })}
        </div>
    </>)
}

export default Radios