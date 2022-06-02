import { Row, Container, Form, Col } from "react-bootstrap";
import styles from "../styles/Community.module.scss";
import { useRouter } from "next/router";

const communityBeta = () => {
  const router = useRouter();

  function toFinal (){
    router.push("/community-beta-final");
  }

  return (
    <Container fluid className={styles.Container}>
      <Row>
        <h1>
          The <span style={{ color: "red" }}>2.5% Club</span>
        </h1>
      </Row>
      <Row>
        <h1>sp,e sdaf</h1>
      </Row>
      <Row>
        <Col></Col>
        <Col lg="11" xs="10">
          <Form className={styles.forDiv1} onSubmit={toFinal}>
            <div className={styles.forDiv2}>
              <div className={styles.align}>
                <input
                  className={styles.forInput}
                  placeholder="Name"
                  id="Name"
                />
              </div>
              <div className={styles.align}>
                <input
                  className={styles.forInput}
                  placeholder="E - Mail"
                  id="email"
                />
              </div>
              <div className={styles.align1}>
                <button type="submit" className={styles.forButton1}>Join</button>
              </div>
            </div>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default communityBeta;
