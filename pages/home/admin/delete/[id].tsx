import { MyHome } from "../../../../interfaces/myhome"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useUser = () => ({ user: null, loading: false })

function DeleteHome() {
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!(user || loading)) {
            router.push('/home/admin')
        }
    }, [user, loading])

    return <p>Redirecting...</p>
}


export async function getServerSideProps({ params }: any) {
    const res: Response = await fetch(process.env.URL_API + '/home/' + params.id, {
        method: 'delete'
    })
    const home: MyHome[] = await res.json()
    return {
        props: {
            home,
        },
    }
}

export default DeleteHome