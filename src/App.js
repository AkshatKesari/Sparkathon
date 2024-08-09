import React from 'react';
import MapComponent from './MapComponent';
import StoreCard from './StoreCard';
import './App.css';
import logo from "./walmart-logo-png-6.png"

function App() {
  const locations = [
    { lat: 40.7128, lng: -74.0060, name: 'Walmart New York', address: '123 5th Ave', city: 'New York', state: 'NY', phone: '(555) 123-4567' },
    { lat: 34.0522, lng: -118.2437, name: 'Walmart Los Angeles', address: '456 Hollywood Blvd', city: 'Los Angeles', state: 'CA', phone: '(555) 987-6543' },
    { lat: 41.8781, lng: -87.6298, name: 'Walmart Chicago', address: '789 W Madison St', city: 'Chicago', state: 'IL', phone: '(555) 555-5555' },
    { lat: 29.7604, lng: -95.3698, name: 'Walmart Houston', address: '456 Main St', city: 'Houston', state: 'TX', phone: '(555) 654-3210' },
    { lat: 33.4484, lng: -112.0740, name: 'Walmart Phoenix', address: '789 1st Ave', city: 'Phoenix', state: 'AZ', phone: '(555) 321-6540' }
  ];

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Walmart Logo" />
          </div>
          <div className="navbar-search">
            <input type="text" placeholder="Search everything at Walmart online and in walmart stores" />
            <button className="search-button">
              Search
            </button>
          </div>
          <div className="navbar-links">
            <a href="#"><div className='meta'>Account</div></a>
            <a href="#"><div className='meta'>Orders</div></a>
            <a href="#"><div className='meta'>Cart</div></a>
          </div>
        </nav>
        <h1 className="main-heading">STORE LOCATOR</h1>
      </header>
      <div className="main-content">
        <div id="map">
          <MapComponent locations={locations} />
        </div>
        <div className="card-holder">
          {locations.map((location, index) => (
            <StoreCard key={index} store={location} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
