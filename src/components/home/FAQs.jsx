import { useEffect, useRef, useState } from "react";
import TitledSection from "../TitledSection";

import styles from './faqs.module.css';

const gsap = window.gsap;

const faqData = [
    {
        id: 1,
        question: 'What is the value score?',
        answer: 'In short it is the expected return per dollar (nominated in cents) spent on each respective lottery. For example, if the value score is 50 then on average our algorithms predict that every dollar spent will return 50 cents. The higher the value score the better expected return and therefore, the better value-for-money. Our Jackpot Value or Total Value switch allows you to switch between just analysing the Jackpot Value score and the Total Value score (this includes the Jackpot Value and the value from other divisions).',
    },
    {
        id: 2,
        question: 'How do you determine the Jackpot Value Score?',
        answer: 'In summary, the steps are as follows:\n1.\nWe multiply the odds to win the jackpot with the cost per game to play – this gives you the odds to win the jackpot per dollar spent. The reason we do this is because how can you compare lotteries if they have different costs per game to play? \n2.\nWe divide the jackpot by the expected number of entries that will share in the jackpot (if in the respective lottery multiple winners are possible). This then provides the estimated first division prize. \na.\nThe expected number of jackpot shares are based on historical trends and calculated by our algorithm which predicts the amount of entries you will share the jackpot with should you win.  Predicting this is plain old statistics. Please note that the larger the jackpot, the more likely it is that the jackpot will be shared (as jackpots increase so too does the number of lotto tickets purchased). \n3.\nWe divide the estimated first division prize calculated in step 2 by the per dollar odd to win the jackpot calculated in step 1. This finally provides the expected jackpot return per dollar spent or Jackpot Value score.',
    },
    {
        id: 3,
        question: 'How do you determine the Total Value Score?',
        answer: 'We add the Jackpot Value score (see the FAQ above) with the Value score from the divisions other than division one (if there are any) below. The Value score from other divisions are determined by the following steps: \n1.\nEach lottery game either states (in small writing) or is legislated to set out how they allocate certain percentages of the total amount spent on a specific draw to each of the other division’s prize pool. We therefore capture and consider these allocations into our algorithm noting that the lottery company has some minor discretion to modify the allocations. \n2.\nOur algorithm then considers the odds per dollar spent to win each of the other divisions. Combined with the information in step 1 it is then possible to determine the theoretical expected return per dollar spent for the other divisions. \n3.\nOur algorithm considers a long history of actual historical results to then tweak the theoretical expected returns to resemble what we consider as an accurate expected return per dollar for the other divisions (if any). This step aligns theory with practice.',
    },
    {
        id: 4,
        question: 'What does the ? icon in the table do if clicked?',
        answer: 'It explains the particularities of each respective lottery and how those particularities may affect our value score rating for the respective lottery. Afterall, every lottery is different and those differences need to be taken into account',
    },
    {
        id: 5,
        question: 'Do you account for special bonus games or special jackpots in your value scores?',
        answer: 'In short, yes. Wherever there is any potential material effect on the expected value scores,we build this into our algorithms. ',
    },
    {
        id: 6,
        question: 'Do you sell lottery tickets?',
        answer: 'No, we do not. We are not associated with or connected to any lottery company.',
    },
];

const FAQ = ({ question, answer, index, id, open }) => {
    const [isOpen, setIsOpen] = useState(open);
    const faqRef = useRef(null);

    const toggleFAQ = () => {
        if (isOpen) {
            gsap.to(faqRef.current, {
                height: 0,
                duration: 0.5,
            });
        } else {
            gsap.to(faqRef.current, {
                height: 'auto',
                duration: 0.5,
            });
        }
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (isOpen) {
            gsap.to(faqRef.current, {
                height: 'auto',
                duration: 0.5,
            });
        }
    })

    return (
        <div className="row" id={id}>
            <div className={`col-md-12 text-center ${styles.faqRoot} ${index === faqData.length - 1 ? 'mb-0' : ''}`}>
                <h4 className="">{question}</h4>
                <div className={styles.expand} ref={faqRef}>
                    <p textsize="large" className={styles.answer}>{answer}</p>
                </div>
                <button className={styles.toggleBtn} onClick={toggleFAQ}>
                    {isOpen ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
}

const FAQs = () => {

    return (
        <TitledSection title="FAQ's">
            <div className={styles.root} id="faq-section">
                {faqData.map((faq, index) => (
                    <FAQ
                        question={faq.question}
                        answer={faq.answer}
                        key={faq.id}
                        index={index}
                        id={`faq-${faq.id}`}
                        open={faq.id === 1}
                    />
                ))}
            </div>
        </TitledSection>
    );
};

export default FAQs;