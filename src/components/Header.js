import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Categories</h1>
            <hr />
            <div className="links">
                <NavLink to={"/home"} className="link">Categories List</NavLink>
                <NavLink to={"/add"} className="link1">Add Category</NavLink>
            </div>
        </header>
    );
}

export default Header;