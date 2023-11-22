import SignUp from '../../comps/signup';
import SignIn from '../../comps/singin';
import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={styles.main}>
            <SignIn />
        </main>
    );
}
