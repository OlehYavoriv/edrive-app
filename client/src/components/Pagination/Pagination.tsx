import { FC } from 'react';
import { PaginationProps } from "../../utils/interfaces";
import styles from './Pagination.module.scss';

export const Pagination: FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className={styles.pagination}>
            {pageNumbers.map(number => (
                <li key={number} className={styles.pagination__item}>
                    <button onClick={() => paginate(number)}
                            className={currentPage === number ? styles.activePage : styles.page_number}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    );
};
