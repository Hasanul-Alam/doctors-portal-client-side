import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import appointmentBgImg from '../../../images/appointment-bg.png';

const appointmentBanner = {
    background: `url(${appointmentBgImg})`,
    backgroundColor: 'rgba(65,73,92,.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1, textAlign: 'center'}}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <img src={doctor} alt="" style={{ width: 400, marginTop: -95 }} />
                </Grid>
                <Grid xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                    }}>
                    <Box style={{width: '70%'}} >
                        <Typography variant='h6' style={{ color: '#17d2ba' }} sx={{mb: 2}}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }} sx={{lineHeight: '1.5', mb: 2}}>
                            Make an appointment <br/> Today
                        </Typography>
                        <Typography variant='h6' style={{ color: 'white', fontSize: 14, fontWeight: 300 }} sx={{mb: 4}}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quam deleniti aliquid, adipisci dicta voluptatibus laudantium suscipit quo eligendi veritatis?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#17d2ba' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;