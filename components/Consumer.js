import consumerStyles from "../styles/consumer.module.css";
import { Fragment } from "react";
import svg from "../pic/mark.svg";
import i from "../pic/i1.png";
import Image from "next/image";
function Consumer() {
  return (
    <Fragment>
      <div className={consumerStyles.head}>
        <div className={consumerStyles.hd}>
          <div>
            a<span className={consumerStyles.white}>gor</span>á
          </div>
          <div>
            <Image src={i} alt="Pic" width={71} height={74} />
          </div>
        </div>

        <div>
          <button className={consumerStyles.btn}>About</button>
        </div>
      </div>
      <div className={consumerStyles.t1}>
        <span className={consumerStyles.title}>
          <span className={consumerStyles.title2}>
            Still haven’t got that refund?
          </span>
          <br></br>
          <span className={consumerStyles.title1}>
            Allow us to fight your fights.
          </span>
        </span>
      </div>
      <div className={consumerStyles.mid}>
        <span>
          At agorá, we provide you the legal<br></br> resources to fight against
          poor customer<br></br> services and fradulent market practises in
          e-commerce.
        </span>
      </div>
      <div className={consumerStyles.points}>
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
          <div className={consumerStyles.t}>Fight delay in refunds</div>
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
    </Fragment>
  );
}

export default Consumer;
