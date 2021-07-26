import { useRef, useState } from 'react';
import AboutUsImage from '../../assets/images/about-us.png';

import styles from './aboutUs.module.css';

const gsap = window.gsap;

const AboutUs = () => {
    const aboutRef = useRef(null);
    const [expanded, setExpanded] = useState(false);

    const showContent = () => {
        gsap.to(aboutRef.current, {
            height: 'auto',
            duration: 1,
        });
        setExpanded(true);
        window.locoScroll.update();
    }

    const hideContent = () => {
        gsap.to(aboutRef.current, {
            height: 0,
            duration: 1,
        });
        setExpanded(false);
        window.locoScroll.update();
    }

    return (
        <section className={styles.root} id="aboutSection">
            <div className="container h-100 d-flex flex-wrap">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src={AboutUsImage} className={styles.aboutImage} alt="About Lotto Logic" />
                </div>
                <div className={`col-md-6 d-flex flex-column justify-content-center ${styles.content}`}>
                    <h2 className={styles.heading}>All about us</h2>
                    <p textsize="large" className={styles.introText}>
                        We are a group of math obsessed individuals on a simple mission to uncover the best value-for-money lotteries daily.&nbsp;
                        The value-for-money in lotteries can shift daily, so we do the math to help you know where value sits at a glance. 
                    </p>
                    <div className={styles.hiddenContent} ref={aboutRef}>
                        <p textsize="large" className={styles.text}>
                            The various lotteries are so different from one another. Without doing a whole lot of analysis, it is impossible to really understand what exactly you are buying into. Which is why we created Lotto Logic. Our algorithms compare the lotteries by analysing the odds to win not only the jackpot but all divisions, the cost to enter per game, jackpot value, bonus rounds and how likely it is for entries to share in the jackpot.
                        </p>
                        <p textsize="large" className={styles.text}>
                            We created this for you and we hope you find it helpful. Please leave feedback below if you have any comments or suggestions as we would love to hear from you.
                        </p>
                    </div>
                    <div className="d-flex flex-wrap mt-4">
                        <button
                            className={styles.readMore}
                            onClick={expanded ? hideContent : showContent}
                            id="expand-about"
                        >
                            READ {expanded ? 'Less' : 'More'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;