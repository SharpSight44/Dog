import React, { useState } from "react";
import './aboutBreeder.css';
import pupp1 from './pictures/pupp1.jpg';
import pupp2 from './pictures/pupp2.jpg';
import pupp3 from './pictures/pupp3.jpg';
import pupp4 from './pictures/pupp4.jpg';

const pupps = [pupp1,pupp2,pupp3,pupp4];
export default function Litter() {



    return(

        <>
        <div id="topLit">
<h1 style={{fontWeight:"600"}}> Available Pups!</h1>
<div id="pupHouse">{pupps.map((item, index)=> <div className="pupps" key={index}><img className="puppsImg"  src={item}/></div>)}</div>


        </div>
        </>
    );
}