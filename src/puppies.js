import React from "react";
import './aboutBreeder.css';
import Good from "./pictures/HomeRun.png";



export const Puppies = ()=>{

return(
<div style={{background:"rgba(125, 206, 19, .5)", paddingBottom:"2%"}}>

<h1>Interested in a beautiful Golden Doodle Pup?</h1>
<div style={{display:"flex", justifyContent:"center"}}>
<p style={{fontSize:"22px"}}>
Be the first for one of our current or upcoming litters

</p>
<a href="https://www.gooddog.com/breeders/mount-doodles-fam-florida?adopter_app_open=true#breed_id=124" target="_blank"> <img style={{width:"150px"}} src={Good}/></a>

</div>
<div id="puppies" style={{ justifyContent:"center"}}>
<p id="reachOut"style={{ display:"block"}}>
    <h1>Reach Out Directly</h1>
Also you can  simply reach out to us via Instagram, Email, or Call/Text (786)774-3836 for more information on a specific puppy or litter. 

Once approved through our application process through Gooddog.com or approved via inquiry on Instagram Direct Message, Email, or Call/Text, we then request a $300 deposit via e-transfer such as Zelle or through Gooddog.com to reserve your spot for a pick in the litter of your choice. Picks are honored in the order your deposit is recieved.

Deposits are non refundable but we will transfer them to another litter of your choice should timing not work with your schedule or you don’t want to reserve a puppy from the litter you chose to get a puppy from for whatever reason.

</p>

<p><h1>Puppies Come With</h1>
<ol>
    <li>A 30 day Florida health certificate signed by a veterinarian.</li>
    <li>Dewormed & health checked by a veterinarian every two weeks from birth until they go home</li>
    <li>Professional photos and a weekly update sent to the families of the puppy.</li>
    <li>Socialized with our family, dogs, & cats.</li>
    <li>Desensitized to numerous sounds and noises.</li>
    <li>Desensitized to tummy time and paw touch.</li>
    <li>Time and attention with each individual puppy until they go home</li>
    
</ol>
</p>
</div>
<div style={{display:"flex", justifyContent:"center"}}>
<p style={{width:"500px", display:"block"}}>
    <h1>Enrichment Tools</h1>
    <ol>
        <li>Potty Training</li>
        <li>Toys, Ball, Structures, Climbing </li>
        <li>Sound Stimulation </li>
        <li>Puppy Manners</li>
        <li>Grooming Desensitization </li>
        <li>Impulse Control</li>
        <li>Touch Desensitization </li>
        <li>Puppy Temperament Evaluation</li>
        <li>Early Scent Introduction (ESI) </li>
        <li>Early Neurological Stimulation (ENS) </li>
        <li>Household Desensitization </li>
        <li>Socialized with Cats & Adult Dogs </li>
        <li> Socialized with Children & Elderly</li>

    </ol>
    
    
    
    </p></div>

</div>




);

};