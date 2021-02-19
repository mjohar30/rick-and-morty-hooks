import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from './Search';
import useCharacters from '../hooks/useCharacters'
import { ReactComponent as FavoriteIcon } from '../images/favorite.svg'
import { ReactComponent as FavoriteBorderIcon } from '../images/favorite_border.svg'
import './characters.css'

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

const initialState = {
  favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/'

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }  
    default:
      return state
  }
}

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  const characters = useCharacters(API)

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
  }

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value)
  // }

  const handleSearch = useCallback(
    () => {
      setSearch(searchInput.current.value)
    },
    [],
  );

  // const filteredUsers = characters.filter(user => {
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // })

  const filteredUsers = useMemo(() => 
    characters.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    }),
    [characters, search]
  )

  return (
    <>
      <div className="favorite_characters">
        {favorites.favorites.length > 0 && <h1>Favorite Characters</h1>}
        {favorites.favorites.map(favorite => (
          <>
          <li key={favorite.id}>
            {favorite.name}
          </li>
          </>
        ))}
      </div>
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
      <div className="characters">
        {filteredUsers.map(character => (
          <div className="character" key={character.id}>
            <h2>{character.name}</h2>
            <div>
              <img src={character.image} alt={character.name} />
              <div className="hidden-container">
                <div className="hidden-text">
                  <span style={{fontWeight: 'bold'}}>Status: </span>
                  {character.status === 'Dead' ? <Emoji symbol="💀" label="dead"/>
                  : character.status === 'Alive' ? <Emoji symbol="👌" label="alive"/>
                  : <Emoji symbol="❓" label="unknown"/>}
                  {character.status}
                </div>
                <div className="hidden-text">
                  <span style={{fontWeight: 'bold'}}>Gender: </span>
                  {character.gender}
                </div>
                <div className="hidden-text">
                  <span style={{fontWeight: 'bold'}}>Species: </span>
                  {character.species}
                </div>
                <div className="hidden-text">
                  <span style={{fontWeight: 'bold'}}>Location: </span>
                  {character.origin.name}
                </div>
              </div>
            </div>
            {favorites.favorites.some(favorite => favorite.id === character.id) ?
            <FavoriteIcon className="favorite_icon favourite_icon_selected" onClick={() => handleClick(character)}/>
            :
            <FavoriteBorderIcon className="favorite_icon" onClick={() => handleClick(character)}/>
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;