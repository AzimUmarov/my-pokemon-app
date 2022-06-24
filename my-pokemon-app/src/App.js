import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import Pokes from "./components/Pokes";
import Loader from "./components/UI/loader/Loader";
import ErrorHandler from "./components/Utils/ErrorHandler";

function App() {
    const [pokesUrls, setPokesUrls] = useState();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [prevPage, setPrevPage] = useState();
    const [nextPage, setNextPage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setData(url).then(r => r);
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
            .catch(e => {
                alert("Error Occurred, Please check your connection and reload the page");
                return e;
            });
        return () => cancel();
    }

    return (
        <>
            <ErrorHandler>
                <div className="align-items-center position-relative container mt-2 nav-poke">
                    <input className="form-control search-bar w-25  position-absolute top-0 start-0" placeholder="Search..."/>
                    <img className="position-absolute top-0 start-50 translate-middle m-4" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"  alt="poke API logo"/>
                    <ul className="pagination position-absolute top-0 end-0">
                        <li className="page-item "> <button disabled={!prevPage} className="page-link" onClick={() => setUrl(prevPage)}>Previous</button> </li>
                        <li className="page-item"> <button disabled={!nextPage} className="page-link" onClick={() => setUrl(nextPage)}>Next</button> </li>
                    </ul>
                </div>
                {isLoading ? <Loader /> : <Pokes urls={pokesUrls} />}
            </ErrorHandler>
        </>
    );
}

export default App;
