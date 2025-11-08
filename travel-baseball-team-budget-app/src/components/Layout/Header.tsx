import React from "react";
import Navigation from "../Layout/Navigation";
import OutlawLogo from "../../assets/OutlawLogo.png";


const Header: React.FC = () => {
    return(
        <>
        <header>
        <div className= "logo">
            <img src = {OutlawLogo} alt= "Oviedo Outlaw Logo"
            style={{width: "100px", height: "100px" }} />
        </div>
        
            <h2 className="headerName">Travel Baseball Team Budget</h2>
            <Navigation/>
        </header>
        </>
    )
}

export default Header