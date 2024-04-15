import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [formData, setFormData] = useState({});
    const { registerUser, googleSignIn } = useAuth();

    const handleOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);
    }

    const handleRegistrationSubmit = event => {
        const email = formData.email;
        const password = formData.password;
        const password2 = formData.password2;

        if (password === password2) {
            registerUser(email, password);
        }
        else {
            alert('Please carefully put your passwords.');
        }
        event.preventDefault();
    }

    return (
        <Container sx={{ mt: 5, }}>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 3 }} xs={12} sm={12} md={6} lg={6}>
                    <Paper elevation={0} sx={{ p: 7 }}>
                        <Typography variant='h5' gutterBottom sx={{ textAlign: 'center', mb: 5 }} style={{ color: 'gray' }}>
                            Registration
                        </Typography>
                        <form onSubmit={handleRegistrationSubmit}>
                            <TextField
                                sx={{ width: 1, py: 3 }}
                                id="standard-basic"
                                label="Your Email"
                                onChange={handleOnChange}
                                name='email'
                                variant="standard"
                                type="email"
                                required
                            />
                            <TextField
                                sx={{ width: 1, py: 3 }}
                                label="Enter Password"
                                onChange={handleOnChange}
                                name='password'
                                variant="standard"
                                type="password"
                                required
                            />
                            <TextField
                                sx={{ width: 1, py: 3 }}
                                label="Retype Your Password"
                                onChange={handleOnChange}
                                name='password2'
                                variant="standard"
                                type="password"
                                required
                            />
                            <Button type='submit' variant="contained" style={{ backgroundColor: '#17d2ba', width: '100%' }} sx={{ my: 3 }}>Sign Up</Button>
                        </form>
                        <Button onClick={googleSignIn} variant="contained" style={{ backgroundColor: '#17d2ba' }} sx={{ mb: 3 }}>Continue With Google</Button>
                        <br />
                        <NavLink style={{ textDecoration: 'none' }} sx={{}} to='/login'>Already registered?</NavLink>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;