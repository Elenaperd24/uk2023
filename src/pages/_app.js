import Router, { useRouter } from "next/router"
import Link from "next/link"
import "../../styles/global.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from 'next/head';


export default function App({ Component, pageProps }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Home App</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&display=swap" rel="stylesheet"
                />
            </Head>
          

                <Header />

                    <Component {...pageProps} />
        

                <Footer />


           
        </>
    )
}