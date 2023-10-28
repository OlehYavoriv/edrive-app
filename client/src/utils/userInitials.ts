import { decodeToken, getTokenFromLocalStorage } from "./token";
import {IUser} from "./interfaces";

export function getUserInitials(): string {
    const userToken = getTokenFromLocalStorage();
    const decodedToken = decodeToken(userToken) as IUser;
    const firstNameInitial = decodedToken.first_name[0];
    const lastNameInitial = decodedToken.last_name[0];

    return `${firstNameInitial}${lastNameInitial}`;
}
