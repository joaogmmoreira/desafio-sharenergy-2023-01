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
    </header>
  );
}

export default Header;