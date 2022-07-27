import React, { useState } from "react";
import './aboutBreeder.css';
import shim1 from './pictures/shim1.jpg';
import shim2 from './pictures/shim2.jpg';
import shim3 from './pictures/shim3.jpg';
import shim4 from './pictures/shim4.jpg';


const shimmie = [shim1,shim2,shim3,shim4

];
const sillie = [
    
];

const billie = [
    
];
export default function DoodleFam() {
const [selectShm, setSelectShm] = useState(shimmie[0]);




return (
<>
<div id="topFam">
    <div className="Dogs millie">
        <div style={{position:"relative"}}><img  style={{width:"400px", border:"10px solid white"}}src={selectShm} /><div style={{position:"absolute", left:" 18px", top:"60px", transform:'rotate(-35deg)', zIndex:"2", color:"whitesmoke", fontSize:"50px", fontWeight:"800", WebkitTextStroke:"2px black"}}>Shimmie</div></div>
        <div style={{display:"flex", width:"400px", overflowX:"scroll"}}>{shimmie.map((x,i)=> <div key={i} style={{border:"5px solid white", margin:"7px"}} onClick={()=>setSelectShm(x)}><img style={{width:"150px"}} src={x} /></div> )}</div>

    </div>
    <div className="Dogs sillie">

    </div>
    <div className="Dogs willie">

    </div>
</div>

</>
);
}