import React, { useEffect, useContext} from "react";
import { AuthContext } from "../Contexts/Auth";
import sharenergyLogo from '../Images/logo_color.png';
import Navigation from './Navigation';
import '../Styles/Header.css';

function Header() {
  useEffect(() => {
    navigationButtons();  
  }, []);

  const { logout } =  useContext(AuthContext);

  const handleLogout = () => {
    logout();
   }
  
  const navigationButtons = () => {
    const { pathname } = window.location;

    if (pathname !== '/login') {
      return(
        <div className="logoutHeader">
          <Navigation/>
          <div className="logoutButton">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
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
        navigationButtons()
      }
    </header>
  );
}

export default Header;
