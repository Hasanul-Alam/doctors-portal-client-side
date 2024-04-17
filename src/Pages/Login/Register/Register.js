import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import loginImg from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const { registerUser, googleSignIn, isLoading, user, error, setError, auth, setUser, setIsLoading } = useAuth();

    

    const handleFormData = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);
    }

    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        const name = formData.name;
        const email = formData.email;
        const password = formData.password;
        const password2 = formData.password2;

        if (password === password2 && !user) {
            registerUser(email, password, name, navigate)
                .then(result => {
                    const newUser = { email, displayName: name }
                    setUser(newUser);
                    setError('');

                    // Send name to firebase after creation
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {

                    }).catch((error) => {
                        setError(error.message);
                    });
                })
                .catch(error => {
                    setError(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                    navigate('/');
                })
        }
        else if (user) {
            setError('You already registered with this email.');
        }
        else {
            setError('Please carefully put your passwords.');
        }
    }



    return (
        <Container sx={{ mt: 5, }}>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 3 }} xs={12} sm={12} md={6} lg={6}>
                    <Paper elevation={0} sx={{ p: 7 }}>
                        <Typography variant='h5' gutterBottom sx={{ textAlign: 'center', mb: 5 }} style={{ color: 'gray' }}>
                            Registration
                        </Typography>
                        {isLoading ? <div style={{ textAlign: 'center' }}><CircularProgress /></div> : <form onSubmit={handleRegistrationSubmit}>
                            <TextField
                                sx={{ width: 1, py: 3 }}
                                label="Your Name"
                                onBlur={handleFormData}
                                name='name'
                                variant="standard"
                                type="text"
                                required
                            />
                            <TextField
                                sx={{ width: 1, py: 3 }}
                                label="Your Email"
                                onBlur={handleFormData}
                                name='email'
                                variant="standard"
                                type="email"
                                required
                            />
                            <TextField
                                sx={{ width: 1, py: 3 }}
                                label="Enter Password"
                                onBlur={handleFormData}
                                name='password'
                                variant="standard"
                                type="password"
                                required
                            />
                            <TextField
                                sx={{ width: 1, py: 3 }}
                                label="Retype Your Password"
                                onBlur={handleFormData}
                                name='password2'
                                variant="standard"
                                type="password"
                                required
                            />
                            <Button type='submit' variant="contained" style={{ backgroundColor: '#17d2ba', width: '100%' }} sx={{ my: 3 }}>Sign Up</Button>
                            <Button onClick={googleSignIn} variant="contained" style={{ backgroundColor: '#17d2ba' }} sx={{ mb: 3 }}>Continue With Google</Button>
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} sx={{}} to='/login'>Already registered?</NavLink>
                        </form>}
                        {error && <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>}

                        

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