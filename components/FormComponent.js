import styles from '../styles/InsuranceClaims.module.scss'

const Form = () => {
  return (
      <>
        <div className={styles.formouter}>
            <form className={styles.formcomp}>
                <input className={styles.input} id="name" type="name" name="name" placeholder='Name'/><br/><br/>
                <input className={styles.input} id="contact" type="contact" name="contact" placeholder='Contact'/><br/><br/>
                <button type="submit" className={styles.submit}>
                    ACT
                </button>
            </form>
        </div>
      </>
    
    
  );
}

export default Form;

