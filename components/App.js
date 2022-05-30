import vakilBotstyles from "../styles/vakilbot.module.css";
import { Fragment } from "react";

export default function App()
{
    return (
    <Fragment>
         <div className={vakilBotstyles.head}>
         <div className={vakilBotstyles.hd}>VakilBot</div>
         <div className={vakilBotstyles.about}><a>About</a></div>
         <div><button className={vakilBotstyles.btn}>Sign up</button></div>
        </div>
    </Fragment>
);
}