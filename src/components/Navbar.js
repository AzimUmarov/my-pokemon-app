import React from 'react';

function Navbar({searching, prevPage, nextPage, setUrl}) {
    return (
        <div className="align-items-center position-relative container mt-2 nav-poke">
            <input className="form-control search-bar w-25  position-absolute top-0 start-0" placeholder="Search..."
                   onChange={((e) => searching(e.target.value))}/>
            <img className="position-absolute top-0 start-50 translate-middle m-4"
                 src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="poke API logo"/>
            <ul className="pagination position-absolute top-0 end-0">
                <li className="page-item ">
                    <button disabled={!prevPage} className="page-link" onClick={() => setUrl(prevPage)}>Previous
                    </button>
                </li>
                <li className="page-item">
                    <button disabled={!nextPage} className="page-link" onClick={() => setUrl(nextPage)}>Next</button>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;