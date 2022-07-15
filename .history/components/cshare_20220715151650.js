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
           <div className={consumerStyles.tick}>
           <Image src={gt}></Image>
           <Image src={tc} style={{position:"absolute"}}></Image>
           </div>
           
        </div>  
    
  );
};

export default cshare;
