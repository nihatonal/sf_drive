import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./components/MainPage/MainPage";
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Conditions from './components/Conditions';
import RegistrationPage from './components/Registration/RegistrationPage';
import UploadProfileImg from './components/FileUpload/UploadProfileImg';
import UploadDocImg from './components/FileUpload/UploadDocImg';

const App = () => (
  <Router>
            <Switch>
            <Route exact path="/" component={UploadDocImg} />
            <Route exact path="/UploadProfileImg" component={UploadProfileImg} />
            <Route exact path="/RegistrationPage" component={RegistrationPage} />
            <Route exact path="/MainPage" component={MainPage} /> 
            <Route exact path="/About" component={About} /> 
            <Route exact path="/Faq" component={Faq} />
            <Route exact path="/conditions" component={Conditions} />
           </Switch>
        
      </Router>
);

export default App;
