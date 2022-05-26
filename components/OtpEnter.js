import otpCss from "../styles/Otp.module.scss";
import React, { useState } from "react";
import {useRouter} from 'next/router';

const Otp = () => {

  async function decryptWithAES (ciphertext){
    const passphrase = '1a19z23';
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

  async function getOtpValue(e) {
    e.preventDefault();
    // need to add time limit functionality
    const router = useRouter();
    const mobile = decryptWithAES(router.query.user);

    const userEnteredOtp = e.target.otpvalue.value;
    const fetchedOtp="123231";

    if(userEnteredOtp==fetchedOtp){
      alert( `Success`);
    }
    else{
      alert(`Failure`);
    }
    
  }

  return (
    <div height="100vh" width="100vw">
      <form onSubmit={getOtpValue}>
        <input
          type="text"
          id="otpvalue"
          name="otpvalue"
          placeholder="Enter OTP"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Otp;
