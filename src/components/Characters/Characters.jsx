import React, { useState, useReducer, useMemo, useRef, useCallback, useContext } from 'react';
import Search from '../Search/Search';
import CharacterCard from '../CharacterCard/CharacterCard';
import useCharacters from '../../hooks/useCharacters'
import FavoriteContext from "../../context/FavoriteContext";
import './characters.css'

const API = 'https://rickandmortyapi.com/api/character/'

const Characters = () => {
  const {favorites, dispatch} = useContext(FavoriteContext)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  const characters = useCharacters(API)

  const handleClick = favorite => { 
    let type = favorites.favorites.some(value => value.id === favorite.id) ? 'REMOVE_FAVORITE' : 'ADD_TO_FAVORITE'
    dispatch({type, payload: favorite})
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
      <section className="favorite_characters">
        {favorites.favorites.length > 0 && <h1>Favorite Characters</h1>}
        {favorites.favorites.map(favorite => (
          <>
          <li key={`favorite-${favorite.id}`}>
            {favorite.name}
          </li>
          </>
        ))}
      </section>
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
      <section className="characters">
        {filteredUsers.map(character => (
          <CharacterCard character={character} favorites={favorites.favorites} handleClick={handleClick}/>
        ))}
      </section>
    </>
  );
};

export default Characters;