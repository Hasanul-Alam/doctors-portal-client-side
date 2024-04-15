import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, marginTop: '50px', textAlign:'center'}}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6} sx={{}}>
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <img src={chair} alt="" style={{width: '85%'}}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentHeader;