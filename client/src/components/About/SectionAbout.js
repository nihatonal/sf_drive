import * as React from "react";

import "../../styles/About/SectionAbout.css";
import "../../styles/About/About.css";

import imgAbout from '../../assets/images/mainphoto.svg';

function SectionAbout(props) {
    
    return (
         <section className ={"section-about content_wrapper"}>
            <div className ={"content_container"}>
                <img className ={"section-about__image"}  src={imgAbout} alt={"people are staying"}></img>
                <div className ={"section-about__wrapper"}>
                    <h1 className ={"section-about__wrapper-title"}>О нас</h1>
                    <p className ={"section-about__wrapper-text"}>Это учебный проект, созданный с целью получения 
                         боевого опыта в разработке настоящего живого веб-приложения. Этот сервис 
                        имитирует работу каршеринга, в котором можно не только арендовать автомобили, 
                       но и сдавать их в аренду.</p>
                </div>
            </div>
        </section>
    );
}       


export default SectionAbout;