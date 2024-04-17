import { Button, Grid, Paper } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={6} lg={4} sx={{ textAlign: 'center', my: 2, }}>
                <Paper elevation={3} sx={{ py: 4 }}>
                    <Typography variant="h5" gutterBottom style={{ color: '#17d2ba' }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} spaces available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" style={{ backgroundColor: '#17d2ba' }} sx={{ mt: 2 }}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;