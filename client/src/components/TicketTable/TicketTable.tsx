import { FC, useState } from 'react';
import { ITest, ITestTicket } from "../../utils/interfaces";
import { toast } from "react-toastify";
import { error, success } from "../../utils/toasts";
import { Pagination } from "../Pagination";
import { deleteTicket, fetchTicket } from "../../api/testApi";
import { MdDelete } from "react-icons/md";
import { calculateIndexes, itemsPerPage } from "../../utils/pagination";
import styles from './TicketTable.module.scss';

interface TicketTableProps {
    groupedTickets: any[];
    handleTicketClick: (ticketId: number) => void;
    refreshTickets: (tickets: ITest[]) => void;
}

export const TicketTable: FC<TicketTableProps> = ({groupedTickets, handleTicketClick, refreshTickets}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {indexOfLastItem, indexOfFirstItem} = calculateIndexes(currentPage, itemsPerPage);
    const visibleTickets = groupedTickets.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleDeleteClick = async (ticket: ITestTicket) => {
        try {
            await deleteTicket(ticket.id);
            toast.success('Ticket deleted successfully!', success);
            const updatedTickets = await fetchTicket();
            refreshTickets(updatedTickets);
        } catch (err: any) {
            toast.error(err.response?.data?.message, error);
        }
    };

    return (
        <>
            <table className={styles.table}>
                <thead className={styles.table__head}>
                <tr>
                    <th>#</th>
                    <th>Ticket Name</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className={styles.table__body}>
                {visibleTickets.map((groupedTicket, index) => (
                    <tr key={index} className={styles.item}>
                        <td>{indexOfFirstItem + index + 1}</td>
                        <td onClick={() => handleTicketClick(groupedTicket.id)}>Ticket {groupedTicket.id}</td>
                        <td>{groupedTicket.quantity}</td>
                        <td>
                            <button type='button' className={styles.remove_btn}
                                    onClick={() => handleDeleteClick(groupedTicket)}><MdDelete/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination itemsPerPage={itemsPerPage} totalItems={groupedTickets.length} paginate={paginate}
                        currentPage={currentPage}
            />
        </>
    );
};
