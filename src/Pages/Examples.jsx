
import style from './Examples.module.css';
import {Link} from 'react-router-dom';
import SecondFooterExamples from '../Footer/SecondFooterExamples';
import { useState } from 'react';
import Arts from "./ExamplesComponents/Arts";
import Health from './ExamplesComponents/Health';
import Niche from './ExamplesComponents/Niche';
import Academics from './ExamplesComponents/Academics';
import Membership from './ExamplesComponents/Membership';
import Business from './ExamplesComponents/Business';
import new_york_times from '../images/new_york_times.webp';
import image11 from '../images/image11.webp';
import image12 from '../images/image12.webp';
import image13 from '../images/image13.webp';
import image14 from '../images/image14.webp';

export default function Examples(){

    const [text,setText]= useState("arts")

    const handleClick = (val)=>{
        setText(val);
    }
    return (
        <div>
            <div className={style.box1}>
                <p>The best online courses live on <span>Teachable</span>. From passion projects to multi-million dollar businesses, entrepreneurs trust us to help build and grow their <span>knowledge businesses.</span> Ready to join?</p>
                <a href='https://lms-client-server-app.netlify.app/auth' className={style.link}>Start for free</a>
            </div>
            <div className={style.box3}>
                <div className={style.linkbox}>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("arts")}>Arts</Link>
                        <div className={"arts"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("health")}>Health</Link>
                        <div className={"health"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link}  onClick={()=>handleClick("niche")}>Niche</Link>
                        <div className={"niche"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("academics")}>Academics</Link>
                        <div className={"academics"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("membership")}>Membership</Link>
                        <div className={"membership"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("business")}>Business</Link>
                        <div className={"business"===text? style.border: ""}></div>
                    </div>
                </div>
                <div>
                   {
                       text === "health"? <Health/> : text === "niche"? <Niche /> : text === "academics"? <Academics /> : text === "membership"? <Membership />: text==="business"? <Business />:<Arts /> 
                   }
                </div>
            </div>
            <div className={style.box2}>
                <p>Market leaders use Teachable to enrich their brands and businesses.</p>
                <div className={style.box2images}>
                    <img src={new_york_times} alt="The New York Times" width="400px"/>
                    <img src={image11} alt="inTuiT" width="180px"/>
                    <img src={image12} alt="Shopify" width="180px"/>
                    <img src={image13} alt="Pearson" width="180px"/>
                    <img src={image14} alt="Penn Law" width="180px"/>
                </div>
            </div>
            <SecondFooterExamples />
        </div>
    )
}