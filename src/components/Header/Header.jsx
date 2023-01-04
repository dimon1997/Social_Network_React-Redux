import s from './Header.module.css';
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.img} src={logo} alt='123'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login 
                :<NavLink to={'/login'}>Login</NavLink>
                }
                
            </div>
        </header> 
    );
}

export default Header;