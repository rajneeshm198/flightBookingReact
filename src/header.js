import React from 'react';
import './header.css';

import FligtLogo from './assets/flight-book-logo.png';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={FligtLogo} alt="Flight Book Logo" width="140px" />
                <h1>Book Your Flight</h1>
            </div>
            <div className="App_Menu">
                <div className="welcomeText">
                    <div className="userInitials">RM</div>
                    <p>Hi, Rajneesh</p>
                </div>
                <div className="mobileViewIcon">
                    <button id="hamburgerIcon" type="button" className="hamburgerIcon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                <nav className="dashboardNavigation">
                    <a href="/dashboard">Home</a>
                    <a href="/contact-us">Contact Us</a>
                    <a href="/feedback/customer-feedback">Feedback</a>
                    <a href="/sales-analytics">Sales Analytics</a>
                    <a href="/sales-analytics">Order History</a>
                    <a href="/login" >Logout</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;
