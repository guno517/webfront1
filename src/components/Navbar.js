import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPaw, faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        MARIO <FontAwesomeIcon icon={faPaw} />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} /> {/*클릭시 값에 따라 아이콘 변경*/}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onCLick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/who' className='nav-links' onCLick={closeMobileMenu}>
                                Who am I
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/projects' className='nav-links' onCLick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links-mobile' onCLick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
