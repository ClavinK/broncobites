import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PriceChangeForm from './PriceChangeForm';

const PriceChangePage = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('https://bronco-bites-backend-files-ae95bc7ab207.herokuapp.com/')
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error('Error fetching restaurants:', error);
            });
    }, []);

    return (
        <div>
            {restaurants.length > 0
                ? <PriceChangeForm restaurants={restaurants} />
                : <p>Loading restaurants...</p>
            }
        </div>
    );
};

export default PriceChangePage;
