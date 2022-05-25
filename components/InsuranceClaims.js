import InsuranceStyles from '../styles/InsuranceClaims.module.scss'
import Form from './FormComponent'

const Insurance =()=>{
    return(
        <div className={InsuranceStyles.forDivMargin}>

            <div className={InsuranceStyles.insChooser}>
            
                <p className={InsuranceStyles.font1}> INSURED<span className={InsuranceStyles.Red}>.</span></p>
                <p className={InsuranceStyles.font2}> Is your Insurance Company<br/>  
                    denying your claims, <br/>
                    paying less claims or<br/>
                    complicating the process
                </p>
                <p className={InsuranceStyles.font3}>
                    Let the
                    <span className={InsuranceStyles.Red}> experts </span><br/>
                    handle your case!
                </p>
                
            </div>
            <Form/>
            
            
        </div>
        )
}

function Clicked(){

}

export default Insurance;