import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../../index";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../../utils/consts";
import { login, registration } from "../../../api/userApi";
import { error, success } from "../../../utils/toasts";
import { BiHide, BiShow } from "react-icons/bi";
import useInput from "../../../hooks/useInput";
import styles from './AuthForm.module.scss';

export const AuthForm = observer(() => {
    const {user}: any = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const auth = {
        email: useInput('', {isEmpty: true, isEmail: true, minLength: 1}),
        firstName: useInput('', {isEmpty: true, minLength: 3}),
        lastName: useInput('', {isEmpty: true, minLength: 3}),
        password: useInput('', {isEmpty: true, minLength: 6, maxLength: 12})
    };

    let isDisabled;
    if (isLogin) {
        isDisabled = !auth.email.inputValid || !auth.password.inputValid;
    } else {
        isDisabled = !auth.email.inputValid || !auth.password.inputValid || !auth.firstName.inputValid || !auth.lastName.inputValid;
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(auth.email.value, auth.password.value);
            } else {
                data = await registration(auth.firstName.value, auth.lastName.value, auth.email.value, auth.password.value);
            }

            user.setUser(data);
            user.setIsAuth(true);
            navigate(HOME_ROUTE);
            toast.success("Welcome to Edrive!", success);
        } catch (err: any) {
            toast.error(err.response.data.message, error)
        }
    };

    return (
        <form className={styles.form}>
            <h2 className={styles.form__title}>{isLogin ? 'Login' : 'Registration'}</h2>
            {!isLogin && (
                <div className={styles.username_container}>
                    <div className={styles.form__input_container}>
                        <label className={styles.form__label}>First Name</label>
                        <input
                            className={styles.form__input}
                            name="first_name"
                            type="text"
                            placeholder="Enter First Name"
                            value={auth.firstName.value}
                            onChange={(e) => auth.firstName.onChange(e)}
                            onBlur={(e) => auth.firstName.onBlur(e)}
                        />
                        {auth.firstName.isDirty && (
                            <p className={styles.form__error}>
                                {auth.firstName.isEmpty && 'Required! '}
                                {auth.firstName.minLengthError && 'First name should be at least 3 characters'}
                            </p>
                        )}
                    </div>
                    <div className={styles.form__input_container}>
                        <label className={styles.form__label}>Last Name</label>
                        <input
                            className={styles.form__input}
                            name="last_name"
                            type="text"
                            placeholder="Enter Last Name"
                            value={auth.lastName.value}
                            onChange={(e) => auth.lastName.onChange(e)}
                            onBlur={(e) => auth.lastName.onBlur(e)}
                        />
                        {auth.lastName.isDirty && (
                            <p className={styles.form__error}>
                                {auth.lastName.isEmpty && 'Required! '}
                                {auth.lastName.minLengthError && 'Last name should be at least 3 characters'}
                            </p>
                        )}
                    </div>
                </div>
            )}
            <div className={styles.form__input_container}>
                <label className={styles.form__label}>Email</label>
                <input
                    className={styles.form__input}
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={auth.email.value}
                    onChange={(e) => auth.email.onChange(e)}
                    onBlur={(e) => auth.email.onBlur(e)}
                />
                {auth.email.isDirty && (
                    <p className={styles.form__error}>
                        {auth.email.isEmpty && 'Required! '}
                        {auth.email.emailError && 'Invalid email format'}
                    </p>
                )}
            </div>
            <div className={styles.form__input_container}>
                <label className={styles.form__label}>Password</label>
                <input
                    className={styles.form__input}
                    name="password"
                    placeholder="Enter Password"
                    type={showPassword ? 'text' : 'password'}
                    value={auth.password.value}
                    onChange={(e) => auth.password.onChange(e)}
                    onBlur={(e) => auth.password.onBlur(e)}
                />
                {auth.password.isDirty && (
                    <p className={styles.form__error}>
                        {auth.password.isEmpty && 'Required! '}
                        {auth.password.minLengthError && 'Password length must be at least 6 characters'}
                    </p>
                )}
                <button type='button' onClick={togglePasswordVisibility} className={styles.visible__btn}>
                    {showPassword ? <BiHide/> : <BiShow/>}
                </button>
            </div>
            <button className={styles.form__submit} type="button" disabled={isDisabled}
                    style={{cursor: isDisabled ? 'not-allowed' : 'pointer'}} onClick={click}>
                {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
            <div className={styles.redirect}>
                {isLogin ? (
                    <p>Don’t have an account? <Link to={REGISTRATION_ROUTE}>Sign up</Link></p>
                ) : (
                    <p>Already a member? <Link to={LOGIN_ROUTE}>Sign In</Link></p>
                )}
            </div>
        </form>
    );
});
