'use client';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function SignUp() {
    async function handleSignUp(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const inviteCode = formData.get('invitecode')
    }

    return (
        <div className={styles.signUp}>
            <form onSubmit={handleSignUp}>
                <h1>Sign Up</h1>
                <div className={styles.formContents}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="invitecode">Invite Code</label>
                        <input type="text" id="invitecode" name="invitecode" placeholder='invite code'></input>
                    </div>

                    <button>Register</button>
                    <p className={styles.note}>
                        * This requires a physical auth key such as a yubikey.
                    </p>

                    <p>or</p>

                    <Link href='/signin'><button>Sign In</button></Link>
                </div>
            </form>
        </div>
    );
}
