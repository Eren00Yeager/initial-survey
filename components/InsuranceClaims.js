import InsuranceStyles from "../styles/InsuranceClaims.module.scss";
import styles from "../styles/InsuranceNew.module.scss";
import SearchBar from "./searchbar";

import {
  Row,
  Container,
  Col,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useState, useRef } from "react";
import Image from "next/image";

import Love from "../pic/love.svg";
import AboutImage from "../pic/forabout.svg";
import Circle from "../pic/circle.svg";
import Lawyer from "../pic/lawyer.svg";
import Order from "../pic/order.svg";
import Phone from "../pic/phone.svg";
import Arrow from "../pic/arrow.svg";
import Footer from "../pic/footerInsurance.svg";

const Insurance = ({comp}) => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [relIssue,setRelIssue] = useState("Issue1");
  const [company,setCompany] =useState("asd");
  const [companyId,setCId] =useState("asd");
  const [amt,setAmt]  = useState("");
  const [state, setState] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log([type, name, contact,mail,address,relIssue,amt,company,companyId]);

    if (type == "") {
      alert("Select the insurance type");
      return;
    }
    try {
      const response = await fetch("/api/insurancesheet", {
        method: "POST",
        body: JSON.stringify({ type, name, contact,mail,address,relIssue,amt,company,companyId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if ((await response.status) == 201) {
        alert("Details Submitted Successfully");
        setState(true);
      } else {
        throw response.json();
      }
    } catch (e) {
      console.log(e);
      alert("There was an error in submitting\nPlease try again");
      setName("");
      setType("");
      setContact("");
      setMail("");
      setAddress("");
      setRelIssue("Issue1");
      // setCompany("");
      // setCId("");
      setAmt("");

    }
  };

  const ThankForm = (
    <Col lg="3" className={styles.fontThank}>
      <h3
        style={{
          backgroundColor: "rgba(67, 44, 206, 0.25)",
          padding: "2vh",
          borderRadius: "13px",
        }}
      >
        Thank you for signing up with us. We will soon reach out to you.
      </h3>
    </Col>
  );

  const DetailsForm = (
    <Col lg="3" className={InsuranceStyles.formCol}>
      <Form onSubmit={submitHandler} className={InsuranceStyles.formdiv}>
        <p className={InsuranceStyles.radiocontent}>
          Choose the Insurance type
        </p>
        <Row>
          <div class="btn-group" role="group">
            <Col>
              {" "}
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                value="Health"
                onClick={(e) => setType(e.target.value)}
              />
              <label
                class={`btn btn-primary ${InsuranceStyles.button}`}
                htmlFor="btnradio1"
              >
                Health
              </label>
            </Col>
            <Col>
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                value="Life"
                onClick={(e) => setType(e.target.value)}
              />
              <label
                className={`btn btn-primary ${InsuranceStyles.button}`}
                htmlFor="btnradio2"
              >
                Life
              </label>
            </Col>
            <Col>
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
                value="Vehicle"
                onClick={(e) => setType(e.target.value)}
              />
              <label
                class={`btn btn-primary  ${InsuranceStyles.button}`}
                htmlFor="btnradio3"
              >
                Vehicle
              </label>
            </Col>
          </div>
        </Row>
        <div className={InsuranceStyles.forForm}>
          <Row>
            <div className={InsuranceStyles.forInp}>
              {" "}
              <input
                className={InsuranceStyles.input}
                id="name"
                type="name"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </Row>
          <Row>
            <div className={InsuranceStyles.forInp}>
              <input
                className={InsuranceStyles.input}
                id="contact"
                type="contact"
                name="contact"
                placeholder="Contact"
                pattern="[0-9]{10}"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </Row>
          <Row>
            <div className={InsuranceStyles.forInp}>
              <input
                className={InsuranceStyles.input}
                id="mail"
                name="mail"
                placeholder="Mail Id"
                // pattern="^[A-Za-z0-9_-]{0,50}$"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
          </Row>
          <Row>
            <div className={InsuranceStyles.forInp}>
              <input
                className={InsuranceStyles.input}
                id="address"
                name="address"
                placeholder="Address"
                // pattern="^[A-Za-z0-9_-]{0,50}$"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </Row>
          <Row>
            <div className={InsuranceStyles.forInp}>
              <input
                className={InsuranceStyles.input}
                id="amt"
                name="amt"
                placeholder="Amount"
                // pattern="^[A-Za-z0-9_-]{0,50}$"
                required
                value={amt}
                onChange={(e) => setAmt(e.target.value)}
              />
            </div>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label htmlFor="issues" >
              Related Issue
              </Form.Label>
              <Form.Select id="issues" onChange={(e) => setRelIssue(e.target.value)}>
                <option>Issue 1</option>
                <option>Issue 2</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <SearchBar comp={comp} setCompany={setCompany} setCId={setCId}/>
          </Row>
          <Row>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Add Relevant Documents</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Row>
          <Row>
          <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="consent"
                label="I consent to take legal actions against the company"
              />
            </Form.Group>
          </Row>
          <Row>
            <div className={InsuranceStyles.forSub}>
              <button
                type="submit"
                className={`btn btn-primary ${InsuranceStyles.submit}`}
              >
                Submit
              </button>
            </div>
          </Row>
        </div>
      </Form>
    </Col>
  );

  return (
    <Container fluid className={styles.Container}>
      <Row style={{ paddingTop: "3em" }}>
        <Col
          xs="4"
          lg="4"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={styles.font1}>ClaimRemedy</div>
        </Col>
        <Col></Col>
        <Col lg="4" xs="6" style={{ textAlign: "center" }}>
          <button className={styles.font2}>
            <a href="#form">Get Your Claim</a>
          </button>
        </Col>
      </Row>

      <Row style={{ paddingTop: "3em" }}>
        <Col></Col>
        <Col lg="11" xs="12">
          <p className={styles.font3}>Get Your Claim</p>
          <p className={styles.font4}>
            back from any company.
            <br />
            Totally Hassle Free.
          </p>
        </Col>
        <Col></Col>
      </Row>

      <Row style={{ paddingTop: "1em" }}>
        <Col></Col>
        <Col lg="11">
          <p className={styles.font5}>
            If your insurance claim was wrongly rejected, delayed, or a less
            claim amount given, our experts can get your claim from any company
            while you sit back and relax!{" "}
          </p>
        </Col>
        <Col></Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <button className={styles.toShowForm}>
          <a href="#form">Get Your Claim</a>
        </button>
      </Row>

      <Row style={{ paddingTop: "2em" }}>
        <Col></Col>
        <Col lg="8">
          <div className={styles.love}>
            <div className={styles.font17}>Built with&nbsp;</div>
            <div style={{ width: "5%", position: "relative" }}>
              <Image src={Love} layout="responsive" />
            </div>
            <div className={styles.font17}>
              &nbsp;by Engineers from IIT Madras
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ paddingTop: "3.5em" }}>
        <Col></Col>
        <Col lg="10">
          <p className={styles.font8}>How it works</p>
        </Col>
        <Col></Col>
      </Row>

      <Row style={{ paddingTop: "2em" }}>
        <div className={styles.forLaptopMobile}>
          <Col sm="4" xs="8">
            <div className={styles.parent}>
              <div className={styles.image2} style={{ width: "17%" }}>
                <Image src={Phone} layout="responsive" />
              </div>
              <div style={{ width: "25%", position: "relative" }}>
                <Image src={Circle} layout="responsive" />
              </div>
              <div className={styles.forArrow} style={{ width: "10%" }}>
                <Image src={Arrow} layout="responsive" />
              </div>
            </div>

            <p className={styles.font13}>one on one guidance</p>
            <p className={styles.font14}>
              Our experts will call you to understand your case and guide you on
              further process
            </p>
          </Col>

          <Col sm="4" xs="8">
            {" "}
            <div className={styles.parent}>
              <div className={styles.image2} style={{ width: "17%" }}>
                <Image src={Order} layout="responsive"></Image>
              </div>

              <div style={{ width: "25%", position: "relative" }}>
                <Image src={Circle} layout="responsive" />
              </div>
              <div className={styles.forArrow} style={{ width: "10%" }}>
                <Image src={Arrow} layout="responsive" />
              </div>
            </div>
            <p className={styles.font13}>Drafting a legal notice</p>
            <p className={styles.font14}>
              We send a legal notice to the company.In most cases, people get
              their desired compensation at this stage
            </p>
          </Col>
          <Col sm="4" xs="8">
            {" "}
            <div className={styles.parent}>
              <div className={styles.image2} style={{ width: "17%" }}>
                <Image src={Lawyer} layout="responsive" />
              </div>
              <div style={{ width: "25%", position: "relative" }}>
                <Image src={Circle} layout="responsive" />
              </div>
            </div>
            <p className={styles.font13}>Our top lawyers handle the case</p>
            <p className={styles.font14}>
              If it ever comes to this, you need not worry, our best lawyer will
              help you though the process.
            </p>
          </Col>
        </div>
      </Row>

      <Row style={{ paddingTop: "4em" }}>
        <Col lg="8">
          <p className={styles.font8} id="form">
            Why ClaimRemedy
          </p>
          <p className={styles.font10}>
            1.{" "}
            <span
              style={{ backgroundColor: "rgba(67, 44, 206, 0.25)" }}
              className={styles.font9}
            >
              {" "}
              No charges
            </span>{" "}
            before you get your claim.
            <br />
            2.{" "}
            <span
              style={{ backgroundColor: "rgba(67, 44, 206, 0.25)" }}
              className={styles.font9}
            >
              {" "}
              300+ experts team
            </span>{" "}
            with 10+ years of experience.
            <br />
            3.{" "}
            <span
              style={{ backgroundColor: "rgba(67, 44, 206, 0.25)" }}
              className={styles.font9}
            >
              {" "}
              Zero Hassles
            </span>{" "}
            ,we do all the papers & going to Courts.
          </p>
          <div>
            <p className={styles.font20}> So let's get what is yours!</p>
          </div>
        </Col>

        {state ? ThankForm : DetailsForm}
      </Row>

      <Row style={{ paddingTop: "4em" }}>
        <Col></Col>
        <Col lg="10">
          <Row>
            <p className={styles.font8} id="about">
              About us
            </p>
          </Row>
          <Row>
            <div className={styles.forLaptopMobile}>
              <Col sm="4" xs="11">
                <div style={{ width: "100%", position: "relative" }}>
                  <Image src={AboutImage} layout="responsive" />
                </div>
              </Col>
              <Col xs="11" sm="8">
                <p className={styles.font12}>
                  <span className={styles.font11}>
                    We are engineers pained by the situation{" "}
                  </span>
                  where People who pay premiums for years have to struggle to
                  get their claims. An individual finds oneself helpless in
                  front of the big companies and their ever confusing terms and
                  conditions.
                  <br />
                  <br />
                  Tired of this, we decided to change it forever through Claim
                  Remedy. At Claim Remedy, we provide individuals legal help to
                  fight for their claims.
                </p>
              </Col>
            </div>
          </Row>
        </Col>
        <Col></Col>
      </Row>

      <Row style={{ paddingTop: "4em" }}>
        <Col></Col>
        <Col lg="10" xs="10">
          <Row>
            <p className={styles.font8} id="faq">
              FAQs
            </p>
          </Row>
          <Row>
            <p className={styles.font22}>
              Q. What are generally the reasons for insurance claim rejection?
            </p>
            <br />
            <p className={styles.font21}>
              Ans: The reasons may vary according to your case. It will be
              mentioned in insurance claim denial letter given to you by the
              company. Generally they may range from false information at the
              time of getting the policy, missing the payment of premium, type
              of death etc. when it comes to term insurance claim rejection
              reasons. Health insurance claim rejection may be due to
              pre-existing conditions, waiting period, exclusions in the policy
              etc.
            </p>

            <p className={styles.font22}>
              Q. Should I first approach the insurance company before filing a
              complaint in consumer court?
            </p>
            <p className={styles.font21}>
              Ans: We would recommend that you file a complaint letter to
              insurance company for claim rejection before approaching external
              redressal bodies such as IRDAI, Consumer Courts , Ombudsman etc.
              Complaining with the internal redressal mechanism will serve as
              proof that we tried through internal customer support channels to
              resolve the issue before approaching courts.
            </p>

            <p className={styles.font22}>Q. How can ClaimRemedy help me?</p>
            <p className={styles.font21}>
              Ans: We will assess your scenario and understand if you were truly
              wronged by the insurance company. If yes, we file a legal notice
              to your insurance company as the first step. If they do not
              resolve it through this channel, we escalate it to the appropriate
              authority such as IRDAI, Insurance Ombudsman or Consumer Courts as
              required. We have a network of experienced insurance claim denial
              lawyers.
            </p>

            <p className={styles.font22}>
              Q. How much time does it generally take to resolve the case?
            </p>
            <p className={styles.font21}>
              Ans: It may take 15-30 days to get the issue resolved if the
              companies are cooperative in the initial stage. If we have to
              fight the case in consumer court, it may take upto 6 months or
              more depending on how the courts schedule the cases.
            </p>

            <p className={styles.font22}>
              Q. Do I need to pay any money to get my claim?
            </p>
            <p className={styles.font21}>
              Ans:You do not have to pay any fees initially. If we are succesful
              in getting your claim amount back, then only will we charge a 10%
              success fees on your claim amount.
            </p>

            <p className={styles.font22}>
              Q. What can I do to avoid insurance claim rejections in general?{" "}
            </p>
            <p className={styles.font21}>
              Ans: Always be thorough with your policy document and be aware of
              what is and what is NOT covered in the policy. Make sure you buy
              your policy from trusted sources only. You can also check out the
              claim rejection ratio of the insurance company you are planning to
              buy insurance from. In addition, try to pay your premiums on time
              and keep track of any changes in your insurance policy.
            </p>
          </Row>
        </Col>
        <Col></Col>
      </Row>

      <Row style={{ paddingTop: "4em" }}>
        <p className={styles.font15}>
          We are just a call away @+91&nbsp;7297803114
          <br />
          <span className={styles.mailPart}>
            or mail us at
            <span style={{ color: "#1B45DB" }}>
              <a href="mailto:claimremedycares@gmail.com">
                {" "}
                claimremedycares@gmail.com
              </a>
            </span>
          </span>
        </p>
      </Row>

      <Row className={styles.forFooter}>
        <p className={styles.font16}>
          ⓒ 2022 Claim Remedy&nbsp;&nbsp;&nbsp;<a href="#faq">FAQ</a>{" "}
          &nbsp;&nbsp;&nbsp;<a href="#about">About</a>
        </p>
        <div style={{ width: "100%", position: "relative" }}>
          <Image src={Footer} layout="responsive" />
        </div>
      </Row>
    </Container>
  );
};

export default Insurance;
