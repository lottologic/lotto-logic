import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import styles from './tableMobile.module.css';

SwiperCore.use([Navigation, Pagination]);

const TableMobile = ({ data, selectedButton }) => {
    const getClassNameForPositionLabel = (index) => {
        if (index === 0) {
            return styles.firstRow;
        } else if (index === 1) {
            return styles.secondRow;
        } else if (index === 2) {
            return styles.thirdRow;
        }
        return '';
    };

    const getClassNameForRow = (index) => {
        if (index === 0) {
            return styles.firstRow;
        } else if (index === 1) {
            return styles.secondRow;
        } else if (index === 2) {
            return styles.thirdRow;
        } else if (index % 2 !== 0) {
            return styles.oddRow;
        }
        return styles.evenRow;
    }

    const getOddsValue = (value) => {
        let valueTemp = value / 1000000;
        valueTemp = valueTemp.toFixed(1);
        return `1: $${valueTemp}m`;
    }

    return (
        <div className={styles.root}>
            
            <div className={styles.boxLeft}>
                <div className={styles.headerRow}>
                    <div></div>
                    <div className={styles.headerCell}>
                        <button textsize="small">LOTTERY</button>
                    </div>
                </div>
                {data.map((d, index) => (
                    <div className={styles.row} key={d.lottery}>
                        <div
                            key={d.lottery}
                            className={`${index >= 0 && index <= 2 ? styles.positionLabel : ''} ${getClassNameForPositionLabel(index)}`}
                        >
                            {index === 0 && (
                                <p textsize="large">1<sup>st</sup></p>
                            )}
                            {index === 1 && (
                                <p textsize="large">2<sup>nd</sup></p>
                            )}
                            {index === 2 && (
                                <p textsize="large">3<sup>rd</sup></p>
                            )}
                        </div>
                        <div className={`${styles.cell} ${getClassNameForRow(index)}`}>
                            <img src={d.lottoImageUrl} alt={d.lottery} className={styles.lotteryImage} />
                        </div>
                    </div>
                ))}
                <div className={styles.row}>
                    <div></div>
                    <div className={`${styles.cell} ${styles.evenRow}`}></div>
                </div>
            </div>

            <div className={styles.boxRight}>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className={styles.headerRow}>
                            <div className={styles.headerCell}>
                                <button textsize="small">Value Score</button>
                            </div>
                            <div className={styles.headerCell}>
                                <button textsize="small">Draw No.</button>
                            </div>
                        </div>
                        {data.map((d, index) => (
                            <div className={styles.row}>
                                <div className={`${styles.cell} ${getClassNameForRow(index)}`} style={{ color: 'var(--ruby)' }}>
                                    {selectedButton === 'jackpot' ? d.jackpotScoreValue : d.totalValueScore}
                                </div>
                                <div className={`${styles.cell} ${getClassNameForRow(index)}`}>
                                    {d.drawNumber}
                                </div>
                            </div>
                        ))}
                        <div className={styles.row} style={{ backgroundColor: 'var(--white)' }}></div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.headerRow}>
                            <div className={styles.headerCell}>
                                <button textsize="small">Jackpot</button>
                            </div>
                            <div className={styles.headerCell}>
                                <button textsize="small">Jackpot Shares</button>
                            </div>
                        </div>
                        {data.map((d, index) => (
                            <div className={styles.row}>
                                <div className={`${styles.cell} ${getClassNameForRow(index)}`}>
                                    ${d.jackpot.toFixed(1)}m
                                </div>
                                <div className={`${styles.cell} ${getClassNameForRow(index)}`}>
                                    {d.expSharesinJackpot}
                                </div>
                            </div>
                        ))}
                        <div className={styles.row} style={{ backgroundColor: 'var(--white)' }}></div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`${styles.headerRow} ${styles.lastSlideRow}`}>
                            <div className={styles.headerCell}>
                                <button textsize="small">ODDS OF Jackpot (PER DOLLAR)</button>
                            </div>
                            <div className={styles.headerCell}>
                                
                            </div>
                        </div>
                        {data.map((d, index) => (
                            <div className={`${styles.row} ${styles.lastSlideRow}`}>
                                <div className={`${styles.cell} ${getClassNameForRow(index)}`}>
                                    {getOddsValue(d.oddsOfJackpotPerDollarSpent)}
                                </div>
                                <div className={`${styles.cell} ${getClassNameForRow(index)}`}>
                                    <Popup
                                        trigger={<button className={styles.infoBtn}>?</button>}
                                        position="center center"
                                        modal
                                    >
                                        {close => (
                                            <div className={styles.modal}>
                                                <div className={styles.modalHeader}>
                                                    <button style={{ color: 'white' }} onClick={close}>&times;</button>
                                                    <div className={styles.modalImg}>
                                                        <img src={d.lottoImageUrl} alt={d.lottery} className={styles.lotteryImage} style={{ height: 35 }}/>
                                                    </div>
                                                </div>
                                                <div className={styles.modalBody}>
                                                    <p textsize="large" className="text-center">
                                                        {d.lottoDesc}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </Popup>
                                </div>
                            </div>
                        ))}
                        <div className={`${styles.row} ${styles.lastSlideRow}`}></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TableMobile;