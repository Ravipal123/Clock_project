import React, { useState, useEffect } from 'react';

const Quotes = () => {
    const [quote, setQuote] = useState('');

    const category = 'happiness';
    const apiKey = '+NxEAO1dR4Owi5dcuvlEFw==6ZAFez88XW4u3B8d';


    const fetchQuote = async () => {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
                headers: {
                    'X-Api-Key': apiKey
                }
            });
            const data = await response.json();
            if (data.length > 0) {
                setQuote(data[0].quote);
            } else {
                console.error('No quote found for the category:', category);
            }
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    useEffect(() => {
        fetchQuote(); // Fetch quote on mount
        const interval = setInterval(() => {
            fetchQuote();
        }, 5000); 

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="quote">
            <p>{quote}</p>
        </div>
    );
}

export default Quotes;
