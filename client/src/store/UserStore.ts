import { makeAutoObservable } from "mobx";

interface IUser {
    first_name?: string,
    last_name?: string,
    email?: string,
    password?: string,
    role?: string
}

export default class UserStore {
    _user: {};
    _isAuth: boolean;

    constructor() {
        this._user = {}
        this._isAuth = false;
        makeAutoObservable(this)
    }

    setUser(user: IUser) {
        this._user = user
    }

    setIsAuth(boolean: boolean) {
        this._isAuth = boolean
    }

    get user() {
        return this._user
    }

    get isAuth() {
        return this._isAuth
    }
}
