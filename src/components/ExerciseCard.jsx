import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
const ExerciseCard = ({ exercise }) => {
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy" />
            <Stack direction="row">

                <Button disabled sx={{ ml: '21px', background: "#fff625", fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercise.bodyPart}
                </Button>
                <Button disabled sx={{ ml: '21px', color: "#fff", background: "#fcc757", fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercise.target}
                </Button>

            </Stack>
            <Typography ml='21px' color='#000' fontSize="24px" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize">
                {exercise.name}
            </Typography>

        </Link>
    )
}

export default ExerciseCard