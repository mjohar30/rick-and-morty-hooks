import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters'
import ThemeContext from './context/ThemeContext'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <div className={darkMode ? "App App-dark" : "App"}>
        <Header/>
        <Characters/>
        <h1>Hola Mundo</h1>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
