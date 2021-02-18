import React, { useContext } from 'react';
import ThemeContext from "../context/ThemeContext";
import './header.css'

const Header = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="header">
      <h1 className="header_title">React Hooks - Rick and Morty API</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
      {/* <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Dark Mode 2' : 'Light Mode 2'}
      </button> */}
    </div>
  );
};


export default Header;