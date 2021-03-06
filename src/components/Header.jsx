function Header() {
    return (
        <nav className="#42a5f5 blue lighten-1">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">
                    Fortnite Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/armdevrus/react-shop"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
