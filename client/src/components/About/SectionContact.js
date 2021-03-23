import * as React from "react";

import "../../styles/About/SectionContact.css";
import "../../styles/About/About.css";

function SectionContact(props) {
    
    return (
         <section className ={"section-contact content_wrapper"}>
            <div className={"section-contact__container"}>
                <h2 className={"section-contact__title"}>Контакты</h2>
                <div className={"section-contact__wrapper"}>
                        <div className={"section-contact__wrapper-item"}>
                            <p className={"contact_type"}>Электронная почта</p>
                            <p className={"contact_address"}>drive@skillfactory.com</p>
                        </div>
                        <span className={"section-contact__wrapper-line_grey"}></span>
                        <div className={"section-contact__wrapper-item"}>
                            <p className={"contact_type"}>Телефон</p>
                            <p className={"contact_address"}>+7 912 123-45-67</p>
                        </div>
                </div>
            </div>
        </section>
    );
}       


export default SectionContact;