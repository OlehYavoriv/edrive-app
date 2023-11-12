import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { decodeToken, getTokenFromLocalStorage } from "../../utils/token";
import { IUser } from "../../utils/interfaces";
import { useContext, useEffect, useState } from "react";
import { fetchUserProgress } from "../../api/testApi";
import { ProgressCircle } from "../../components/ProgressCircle";
import { getUserInitials } from "../../utils/userInitials";
import { HiOutlineLogout } from "react-icons/hi";
import { HOME_ROUTE } from "../../utils/consts";
import styles from './ProfilePage.module.scss';

interface Progress {
    userUid: number;
    progress: number;
    correct: number;
    ticketTicketId: number;
}

interface ProgressCalculation {
    rating: number;
    correctCount: number;
    passedTickets: number;
}

export const ProfilePage = observer(() => {
    const {user}: any = useContext(Context);
    const navigate = useNavigate()
    const userToken = getTokenFromLocalStorage();
    const decodedToken = decodeToken(userToken) as IUser;
    const avatarText = getUserInitials();
    const [userProgress, setUserProgress] = useState<Progress[]>([]);

    useEffect(() => {
        const loadUserProgress = async () => {
            try {
                if (decodedToken && decodedToken.uid) {
                    const responseData = await fetchUserProgress(decodedToken.uid);

                    if (responseData != null) {
                        setUserProgress(responseData.userProgress);
                    }
                }
            } catch (error) {
                console.error("Error fetching user progress:", error);
            }
        };
        loadUserProgress()
    }, [decodedToken]);

    const calculateProgress = (userProgress: Progress[]): ProgressCalculation => {
        const totalProgress = userProgress.reduce((sum, progress) => sum + progress.progress, 0);
        const totalCorrectCount = userProgress.reduce((sum, progress) => sum + progress.correct, 0);
        const passedTickets = userProgress.filter((progress) => progress.ticketTicketId !== null).length;
        const overallRating = totalProgress / userProgress.length;

        return {
            rating: parseFloat(overallRating.toFixed(2)),
            correctCount: totalCorrectCount,
            passedTickets: passedTickets,
        };
    };

    const {rating: overallRating, correctCount, passedTickets}: ProgressCalculation = calculateProgress(userProgress);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token')
        navigate(HOME_ROUTE)
    }
    return (
        <section className='section'>
            <div className='container'>
                <div className={styles.top}>
                    <h3 className='user-page_title'>Profile:</h3>
                    <button type='button' onClick={logOut}><HiOutlineLogout/></button>
                </div>
                <div className={styles.wrapper}>
                    <span className={styles.avatar}>{avatarText}</span>
                    <div className={styles.user_info}>
                        <p className={styles.username}>{decodedToken.first_name} {decodedToken.last_name}</p>
                        <p className={styles.email}><i>{decodedToken.email}</i></p>
                        <div className={styles.user_info__progress}>
                            <h4>Your Progress:</h4>
                            <p><b>Passed Tickets:</b> {passedTickets}</p>
                            <p><b>Total Correct Answers:</b> {correctCount}</p>
                            <div className={styles.circle}>
                                <ProgressCircle percentage={Number(overallRating)} colour='#ebc405'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
