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
            setNums(res.data.map(t => t.pickNum))
            setPercs(res.data.map(t => t.perc))
        })
    },[])

    function newPercs() {
        API.getNums()
        .then(res => {
          setPercs(res.data.map(t => t.perc))
        })
    }

    function switchShow() {
        setShow(false)
    }


    return (
        <div className="AllWrapper">
            {show ? <Start switchShow = {switchShow} /> : undefined}
            {!show ? <Game nums = {nums} percs = {percs} newPercs = {newPercs}/> : undefined}
            
        </div>
    )
}

export default Home