import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Home extends Component {
   render() {
        return (
            <section className="container-fluid py-3">
                <div className="jumbotron py-2 text-center" style={{backgroundColor: 'darkgrey'}}>
                    <h1 className="display-4">Bar Menu</h1>
                    <p className="lead">This is a simple web app built in react.js and node.js. It shows menu items depending on selected menu category.</p>
                    <NavLink className="text-white text-decoration-none" to="/menu">
                        <button className="btn btn-primary btn-lg font-weight-bold">Show Menu</button>
                    </NavLink>
                </div>
            </section>
        );
    }
}

export default Home;
