import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <header>
                <section className="S1">
                    <img src= "https://play-lh.googleusercontent.com/Jl6hJSPZRXhugtjHj0sWeX_IE--hBhHA8GL9RU3N5suklM2x1l01ulh8xSAV_eyE1A=s256-rw"  alt="logo" height="40px" width="auto" />
                    <h1 className="s">Docplanner</h1>
                    <h1 className="a">Group</h1>
                </section>
                <ul className="wordbar">
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Departments</li>
                </ul>
            </header>
        </div>
    );
}

export default Header;

