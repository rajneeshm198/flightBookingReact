import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './flightList.css';

import IndigoLogo from '../../assets/indigo.jpg';
import AirAsiaLogo from '../../assets/airasialogo.png';

const FlightList = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        // This useEffect will work on componentDidMount
        axios.get('http://localhost:7010/flights/list')
            .then(res => {
                const { data } = res;
                setFlights(data);
            });
    }, []);

    let flightContainer = null;
    if (flights.length) {
        flightContainer = flights.map((flight, index) => (
            <div className="bookFlightContainer" key={flight.id}>
                <div className="flightDetailsContainer">
                    <div className="flightNameDetails">
                        <div className="flightLogo">
                            <img src={flight.logo.includes('indigo') ? IndigoLogo : AirAsiaLogo} width="20" alt="Air Asia" />
                        </div>
                        <div className="flightName">
                            <p>{flight.company}</p>
                            <p>{flight.id}</p>
                        </div>
                    </div>
                    <div className="flightTimeDetails">
                        <div className="flightTime">
                            <p>{flight.flight_departure_time}</p>
                            <p>{flight.fligt_departure_place}</p>
                        </div>
                        <div className="dashed"></div>
                        <div className="flightTime">
                            <p>{flight.flight_arrival_time}</p>
                            <p>{flight.fligt_arrival_place}</p>
                        </div>
                    </div>
                    <div className="duration">
                        <p>{flight.duration}</p>
                        <p>{flight.stops}</p>
                    </div>
                    <button type="button">Book</button>
                </div>
            </div>
        ))
    }

    return (
        <div style={{ marginTop: '30px', width: '100%'}}>
            {flightContainer}
        </div>
    )
}

export default FlightList;
