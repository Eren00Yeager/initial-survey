import InsuranceStyles from "../styles/InsuranceClaims.module.scss";
import { Row, Container, Col, Form } from "react-bootstrap";
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

    if(type==""){
      alert("Select the insurance type");
      return;
    }
    try {
      const response = await fetch("/api/insurancesheet", {
        method: "POST",
        body: JSON.stringify({ type, name, contact }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if ((await response.status) == 201) {
        window.location.href = "/insurance-resolve-status";
      } else {
        throw response.json();
      }
    } catch (e) {
      console.log(e);
      alert("There was an error in submitting\nPlease try again");
      setName("");
      setType("");
      setContact("");
    }
  };

  return (
    <Container className={InsuranceStyles.Container}>
      <br />
      <Row>
        <p className={InsuranceStyles.font1}>Claim Remedy</p>
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
                        autoComplete="off"
                        value="Health"
                        onClick={(e) => setType(e.target.value)}
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
                        autoComplete="off"
                        value="Life"
                        onClick={(e) => setType(e.target.value)}
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
                        autoComplete="off"
                        value="Vehicle"
                        onClick={(e) => setType(e.target.value)}
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
      <br />
      <Row>
        <Col></Col>
        <Col className={InsuranceStyles.about} xs="10" lg="10">
          <h1 className={InsuranceStyles.aboutHead}>About us</h1>{" "}
          <p className={InsuranceStyles.aboutDesc}>
            {" "}
            We are engineers pained by the situation where People who pay
            premiums for years have to struggle to get their claims. An
            individual finds oneself helpless in front of the big companies and
            their ever confusing terms and conditions.
            <br />
            <br />
            Tired of this, we decided to change it forever through Claim Remedy.
            At Claim Remedy, we provide individuals legal help to fight for
            their claims. With our robust system, we believe we would succeed on
            the misson.
          </p>
        </Col>
        <Col></Col>
      </Row>
      <br />
      <br />
      <Row className={InsuranceStyles.forFooter}>
        <Col></Col>
        <Col lg="8">
          <p className={InsuranceStyles.footerText}>
            We are just a call away  @+91&nbsp;7297803114
          </p>
          <p className={InsuranceStyles.footerText2}>
              or mail us at
              <span style={{ color: "#1B45DB" }}>
                {" "}
                claimremedycares@gmail.com
              </span>
              <br />
            </p>
          <p className={InsuranceStyles.footerText3}>
            ⓒ 2022 Claim Remedy &nbsp; FAQ&nbsp; &nbsp;About
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Insurance;
