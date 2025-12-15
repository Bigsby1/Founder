import './Header.css'

function Header() {
    return(
    <>
        <header>
            <nav>
                <div className="logo">GetStarted</div>
                <ul className="nav-links">
                    <li><a href="#">Match</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">My Profile</a></li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header