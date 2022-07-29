import React, { useState } from "react";
import { Link } from "react-router-dom";
import './aboutBreeder.css';
import pupp1 from './pictures/pupp1.jpg';
import pupp2 from './pictures/pupp2.jpg';
import pupp3 from './pictures/pupp3.jpg';
import pupp4 from './pictures/pupp4.jpg';
import logoPups from './pictures/logoPups.png';
const pupps = [pupp1,pupp2,pupp3,pupp4];
export default function Litter() {



    return(

        <>
        <div id="topLit">
<div className="logoPup"><img src={logoPups}/></div>
<div id="pupHouse">{pupps.map((item, index)=> <div className="pupps" key={index}><img className="puppsImg"  src={item}/> <Link to={"/purchase"}><button style={{marginLeft:"35%", marginTop:"10%", background:"rgb(14, 198, 240)", color:"white", fontWeight:"600", padding:"6px", borderRadius:"10px", fontSize:"18px"}}>Reserve Pup</button></Link></div>)}</div>


        </div>
        </>
    );
}