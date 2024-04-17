import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
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
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const firstFormat = date.toString();
    const organizedDate = new Date(firstFormat).toDateString();

    const handleModalClose = () => {
        setBookingSuccess(false);
    };

    return (
        <Container>
            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold', my: 3 }} style={{ color: '#17d2ba' }}>Available Appoinements on {organizedDate}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={organizedDate}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
            {/* Open dialog for successfully registration */}
            {bookingSuccess && <Dialog
                open={bookingSuccess}
                onClose={handleModalClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Congratulations!! Your appointment is booked successfully.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose} autoFocus>
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>}
        </Container>
    );
};

export default AvailableAppointments;