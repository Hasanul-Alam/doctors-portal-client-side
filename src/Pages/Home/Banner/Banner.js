import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1, w: '75%', mx: 'auto' }} style={{ bannerBg }}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{my: 3, color: 'gray', fontWeight: 300, fontSize: 14 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci numquam placeat voluptatibus sunt magnam at, earum doloremque pariatur ullam harum repellat hic perspiciatis ipsum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#17d2ba' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={ verticalCenter }>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;