import React, { useState }  from "react";
import "./Home.css"
import I18n from "./../../utils/I18n.js";

function Home (){
    const usercounter = 35;

    const [lang,setLang]=useState("en")
    return(
 <div>
    <h1 className="heading-i18">Internationalization - I18n</h1><br/><br></br>
    <div className="container-of-text">
    <h1>{I18n("welcomeMessage")}</h1>
    <p>{I18n("normalMessage")}</p>
    <h2>{I18n("greetingMessage")} </h2>
   
<select className="select-box"
defaultValue={localStorage.getItem("lang")} 
onChange={(e)=>{localStorage.setItem("lang",e.target.value)
window.location.reload()}}>
    
    <option value="en">English</option>
    <option value="hi">Hindi</option>
    <option value="mr">Marathi</option>
    
</select >

</div>
    <p className="userstatmessage">
{I18n("userStatMessage", "<studentcount>",usercounter)}
    </p>
    </div>
 
    )
}
export default Home 