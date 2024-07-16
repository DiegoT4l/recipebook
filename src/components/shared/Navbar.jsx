import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles["navbar__title"]}>
                <a href="#">RECIPEBOOK.IO</a>
            </div>

            <button className={styles.burger} id="hamburger">☰</button>
            <ul className="glass-effect">
                <li>
                    <a href="#">Recipe Book</a>
                </li>
                <li className={styles.addRecipe}>
                    <a href="#">Create Recipe</a>
                </li>
                <li className={styles.myRecipes}>
                    <a href="#">My Recipes</a>
                </li>
                <li>
                    <a href="#">
                        <button className={styles.userBtn}>
                            <div className={styles["userBtn__sign"]}>
                                <svg viewBox="0 0 512 512">
                                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                                </svg>
                            </div>
                            <div className={styles["userBtn__text"]}>LogOut</div>
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;