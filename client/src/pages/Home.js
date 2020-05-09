import React, { useEffect } from 'react'
import API from '../utils/API'

function Home() {

    useEffect(() => {
        API.getNums()
        .then(res => console.log(res))
    },[])


    return (
        <div className="displayWrapper">
            <div className="number">
                <h3>3</h3>
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

export default Home