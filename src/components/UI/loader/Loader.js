import React from 'react';
import classes from "./Loader.module.css";

function MyLoader({children}) {
    return (
        <>
            <div className={classes.loader}/>
        </>
    );
}

export default MyLoader;