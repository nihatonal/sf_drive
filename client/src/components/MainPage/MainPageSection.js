import * as React from "react";

import { NavLink } from 'react-router-dom';

import "../../styles/MainPageSection.css";


import heroMain from '../../assets/images/undraw_city_driver_jh2h (1) 3.svg';
import heroAdaptive from '../../assets/images/undraw_city_driver_jh2h_small.svg';
import arenda from '../../assets/images/undraw_fast_car_p4cu 1.svg';
import car from '../../assets/images/undraw_Vehicle_sale_a645 1.svg';
import transactions from '../../assets/images/undraw_online_transactions_02ka 1.svg';
import line from '../../assets/images/line.svg';
import lineSmall from '../../assets/images/line_small.svg';
import tag from '../../assets/icons/tag 1.svg';
import lineShort from '../../assets/images/lineshort.svg';
import currency from '../../assets/icons/currency-usd 1.svg';
import percent from '../../assets/icons/percent 1.svg';
import cash from '../../assets/icons/cash-multiple 1.svg';
import left from '../../assets/icons/left.svg';
import ivan from '../../assets/images/ivanivanov.png';
import right from '../../assets/icons/right.svg';
import toy from '../../assets/images/undraw_toy_car_7umw 1.svg';





function MainPageSection(props) {
    
    return (
        <div>
            <div className={"container_hero"}>
                
        
                <div className={"container_hero__wrapper"}>
                    <h1 className={"container_hero__wrapper-title"}>Каршеринг в любой точке России</h1>
                    <p className={"container_hero__wrapper-text"}>Будьте всегда за рулём во время путешествий и командировок.</p>
                    <NavLink  to="/RegistrationPage"> 
                        <button className={"btn-signup"}>Зарегистрироваться</button>
                    </NavLink>
                    
                </div>
                <img src={heroMain} alt={"undraw_city_driver"} />
                <img src={heroAdaptive} alt={"undraw_city_driversmall"} />
        
            </div>

            <main>
                <section className={"section-arenda content_container"}>
                    <div className={"section-arenda__wrapper"}>
                            <img src={arenda} alt={"undraw_fast_car"}/>
                            <div className={"section-arenda__wrapper-content"}>
                                <h2 className={"section-arenda__wrapper-title"}>Аренда напрямую от владельцев</h2>
                                <p className={"section-arenda__wrapper-desc"}>Вы получите автомобиль от его собственника,
                                    а мы проверим юридическую чистоту и техническую исправность.</p>
                            </div>
                    </div>
                </section>

                <section className={"section-car content_container"}>
                    <div className={"section-car__wrapper"}>
                        <img src={car} alt={"uundraw_Vehicle_sale"}/>
                        <div className={"section-car__wrapper-content"}>
                            <h2 className={"section-car__wrapper-title"}>Автомобили на любой вкус</h2>
                            <p className={"section-car__wrapper-desc"}>Вы всегда можете подобрать автомобиль любого класса 
                                от бюджетных моделей до премиум-класса и спорткаров.</p>
                        </div>
                    </div>
                </section>

                <section className={"section-transactions content_container"}>
                    <div className={"section-transactions__wrapper"}>
                        <img src={transactions} alt={"undraw_online_transactions"}/>
                        <div className={"section-transactions__wrapper-content"}>
                            <h2 className={"section-transactions__wrapper-title"}>Гарантия честной аренды</h2>
                            <p className={"section-transactions__wrapper-desc"}>Общение и оплата происходит через наш 
                                сервис, что предотвращает вас от обмана.</p>
                        </div>
                    </div>
                </section>

                <section className={"section-rent content_container"}>
                    <div className={"section-rent__wrapper"}>
                        <h2 className={"section-rent__wrapper-title"}>Как арендовать автомобиль</h2>
                        <div className={"section-rent__wrapper-content"}>
                            <div className={"section-rent__wrapper-content-item"}>
                                <p className={"section-rent__wrapper-content-item-number"}>1</p>
                                <p className={"section-rent__wrapper-content-item-name"}>Выберите автомобиль</p>
                            </div>
                            <img src={line} alt={"line"}/>
                            <img src={lineSmall}alt={"line_small"}/>
                            <div className={"section-rent__wrapper-content-item"}>
                                <p className={"section-rent__wrapper-content-item-number"}>2</p>
                                <p className={"section-rent__wrapper-content-item-name"}>Забронируйте дату и время</p>
                            </div>
                            <img src={line} alt={"line"}/>
                            <img src={lineSmall} alt={"line_small"}/>
                            <div className={"section-rent__wrapper-content-item"}>
                                <p className={"section-rent__wrapper-content-item-number"}>3</p>
                                <p className={"section-rent__wrapper-content-item-name"}>Получите автомобиль</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"section-sold content_container"}>
                    <div className={"section-sold__wrapper"}>
                        <h2 className={"section-sold__wrapper-title"}>У вас есть автомобиль?</h2>
                        <p className={"section-sold__wrapper-subtitle"}>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</p>
                        <div className={"section-sold__wrapper-content"}>
                            <div className={"section-sold__wrapper-content-item"}>
                                <div className={"section-sold__wrapper-content-item-icon"}>
                                    <img src={tag} alt={"etiket"}/>
                                </div>
                                <p className={"section-sold__wrapper-content-item-name"}>Вы сами указываете цену</p>
                            </div>
                            <img src={lineShort} alt={"line"}/>
                            <img src={lineSmall} alt={"line_small"}/>
                            <div className={"section-sold__wrapper-content-item"}>
                                <div className={"section-sold__wrapper-content-item-icon"}>
                                    <img src={currency} alt={"currency-usd"}/>
                                </div>
                                <p className={"section-sold__wrapper-content-item-name"}>Мы страхуем автомобили</p>
                            </div>
                            <img src={lineShort} alt={"line"}/>
                            <img src={lineSmall} alt={"line_small"}/>
                            <div className={"section-sold__wrapper-content-item"}>
                                <div className={"section-sold__wrapper-content-item-icon"}>
                                    <img src={percent} alt={"percent"}/>
                                </div>
                                <p className={"section-sold__wrapper-content-item-name"}>Наша комиссия всего 3%</p>
                            </div>
                            <img src={lineShort} alt={"line"}/>
                            <img src={lineSmall} alt={"line_small"}/>
                            <div className={"section-sold__wrapper-content-item"}>
                                <div className={"section-sold__wrapper-content-item-icon"}>
                                    <img src={cash} alt={"cash-multiple"}/>
                                </div>
                                <p className={"section-sold__wrapper-content-item-name"}>Выплаты каждую неделю</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"section-comment content_container"}>
                    <div className={"section-comment__wrapper"}>
                        <h2 className={"section-comment__wrapper-title"}>Отзывы клиентов</h2>
                        <div className={"section-comment__wrapper-content"}>
                            <img src={left} alt={"left"}/>
                            <div className={"section-comment__wrapper-content-item"}>
                                
                                <div className={"section-comment__wrapper-content-item-container"}>
                                    <img src={ivan} alt={"ivanivanov"}/>
                                    <p className={"section-comment__wrapper-content-item-name"}>Иван Иванов</p>
                                    <p className={"section-comment__wrapper-content-item-city"}>Москва</p>
                                    <p className={"section-comment__wrapper-content-item-desc"}>Классный сервис! В путешествиях по стране часто берём машину
                                        в аренду. Здесь нету ограничений по зоне перемещения и поэтому
                                        есть возможность съездить в интересные туристические места,
                                        которые отдалены от города.</p>
                                </div>
                            </div>
                            <img src={right} alt={"right"}/>
                        </div>
                        <div className={"section-comment__wrapper-dots"}>
                            <span className={"section-comment__wrapper-dots-item active"}></span>
                            <span className={"section-comment__wrapper-dots-item"}></span>
                            <span className={"section-comment__wrapper-dots-item"}></span>
                            <span className={"section-comment__wrapper-dots-item"}></span>
                        </div>
                    </div>
                </section>

                <section className={"section-registration content_container"}>
                    <div className={"section-registration__wrapper"}>
                        <img src={toy} alt={"undraw_online_transactions"}/>
                        <h2 className={"section-registration__wrapper-title"}>Попробуйте аренду на себе</h2>
                        
                        <NavLink  to="/RegistrationPage"> 
                            <button className={"btn-signup"}>Зарегистрироваться</button>
                        </NavLink>   
                    </div>
                </section>
            </main>

        </div>
    );
}
      


export default MainPageSection;