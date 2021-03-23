//import * as React from "react";
import React, { useState } from "react";

import "../../styles/Registration/Registration.css";
import eye from '../../assets/icons/eye.svg';
import eye_active from '../../assets/icons/eye_active.svg';

function Form({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values
}) {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = (e) => {
        e.preventDefault();
        setPasswordShown(passwordShown ? false : true);
    };

    const [loading, setActive] = useState(false);

    const fetchData = () => {
        setActive(true);

        setTimeout(() => {
            
        setActive(false);
        }, 1000);
    };
    
  return (

    <div>
        <form onSubmit={handleSubmit} autoComplete="off" className={"form__container"}>
            <div className={"form__container-head"}>
                <p className={"form__container-head-subtitle"}>Шаг 1 из 3</p>
                <h1 className={"form__container-head-title"}>Расскажите о себе</h1>
            </div>

            <div className={"form__container_wrapper"}>
                <h2 className={"form__container_wrapper-title"}>Информация о вас</h2>

                <div className={"form__container_wrapper-form"}>

                        <div className={"form__container_wrapper-form-item"} >
                            <label htmlFor="userName" >ФИО 
                            <input 
                            type={"text"} 
                            id={"userName"} 
                            name={"userName"} 
                            placeholder={"ФИО полностью"} 
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            /></label>
                            {touched.userName && errors.userName}
                        </div>

                        <div className={"form__container_wrapper-form-item"} >
                            <label htmlFor="birthdayDate" className={"calender_wrapper"} >Дата рождения  
                            <input 
                            className={"calender"} 
                            type={"date"} 
                            id={"birthdayDate"} 
                            name={"birthdayDate"}
                            value={values.birthdayDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            /></label>
                             {touched.birthdayDate && errors.birthdayDate}  
                        </div>

                        <div className={"form__container_wrapper-form-item" }>
                            <label htmlFor="email" >Электронная почта 
                            <input
                            type="email"
                            id="email"
                            placeholder="mail@example.com"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="email"
                            required
                            /></label>
                            {touched.email && errors.email}
                        </div>

                        <div className={"form__container_wrapper-form-item"} >
                            <label htmlFor="phone" >Телефон
                            <input 
                            type={"tel"} 
                            id={"phone"} 
                            name={"phone"} 
                            placeholder={"+7 900 000-00-00"}
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            /></label>
                            {touched.phone && errors.phone} 
                        </div>
                </div>
            </div>

            <div className={"form__container_wrapper"}>
                    <h2 className={"form__container_wrapper-title"}>Паспорт</h2>
                    <div className={"form__container_wrapper-form"}>
                        <div className={"form__container_wrapper-form-item"} >
                            <label htmlFor="passport" >Серия и номер 
                            <input 
                            type={"text"} 
                            id={"passport"} 
                            name={"passport"} 
                            placeholder={"0000 000000"}
                            value={values.passport}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            /></label>
                            {touched.passport && errors.passport} 
                        </div>
                        <div className={"form__container_wrapper-form-item"} >
                            <label htmlFor="date-passport" className={"calender_wrapper"} >Дата выдачи 
                            <input  className={"calender"} 
                                    type={"date"} 
                                    id={"date-passport"} 
                                    name={"datepassport"} 
                                    placeholder={"1970-01-01"}
                                    value={values.datepassport}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    /></label>
                                    {touched.datepassport && errors.datepassport}
                           
                        </div>
                        <div className={"form__container_wrapper-form-item"} >
                            <label htmlFor="issued" >Кем выдан 
                                <input  type={"text" }
                                        id={"issued"} 
                                        name={"issued"} 
                                        placeholder={"Название органа выдавшего паспорт"}
                                        value={values.issuedValidation}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required/></label>
                                        {touched.issued && errors.issued} 
                           
                        </div>
                        <div className={"form__container_wrapper-form-item"} >
                            <label htmlFor="code">Код подразделения 
                                <input  type={"text"} 
                                        id={"code"} 
                                        name={"code"}
                                        placeholder={"000-000"}
                                        value={values.code}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required/></label>
                                        {touched.code && errors.code}
                        </div>               
                    </div>
             </div>
             <div className={"form__container_wrapper"}>
                    <h2 className={"form__container_wrapper-title"}>Водительское удостоверение</h2>
                    <div className={"form__container_wrapper-form"}>
                        <div className={"form__container_wrapper-form-item"} >
                             <label htmlFor="license" >Серия и номер 
                                 <input type={"text"} 
                                        id={"license"} 
                                        name={"license"} 
                                        placeholder={"0000 000000"}
                                        value={values.license}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required/></label>
                                         {touched.license && errors.license}
                                
                        </div>
                        <div className={"form__container_wrapper-form-item"} >
                             <label htmlFor="licenseDate"  className={"calender_wrapper"} >Серия и номер 
                                 <input type={"date"}
                                        className={"calender"}
                                        id={"licenseDate"} 
                                        name={"licenseDate"}
                                        value={values.licenseDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required/></label>
                                         {touched.licenseDate && errors.licenseDate}
                                
                        </div>
                    </div>
                </div>

                <div className={"form__container_wrapper"}>
                    <h2 className={"form__container_wrapper-title"}>Пароль</h2>
                    <div className={"form__container_wrapper-form"}>
                        <div className={"form__container_wrapper-form-item"} >
                            <label htmlFor="password" >Придумайте пароль 
                                 <input type={passwordShown ? "text" : "password"}
                                        id={"password"} 
                                        name={"password"}
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required/>
                                <img src={passwordShown ? eye_active : eye} onClick={togglePasswordVisiblity} alt= {eye}/>
                                {/* <img src={passwordShown===index ? eye : eye_active} onClick={(e) => togglePasswordVisiblity(e, index)} alt= {eye}/> */}
                            </label>
                                         {touched.password && errors.password}
                                
                        </div>
                        <div className={"form__container_wrapper-form-item"} >
                             <label htmlFor="confirm_password">Повторите пароль 
                                <input type={passwordShown ? "text" : "password"}
                                        id={"confirm_password"} 
                                        name={"confirm_password"}
                                        value={values.confirm_password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required/>
                                <img src={passwordShown ? eye_active : eye} onClick={togglePasswordVisiblity} alt= {eye}/>
                            </label>
                                         {touched.confirm_password && errors.confirm_password}
                                
                        </div>
                    </div>
                </div>

                <div className={"form__container-btn-wrapper"}>
                    <button type={"submit" } className={!loading ? "form__container-btn-wrapper-btn" : 
                                                                "form__container-btn-wrapper-btn active-btn" } onClick={fetchData}>
                    {loading &&  <i className="fa fa-circle-o-notch fa-spin"></i>}
                    {!loading && "Продолжить"}
                    </button>
                </div>
                
        </form>
    </div>
  );
}

export default Form;
