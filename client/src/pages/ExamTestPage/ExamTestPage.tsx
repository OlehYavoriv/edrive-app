import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import trafficLight from '../../assets/lottie/traffic-light.json';
import { fetchTicket } from "../../api/testApi";
import { EXAM_TEST_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import styles from './ExamTestPage.module.scss';

interface SelectedTicketProps {
    ticketTicketId: number;
}

export const ExamTestPage = observer(() => {
    const itemsPerPage = 6;
    const [allTickets, setAllTickets] = useState<any[]>([]);
    const [visibleTickets, setVisibleTickets] = useState(itemsPerPage);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTicket()
            .then((data) => {
                const uniqueTickets: any = {};
                data.forEach((ticket: any) => {
                    const {ticketTicketId, testTestId} = ticket;
                    if (!uniqueTickets[ticketTicketId]) {
                        uniqueTickets[ticketTicketId] = {...ticket, testTestId: [testTestId]};
                    } else {
                        if (!uniqueTickets[ticketTicketId].testTestId.includes(testTestId)) {
                            uniqueTickets[ticketTicketId].testTestId.push(testTestId);
                        }
                    }
                });

                const uniqueTicketsArray = Object.values(uniqueTickets);
                setAllTickets(uniqueTicketsArray);
            })
            .catch((error) => {
                console.error("Error fetching tickets:", error);
            });
    }, []);

    const handleLoadMore = () => {
        setVisibleTickets((prev) => prev + itemsPerPage);
    };

    const handleTicketSelection = (selectedTicket: SelectedTicketProps) => {
        navigate(`${EXAM_TEST_ROUTE}/${selectedTicket.ticketTicketId}`);
    };

    return (
        <section className='section'>
            <div className='container'>
                <h3 className='user-page_title'>All Tickets</h3>
                <ul className={styles.list}>
                    {allTickets.slice(0, visibleTickets).map((ticket, index) => (
                        <li key={index} className={styles.list__item} onClick={() => handleTicketSelection(ticket)}>
                            <h4><b>Ticket №:</b> {ticket.ticketTicketId}</h4>
                            <p><b>Questions:</b> {ticket.testTestId.length}</p>
                            <Lottie className={styles.placeholder} animationData={trafficLight} loop={true}
                                    autoplay={true}/>
                        </li>
                    ))}
                </ul>
                {visibleTickets < allTickets.length && (
                    <button className={styles.load_more__btn} onClick={handleLoadMore}>Load More</button>
                )}
            </div>
        </section>
    );
});
