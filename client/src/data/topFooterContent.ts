import { ABOUT_ROUTE, CONTACT_ROUTE, FAQ_ROUTE } from "../utils/consts";

interface topFooterContentProps {
    link: string,
    title: string
}

export const ourCompanySection: topFooterContentProps[] = [
    {
        link: ABOUT_ROUTE,
        title: "About Us"
    },
    {
        link: '#Team',
        title: "Team"
    },
    {
        link: '#Services',
        title: "Services"
    },
    {
        link: CONTACT_ROUTE,
        title: "Contact"
    },
    {
        link: '#Testimonials',
        title: "Testimonials"
    },
]

export const essentialLinksSection: topFooterContentProps[] = [
    {
        link: FAQ_ROUTE,
        title: "FAQ"
    },
    {
        link: '#Change-statistics',
        title: "Change statistics"
    },
    {
        link: '#Driver-legislation',
        title: "Driver legislation"
    },
    {
        link: '#Learning-theory',
        title: "Learning theory"
    },
    {
        link: '#Reference-books',
        title: "Reference books"
    },
]

export const usefulSection: topFooterContentProps[] = [
    {
        link: '#Video-lesson',
        title: "Video lessons on traffic rules"
    },
    {
        link: '#Road-sings',
        title: "Road Signs"
    },
    {
        link: '#News',
        title: "News"
    },
    {
        link: '#Driving-test',
        title: "Driving test"
    },
    {
        link: '#Question',
        title: "Suggest your question"
    },
]
