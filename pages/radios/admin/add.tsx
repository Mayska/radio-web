import FormsRadio from "../../../components/formsradio"

function Add(props: any) {
    return (<>
        <FormsRadio>{props}</FormsRadio>
    </>
    )
}

export async function getServerSideProps() {
    const URL_API: any = process.env.URL_API
    const IMG: any = process.env.IMG_RADIO

    return {
        props: {
            url_api: URL_API,
            img: IMG,
            radios: null
        },
    }
};

export default Add