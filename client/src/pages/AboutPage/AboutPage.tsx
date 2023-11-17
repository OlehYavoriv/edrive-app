import CountUp from "react-countup";
import { PageBgLayer } from "../../components/PageBgLayer";
import ChooseRightWayImg from '../../assets/images/choose-right-way.jpg';
import { BsClockHistory } from "react-icons/bs";
import FirstAchievementImg from '../../assets/images/achievement-1.png';
import SecondAchievementImg from '../../assets/images/achievement-2.png';
import styles from './AboutPage.module.scss';

export const AboutPage = () => {
    return (
        <section className='section'>
            <PageBgLayer title='About Us'/>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.about_section}>
                        <div className={styles.image_container}>
                            <img src={ChooseRightWayImg} alt={'ChooseRightWayImg'}/>
                            <div className={styles.figure}>
                                <div className={styles.figure_container}>
                                    <div className={styles.text}>
                                        <CountUp end={12600} enableScrollSpy={true} scrollSpyDelay={3} delay={5}
                                                 separator={'.'}
                                                 duration={5}/>
                                        <p>Total Testing Hours</p>
                                    </div>
                                    <BsClockHistory/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.text_container}>
                            <h2>edrive test platform is a pioneer in the field of road traffic education since
                                2020!..
                            </h2>
                            <div className={styles.description}>
                                <div className={styles.description__text}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis
                                        varius quam. Amet consectetur adipiscing elit duis tristique sollicitudin. Elit
                                        pellentesque habitant morbi tristique senectus et netus et malesuada.
                                    </p>
                                    <ul>
                                        <li><a href='#Statement'>Our Statements</a></li>
                                        <li><a href='#Areas'>Areas Covered</a></li>
                                    </ul>
                                </div>
                                <div className={styles.achievement}>
                                    <div className={styles.achievement__item}>
                                        <img src={FirstAchievementImg} alt='Best Institute'/>
                                    </div>
                                    <div className={styles.achievement__item}>
                                        <img src={SecondAchievementImg} alt='Best Service'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.customers_section}>
                        <div className={styles.title}>
                            <CountUp end={4000} suffix={'+'} separator={''} enableScrollSpy={true} scrollSpyDelay={3}
                                     delay={5}
                                     duration={5}/>
                            <p>Happy Customers</p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.info_item}>
                                <CountUp end={3} suffix={'+'} enableScrollSpy={true} scrollSpyDelay={3} delay={5}
                                         duration={5}/>
                                <p>Years of Experience</p>
                            </div>
                            <div className={styles.info_item}>
                                <CountUp end={27} enableScrollSpy={true} scrollSpyDelay={3} delay={5}
                                         duration={5}/>
                                <p>Professional Staff</p>
                            </div>
                            <div className={styles.info_item}>
                                <CountUp end={96} suffix={'%'} enableScrollSpy={true} scrollSpyDelay={3} delay={5}
                                         duration={5}/>
                                <p>1st Time Pass Rate</p>
                            </div>
                            <div className={styles.info_item}>
                                <CountUp end={12600} enableScrollSpy={true} scrollSpyDelay={3} delay={5} separator={'.'}
                                         duration={5}/>
                                <p>Total Testing Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
