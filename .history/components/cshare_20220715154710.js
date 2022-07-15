import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import gt from "../pic/greentick.svg"
import tc from "../pic/whitetick.svg"
const cshare = () => {
  

  return (
    
       <div className={consumerStyles.tnk}>
           <div style={{textAlign:"center"}}>
           <Image src={tc}  width={40} height={40}></Image>
           </div>
           <div className={consumerStyles.ms}>
           Your legal notice has been sent successfully! A copy of the same has been sent you via email.
           You will get notified when the company replies.
           </div>
           <div className={consumerStyles.msr}>Share the below message on your favourite social media by tagging the alleged company to create better impact.</div>
           <div className={consumerStyles.nt}>
           I have sent a legal notice to -[name of comapny]- for the inconvenience caused to me in the insurance claim process. Thanks to [link to website]-[Claim Remedy] for helping me take legal action for no extra cost.
           </div>
        </div>  
    
  );
};

export default cshare;
{/* <div className={consumerStyles.thank}>Thank you for
signing up with us.
We will soon
reach out to you.</div> */}