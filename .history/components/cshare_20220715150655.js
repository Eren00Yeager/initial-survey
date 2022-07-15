import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import gt from "../pic/greentick.svg"
const cshare = () => {
  

  return (
    
       <Row className={consumerStyles.tnk}>
           <span className={consumerStyles.tick}>
            <center>
             <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="white" class="bi bi-check" viewBox="0 0 20px 20px">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>   
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
