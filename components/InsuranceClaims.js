import InsuranceStyles from "../styles/InsuranceClaims.module.scss";
import { Row, Container, Col, Form } from "react-bootstrap";
import { useState, useRef } from "react";
import Image from "next/image";
import fail from "../pic/rejecc.svg";

const Insurance = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log([type, name, contact]);

    if (type == "") {
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
        <Col></Col>
        <Col lg="6">
          <p className={InsuranceStyles.font1}>Claim Remedy</p>
        </Col>
        <Col className={InsuranceStyles.about1} style={{ textAlign: "center" }}>
          <button className={InsuranceStyles.changeB}>About</button>
        </Col>
      </Row>
      <Row style={{ paddingTop: "0.8em" }}>
        <Col></Col>

        <Col xs="10" lg="9" className={InsuranceStyles.giveBorder}>
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
              <Image src={fail} width="300%" height="300%" />
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <br />

      <Row style={{ paddingTop: "1em" }}>
        <Col></Col>
        <Col lg="9">
          <Row>
            <Col lg="8">
              <p
                className={InsuranceStyles.font1}
                style={{ textAlign: "left" }}
              >
                {" "}
                Our experts can get your claim from any company!
              </p>
              <p className={InsuranceStyles.pforsomeText}>
                We don’t charge you before we get your money!
              </p>
              <p className={InsuranceStyles.pforsomeText2}>So let’s get what
                is yours!</p>
            </Col>
            <Col>
              <p > 
                asdasd adas dasd as nd asd asdn asda s ascas dasd asmnd n sad
                asd asd snd asnd as
              </p>
            </Col>
          </Row>
        </Col>

        <Col></Col>
      </Row>

      <br />
      
      <br />
      <br />

      <br />
      <br />
      <Row className={InsuranceStyles.forFooter}>
        <Col></Col>
        <Col lg="8">
          <p className={InsuranceStyles.footerText}>
            We are just a call away @+91&nbsp;7297803114
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
