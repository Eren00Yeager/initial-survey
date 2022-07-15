import Head from "next/head";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import svg from "../pic/mark.svg";
import im from "../pic/i2.svg";
import i1 from "../pic/nofee.svg";
import i2 from "../pic/law.svg";
import i3 from "../pic/end2.svg";
import j1 from "../pic/info.svg";
import j2 from "../pic/heard.svg";
import j3 from "../pic/seek.svg";
import j4 from "../pic/free.svg";
import j5 from "../pic/safe.svg";
import a from "../pic/carrow.svg";
import f from "../pic/foot.svg";
import z1 from "../pic/in.svg";
import z2 from "../pic/tweet.svg";
import z3 from "../pic/mail.svg";
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import { useState, useEffect } from "react";


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
                if (await response.status == 201) {
                    setst(true)
                } else {
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

    const [windowSize, setWindowSize] = useState({
        width: "",
        height: "",
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
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
        <Form className={consumerStyles.frm} onSubmit={submitHandler}>
            <div className={consumerStyles.grev}>
                Submit your Grievance
            </div>
            <div className={consumerStyles.details}>
                <Accordion >
                    <Accordion.Item eventKey="0" style={{background:"#424242"}}>
                        <Accordion.Header>Consumer Details</Accordion.Header>
                        <Accordion.Body>
                            <Form.Group className={consumerStyles.det}>
                                <Form.Label className={consumerStyles.nam}>Name</Form.Label>
                                <Form.Control className={consumerStyles.plc} type="text" placeholder="Name of consumer" />
                            </Form.Group>

                            <Form.Group className={consumerStyles.det} >
                                <Form.Label className={consumerStyles.nam}>Mobile No.</Form.Label>
                                <Form.Control className={consumerStyles.plc} type="Mobile No." pattern="[0-9]{10}" placeholder="Mobile No." onChange={(e) => setMobile(e.target.value)} />
                            </Form.Group>

                            <Form.Group className={consumerStyles.det} >
                                <Form.Label className={consumerStyles.nam}>Email Id.</Form.Label>
                                <Form.Control className={consumerStyles.plc} type="text" placeholder="Email Id." onChange={(e) => setMobile(e.target.value)} />
                            </Form.Group>

                            <Form.Group className={consumerStyles.det}>
                                <Form.Label className={consumerStyles.nam}>Address of Consumer</Form.Label>
                                <Form.Control className={consumerStyles.plc} placeholder="Address of Consumer" />
                            </Form.Group>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion >
                    <Accordion.Item eventKey="0" style={{background:"#424242"}}>
                        <Accordion.Header>Issues Faced</Accordion.Header>
                        <Accordion.Body>
                        <Form.Group className={consumerStyles.det}>
                    <Form.Label className={consumerStyles.nam}>Problem Faced</Form.Label>
                    <Form.Select className={consumerStyles.plc}>
                        <option className={consumerStyles.pot}>Received Defective product</option>
                        <option className={consumerStyles.pot}>Received Defective product</option>
                        <option className={consumerStyles.pot}>Received Defective product</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className={consumerStyles.det}>
                    <Form.Label className={consumerStyles.nam}>Expectation from Us</Form.Label>
                    <Form.Select className={consumerStyles.plc}>
                        <option className={consumerStyles.pot}>Received Defective product</option>
                        <option className={consumerStyles.pot}>Received Defective product</option>
                        <option className={consumerStyles.pot}>Received Defective product</option>
                    </Form.Select>
                </Form.Group>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

               
                <Form.Group className={consumerStyles.terms} >
                    <Form.Check type="checkbox" label="Can't check this" />

                </Form.Group>
                <Button variant="primary" className={consumerStyles.sub} >
                 Send
                </Button>
            </div>

        </Form>
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
                        GetYourRefunds
                    </div>

                    <div>
                        <a href="#about-us" className={consumerStyles.btn} onClick={handleScroll}>About Us</a>
                    </div>
                </div>
                <div className={consumerStyles.main}>

                    {st ? thnk : frm}
                    <div className={consumerStyles.tct}>
                        <div className={consumerStyles.py} style={windowSize.width > 900 ? { position: "relative", width: "32.552vw" } : { position: "relative", width: "250px" }} >
                            <Image src={im} layout="responsive" />
                        </div>
                        <div className={consumerStyles.t1}>
                            <div className={consumerStyles.title}>
                                <div className={consumerStyles.title2}>
                                    Still haven’t got that refund?
                                </div>

                                <div className={consumerStyles.title1}>
                                    Allow us to Fight <br></br>for your Rights.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className={consumerStyles.fo}>

                    <div className={consumerStyles.mid}>
                        Have you received a damaged, defective, or fake product from an online e-commerce purchase?
                    </div>
                    <div className={consumerStyles.mid}>
                        we provide you the legal resources to fight against
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
                <div className={consumerStyles.sect}>
                    <div className={consumerStyles.sech}>Why Us</div>
                    <div className={consumerStyles.fwrap}>
                        <div className={consumerStyles.box}>
                            <div className={consumerStyles.bsvg} ><div style={windowSize.width > 900 ? { width: "7.747vw", position: "relative" } : { width: "30vw", position: "relative" }}><Image src={i1} layout="responsive"></Image></div></div>
                            <div className={consumerStyles.des}>
                                <span className={consumerStyles.des1}> No fees </span>
                                <span className={consumerStyles.des2}>before you are compensated.</span>
                            </div>
                        </div>
                        <div className={consumerStyles.box}>
                            <div className={consumerStyles.bsvg}> <div style={windowSize.width > 900 ? { width: "12.240vw", position: "relative" } : { width: "50vw", position: "relative" }}><Image src={i2} layout="responsive"></Image></div></div>
                            <div className={consumerStyles.des}>
                                <span className={consumerStyles.des1}>300+ lawyers </span>
                                <span className={consumerStyles.des2}>experienced in consumer law. </span>
                            </div>
                        </div>
                        <div className={consumerStyles.box}>
                            <div className={consumerStyles.bsvg}><div style={windowSize.width > 900 ? { width: "13.477vw", position: "relative" } : { width: "50vw", position: "relative" }}><Image src={i3} layout="responsive"></Image></div></div>
                            <div className={consumerStyles.des}>
                                <span className={consumerStyles.des1}>End-to-End</span>
                                <span className={consumerStyles.des2}>seamless legal solutions for your woes  as a consumer.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={consumerStyles.sect} id="about-us">
                    <div className={consumerStyles.sech}>About Us</div>
                    <div className={consumerStyles.abt}>Along with the growth of the e-commerce market, issues with the products and services like receiving damaged products, products not getting replaced or returned, not getting a refund etc also increased exponentially.  We are engineers who were motivated by this issue and decided to make our contribution in improving accessibility to law for the common consumer. We have built a legal platform to help consumers in getting you what's yours. We provide you access to our network of reliable professionals and coordinate with them to fulfill all your legal requirements concerning consumer complaints.   </div>
                </div>
                <div className={consumerStyles.sect}>
                    <div className={consumerStyles.sech}>Your Rights as a consumer</div>
                    <div className={consumerStyles.abt}>The Consumer Protection Act of  1986, you as a consumer have the following rights.</div>
                    <div className={consumerStyles.fwrap}>
                        <div className={consumerStyles.box}>
                            <div className={consumerStyles.bsvg} ><div style={windowSize.width > 900 ? { width: "6.120vw", position: "relative" } : { width: "30vw", position: "relative" }}><Image src={j1} layout="responsive"></Image></div></div>
                            <div className={consumerStyles.des}>
                                <span className={consumerStyles.des1}> Right to information </span>
                                <span className={consumerStyles.des2}>about the quality of goods and services</span>
                            </div>
                        </div>
                        <div className={consumerStyles.box}>
                            <div className={consumerStyles.bsvg} ><div style={windowSize.width > 900 ? { width: "9.440vw", position: "relative" } : { width: "50vw", position: "relative" }}><Image src={j2} layout="responsive"></Image></div></div>
                            <div className={consumerStyles.des}>
                                <span className={consumerStyles.des1}>Right to be heard </span>
                                <span className={consumerStyles.des2}>in matters concerning consumer interest </span>
                            </div>
                        </div>
                        <div className={consumerStyles.box}>
                            <div className={consumerStyles.bsvg} ><div style={windowSize.width > 900 ? { width: "12.891vw", position: "relative" } : { width: "70vw", position: "relative" }}><Image src={j3} layout="responsive"></Image></div></div>
                            <div className={consumerStyles.des}>
                                <span className={consumerStyles.des1}>Right to seek redressal</span>
                                <span className={consumerStyles.des2}> when rights are infringed</span>
                            </div>
                        </div>
                        <div className={consumerStyles.box}>
                            <div className={consumerStyles.bsvg} ><div style={windowSize.width > 900 ? { width: "7.161vw", position: "relative" } : { width: "30vw", position: "relative" }}><Image src={j4} layout="responsive"></Image></div></div>
                            <div className={consumerStyles.des}>
                                <span className={consumerStyles.des1}>Right to freely choose</span>
                                <span className={consumerStyles.des2}> from goods & services </span>
                            </div>
                        </div>
                        <div className={consumerStyles.box}>
                            <div className={consumerStyles.bsvg} ><div style={windowSize.width > 900 ? { width: "8.594vw", position: "relative" } : { width: "40vw", position: "relative" }}><Image src={j5} layout="responsive"></Image></div></div>
                            <div className={consumerStyles.des}>
                                <span className={consumerStyles.des1}>Right to safety</span>
                                <span className={consumerStyles.des2}> from hazardous goods & services</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={consumerStyles.sect}>
                    <div className={consumerStyles.sech}>The Process</div>
                    <div className={consumerStyles.proc}>
                        <div className={consumerStyles.pr}>
                            <div className={consumerStyles.pu}>1) Inform us about your problem</div>
                            <div className={consumerStyles.pd}>Our legal advisory team will get in touch with you and collect the details regarding your issue.</div>
                        </div>
                        {windowSize.width > 900 ? <div style={{ width: "3.971vw", position: "relative" }}><Image src={a} layout="responsive"></Image></div> : ""}
                        <div className={consumerStyles.pr}>
                            <div className={consumerStyles.pu}>2) Filing a legal notice</div>
                            <div className={consumerStyles.pd}>Our legal team will then file a legal notice against the seller involved in the issue.</div>
                        </div>
                        {windowSize.width > 900 ? <div style={{ width: "3.971vw", position: "relative" }}><Image src={a} layout="responsive"></Image></div> : ""}
                        <div className={consumerStyles.pr}>
                            <div className={consumerStyles.pu}>3) Consumer Court</div>
                            <div className={consumerStyles.pd}>In case the company does not respond, our trusted network of lawyers will fight the case in consumer court and resolve the case.</div>
                        </div>

                    </div>
                </div>
                <div className={consumerStyles.sect}>
                    <div className={consumerStyles.sech}>FAQs</div>
                    <div className={consumerStyles.qa}>
                        <div className={consumerStyles.ques}>Q. What is the amount I have to pay to get my issue resolved?</div>
                        <div className={consumerStyles.ans}>A: You do not have to pay any fees upfront. A commission of 10% will be charged if we are successful in getting your issue resolved. This legal fees would also be compensated by the vendor against whom you are raising a complaint.</div>
                    </div>
                    <div className={consumerStyles.qa}>
                        <div className={consumerStyles.ques}>Q. How long does it take to resolve a consumer complaint ?</div>
                        <div className={consumerStyles.ans}>A: In some cases the company resolves the complaint within 15 days after they recieve the legal notice . If the company does not resolve the complaint, it may take on average 8-18 months to resolve the issue through consumer courts.</div>
                    </div>
                </div>
                <div className={consumerStyles.foot} >
                    <div className={consumerStyles.ab1}>
                        <div className={consumerStyles.ftxt}>GetYourRefunds</div>
                        <div className={consumerStyles.cprt}>© Copyright 2022</div>
                    </div>
                    <div className={consumerStyles.ab2}>
                        <a href="https://www.linkedin.com/company/getyourrefund/" style={windowSize.width > 900 ? { width: '3.255vw', position: 'relative' } : { width: '20vw', position: 'relative' }}><Image src={z1} layout='responsive'></Image></a>
                        <a href="https://twitter.com/getyourrefunds" style={windowSize.width > 900 ? { width: '3.255vw', position: 'relative' } : { width: '20vw', position: 'relative' }}><Image src={z2} layout='responsive'></Image></a>
                        <a href="mailto:getyourrefunds@gmail.com" style={windowSize.width > 900 ? { width: '3.255vw', position: 'relative' } : { width: '20vw', position: 'relative' }}><Image src={z3} layout='responsive'></Image></a>

                    </div>
                    {windowSize.width > 900 ? <div style={{ width: '100%', position: 'relative' }}>
                        <Image src={f} layout='responsive'></Image>
                    </div> : ""}

                </div>
            </div>
        </div>

    );
}