import React from "react";
import Logo from "./Assests/NavLogo.jpg"

const Switch = () => {
    return (
        <React.Fragment>
            <header>
                <img className="logo" src= {Logo} alt="logo"/>
                    <nav>
                        <ul className="navbar">
                            <li><a href="/Page.html">About Us</a> </li>
                            <li><a href="#">Career</a> </li>
                            <li><a href="#">Departments</a> </li>
                            <li><a href="./sign">sign in</a></li>
                        </ul>
                    </nav>
            </header>
        </React.Fragment>
    )
};

export default Switch;