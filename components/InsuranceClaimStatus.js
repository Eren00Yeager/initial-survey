import { Container, Row } from 'react-bootstrap'
import styles from '../styles/InsuranceStatus.module.scss'

const InsuranceStatus =()=>{
    return(
        <Container className={styles.forDivMargin}>
            <Row><p className={styles.font1}>INSURED<span className={styles.red}>.</span></p></Row>

            <Row><p className={styles.font2}>Congrats ! You have taken<br/> your first step in fighting<br/> the bureaucracy. </p></Row>
            <center>
                <Row className={styles.font3outer}> <p className={styles.font3}>We will reach out to you to take the next step.</p></Row>
            
            </center>
        </Container>
    )}

export default InsuranceStatus