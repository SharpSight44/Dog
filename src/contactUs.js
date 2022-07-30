import React from "react";
import Contact from './pictures/contact.png';



export const ContactUs = ()=>{

return(
<div style={{background:"rgba(125, 206, 19, .4)",height:"85vh", paddingBottom:"2%"}}>
<div style={{marginLeft:"10%", paddingTop:"5%"}}><img src={Contact} /></div>
<div className="contact">
<h6>Location</h6>
<p>Central Florida</p>
<h6>Phone</h6>
<p>(786)774-3836</p>
<h6>Email</h6>
<p>MountDoodlesFam@gmail.com</p>
</div>

</div>



);

};