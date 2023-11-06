import { FC, ReactNode } from 'react';
import styles from './FooterTopCell.module.scss';

interface FooterTopCellProps {
    title: string,
    children: ReactNode
}

export const FooterTopCell: FC<FooterTopCellProps> = ({ children, title }) => {
    return (
        <div className={styles.cell}>
            <div className={styles.cell_title}>
                <h4>{title}</h4>
            </div>
            {children}
        </div>
    );
};
