import React, { useState } from "react";
import { Link } from "react-router-dom";
import './aboutBreeder.css';
import buddy4 from './pictures/buddy4.jpg';
import logoPups from './pictures/ActiveLitt.png';
import Good from "./pictures/HomeRun.png";
import millie2 from './pictures/millie2.jpg';
import billie3 from './pictures/billie3.jpg';



export default function Litter() {

const run1 = () => {
    window.open("https://www.gooddog.com/breeders/mount-doodles-fam-florida#litter_id=61326", "_blank");

};

const run2 = () => {
    window.open("https://www.gooddog.com/breeders/mount-doodles-fam-florida#litter_id=62918", "_blank");

};
    return(

        <>
        <div id="topLit">
<div className="logoPup">Active Litters</div>
<div id="pupHouse"> 
<div onClick={()=> run1()} style={{marginBottom:"3%", marginRight:"10%"}}><div className="cardClick"> <img className="picss" src={buddy4}/><img className="picsss" src={millie2}/>
<div className="dogss">Buddy x Millie </div><div className="desc">Born March 28th</div></div>
</div>
<div onClick={()=> run2()} ><div className="cardClick"> <img className="picss" src={buddy4}/><img  className="picsss" src={billie3}/>
<div className="dogss">Buddy x Billie </div><div className="desc">Born May 9th</div></div>
</div>
</div>


        </div>
        </>
    );
}