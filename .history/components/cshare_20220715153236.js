import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import gt from "../pic/greentick.svg"
import tc from "../pic/whitetick.svg"
const cshare = () => {
  

  return (
    
       <Row className={consumerStyles.tnk}>
           <span className={consumerStyles.tick}>
            <center>
           <Image src={tc} style={{'background-color':"brown"}}></Image>
           </center>
           
            
            </span>
            <div className={consumerStyles.thank}>Thank you for
                signing up with us.
                We will soon
                reach out to you.</div>
        </Row>  
    
  );
};

export default cshare;
