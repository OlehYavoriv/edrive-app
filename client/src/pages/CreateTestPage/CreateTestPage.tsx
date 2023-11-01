import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Uploader } from '../../components/Uploader';
import { createTest, fetchTopic } from '../../api/testApi';
import { error, success } from '../../utils/toasts';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import { Answer, ITest } from "../../utils/interfaces";
import styles from './CreateTestPage.module.scss';

export const CreateTestPage = () => {
    const [test, setTest] = useState<ITest>({
        file: null, question: '', selectedTopic: '', answers: []
    });
    const [topics, setTopics] = useState<any[]>([]);
    const [answerText, setAnswerText] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const validateForm = () => {
            const isQuestionValid = test.question.trim().length >= 5;
            const isFileValid = test.file !== null;
            const isSelectedValue = test.selectedTopic !== '';
            const isAnswersValid = test.answers.length > 0;

            setIsValid(isQuestionValid && isFileValid && isSelectedValue && isAnswersValid);
        };
        const fetchTopics = async () => {
            try {
                const topicsData = await fetchTopic();
                setTopics(topicsData);
            } catch (error) {
                console.error('Error loading topics.', error);
            }
        };

        validateForm();
        fetchTopics();
    }, [test]);

    const handleFileChange = (file: File) => {
        setTest({...test, file});
    };

    const handleSelectChange = (topicTitle: string) => {
        setTest({...test, selectedTopic: topicTitle});
        setIsSelectOpen(!isSelectOpen);
    };

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const addAnswer = () => {
        if (answerText.trim() === '') return;
        const newAnswer: Answer = {answer_text: answerText, is_correct: isCorrect};

        setTest({...test, answers: [...test.answers, newAnswer]});
        setAnswerText('');
        setIsCorrect(false);
    };

    const removeAnswer = (index: number) => {
        const updatedAnswers = [...test.answers];
        updatedAnswers.splice(index, 1);
        setTest({...test, answers: updatedAnswers});
    };

    const addTest = async () => {
        try {
            const selectedTopicData = topics.find((topic) => topic.title === test.selectedTopic);
            if (!selectedTopicData) {
                toast.error('No topic selected or topic not found.', error);
                return;
            }

            const formData = new FormData();
            if (test.file !== null) formData.append('image', test.file);
            formData.append('question', test.question);
            formData.append('topicTopicId', selectedTopicData.topic_id);
            formData.append('answers', JSON.stringify(test.answers));

            await createTest(formData);
            setTest({file: null, question: '', selectedTopic: '', answers: []});
            toast.success('Test created successfully!', success);
        } catch (err: any) {
            toast.error(err.response.data.message, error);
        }
    };

    return (
        <section className={`section ${styles.wrapper}`}>
            <div className='container'>
                <h3 className="admin-page_title">Create test</h3>
                <form className={styles.form}>
                    <div className={styles.form__container}>
                        <Uploader onFileChange={handleFileChange}/>
                        <div className={styles.form__main}>
                            <div className={styles.form__main_field}>
                                <label htmlFor="question" className={styles.label}>Question</label>
                                <input
                                    className={styles.input} type="text" name="question" value={test.question}
                                    onChange={(e) => setTest({...test, question: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}
                                 onClick={handleDropdownClick}>
                                <span>Select a topic: {test.selectedTopic}</span>
                                <ul className={styles.dropdown__list}>
                                    {topics.map((topic) => (
                                        <li key={topic.topic_id} onClick={() => handleSelectChange(topic.title)}>
                                            {topic.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.answers_option}>
                        <div className={styles.answers_option__display}>
                            <h4>Answer Options:</h4>
                            <ul>
                                {test.answers.map((answer, index) => (
                                    <li key={index}>
                                        <p>{answer.answer_text}
                                            <span> {answer.is_correct ? '(Correct)' : '(Incorrect)'}</span>
                                        </p>
                                        <button className={styles.remove_btn} type="button"
                                                onClick={() => removeAnswer(index)}>
                                            <IoIosRemoveCircleOutline/>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.answer}>
                            <div className={styles.answer__field}>
                                <input className={styles.input} type="text" name="answerText" value={answerText}
                                       onChange={(e) => setAnswerText(e.target.value)}
                                       required
                                />
                            </div>
                            <div className={styles.checkbox}>
                                <label className={styles.checkbox__label}>
                                    <input type="checkbox" name="isCorrect" checked={isCorrect}
                                           onChange={() => setIsCorrect(!isCorrect)}/>
                                    <span></span>
                                    Is correct?
                                </label>
                            </div>
                            <button className={styles.add_btn} type="button" onClick={addAnswer}>
                                <IoIosAddCircleOutline/>
                            </button>
                        </div>
                    </div>
                    <button className={styles.create_test__btn} type="button"
                            style={{cursor: !isValid ? 'not-allowed' : 'pointer'}} onClick={addTest}
                            disabled={!isValid}>
                        Create Test
                    </button>
                </form>
            </div>
        </section>
    );
};
