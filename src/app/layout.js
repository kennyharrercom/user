import './globals.scss';
import 'normalize.css/normalize.css';

export const metadata = {
    title: 'user authentication and management',
    description: "kennyharrer's user authentication and management",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
