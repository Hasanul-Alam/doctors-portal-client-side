import { Alert, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import loginImg from '../../../images/login.png';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [formData, setFormData] = useState({});
    const {loginWithEmailAndPassword, error, setUser, setError, setIsLoading} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

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

        loginWithEmailAndPassword(email, password)
        .then(result => {
            setUser(result.user);
            setError('');
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => {
            setIsLoading(false);
        })
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

                        {/* Register Route link if user doesn't have an account */}
                        <NavLink style={{textDecoration:'none'}} sx={{}} to='/register'>Don't have an account?</NavLink>

                        {/* Show error message here. */}
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

export default Login;