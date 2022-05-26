import styles from "../styles/InsuranceClaims.module.scss";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import Link from 'next/link';

const FormComponent = () => {

    async function userGenerator(){
        var specUser = '/otp-enter/'
        
        return 
    }

  return (
    <>
      <div>
        <Form className={styles.formouter}>
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

            <Link href= {userGenerator}>
            <button type="submit" className={styles.submit}>
              ACT
            </button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormComponent;
