import s from './Header.module.css';
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img} src={logo} alt='123'/>
        </header> 
    );
}

export default Header;