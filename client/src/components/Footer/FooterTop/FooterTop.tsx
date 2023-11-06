import { Link } from "react-router-dom";
import { essentialLinksSection, ourCompanySection, usefulSection } from "../../../data/topFooterContent";
import { FooterTopCell } from "../../FooterTopCell";
import { HOME_ROUTE } from "../../../utils/consts";
import Logo from "../../../assets/images/logo.png";
import styles from './FooterTop.module.scss';

export const FooterTop = () => {
    return (
        <div className={styles.footer_top}>
            <div className={styles.footer_top__wrapper}>
                <div className={styles.content}>
                    <div className={styles.content_about}>
                        <Link to={HOME_ROUTE} className={styles.logo}>
                            <img src={Logo} alt='Edrive'/>
                        </Link>
                        <h4>Knowledge - The Key to Safe Driving</h4>
                        <ul>
                            <li>
                                <a href='https://github.com/OlehYavoriv' target='_blank' rel="noreferrer">GitHub</a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/oleh-yavoriv/' target='_blank'
                                   rel="noreferrer">Linkedin</a>
                            </li>
                        </ul>
                        <p>Developed by <a href='https://github.com/OlehYavoriv' target='_blank' rel="noreferrer">Oleh
                            Yavoriv</a>, 2023
                        </p>
                    </div>
                    <FooterTopCell title={'Our Company'}>
                        <div className={styles.links_container}>
                            <ul className={styles.list}>
                                {ourCompanySection.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FooterTopCell>
                    <FooterTopCell title={'Essential Links'}>
                        <div className={styles.links_container}>
                            <ul className={styles.list}>
                                {essentialLinksSection.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FooterTopCell>
                    <FooterTopCell title={'Useful'}>
                        <div className={styles.links_container}>
                            <ul className={styles.list}>
                                {usefulSection.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FooterTopCell>
                </div>
            </div>
        </div>
    );
};
