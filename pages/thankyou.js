import legalBotstyles from "../styles/vakilbot.module.css";
import Head from "next/head";
import App from "../components/App.js";

export default function legalBot(){

    return <div>
        <Head>
        <title>Thankyou</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
        </Head>
       
        <div className={`container-md ${legalBotstyles.container}`}>
        <div className={legalBotstyles.wholepage}>
        <App />
        <div className={legalBotstyles.thankyou}>Your journey has begun.</div>
        <div className={legalBotstyles.tlast}>We will get back to you soon.</div>


    </div>
    </div>
    </div>
}