import { useEffect, useState } from 'react';
import axios from 'axios';
import BottomArrow from '../../assets/images/bottom-arrow.svg';
import styles from './lottoData.module.css';
import Table from './table/Table';
import Dropdown from '../Dropdown';
import RangeSelector from '../RangeSelector';

const $ = window.$;

const LottoData = () => {

    const [selectedButton, setSelectedButton] = useState('jackpot');
    const [data, setData] = useState([]);
    const [selectedLottery, setSelectedLottery] = useState('OZ lotto');
    const [selectedShares, setSelectedShares] = useState(1);

    const onBottomArrowClick = () => {
        window.locoScroll.scrollTo(document.getElementById('tableSectionHeading').offsetTop, 0, 0);
    };

    const sortByTotalValue = (unsortedData) => {
        let dataTemp = unsortedData && unsortedData.length > 0 ? unsortedData : [...data];
        if (dataTemp && dataTemp.length > 0) {
            dataTemp = dataTemp.sort((a, b) => b.totalValueScore - a.totalValueScore);
            setData(dataTemp);
            setSelectedButton('total');

            $('#todaysPickImg').attr('src', dataTemp[0].lottoImageUrl);
        }
    };

    const sortByJackpotValue = (unsortedData) => {
        let dataTemp = unsortedData && unsortedData.length > 0 ? unsortedData : [...data];
        if (dataTemp && dataTemp.length > 0) {
            dataTemp = dataTemp.sort((a, b) => b.jackpotScoreValue - a.jackpotScoreValue);
            setData(dataTemp);
            setSelectedButton('jackpot');

            $('#todaysPickImg').attr('src', dataTemp[0].lottoImageUrl);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.lottologic.org/user/fetch');
            let dataTemp = response.data;
            
            let dataTempArray = Object.values(dataTemp);
            if (dataTempArray && dataTempArray.length > 0) {
                const ddValueData = dataTempArray.find(d => d.dropdown);
                sortByJackpotValue(dataTempArray);
                setSelectedLottery(ddValueData.lottery);
                setSelectedShares(dataTempArray[0].expSharesinJackpot);
            }
        }
        fetchData();

        const fetchSelectedButton = async () => {
            const response = await axios.get('https://api.lottologic.org/user/defaultVal');
            let dataTemp = response.data;
            //console.log(dataTemp.column_name);

            if (dataTemp.column_name === 'jackpot_value_score') {
                setSelectedButton('jackpot');
            } else {
                setSelectedButton('total');
            }
        }
        
        fetchSelectedButton();
    }, []);

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get(`https://api.lottologic.org/user/customfetch?lottery=${selectedLottery}&expShares=${selectedShares}`);
            const dataTemp = response.data;

            const temp = [...data];
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].lottery === selectedLottery) {
                    temp[i].totalValueScore = dataTemp.totalValueScore;
                    temp[i].jackpotScoreValue = dataTemp.jackpotScoreValue;
                    temp[i].jackpot = dataTemp.jackpot;
                    temp[i].expSharesinJackpot = dataTemp.expSharesinJackpot;
                    temp[i].oddsOfJackpotPerDollarSpent = dataTemp.oddsOfJackpotPerDollarSpent;
                    break;
                }
            }

            if (selectedButton === 'jackpot') {
                sortByJackpotValue(temp);
            } else {
                sortByTotalValue(temp);
            }
        }
        
        if (selectedShares) {
            fetchData();
        }

    }, [selectedShares, selectedLottery]);

    return (
        <section className={styles.root}>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <button onClick={onBottomArrowClick}>
                    <img src={BottomArrow} alt="Go To Table" />
                </button>
                <h2 className={styles.sectionHeading} id="tableSectionHeading">
                    Forget guessing which lottery is best to buy.
                </h2>
                <p textsize="large" className={styles.sectionText}>
                    We analyse lotteries and rank them daily, so you know which lottery is the best value-for-money, always.
                </p>
                <div className={styles.buttons}>
                    <button
                        id="jackpotValueButton"
                        className={`mr-3 ${styles.toggleBtn} ${selectedButton === 'jackpot' ? styles.active : ''}`}
                        onClick={sortByJackpotValue}
                    >
                        Jackpot Value
                    </button>
                    <button
                        id="totalValueButton"
                        className={`${styles.toggleBtn} ${selectedButton === 'total' ? styles.active : ''}`}
                        onClick={sortByTotalValue}
                    >
                        Total Value
                    </button>
                </div>
                {data && (
                    <Table data={data} sortBy={selectedButton} />
                )}
                <div className={styles.sectionFooter}>
                    <p textsize="large" className={styles.footerText}>
                        See how changing&nbsp;
                        <span className={styles.boldText}>expected shares</span>
                        &nbsp;in jackpot affects the rankings.
                    </p>
                    {data && data.length > 0 && (
                        <div className={styles.footerDropdowns}>
                            <Dropdown selected={selectedLottery} setSelected={setSelectedLottery} options={data.filter(d => d.dropdown).map(d => d.lottery)} />
                            {/* <Dropdown selected={selectedShares} setSelected={setSelectedShares} options={[1, 2, 3, 4, 5]} inverted /> */}
                            <RangeSelector sharesValue={selectedShares} setSharesValue={setSelectedShares} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LottoData;