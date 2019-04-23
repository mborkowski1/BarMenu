import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import CSSModules from 'react-css-modules';

const header = () => {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <NavLink className="navbar-brand" to="/" styleName="brand-link">Bar Menu</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" styleName="burger-menu-button" />
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav nav text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeClassName="active" styleName="link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/menu" activeClassName="active" styleName="link">Menu</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default CSSModules(header, styles);
