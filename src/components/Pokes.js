import React from 'react';
import Poke from "./Poke";
import "./Pokes.css";

function Pokes({pokes}) {
    return (
        <section className="card-list">
            {pokes && pokes.map((poke) =><Poke key={poke} url={poke.url}/>)}
        </section>
    );
}

export default Pokes;
