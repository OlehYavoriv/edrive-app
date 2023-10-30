import { $authHost, $host } from "./index";

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
