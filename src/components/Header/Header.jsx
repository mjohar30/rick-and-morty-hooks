import React, { useContext } from 'react';
import ThemeContext from "../../context/ThemeContext";
import FavoriteContext from "../../context/FavoriteContext";
import { ReactComponent as LightModeIcon } from '../../images/light_mode.svg'
import { ReactComponent as DarkModeIcon } from '../../images/dark_mode.svg'
import rickAndMortyLogo from "../../images/rick-and-morty-logo.png"
import './header.css'

const Header = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  const {favorites, dispatch} = useContext(FavoriteContext)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header className="header">
      <img className="header_title" src={rickAndMortyLogo} alt=""/>
      {/* <h1 className="header_title">ReactHooks/Rick and Morty API</h1> */}
      <div className="header_options">
        <span>
          <span className="header_badge"> {favorites.favorites.length}</span>
          Favoritos
        </span>
        {darkMode ? <DarkModeIcon id="dark-mode" className='mode-icon' onClick={handleClick}/>
          : <LightModeIcon id="light-mode" className='mode-icon' onClick={handleClick}/>
        }
      </div>
    </header>
  );
};

export default Header;