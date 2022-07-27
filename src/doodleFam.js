import React, { useState } from "react";
import './aboutBreeder.css';
import shim1 from './pictures/shim1.jpg';
import shim2 from './pictures/shim2.jpg';
import shim3 from './pictures/shim3.jpg';
import shim4 from './pictures/shim4.jpg';
import merl1 from './pictures/merlie1.jpg';
import merl2 from './pictures/merlie2.jpg';
import merl3 from './pictures/merlie3.jpg';
import merl4 from './pictures/merlie4.jpg';
import merl5 from './pictures/merlie5.jpg';
import merl6 from './pictures/merlie6.jpg';
import merl7 from './pictures/merlie7.jpg';
import sillie1 from './pictures/sillie1.jpg';
import sillie2 from './pictures/sillie2.jpg';
import sillie3 from './pictures/sillie3.jpg';
import sillie4 from './pictures/sillie4.jpg';
import sillie5 from './pictures/sillie5.jpg';
import billie1 from './pictures/billie1.jpg';
import billie2 from './pictures/billie2.jpg';
import billie3 from './pictures/billie3.jpg';
import millie1 from './pictures/millie1.jpg';
import millie2 from './pictures/millie2.jpg';
import millie3 from './pictures/millie3.jpg';
import millie4 from './pictures/millie4.jpg';
import buddy1 from './pictures/buddy1.jpg';
import buddy3 from './pictures/buddy3.jpg';
import buddy4 from './pictures/buddy4.jpg';
import buddy5 from './pictures/buddy5.jpg';
import logo from './pictures/Mount.png';

const buddy = [ buddy4, buddy5, buddy1, buddy3];
const shimmie = [shim1,shim2,shim3,shim4

];
const merlie = [merl1,merl2,merl3,merl4, merl5, merl6, merl7
    
];

const sillie = [sillie1,sillie2,sillie3,sillie4,sillie5
    
];

const billie =[ billie1, billie2, billie3];

const millie =[millie1, millie2, millie3, millie4];

export default function DoodleFam() {
const [selectShm, setSelectShm] = useState(shimmie[0]);
const [selectMerl, setSelectMerl] = useState(merlie[0]);
const [selectSill, setSelectSill] = useState(sillie[0]);
const [selectBill, setSelectBill] = useState(billie[0]);
const [selectMill, setSelectMill] = useState(millie[0]);
const [selectBud, setSelectBud] = useState(buddy[0]);




return (
<>
<div id="topFam">
<div style={{display:"flex", justifyContent:"center"}}><img src={logo} /></div>
<div id="fam">
    <div className="Dogs shimmie">
       
        <div style={{position:"relative"}}><img  className="bigImg" src={selectShm} /><div style={{position:"absolute", left:" 18px", top:"60px", transform:'rotate(-35deg)', zIndex:"2", color:"whitesmoke", fontSize:"50px", fontWeight:"800", WebkitTextStroke:"2px black"}}>Shimmie</div></div>
        <div className="scroll">{shimmie.map((x,i)=> <div key={i} style={{border:"5px solid white", margin:"7px",height:"fit-content"}} onClick={()=>setSelectShm(x)}><img style={{width:"150px"}} src={x} /></div> )}</div>

    </div>
    <div className="Dogs merlie">
    <div style={{position:"relative"}}><img  className="bigImg" src={selectMerl} /><div style={{position:"absolute", left:" 18px", top:"60px", transform:'rotate(-35deg)', zIndex:"2", color:"whitesmoke", fontSize:"50px", fontWeight:"800", WebkitTextStroke:"2px black"}}>Merlie</div></div>
        <div className="scroll">{merlie.map((x,i)=> <div key={i} style={{border:"5px solid white", margin:"7px",height:"fit-content"}} onClick={()=>setSelectMerl(x)}><img style={{width:"150px"}} src={x} /></div> )}</div>


    </div>
    <div className="Dogs sillie">
    <div style={{position:"relative"}}><img  className="bigImg" src={selectSill} /><div style={{position:"absolute", left:" 18px", top:"60px", transform:'rotate(-35deg)', zIndex:"2", color:"whitesmoke", fontSize:"50px", fontWeight:"800", WebkitTextStroke:"2px black"}}>Sillie</div></div>
        <div className="scroll">{sillie.map((x,i)=> <div key={i} style={{border:"5px solid white", margin:"7px",height:"fit-content"}} onClick={()=>setSelectSill(x)}><img style={{width:"150px"}} src={x} /></div> )}</div>

    </div>
    <div className="Dogs billie">
    <div style={{position:"relative"}}><img  className="bigImg" src={selectBill} /><div style={{position:"absolute", left:" 18px", top:"60px", transform:'rotate(-35deg)', zIndex:"2", color:"whitesmoke", fontSize:"50px", fontWeight:"800", WebkitTextStroke:"2px black"}}>Billie</div></div>
        <div className="scroll">{billie.map((x,i)=> <div key={i} style={{border:"5px solid white", margin:"7px", height:"fit-content"}} onClick={()=>setSelectBill(x)}><img style={{width:"150px"}} src={x} /></div> )}</div>

    </div>
    <div className="Dogs millie">
    <div style={{position:"relative"}}><img  className="bigImg" src={selectMill} /><div style={{position:"absolute", left:" 18px", top:"60px", transform:'rotate(-35deg)', zIndex:"2", color:"whitesmoke", fontSize:"50px", fontWeight:"800", WebkitTextStroke:"2px black"}}>Millie</div></div>
        <div className="scroll">{millie.map((x,i)=> <div key={i} style={{border:"5px solid white", margin:"7px", height:"fit-content"}} onClick={()=>setSelectMill(x)}><img style={{width:"150px"}} src={x} /></div> )}</div>

    </div>
    <div className="Dogs buddy">
    <div style={{position:"relative"}}><img  className="bigImg" src={selectBud} /><div style={{position:"absolute", left:" 18px", top:"60px", transform:'rotate(-35deg)', zIndex:"2", color:"whitesmoke", fontSize:"50px", fontWeight:"800", WebkitTextStroke:"2px black"}}>Buddy</div></div>
        <div className="scroll">{buddy.map((x,i)=> <div key={i} style={{border:"5px solid white", margin:"7px", height:"fit-content"}} onClick={()=>setSelectBud(x)}><img style={{width:"150px"}} src={x} /></div> )}</div>

    </div>
</div>
</div>
</>
);
}