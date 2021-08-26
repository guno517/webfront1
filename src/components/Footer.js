import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Advanture newletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="your Email" className="footer-input" />
                    </form>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to= '/sign-up'>How it works</Link>
                        <Link to= '/'>Testimonials</Link>
                        <Link to= '/'>Careers</Link>
                        <Link to= '/'>Investors</Link>
                        <Link to= '/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to= '/'>name</Link>
                        <Link to= '/'>email</Link>
                        <Link to= '/'>Phone</Link>
                        <Link to= '/'>Address</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to= '/'>Submit Video</Link>
                        <Link to= '/'>Ambassadors</Link>
                        <Link to= '/'>Agency</Link>
                        <Link to= '/'>Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to= '/'>Instagram</Link>
                        <Link to= '/'>Facebook</Link>
                        <Link to= '/'>Youtube</Link>
                        <Link to= '/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            MARIO <FontAwesomeIcon className='fapaw' icon={faPaw} />
                        </Link>
                    </div>
                    <small className="website-rights">MARIO 2021</small>
                    <div className='social-icons'>
                        <Link className="social-icon-link facebook" 
                        to='/' 
                        target='_blank' 
                        aria-label='Facebook'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link className="social-icon-link instagram" 
                        to='/' 
                        target='_blank' 
                        aria-label='Instagram'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link className="social-icon-link twitter" 
                        to='/' 
                        target='_blank' 
                        aria-label='Twitter'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
