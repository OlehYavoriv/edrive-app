import { FC } from 'react';
import styles from './PageBgLayer.module.scss';

interface PageBgLayerProps {
    title: string
}

export const PageBgLayer: FC<PageBgLayerProps> = ({ title }) => {
    return (
        <div className={styles.layer}>
            <div className={styles.text_container}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};
