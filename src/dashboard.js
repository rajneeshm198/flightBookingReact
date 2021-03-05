import React from 'react';
import FlightList from './flightList.js';

import './dashboard.css';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="selectFlight">
                <form>
                    <h1>Travel with Ease</h1>
                    <div className="selectFlightFilter">
                        <div className="destionation">
                            <div className="address">
                                <h5>From</h5>
                                <div className="city">Noida</div>
                                <div className="country">Uttar Pradesh, India</div>
                                <div className="showInput">
                                    <input required type="text" placeholder="From" name="fromDestination" value="Noida" />
                                </div>
                            </div>
                            <div className="directionIcon"></div>
                            <div className="address">
                                <h5>To</h5>
                                <div className="city">Banglore</div>
                                <div className="country">Karnatka, India</div>
                                <div className="showInput">
                                    <input required type="text" placeholder="To" name="toDestination" value="Banglore" />
                                </div>
                            </div>
                        </div>
                        <div className="travelDate">
                            <h5>Select Date</h5>
                            <input type="date" required />
                        </div>
                    </div>
                    <button type="submit" id="showFlight" class="searchFlight">Search Normal Flight</button>
                    <button type="submit" id="showFlight" class="searchBusinessFlight" >Search Business Flight</button>
                </form>
            </div>
            <FlightList></FlightList>
        </section>
    )
}

export default Dashboard;
