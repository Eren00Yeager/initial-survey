import InsuranceStyles from '../styles/InsuranceClaims.module.scss'
import FormComponent from './FormComponent'
import {Row,Container} from 'react-bootstrap'

const Insurance =()=>{
    return(
        <Container className={InsuranceStyles.forDivMargin}>

            <div className={InsuranceStyles.insChooser}>

                <Row>
                    <p className={InsuranceStyles.font1}> INSURED<span className={InsuranceStyles.Red}>.</span></p>
                </Row>
                <br/>
                <Row>
                    <p className={InsuranceStyles.font2}> Is your Insurance Company<br/>  
                        denying your claims, <br/>
                        paying less claims or<br/>
                        complicating the process
                    </p>    
                </Row>
                <br/>
                <Row>
                    <p className={InsuranceStyles.font3}>
                        Let the
                        <span className={InsuranceStyles.Red}> experts </span><br/>
                        handle your case!
                    </p>     
                </Row>
                <br/>
            </div>
        
            <Row className=''>
                <FormComponent/>
            </Row>
            
            
        </Container>
        )
}

function Clicked(){

}

export default Insurance;