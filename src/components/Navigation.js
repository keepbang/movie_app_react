import React from 'react';
import {Link} from "react-router-dom";
import './Navigation.css'

function Navigation() {

    return (
        <div className="navigation">
                <Link className="navi_menu" to={{
                    pathname: '/',
                    state: {
                        page:1
                    }
                }}>Home</Link>
                <Link className="navi_menu" to="/about">About</Link>
        </div>
    )
}

export default Navigation;