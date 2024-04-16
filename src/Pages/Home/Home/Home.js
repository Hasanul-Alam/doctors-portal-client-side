import React from 'react';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;