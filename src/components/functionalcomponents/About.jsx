import React, { useState } from "react";
import "../css/AllCss.css"
import "../css/Footer.css"

const About = () => {
    const [college,updateCollage] = useState("KEC")
    const updatingclg= ()=>{
        updateCollage("Kongu Engineering College");
    }
    return(
        <div>
            <h1>
                Welcome to {college}
            </h1>
            <button onDoubleClick = {updatingclg}>Update college name</button>
            <p id="about">I'm Nikita Nalankilli, a passionate software developer with a flair for creativity. My journey in coding began with a curiosity 
            that has now evolved into a deep passion. I love exploring new technologies,
             including VLSI design and React development, and solving problems. When I'm not coding,
              you can find me immersed in books or enjoying nature's beauty.

</p>
        </div>
    )
}
export default About;