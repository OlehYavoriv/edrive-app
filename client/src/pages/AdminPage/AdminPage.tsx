import { CREATE_TEST_ROUTE, CREATE_TICKET_ROUTE, CREATE_TOPIC_ROUTE } from "../../utils/consts";
import { AdminNavigationCard } from "../../components/AdminNavigationCard";
import CreateTopicImg from '../../assets/images/create-topic.svg';
import CreateTestImg from '../../assets/images/create-test.svg';
import CreateTicketImg from '../../assets/images/create-ticket.svg';
import styles from './AdminPage.module.scss';

export const AdminPage = () => {
    return (
        <section className={`section ${styles.wrapper}`}>
            <div className='container'>
                <h3 className={styles.title}>Welcome to Admin Panel</h3>
                <AdminNavigationCard title={'Create Topic'} src={CreateTopicImg} path={CREATE_TOPIC_ROUTE}/>
                <AdminNavigationCard title={'Create Test'} src={CreateTestImg} path={CREATE_TEST_ROUTE}/>
                <AdminNavigationCard title={'Create Ticket'} src={CreateTicketImg} path={CREATE_TICKET_ROUTE}/>
            </div>
        </section>
    );
};
