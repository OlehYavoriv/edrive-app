import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneQuestion, sendAnswers } from "../../api/testApi";
import { toast } from "react-toastify";
import { error, success } from "../../utils/toasts";
import { decodeToken, getTokenFromLocalStorage } from "../../utils/token";
import { Answer, IQuestion, IUser } from "../../utils/interfaces";
import { ProgressModal } from "../Modals/ProgressModal";
import { observer } from "mobx-react-lite";
import styles from './TestItem.module.scss';

export const TestItem = () => {
    const {id}: any = useParams();
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<any>({});
    const [answersArray, setAnswersArray] = useState<Answer[]>([]);
    const [isValid, setIsValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
    const [totalQuestions, setTotalQuestions] = useState<number>(0);
    const [successRate, setSuccessRate] = useState<number>(0);

    useEffect(() => {
        const areAllAnswersSelected = questions.every((question) => selectedAnswers[question.test_id] !== undefined);
        setIsValid(areAllAnswersSelected);

        const fetchData = async () => {
            try {
                const questionData = await fetchOneQuestion(id);
                setQuestions(questionData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id, questions, selectedAnswers]);

    const handleAnswerSelection = (questionId: number, selectedAnswerId: number, isCorrect: boolean) => {
        if (selectedAnswers[questionId] !== undefined) return;

        setSelectedAnswers({...selectedAnswers, [questionId]: {answerId: selectedAnswerId, isCorrect: isCorrect}});

        setAnswersArray((prevAnswersArray: any) => [...prevAnswersArray, {
            answer_id: selectedAnswerId,
            is_correct: isCorrect
        }]);
    };

    const addAnswers = async () => {
        try {
            const userToken = getTokenFromLocalStorage();
            const decodedToken = decodeToken(userToken) as IUser;

            const formData = new FormData();
            if (decodedToken.uid !== undefined) {
                formData.append("userUid", decodedToken.uid.toString());
            }
            formData.append("ticketTicketId", id.toString());
            formData.append('answers', JSON.stringify(answersArray));
            const totalQuestions = questions.length;
            const correctAnswersCount = answersArray.reduce(
                (count, {is_correct}) => count + (is_correct ? 1 : 0), 0
            );
            const successRate = (correctAnswersCount / totalQuestions) * 100;
            formData.append("correct", correctAnswersCount.toString());
            formData.append("progress", successRate.toString());
            await sendAnswers(formData);
            toast.success("Answers sent successfully!", success);
            setIsFormSubmitted(true);
            setCorrectAnswersCount(correctAnswersCount);
            setTotalQuestions(totalQuestions);
            setSuccessRate(successRate);
        } catch (err: any) {
            toast.error(err.response.data.message, error);
        }
    };

    return (
        <section className="section">
            <div className="container">
                <form className={styles.form}>
                    <ul className={styles.form_list}>
                        {questions.map((question: any, questionIndex: number) => (
                            <li key={questionIndex} className={styles.form_list__item}>
                                <h3 className={styles.question}>{questionIndex + 1}. {question.question}</h3>
                                <div className={styles.container}>
                                    {question.image && (
                                        <img className={styles.container__image}
                                             src={`http://localhost:8000/${question.image}`} alt={question.image}/>
                                    )}
                                    <ul className={styles.container__answers}>
                                        {question.testAnswers.map((answer: any, answerIndex: number) => (
                                            <li key={answerIndex}
                                                className={answer.is_correct ? selectedAnswers[question.test_id]?.answerId ===
                                                    answer.answer_id ? styles.correct_answer : ""
                                                    : selectedAnswers[question.test_id]?.answerId === answer.answer_id ? styles.incorrect_answer : ""}>
                                                <label>
                                                    <input type="radio" name={`question_${question.test_id}`}
                                                           value={answer.answer_id}
                                                           onChange={() => handleAnswerSelection(question.test_id, answer.answer_id, answer.is_correct)}
                                                           disabled={selectedAnswers[question.test_id] !== undefined}
                                                    />
                                                    {answer.answer_text}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className={styles.send_btn} disabled={!isValid} type="button" onClick={addAnswers}>Complete
                        the test
                    </button>
                </form>
            </div>
            {isFormSubmitted && (
                <ProgressModal correct={correctAnswersCount} incorrect={totalQuestions - correctAnswersCount}
                               totalQuestions={totalQuestions} rate={successRate}
                />
            )}
        </section>
    );
};
