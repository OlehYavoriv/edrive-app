import {$authHost, $host} from "./index";

export const createTopic = async (title: any) => {
    const {data} = await $authHost.post('api/topic', title);
    return data
};

export const fetchTopic = async () => {
    const {data} = await $host.get('api/topic');
    return data
};

export const deleteTopic = async (topicId: number) => {
    await $authHost.delete(`api/topic/${topicId}`);
};

export const createTest = async (test: any) => {
    const {data} = await $authHost.post("api/question/", test);
    return data
}

export const fetchQuestion = async () => {
    const {data} = await $authHost.get("api/question/");
    return data
}

export const createTicket = async (ticket: any) => {
    const {data} = await $authHost.post("api/ticket/", ticket);
    return data
}

export const fetchTicket = async () => {
    const {data} = await $authHost.get("api/ticket/");
    return data
}

export const deleteTicket = async (ticketId: number) => {
    await $authHost.delete(`api/ticket/${ticketId}`);
};
