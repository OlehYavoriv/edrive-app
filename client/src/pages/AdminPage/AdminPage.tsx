import { Link } from "react-router-dom";
import { CREATE_TEST_ROUTE, CREATE_TOPIC_ROUTE } from "../../utils/consts";

export const AdminPage = () => {
    return (
        <section className='section'>
            {/*admin page template*/}
            AdminPage
            <Link to={CREATE_TOPIC_ROUTE}>topic</Link>
            <Link to={CREATE_TEST_ROUTE}>TEST</Link>
        </section>
    );
};
