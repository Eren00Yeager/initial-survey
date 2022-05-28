import styles from "../styles/InsuranceClaims.module.scss";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import OtpSender from './OtpGenerateSend'
import { useRouter } from "next/router";
import CryptoJS from 'crypto-js';

const FormComponent = () => {

  const router = useRouter();

  // async function encryptWithAES(text) {
  //   const passphrase = '1a19z23';
  //   return AES.encrypt(text, passphrase).toString();
  // };

  async function encrypt(text) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
  };
  
  
  async function dataFetch(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const mobile = e.target.contact.value;
    const otp = await OtpSender(mobile);

    var generatedUser = await encrypt(mobile);
    // const toSend =toString(generatedUser);
    // const toSend = JSON.stringify({encrypted: generatedUser});
    
    const data = {
      name: name,
      mobile: mobile,
      otp: otp,
      baseenc : generatedUser,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "api/backend/send-to-mongo";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    router.push(`/otp-enter/${generatedUser}`);
    return result.data;
  }
  

  return (
    <>
      <div>
        <Form className={styles.formouter} onSubmit={dataFetch}>
          <p className={styles.radiocontent}>Choose the Insurance </p>
          <ButtonGroup className="mb-3">
            <Button className={styles.button}>Left</Button>
            <Button className={styles.button}>Middle</Button>
            <Button className={styles.button}>Right</Button>
          </ButtonGroup>
          <br />
          <div className={styles.formcomp}>
            <input
              className={styles.input}
              id="name"
              type="name"
              name="name"
              placeholder="Name"
            />
            <br />
            <br />
            <input
              className={styles.input}
              id="contact"
              type="contact"
              name="contact"
              placeholder="Contact"
            />
            <br />
            <br />

            <button  type="submit" className={styles.submit}>
              ACT
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormComponent;
