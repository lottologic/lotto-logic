import { useState } from 'react';
import Logo from '../assets/images/logo.svg';
//import TwitterIcon from '../assets/images/twitter.svg';
import FacebookIcon from '../assets/images/facebook.svg';
import InstagramIcon from '../assets/images/instagram.svg';

import styles from './footer.module.css';
import ContactModal from './ContactModal';
import SignupModal from './SignupModal';

const Footer = ({ showRegisterInput }) => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    const openContactModal = () => {
        setIsContactOpen(true);
    };

    const openSignupModal = () => {
        setIsSignupOpen(true);
    };

    return (
        <div className={styles.root}>
            {showRegisterInput && (
                <div className={styles.footerTitle}>
                    <button className={styles.loopBtn}>
                        STAY IN THE LOOP
                    </button>
                    <input type="email" name="email" placeholder="Enter email here" className={styles.emailInput} />
                    <button className={styles.submitBtn} textsize="small">
                        <span className="mr-2">Sign Up here</span>
                        <i className={`fa fa-angle-right ${styles.iconRight}`} aria-hidden="true"></i>
                    </button>
                </div>
            )}
            <div className="container h-100">
                <div className={`row d-flex ${styles.footerRow}`}>
                    <div className={`col-md-3 ${styles.logoWrapper}`}>
                        <img src={Logo} alt="Lotto Logic" />
                    </div>
                    <div className="col-md-7 d-flex">
                        <div className="col-md-4 d-flex flex-column">
                            <a href="/how-we-do-it">
                                <button textsize="small" className={styles.footerLink}>How do we do it?</button>
                            </a>
                            <a href="/about">
                                <button textsize="small" className={styles.footerLink}>About</button>
                            </a>
                            <a href="/blogs">
                                <button textsize="small" className={styles.footerLink}>Blog</button>
                            </a>
                        </div>
                        <div className="col-md-4 d-flex flex-column">
                            <a>
                                <button textsize="small" className={styles.footerLink}>Support</button>
                            </a>
                            <a href="/privacy-policy">
                                <button textsize="small" className={styles.footerLink}>Privacy Policy</button>
                            </a>
                            <a href="/terms-of-use">
                                <button textsize="small" className={styles.footerLink}>Terms Of service</button>
                            </a>
                        </div>
                        <div className="col-md-4 d-flex flex-column">
                            <a>
                                <button textsize="small" className={styles.footerLink} onClick={openSignupModal}>Signup</button>
                            </a>
                            <a>
                                <button textsize="small" className={styles.footerLink} onClick={openContactModal}>Contact</button>
                            </a>
                            <a href="/press-package">
                                <button textsize="small" className={styles.footerLink}>Press Package</button>
                            </a>
                        </div>
                    </div>
                    <div className={`col-md-2 d-flex flex-column align-items-end justify-content-end ${styles.footerBottom}`}>
                        <div className="d-flex align-items-center mb-2">
                            {/* <a>
                                <img src={TwitterIcon} alt="twitter" className="mr-1" />
                            </a> */}
                            <a href="https://m.facebook.com/lottologicau/" target="_blank" rel="noreferrer">
                                <img src={FacebookIcon} alt="facebook" className="mr-1" />
                            </a>
                            <a href="https://instagram.com/lottologic?igshid=xaxpzia3w464" target="_blank" rel="noreferrer">
                                <img src={InstagramIcon} alt="instagram" />
                            </a>
                        </div>
                        <p textsize="small" className={styles.footerText}>
                            2021 lottologic pvt. ltd.
                        </p>
                    </div>
                </div>
            </div>
            <ContactModal active={isContactOpen} setActive={setIsContactOpen} />
            <SignupModal active={isSignupOpen} setActive={setIsSignupOpen} />
        </div>
    );
};

export default Footer;