import React, { useState } from "react";
import { Link } from "react-router-dom";
import './aboutBreeder.css';
import buddy4 from './pictures/buddy4.jpg';
import logoPups from './pictures/logoPups.png';
import Good from "./pictures/HomeRun.png";
import millie2 from './pictures/millie2.jpg';




export default function Litter() {



    return(

        <>
        <div id="topLit">
<div className="logoPup"><img src={logoPups}/></div>
<div id="pupHouse"> </div>
<div style={{width:"500px", height:"350px", background:"white", borderRadius:"10px", border:" 2px solid #f5f5f5"}}> <img style={{marginTop:"4%",marginLeft:"12%",borderRadius:"50%", width:"200px", height:"200px", objectFit:"cover"}} src={buddy4}/><img style={{marginTop:"4%",borderRadius:"50%", width:"200px", height:"200px", objectFit:"cover", marginLeft:"-40px"}} src={millie2}/>
<div style={{fontSize:"42px", fontWeight:"500", marginLeft:"20%"}}>Buddy x Millie </div><div style={{fontSize:"32px", fontWeight:"400", marginLeft:"23%"}}>Born March 28th</div></div>



        </div>
        </>
    );
}