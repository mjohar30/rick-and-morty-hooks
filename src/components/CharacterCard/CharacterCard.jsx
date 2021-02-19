import React from 'react';
import Emoji from '../Emoji'
import { ReactComponent as FavoriteIcon } from '../../images/favorite.svg'
import { ReactComponent as FavoriteBorderIcon } from '../../images/favorite_border.svg'
import './character-card.css'

const CharacterCard = ({character, favorites, handleClick}) => {
  const emojiStatus = <Emoji 
    symbol={character.status === 'Dead' ? "💀" : character.status === 'Alive' ? "👌" : "❓"}
    label={character.status}
  />
  return (
    <div className="character" key={character.id}>
      <h2>{character.name}</h2>
      <div>
        <img src={character.image} alt={character.name} />
        <div className="hidden-container">
          <div className="hidden-text">
            <span>Status: </span>
            {emojiStatus}
            {character.status}
          </div>
          <div className="hidden-text">
            <span>Gender: </span>
            {character.gender}
          </div>
          <div className="hidden-text">
            <span>Species: </span>
            {character.species}
          </div>
          <div className="hidden-text">
            <span>Location: </span>
            {character.origin.name}
          </div>
        </div>
      </div>
      {favorites.some(favorite => favorite.id === character.id) ?
        <FavoriteIcon className="favorite_icon" onClick={() => handleClick(character)}/>
        :
        <FavoriteBorderIcon className="favorite_icon" onClick={() => handleClick(character)}/>
      }
    </div>
  );
};

export default CharacterCard;