export interface IUser {
    uid?: number
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    iat?: number;
    exp?: number;
}

export interface ITopic {
    topic_id: number;
    title: string;
}

export interface TopicTableProps {
    topics: ITopic[];
    refreshTopics: (topics: ITopic[]) => void;
}

export interface Answer {
    answer_text: string;
    is_correct: boolean;
}

export interface ITest {
    file: File | null;
    question: string;
    selectedTopic: string;
    answers: Answer[];
}

export interface IQuestion {
    test_id: number;
    question: string;
    topicTopicId: number;
    image: string;
    TestAnswers: Answer[];
}

export interface ITestTicket {
    id: number;
    createdAt: string;
    updatedAt: string;
    testTestId: number;
    ticketTicketId: number;
}

export interface CustomTicketModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    questions: IQuestion[];
}

export interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}
