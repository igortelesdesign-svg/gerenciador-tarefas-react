import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

const PageDefault = ({children})=>{
    return(
        <div id="container">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PageDefault