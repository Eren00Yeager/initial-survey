import { Row, Container, Form, Col } from "react-bootstrap";
import styles from "../styles/Community.module.scss";
import Image from "next/image";
import graph from "../images/graph.png";
import arrow from "../images/arrow.svg";

function Community()
{
    return (
        <Container>
            <Row>
                <h1 className={styles.forh1}>
                    The <span style={{ color: "red" }}>2.5% Club</span>
                </h1>
            </Row>
            <Row>
                <div className={styles.upperText}>
                    Just 2.5% of the people ideate, innovate, and test all of the ideas.
                </div>
            </Row>
            <div>
                <div className={styles.graph}>
                    <Image src={graph} alt="Graph" />
                </div>
                <div className={styles.finalText}>
                    <span ><Image src={arrow} />You’re almost here.</span>
                        
                </div>
            </div>

        </Container>
    )
}

export default Community;