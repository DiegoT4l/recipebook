import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-container']}>
                <div className={styles['footer-content']}>
                    <a href="#" className={styles['footer__head--link']}>
                        <span className={styles['footer__head--title']}>Recipebook.io</span>
                    </a>
                    <ul className={styles['footer__navbar']}>
                        {['About', 'Privacy Policy', 'Licensing', 'Contact'].map((item, index) => (
                            <li key={index}>
                                <a href="#" className={styles['footer__navbar--link']}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr className={styles['footer__divisor']} />
                <span className={styles['footer__copyrigth']}>© 2023 <a href="#" class="hover:underline">Recipebook.io™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;