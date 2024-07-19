import React from 'react'
import { toast } from 'react-toastify';

const ShareButton = ({speed, isAuthenticated}) => {
    const handleShare = () => {
        if (!isAuthenticated) {
            toast.error("Please log in to share the clock");
            window.location.href = "/"; 
            return;
        }

        const url = `${window.location.origin}/clock?speed=${speed}`;

        navigator.clipboard.writeText(url.toString())
        .then(() => {
            toast.success("Copied to clipboard", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    };

    return (
        <button 
            className='sharebutton'
            onClick={handleShare}
        >Share</button>
    )
}

export default ShareButton
