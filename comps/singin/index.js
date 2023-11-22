import styles from './styles.module.scss';
import Link from 'next/link';
export default function SignIn() {
    return (
        <div className={styles.signUp}>
                <h1>Sign In</h1>
                <div className={styles.formContents}>
                    <button>Passkey Sign In</button>
                    <p>or</p>
                    <Link href='/register'><button>Register</button></Link>
                </div>
        </div>
    );
}
