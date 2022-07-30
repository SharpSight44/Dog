import React, { useState } from "react";
import { Link } from "react-router-dom";
import './aboutBreeder.css';
import pupp1 from './pictures/pupp1.jpg';
import pupp2 from './pictures/pupp2.jpg';
import pupp3 from './pictures/pupp3.jpg';
import pupp4 from './pictures/pupp4.jpg';
import logoPups from './pictures/logoPups.png';
import Good from "./pictures/HomeRun.png";
const pupps = [pupp1,pupp2,pupp3,pupp4];
export default function Litter() {



    return(

        <>
        <div id="topLit">
<div className="logoPup"><img src={logoPups}/></div>
<div id="pupHouse">{pupps.map((item, index)=> <div className="pupps" key={index}><img className="puppsImg"  src={item}/> <div style={{marginLeft:"35%", marginTop:"10%"}}> <div className="select">Select</div>      <a href="https://www.gooddog.com/breeders/mount-doodles-fam-florida#breed_id=124" target="_blank" rel="noreferrer"> <img style={{width:"150px"}} atl="dog"src={Good} /> </a>
</div></div>)}</div>



        </div>
        </>
    );
}