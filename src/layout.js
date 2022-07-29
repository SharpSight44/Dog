import React from "react";
import { HashRouter, Route, Routes} from "react-router-dom";
import { AboutBreeder } from "./aboutBreeder";
import { AboutDog } from "./aboutDog";
import injectContext from "./appContext";
import { ContactUs } from "./contactUs";
import DoodleFam from "./doodleFam";
import { Footer } from "./footer";
import Litter from "./litter";
import { Main } from "./main";
import { Navbar } from "./navbar";
import { Puppies } from "./puppies";
import ScrollToTop from "./scrollToTop";
import { Socials } from "./social";



const Layout =() => {

    const basename = process.env.BASENAME || "";

return(
<div>

<HashRouter>
<ScrollToTop>
    <Navbar/>
    <Routes>
    
    
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/socials" element={<Socials/>}/>
        <Route exact path="/goldendoodle" element={<AboutDog/>}/>
        <Route exact path="/purchase" element={<Puppies/>}/>
        <Route exact path="/breeder" element={<AboutBreeder/>}/>
        <Route exact path="/contact" element={<ContactUs/>}/>
        <Route exact path="/doodlefam" element={<DoodleFam/>}/>
        <Route exact path="/litters" element={<Litter/>}/>



            



    


        </Routes>
        <Footer/>
</ScrollToTop>
</HashRouter>

</div>
);


};

export default injectContext(Layout);