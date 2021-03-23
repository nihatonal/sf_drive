import * as React from "react";

import "../styles/Footer.css";

import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import vk from '../assets/icons/vk.svg';

function Footer(props) {
    
    return (
        <footer className={"footer content_wrapper"}>
            <div className={"footer__wrapper"}>
                    <p className={"footer__copyright"}>© SkillDrive Inc. 2020</p>
                    <div className={"footer__social-icons"}>
                            <div className= {"icon"}>
                            <img src={vk} alt={"VK"}/>
                            </div>
                            <div className= {"icon"}>
                                <img src={instagram} alt={"instagram"}/>
                            </div>
                            <div className= {"icon"}>
                                <img src={facebook} alt={"facebook"}/>
                            </div>
                    </div>
            </div>
        </footer>
    );
}  

export default Footer;