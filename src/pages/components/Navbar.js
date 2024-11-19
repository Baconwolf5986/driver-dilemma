import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className='Navbar'>
            <Link to='/' className='NavbarHome'>&lt;driver-dilemma&gt;</Link>
            <div className='NavbarLinks'>
            <Link to='/Survey' className='NavbarLink'>Take the survey</Link>
            <Link to='/Results' className='NavbarLink'>Results</Link>
            </div>
        </nav>
    );
}

export default Navbar;