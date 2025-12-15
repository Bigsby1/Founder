import { Link } from "react-router-dom";
import s from "./Header.module.scss";

function Header({ isAuthenticated }) {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <div className={s.logo}>GetStarted</div>
          <ul className={s.navLinks}>
            <li>
              <Link to="#">Match</Link>
            </li>
            <li>
              <Link to="#">Explore</Link>
            </li>
            <li>
              <Link to="#">Projects</Link>
            </li>
            <li>
              <Link to={isAuthenticated ? "/profile" : "/signup"}>
                {isAuthenticated ? "My Profile" : "Sign up"}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
