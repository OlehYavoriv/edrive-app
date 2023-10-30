import { makeAutoObservable } from 'mobx';
import { ITopic } from "../utils/interfaces";

export default class TestStore {
    _topics: ITopic[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setTopics(topics: ITopic[]) {
        this._topics = topics;
    }

    get topics(): ITopic[] {
        return this._topics;
    }
}
