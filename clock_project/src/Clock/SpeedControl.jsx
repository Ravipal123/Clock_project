import React from 'react'

const SpeedControl = ({speed, setSpeed}) => {

    // console.log(speed);
    const handleSpeed = (e) => {
        setSpeed(Number(e.target.value));
    }
    return (
        <div className='speed-box'>
            <label>Speed: </label>
            <input
                className='speed-control'
                type='range'
                min='0.1'
                max='5'
                step='0.1'
                value={speed}
                onChange={handleSpeed}
            />
            <span>{speed}</span>
        </div>
    )
}

export default SpeedControl
