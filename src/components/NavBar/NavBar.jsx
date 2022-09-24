import React from "react";
import "./NavBar.css";
import ShoppingCart from "../ShopingCart/ShoppingCart";

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
                            <a href="./index.html" className="nav-link">Home</a>
                        </li>
                        <li>
                            <a href="./pages/blog.html" className="nav-link">Blog</a>
                        </li>
                        <li>
                            <a href="./pages/products.html" className="nav-link">Productos</a>
                        </li>
                        <li>
                            <a href="./pages/about_us.html" className="nav-link">Nosotros</a>
                        </li>
                        <li>
                            <a href="./pages/contact.html" className="nav-link">Contacto</a>
                        </li>
                    </ul>
                    <ShoppingCart/>
                </nav>
            </header>
        </>
    );
}

export default NavBar;
