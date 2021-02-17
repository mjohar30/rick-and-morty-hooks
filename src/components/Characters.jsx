import React, { useState, useEffect } from 'react';
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

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  console.log('characters', characters)

  return (
    <div className="characters">
      {characters.map(character => (
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
        </div>
      ))}
    </div>
  );
};

export default Characters;