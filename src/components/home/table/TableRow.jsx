import { useEffect, useRef, useState } from 'react';
import styles from './tableRow.module.css';

const gsap = window.gsap;

const HeaderCell = ({ children, onClick }) => {
    return (
        <div className={styles.cell}>
            <button style={{ color: 'var(--white)' }} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

const Cell = ({ children }) => {
    return (
        <div className={styles.cell}>
            {children}
        </div>
    );
};

const TableHeader = ({ setIsOddsOpen }) => {

    const openOddsColumn = () => {
        gsap.to(document.getElementById('oddsColumn'), {
            x: 0,
            duration: 0.5,
        });
        setIsOddsOpen(true);
    }

    return (
        <div className={`${styles.row} ${styles.header}`}>
            <HeaderCell>Lottery</HeaderCell>
            <HeaderCell>Value Score</HeaderCell>
            <HeaderCell>Draw No.</HeaderCell>
            <HeaderCell>Jackpot</HeaderCell>
            <HeaderCell>Jackpot Shares</HeaderCell>
            <HeaderCell onClick={openOddsColumn}>+</HeaderCell>
        </div>
    );
};

const TableRow = ({
    lotteryImage,
    lotteryName,
    totalValueScore,
    jackpotValueScore,
    drawNo,
    jackpot,
    jackpotShares,
    description,
    index,
    isOddsOpen,
    sortBy,
}) => {

    useEffect(() => {
        if (isOddsOpen) {
            gsap.to(descRef.current, {
                height: 0,
                border: 'none',
                duration: 0.5,
            });
            setShowInfo(false);
        };
    }, [isOddsOpen]);

    const [showInfo, setShowInfo] = useState(false);
    const descRef = useRef(null);

    const getClassNameByIndex = () => {
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
    };

    const toggleInfo = () => {
        if (description) {
            if (showInfo) {
                gsap.to(descRef.current, {
                    height: 0,
                    border: 'none',
                    duration: 0.5,
                });
            } else {
                gsap.to(descRef.current, {
                    height: 'auto',
                    border: '1px solid #00000010',
                    duration: 0.5,
                });
            }
            setShowInfo(!showInfo);
        }
    };

    const getSuperscript = () => {
        if (index === 0) {
            return 'st';
        } else if (index === 2) {
            return 'nd';
        }
        return 'rd';
    }

    return (
        <>
            <div className={`${styles.row} ${getClassNameByIndex()}`}>
                <Cell>
                    <img src={lotteryImage} alt={lotteryName} className={styles.lotteryImage} />
                </Cell>
                <Cell>
                    <p textsize="small" style={{ color: 'var(--ruby)' }}>
                        {sortBy === 'jackpot' ? jackpotValueScore : totalValueScore}
                    </p>
                </Cell>
                <Cell>
                    <p textsize="small">{drawNo}</p>
                </Cell>
                <Cell>
                    <p textsize="small">${jackpot.toFixed(1)}m</p>
                </Cell>
                <Cell>
                    <p textsize="small">{jackpotShares}</p>
                </Cell>
                <Cell>
                    <button className={styles.infoBtn} onClick={toggleInfo}>?</button>
                </Cell>

                {(index === 0 || index === 1 || index === 2) && (
                    <div className={`${styles.positionLabel} ${styles[`plRow${index + 1}`]}`}>
                        <p textsize="small">
                            {index + 1}
                            <sup>{getSuperscript()}</sup>
                        </p>
                    </div>
                )}
            </div>
            {description && (
                <div className={`d-flex w-100 align-items-center justify-content-center ${styles.desc}`} ref={descRef}>
                    <p textsize="small" className={styles.descContent}>
                        {description}
                    </p>
                </div>
            )}
        </>
    );
}

export {
    TableHeader,
    TableRow,
    HeaderCell,
    Cell,
}

