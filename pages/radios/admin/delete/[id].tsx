
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { MyRadios } from '../../../../interfaces/myradios'

const useUser = () => ({ user: null, loading: false })

function DeleteHome() {
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!(user || loading)) {
            router.push('/radios/admin')
        }
    }, [user, loading])

    return <p>Redirecting...</p>
}


export async function getStaticProps({ params }: any) {
    const res: Response = await fetch(process.env.URL_API + '/radios/' + params.id, {
        method: 'delete'
    })
    const radios: MyRadios[] = await res.json()
    return {
        props: {
            radios,
        },
    }
}

export async function getStaticPaths() {
    const res: Response = await fetch(process.env.URL_API + '/radios')
    const radios: MyRadios[] = await res.json()
    return {
        paths: radios.map(h => ({
            params: { id: h.id.toString() }
        })),
        fallback: false
    }
}

export default DeleteHome
