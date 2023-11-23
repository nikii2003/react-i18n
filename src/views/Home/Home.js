import React, { useState }  from "react";
import "./Home.css"
import I18n from "./../../utils/I18n.js";

function Home (){
    const usercounter = 35;

    const [lang,setLang]=useState("en")
    return(
 <div>
    <h1>{I18n("welcomeMessage")}</h1>
    <h1>{I18n("normalMessage")}</h1>
    <h3>{I18n("greetingMessage")} </h3>

<select 
defaultValue={localStorage.getItem("lang")} 
onChange={(e)=>{localStorage.setItem("lang",e.target.value)
window.location.reload()}}>
    
    <option value="en">English</option>
    <option value="mr">Marathi</option>
    <option value="hi">Hindi</option>
</select>
    <p>
{I18n("userStatMessage", "<studentcount>",usercounter)}
    </p>
 </div>
    )
}
export default Home 