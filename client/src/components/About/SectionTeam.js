import * as React from "react";

import "../../styles/About/SectionTeam.css";
import "../../styles/About/About.css";

import aleksey from '../../assets/images/aleksey.png';
import denis from '../../assets/images/denis.png';
import irina from '../../assets/images/irina.png';
import ivan from '../../assets/images/ivan.png';
import maria from '../../assets/images/maria.png';
import nikalay from '../../assets/images/nikalay.png';

function SectionTeam(props) {
    
    return (
         <section className ={"section-team content_wrapper"}>
            <div className={"section-team__container"}>
                    <h2 className={"section-team__title"}>Команда</h2>
                    <div className={"section-team__wrapper"}>
                            <div className={"section-team__wrapper-item"}>
                                <img src={ivan} alt={"Иван Иванов"}/>
                                <p className={"person_name"}>Иван Иванов</p>
                                <p className={"person_profession"}>СЕО</p>
                            </div>
                            <div className={"section-team__wrapper-item"}>
                                <img src={aleksey} alt={"Алексей Смирнов"}/>
                                <p className={"person_name"}>Алексей Смирнов</p>
                                <p className={"person_profession"}>Frontend-разработчик</p>
                            </div>
                            <div className={"section-team__wrapper-item"}>
                                <img src={denis} alt={"Денис Ярцев"}/>
                                <p className={"person_name"}>Денис Ярцев</p>
                                <p className={"person_profession"}>Backend-разработчик</p>
                            </div>
                            <div className={"section-team__wrapper-item"}>
                                <img src={nikalay} alt={"Николай Морозов"}/>
                                <p className={"person_name"}>Николай Морозов</p>
                                <p className={"person_profession"}>Дизайнер</p>
                            </div>
                            <div className={"section-team__wrapper-item"}>
                                <img src={irina} alt={"Ирина Деева"}/>
                                <p className={"person_name"}>Ирина Деева</p>
                                <p className={"person_profession"}>Копирайтер</p>
                            </div>
                            <div className={"section-team__wrapper-item"}>
                                <img src={maria} alt={"Мария Стрелкова"}/>
                                <p className={"person_name"}>Мария Стрелкова</p>
                                <p className={"person_profession"}>SMM</p>
                            </div>
                    </div>
                </div>
        </section>
    );
}       


export default SectionTeam;