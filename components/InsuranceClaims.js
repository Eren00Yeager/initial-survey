import InsuranceStyles from "../styles/InsuranceClaims.module.scss";
import {
  Row,
  Container,
  Col,
  Button,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import { useState, useRef } from "react";
import Image from "next/image";
import fail from "../pic/rejecc.png";

const Insurance = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log([type, name, contact]);


    try {
      const response = await fetch("/api/insurancesheet", {
        method: "POST",
        body: JSON.stringify({ type, name, contact }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(await response.status==201){
        window.location.href="/insurance-resolve-status"
      }else{
          throw response.json()
      } 
      
    }catch (e) {
      console.log(e);
      alert("There was an error in submitting\nPlease try again");
      setName('');
      setType('');
      setContact('');
    }
  };



  return (
    <Container className={InsuranceStyles.Container}>
      <br />
      <Row>
        <p className={InsuranceStyles.font1}>INSURED.</p>
      </Row>
      <Row style={{ paddingTop: "0.5em" }}>
        <Col></Col>

        <Col xs="10" lg="8" className={InsuranceStyles.giveBorder}>
          <div className={InsuranceStyles.forDivflex}>
            <p className={InsuranceStyles.font2}>
              Claim <span style={{ color: "#ADADAD" }}>Rejected?</span>
              <br />
              Claim <span style={{ color: "#ADADAD" }}>Delayed?</span>
              <br />
              Claim Amount{" "}
              <span style={{ color: "#ADADAD" }}>Unsatisfactory?</span>
            </p>
            <div className={InsuranceStyles.forSpImage}>
              {" "}
              <Image src={fail} width="250%" height="250%" /> 
            </div>
          </div>
        </Col>
        {/* <Col lg="8" className={InsuranceStyles.giveBorder}>
          <div className={InsuranceStyles.forDivflex}><p className={InsuranceStyles.font2}>
              Claim <span style={{ color: "#ADADAD" }}>Rejected?</span><br/>
              Claim <span style={{ color: "#ADADAD" }}>Delayed?</span><br/>
              Claim Amount <span style={{ color: "#ADADAD" }}>Unsatisfactory?</span> 
            </p>
          <Image src={fail} width={175} height={175} />
            </div>
          
        </Col> */}
        {/* <Col lg="3" xs="7">
          <p className={InsuranceStyles.font2}>
            Claim <span style={{ color: "#ADADAD" }}>Rejected?</span><br/>
            Claim <span style={{ color: "#ADADAD" }}>Delayed?</span><br/>
            Claim Amount <span style={{ color: "#ADADAD" }}>Unsatisfactory?</span> 
          </p>
        </Col>
        <Col xs="4" lg="3" style={{ textAlign: "center" }}>
          <Image src={fail} width={150} height={150} />
        </Col> */}
        <Col></Col>
      </Row>

      <Row>
        <Col lg="2" xs="1"></Col>
        <Col lg="8" xs="10">
          <div style={{ paddingTop: "0.8em" }}>
            <p className={InsuranceStyles.font3}>
              Let the
              <span style={{ color: "#619698" }}> experts </span>
              handle your case!
            </p>
          </div>
        </Col>

        <Col></Col>
      </Row>

      <br />
      <Row>
        <Col lg="1" xs="1"></Col>
        <Col lg="10" xs="10">
          <Form className={InsuranceStyles.formouter} onSubmit={submitHandler}>
            <Row>
              <Col></Col>
              <Col xs="10" lg="6">
                <p className={InsuranceStyles.radiocontent}>
                  Choose the Insurance type
                </p>
                <Row>
                  <div class="btn-group" role="group">
                    <Col>
                      {" "}
                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autocomplete="off"
                        value="Health"
                        onClick={(e)=>setType(e.target.value)}
                      />
                      <label
                        class={`btn btn-primary ${InsuranceStyles.button}`}
                        for="btnradio1"
                      >
                        Health
                      </label>
                    </Col>
                    <Col>
                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autocomplete="off"
                        value="Life"
                        onClick={(e)=>setType(e.target.value)}
                      />
                      <label
                        class={`btn btn-primary ${InsuranceStyles.button}`}
                        for="btnradio2"
                      >
                        Life
                      </label>
                    </Col>
                    <Col>
                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autocomplete="off"
                        value="Vehicle"
                        onClick={(e)=>setType(e.target.value)}
                      />
                      <label
                        class={`btn  btn-primary  ${InsuranceStyles.button}`}
                        for="btnradio3"
                      >
                        Vehicle
                      </label>
                    </Col>
                  </div>
                </Row>
                {/*          
            <Col>
              <Button className={InsuranceStyles.button} name="Health" value="Health" onClick={buttonClick}>Health</Button>
            </Col>
            <Col>
              <Button className={InsuranceStyles.button} name="Life" value="Life" onClick={buttonClick}>Life</Button>
            </Col>
            <Col>
              <Button className={InsuranceStyles.button} name="Vehicle" value="Vehicle" onClick={buttonClick}>Vehicle</Button>
            </Col> */}
              </Col>
              <Col></Col>
            </Row>
            <Row>
            <div className={InsuranceStyles.forForm}>
              <div className={InsuranceStyles.forInp}>
                {" "}
                <input
                  className={InsuranceStyles.input}
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={InsuranceStyles.forInp}>
                <input
                  className={InsuranceStyles.input}
                  id="contact"
                  type="contact"
                  name="contact"
                  placeholder="Contact"
                  pattern="[0-9]{10}"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className={InsuranceStyles.forSub}>
                <button type="submit" className={InsuranceStyles.submit}>
                  Act
                </button>
              </div>
            </div>
            </Row>
          </Form>
        </Col>
        <Col></Col>
      </Row>

      <br />
    </Container>
  );
};

export default Insurance;
