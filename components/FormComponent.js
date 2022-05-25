import styles from '../styles/InsuranceClaims.module.scss'
import { Button,ButtonGroup,Form } from 'react-bootstrap';

const FormComponent= () => {
  return (
      <>
        <div >
            <Form className={styles.formouter}>
                <p className={styles.radiocontent}>Choose the Insurance </p>
                <ButtonGroup className="mb-3">
                    <Button className={styles.button}>Left</Button>
                    <Button className={styles.button}>Middle</Button>
                    <Button className={styles.button}>Right</Button>
                </ButtonGroup>
                <br/>
                <div className={styles.formcomp}>
                    <input className={styles.input} id="name" type="name" name="name" placeholder='Name'/><br/><br/>
                    <input className={styles.input} id="contact" type="contact" name="contact" placeholder='Contact'/><br/><br/>
                
                    <button type="submit" className={styles.submit}>
                        ACT
                    </button>
                </div>
            </Form>
        </div>
      </>
    
    
  );
}

export default FormComponent;

