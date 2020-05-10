import React from 'react'



function Start(props) {

    return (
        <div className="startWrapper">
            <div className="number">
            <h3>Push Start to play!</h3>
            </div>
            
            <div className="next">
                <button onClick={() => props.switchShow()}>Start</button>
            </div>
     
        </div>
    )
}

export default Start