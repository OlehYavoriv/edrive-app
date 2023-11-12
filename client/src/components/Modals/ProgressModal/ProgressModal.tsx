import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/consts";
import { ProgressCircle } from "../../ProgressCircle";
import styles from './ProgressModal.module.scss';

interface ProgressModalProps {
    correct: number;
    incorrect: number;
    rate: number;
    totalQuestions: number;
}

export const ProgressModal: FC<ProgressModalProps> = ({correct, incorrect, rate, totalQuestions}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <button className={styles.btn}>
                    <span className={styles.close} onClick={() => navigate(HOME_ROUTE)}>&times;</span>
                </button>
                <h2>Questions progress:</h2>
                <div style={{margin: '0 auto'}}>
                    <ProgressCircle percentage={rate} colour='#ebc405'/>
                </div>
                <ul className={styles.list}>
                    <li><b>Total Questions:</b> {totalQuestions}</li>
                    <li><b>Correct Answers:</b> {correct}</li>
                    <li><b>Incorrect Answers:</b> {incorrect}</li>
                </ul>
            </div>
        </div>
    );
};
