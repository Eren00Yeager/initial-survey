import Head from "next/head";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import svg from "../pic/mark.svg";
import i from "../pic/i1.png";
import Consumer from "../components/Consumer";
export default function consumer() {
  return (
    <div className={consumerStyles.s}>
      <Head>
        <title>Consumer Complaints</title>
        <meta name="description" content="" />
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
          <div className={consumerStyles.fm}>
          <div className={consumerStyles.f1}>Start your journey here.</div>
          <div className={consumerStyles.f2}>
          <form action="./thank-you" method="post">
          <div className={consumerStyles.f3}>
          <div className={consumerStyles.i1}><input className={consumerStyles.ph} placeholder="Email or Phone number" required></input></div>
          <div className={consumerStyles.i2}><input className={consumerStyles.go} type="submit" value="Go"></input></div>
          </div>
          </form>
          </div>
          </div>

          <div className={consumerStyles.foot}>
          By signing up, you are agreeing to our term’s & conditions & for us to contact you through the phone number & email provided.
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
