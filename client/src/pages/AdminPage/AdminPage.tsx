import { Link } from "react-router-dom";
import { CREATE_TOPIC_ROUTE } from "../../utils/consts";

export const AdminPage = () => {
    return (
        <section className='section'>
            {/*admin page template*/}
            AdminPage
            <Link to={CREATE_TOPIC_ROUTE}>topic</Link>
        </section>
    );
};
