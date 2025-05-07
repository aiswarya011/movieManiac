import React from 'react'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>MovieManiac</h1>
            <div className='navbar_links'>
                <a href="#popular">Popular</a>
                <a href="#top_rated">Top Rated</a>
                <a href="#upcoming">Upcomming</a>
            </div>
        </nav>
    )
}

export default NavBar
