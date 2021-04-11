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

    const handleSubmit = e => {
        const formData = {};
        formData.firstName = document.getElementById('firstName').value;
        formData.lastName = document.getElementById('lastName').value;
        formData.email = document.getElementById('email').value;

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => setShowSuccess(true))
            .catch(error => alert(error));

        e.preventDefault();
    };
    return (
        <LocomotiveModal active={active} setActive={setActive}>
            <div className={styles.modalRoot}>
                <h1 className="text-center mb-3">Contact</h1>
                <p textsize="large" className={`text-center mb-4 ${styles.modalSubText}`}>
                    Fill in the form and our team will reach out. You could also  email us at&nbsp;
                    <span style={{ color: 'var(--primary600)' }}>lottologichello@gmail.com</span>
                </p>
                <form className={styles.modalForm} onSubmit={handleSubmit} ref={formRef} method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={styles.modalFormRow}>
                        <input className={`${styles.modalInput} ${styles.halfInput}`} name="firstName" placeholder="First Name" id="firstName" />
                        <input className={`${styles.modalInput} ${styles.halfInput}`} name="lastName" placeholder="Last Name" id="lastName" />
                    </div>
                    <div className={styles.modalFormRow}>
                        <input className={styles.modalInput} name="email" placeholder="Email Address" id="email" />
                    </div>
                    <button className={styles.modalSubmitBtn} onClick={() => formRef.current.submit()}>
                        Submit
                    </button>
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