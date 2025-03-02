import React from 'react';
import '../Styles/Contact.css'
import { FiSend } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiMedium } from "react-icons/si";
import { useState,useEffect} from 'react'


function Contact() {
    const [showSidebar, setShowSidebar] = useState(false);

    const show = () => {
        console.log("shown");

        setShowSidebar((prevState)=>!prevState);
    }
    
    const hide = () => {
        console.log("HIDE")
        setShowSidebar((prevState)=>!prevState);
    }

    return (
        <div className="contactMePage">
            <div className="contactMeOuter">
                <div className="contactMeInner"  onMouseEnter={show} onMouseLeave={hide}>
                    <div className="innerContent">

                    <input type="text" placeholder="Name" />
                    <textarea name="" id="" placeholder="Wanna ask me anything? I am just a 'Hi' after" height="120px" ></textarea>     
                    <div className="sendButton">
                    <FiSend />
                    </div>
                    </div>
                    <div className={`sideInnerBar ${showSidebar ? 'showSideInnerBar' : ''}`}>
                        <div className="iconContact">
                        <CiLinkedin  className="iconsForCommunication"/>
                        </div>
                        <div className="iconContact"><FaInstagram  className="iconsForCommunication"/></div>
                        <div className="iconContact"><BiLogoGmail  className="iconsForCommunication"/></div>
                        <div className="iconContact"><SiMedium className="iconsForCommunication" /></div>
                        
                        
                        

                    </div>
                 </div>
             </div>
        </div>
    );
}

export default Contact;