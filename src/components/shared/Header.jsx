import styles from './Header.module.css';
import heroVideo from '../../assets/videos/hero_video.mp4';

function Header() {

    return (
        <header className={styles.header}>
            <video autoPlay loop muted>
                <source src={heroVideo} />
            </video>
            <div className={styles["header__title"]}>
                <h1 >RECIPEBOOK.IO</h1>
            </div>
            <div className={styles["header__slogan"]}>
                <h2 >Simple Ingredients, Extraordinary Flavors.</h2>
            </div>
            <div>
                <button className={styles["header__button"]}>Get Started</button>
            </div>
            
        </header>
    );
}


export default Header;