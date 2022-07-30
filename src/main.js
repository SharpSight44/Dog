import React from "react";
import Litter from "./litter.jpg"
import Good from "./pictures/HomeRun.png";
import './main.css';



export const Main = () => {
  return (
    <div id="topDiv" style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2020/08/21/15/45/golden-doodle-5506492_960_720.png")`, backgroundRepeat:"no-repeat"}}>
    <div style={{background:"rgba(125, 206, 19, .5)", paddingBottom:"2%"}}>
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
THE BREEDER</h2><p style={{fontWeight:"500"}}>Hi, I'm Ellie Nunez I'm the breeder behind Mount Doodles Fam located in Fruitland Park, FL. Our dogs are bred to have top qualities that all families want in their puppies, such as compassion, patience, and love! We raise our litters in our home to help set the foundation for happy and confident puppies to transition well into their forever homes. It’s a privilege to have the opportunity to make an impact on each individual puppy!</p>

       </div>
       </div>
       <div style={{display:"flex", justifyContent:"center"}}>
       <a href="https://www.gooddog.com/breeders/mount-doodles-fam-florida#breed_id=124" target="_blank" rel="noreferrer"> <img style={{width:"150px"}} atl="dog"src={Good} /> </a>
       </div>
       </div>
       
      
    </div>
  );
};