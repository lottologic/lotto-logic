import styles from './navbar.module.css';
import LocomotiveModal from './Modal';
import { useRef, useState } from 'react';
import axios from 'axios';

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
            console.log('requesting');
            const res = await axios.post('/', encode({
                "form-name": "contact",
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
            }), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            /* const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                })
            }); */
            console.log('after post');
            console.log(res)
            setShowSuccess(true);
        } catch (err) {
            console.log(err)
            alert(err);
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
                <form
                    className={styles.modalForm}
                    method="post"
                    name="contact"
                    data-netlify="true"
                    action="/submit"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={styles.modalFormRow}>
                        <input className={`${styles.modalInput} ${styles.halfInput}`} name="firstName" placeholder="First Name" id="firstName" />
                        <input className={`${styles.modalInput} ${styles.halfInput}`} name="lastName" placeholder="Last Name" id="lastName" />
                    </div>
                    <div className={styles.modalFormRow}>
                        <input className={styles.modalInput} name="email" placeholder="Email Address" id="email" />
                    </div>
                    <button className={styles.modalSubmitBtn} type="submit">Submit</button>
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