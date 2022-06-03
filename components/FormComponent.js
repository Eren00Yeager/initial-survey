import styles from "../styles/InsuranceClaims.module.scss";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { useState } from "react";



const FormComponent = () => {
  
  const [type,setType]=useState('')
  const [name,setName]=useState('')
  const [contact,setContact]=useState('')

  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log([type,name,contact])
  }
                
  return (
        <Form className={styles.formouter} onSubmit={submitHandler}>
          <p className={styles.radiocontent}>Choose the Insurance type</p>
          <ButtonGroup className="mb-3">
            <Button className={styles.button} onSelect={(e)=>setType('Health')}>Health</Button>
            <Button className={styles.button} onSelect={(e)=>setType('Life')}>Life</Button>
            <Button className={styles.button} onSelect={(e)=>setType('Vehicle')}>Vehicle</Button>
          </ButtonGroup>
          <br />
          <div className={styles.formcomp}>
            <input
              className={styles.input1}
              id="name"
              type="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          
            <input
              className={styles.input2}
              id="contact"
              type="contact"
              name="contact"
              placeholder="Contact"
              value={contact}
              onChange={(e)=>setContact(e.target.value)}
            />

            <button  type="submit" className={styles.submit}>
              ACT
            </button>
          </div>
        </Form>
  );
};

export default FormComponent;
