import styles from './table.module.css';
import rowStyles from './tableRow.module.css';
import { Cell, TableHeader, TableRow } from './TableRow';
import { useEffect, useState } from 'react';
import classes from './table.module.css';
import TableMobile from './TableMobile';

const gsap = window.gsap;
const $ = window.$;

const Odds = ({
    setIsOddsOpen,
    allData,
}) => {
    const getClassNameByIndex = (index) => {
        if (index === 0) {
            return rowStyles.firstRow;
        } else if (index === 1) {
            return rowStyles.secondRow;
        } else if (index === 2) {
            return rowStyles.thirdRow;
        } else if (index % 2 !== 0) {
            return rowStyles.oddRow;
        }
        return rowStyles.evenRow;
    };

    const closeOddsColumn = () => {
        gsap.to(document.getElementById('oddsColumn'), {
            x: 450,
            duration: 0.5,
        });
        setIsOddsOpen(false);
    }

    const getOddsValue = (odds) => {
        let oddsTemp = odds / 1000000;
        oddsTemp = oddsTemp.toFixed(1);
        return `1: $${oddsTemp}m`;
    }

    return (
        <div className={styles.oddsColumn} id="oddsColumn">
            <div className={`${styles.row} ${rowStyles.header}`}>
                <div className={styles.oddsHeader}>
                    <button onClick={closeOddsColumn}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <button>ODDS OF Jackpot (PER DOLLAR)</button>
                </div>
            </div>
            {allData.map((d, index) => (
                <div className={`${styles.row} ${getClassNameByIndex(index)}`} key={d.lottery}>
                    <Cell>
                        <p textsize="small">
                            {getOddsValue(d.oddsOfJackpotPerDollarSpent)}
                        </p>
                    </Cell>
                </div>
            ))}
        </div>
    )
}

const Table = ({ data, sortBy }) => {
    const [isOddsOpen, setIsOddsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        $(window).on('resize', function () {
            if (windowWidth > 768) {
                if (window.innerWidth <= 768) {
                    setWindowWidth(window.innerWidth);
                }
            } else {
                if (window.innerWidth > 768) {
                    setWindowWidth(window.innerWidth);
                }
            }
        })
    })

    if (window.innerWidth <= 786) {
        return (
            <TableMobile data={data} selectedButton={sortBy} />
        )
    }

    return (
        <div className={classes.container}>
            <div className={styles.root}>
                <TableHeader setIsOddsOpen={setIsOddsOpen} />
                {data.map((d, index) => (
                    <TableRow
                        key={d.lottery}
                        lotteryImage={d.lottoImageUrl}
                        lotteryName={d.lottery}
                        totalValueScore={d.totalValueScore}
                        jackpotValueScore={d.jackpotScoreValue}
                        drawNo={d.drawNumber}
                        jackpot={d.jackpot}
                        jackpotShares={d.expSharesinJackpot}
                        description={d.lottoDesc}
                        index={index}
                        isOddsOpen={isOddsOpen}
                        sortBy={sortBy}
                    />
                ))}

            </div>
            <Odds
                isOddsOpen={isOddsOpen}
                setIsOddsOpen={setIsOddsOpen}
                allData={data}
            />
        </div>
    );
};



export default Table;