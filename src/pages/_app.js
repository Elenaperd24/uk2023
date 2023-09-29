import Router, { useRouter } from "next/router"
import Link from "next/link"
import "../../styles/global.css"
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function App({ Component, pageProps }) {
    const router = useRouter()
    return (
        <>
            <div className="body">
             
                    <Header />
         
                <div className="components">
                    <Component {...pageProps} />
                </div>
       
              {/* <Footer /> */}
     

            </div>
        </>
    )
}