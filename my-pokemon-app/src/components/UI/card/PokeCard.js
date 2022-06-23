import React from 'react';
import Styles from "./PokeCard.module.css";

function PokeCard({pokeObject, shows, setShows}) {
    const cardStyles = [Styles.pokeCard];
    if(shows)
        cardStyles.push(Styles.active);

    function openTab(tab) {
        let i;
        let x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(tab).style.display = "block";
    }

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
                    <div className={`w3-bar w3-black`}>
                        <button className={`w3-bar-item w3-button ${Styles.b1}` } onClick={() => openTab("About")}>About</button>
                        <button className={`w3-bar-item w3-button ${Styles.b2}` } onClick={() => openTab("BaseStates")}>Base stats</button>
                        <button className={`w3-bar-item w3-button ${Styles.b3}` } onClick={() => openTab("Moves")}>Moves</button>
                    </div>

                    <div id="About" className="w3-container tab">
                        <strong>
                            Abilities:
                        </strong>
                        <ul>
                            <li>{pokeObject.abilities[0].ability.name}</li>
                            <li>{pokeObject.abilities[1].ability.name}</li>
                        </ul>
                    </div>
                    <div id="BaseStates" style={{color: "#000", marginTop: "2rem", display: "none"}} className="w3-container tab">
                            <p>Type: {pokeObject.types[0].type.name} </p>
                            <p>HP: {pokeObject.stats[0].base_stat}</p>
                            <p>Attack: {pokeObject.stats[1].base_stat} </p>
                            <p>Defense: {pokeObject.stats[2].base_stat}</p>
                            <p>Special attack: {pokeObject.stats[3].base_stat}</p>
                            <p>Special defence: {pokeObject.stats[4].base_stat}</p>
                            <p>Speed: {pokeObject.stats[5].base_stat}</p>
                    </div>
                    <div id="Moves" className={`w3-container tab`} style={{display: "none"}}>
                        <uL>
                        {pokeObject.moves.map( (item, index) =>index < 9 ?  <li className="text-center p-2">
                            <span style={{marginTop: "-10px"}}>{item.move.name.charAt(0).toUpperCase() + item.move.name.slice(1)}: </span> <em style={{marginRight: "-10%"}}>{ item.version_group_details.map( (item, index) => index < 3 ? item.version_group.name.charAt(0).toUpperCase() + item.version_group.name.slice(1).split("-").join(" ") + " "  : null)} </em>
                        </li> : null)}
                        </uL>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokeCard;
