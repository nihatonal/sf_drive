import * as React from "react";

import "../../styles/About/MainAbout.css";

import SectionAbout from "./SectionAbout";
import SectionContact from "./SectionContact";
import SectionTeam from "./SectionTeam";

function MainAbout() {
    return (
        <div className= {"container-about"}>
            <SectionAbout/>
            <SectionContact/>
            <SectionTeam/>
        </div>
    );
}

export default MainAbout;