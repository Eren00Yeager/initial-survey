import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,

} from "next-share";
import stylesSh from "../styles/share.module.css";
import tc from "../pic/whitetick.svg";

export default function Text({ compName }) {
  const linkN = "https://claim-remedy.com/";
  // const [text, setText] = useState(
  //   `I have sent a legal notice to ${compName} for the inconvenience caused to me in the insurance claim process.Thanks to  ${linkN}-[Claim Remedy] for helping me take legal action for no extra cost.`
  // );
  const text =  `I have sent a legal notice to ${compName} for the inconvenience caused to me in the insurance claim process.Thanks to  ${linkN}-[Claim Remedy] for helping me take legal action for no extra cost.`;

  // const copy = async () => {
      // const text =  `I have sent a legal notice to ${compName} for the inconvenience caused to me in the insurance claim process.Thanks to  ${linkN}-[Claim Remedy] for helping me take legal action for no extra cost.`;
  //     // await navigator.clipboard.writeText(text);
  //     await navigator.clipboard
  //     .writeText(text)
  //     .then(() => {
  //       alert("successfully copied");
  //     })
  //     .catch(() => {
  //       alert("something went wrong");
  //     });
  //   // await navigator.clipboard.writeText(text);
  // };


  const fallbackCopyTextToClipboard = async()=> {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copied Successfully' : 'unsuccessful';
      alert(msg)
    } catch (err) {
      alert('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  const copy = async () =>{
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    await navigator.clipboard.writeText(text).then(function() {
      alert('Copied Successfully');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  return (
    <Col lg="8" xs="10" className={stylesSh.fontThank}>
      <div style={{ textAlign: "center" }}>
        <Image src={tc} width={40} height={40}></Image>
      </div>
      <div className={stylesSh.ms}>
        Your legal notice has been sent successfully! A copy of the same has
        been sent you via email. <br />
        <span style={{ opacity: 0.4 }}>
          You will get notified when the company replies.
        </span>
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

          <TwitterShareButton url={linkN} title={`I have sent a legal notice to ${compName} for the inconvenience caused to me in the insurance claim process.Thanks to  ${linkN}-[Claim Remedy] for helping me take legal action for no extra cost.`}>
            <TwitterIcon round size={32} />
          </TwitterShareButton>
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
