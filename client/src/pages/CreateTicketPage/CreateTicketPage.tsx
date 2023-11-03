import {useEffect, useContext, useState} from 'react';
import {Context} from '../../index';
import {createTicket, fetchQuestion, fetchTicket} from '../../api/testApi';
import {observer} from 'mobx-react-lite';
import {toast} from 'react-toastify';
import {error, success} from '../../utils/toasts';
import {TicketModal} from "../../components/Modals/TicketModal";
import {IQuestion, ITestTicket} from "../../utils/interfaces";
import styles from './CreateTicketPage.module.scss'
import {TicketTable} from "../../components/TicketTable";

export const CreateTicketPage = observer(() => {
    const {test}: any = useContext(Context);
    const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchQuestion().then((data) => {
            test.setTestQestions(data);
        });
        fetchTicket().then((data) => {
            test.setTickets(data);
        });
    }, [test]);

    const handleCheckboxChange = (questionId: number) => {
        setSelectedQuestionIds((prevSelectedIds) => {
            if (prevSelectedIds.includes(questionId)) {
                return prevSelectedIds.filter((id) => id !== questionId);
            } else {
                return [...prevSelectedIds, questionId];
            }
        });
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const groupAndCalculateQuantities = (tickets: any[]) => {
        const groupedTickets: { [key: number]: { id: number; quantity: number } } = {};

        tickets.forEach((ticket) => {
            const ticketTicketId = ticket.ticketTicketId;

            if (!groupedTickets[ticketTicketId]) {
                groupedTickets[ticketTicketId] = {
                    id: ticketTicketId,
                    quantity: 0,
                };
            }

            groupedTickets[ticketTicketId].quantity++;
        });

        return Object.values(groupedTickets);
    };

    const groupedTickets = groupAndCalculateQuantities(test.tickets);
    const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null);

    const handleTicketClick = (ticketId: number) => {
        setSelectedTicketId(ticketId);
    };

    const refreshTickets = async () => {
        const updatedTickets = await fetchTicket();
        test.setTickets(updatedTickets);
    };

    const addTicket = async () => {
        try {
            const formData = new FormData();
            formData.append('testIds', JSON.stringify(selectedQuestionIds));

            await createTicket(formData);

            toast.success('Ticket created successfully!', success);
        } catch (err: any) {
            toast.error(err.response.data.message, error);
        }
    };

    return (
        <section className={`section ${styles.wrapper}`}>
            <div className="container">
                <form className={styles.form}>
                    <input
                        type="text"
                        className={styles.search_input}
                        placeholder="Search questions"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <table className={styles.table}>
                        <thead className={styles.table__head}>
                        <tr>
                            <th>#</th>
                            <th>Topic ID</th>
                            <th>Question</th>
                            <th>Select</th>
                        </tr>
                        </thead>
                        <tbody className={styles.table__body}>
                        {test.questions
                            .filter((question: IQuestion) =>
                                question.question.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((question: IQuestion, index: number) => (
                                <tr key={index}>
                                    <td>{question.test_id}</td>
                                    <td>{question.topicTopicId}</td>
                                    <td>{question.question}</td>
                                    <td>
                                        <input type="checkbox" className={styles.checkbox} onChange={() => handleCheckboxChange(question.test_id)}
                                               checked={selectedQuestionIds.includes(question.test_id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className={styles.send_btn} onClick={addTicket}>
                        Create ticket
                    </button>
                </form>
                <TicketTable groupedTickets={groupedTickets} handleTicketClick={handleTicketClick}
                             refreshTickets={refreshTickets}/>
            </div>
            <TicketModal isOpen={selectedTicketId !== null}
                         questions={test.tickets.filter((ticket: ITestTicket) => ticket.ticketTicketId === selectedTicketId).map((ticket: ITestTicket) => test.questions.find((question: IQuestion) => question.test_id === ticket.testTestId))}
                         onRequestClose={() => setSelectedTicketId(null)}/>
        </section>
    );
});
