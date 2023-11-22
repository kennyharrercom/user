import SignIn from '../../../comps/singin';
import styles from './page.module.scss'

export default function signinPage() {
    return (
        <main className={styles.main}>
            <SignIn />
        </main>
    );
}
