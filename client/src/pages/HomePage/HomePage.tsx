import { AuthorSection } from "../../components/AuthorSection";
import Marquee from "react-fast-marquee";
import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <section className='section'>
            <div className='container'>
                <AuthorSection/>
                <Marquee className={styles.marquee} autoFill={true} pauseOnHover={true}>
                    <i>CYBERTECH FURTURATECH HP TECHNOLOGY DAILYNEWS ART STUDIO CYBERTECH FURTURATECH HP TECHNOLOGY
                        DAILYNEWS ART STUDIO CYBERTECH FURTURATECH HP TECHNOLOGY DAILYNEWS ART STUDIO</i>
                </Marquee>
                <div className={styles.instructions}>
                    <div className={styles.shape}></div>
                    <div className={styles.instructions__container}>
                        <div className={styles.text}>
                            <h3>
                                Here to help you become a great driver
                            </h3>
                            <p>Idea of denouncing pleasure and praising pain was born and will give you a complete
                                account of the system expound the actual teachings of great explorer of the truth the
                                master-builder.
                            </p>
                        </div>
                        <div className={styles.blocks}>
                            <ul className={styles.blocks_list}>
                                <li>
                                    <div className={styles.item_text}>
                                        <a href='#/'>Approved Institute</a>
                                        <p>How all this mistaken denouncing pleasure praising pain was give you great
                                            explorer.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.item_text}>
                                        <a href='#/'>Experienced & Trusted</a>
                                        <p>In a free hour, when our power of choice is and when nothing well
                                            prevents.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.item_text}>
                                        <a href='#/'>Modern Techniques</a>
                                        <p>The claims of duty or the obligations of business it will frequently occur
                                            that pleasures.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.item_text}>
                                        <a href='#/'>Trained Instructors</a>
                                        <p>Desires to obtain pain of itself because occur occasionally work
                                            circumstances.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Marquee className={styles.marquee} autoFill={true} pauseOnHover={true}>
                    <i>CYBERTECH FURTURATECH HP TECHNOLOGY DAILYNEWS ART STUDIO CYBERTECH FURTURATECH HP TECHNOLOGY
                        DAILYNEWS ART STUDIO CYBERTECH FURTURATECH HP TECHNOLOGY DAILYNEWS ART STUDIO</i>
                </Marquee>
            </div>
        </section>
    );
};
