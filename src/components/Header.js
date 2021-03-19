import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="home">
                <Link to="/" className='home-title' >
                        Home
                </Link>
            </header>
        );
    }
}
export default Header;
