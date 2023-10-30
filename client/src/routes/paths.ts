import React from "react";
import {
    ABOUT_ROUTE, CONTACT_ROUTE,
    CREATE_TEST_ROUTE, CREATE_TOPIC_ROUTE, FAQ_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    TESTING_ROUTE
} from "../utils/consts";
import {AdminPage} from "../pages/AdminPage";
import {ProfilePage} from "../pages/ProfilePage";
import {HomePage} from "../pages/HomePage";
import {AuthPage} from "../pages/AuthPage";
import {TestingPage} from "../pages/TestingPage";
import {FaqPage} from "../pages/FaqPage";
import {AboutPage} from "../pages/AboutPage";
import {ContactPage} from "../pages/ContactPage";
import {CreateTopicPage} from "../pages/CreateTopicPage";

interface IRoute {
    path: string,
    Component: React.FC<any>;
}

export const authRoutes: IRoute[] = [
    {
        path: CREATE_TEST_ROUTE,
        Component: AdminPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    }
]

export const publicRoutes: IRoute[] = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
    {
        path: TESTING_ROUTE,
        Component: TestingPage
    },
    {
        path: FAQ_ROUTE,
        Component: FaqPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
    {
        path: CONTACT_ROUTE,
        Component: ContactPage
    }
]

export const adminRoutes: IRoute[] = [
    {
        path: CREATE_TOPIC_ROUTE,
        Component: CreateTopicPage
    },
]
