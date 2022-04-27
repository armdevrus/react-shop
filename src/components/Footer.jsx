function Footer() {
    return (
        <footer className="#42a5f5 blue lighten-1 page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/armdevrus/react-shop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
