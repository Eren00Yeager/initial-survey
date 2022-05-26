import otpCss from '../styles/Otp.module.scss';
import React, {useState} from 'react';

const Otp = ()=>{
    
    async function getOtpValue(e){
        e.preventDefault()

        const otp = e.target.otpvalue.value

        const data = {
            otp: otp
          }
      
          // Send the data to the server in JSON format.
          const JSONdata = JSON.stringify(data)
         
          // API endpoint where we send form data.
          const endpoint = 'api/backend/send-to-mongo'
      
          // Form the request for sending data to the server.
          const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
          }
      
          // Send the form data to our forms API on Vercel and get a response.
          const response = await fetch(endpoint, options)
      
          // Get the response data from server as JSON.
          // If server returns the name submitted, that means the form works.
          const result = await response.json()
          return result.data
    }
    
    return(
        <div height="100vh" width = "100vw">
            <form onSubmit={getOtpValue}> 
                <input type="text" id="otpvalue" name="otpvalue" placeholder="Enter OTP" required />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Otp;