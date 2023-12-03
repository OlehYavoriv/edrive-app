import {Link} from "react-router-dom";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {ABOUT_ROUTE} from "../../utils/consts";
import Author from '../../assets/images/author.jpeg';
import CarImg from '../../assets/images/car-1.jpeg';
import SignatureImg from '../../assets/images/signature.png';
import styles from './AuthorSection.module.scss';

export const AuthorSection = () => {
    return (
        <div className={styles.section}>
            <div className={styles.about}>
                <h2 className={styles.about__title}>Orci a scelerisque purus semper eget duis</h2>
                <div className={styles.about__container}>
                    <img src={CarImg} alt='Car'/>
                    <div className={styles.content}>
                        <h6>Since</h6>
                        <p className={styles.content_year}>2020</p>
                        <div className={styles.content_description}>
                            <p>Explain to you how all this mistaken denouncing pleasure and praising pain was born and
                                we will give you a complete account of the system, and expound the actual teachings.</p>
                            <p>Mistaken denouncing pleasure and praising pain was born and we will give you complete
                                account of the system expound.</p>
                        </div>
                        <div className={styles.content_owner}>
                            <img src={SignatureImg} alt='Isaac Herman'/>
                            <div className={styles.owner_info}>
                                <h4>Isaac Herman</h4>
                                <p>Founder</p>
                            </div>
                        </div>
                        <Link to={ABOUT_ROUTE} className={styles.read_more__btn}>Read More</Link>
                    </div>
                </div>
            </div>
            <div className={styles.author}>
                <div className={styles.author__shape}></div>
                <img src={Author} alt='Isaac Herman'/>
                <div className={styles.author_social__links}>
                    <h6>Follow me on</h6>
                    <ul className={styles.social_list}>
                        <li><a href='#/'><FaFacebookF/></a></li>
                        <li><a href='#/'><FaInstagram/></a></li>
                        <li><a href='#/'><FaTwitter/></a></li>
                        <li><a href='#/'><FaLinkedin/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
