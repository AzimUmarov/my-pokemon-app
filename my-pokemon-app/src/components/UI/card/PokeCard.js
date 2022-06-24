import React from 'react';
import Styles from "./PokeCard.module.css";
import PersentageBar from "../bar/PersentageBar";

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
    if(!pokeObject)
        return null;
    return (
        <div className={cardStyles.join(' ')} onClick={() => setShows(false)}>
            <div className={`${Styles.pokeCardContent} ${pokeObject.types[0].type.name} position-relative`} onClick={(e) => e.stopPropagation()}>
                <img src={pokeObject.sprites.other.dream_world.front_default} alt="" className={`position-absolute top-50 start-0 translate-middle ${Styles.cardImage}`}  />
                <div className={`${Styles.cardBox}`}>
                    <span>{pokeObject.forms[0].url.split("/")[6]}</span>
                    <h2 className={Styles.cardName}>{pokeObject.forms[0].name}</h2>
                    <div className={`w3-bar w3-black`}>
                        <button className={`w3-bar-item w3-button ${Styles.b1}` } onClick={() => openTab("About")}>About</button>
                        <button className={`w3-bar-item w3-button ${Styles.b2}` } onClick={() => openTab("BaseStates")}>Base stats</button>
                        <button className={`w3-bar-item w3-button ${Styles.b3}` } onClick={() => openTab("Moves")}>Moves</button>
                    </div>

                    <div id="About" className="w3-container tab p-3 m-4">
                        <strong>
                            Abilities:
                        </strong>
                        <ul style={{listStyle: "circle outside none"}}>
                            { pokeObject.abilities.map( item =>
                            <li className="badge text-bg-dark m-2 p-2">{item.ability.name}</li>
                                )}
                        </ul>
                        <strong className="m-4"> Height: {pokeObject.height} cm</strong>
                        <strong> Weight: {pokeObject.weight} kg</strong>
                        <br />

                        <h4 style={{color: "#000"}} className="m-5" >
                            Types:
                        </h4>
                        <ul style={{listStyle: "circle outside none"}}>
                            { pokeObject.types.map( item =>
                                <li className="badge text-bg-info m-2 p-2">{item.type.name}</li>
                            )}
                        </ul>
                    </div>
                    <div id="BaseStates"  style={{color: "#000", marginTop: "2rem", display: "none"}} className={`${Styles.progress} w3-container tab`}>
                            <p>HP: {pokeObject.stats[0].base_stat} %     <PersentageBar color="orange" percent={pokeObject.stats[0].base_stat}  height={10} /></p>
                            <p>Attack: {pokeObject.stats[1].base_stat}  % <PersentageBar color="orange" percent={pokeObject.stats[1].base_stat}  height={10} /></p>
                            <p>Defense: {pokeObject.stats[2].base_stat} % <PersentageBar color="orange" percent={pokeObject.stats[2].base_stat}  height={10} /></p>
                            <p>Special attack: {pokeObject.stats[3].base_stat} % <PersentageBar color="orange" percent={pokeObject.stats[3].base_stat}  height={10} /></p>
                            <p>Special defence: {pokeObject.stats[4].base_stat} % <PersentageBar color="orange"percent={pokeObject.stats[4].base_stat}  height={10} /></p>
                            <p>Speed: {pokeObject.stats[5].base_stat} % <PersentageBar color="orange"percent={pokeObject.stats[5].base_stat}  height={10} /></p>
                    </div>
                    <div id="Moves" className={`w3-container tab`} style={{display: "none"}}>
                        <uL style={{listStyle: "circle outside none"}}>
                        {pokeObject.moves.map( (item, index) =>index < 9 ?  <li className="text-center p-2" >
                            <span style={{marginTop: "-10px"}}>{item.move.name.charAt(0).toUpperCase() + item.move.name.slice(1)}: </span> <em style={{marginRight: "-10%"}} >{ item.version_group_details.map( (item, index) => (index < 3 && (index !== 2 || item.version_group.name.length < 15)) ? item.version_group.name.charAt(0).toUpperCase() + item.version_group.name.slice(1).split("-").join(" ") + " "  : null)} </em>
                        </li> : null)}
                        </uL>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokeCard;
