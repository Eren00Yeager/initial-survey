import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/InsuranceClaims.module.scss";

const InsuranceStatus = () => {
  return (
    <Container fluid className={styles.Container}>
      <br />
      <Row>
        <p className={styles.font1}>
          INSURED<span style={{ color: "blue" }}>.</span>
        </p>
      </Row>

      <br />
      <br />

<br />
      <br />
      
      <Row>
        <Col></Col>
        <Col xs="10">
          <p className={styles.font2}>
            Congrats ! You have taken your first step in fighting the
            bureaucracy.{" "}
          </p>
        </Col>
        <Col></Col>
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
              <span style={{ color: "blue" }}>.</span>
            </p>
          </div>
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
};

export default InsuranceStatus;
