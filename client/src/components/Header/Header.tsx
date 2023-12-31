import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../index";
import { navigationPublicData } from "../../data/navData";
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "../../utils/consts";
import { decodeToken, getTokenFromLocalStorage } from "../../utils/token";
import { RiAdminFill } from "react-icons/ri";
import { IUser } from "../../utils/interfaces";
import Logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';
import { Avatar } from "../Avatar";

export const Header = observer(() => {
    const {user}: any = useContext(Context);
    const [sticky, setSticky] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const userToken = getTokenFromLocalStorage();
    const decodedToken = decodeToken(userToken) as IUser;

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenuActive = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <header className={`${styles.header} ${sticky ? styles.sticky : ''}`}>
            <div className={styles.header__container}>
                <Link to={HOME_ROUTE} className={styles.logo}>
                    <img src={Logo} alt='Edrive'/>
                </Link>
                <nav className={`${styles.navigation} ${isMenuActive ? styles.active : ''}`}>
                    <ul className={styles.navigation__list}>
                        {navigationPublicData.map((item) =>
                            <li key={item.path} className={styles.navigation__item}>
                                <NavLink to={item.path}
                                         className={({isActive}) => isActive ? `${styles.active__link}` : `${styles.navigation__link}`}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )}
                        <div className={styles.profile}>
                            {user.isAuth ? (
                                <div className={styles.profile__container}>
                                    {decodedToken.role === 'ADMIN' && (
                                        <NavLink to={ADMIN_ROUTE}
                                                 className={({isActive}) => `${isActive ? styles.active__link : styles.navigation__link} ${styles.admin_link}`}>
                                            Admin <RiAdminFill/>
                                        </NavLink>
                                    )}
                                    <Link to={PROFILE_ROUTE} className={styles.avatar}><Avatar/></Link>
                                </div>
                            ) : (
                                <Link to={LOGIN_ROUTE} className={styles.profile__auth_btn}>Login</Link>
                            )}
                        </div>
                    </ul>
                </nav>
                <button type='button' onClick={toggleMenuActive}
                        className={`${styles.burger__menu} ${isMenuActive ? styles.active : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
});
