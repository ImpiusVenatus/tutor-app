import PropTypes from 'prop-types';
import './hamburger.css';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const nav_links = [
    {
        path:'/home',
        display: 'Home'
    },
    {
        path:'/about',
        display: 'About'
    },
    {
        path:'/tours',
        display: 'Turfs'
    },
    {
        path:'/matchmaking',
        display: 'Matchmaking'
    },
    {
        path:'/store',
        display: 'JutaLagbe'
    },
]


const HamburgerMenu = ({ showMenu, toggleMenu }) => {

     const navRef = useRef(null)
     const menuRef = useRef(null)

    if (!showMenu) {
        return null;
    }

    return (
        <div className="hamburger-overlay" onClick={toggleMenu}>
            <div className="hamburger-content" onClick={e => e.stopPropagation()}>
                <div className="hamburger-body">
                <div className='hamburger-nav' ref={menuRef} onClick={toggleMenu}>
                        <div className='nav_items'>
                            <ul className='menu d-flex flex-column align-items-center gap-5' ref={navRef}>
                                {
                                    nav_links.map((item, index) => (
                                        
                                            <NavLink 
                                            to={item.path} 
                                            key={index}
                                            className={navClass => 
                                                navClass.isActive ? 'active_link' : ''}>
                                                <li className='nav_item'>
                                                {item.display}
                                                </li>
                                            </NavLink>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HamburgerMenu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default HamburgerMenu;