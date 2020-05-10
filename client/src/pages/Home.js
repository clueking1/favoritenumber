import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import Game from '../components/choose'
import Start from '../components/start'

function Home() {

    const [nums, setNums] = useState([])
    const [percs, setPercs] = useState([])
    const [show, setShow] = useState(true)

    useEffect(() => {
        API.getNums()
        .then(res => {
            res.data.map(t => {
                setPercs(t.perc) 
                setNums(t.pickNum)
            })
        })
    },[])

    function switchShow() {
        setShow(false)
    }

   console.log(nums)
    return (
        <div className="AllWrapper">
            {show ? <Start switchShow = {switchShow} /> : undefined}
            {!show ? <Game /> : undefined}
            
        </div>
    )
}

export default Home