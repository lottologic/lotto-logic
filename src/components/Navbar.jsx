import { useEffect, useRef, useState } from 'react';
import Burger from '@animated-burgers/burger-slip';
import Logo from '../assets/images/logo.svg';

import '@animated-burgers/burger-slip/dist/styles.css';
import '../style.css';
import styles from './navbar.module.css';
import ContactModal from './ContactModal';
import SignupModal from './SignupModal';

const gsap = window.gsap;
const $ = window.$;

const Navbar = ({ showButtons }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState('jackpot');
    const menuRef = useRef(null);

    useEffect (() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.5,
            });
        } else {
            gsap.to(menuRef.current, {
                x: -470,
                duration: 0.5,
            });
        }
    }, [isOpen]);

    const openContactModal = () => {
        setIsContactOpen(true);
        setIsOpen(false);
    };

    const openSignupModal = () => {
        setIsSignupOpen(true);
        setIsOpen(false);
    };

    const onJackpotButtonClick = () => {
        $('#jackpotValueButton').click();
        setSelectedButton('jackpot');
        window.locoScroll.scrollTo(document.getElementById('jackpotValueButton').offsetTop,0,0);
    }

    const onTotalButtonClick = () => {
        $('#totalValueButton').click();
        setSelectedButton('total');
        window.locoScroll.scrollTo(document.getElementById('totalValueButton').offsetTop,0,0);
    }

    return (
        <div className={styles.root}>
            <div className={styles.hamburgerMenuCont}>
                <Burger
                    isOpen={isOpen}
                    Component="button"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    styles={{ fontSize: 8, backgroundColor: 'var(--cream)' }}
                />
            </div>
            <div className={styles.brandCont}>
                <a href='/'>
                    <img src={Logo} alt="Lotto Logic" />
                </a>
            </div>
            <div className={styles.navButtons}>
                {showButtons && (
                    <>
                        <button
                            className={`mr-3 ${styles.toggleBtn} ${selectedButton === 'jackpot' ? styles.active : ''}`}
                            onClick={onJackpotButtonClick}
                            id="navbarJackpot"
                        >
                            Jackpot Value
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${selectedButton === 'total' ? styles.active : ''}`}
                            onClick={onTotalButtonClick}
                            id="navbarTotal"
                        >
                            Total Value
                    </button>
                    </>
                )}
                
            </div>

            <div className={styles.menuRoot} ref={menuRef}>
                <div className={styles.listGroup}>
                    <button onClick={() => setIsOpen(false)}>
                        <a href="/how-we-do-it"><h4 className={styles.menuItem}>HOW WE DO IT</h4></a>
                    </button>
                    <button onClick={() => setIsOpen(false)}>
                        <a href="/about"><h4 className={styles.menuItem}>ABOUT</h4></a>
                    </button>
                    <button onClick={() => setIsOpen(false)}>
                        <a href="/blogs"><h4 className={styles.menuItem}>BLOG</h4></a>
                    </button>
                </div>

                <div className={styles.listGroup}>
                    <button onClick={openSignupModal}>
                        <h4 className={styles.menuItem}>SIGN UP</h4>
                    </button>
                    <button onClick={openContactModal}>
                        <h4 className={styles.menuItem}>CONTACT</h4>
                    </button>
                    <button onClick={() => setIsOpen(false)}>
                        <a href="/press-package"><h4 className={styles.menuItem}>PRESS PACKAGE</h4></a>
                    </button>
                </div>

                <div className={styles.listGroup}>
                    <button>
                        <h4 className={styles.menuItem}>SUPPORT</h4>
                    </button>
                    <button onClick={() => setIsOpen(false)}>
                        <a href="/privacy-policy"><h4 className={styles.menuItem}>PRIVACY POLICY</h4></a>
                    </button>
                    <button onClick={() => setIsOpen(false)}>
                        <a href="/terms-of-use"><h4 className={styles.menuItem}>TERMS OF SERVICE</h4></a>
                    </button>
                    <button onClick={() => setIsOpen(false)}>
                        <a href="/disclaimer"><h4 className={styles.menuItem}>DISCLAIMER</h4></a>
                    </button>
                </div>
            </div>
            <ContactModal active={isContactOpen} setActive={setIsContactOpen} />
            <SignupModal active={isSignupOpen} setActive={setIsSignupOpen} />
        </div>
    );
};

export default Navbar;