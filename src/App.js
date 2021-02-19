import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Characters from './components/Characters/Characters'
import ThemeContext from './context/ThemeContext'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <div className={darkMode ? "App App-dark" : "App"}>
        <Header/>
        <Characters/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
