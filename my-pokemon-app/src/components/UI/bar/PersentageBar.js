
import React from 'react'

const Progress_bar = ({color,percent,height}) => {

    const Parentdiv = {
        height: height,
        width: '50%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        marginRight: "-100px"
    }

    const Childdiv = {
        height: '100%',
        width: `${percent}%`,
        backgroundColor: color,
        borderRadius:40,
    }

    const text = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={text}></span>
            </div>
        </div>
    )
}

export default Progress_bar;