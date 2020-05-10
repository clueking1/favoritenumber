import React, { useEffect, useState } from 'react'
import API from '../utils/API'

function Game(props) {
    
    const [rando, setRando] = useState(0)
    const [prev, setPrev] = useState(0)

    const allnums = props.nums
    const weight = props.percs
    let totalweight=eval(weight.join("+"))
    const weighed= [] 
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
        console.log(prev)
        if (prev === rando) {
            weight[Number(rando) - 1] -= 4
            setPrev(rando)
        } else {
            weight[Number(rando) - 1] -= 3
            setPrev(rando)
        }
        
        console.log(weight)
        // API.next({
        //     num: rando
        // })
        // .then(() => {
        //     props.newPercs()     
        // })
    }

    function like() {
        // if (weight[Number(rando) - 1] === 0) {
        //     weight[Number(rando) - 1] = 0
        // } else {
            if (prev === rando) {
                weight[Number(rando) - 1] += 2
                setPrev(rando)
            } else {
                weight[Number(rando) - 1] += 1
                setPrev(rando)
            }
        //}
       
        console.log(weight)
      
        // API.like({
        //     num: rando
        // })
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
                    loop()
                    like()
                }}
                >
                Like</button>
            </div>
            
        </div>
    )
}

export default Game