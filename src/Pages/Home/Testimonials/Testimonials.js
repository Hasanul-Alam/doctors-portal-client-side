import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Testimonials.css';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    smallAvatar: {
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: -35,
        left: '50%',
        transform: 'translateX(-50%)',
        border: '2px solid #ffffff',
    },
};

const Testimonials = () => {
    return (
        <>
            <Container id='testimonial-container'>
                <Typography variant='h6' sx={{ color: '#17d2ba' }}>TESTIMONIAL</Typography>
                <Typography variant='h3' sx={{}}>What's Our Patients <br id='breakpoints'/> Says</Typography>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={4} md={6} sm={12} sx={{mt: 2}}>
                            <Card style={styles.card}>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, provident illum voluptates ducimus magnam doloribus corporis nostrum beatae voluptatibus perferendis.
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <img src="https://i.postimg.cc/nzJtcj9N/people-1.png" alt="" />
                                        </Grid>
                                        <Grid item xs={8} sx={{ mt: 2 }}>
                                            <Typography variant='h6' sx={{ color: '#17d2ba' }}>Willson Henry</Typography>
                                            <Typography variant='address'>California</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4} md={6} sm={12} sx={{mt: 2}}>
                            <Card style={styles.card}>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, provident illum voluptates ducimus magnam doloribus corporis nostrum beatae voluptatibus perferendis.
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <img src="https://i.postimg.cc/nzJtcj9N/people-1.png" alt="" />
                                        </Grid>
                                        <Grid item xs={8} sx={{ mt: 2 }}>
                                            <Typography variant='h6' sx={{ color: '#17d2ba' }}>Willson Henry</Typography>
                                            <Typography variant='address'>California</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4} md={6} sm={12} sx={{mt: 2}}>
                            <Card style={styles.card}>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, provident illum voluptates ducimus magnam doloribus corporis nostrum beatae voluptatibus perferendis.
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <img src="https://i.postimg.cc/nzJtcj9N/people-1.png" alt="" />
                                        </Grid>
                                        <Grid item xs={8} sx={{ mt: 2 }}>
                                            <Typography variant='h6' sx={{ color: '#17d2ba' }}>Willson Henry</Typography>
                                            <Typography variant='address'>California</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
};

export default Testimonials;