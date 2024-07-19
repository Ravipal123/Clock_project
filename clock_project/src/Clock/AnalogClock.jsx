import React, { useState } from 'react'
import { useEffect } from 'react';

const AnalogClock = ({speed}) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((preTime) => new Date(preTime.getTime() - 1000*speed));
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [speed]);

    const secondsDegrees = ((time.getSeconds()/60)*360)*-1;
    const minutesDegrees = ((time.getMinutes()/60)*360)*-1;
    const hoursDegrees = ((time.getHours()/12)*360)*-1;

    return (
        <>
            <div className="clock">
                <div className="clock-face">
                    <div className="hand hour-hand" style={{transform: `rotate(${hoursDegrees}deg)`}}/>
                    <div className="hand minute-hand" style={{transform: `rotate(${minutesDegrees}deg)`}}/>
                    <div className="hand second-hand" style={{transform: `rotate(${secondsDegrees}deg)`}}/>
                </div>
            </div>
        
        </>
    )
}

export default AnalogClock
