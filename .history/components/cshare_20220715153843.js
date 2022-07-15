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
            <div className={consumerStyles.thank}>Thank you for
                signing up with us.
                We will soon
                reach out to you.</div>
        </div>  
    
  );
};

export default cshare;
