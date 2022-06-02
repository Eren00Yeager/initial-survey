import InsuranceStatus from '../components/InsuranceClaimStatus'
import styles from '../styles/InsuranceClaims.module.scss'

const InsuranceResolveStatus = () =>{
    return (
        <div className={styles.outerdiv}>
            <InsuranceStatus/>    
        </div>
        
    )
}

export default InsuranceResolveStatus