import { PageBgLayer } from "../../components/PageBgLayer";
import { FaqAccordion } from "../../components/FAQAccordion";
import styles from './FaqPage.module.scss';

export const FaqPage = () => {
    return (
        <section className='section'>
            <PageBgLayer title={`FAQ's`}/>
            <div className='container'>
                <div className={styles.top_box}>
                    <span className={styles.big_text}>q&a</span>
                    <div className={styles.section_title}>
                        <h2>
                            Find answers in our
                            <br/>
                            list of frequently asked questions
                        </h2>
                    </div>
                </div>
                <FaqAccordion/>
            </div>
        </section>
    );
};
