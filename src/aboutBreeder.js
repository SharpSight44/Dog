import React from "react";
import './aboutBreeder.css';
import puppps from './pictures/puppps.jpg';


export const AboutBreeder = ()=>{

return(
    <div style={{backgroundImage:`url("https://thumbs.dreamstime.com/b/mini-golden-doodle-puppy-white-background-looking-to-camera-pet-apricot-color-180695460.jpg")`, backgroundPositionX:"right", backgroundRepeat:"no-repeat"}}>
<div  style={{background:"rgba(125, 206, 19, .4)",height:"85vh", paddingBottom:"2%"}}>

<div id="content" style={{display:"flex", justifyContent:"center", fontWeight:"600"}}>

<p style={{zIndex:"2"}}><h1 style={{zIndex:"3"}}> About US</h1>
 Hi, I'm Ellie Nunez

 Welcome to Mountdoodlesfam Goldendoodles!
Mountdoodlesfam Goldendoodles is a premium home breeder of Goldendoodle Puppies - located in Sunny Central Florida. We have a wide variety of Goldendoodles types and coats. We love what we do and have lots of experience to share. We are committed to the research, development and improvement of the Goldendoodle dog breed. We specialize and strive to produce healthy companions, therapy and service dogs with wonderful temperaments. We breed well-adjusted, properly-socialized, sweet, loving Goldendoodle puppies with low to non-shedding, allergy-friendly coats. We specialize in Goldendoodles , F1B, F1BB generations. We breed Goldendoodles in medium and large standard sizes. Our doodles grow up right in our living room right beside us crate free. We love them
So much and we are sure you will love them too!</p></div>
<img className="elpup" src={puppps} />
</div>

</div>


);

};