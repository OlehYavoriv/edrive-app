import React, { useState } from 'react';
import { answerAndQuestions } from '../../data/answerAndQuestionsData';
import styles from './FAQAccordion.module.scss';

export const FaqAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className={styles.accordion}>
            {answerAndQuestions.map((item, index) => (
                <div key={index} className={styles.accordion__items}>
                    <button aria-expanded={activeIndex === index ? 'true' : 'false'}
                            onClick={() => toggleAccordion(index)}>
                        <b>Q:</b> <span className={styles.accordion_title}>{item.question}</span>
                        <span className={styles.icon}></span>
                    </button>
                    <div className={styles.accordion_content}>
                        <b>A:</b> <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
