import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';

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



const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const handleBookSubmit = event => {
        alert('Form is submitted successfully.');
        event.preventDefault();
        handleBookingClose();
    }
    const { name, time } = booking;
    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{textAlign:'center', mb: 3}} style={{color: '#17d2ba'}} id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleBookSubmit}>
                    <TextField
                        disabled
                        sx={{width: '100%', my: 2}}
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        required
                        sx={{width: '100%', my: 2}}
                        id="outlined-size-small"
                        placeholder='Your Name'
                        size="small"
                        variant="standard"
                        type='text'
                    />
                    <TextField
                        required
                        sx={{width: '100%', my: 2}}
                        id="outlined-size-small"
                        defaultValue=''
                        size="small"
                        variant="standard"
                        placeholder='Phone Number'
                        type='number'
                    />
                    <TextField
                        disabled
                        sx={{width: '100%', my: 2}}
                        id="outlined-size-small"
                        defaultValue='Email'
                        size="small"
                        variant="standard"
                        type='email'
                    />
                    <TextField
                        disabled
                        sx={{width: '100%', my: 2}}
                        id="outlined-size-small"
                        defaultValue={date}
                        size="small"
                        variant="standard"
                    />
                    <Button type='submit' variant="contained" style={{ backgroundColor: '#17d2ba' }} sx={{px: 5}}>Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;