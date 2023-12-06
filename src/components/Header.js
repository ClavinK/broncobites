import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';
import Dropdown from './Dropdown';
import ResSlider from './ResSlider';
import './Restaurantlist.css';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const getSortedMenuItems = (menuItems, order) => {
        return [...menuItems].sort((a, b) => {
            return order === 'asc' ? a.price - b.price : b.price - a.price;
        });
    };

    useEffect(() => {
        axios.get('https://broncobites-7f6a4d17acb3.herokuapp.com/')
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error('Error fetching restaurants:', error);
            });
    }, []);

    const handleSelectRestaurant = (restaurantId) => {
        const restaurant = restaurants.find(r => r.id === restaurantId);
        console.log(restaurant);
        setSelectedRestaurant(restaurant);
    };

    const sortedMenu = selectedRestaurant
        ? getSortedMenuItems(selectedRestaurant.menu, sortOrder)
        : [];

    return (
        <>
            <ResSlider onSelectRestaurant={handleSelectRestaurant} />
            <header className="head">
                <h1><span className="calpoly"> Cal Poly Pomona</span> | Restaurants</h1>
            </header>
            <div className="container mt-4" style={{ position: 'relative' }}>
                {selectedRestaurant && (
                    <div className="responsive-container" style={{ position: 'absolute', top: '500%', left: '50%', transform: 'translateX(-50%)', zIndex: '10' }}>
                        <Dropdown
                            label="Sort By Price"
                            options={[
                                { label: 'Price Low to High', value: 'asc' },
                                { label: 'Price High to Low', value: 'desc' }
                            ]}
                            selectedValue={sortOrder}
                            onSelect={value => {
                                setSortOrder(value);
                                setSelectedRestaurant({
                                    ...selectedRestaurant,
                                    menu: getSortedMenuItems(selectedRestaurant.menu, value),
                                });
                            }}
                            id="price-sort-dropdown"
                        />
                        {selectedRestaurant && <Menu restaurant={{ ...selectedRestaurant, menu: sortedMenu }} />}
                    </div>
                )}
            </div>
        </>
    );
}

export default RestaurantList;
