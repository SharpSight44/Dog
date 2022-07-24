import React from "react";
import './aboutBreeder.css';
import Blue from './blue.jpg';



export const AboutBreeder = ()=>{

return(
    <div style={{backgroundImage:`url("https://thumbs.dreamstime.com/b/mini-golden-doodle-puppy-white-background-looking-to-camera-pet-apricot-color-180695460.jpg")`, backgroundPositionX:"right", backgroundRepeat:"no-repeat", position:"relative"}}>
<div  style={{height:"85vh", paddingBottom:"2%"}}>

<div id="content" style={{display:"flex", justifyContent:"center"}}>

<p style={{zIndex:"2"}}><h1 style={{zIndex:"3"}}> About Me</h1>
 Hi, I'm Ellie Nunez

I'm the breeder behind Mount Doodles Fam located in Fruitland Park, FL. Our dogs are bred to have top qualities that all families want in their puppies, such as compassion, patience, and love! We raise our litters in our home to help set the foundation for happy and confident puppies to transition well into their forever homes. It’s a privilege to have the opportunity to make an impact on each individual puppy!</p>
</div>
</div>
<div style={{backgroundImage:`url(${Blue})`, opacity: ".50", position:"absolute", height:"100%", width:"100%", left:"0px", top:"0px"}}></div>
</div>


);

};