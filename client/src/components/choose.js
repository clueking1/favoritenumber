import React, { useEffect, useState } from 'react'
import API from '../utils/API'


function Game() {

    const [nums, setNums] = useState([])
    const [percs, setPercs] = useState([])

    useEffect(() => {
        API.getNums()
        .then(res => {
            res.data.map(t => {
                setPercs(t.perc) 
                setNums(t.pickNum)
            })
        })
    },[])


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