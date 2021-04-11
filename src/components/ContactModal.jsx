import styles from './navbar.module.css';
import LocomotiveModal from './Modal';
import { useRef, useState } from 'react';

const ContactModal = ({ active, setActive }) => {
    const formRef = useRef(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();        
        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                })
            });
            setShowSuccess(true);
        } catch (e) {
            alert(e);
        }
    };

    return (
        <LocomotiveModal active={active} setActive={setActive}>
            <div className={styles.modalRoot}>
                <h1 className="text-center mb-3">Contact</h1>
                <p textsize="large" className={`text-center mb-4 ${styles.modalSubText}`}>
                    Fill in the form and our team will reach out. You could also  email us at&nbsp;
                    <span style={{ color: 'var(--primary600)' }}>lottologichello@gmail.com</span>
                </p>
                <form className={styles.modalForm} onSubmit={handleSubmit} ref={formRef} method="post" name="contact" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={styles.modalFormRow}>
                        <input className={`${styles.modalInput} ${styles.halfInput}`} name="firstName" placeholder="First Name" id="firstName" />
                        <input className={`${styles.modalInput} ${styles.halfInput}`} name="lastName" placeholder="Last Name" id="lastName" />
                    </div>
                    <div className={styles.modalFormRow}>
                        <input className={styles.modalInput} name="email" placeholder="Email Address" id="email" />
                    </div>
                    <input className={styles.modalSubmitBtn} type="submit" value="SUBMIT" />
                    {showSuccess && (
                        <p textsize="large" className="alert alert-success mt-3" role="alert">
                            Thank you for your submission. We will get back to you shortly.
                        </p>
                    )}
                </form>
                
            </div>
        </LocomotiveModal>
    );
};

export default ContactModal;