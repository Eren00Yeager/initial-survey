import Head from "next/head";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import svg from "../pic/mark.svg";
import im from "../pic/i2.svg";
// import i from "../pic/i1.png";


import { useState } from "react";


export default function consumer() {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [problem, setProblem] = useState('');
    const [error, seterror] = useState('');
    const [st, setst] = useState(false);
    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email || regex.test(email) === false) {

            seterror("Email is not valid");

            return false;
        }
        return true;
    }
    const submitHandler = async (e) => {
        e.preventDefault();

        console.log([name, mobile, email, problem])
        if (emailValidation()) {
            try {
                const response = await fetch("/api/consumersheet", {
                    method: "POST",
                    body: JSON.stringify({ name, mobile, email, problem }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                if(await response.status==201){
                    setst(true)
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
                setst(false);
            }
        }
    }

    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }

    const thnk = (
        <div className={consumerStyles.tnk}>
            <div className={consumerStyles.thank}>Thank you for
                signing up with us.
                We will soon
                reach out to you.</div>
        </div>
    )
    const frm = (
        <form className={consumerStyles.frm} onSubmit={submitHandler}>
            <div className={consumerStyles.grev}>
                Submit your Grievance
            </div>
            <div className={consumerStyles.details}>
                <div className={consumerStyles.det}>
                    <div className={consumerStyles.nam}>Name</div>
                    <input type="text" placeholder="Name" className={consumerStyles.plc} value={name} required onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className={consumerStyles.det}>
                    <div className={consumerStyles.nam}>Mobile No.</div>
                    <input type="text" placeholder="Mobile No." pattern="[0-9]{10}" className={consumerStyles.plc} required value={mobile} onChange={(e) => setMobile(e.target.value)}></input>
                </div>
                <div className={consumerStyles.det}>
                    <div className={consumerStyles.nam}>Email Id.</div>
                    <input type="text" placeholder="Email Id." className={consumerStyles.plc} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                    <div className={consumerStyles.err}>{error}</div>
                </div>
                <div className={consumerStyles.det}>
                    <div className={consumerStyles.nam}>Problem Faced</div>
                    <input type="text" placeholder="" className={consumerStyles.plc} value={problem} required onChange={(e) => setProblem(e.target.value)}></input>
                </div>
            </div>
            <div className={consumerStyles.terms}>
                <div className={consumerStyles.int}><input type="checkbox" required className={consumerStyles.check} id="vehicle1" name="vehicle1" value="Bike"></input>
                    <div>I have read and accept the Terms of<br></br><span style={{ color: "#2196F3" }}> Service & Privacy Policy *</span></div></div>
                <input className={consumerStyles.sub} type="submit" value="SUBMIT"></input>
            </div>


        </form>
    )
    return (
        <div className={consumerStyles.s}>
            <Head>
                <title>Consumer Complaints</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
                <link href='https://fonts.googleapis.com/css?family=Open Sans Condensed:700' rel='stylesheet'></link>
            </Head>

            <div className={consumerStyles.container}>

                <div className={consumerStyles.head}>
                    <div className={consumerStyles.hd}>
                        GetYourRefund
                    </div>

                    <div>
                        <button className={consumerStyles.btn} onClick={handleScroll}>About</button>
                    </div>
                </div>
                <div className={consumerStyles.main}>

                    {st ? thnk : frm}
                    <div className={consumerStyles.tct}>
                        <div className={consumerStyles.py}>
                            <Image fetchpriority="high" src={im} />
                        </div>
                        <div className={consumerStyles.t1}>
                            <div className={consumerStyles.title}>
                                <div className={consumerStyles.title2}>
                                    Still haven’t got that refund?
                                </div>

                                <div className={consumerStyles.title1}>
                                    Allow us to Fight your Fights.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className={consumerStyles.fo}>

                    <div className={consumerStyles.mid}>
                        Have you ever received a damaged, defective, or fake product bought online? Did you face difficulties getting the product replaced or returned? Did you have to make a lot of calls to get the refund? Did you feel that there should be someone to help you out? If your answer to any of these questions is yes, we have great news for you!
                    </div>
                    <div className={consumerStyles.mid}>
                        At agorá, we provide you the legal resources to fight against
                        poor customer services and fradulent market practises in
                        e-commerce.
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