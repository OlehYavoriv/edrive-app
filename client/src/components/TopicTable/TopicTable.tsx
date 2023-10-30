import { FC, useState } from 'react';
import { toast } from "react-toastify";
import { error, success } from "../../utils/toasts";
import { deleteTopic, fetchTopic } from "../../api/testApi";
import { ITopic, TopicTableProps } from "../../utils/interfaces";
import { MdDelete } from "react-icons/md";
import styles from './TopicTable.module.scss';

export const TopicTable: FC<TopicTableProps> = ({ topics, refreshTopics }) => {
    const itemsPerPage = 10;
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const visibleTopics = topics.slice(indexOfFirstItem, indexOfLastItem);

    const handleDeleteClick = async (topic: ITopic) => {
        try {
            await deleteTopic(topic.topic_id);
            toast.success('Topic deleted successfully!', success);
            const updatedTopics = await fetchTopic();
            refreshTopics(updatedTopics);
        } catch (err: any) {
            toast.error(err.response?.data?.message, error);
        }
    };

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    for (let i = 1; i <= Math.ceil(topics.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.table__head}>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className={styles.table__body}>
                {visibleTopics.map((topic, index) => (
                    <tr key={index}>
                        <td>{indexOfFirstItem + index + 1}</td>
                        <td>{topic.title}</td>
                        <td>
                            <button type="button" onClick={() => handleDeleteClick(topic)}
                                    className={styles.remove_btn}>
                                <MdDelete/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <ul className={styles.pagination}>
                {pageNumbers.map(number => (
                    <li key={number} className={styles.pagination__item}>
                        <button onClick={() => paginate(number)} className={styles.page_number}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
