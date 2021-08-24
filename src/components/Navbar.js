import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPaw, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            {/*화면크키 변환시 버튼 UI 변경*/ }
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> {/*로고 클릭시 모바일 메뉴 버튼 사라지면서 홈으로 가기*/}
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
                            <Link to='/services' className='nav-links' onCLick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onCLick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className='nav-links-mobile' onCLick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
