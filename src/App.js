import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const app = () => {
    return (
        //sx is for styling
        <Box width='400'
            sx={{ width: { xl: '1488px' } }}
            m='auto'

        >
            {/*render navbar component  */}
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                {/* id below is going to be dynamic */}
                <Route path='/exercise/:id' element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default app