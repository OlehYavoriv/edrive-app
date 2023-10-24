import {
    ABOUT_ROUTE,
    CONTACT_ROUTE,
    CREATE_TEST_ROUTE,
    FAQ_ROUTE,
    HOME_ROUTE,
    TESTING_ROUTE
} from "../utils/consts";

interface navigationDataProps {
    path: string,
    title: string
}

export const navigationPublicData: navigationDataProps[] = [
    {
        path: HOME_ROUTE,
        title: "Home"
    },
    {
        path: TESTING_ROUTE,
        title: "Testing"
    },
    {
        path: ABOUT_ROUTE,
        title: "About"
    },
    {
        path: FAQ_ROUTE,
        title: "FAQ"
    },
    {
        path: CONTACT_ROUTE,
        title: "Contact"
    },
]

export const navigationPrivateData: navigationDataProps[] = [
    {
        path: CREATE_TEST_ROUTE,
        title: "Create a test"
    }
]
