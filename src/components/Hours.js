import React from 'react';
import Clock from './Clock.js'
import '../App.css';
import carls from '../images/carls.png';
import panda from '../images/panda.jpg';
import saddles from '../images/saddles.jpg';
import subway from '../images/subway.jpg';
import roundtable from '../images/roundtable.png';
import qdoba from '../images/qdoba1.jpg';
import bric from '../images/bricbreak.jpg';
import starbucks from '../images/starbucks.png';
import polly from '../images/polly.png';
import fit from '../images/fitbites.png';
import hibachi from '../images/hibachi.jpg';
import ig from '../images/ig.jpg';
import freshesc from '../images/freshesc.jpg';
import sushi from '../images/sushibar.jpg';

function RestaurantHours() {
  const hours = [
    { open1: 'Monday-Thursday', time: '7:30 AM - 7:00 PM' },
    { open2: 'Friday', time: '8:30 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },

  ];
  const subwayHours = [
    { open1: 'Monday-Thursday', time: '8:30 AM - 7:00 PM' },
    { open2: 'Friday', time: '7:30 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const qdobaHours = [
    { open1: 'Monday-Thursday', time: '11:00 AM - 7:00 PM' },
    { open2: 'Friday', time: '11:00 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const roundtableHours = [
    { open1: 'Monday-Thursday', time: '11:00 AM - 9:00 PM' },
    { open2: 'Friday', time: '11:00 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const hibachiHours = [
    { open1: 'Monday-Thursday', time: '10:00 AM - 6:00 PM' },
    { open2: 'Friday', time: '10:00 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const carlHours = [
    { open1: 'Monday-Thursday', time: '8:00 AM - 7:00 PM' },
    { open2: 'Friday', time: '8:00 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const polytrolleyHours = [
    { open1: 'Monday-Thursday', time: '8:00 AM - 2:00 PM' },
    { open2: 'Friday', time: 'Closed' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const pandaHours = [
    { open1: 'Monday-Thursday', time: '10:00 AM - 8:00 PM' },
    { open2: 'Friday', time: '10:00 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const sushiHours = [
    { open1: 'Monday-Thursday', time: '8:00 AM - 7:00 PM' },
    { open2: 'Friday', time: '8:00 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const freshHours = [
    { open1: 'Monday-Thursday', time: '10:00 AM - 5:00 PM' },
    { open2: 'Friday', time: '10:00 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const groundsHours = [
    { open1: 'Monday-Thursday', time: '8:00 AM - 8:00 PM' },
    { open2: 'Friday', time: '8:00 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const bricHours = [
    { open1: 'Monday-Thursday', time: '10:00 AM - 6:00 PM' },
    { open2: 'Friday', time: '10:00 AM - 2:00 PM' },
    { weekend1: 'Saturday-Sunday', time: 'Closed' },
  ];
  const starbucksHours = [
    { open1: 'Monday-Thursday', time: '7:30 AM - 9:00 PM' },
    { open2: 'Friday', time: '7:30 AM - 4:00 PM' },
    { weekend1: 'Saturday-Sunday', time: '11:00 AM - 5:00 PM' },
  ];
  const fitbitHours = [
    { open1: 'Monday-Friday', time: '11:00 AM - 10:00 PM' },
    { weekend1: 'Saturday-Sunday', time: '3:00 PM - 8:00 PM' },
  ];


  return (
    <div className="hours-container">
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Saddles <img src={saddles} /></h3>
          {hours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Subway <img src={subway} /></h3>
          {subwayHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Round Table <img src={roundtable} /></h3>
          {roundtableHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Qdoba <img src={qdoba} /></h3>
          {qdobaHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Hibachi San <img src={hibachi} /></h3>
          {hibachiHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Panda Express <img src={panda} /></h3>
          {pandaHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">International Grounds <img src={ig} /></h3>
          {groundsHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Fresh Escape <img src={freshesc} /></h3>
          {freshHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Sushi Bar <img src={sushi} /></h3>
          {sushiHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Starbucks <img src={starbucks} /></h3>
          {bricHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">FitBites <img src={fit} /></h3>
          {fitbitHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Poly Trolley 2 <img src={polly} /></h3>
          {polytrolleyHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-logo">
        <ul className="list-unstyled">
          <h3 className="resHours">Bric Break <img src={bric} /></h3>
          {bricHours.map((hour, index) => (
            <li key={index}>
              <strong>{[hour.open1, hour.open2, hour.weekend1]}:</strong> {hour.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantHours;