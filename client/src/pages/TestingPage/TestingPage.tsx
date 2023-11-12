import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { EXAM_TEST_ROUTE } from "../../utils/consts";
import testing from '../../assets/lottie/testing.json';
import styles from './TestingPage.module.scss';

export const TestingPage = () => {
    return (
        <section className='section'>
            <div className='container'>
                <h3 className='user-page_title'>Testing</h3>
                <Link to={EXAM_TEST_ROUTE} className={styles.link}>
                    <p>Tests</p>
                    <Lottie className={styles.placeholder} animationData={testing} loop={true}
                            autoplay={true}/>
                </Link>
            </div>
        </section>
    );
};
