import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Categories</h1>
            <div className="links">
                <NavLink to="/" className="link">Categories List</NavLink>
                <NavLink to="/add" className="link">Add Category</NavLink>
            </div>
        </header>
    );
}

export default Header;