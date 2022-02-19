import Image from 'next/image'
import Link from 'next/link'
import { MyHome } from '../interfaces/myhome'
import { Size } from '../interfaces/size'

const size: Size = {
    width: 175,
    height: 175,
}

function Home({ children }: any) {
    return (<>
        <div className="row">
            {children.home.map(({ id, name, url, url_img }: MyHome) => {
                return (<>
                    <div className="col-2">
                        <Link href={url} >
                            <a target="_blank">
                                <Image
                                    src={url_img}
                                    alt={name}
                                    title={name}
                                    className="img-thumbnail"
                                    width={size.width}
                                    height={size.height}
                                />
                            </a>
                        </Link>
                    </div>
                </>)
            })}
        </div>
    </>)
}

export default Home