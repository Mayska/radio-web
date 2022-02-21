import Footer from "./footer"
import Navbar from "./navbar"

function Layout({ children }: any) {
    return (<>
        <br />
        {/*<Navbar />*/}
        <br />
        <main>
            <div className="container">
                {children}
            </div>
        </main>
        <Footer />
    </>)
}
export default Layout
