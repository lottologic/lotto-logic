import styles from './navbar.module.css';
import LocomotiveModal from './Modal';

const ValueScoreModal = ({ active, setActive }) => {

    return (
        <LocomotiveModal active={active} setActive={setActive}>
            <div className={styles.modalRoot}>
                <h1 className="text-center mb-3">What is a Value Score? </h1>
                <p textsize="large" className="text-justify mb-4" style={{ fontWeight: 200 }}>
                    In short it is the expected return per dollar (nominated in cents) spent on each respective lottery. For example, if the value score is 50 then on average our algorithms predict that every dollar spent will return 50 cents. The higher the value score the better expected return and therefore, the better value-for-money.<br /><br />Our Jackpot Value or Total Value switch allows you to switch between just analysing the Jackpot Value score and the Total Value score (this includes the Jackpot Value and the value from other divisions).
                </p>
            </div>
        </LocomotiveModal>
    );
};

export default ValueScoreModal;