import * as React from "react";

import FormVanilla from "./FormVanilla";


const nameValidation = fieldValue => {
  if (fieldValue.trim() === "") {
    return <span className={"error"}>Поля обязательны для заполнения</span>;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return <span className={"error"}>Недопустимые символы</span>;
  }
  if (fieldValue.trim().length < 3) {
    return <span className={"error"}>ФИО должно быть не менее трех символов</span>;
  }
  return null;
};

const emailValidation = email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return <span className={"error"}>Поля обязательны для заполнения</span>;
  }
  return <span className={"error"}>Не верная почта</span>;
};

const issuedValidation = issued => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*$/.test(
        issued
      )
    ) {
      return null;
    }
    if (issued.trim() === "") {
      return <span className={"error"}>Поля обязательны для заполнения</span>;
    }
  };

const passport = passport => {
    if (
      /^[a-zA-Z0-9-]*$/.test(
        passport
      )
    ) {
      return null;
    }
    if (passport.trim() === "") {
      return <span className={"error"}>Поля обязательны для заполнения</span>;
    }
  };

const phoneValidation = phone => {
    
    if (/[\+0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone)) {
      return null;
    }
    if (phone.trim() === "") {
      return <span className={"error"}>Поля обязательны для заполнения</span>
    }
    return <span className={"error"}>Не верный номер телефона</span>;
  };

  const codeValidation = code => {
    
    if (
        /[0-9]{3}-[0-9]{3}$/.test(code)
    ) {
      return null;
    }
    if (code.trim() === "") {
      return <span className={"error"}>Поля обязательны для заполнения</span>
    }
    return <span className={"error"}>Не верный номер</span>;
  };

const licenseDate = date => {
    var dateArr = date.split('-');
    if (dateArr.length < 0) {
        return  <span className={"error"}>Поля обязательны для заполнения</span>;;
   } 
};


let token;
const password = password => {
  if (password.trim() === "") {
    return <span className={"error"}>Поля обязательны для заполнения</span>;
  }
  if (password.trim().length < 8) {
    return <span className={"error"}>Пароль должно быть не менее восьми символов</span>;
  }
  if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*$/.test(password)) {
    token = password;
    return null;
  }

};
const confirm_password = confirm_password => {
  if (confirm_password.trim() === "") {
    return <span className={"error"}>Поля обязательны для заполнения</span>;
  }
  if( token !== confirm_password){
    return <span className={"error"}>Пароли не совпадают</span>;
  }
  return null;
  
};



const validate = {
  userName:nameValidation,
  passport: passport,
  license: passport,
  email: emailValidation,
  phone: phoneValidation,
  issued: issuedValidation,
  code: codeValidation,
  licenseDate: licenseDate,
  datepassport: licenseDate,
  birthdayDate: licenseDate,
  password: password,
  confirm_password: confirm_password
};

const initialValues = {
    userName: "",
    birthdayDate: "1970-01-01",
    email: "",
    phone: "",
    passport: "",
    datepassport: "1970-01-01",
    issued: "",
    code: "",
    license: "" ,
    licenseDate: "1970-01-01",
    password: "",
    confirm_password: ""
    
};

function RegistrationPage() {
  return (
    <div >
          <FormVanilla validate={validate} initialValues={initialValues} />
      
    </div>
  );
}

export default RegistrationPage;
