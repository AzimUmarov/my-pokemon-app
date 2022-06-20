import React from 'react';
import Poke from "./Poke";
import "./Pokes.css";

function Pokes({urls}) {
    return (
        <section className="card-list">
            {urls && urls.map((url) =><Poke key={url} url={url}/>)}
        </section>
    );
}

export default Pokes;
