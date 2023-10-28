import { getUserInitials } from "../../utils/userInitials";
import styles from './Avatar.module.scss';

export const Avatar = () => {
    const avatarText = getUserInitials();

    return (
        <span className={styles.avatar}>
            {avatarText}
        </span>
    );
};
