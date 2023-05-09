import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"

export default function format({children}){
    console.log({children})
    return(
        <>
        <Head>
            <title>
            hi
            </title>
        </Head>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>

    )
}