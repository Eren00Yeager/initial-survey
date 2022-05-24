import InsuranceStyles from '../styles/InsuranceClaims.module.scss'

const Insurance =()=>{
    return(
        <div className={InsuranceStyles.forDivMargin}>
            
            <h1 className={InsuranceStyles.font1}> INSURED<span className={InsuranceStyles.Red}>.</span></h1>
            
            <h2 className={InsuranceStyles.font2}> Is your Insurance Company  
                denying your claims, 
                paying less claims or
                complicating the process</h2>

            <h3 className={InsuranceStyles.font3}>
                Let the
                <span className={InsuranceStyles.Red}> experts </span>
                handle your case!
            </h3>
           
           <div className={InsuranceStyles.insChooser}>
                <h1 className={InsuranceStyles.font4}> Choose the Insurance Type</h1>
               
                <button onClick={Clicked} className={InsuranceStyles.forButtons}>Health</button>
                <button onClick={Clicked} className={InsuranceStyles.forButtons}>Life</button>
                <button onClick={Clicked} className={InsuranceStyles.forButtons}>Vehicle</button>
            
            </div>
            <form className={InsuranceStyles.forForm} action="/insurance-resolve-status" method="post">
                <input className={InsuranceStyles.textBox} type="text" id="name" placeholder='Name'/>
                <input type="text" id="contact" placeholder='Contact'/>
                <button type="submit">Act</button>
            </form>
            
        </div>
        )
}

function Clicked(){

}

export default Insurance;