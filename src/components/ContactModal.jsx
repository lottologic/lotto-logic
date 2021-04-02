import styles from './navbar.module.css';
import LocomotiveModal from './Modal';

const ContactModal = ({ active, setActive }) => {
    return (
        <LocomotiveModal active={active} setActive={setActive}>
            <div className={styles.modalRoot}>
                <h1 className="text-center mb-3">Contact</h1>
                <p textsize="large" className={`text-center mb-4 ${styles.modalSubText}`}>
                    Fill in the form and our team will reach out. You could also  email us at&nbsp;
                    <span style={{ color: 'var(--primary600)' }}>lottologichello@gmail.com</span>
                </p>
                <form className={styles.modalForm}>
                    <div className={styles.modalFormRow}>
                        <input className={`${styles.modalInput} ${styles.halfInput}`} name="firstName" placeholder="First Name" />
                        <input className={`${styles.modalInput} ${styles.halfInput}`} name="lastName" placeholder="Last Name" />
                    </div>
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

export default ContactModal;