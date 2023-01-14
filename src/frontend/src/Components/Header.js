import { Link } from 'react-router-dom';
import sharenergyLogo from '../Images/logo_color.png';
import '../Styles/Header.css';

function Header() {
  return (
    <header>
      <div className='title'>
        <div>
          <h1>Desafio Técnico</h1>
        </div>
        <div>
          <img 
            id='sharenergyLogo' 
            alt='Sharenergy Logo' 
            src={sharenergyLogo}
          />
        </div>
      </div>
      <div className='navigation'>
        <div className='link'><Link to="/users">Users</Link></div>
        <div className='link'><Link to="/cats">Cats</Link></div>
        <div className='link'><Link to="/dogs">Dogs</Link></div>        
      </div>
    </header>
  );
}

export default Header;