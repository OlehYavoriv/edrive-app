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
