import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { Button, Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';

const DashboardAppointment = () => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}`;
        axios.get(url)
            .then(res => setAppointments(res.data))
            .catch(error => console.log(error))
    }, [user])
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mx: 'auto' }}>
            <Grid item xs={12} md={4} sm={12} lg={4}>
                <Calendar></Calendar>
            </Grid>
            <Grid item xs={12} md={8} sm={12} lg={8} sx={{ textAlign: 'center' }}>
                <h2>Total Appointments {appointments.length}</h2>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Schedule</TableCell>
                                <TableCell align="center">Treatment</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.email ? (appointments.length ? appointments.map(appointment => <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='left' component="th" scope="row">
                                    {appointment.patientName}
                                </TableCell>
                                <TableCell align="center">{appointment.bookingTime}</TableCell>
                                <TableCell align="center">{appointment.serviceName}</TableCell>
                                <TableCell align="center">
                                    <Button variant='contained' color='error' sx={{ mx: '10px' }}>Delete</Button>
                                    <Button variant='contained' color='success'>Approve</Button>
                                </TableCell>
                            </TableRow>) : null) : null}
                            {/* {console.log(user.email, appointments.length)} */}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default DashboardAppointment;