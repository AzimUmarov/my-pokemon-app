import React from 'react'

const PersentageBar = ({color,percent,height}) => {

    const Parenting = {
        height: height,
        width: '50%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        marginRight: "-100px"
    }

    const Childish = {
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
        <div style={Parenting}>
            <div style={Childish}>
                <span style={text}/>
            </div>
        </div>
    )
}

export default PersentageBar;