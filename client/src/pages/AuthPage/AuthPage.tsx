import { AuthForm } from "../../components/Forms/AuthForm";
import styles from './AuthPage.module.scss';

export const AuthPage = () => {
    return (
        <section className={`section ${styles.auth_section}`}>
            <div className={styles.wrapper}>
                <AuthForm/>
            </div>
        </section>
    );
};
