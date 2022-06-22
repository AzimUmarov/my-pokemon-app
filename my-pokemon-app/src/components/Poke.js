import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./Poke.css";
import PokeCard from "./UI/card/PokeCard";

function Poke({url}) {
    const [pokeObject, setPokeObject] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [shows, setShows] = useState(false);
    useEffect(() => {
        setData(url);
    }, [url]);

    async function setData(url){
        setIsLoading(true);
        let cancel = axios.CancelToken.source();
        await axios.get(url,{ cancelToken: cancel.token})
            .then(res => {
                setPokeObject(res.data);
                setIsLoading(false);
            })
            .catch(e => {
            setIsLoading(false);
        });
        return () => cancel();
    }
    if(pokeObject) {
        return (
            <>
                {shows ? <PokeCard pokeObject={pokeObject} shows={shows} setShows={setShows} /> : null}
                <div className={`poke ${pokeObject.types[0].type.name}`} onClick={() => setShows(true)}>
                    <span className="name mt-1">{pokeObject.forms[0].name}</span>
                    <img src={pokeObject.sprites.other.dream_world.front_default} alt="" className="poke-image" />
                    <div className="poke-footer">
                        <span className="number">#{pokeObject.forms[0].url.split("/")[6]}</span>
                        {pokeObject.abilities && pokeObject.abilities.map(val => !val.is_hidden ? <span className="badge text-bg-secondary m-1">{val.ability.name}</span> : null)}
                    </div>
                </div>
            </>
            );
    }
    else {
        return (
            <div className={`poke bug`}>
                <img alt="loading..." className="poke-image" />
                <div className="poke-footer">
                    <span className="number">#000</span>
                    <span className="name">Loading...</span>
                </div>
            </div>
        );
    }
}

export default Poke;