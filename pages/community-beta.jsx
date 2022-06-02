import { Row, Container, Form, Col } from "react-bootstrap";
import styles from "../styles/Community.module.scss";
import { useRouter } from "next/router";

const community = () => {
  const router = useRouter();

  function nextPage() {
    router.push("/community-beta-details");
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
          <Col lg="11" xs="10"><div className={styles.forDiv1}>
          <div className={styles.forDiv2}>
            <div className={styles.divForText}>
              <p className={styles.font2}>Current community openings</p>
            </div>
            <div className={styles.divForButtons}>
              <button className={styles.forButton} onClick={nextPage}>
                Productivity Software
              </button>
            </div>
            <div className={styles.divForButtons}>
              <button className={styles.forButton} onClick={nextPage}>
                Gaming
              </button>
            </div>
            <div className={styles.divForButtons}>
              {" "}
              <button className={styles.forButton} onClick={nextPage}>
                Fintech
              </button>
            </div>
          </div>
        <p className={styles.font3}>more community openings coming shortly...</p>
        </div></Col>
          <Col></Col>
        
      </Row>
    </Container>
  );
};

export default community;
