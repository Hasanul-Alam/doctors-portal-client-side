import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import loginImg from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [formData, setFormData] = useState({});
    const {loginWithEmailAndPassword} = useAuth();

    const handleOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newLoginData = {...formData};
        newLoginData[field] = value;
        setFormData(newLoginData);
    }

    const handleLoginSubmit = event => {
        const email = formData.email;
        const password = formData.password;
        console.log(email, password);

        loginWithEmailAndPassword(email, password);
        event.preventDefault();
    }
    return (
        <Container sx={{ mt: 5, }}>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 3}} xs={12} sm={12} md={6} lg={6}>
                    <Paper elevation={0} sx={{p:7}}>
                        <Typography variant='h5' gutterBottom sx={{textAlign:'center', mb:5}} style={{color: 'gray'}}>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: 1, py: 3 }}
                                id="standard-basic"
                                label="Your Email"
                                name='email'
                                variant="standard"
                                type="email"
                                onChange={handleOnChange}
                                required
                            />
                            <TextField
                                sx={{ width: 1, py: 3 }}
                                label="Enter Password"
                                name='password'
                                variant="standard"
                                type="password"
                                onChange={handleOnChange}
                                required
                            />
                            <Button type='submit' variant="contained" style={{ backgroundColor: '#17d2ba', width: '100%' }} sx={{ my: 3 }}>Sign In</Button>
                        </form>
                        <NavLink style={{textDecoration:'none'}} sx={{}} to='/register'>Don't have an account?</NavLink>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;