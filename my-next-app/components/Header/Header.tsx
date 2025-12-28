import css from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={css.header}>
            <Link href='/' aria-label='Home'>
                NoteHub
            </Link>
            <nav aria-label='Main Navigation'>
                <ul className={css.navigation}>
                    <Link href='/'>Home</Link>
                    <Link href='/notes'>Notes</Link>
                    <Link href='/profile'>Profile</Link>
                    <Link href='/about'>About</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;