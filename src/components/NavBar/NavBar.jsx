import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <>
            <div className="banner">
                Debido al COVID-19 solo recibimos ordenes online. ¡Ordena Ahora!
            </div>
            <header>
                <div>
                    <img src="./images/Logo.png" alt="fucking img"/>
                    <h1>Silicon Valley</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="./" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="./blog" className="nav-link">Blog</Link>
                        </li>
                        <li>
                            <Link to="./products" className="nav-link">Productos</Link>
                        </li>
                        <li>
                            <Link to="./about_us" className="nav-link">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="./contact" className="nav-link">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default NavBar;
