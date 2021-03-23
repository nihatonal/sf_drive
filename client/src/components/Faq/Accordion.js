//import * as React from "react";
import React, { useState } from "react";
import data from './data.json';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


import "../../styles/Faq/Accordion.css";
import "../../styles/Faq/MainFaq.css";

function Accordion() {

    const [active, setActive] = useState(0);
    const [contentHeight, getContentHeight] = useState({height: null})

    const eventHandler = (e,index) => {
        e.preventDefault();
        getContentHeight({height: e.target.nextElementSibling.clientHeight});
        setActive(index);

        let content = e.target.nextElementSibling;
        e.target.classList.toggle("is-active");

        if (content.style.maxHeight){
            content.style.maxHeight = null;

        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
        
      
    }

    return (
        <section className={"section-faq content_wrapper"}>   
                { data.map((tab, index) => (
                    <div className={"section-faq__wrapper"} key={index}>
                            <button 
                                onClick={(e) => eventHandler(e, index)}
                                className={ "section-faq__wrapper-btn"}
                            >
                                {tab.title}
                                
                                {contentHeight.height === 0 && active === index?
                                    <i className={'fa'}><FaAngleUp /></i> :
                                    <i className={'fa'}><FaAngleDown /></i>
                                }
                                  
                            </button>

                            <div
                                className={"section-faq__wrapper-content"}>
                                <p className={"section-faq__wrapper-text"}> { tab.description } </p>        
                            </div>
                    </div>
                    ))
                }
        </section>
    );

}

export default Accordion;