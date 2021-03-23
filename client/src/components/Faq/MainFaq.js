import * as React from "react";

import "../../styles/Faq/MainFaq.css";

import question from '../../assets/images/question.png';

import Accordion from "./Accordion";

function MainFaq(props) {
    
    return (
        <main>   
            <section className={"section-main content_wrapper"}>
                <img src={question} alt={"question"}/>
                <h1 className={"section-main__title"}>Частые вопросы</h1>
                <p className={"section-main__desc"}>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
            </section>
            <Accordion />
        </main>
    );
}       


export default MainFaq;