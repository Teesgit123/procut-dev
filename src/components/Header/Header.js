import './Header.scss';
import Logo from "../../public/company-logo.png";
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
          <Link to="/" className="header__link header__link--home">
            <img
              className='header__logo'
              src={Logo}/>
          </Link>


          <nav className='header__nav'>
            
          </nav>
        </header>
    )
};


export default Header;