import styles from './../styles/header.module.css';
import { IoCartSharp } from 'react-icons/io5';

const Header = () => {
    return (
        <nav className={styles.menu}>
            <section className={styles.menu_wrapper}>
                <h2 className={styles.logo}>TROVE.</h2>
                <section>
                    <ul className={styles.menu_items}>
                        <li className={styles.item}><a className={styles.menu_links} href="/">Home</a></li>
                        <li className={styles.item}><a className={styles.menu_links} href="/categories">Categories</a></li>
                        <li className={styles.item}><a className={styles.menu_links} href="/men">Men</a></li>
                        <li className={styles.item}><a className={styles.menu_links} href="/women">Women</a></li>
                        <li className={styles.item}><a href="/cart"><IoCartSharp className={styles.cart} /></a></li>
                        <li className={styles.item}><button className={styles.login} href="/cart">LOGIN / SIGNUP</button></li>
                    </ul>
                </section>
            </section>
        </nav>
    );
}

export default Header;