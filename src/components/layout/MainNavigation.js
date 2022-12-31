import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.mwidth}>
        <div className={classes.logo}>
          <div>Quote dong!</div>
          <div className={classes.author}>by Bima Ryan A</div>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/quotes" activeClassName={classes.active}>
                All Quotes
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-quote" activeClassName={classes.active}>
                Add a Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
