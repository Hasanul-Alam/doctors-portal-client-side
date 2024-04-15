import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavityFilling from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sint modi beatae non aliquam, quia magni perferendis optio voluptatibus consectetur quae iure quos. Odit, repellendus. Doloribus tempore repudiandae voluptates',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sint modi beatae non aliquam, quia magni perferendis optio voluptatibus consectetur quae iure quos. Odit, repellendus. Doloribus tempore repudiandae voluptates',
        image: cavityFilling
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sint modi beatae non aliquam, quia magni perferendis optio voluptatibus consectetur quae iure quos. Odit, repellendus. Doloribus tempore repudiandae voluptates',
        image: whitening
    }
]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Container>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 500, color: 'success.main' }}>
                        OUR SERVICES
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 600, m: 3 }}>
                        Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;