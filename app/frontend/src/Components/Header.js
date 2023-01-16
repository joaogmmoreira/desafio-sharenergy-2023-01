import sharenergyLogo from '../Images/logo_color.png';
import { useEffect } from "react";
import Navigation from './Navigation';
import '../Styles/Header.css';

function Header() {
  useEffect(() => {
    warning();  
  }, []);
  
  const warning = () => {
    const { pathname } = window.location;

    if (pathname !== '/') {
      return(
        <Navigation/>
      )
    }    
  }

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
      {
        warning()
      }
    </header>
  );
}

export default Header;