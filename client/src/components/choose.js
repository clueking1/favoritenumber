import React, { useEffect, useState } from 'react'
import API from '../utils/API'


function Game(props) {
    console.log(props)

    return (
        <div className="displayWrapper">
            <div className="number">
            <h3>{}</h3>
            </div>
            
            <div className="next">
                <button>Next</button>
            </div>
            
            <div className="like">
            <button>Like</button>
            </div>
            
        </div>
    )
}

export default Game