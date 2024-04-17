import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    px: 8
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name: serviceName, time: bookingTime } = booking;
    const { user } = useAuth();
    const initialBookingInfo = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    const handleBookingData = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = event => {
        // Collect data
        const appointment = {
            ...bookingInfo,
            bookingTime,
            serviceName,
            date
        }
        console.log(appointment);
        axios.post('http://localhost:5000/appointments', appointment)
            .then(res => {
                if(res.data.insertedId){
                    setBookingSuccess(true);
                }
            })
        event.preventDefault();
        handleBookingClose();
    }
    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{ textAlign: 'center', mb: 3 }} style={{ color: '#17d2ba' }} id="modal-modal-title" variant="h6" component="h2">
                    {serviceName}
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        disabled
                        sx={{ width: '100%', my: 2 }}
                        id="outlined-size-small"
                        name="serviceTime"
                        defaultValue={bookingTime}
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '100%', my: 2 }}
                        id="outlined-size-small"
                        name="patientName"
                        onChange={handleBookingData}
                        defaultValue={user.displayName}
                        placeholder='Your Name'
                        size="small"
                        variant="standard"
                        type='text'
                    />
                    <TextField
                        required
                        sx={{ width: '100%', my: 2 }}
                        id="outlined-size-small"
                        name="phone"
                        onChange={handleBookingData}
                        defaultValue=''
                        size="small"
                        variant="standard"
                        placeholder='Phone Number'
                        type='tel'
                    />
                    <TextField
                        disabled
                        sx={{ width: '100%', my: 2 }}
                        id="outlined-size-small"
                        name="email"
                        defaultValue={user.email}
                        size="small"
                        variant="standard"
                        type='email'
                    />
                    <TextField
                        disabled
                        sx={{ width: '100%', my: 2 }}
                        id="outlined-size-small"
                        name="bookingDate"
                        defaultValue={date}
                        size="small"
                        variant="standard"
                    />
                    <Button type='submit' variant="contained" style={{ backgroundColor: '#17d2ba' }} sx={{ px: 5 }}>Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;