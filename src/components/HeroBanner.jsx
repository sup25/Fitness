import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import banner from '../assets/images/banner.jpg';
const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }}
            position='relative'
            p='20px'
        >
            <Typography
                color='#FF2625'
                fontWeight="600"
                fontSize='26px'
            >
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                mt='30px'
                mb='23px'
            >
                Decide. Commit.<br />
                Succeed.
            </Typography>
            <Typography
                fontSize='22px'
                lineHight="35px"
                mb={4}
            >
                Check out the most effictive exercises
            </Typography>
            <Button href="exercises" variant="outlined" color="error">Exoplore Exercises</Button>
            <Typography
                fontWeight={600}
                color='#ff2625'
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize="200px"
            >
                Exercise
            </Typography>

            <img src={banner} alt="hero-banner" className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner