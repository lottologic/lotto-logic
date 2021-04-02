import OwlCarousel from 'react-owl-carousel';
import TitledSection from "../TitledSection";

import CostPerGameImage from '../../assets/images/cost-per-game.svg';
import DivisionPrizesImage from '../../assets/images/division-prizes.svg';
import OddsToWinImage from '../../assets/images/odds-to-win.svg';
import BonusRoundsImage from '../../assets/images/bonus-rounds.svg';
import TheJackpotImage from '../../assets/images/the-jackpot.svg';
import LeftArrow from '../../assets/images/left-arrow.png';
import RightArrow from '../../assets/images/right-arrow.png';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ValueScores.css';

const sliderItems = [
    {
        image: CostPerGameImage,
        label: 'COST PER GAME',
    },
    {
        image: DivisionPrizesImage,
        label: 'DIVISION PRIZES',
    },
    {
        image: OddsToWinImage,
        label: 'ODDS TO WIN',
    },
    {
        image: BonusRoundsImage,
        label: 'BONUS ROUNDS',
    },
    {
        image: TheJackpotImage,
        label: 'THE JACKPOT',
    },
    {
        image: CostPerGameImage,
        label: 'COST PER GAME',
    },
    {
        image: DivisionPrizesImage,
        label: 'DIVISION PRIZES',
    },
    {
        image: OddsToWinImage,
        label: 'ODDS TO WIN',
    },
    {
        image: BonusRoundsImage,
        label: 'BONUS ROUNDS',
    },
    {
        image: TheJackpotImage,
        label: 'THE JACKPOT',
    },
    {
        image: CostPerGameImage,
        label: 'COST PER GAME',
    },
    {
        image: DivisionPrizesImage,
        label: 'DIVISION PRIZES',
    },
    {
        image: OddsToWinImage,
        label: 'ODDS TO WIN',
    },
    {
        image: BonusRoundsImage,
        label: 'BONUS ROUNDS',
    },
    {
        image: TheJackpotImage,
        label: 'THE JACKPOT',
    },
    {
        image: CostPerGameImage,
        label: 'COST PER GAME',
    },
    {
        image: DivisionPrizesImage,
        label: 'DIVISION PRIZES',
    },
    {
        image: OddsToWinImage,
        label: 'ODDS TO WIN',
    },
    {
        image: BonusRoundsImage,
        label: 'BONUS ROUNDS',
    },
    {
        image: TheJackpotImage,
        label: 'THE JACKPOT',
    },
];

const SliderItem = ({ image, label, index }) => {
    return (
        <div className="d-flex flex-column align-items-center p-3" key={label + index}>
            <img src={image} className="slick-item-image" alt={label} />
            <h5 className="text-center text-uppercase">{label}</h5>
        </div>
    );
};

const ValueScores = () => {
    const onSlideChange = () => {
        let allElements = document.querySelectorAll('.owl-item');
        let activeElements = document.querySelectorAll('.active');
        if (activeElements.length > 0) {
            allElements = Array.from(allElements);
            allElements.map((ele) => ele.classList.remove('oddChild'));

            activeElements = Array.from(activeElements);
            activeElements.forEach((ele, index) => {
                if (ele.classList.contains('center')) {
                    ele.classList.add('oddChild');

                    if (activeElements[index + 2]) {
                        activeElements[index + 2].classList.add('oddChild');
                    }
                    if (activeElements[index - 2]) {
                        activeElements[index - 2].classList.add('oddChild');
                    }
                    return;
                }
            })
        }
    };

    const onSlideInit = () => {
        const activeElements = document.querySelectorAll('.active');
        if (activeElements.length === 5) {
            activeElements[1].classList.add('oddChild');
            activeElements[3].classList.add('oddChild');
        } 
    };

    return (
        <TitledSection title="Our value scores include">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-8 col-md-12 col-lg-12 col-xl-12">
                    <OwlCarousel
                        className="value-scores"
                        loop
                        margin={10}
                        nav
                        navText={[
                            `<img src="${LeftArrow}" className="nav-arrow" alt="Prev" />`,
                            `<img src="${RightArrow}" className="nav-arrow" alt="Next" />`,
                        ]}
                        items={5}
                        center
                        autoplay
                        autoplayHoverPause
                        autoplaySpeed={1000}
                        navSpeed={1000}
                        dotsSpeed={1000}
                        onChange={() => onSlideChange()}
                        onInitialized={() => onSlideInit()}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            768: {
                                items: 3,
                            },
                            1280: {
                                items: 5,
                            },
                        }}
                    >
                        {sliderItems.map((item, index) => (
                            <SliderItem image={item.image} label={item.label} index={index} key={item.label + index} />
                        ))}
                    </OwlCarousel>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center pt-5">
                    <p textsize="large" className="wave">
                        Yeah, it’s&nbsp;&nbsp;
                        <span>c</span>
                        <span>o</span>
                        <span>n</span>
                        <span>f</span>
                        <span>u</span>
                        <span>s</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                        &nbsp;&nbsp;but don’t worry, we do the math so you never have to.
                    </p>
                </div>
            </div>
        </TitledSection>
    );
};

export default ValueScores;