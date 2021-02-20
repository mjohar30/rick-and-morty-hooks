import React, { useState, useReducer } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Characters from './components/Characters/Characters'
import ThemeContext from './context/ThemeContext'
import FavoriteContext from './context/FavoriteContext'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const initialState = {
    favorites: []
  }  
  const favoriteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        }
      case 'REMOVE_FAVORITE':
        return {
          ...state, 
          favorites: state.favorites.filter(favorite => favorite.id !== action.payload.id)
        }
      default:
        return state
    }
  }

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <FavoriteContext.Provider value={{favorites, dispatch}}>
        <div className={darkMode ? "App App-dark" : "App"}>
          <Header/>
          <Characters/>
        </div>
      </FavoriteContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
