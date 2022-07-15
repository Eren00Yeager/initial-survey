import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from 'next/image';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import stylesSh from "../styles/share.module.css";
import tc from "../pic/whitetick.svg"

export default function Text({ compName }) {
  const linkN = "https://claim-remedy.com/";
  const [text, setText] = useState(
    `I have sent a legal notice to ${compName} for the inconvenience caused to me in the insurance claim process.Thanks to  ${linkN}-[Claim Remedy] for helping me take legal action for no extra cost.`
  );

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };

  return (
    <Col lg="8" xs="10" className={stylesSh.fontThank}>
      <div style={{ textAlign: "center" }}>
        <Image src={tc} width={40} height={40}></Image>
      </div>
      <div className={stylesSh.ms}>
        Your legal notice has been sent successfully! A copy of the same has
        been sent you via email. <br/>
		<span style={{opacity:0.4}}>You will get notified when the company replies.</span>
      </div>
      <Row>
        <div className={stylesSh.impact}>
          Share the below message on your favourite social media by tagging the
          alleged company to create better impact.
        </div>
      </Row>
      <Row>
        <div className={stylesSh.outerC}>
          <div className={stylesSh.cText}>
            I have sent a legal notice to {compName} for the inconvenience
            caused to me in the insurance claim process. <br />
            Thanks to &nbsp;<a href={linkN}>{linkN}</a> - Claim Remedy for
            helping me take legal action for no extra cost.
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={copy} className={stylesSh.forButton}>
              Copy Message
            </button>
          </div>
        </div>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <div className={stylesSh.Share}>
          <div className={stylesSh.forShare}>Share </div>

          <FacebookShareButton
            url={linkN}
            quote={`I have sent a legal notice to ${compName} for the inconvenience caused to me in the insurance claim process.Thanks to  ${linkN}-[Claim Remedy] for helping me take legal action for no extra cost.`}
            hashtag={"#claim"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <PinterestShareButton
            // {/* Url you want to share */}
            url={linkN}
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>

          <RedditShareButton
            // {/* Url you want to share */}
            url={linkN}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>

          <WhatsappShareButton
            // {/* Url you want to share */}
            title={`I have sent a legal notice to ${compName} for the inconvenience caused to me in the insurance claim process.Thanks to  ${linkN}-[Claim Remedy] for helping me take legal action for no extra cost.`}
            url={linkN}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <LinkedinShareButton
            // {/* Url you want to share */}
            summary={`I have sent a legal notice to ${compName} for the inconvenience caused to me in the insurance claim process.Thanks to  ${linkN}-[Claim Remedy] for helping me take legal action for no extra cost.`}
            title="Claim Remedy"
            url={linkN}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </Row>
    </Col>
  );
}
