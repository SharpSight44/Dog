import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';
import { FacebookEmbed } from 'react-social-media-embed';
import './main.css';
import Pink from './pinkSky.jpg';

export const Socials = () => {



return (
    <div style={{backgroundImage:`url(${Pink})`, paddingBottom:"4%"}}>
  

<h1  > Instagram</h1>
    
    <div className="socials" >
  <InstagramEmbed  style={{margin:"20px"}} url="https://www.instagram.com/p/CfDO-veMj_D/?utm_source=ig_web_copy_link" width={328} />
  <InstagramEmbed style={{margin:"20px"}} url="https://www.instagram.com/p/Cd85rhJpYvl/?utm_source=ig_web_copy_link" width={328} />
  <InstagramEmbed style={{margin:"20px"}} url="https://www.instagram.com/p/CesELtss4VB/?utm_source=ig_web_copy_link" width={328} />
</div>
<h1> TikTok</h1>
<div className="socials">
  <TikTokEmbed style={{margin:"20px"}} url="https://www.tiktok.com/@mountdoodlesfam/video/7093265244381809962?is_from_webapp=1&sender_device=pc&web_id=7076915022273971755" width={325} />
  <TikTokEmbed style={{margin:"20px"}} url="https://www.tiktok.com/@mountdoodlesfam/video/7102985531096649003?is_copy_url=1&is_from_webapp=v1" width={325}/>
</div>
<h1> Facebook </h1> 
<div className="socials" >
  <FacebookEmbed id="face" url="https://www.facebook.com/mountdoodlesfam/posts/pfbid02k7moLYSA28pryij8uHZMprJFZAX6cXWa5mnqzZPdY3zTwWqJAwQNybo8Sc6N6uDhl" width={400} />
</div>
    </ div >



);

};