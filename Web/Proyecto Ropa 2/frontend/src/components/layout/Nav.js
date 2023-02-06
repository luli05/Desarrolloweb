import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? activeClassName : undefined }>Home</NavLink></li>
                <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? activeClassName : undefined }>Nosotros</NavLink></li>
                <li><NavLink to="/novedades" className={({ isActive }) =>isActive ? activeClassName : undefined  }>Novedades</NavLink></li>
                <li><NavLink to="/contact"className={({ isActive }) => isActive ? activeClassName : undefined }>Contacto</NavLink></li>

            </ul>

        </nav>
    );
}

export default Nav;