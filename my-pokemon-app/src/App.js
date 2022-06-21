import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import Pokes from "./components/Pokes";

function App() {
    const [pokesUrls, setPokesUrls] = useState();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [prevPage, setPrevPage] = useState();
    const [nextPage, setNextPage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setData(url);
    }, [url]);

    async function setData(url){
        setIsLoading(true);
        let cancel = axios.CancelToken.source();
        await axios.get(url,{ cancelToken: cancel.token})
            .then(res => {
                setPokesUrls(res.data.results.map(res => res.url));
                setIsLoading(false);
                setPrevPage(res.data.previous);
                setNextPage(res.data.next)
            })
            .catch(e => e);
        return () => cancel();
    }

    return (
        <>
            <div className="align-items-center position-relative container mt-2 nav-poke">
                {/*<h1>.</h1>*/}
                <input className="form-control search-bar w-25  position-absolute top-0 start-0" placeholder="Search..."/>
                <img className="position-absolute top-0 start-50 translate-middle m-4" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
                <ul className="pagination position-absolute top-0 end-0">
                    <li className="page-item "> <button disabled={!prevPage} className="page-link" onClick={() => setUrl(prevPage)}>Previous</button> </li>
                    <li className="page-item"> <button disabled={!nextPage} className="page-link" onClick={() => setUrl(nextPage)}>Next</button> </li>
                </ul>
            </div>
            {isLoading ? <h3>Loading...</h3> : <Pokes urls={pokesUrls} />}
        </>
    );
}

export default App;
