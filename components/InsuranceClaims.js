import InsuranceStyles from "../styles/InsuranceClaims.module.scss";
import AboutImage from "../pic/forabout.svg";

import { Row, Container, Col, Form } from "react-bootstrap";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/InsuranceNew.module.scss";

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
    <Container fluid className={styles.Container}>
      <Row style={{ paddingTop: "2em" }}>
        <Col>
          <p className={styles.font1}>ClaimRemedy</p>
        </Col>
        <Col></Col>
        <Col style={{ textAlign: "center" }}>
          <button className={styles.font2}>
            <a href="#whenclicked">Get Your Claim</a>
          </button>
        </Col>
      </Row>

      <Row>
        <Col></Col>
        <Col lg="11">
          <p className={styles.font3}>Get Your Claim</p>
          <p className={styles.font4}>
            back from any company.
            <br />
            Totally Hassle Free.
          </p>
        </Col>
        <Col></Col>
      </Row>

      <Row style={{ paddingTop: "1.5em" }}>
        <Col></Col>
        <Col lg="11">
          <p className={styles.font5}>
            If your claim was wrongly rejected, delayed, or a less claim amount
            given, our experts can get your claim from any company while you sit
            back and relax!{" "}
          </p>
        </Col>
        <Col></Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <button className={styles.toShowForm}>
          <a href="#whenclicked">Get Your Claim</a>
        </button>
      </Row>

      <Row style={{ paddingTop: "8em" }}>
        <Col></Col>
        <Col lg="6">
          <p id="whenclicked" className={styles.font6}>
            We don’t charge you before we get your money!
          </p>
          <p className={styles.font7}>So let’s get what is yours!</p>
        </Col>
        <Col >
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col></Col>
        <Col lg="10">
          <p className={styles.font8}>How it works</p>
        </Col>
        <Col></Col>
      </Row>
      

      <Row></Row>

      <Row style={{ paddingTop: "3em" }}>
        <Col></Col>
        <Col lg="10">
          <p className={styles.font8}>Why ClaimRemedy</p>
          <p className={styles.font10}>
            1.{" "}
            <span
              style={{ backgroundColor: "rgba(67, 44, 206, 0.25)" }}
              className={styles.font9}
            >
              {" "}
              No charges
            </span>{" "}
            before you get your claim.
            <br />
            2.{" "}
            <span
              style={{ backgroundColor: "rgba(67, 44, 206, 0.25)" }}
              className={styles.font9}
            >
              {" "}
              300+ experts team
            </span>{" "}
            that knows the insurance industry Inside out.
            <br />
            3.{" "}
            <span
              style={{ backgroundColor: "rgba(67, 44, 206, 0.25)" }}
              className={styles.font9}
            >
              {" "}
              Zero Hassles
            </span>{" "}
            ,we do all the papers.
          </p>
        </Col>
        <Col></Col>
      </Row>

      <Row style={{ paddingTop: "3em" }}>
        <Col></Col>
        <Col lg="10">
          <Row>
            <p className={styles.font8}>About us</p>
          </Row>
          <Row>
            <Col>
              <Image src={AboutImage} />
            </Col>
            <Col>
              <span className={styles.font11}>
                We are engineers pained by the situation{" "}
              </span>
              <p className={styles.font12}>
                where People who pay premiums for years have to struggle to get
                their claims. An individual finds oneself helpless in front of
                the big companies and their ever confusing terms and conditions.
                <br />
                <br />
                Tired of this, we decided to change it forever through Claim
                Remedy. At Claim Remedy, we provide individuals legal help to
                fight for their claims.
              </p>
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Insurance;

// <Row>
//         <Col lg="1" xs="1"></Col>
//         <Col lg="10" xs="10">
//           <Form className={InsuranceStyles.formouter} onSubmit={submitHandler}>
//             <Row>
//               <Col></Col>
//               <Col xs="10" lg="6">
//                 
//               </Col>
//               <Col></Col>
//             </Row>
            // <Row>
            //   <div className={InsuranceStyles.forForm}>
            //     <div className={InsuranceStyles.forInp}>
            //       {" "}
            //       <input
            //         className={InsuranceStyles.input}
            //         id="name"
            //         type="name"
            //         name="name"
            //         placeholder="Name"
            //         required
            //         value={name}
            //         onChange={(e) => setName(e.target.value)}
            //       />
            //     </div>

            //     <div className={InsuranceStyles.forInp}>
            //       <input
            //         className={InsuranceStyles.input}
            //         id="contact"
            //         type="contact"
            //         name="contact"
            //         placeholder="Contact"
            //         pattern="[0-9]{10}"
            //         required
            //         value={contact}
            //         onChange={(e) => setContact(e.target.value)}
            //       />
            //     </div>
            //     <div className={InsuranceStyles.forSub}>
            //       <button type="submit" className={InsuranceStyles.submit}>
            //         Act
            //       </button>
            //     </div>
            //   </div>
            // </Row>
//           </Form>
//         </Col>
//         <Col></Col>
//       </Row>
