import styles from './Header.module.css';
import heroVideo from '../../assets/videos/hero_video.mp4';

function Header() {

    return (
        <header className={styles.header}>
            <video autoPlay loop muted>
                <source src={heroVideo} />
            </video>
            <h1 className={styles["header__title"]}>&nbsp;&nbsp;&nbsp;&nbsp;RECIPEBOOK.IO&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <h2 className={styles["header__slogan"]}>Simple Ingredients, Extraordinary Flavors.</h2>
        </header>
    );
}


export default Header;