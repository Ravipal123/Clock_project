import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import AnalogClock from '../Clock/AnalogClock';
import SpeedControl from '../Clock/SpeedControl';
import ShareButton from '../Clock/ShareButton';
import Quotes from '../Clock/Quotes';

const Clock = ({ isAuthenticated }) => {
    useEffect(() => {
        toast.success("Login Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }, []); 

    const [speed, setSpeed] = useState(1); 

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const initialSpeed = parseFloat(urlParams.get('speed')) || 1;
        setSpeed(initialSpeed);
    }, []);

    console.log(speed);

    return (
        <div className='analog-clock'>
            <h2 style={{color:"gray"}}>Analog Clock</h2>
            <AnalogClock speed={speed} />
            <SpeedControl speed={speed} setSpeed={setSpeed} />
            <ShareButton speed={speed} isAuthenticated={isAuthenticated}/>
            <Quotes />
        </div>
    );
}

export default Clock;
