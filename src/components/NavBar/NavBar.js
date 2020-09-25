import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import styles from "./NavBar.module.scss";
import routes from "../../routes";


class NavBar extends Component {
  render() {
    return (
      <div className={styles.header}>
        <header className="container">
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <NavLink
                  to={routes.home}
                  className={styles.navLink}
                  activeClassName={styles.activeNavLink}
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navListItem}>
                <NavLink
                  to={routes.movies}
                  className={styles.navLink}
                  activeClassName={styles.activeNavLink}
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default NavBar;