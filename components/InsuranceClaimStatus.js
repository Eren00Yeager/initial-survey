import { Container, Row, Col  } from "react-bootstrap";
import styles from "../styles/InsuranceClaims.module.scss";

const InsuranceStatus = () => {
  return (
    <Container className={styles.Container}>
      <br />
      <Row>
        <p className={styles.font1}>
          Claim Remedy
        </p>
      </Row>

      <br />
      <br />
      
     
      
      <Row>
        <Col></Col>
        <Col xs="10" lg="9">
          <p className={styles.font2} style={{textAlign:"center"}}>
            Congrats ! You have taken your first step in fighting the
            bureaucracy.{" "}
          </p>
        </Col>
        <Col ></Col>
      </Row>
      <br />
      <br />
     

      <Row>
        <Col></Col>
        <Col xs="10" lg="6">
          <div className={styles.basicPadd}>
            {" "}
            <p className={styles.font4} style={{ color: "white" }}>
              We will reach out to you to take the next step
              <span style={{ color: "#619698" }}>.</span>
            </p>
          </div>
        </Col>

        <Col></Col>
      </Row>

<br/>
<br/>
<br/>

<Row>
        <Col></Col>
        <Col className={styles.about} xs="10" lg="8">
          <h1 className={styles.aboutHead}>About us</h1>{" "}
          <p className={styles.aboutDesc}>
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
<br/>
<br/>
      <Row className={styles.forFooter}>

        <Col></Col>
        <Col lg="8">
          <p className={styles.footerText}>
            We are just a call away  @+91&nbsp;7297803114
            <p className={styles.footerText2}>
              or mail us at
              <span style={{ color: "#1B45DB" }}>
                {" "}
                claimremedycares@gmail.com
              </span>
              <br />
            </p>
          </p>
          <p className={styles.footerText3}>
            ⓒ 2022 Claim Remedy &nbsp; FAQ&nbsp; &nbsp;About
          </p>
        </Col>
        <Col></Col>

      </Row>
    </Container>
  );
};

export default InsuranceStatus;
