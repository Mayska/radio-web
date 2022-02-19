import FormsRadio from "../../../components/formsradio"

function Add(props: any) {
    return (<>
        <FormsRadio>{props}</FormsRadio>
    </>
    )
}

export async function getStaticProps() {
    const URL_API: any = process.env.URL_API
    const IMG: any = process.env.IMG

    return {
        props: {
            url_api: URL_API,
            img: IMG,
            radios: null
        },
    }
};

export default Add