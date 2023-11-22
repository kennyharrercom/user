import SignUp from '../../../comps/signup';
import styles from './page.module.scss'


export default function RegisterPage() {
    return (
        <main className={styles.main}>
            <SignUp />
        </main>
    );
}
