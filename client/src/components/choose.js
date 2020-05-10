import React, { useEffect, useState } from 'react'
import API from '../utils/API'

function Game(props) {

    const [rando, setRando] = useState()

    const allnums = props.nums
    const weight = props.percs
    let totalweight=eval(weight.join("+"))
    const weighed= [] //new array to hold "weighted" fruits
    let current=0

    useEffect(() => loop())

    function pickFrom() {
        setRando(weighed[Math.floor(Math.random() * weighed.length)])
    }
    

    function loop() {
        while (current<allnums.length){ 
            for (let i=0; i<weight[current]; i++)
                weighed[weighed.length]=allnums[current]
              
            current++
            if (current === allnums.length) {
                pickFrom()
                
            }
        }
    }

    function next() {
        console.log(rando)
        API.next({
            num: rando
        })
    }

    return (
        <div className="displayWrapper">
            <div className="number">
            <h3>{rando}</h3>
            </div>
            
            <div className="next">
                <button 
                onClick={() => {
                    current = 0 
                    loop()
                    next()            
                }}
                >
                Next</button>
            </div>
            
            <div className="like">
                <button
                onClick={() => {
                    current = 0 
                    loop()}}
                >
                Like</button>
            </div>
            
        </div>
    )
}

export default Game