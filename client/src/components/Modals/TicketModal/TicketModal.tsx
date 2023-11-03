import { FC } from "react";
import { CustomTicketModalProps } from "../../../utils/interfaces";
import styles from './TicketModal.module.scss';

export const TicketModal: FC<CustomTicketModalProps> = ({ isOpen, onRequestClose, questions }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <button className={styles.btn}>
                    <span className={styles.close} onClick={onRequestClose}>&times;</span>
                </button>
                <h2>Questions in this ticket:</h2>
                <ul>
                    {questions.map((question, index) => (
                        <li key={index}><b>{index + 1}.</b> {question.question}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
