import Head from "next/head";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import svg from "../pic/mark.svg";
import im from "../pic/i2.svg";
import i from "../pic/i1.png";
import Consumer from "../components/Consumer";

import { useState } from "react";


export default function consumer() {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [problem, setProblem] = useState('');
    const [error, seterror] = useState('');


    const emailValidation= ()=>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
           
                seterror("Email is not valid");
       
            return false;
        }
        return true;
    }


    const submitHandler = async (e) => {
        e.preventDefault();

        console.log([name,mobile,email,problem])
        
       if(emailValidation()){
        try {
            const response = await fetch("/api/consumersheet", {
                method: "POST",
                body: JSON.stringify({ name,mobile,email,problem }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if(await response.status==201){
                window.location.href="/thank-you"
            }else{
                throw response.json()
            }
        } catch (e) {
            console.log(e)
            alert("There was an error in submitting\nPlease try again")
            setName('');
            setMobile('');
            setEmail('');
            setProblem('');
        }
        
        }

    }


    return (
        <div className={consumerStyles.s}>
            <Head>
                <title>Consumer Complaints</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossorigin="anonymous"
                ></link>
            </Head>

            <div className={consumerStyles.container}>

                <div className={consumerStyles.head}>
                    <div className={consumerStyles.hd}>
                        <div className={consumerStyles.log}>
                            <Image src={i} alt="Pic"  />
                        </div>
                        <div>
                            agorá
                        </div>
                    </div>

                    <div>
                        <button className={consumerStyles.btn}>About</button>
                    </div>
                </div>
                <div className={consumerStyles.main}>
                    <form className={consumerStyles.frm} onSubmit={submitHandler}>
                        <div className={consumerStyles.grev}>
                            Submit your Grievance
                        </div>
                        <div className={consumerStyles.details}>
                            <div className={consumerStyles.det}>
                                <div className={consumerStyles.nam}>Name</div>
                                <input type="text" placeholder="Name" className={consumerStyles.plc} value={name} required onChange={(e)=>setName(e.target.value)}></input>
                            </div>
                            <div className={consumerStyles.det}>
                                <div className={consumerStyles.nam}>Mobile No.</div>
                                <input type="text" placeholder="Mobile No." pattern="[0-9]{10}" className={consumerStyles.plc} required value={mobile} onChange={(e)=>setMobile(e.target.value)}></input>
                            </div>
                            <div className={consumerStyles.det}>
                                <div className={consumerStyles.nam}>Email Id.</div>
                                <input type="text" placeholder="Email Id." className={consumerStyles.plc} value={email} required onChange={(e)=>setEmail(e.target.value)}></input>
                                <div className={consumerStyles.err}>{error}</div>
                            </div>
                            <div className={consumerStyles.det}>
                                <div className={consumerStyles.nam}>Problem Faced</div>
                                <input type="text" placeholder="" className={consumerStyles.plc} value={problem} required onChange={(e)=>setProblem(e.target.value)}></input>
                            </div>
                        </div>
                        <div className={consumerStyles.terms}>
                            <div className={consumerStyles.int}><input type="checkbox" required className={consumerStyles.check} id="vehicle1" name="vehicle1" value="Bike"></input>
                                <div>I have read and accept the Terms of<br></br><span style={{ color: "#2196F3" }}> Service & Privacy Policy *</span></div></div>
                            <input className={consumerStyles.sub} type="submit" value="SUBMIT"></input>
                        </div>


                    </form>
                    <div className={consumerStyles.tct}>
                        <div className={consumerStyles.t1}>
                            <span className={consumerStyles.title}>
                                <span className={consumerStyles.title2}>
                                    Still haven’t got that refund?
                                </span>

                                <span className={consumerStyles.title1}>
                                    Allow us to Fight your Fights.
                                </span>
                            </span>
                        </div>
                        <div className={consumerStyles.py}>
                            <Image src={im} />
                        </div>
                    </div>

                </div>

                <div className={consumerStyles.fo}>
                    <div className={consumerStyles.mid}>
                        <span>
                            At agorá, we provide you the legal resources to fight against
                            poor customer services and fradulent market practises in
                            e-commerce.
                        </span>

                    </div>
                    <div className={consumerStyles.points}>
                        <div>
                            <div className={consumerStyles.p}>
                                <div className={consumerStyles.i}>
                                    <Image src={svg} />
                                </div>
                                <div className={consumerStyles.t}>
                                    Fight refusal to replace faulty products.
                                </div>
                            </div>
                            <div className={consumerStyles.p}>
                                <div className={consumerStyles.i}>
                                    <Image src={svg} />
                                </div>
                                <div className={consumerStyles.t}><div>Fight delay in refunds</div></div>
                            </div>
                            <div className={consumerStyles.p}>
                                <div className={consumerStyles.i}>
                                    <Image src={svg} />
                                </div>
                                <div className={consumerStyles.t}>
                                    Fight misleading advertisements
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}