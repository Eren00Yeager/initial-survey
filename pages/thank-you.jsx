import Head from "next/head";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import svg from "../pic/mark.svg";
import im from "../pic/i2.svg";
import i from "../pic/i1.png";
import Consumer from "../components/Consumer";

import { useState } from "react";


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

      <div className={consumerStyles.container}>

        <div className={consumerStyles.head}>
          <div className={consumerStyles.hd}>
            <div>
              <Image src={i} alt="Pic" width={80} height={85} />
            </div>
            <div>
              agorá
            </div>
          </div>

          <div>
            <button className={consumerStyles.btn}>About</button>
          </div>
        </div>
        <div className={consumerStyles.main}>
          <div className={consumerStyles.tnk}>
          <div className={consumerStyles.thank}>Thank you for 
          signing up with us.
          We will soon
          reach out to you.</div>
          </div>
          <div className={consumerStyles.tct}>
            <div className={consumerStyles.t1}>
              <span className={consumerStyles.title}>
                <span className={consumerStyles.title2}>
                  Still haven’t got that refund?
                </span>

                <span className={consumerStyles.title1}>
                  Allow us to Fight your Fights.
                </span>
              </span>
            </div>
            <div className={consumerStyles.py}>
              <Image src={im} />
            </div>
          </div>

        </div>

        <div className={consumerStyles.fo}>
          <div className={consumerStyles.mid}>
            <span>
              At agorá, we provide you the legal resources to fight against
              poor customer services and fradulent market practises in
              e-commerce.
            </span>

          </div>
          <div className={consumerStyles.points}>
            <div>
              <div className={consumerStyles.p}>
                <div className={consumerStyles.i}>
                  <Image src={svg} />
                </div>
                <div className={consumerStyles.t}>
                  Fight refusal to replace faulty products.
                </div>
              </div>
              <div className={consumerStyles.p}>
                <div className={consumerStyles.i}>
                  <Image src={svg} />
                </div>
                <div className={consumerStyles.t}><div>Fight delay in refunds</div></div>
              </div>
              <div className={consumerStyles.p}>
                <div className={consumerStyles.i}>
                  <Image src={svg} />
                </div>
                <div className={consumerStyles.t}>
                  Fight misleading advertisements
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}