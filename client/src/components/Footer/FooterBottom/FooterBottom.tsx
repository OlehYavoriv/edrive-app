import { Link } from "react-router-dom";
import { bottomFooterContent } from "../../../data/bottomFooterContent";
import styles from "./FooterBottom.module.scss";

export const FooterBottom = () => {
    return (
        <div className={styles.footer_bottom}>
            <div className={styles.footer_bottom__wrapper}>
                <ul className={styles.list}>
                    {bottomFooterContent.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
