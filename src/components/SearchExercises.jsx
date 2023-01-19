import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'



const SearchExercises = () => {
    const [search, setSearch] = useState('')//sting
    const [exercises, setExercises] = useState([])//array
    const [bodyParts, setBodyParts] = useState([])


    //fetch the catageory as soon as the page load
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            setBodyParts(['all', ...bodyPartsData]);
        }
        //we want to call fetchExercisesData function immediately 
        fetchExercisesData();

    }, [])

    //it is async because we have to fetch some data
    const handleSearch = async () => {
        if (search) {
            // these option(exerciseOption) are going to authorize you to make the request, because we added our own api key
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            console.log(exerciseData)

            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            )
            //once we are done with the search, first we want to clear the search
            setSearch('')
            setExercises(searchedExercises)
        }
    }

    return (
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px">
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb="50px"
                textAlign='center'
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box
                position="relative"
                mb="72px"
            >
                <TextField
                    height="76px"
                    sx={{
                        input:
                        {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    //the search is passed in value because it is empty at first, when you type
                    //the value, it stores it and then setSearch does the other work. 
                    value={search}
                    //setSearch is assign to change all the value to lower case because 
                    //you may pass capital letter and get error.
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />



                <Button className="search-btn" variant="outlined" color="error"
                    sx={{
                        border: '2px solid',
                        textTransform: 'none',
                        width: { lg: '173px', xs: '80px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0px',
                        fontSize: { lg: '20px', xs: '14px' }
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button >
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    p: '20px',
                }}
            >
                {/* prop is set to data */}
                <HorizontalScrollBar data={bodyParts} />
            </Box>
        </Stack>
    )
}

export default SearchExercises