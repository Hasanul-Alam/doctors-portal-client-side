import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        space: 5
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10.05 AM - 11.30 AM',
        space: 5
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '05.00 PM - 06.30 PM',
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '04.00 PM - 06.00 PM',
        space: 5
    },
    {
        id: 6,
        name: 'Cavity Protection',
        time: '08.00 AM - 09.00 AM',
        space: 5
    },
]

const AvailableAppointments = ({ date }) => {

    const firstFormat = date.toString();
    const organizedDate = new Date(firstFormat).toDateString();

    return (
        <Container>
            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold', my:3 }} style={{ color: '#17d2ba' }}>Available Appoinements on {organizedDate}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={organizedDate}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;