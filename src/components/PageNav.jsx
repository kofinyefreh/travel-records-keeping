import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            {" "}
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

// Difference between link and navlink
// Link just navigates to the next link but Navlink gives a class (active) to style the visited tab later
