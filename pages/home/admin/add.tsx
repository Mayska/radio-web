import FormsHome from "../../../components/formshome"

function Add(props: any) {
    return (<>
        <FormsHome>{props}</FormsHome>
    </>
    )
}

export async function getServerSideProps() {
    const URL_API: any = process.env.URL_API
    const IMG: any = process.env.IMG
    return {
        props: {
            url_api: URL_API,
            img: IMG,
            home: null,
        },
    }
};

export default Add