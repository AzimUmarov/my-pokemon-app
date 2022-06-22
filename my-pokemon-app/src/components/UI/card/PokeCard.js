import React from 'react';
import Styles from "./PokeCard.module.css";

function PokeCard({pokeObject, shows, setShows}) {
    const cardStyles = [Styles.pokeCard];
    if(shows)
        cardStyles.push(Styles.active);

    return (
        <div className={cardStyles.join(' ')} onClick={() => setShows(false)}>
            <div className={`${Styles.pokeCardContent} ${pokeObject.types[0].type.name} position-relative`} onClick={(e) => e.stopPropagation()}>
                <img src={pokeObject.sprites.other.dream_world.front_default} alt="" className={`position-absolute top-50 start-0 translate-middle ${Styles.cardImage}`}  />
                <div className={Styles.pokeCardId} >
                    {pokeObject.abilities && pokeObject.abilities.map(val => !val.is_hidden ? <span className="badge text-bg-secondary m-1">{val.ability.name}</span> : null)}
                </div>
                <div className={`${Styles.cardBox}`}>
                    <span>{pokeObject.forms[0].url.split("/")[6]}</span>
                    <h2 className={Styles.cardName}>{pokeObject.forms[0].name}</h2>
                </div>
            </div>
        </div>
    );
}

export default PokeCard;
