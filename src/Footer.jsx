import React from "react";

function Footer(){
    const today=new Date();
    let year=today.getFullYear();

    return (<footer><p>@ Copyright {year}</p></footer>);
}

export default Footer;