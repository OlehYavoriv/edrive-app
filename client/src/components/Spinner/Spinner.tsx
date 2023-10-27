import styles from './Spinner.module.scss';

export const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
