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
                <div className={`${Styles.cardBox}`}>
                    <span>{pokeObject.forms[0].url.split("/")[6]}</span>
                    <h2 className={Styles.cardName}>{pokeObject.forms[0].name}</h2>
                    {/*<div className={Styles.pokeCardId} >*/}
                    {/*    {pokeObject.abilities && pokeObject.abilities.map(val => !val.is_hidden ? <p>{val.ability.name}</p> : null)}*/}
                    {/*</div>*/}

                        <div style={{color: "#000", marginTop: "2rem"}}>
                            <h3 className="text-center">Base stats</h3>
                            <p>Type: {pokeObject.types[0].type.name}</p>
                            <p>HP: {pokeObject.stats[0].base_stat}</p>
                            <p>Attack: {pokeObject.stats[1].base_stat}</p>
                            <p>Defense: {pokeObject.stats[2].base_stat}</p>
                            <p>special-attack: {pokeObject.stats[3].base_stat}</p>
                            <p>special-defence: {pokeObject.stats[4].base_stat}</p>
                            <p>speed: {pokeObject.stats[5].base_stat}</p>
                        </div>
                    {/*<strong>*/}
                        {/*Abilities:*/}
                    {/*</strong>*/}
                    {/*<ul>*/}
                    {/*    <li>{pokeObject.abilities[0].ability.name}</li>*/}
                    {/*    <li>{pokeObject.abilities[1].ability.name}</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        </div>
    );
}

export default PokeCard;
