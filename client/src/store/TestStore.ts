import { makeAutoObservable } from 'mobx';
import { IQuestion, ITestTicket, ITopic } from "../utils/interfaces";

export default class TestStore {
    _topics: ITopic[] = [];
    _questions: IQuestion[] = [];
    _tickets: ITestTicket[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setTestQestions(questions: IQuestion[]) {
        this._questions = questions;
    }

    setTickets(tickets: ITestTicket[]) {
        this._tickets = tickets;
    }

    setTopics(topics: ITopic[]) {
        this._topics = topics;
    }

    get topics(): ITopic[] {
        return this._topics;
    }

    get questions(): any {
        return this._questions;
    }

    get tickets(): any {
        return this._tickets;
    }
}
