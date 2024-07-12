function Header() {

    return (
        <header className="header">
            <video autoPlay loop muted>
                <source src="./assets/videos/cover1.mp4" />
            </video>
            <h1 className="header__title glass-effect">&nbsp;&nbsp;&nbsp;&nbsp;RECIPEBOOK.IO&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <h2 className="header__slogan">Simple Ingredients, Extraordinary Flavors.</h2>
        </header>
    );
}


export default Header;