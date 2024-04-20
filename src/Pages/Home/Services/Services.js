import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavityFilling from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import './Services.css';


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
        <>
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

            {/* Exceptional dental care section */}
            <div>
                <Container sx={{ my: 8, textAlign: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={5}>
                                <img src="https://i.postimg.cc/D0GNg8qn/treatment.png" alt="" style={{ width: '100%', height: '90%' }} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={7} sx={{ my: 2 }}>
                                <div id="dental-care" style={{ paddingLeft: '30px', textAlign: 'left' }} smDown>
                                    <Typography variant='h3' sx={{ fontWeight: 'semi-bold' }}>Exceptional Dental <br />Care, On Your Terms</Typography>
                                    <Typography variant='p' sx={{ color: 'gray', fontSize: '19px', lineHeight: '1.5' }}>
                                        <p>
                                            Maintaining good dental health is crucial for overall well-being. Regular brushing, flossing, and routine dental check-ups are essential practices. Neglecting dental health can lead to various issues, including cavities, gum disease, and bad breath. A balanced diet also contributes to dental health, reducing the risk of tooth decay. Dental health is not only about oral hygiene; it also affects general health. Poor dental health has been linked to heart disease and diabetes. Teaching children good dental habits from an early age sets the foundation for a lifetime of healthy teeth and gums. Therefore, prioritizing dental health is key to a happy and healthy life.
                                        </p>
                                    </Typography>
                                    <br />
                                    <Button variant='contained' sx={{ borderRadius: 0 }} style={{backgroundColor: '#17d2ba'}}>Learn More</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </>
    );
};

export default Services;