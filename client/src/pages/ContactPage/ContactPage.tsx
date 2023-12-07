import { PageBgLayer } from "../../components/PageBgLayer";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Icon1 from '../../assets/images/icon-1.png';
import Icon2 from '../../assets/images/icon-2.png';
import Icon3 from '../../assets/images/icon-3.png';
import styles from './ContactPage.module.scss';

export const ContactPage = () => {
    return (
        <section className='section'>
            <PageBgLayer title='Contact'/>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.inner}>
                        <div className={styles.bg}>
                            <div className={styles.inner_box}>
                                <div className={styles.inner_box__item}>
                                    <img src={Icon1} alt='Location'/>
                                    <h3>We are Here</h3>
                                    <p>PO Box 880 Nulla St, San Fransisco CA 87503, United States.</p>
                                </div>
                                <div className={styles.inner_box__item}>
                                    <img src={Icon2} alt='Contact'/>
                                    <h3>Quick Contact</h3>
                                    <p><a href='tel:04488812345678'>04488812345678</a></p>
                                    <p><a href='mailto:support@example.com'>support@example.com</a></p>
                                </div>
                                <div className={styles.inner_box__item}>
                                    <img src={Icon3} alt='Off.Hours'/>
                                    <h3>Off.Hours</h3>
                                    <p>Monday - Satday: 9am to 6.30pm<br/>
                                        Sunday: Holiday</p>
                                </div>
                            </div>
                            <ul className={styles.social_list}>
                                <li><a href='#/'><FaFacebookF/></a></li>
                                <li><a href='#/'><FaInstagram/></a></li>
                                <li><a href='#/'><FaTwitter/></a></li>
                                <li><a href='#/'><FaLinkedin/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <h2>Send your enquiry</h2>
                        <p>Complete the enquiry form & we will be in touch as soon as possible.</p>
                        <form className={styles.form}>
                            <input type='text' placeholder='Your Name'/>
                            <input type='tel' placeholder='Phone'/>
                            <input type='email' placeholder='Email'/>
                            <textarea placeholder='Your text'/>
                            <button>Let's Talk</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
