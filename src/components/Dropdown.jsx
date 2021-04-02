import styles from './dropdown.module.css';
import { useRef, useState } from 'react';

const gsap = window.gsap;

const Dropdown = ({
    options,
    selected,
    setSelected,
    inverted,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    const toggleDropdown = () => {
        if (!isOpen) {
            gsap.to(dropdownRef.current, {
                height: 'auto',
                duration: 0.5,
            });
        } else {
            gsap.to(dropdownRef.current, {
                height: 0,
                duration: 0.5,
            });
        }
        setIsOpen(!isOpen)
    };

    const setSelectedOption = (option) => {
        gsap.to(dropdownRef.current, {
            height: 0,
            duration: 0.5,
        });
        setIsOpen(false);
        setSelected(option);
    }

    return (
        <div className={`position-relative ${inverted ? styles.inverted: ''}`}>
            <button
                className={inverted ? styles.invertedRoot : styles.root}
                onClick={toggleDropdown}
            >
                <i className={`fa fa-angle-down ${styles.icon} ${isOpen ? styles.iconRotated : ''}`} aria-hidden="true"></i>
                {selected}
            </button>

            <div className={styles.optionsRoot} ref={dropdownRef}>
                {options.map((option, index) => (
                    <button
                        className={`${styles.option} ${selected === option ? styles.selected : ''}`}
                        onClick={() => setSelectedOption(option)}
                        key={option+index}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;