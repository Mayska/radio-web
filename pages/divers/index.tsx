import Link from "next/link"



function Index() {
    const list: { name: string, description: string, url: string, techno: string }[] = [
        {
            name: "Acteur : François Leviste",
            description: "CV en ligne pour un acteur",
            url: "https://actor-chi.vercel.app/",
            techno: "next.js",
        },
        {
            name: "Home",
            description: "Portail perso",
            url: "http://mayska.alwaysdata.net/",
            techno: "php",
        },
        {
            name: "Génarateur d’excuse",
            description: "Génarateur d’excuse",
            url: "https://excuse-chi.vercel.app/",
            techno: "next.js",
        },
        {
            name: "Nest radio API",
            description: "back-end de radio-webapp",
            url: "https://nestradio.herokuapp.com/",
            techno: "nest.js",
        },
    ]
    return (<>
        <br />
        <h2 className="text-center">Autres projets</h2>
        <br />
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Description</th>
                    <th scope="col">Url</th>
                    <th scope="col">Techno</th>
                </tr>
            </thead>
            <tbody>
                {list.map(({ name, description, url, techno }: any) => {
                    return (<>
                        <tr>
                            <th scope="row">{name}</th>
                            <td>{description}</td>
                            <td>
                                <Link href={url}>
                                    <a target="_blank">
                                        {url}
                                    </a>
                                </Link>
                            </td>
                            <td>{techno}</td>
                        </tr>
                    </>)
                })}
            </tbody>
        </table>
    </>)
}

export default Index