import styles from './dropdown.module.css';

const RangeSelector = ({ sharesValue, setSharesValue }) => {

    const onInputChange = (e) => {
        const shares = e.target.value;
        if (shares) {
            const sharesInt = parseInt(shares, 10);
            if (sharesInt >= 1 && sharesInt <= 15) {
                setSharesValue(sharesInt)
            }
        } else {
            setSharesValue(shares);
        }
    }

    const incrementValue = () => {
        if (sharesValue) {
            setSharesValue(sharesValue + 1);
        } else {
            setSharesValue(1);
        }
    };

    const decrementValue = () => {
        setSharesValue(sharesValue - 1);
    }

    return (
        <div className={styles.invertedRoot}>
            <button
                onClick={decrementValue}
                disabled={sharesValue <= 1}
            >
                -
            </button>
            <input
                type="number"
                value={sharesValue}
                onChange={(e) => onInputChange(e)}
                className={styles.rangeInput}
            />
            <button
                onClick={incrementValue}
                disabled={sharesValue >= 15}
            >
                +
            </button>
        </div>
    )
}

export default RangeSelector;