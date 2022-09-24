import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <header>
        <div>
            <h1>Silicon Valley</h1>
            <svg src="logo.svg" alt="logo" />
        </div>
        <nav>
            <ul>
                <li>
                    <a href="products.html" >Productos</a>
                </li>
                <li>
                    <a href="inventary.html" >Inventario</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default NavBar;
