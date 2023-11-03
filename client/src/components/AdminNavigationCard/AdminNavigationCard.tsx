import { FC } from 'react';
import { Link } from "react-router-dom";
import styles from './AdminNavigationCard.module.scss';

interface AdminNavigationCardProps {
    title: string;
    path: string;
    src: string;
}

export const AdminNavigationCard: FC<AdminNavigationCardProps> = ({ title, path, src }) => {
    return (
        <Link to={path} className={styles.card}>
            <img src={src} alt={title}/>
            <h3>{title}</h3>
        </Link>
    );
};
