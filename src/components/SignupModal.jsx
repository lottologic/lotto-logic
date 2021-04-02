import styles from './navbar.module.css';
import LocomotiveModal from './Modal';

const SignupModal = ({ active, setActive }) => {
    return (
        <LocomotiveModal active={active} setActive={setActive}>
            <div className={styles.modalRoot}>
                <h1 className="text-center mb-3">Sign Up</h1>
                <p textsize="large" className={`text-center mb-4 ${styles.modalSubText}`}>                   
                    <span style={{ color: 'var(--primary600)' }}>Stay in the loop.</span>
                    &nbsp;Put in your email and we will keep you updated.
                </p>
                <form className={styles.modalForm}>
                    <div className={styles.modalFormRow}>
                        <input className={styles.modalInput} name="email" placeholder="Email Address" />
                    </div>
                    <button className={styles.modalSubmitBtn}>
                        Submit
                    </button>
                </form>
            </div>
        </LocomotiveModal>
    );
};

export default SignupModal;