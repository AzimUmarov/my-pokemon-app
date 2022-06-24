import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import Pokes from "./components/Pokes";
import Loader from "./components/UI/loader/Loader";
import ErrorHandler from "./components/Utils/ErrorHandler";
import Navbar from "./components/Navbar";

function App() {
    const [pokes, setPokes] = useState();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [prevPage, setPrevPage] = useState();
    const [nextPage, setNextPage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [oldQuery, setOldQuery] = useState("");


    useEffect(() => {
        setData(url).then(r => r);
    }, [url]);

    function searching(query){ // filtering pokemons
        if(oldQuery.length > query.length)
            setData(url).then(r => r);

        setPokes(pokes.filter(poke => poke.name.toLowerCase().includes(query.toLowerCase())));
        setOldQuery(query);
    }

    async function setData(url){ // getting 20 pokemons from url and set in the stats
        setIsLoading(true);
        let cancel = axios.CancelToken.source();
        await axios.get(url,{ cancelToken: cancel.token})
            .then(res => {
                setPokes(res.data.results.map(res => res));
                setIsLoading(false);
                setPrevPage(res.data.previous);
                setNextPage(res.data.next)
            })
            .catch(e => {
                console.log(e.code);
                if(e.code === "ERR_BAD_REQUEST")
                    alert("BAD REQUEST, TRY AGAIN");
                else
                alert("Error Occurred, Please check your connection and reload the page");
                return e;
            });
        return () => cancel();
    }

    return (
            <ErrorHandler>
                <Navbar nextPage={nextPage} prevPage={prevPage} searching={searching} setUrl={setUrl} />
                {isLoading ? <Loader /> : <Pokes pokes={pokes} />}
            </ErrorHandler>
    );
}

export default App;
