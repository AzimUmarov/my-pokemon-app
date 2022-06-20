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
            <ul className="pagination container ">
                <li className="page-item"> <button disabled={!prevPage} className="page-link" onClick={() => setUrl(prevPage)}>Previous</button> </li>
                <li className="page-item"> <button disabled={!nextPage} className="page-link" onClick={() => setUrl(nextPage)}>Next</button> </li>
            </ul>
            {isLoading ? <h3>Loading...</h3> : <Pokes urls={pokesUrls} />}
        </>
    );
}

export default App;
