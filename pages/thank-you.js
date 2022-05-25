import Head from "next/head";
import consumerStyles from "../styles/consumer.module.css";
import Consumer from "../components/Consumer";
export default function consumer() {
  return (
    <div className={consumerStyles.s}>
      <Head>
        <title>Thank You</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        ></link>
      </Head>

      <div className={`container-md ${consumerStyles.container}`}>
        <div className={consumerStyles.m1}>
         
          <Consumer />
        <div className={consumerStyles.tq}>
        Thank you for signing up with us.
        We will soon reach out to you.
        </div>  
          
        </div>
      </div>
    </div>
  );
}