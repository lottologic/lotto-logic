import HomeHeroImage from '../../assets/images/home-hero.png';

import styles from './homeHero.module.css';

const HomeHero = () => {
    return (
        <div className={styles.root}>
            <div className="container h-100 d-flex flex-wrap align-items-center">
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                    <img src={HomeHeroImage} alt="" className={styles.heroImage} />
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <h1>We rank lotteries by value-for-money, daily.</h1>
                    <hr className={styles.line} />
                    <div className="d-flex align-items-center">
                        <h5 className={styles.todaysPickHeading}>
                            Today’s Pick:
                        </h5>
                        <img src="" alt="" id="todaysPickImg" className={styles.todaysPickLogo} />
                    </div>                   
                </div>
            </div>
        </div>
    );
};

export default HomeHero;