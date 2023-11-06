import { FooterBottom } from "./FooterBottom";
import { FooterTop } from "./FooterTop";
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.bg_layer}></div>
            <FooterTop/>
            <FooterBottom/>
        </footer>
    );
};
