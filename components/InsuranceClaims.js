import InsuranceStyles from "../styles/InsuranceClaims.module.scss";
import {
  Row,
  Container,
  Col,
  Button,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import { useState,useRef } from "react";
import FormComponent from "./FormComponent";

const Insurance = () => {

  const [type,setType]=useState('')
  const [name,setName]=useState('')
  const [contact,setContact]=useState('')


  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log([type,name,contact])

    try{
      const response = await fetch("/api/insurancesheet", {
          method: "POST",
          body: JSON.stringify({type,name,contact}),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      console.log(await response.json())
      window.location.href='/insurance-resolve-status'

    }catch(e){
      console.log(e)
      alert("There was an error in submitting\nPlease try again")
      setEop('');
    }
  }

  const buttonClick=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
    setType(e.target.value)
  }

  return (
    <Container fluid className={InsuranceStyles.Container}>
      <br />
      <Row>
        <p className={InsuranceStyles.font1}>
          INSURED<span style={{ color: "black" }}>.</span>
        </p>
      </Row>

      <Row>
        <Col></Col>
        <Col lg="8" xs="10">
          <p className={InsuranceStyles.font2}>
            <span style={{ color: "rgba(0, 0, 0, 0.41)" }}>Your </span>
            claim <span style={{ color: "rgba(0, 0, 0, 0.41)" }}>got </span>
            rejected, delayed{" "}
            <span style={{ color: "rgba(0, 0, 0, 0.41)" }}>or </span>
            less claim passed?{" "}
          </p>
        </Col>
        <Col></Col>
      </Row>
     <br/>
      <Row>
        <Col></Col>
        <Col lg="6" xs="10">
          <p className={InsuranceStyles.font3}>
            Let the
            <span style={{ color: "blue" }}> experts </span>
            handle your case!
          </p>
        </Col>

        <Col></Col>
      </Row>
      

      <Row>
        <Form className={InsuranceStyles.formouter} onSubmit={submitHandler}>
          <p className={InsuranceStyles.radiocontent}>
            Choose the Insurance type
          </p>
          <Row>
            <Col>
              <Button className={InsuranceStyles.button} name="Health" value="Health" onClick={buttonClick}>Health</Button>
            </Col>
            <Col>
              <Button className={InsuranceStyles.button} name="Life" value="Life" onClick={buttonClick}>Life</Button>
            </Col>
            <Col>
              <Button className={InsuranceStyles.button} name="Vehicle" value="Vehicle" onClick={buttonClick}>Vehicle</Button>
            </Col>
          </Row>
          <div className={InsuranceStyles.forForm}>
            <div className = {InsuranceStyles.forInp}>
              {" "}
              <input
                className={InsuranceStyles.input}
                id="name"
                type="name"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

            <div className = {InsuranceStyles.forInp}>
              <input
                className={InsuranceStyles.input}
                id="contact"
                type="contact"
                name="contact"
                placeholder="Contact"
                pattern="[0-9]{10}"
                required
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
              />
            </div>
            <div className = {InsuranceStyles.forSub}>
              <button type="submit" className={InsuranceStyles.submit}>
                ACT
              </button>
            </div>
          </div>

        </Form>
      </Row>

      <br/>
    </Container>
  );
};

export default Insurance;
