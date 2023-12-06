import React from 'react';
import '../App.css';

function About() {
    return (
        <div className="about-container">
            <div className="about">
                <h2 className="about-text">About Us</h2>
                <p>Welcome to Bronco Bites, the best dining experience on campus for college students! Our mission is to deliver delicious food that satisfies all your cravings for the right price. We do what the offical CPP Restaurants website doesn't: display menu prices.</p>
                <p>We also implemented a form that allows you to submit a price change request because CPP is to lazy to do it themselves!</p>
            </div>
        </div>

    );
}

export default About;