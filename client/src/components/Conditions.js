import * as React from "react";

import "../styles/Conditions.css";
import Header from "./Header";
import Footer from "./Footer";

function Conditions() {
    
    return (
        
        <>
            <Header />
            <section className={"section-main content_wrapper notready"}>
                <p>Error: Page is not ready!</p>
            </section>
            <Footer />
        </>
            
        

    ); 
    
}

export default Conditions;