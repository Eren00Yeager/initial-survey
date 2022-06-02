import styles from "../styles/InsuranceClaims.module.scss";
import { Button, ButtonGroup, Form } from "react-bootstrap";


const FormComponent = () => {
  
  async function dataFetch(e){
      
  } 
                
  return (
        <Form className={styles.formouter} onSubmit={dataFetch}>
          <p className={styles.radiocontent}>Choose the Insurance type</p>
          <ButtonGroup className="mb-3">
            <Button className={styles.button}>Health</Button>
            <Button className={styles.button}>Life</Button>
            <Button className={styles.button}>Vehicle</Button>
          </ButtonGroup>
          <br />
          <div className={styles.formcomp}>
            <input
              className={styles.input1}
              id="name"
              type="name"
              name="name"
              placeholder="Name"
            />
          
            <input
              className={styles.input2}
              id="contact"
              type="contact"
              name="contact"
              placeholder="Contact"
            />

            <button  type="submit" className={styles.submit}>
              ACT
            </button>
          </div>
        </Form>
  );
};

export default FormComponent;
