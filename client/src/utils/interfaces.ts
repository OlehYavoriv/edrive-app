export interface IUser {
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
