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
           <div>
           Your legal notice has been sent successfully! A copy of the same has been sent you via email.
You will get notified when the company replies.
           </div>
           
        </div>  
    
  );
};

export default cshare;
{/* <div className={consumerStyles.thank}>Thank you for
signing up with us.
We will soon
reach out to you.</div> */}