import otpCss from "../styles/Otp.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";
import CryptoJS from "crypto-js";

const Otp = () => {
  const router = useRouter();
  async function decrypt(data) {
    //return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(data));
    return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
  }

  async function getOtpValue(e) {
    e.preventDefault();
    // need to add time limit functionality

    var mobile = decrypt(router.query.user); // some issue in decrypt
    console.log(router.query.user);
    // console.log(mobile)
    // mobile = "121214e";
    const endpoint = "../api/backend/get-data-mongo";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSON.stringify({ mobile: mobile }),
    });

    const result = await res.json();
    const userEnteredOtp = e.target.otpvalue.value;
    const fetchedOtp = result.otp;
    if (userEnteredOtp == fetchedOtp) {
      alert(`Success`);
      router.push()
    } else {
      alert(`Failure`);
    }
  }
  if (1 == 2) {
    return (
      <>
        <p>Page not found</p>
      </>
    );
  } else {
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
  }
};

export default Otp;
