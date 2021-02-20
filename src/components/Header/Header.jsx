import React, { useContext } from 'react';
import ThemeContext from "../../context/ThemeContext";
import FavoriteContext from "../../context/FavoriteContext";
import './header.css'

const Header = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  const {favorites, dispatch} = useContext(FavoriteContext)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header className="header">
      <h1 className="header_title">ReactHooks/Rick and Morty API</h1>
      <div className="header_options">
        <span>
          <span className="header_badge"> {favorites.favorites.length}</span>
          Favoritos
        </span>
        <button type="button" onClick={handleClick}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
      {/* <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Dark Mode 2' : 'Light Mode 2'}
      </button> */}
    </header>
  );
};


export default Header;