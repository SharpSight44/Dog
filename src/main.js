import React from "react";
import Litter from "./litter.jpg"
import './main.css';



export const Main = () => {
  return (
    <div id="topDiv" style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2020/08/21/15/45/golden-doodle-5506492_960_720.png")`, backgroundRepeat:"no-repeat"}}>
    <div style={{background:"rgba(195, 232, 232, .5)", paddingBottom:"2%"}}>
       <h2 style={{fontWeight:"bolder", textAlign:"center", fontSize:"50px", paddingTop:"2%"}}> Loving, Healthy <br/> Well Trained Puppies</h2>
        
       <div style={{ display:"flex", justifyContent:"center"}}> <img id="hero"style={{ objectFit:"cover", border:"2px solid rgb(50, 64, 64)", borderRadius:"5%"}}src={Litter} alt="Litter"></img></div>
       
<div className="welcome">
       <div style={{width:"auto", fontSize:"20px", fontWeight:"bold", textAlign:"left", marginLeft:"3%"}}>
      <b style={{fontSize:"40px"}}> Welcome To ..<br/>
Mount Doodles Fam <br/></b>
 
OUR GOAL WILL ALWAYS BE TO PROVIDE QUALITY, HEALTHY, OUTSTANDING TEMPERAMENT, & TRAINED PUPPIES TO THE AMAZING FAMILIES OF OUR FUTURE LITTERS.
       </div>
       <div style={{ width:"auto", marginLeft:"10%", paddingTop:"2%"}}>
      <h2 style={{fontSize:"40px"}}> ABOUT
THE BREEDER</h2><p>Hi, I'm Ellie Nunez I'm the breeder behind Mount Doodles Fam located in Fruitland Park, FL. Our dogs are bred to have top qualities that all families want in their puppies, such as compassion, patience, and love! We raise our litters in our home to help set the foundation for happy and confident puppies to transition well into their forever homes. It’s a privilege to have the opportunity to make an impact on each individual puppy!</p>

       </div>
       </div>
       <div style={{display:"flex", justifyContent:"center"}}>
       <a href="https://www.gooddog.com/breeders/mount-doodles-fam-florida#breed_id=124" target="_blank" rel="noreferrer"> <img style={{width:"100px"}} atl="dog"src="https://www.gooddog.com/assets/packs/media/src/assets/breeder_badge-a941acd55ce40c92d77a49e4568cc9f2.svg" /> </a>
       </div>
       </div>
       
      
    </div>
  );
};