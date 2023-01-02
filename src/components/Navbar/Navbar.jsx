import s from "./Navbar.module.css";
import {Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={s.globalNav}>
      <nav className={s.nav}>
        <div className={s.item}>
          <Link to="/profile" className={s.active}>Profile</Link>
        </div>
        <div className={s.item}>
          <Link to="/users" className={s.active}>Users</Link>
        </div>
        <div className={s.item}>
          <Link to="/dialogs" className={s.active}>Messages</Link>
        </div>
        <div className={s.item}>
          <Link to="/news" className={s.active}>News</Link>
        </div>
        <div className={s.item}>
          <Link to="/music" className={s.active}>Music</Link>
        </div>
        <div className={s.item}>
          <Link to="/settings" className={s.active}>Settings</Link>
        </div>
      </nav>
    </div>
      
  );
};

export default Navbar;
