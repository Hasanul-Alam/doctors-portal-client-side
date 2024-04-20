import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = event => {
        setEmail(event.target.value)
    }
    const handleAdminSubmit = event => {
        const user = {email}
        axios.put('http://localhost:5000/users/admin', user)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        event.preventDefault();
    }
    return (
        <div style={{textAlign: 'center'}}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleAdminSubmit}
            >
                <TextField
                    label="Email"
                    type='email'
                    name='email'
                    variant="standard"
                    required
                    onBlur={handleOnBlur}
                />
                <br />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </Box>
        </div>
    );
};

export default MakeAdmin;