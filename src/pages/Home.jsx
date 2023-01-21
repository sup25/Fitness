import React, { useState } from 'react'
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
    //the reason this state is needed to be in home is beacuse, the changes in this state are
    //going to reflect towards all across our application not just in the serch exercises 
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])
    console.log(bodyPart)

    // if you don't like passing to many props use React context
    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    )
}

export default Home