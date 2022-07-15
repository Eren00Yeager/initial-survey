import { useRouter } from "next/router";
import { useState } from "react";
import consumerStyles from "../styles/consumer.module.css";

const cshare = () => {
  

  return (
    
       <div className={consumerStyles.tnk}>
            <div className={consumerStyles.thank}>Thank you for
                signing up with us.
                We will soon
                reach out to you.</div>
        </div>  
    
  );
};

export default cshare;
