import { useContext, useEffect, useState } from 'react';
import { Context } from "../../index";
import { toast } from "react-toastify";
import { observer } from "mobx-react-lite";
import { createTopic, fetchTopic } from "../../api/testApi";
import { error, success } from "../../utils/toasts";
import { TopicTable } from "../../components/TopicTable";
import styles from './CreateTopicPage.module.scss';

export const CreateTopicPage = observer(() => {
    const {test}: any = useContext(Context);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetchTopic().then(data => test.setTopics(data));
    }, [test]);

    const addTopic = async () => {
        if (!value || value.length < 4) {
            toast.error("Not valid :(", error);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('title', value)
            await createTopic(formData);
            toast.success("Topic created successfully!", success);
            const updatedTopics = await fetchTopic();
            test.setTopics(updatedTopics);
            setValue('');
        } catch (err: any) {
            toast.error(err.response.data.message, error)
        }
    };

    const refreshTopics = async () => {
        const updatedTopics = await fetchTopic();
        test.setTopics(updatedTopics);
    };

    return (
        <section className={`section ${styles.wrapper}`}>
            <div className='container'>
                <h3 className='admin-page_title'>Create topic</h3>
                <form className={styles.form}>
                    <input type='text' className={styles.form__input} value={value}
                           onChange={e => setValue(e.target.value)}
                           placeholder='Enter topic'/>
                    <button type='button' className={styles.form__btn} onClick={addTopic}>Send</button>
                </form>
                <TopicTable topics={test.topics} refreshTopics={refreshTopics}/>
            </div>
        </section>
    );
});
